package firebase.firestore

import commonshr.CollectionWrap
import commonshr.properties.ROProp
import commonshr.properties.ScalarArrayProp
import firebase.HasDb

data class QuerySettings(
    val order: List<OrderBy> = emptyList(),
    val where: List<Where> = emptyList(),
    val limit: List<Limit> = emptyList()
) {

    class Where(
        val path: String,
        val op: WhereOp,
        val param: dynamic
    )

    class OrderBy(
        val path: String,
        val dir: OrderDirection = OrderDirection.Asc
    )

    class Limit(
        val count: Int
    )

    enum class OrderDirection {
        Asc,
        Desc
    }

    enum class WhereOp {
        Eq,
        ArrayContains,
    }

    fun asc(path: String) = copy(
        order = order + OrderBy(path)
    )
    fun desc(path: String) = copy(
        order = order + OrderBy(path, OrderDirection.Desc)
    )

    fun where(wh: Where) = copy(
        where = where + wh
    )

    fun limit(wh: Limit) = copy(
        limit = limit + wh
    )

    fun where(path: String, op: WhereOp, param: dynamic) = where(
        Where(path, op, param)
    )

    fun limit(count: Int) = limit(Limit(count))

    fun eq(path: String, value: dynamic) = where(path, WhereOp.Eq, value)
    fun arrayContains(path: String, value: dynamic) = where(path, WhereOp.ArrayContains, value)

}

interface QuerySettingsBuilder<T> {
    var settings: QuerySettings

    infix fun <P> ScalarArrayProp<T, P>.arrayContains(v: P) {
        settings = settings.arrayContains(name, writeElement(v, FsDynamicOps))
    }
    infix fun <P> ROProp<T, P>.eq(v: P) {
        settings = settings.eq(name, write(v, FsDynamicOps))
    }
    fun limit(count: Int) {
        settings = settings.limit(count)
    }
    val ROProp<T, *>.asc: Unit get() { settings = settings.asc(name) }
    val ROProp<T, *>.desc: Unit get() { settings = settings.desc(name) }
}

fun <T> querySettings(fn: QuerySettingsBuilder<T>.() -> Unit): QuerySettings {
    return object: QuerySettingsBuilder<T> {
        override var settings = QuerySettings()
    }.apply(fn).run {
        settings
    }
}

fun Query.apply(orderBy: QuerySettings.OrderBy): Query {
    return orderBy(
        orderBy.path,
        when (orderBy.dir) {
            QuerySettings.OrderDirection.Asc -> "asc"
            QuerySettings.OrderDirection.Desc -> "desc"
        }
    )
}

fun Query.apply(where: QuerySettings.Where): Query {
    return where(
        where.path,
        when (where.op) {
            QuerySettings.WhereOp.Eq -> "=="
            QuerySettings.WhereOp.ArrayContains -> "array-contains"
        },
        where.param
    )
}

fun Query.apply(limit: QuerySettings.Limit): Query {
    return limit(
        limit.count
    )
}

fun Query.apply(settings: QuerySettings) =
    this
        .let { t ->
            settings.order.fold(t) { q, o -> q.apply(o) }
        }
        .let { t ->
            settings.where.fold(t) { q, o -> q.apply(o) }
        }
        .let { t ->
            settings.limit.fold(t) { q, o -> q.apply(o) }
        }

typealias TypedQuery<T> = Query
typealias TypedCollectionReference<T> = CollectionReference
typealias TypedDocumentReference<T> = DocumentReference
typealias TypedQueryDocumentSnapshot<T> = QueryDocumentSnapshot

fun <T> CollectionWrap<T>.query(
    deps: HasDb,
    query: QuerySettingsBuilder<T>.() -> Unit = {}
): TypedQuery<T> = collectionRef(deps).apply(querySettings(query))




