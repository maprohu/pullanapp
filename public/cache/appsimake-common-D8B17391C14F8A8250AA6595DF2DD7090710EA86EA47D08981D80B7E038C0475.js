if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-common'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-common'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-common'.");
}
this['appsimake-common'] = function (_, Kotlin, $module$appsimake_commonshr, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CsKillsApi = $module$appsimake_commonshr.commonshr.CsKillsApi;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var once = $module$appsimake_commonshr.commonshr.once_yo2cq0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var List = Kotlin.kotlin.collections.List;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var join = $module$appsimake_commonshr.killable.join_yzxo1x$;
  var produce = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.produce_f6xzli$;
  var ListEvent$Add = $module$appsimake_commonshr.commonshr.ListEvent.Add;
  var ListEvent$Move = $module$appsimake_commonshr.commonshr.ListEvent.Move;
  var ListEvent$Remove = $module$appsimake_commonshr.commonshr.ListEvent.Remove;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  var Var = $module$appsimake_commonshr.rx.Var;
  var killable = $module$appsimake_commonshr.killable;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  var SetAdded = $module$appsimake_commonshr.commonshr.SetAdded;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var SetRemoved = $module$appsimake_commonshr.commonshr.SetRemoved;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var killables = $module$appsimake_commonshr.killable.killables_yzxo1x$;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var common = $module$appsimake_commonshr.common;
  var Some = $module$appsimake_commonshr.common.Some;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var throwCCE = Kotlin.throwCCE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  ListenableMutableList.prototype = Object.create(AbstractMutableList.prototype);
  ListenableMutableList.prototype.constructor = ListenableMutableList;
  StateMachine$AlreadyShutdown.prototype = Object.create(State.prototype);
  StateMachine$AlreadyShutdown.prototype.constructor = StateMachine$AlreadyShutdown;
  Schema.prototype = Object.create(Enum.prototype);
  Schema.prototype.constructor = Schema;
  function Annotation() {
    return {};
  }
  function CsKillsApiCommon() {
  }
  CsKillsApiCommon.prototype.events_9fvrrk$ = function ($receiver) {
    return events($receiver, this);
  };
  CsKillsApiCommon.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsKillsApiCommon',
    interfaces: [CsKillsApi]
  };
  function Coroutine$hash($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$hash.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$hash.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$hash.prototype.constructor = Coroutine$hash;
  Coroutine$hash.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.crypto.subtle.digest('SHA-256', this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var hashBuffer = this.result_0;
            var uint8 = new Uint8Array(hashBuffer);
            return get_escape(String.fromCharCode.apply(null, uint8));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function hash($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$hash($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function get_escape($receiver) {
    return replace(window.btoa($receiver), 47, 45);
  }
  function onResize$lambda$lambda(closure$listeners) {
    return function (it) {
      closure$listeners.fire();
      return Unit;
    };
  }
  function onResize$lambda() {
    var listeners = new Listeners();
    window.onresize = onResize$lambda$lambda(listeners);
    return listeners;
  }
  var onResize;
  function get_onResize() {
    return onResize.value;
  }
  function resizeEvent($receiver, fn) {
    $receiver.window.setTimeout(fn, 0);
    fn();
    return get_onResize().add_o14v8n$(fn);
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function insertAt($receiver, position, element) {
    var length = $receiver.children.length;
    if (!(position <= length)) {
      var message = 'Requested position: ' + position + ' is more than length: ' + length;
      throw IllegalArgumentException_init(message.toString());
    }
    if (length === position) {
      $receiver.appendChild(element);
    }
     else {
      $receiver.insertBefore(element, $receiver.children.item(position));
    }
  }
  function insertAt_0($receiver, position, element) {
    var length = $receiver.childNodes.length;
    if (!(position <= length)) {
      var message = 'Requested position: ' + position + ' is more than length: ' + length;
      throw IllegalArgumentException_init(message.toString());
    }
    if (length === position) {
      $receiver.appendChild(element);
    }
     else {
      $receiver.insertBefore(element, $receiver.childNodes.item(position));
    }
  }
  function removeAt($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.children.item(position)));
  }
  function removeAt_0($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.childNodes.item(position)));
  }
  function replaceAt($receiver, position, element) {
    $receiver.replaceChild(ensureNotNull($receiver.children.item(position)), element);
  }
  function removeFromParent($receiver) {
    var tmp$;
    (tmp$ = $receiver.parentElement) != null ? tmp$.removeChild($receiver) : null;
  }
  function replaceWith($receiver, node) {
    var $receiver_0 = ensureNotNull($receiver.parentNode);
    $receiver_0.insertBefore(node, $receiver);
    $receiver_0.removeChild($receiver);
  }
  function attachEnabler$lambda(this$attachEnabler) {
    return function ($receiver, en) {
      if (en) {
        removeClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'pointer';
      }
       else {
        addClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'default';
      }
      return Unit;
    };
  }
  function attachEnabler($receiver, ks, enabled) {
    enabled.forEach_aaomyj$(ks, attachEnabler$lambda($receiver));
  }
  function linkedIterable$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.closure$first = closure$first;
  }
  function linkedIterable$ObjectLiteral$iterator$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.current = closure$first;
  }
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
    var tmp = this.current;
    if (tmp == null) {
      throw NoSuchElementException_init();
    }
     else {
      this.current = this.closure$next(tmp);
      return tmp;
    }
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.current != null;
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  linkedIterable$ObjectLiteral.prototype.iterator = function () {
    return new linkedIterable$ObjectLiteral$iterator$ObjectLiteral(this.closure$next, this.closure$first);
  };
  linkedIterable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterable]
  };
  function linkedIterable(first, next) {
    return new linkedIterable$ObjectLiteral(next, first);
  }
  function listen$lambda(this$listen, closure$type, closure$fn) {
    return function () {
      this$listen.removeEventListener(closure$type, closure$fn);
      return Unit;
    };
  }
  function listen($receiver, type, fn) {
    $receiver.addEventListener(type, fn);
    return once(listen$lambda($receiver, type, fn));
  }
  function listenAs$lambda(closure$fn) {
    return function (e) {
      closure$fn(e);
      return Unit;
    };
  }
  function listenAs($receiver, type, fn) {
    return listen($receiver, type, listenAs$lambda(fn));
  }
  function onInterval$lambda(closure$handle, this$onInterval) {
    return function () {
      this$onInterval.clearInterval(closure$handle);
      return Unit;
    };
  }
  function onInterval($receiver, timeout, fn) {
    var handle = $receiver.setInterval(fn, timeout);
    return once(onInterval$lambda(handle, $receiver));
  }
  function UNINITIALIZED() {
    UNINITIALIZED_instance = this;
  }
  UNINITIALIZED.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UNINITIALIZED',
    interfaces: []
  };
  var UNINITIALIZED_instance = null;
  function UNINITIALIZED_getInstance() {
    if (UNINITIALIZED_instance === null) {
      new UNINITIALIZED();
    }
    return UNINITIALIZED_instance;
  }
  function LazyDelegate(fn) {
    this.fn_0 = fn;
    this.value_0 = UNINITIALIZED_getInstance();
  }
  LazyDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    if (this.value_0 === UNINITIALIZED_getInstance()) {
      this.value_0 = this.fn_0(thisRef, property);
    }
    return this.value_0;
  };
  LazyDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyDelegate',
    interfaces: []
  };
  function lazyNamed$lambda(closure$fn) {
    return function (f, p) {
      return closure$fn(p.callableName);
    };
  }
  function lazyNamed(fn) {
    return new LazyDelegate(lazyNamed$lambda(fn));
  }
  function ListenableList() {
  }
  ListenableList.prototype.addListener_ednqrc$ = function (listener) {
    return this.addListener_4hexkv$(listener, true);
  };
  function ListenableList$Listener(added, removed, moved) {
    if (added === void 0)
      added = ListenableList$ListenableList$Listener_init$lambda;
    if (removed === void 0)
      removed = ListenableList$ListenableList$Listener_init$lambda_0;
    if (moved === void 0)
      moved = ListenableList$ListenableList$Listener_init$lambda_1;
    this.added = added;
    this.removed = removed;
    this.moved = moved;
  }
  function ListenableList$ListenableList$Listener_init$lambda(f, f_0) {
    return Unit;
  }
  function ListenableList$ListenableList$Listener_init$lambda_0(f, f_0) {
    return Unit;
  }
  function ListenableList$ListenableList$Listener_init$lambda_1(f, f_0) {
    return Unit;
  }
  ListenableList$Listener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Listener',
    interfaces: []
  };
  ListenableList$Listener.prototype.component1 = function () {
    return this.added;
  };
  ListenableList$Listener.prototype.component2 = function () {
    return this.removed;
  };
  ListenableList$Listener.prototype.component3 = function () {
    return this.moved;
  };
  ListenableList$Listener.prototype.copy_byo1lv$ = function (added, removed, moved) {
    return new ListenableList$Listener(added === void 0 ? this.added : added, removed === void 0 ? this.removed : removed, moved === void 0 ? this.moved : moved);
  };
  ListenableList$Listener.prototype.toString = function () {
    return 'Listener(added=' + Kotlin.toString(this.added) + (', removed=' + Kotlin.toString(this.removed)) + (', moved=' + Kotlin.toString(this.moved)) + ')';
  };
  ListenableList$Listener.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.added) | 0;
    result = result * 31 + Kotlin.hashCode(this.removed) | 0;
    result = result * 31 + Kotlin.hashCode(this.moved) | 0;
    return result;
  };
  ListenableList$Listener.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.added, other.added) && Kotlin.equals(this.removed, other.removed) && Kotlin.equals(this.moved, other.moved)))));
  };
  ListenableList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ListenableList',
    interfaces: [List]
  };
  function Collector() {
  }
  Collector.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Collector',
    interfaces: []
  };
  function collector$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  collector$ObjectLiteral.prototype.plusAssign_11rb$ = function (t) {
    this.closure$fn(t);
  };
  collector$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Collector]
  };
  function collector(fn) {
    return new collector$ObjectLiteral(fn);
  }
  function events$lambda$lambda(this$) {
    return function (it) {
      this$.offer_11rb$(it);
      return Unit;
    };
  }
  function Coroutine$events$lambda(closure$deps_0, this$events_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$this$events = this$events_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$events$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$events$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$events$lambda.prototype.constructor = Coroutine$events$lambda;
  Coroutine$events$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            plusAssign(this.local$closure$deps.kills, events_0(this.local$this$events, collector(events$lambda$lambda(this.local$$receiver))));
            this.state_0 = 2;
            this.result_0 = join(this.local$closure$deps.kills, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function events$lambda(closure$deps_0, this$events_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$events$lambda(closure$deps_0, this$events_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function events($receiver, deps) {
    return produce(deps, void 0, 2147483647, events$lambda(deps, $receiver));
  }
  function eventsEmitter$lambda$lambda(closure$cb) {
    return function (it) {
      closure$cb(it);
      return Unit;
    };
  }
  function eventsEmitter$lambda(closure$all, this$eventsEmitter) {
    return function (cb) {
      return events_0(this$eventsEmitter, collector(eventsEmitter$lambda$lambda(cb)), closure$all);
    };
  }
  function eventsEmitter($receiver, all) {
    if (all === void 0)
      all = true;
    return eventsEmitter$lambda(all, $receiver);
  }
  function events$lambda_0(closure$channel) {
    return function (i, t) {
      closure$channel.plusAssign_11rb$(new ListEvent$Add(i, t));
      return Unit;
    };
  }
  function events$lambda_1(closure$channel) {
    return function (from, to) {
      closure$channel.plusAssign_11rb$(new ListEvent$Move(from, to));
      return Unit;
    };
  }
  function events$lambda_2(closure$channel) {
    return function (i, f) {
      closure$channel.plusAssign_11rb$(new ListEvent$Remove(i));
      return Unit;
    };
  }
  function events_0($receiver, channel, all) {
    if (all === void 0)
      all = true;
    return $receiver.addListener_4hexkv$(new ListenableList$Listener(events$lambda_0(channel), events$lambda_2(channel), events$lambda_1(channel)), all);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function ListenableMutableList(items) {
    AbstractMutableList.call(this);
    this.sizeVar_0 = new Var(0);
    this.isEmptyRx_1lh1d$_0 = Rx_init(killable.NoKill, ListenableMutableList$isEmptyRx$lambda(this));
    this.delegate_0 = ArrayList_init();
    this.listeners_0 = emptyList();
    this.emitter_d52eca$_0 = lazy(ListenableMutableList$emitter$lambda(this));
    this.addAll_brywnq$(items);
  }
  Object.defineProperty(ListenableMutableList.prototype, 'sizeRx', {
    get: function () {
      return this.sizeVar_0;
    }
  });
  Object.defineProperty(ListenableMutableList.prototype, 'isEmptyRx', {
    get: function () {
      return this.isEmptyRx_1lh1d$_0;
    }
  });
  function ListenableMutableList$addListener$lambda(this$ListenableMutableList, closure$listener) {
    return function () {
      this$ListenableMutableList.listeners_0 = minus(this$ListenableMutableList.listeners_0, closure$listener);
      return Unit;
    };
  }
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  ListenableMutableList.prototype.addListener_4hexkv$ = function (listener, all) {
    this.listeners_0 = plus(this.listeners_0, listener);
    if (all) {
      var action = listener.added;
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = this.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        action(checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)), item);
      }
    }
    return once(ListenableMutableList$addListener$lambda(this, listener));
  };
  Object.defineProperty(ListenableMutableList.prototype, 'size', {
    get: function () {
      return this.delegate_0.size;
    }
  });
  ListenableMutableList.prototype.add_wxm5ur$ = function (index, element) {
    this.delegate_0.add_wxm5ur$(index, element);
    this.sizeVar_0.now = this.size;
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.added(index, element);
    }
  };
  ListenableMutableList.prototype.removeAt_za3lpa$ = function (index) {
    var v = this.delegate_0.removeAt_za3lpa$(index);
    this.sizeVar_0.now = this.size;
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.removed(index, v);
    }
    return v;
  };
  ListenableMutableList.prototype.set_wxm5ur$ = function (index, element) {
    var v = this.delegate_0.set_wxm5ur$(index, element);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.removed(index, v);
      element_0.added(index, element);
    }
    return v;
  };
  ListenableMutableList.prototype.get_za3lpa$ = function (index) {
    return this.delegate_0.get_za3lpa$(index);
  };
  ListenableMutableList.prototype.move_vux9f0$ = function (from, to) {
    var v = this.delegate_0.removeAt_za3lpa$(from);
    this.delegate_0.add_wxm5ur$(to, v);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.moved(from, to);
    }
  };
  Object.defineProperty(ListenableMutableList.prototype, 'emitter', {
    get: function () {
      return this.emitter_d52eca$_0.value;
    }
  });
  function ListenableMutableList$isEmptyRx$lambda(this$ListenableMutableList) {
    return function ($receiver) {
      return this$ListenableMutableList.sizeVar_0.invoke() === 0;
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function ListenableMutableList$emitter$lambda$lambda(this$ListenableMutableList) {
    return function () {
      var $receiver = this$ListenableMutableList;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new SetAdded(item));
      }
      return destination;
    };
  }
  function ListenableMutableList$emitter$lambda$lambda_0(closure$e) {
    return function (f, item) {
      closure$e.emit_11rb$(new SetAdded(item));
      return Unit;
    };
  }
  function ListenableMutableList$emitter$lambda$lambda_1(closure$e) {
    return function (f, item) {
      closure$e.emit_11rb$(new SetRemoved(item));
      return Unit;
    };
  }
  function ListenableMutableList$emitter$lambda(this$ListenableMutableList) {
    return function () {
      var e = new Emitter(ListenableMutableList$emitter$lambda$lambda(this$ListenableMutableList));
      this$ListenableMutableList.addListener_ednqrc$(new ListenableList$Listener(ListenableMutableList$emitter$lambda$lambda_0(e), ListenableMutableList$emitter$lambda$lambda_1(e)));
      return e;
    };
  }
  ListenableMutableList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListenableMutableList',
    interfaces: [ListenableList, AbstractMutableList]
  };
  function ListenableMutableList_init($this) {
    $this = $this || Object.create(ListenableMutableList.prototype);
    ListenableMutableList.call($this, emptyList());
    return $this;
  }
  function sorted$Holder(closure$kills, closure$key, item) {
    this.item = item;
    this.ks = killables(closure$kills);
    this.kills_uu4xzt$_0 = this.ks.kills;
    this.krx = this.rx_y6x17j$(sorted$Holder$krx$lambda(closure$key, this));
    this.keyValue = this.krx.now;
    this.orderedIndex = 0;
  }
  Object.defineProperty(sorted$Holder.prototype, 'kills', {
    get: function () {
      return this.kills_uu4xzt$_0;
    }
  });
  sorted$Holder.prototype.dec = function () {
    this.orderedIndex = this.orderedIndex - 1 | 0;
  };
  sorted$Holder.prototype.inc = function () {
    this.orderedIndex = this.orderedIndex + 1 | 0;
  };
  function sorted$Holder$krx$lambda(closure$key, this$Holder) {
    return function ($receiver) {
      return closure$key($receiver, this$Holder.item);
    };
  }
  sorted$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: [KillsApi]
  };
  function sorted$find$lambda(it) {
    return it.keyValue;
  }
  var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
  var binarySearch = Kotlin.kotlin.collections.binarySearch_sr7qim$;
  function binarySearchBy$lambda(closure$selector, closure$key) {
    return function (it) {
      return compareValues(closure$selector(it), closure$key);
    };
  }
  function sorted$find(closure$ordered) {
    return function ($receiver) {
      var $receiver_0 = closure$ordered;
      var key = $receiver.keyValue;
      var i = binarySearch($receiver_0, 0, $receiver_0.size, binarySearchBy$lambda(sorted$find$lambda, key));
      var $receiver_1 = i < 0 ? (-i | 0) - 1 | 0 : i;
      $receiver.orderedIndex = $receiver_1;
      return $receiver_1;
    };
  }
  function sorted$lambda$lambda$lambda(this$, closure$ordered, closure$find, closure$sorted) {
    return function ($receiver, kv) {
      this$.keyValue = kv;
      var from = this$.orderedIndex;
      closure$ordered.removeAt_za3lpa$(from);
      closure$find(this$);
      var to = this$.orderedIndex;
      closure$ordered.add_wxm5ur$(to, this$);
      if (from !== to) {
        closure$sorted.move_vux9f0$(from, to);
        if (from < to) {
          var tmp$;
          tmp$ = closure$ordered.subList_vux9f0$(from, to).iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            element.dec();
          }
        }
         else if (to < from) {
          var tmp$_0;
          tmp$_0 = closure$ordered.subList_vux9f0$(to + 1 | 0, from + 1 | 0).iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            element_0.inc();
          }
        }
      }
      return Unit;
    };
  }
  function sorted$lambda(closure$kills, closure$key, closure$original, closure$find, closure$ordered, closure$sorted) {
    return function (e) {
      if (Kotlin.isType(e, ListEvent$Add)) {
        var $receiver = new sorted$Holder(closure$kills, closure$key, e.item);
        var closure$original_0 = closure$original;
        var closure$find_0 = closure$find;
        var closure$ordered_0 = closure$ordered;
        var closure$sorted_0 = closure$sorted;
        closure$original_0.add_wxm5ur$(e.index, $receiver);
        closure$find_0($receiver);
        closure$ordered_0.add_wxm5ur$($receiver.orderedIndex, $receiver);
        closure$sorted_0.add_wxm5ur$($receiver.orderedIndex, $receiver.item);
        var tmp$;
        tmp$ = drop(closure$ordered_0, $receiver.orderedIndex + 1 | 0).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element.inc();
        }
        $receiver.krx.forEachLater_cksb0z$($receiver.kills, void 0, void 0, sorted$lambda$lambda$lambda($receiver, closure$ordered_0, closure$find_0, closure$sorted_0));
      }
       else if (Kotlin.isType(e, ListEvent$Move))
        closure$original.add_wxm5ur$(e.to, closure$original.removeAt_za3lpa$(e.from));
      else if (Kotlin.isType(e, ListEvent$Remove)) {
        var $receiver_0 = closure$original.removeAt_za3lpa$(e.index);
        var closure$sorted_1 = closure$sorted;
        var closure$ordered_1 = closure$ordered;
        closure$sorted_1.removeAt_za3lpa$($receiver_0.orderedIndex);
        closure$ordered_1.removeAt_za3lpa$($receiver_0.orderedIndex);
        var tmp$_0;
        tmp$_0 = drop(closure$ordered_1, $receiver_0.orderedIndex).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          element_0.dec();
        }
        $receiver_0.ks.kill();
      }
       else
        Kotlin.noWhenBranchMatched();
      return Unit;
    };
  }
  function sorted($receiver, kills, key) {
    var sorted = ListenableMutableList_init();
    var original = ArrayList_init();
    var ordered = ArrayList_init();
    var find = sorted$find(ordered);
    plusAssign(kills, eventsEmitter($receiver)(sorted$lambda(kills, key, original, find, ordered, sorted)));
    return sorted;
  }
  function map$lambda(k) {
    k.kill();
    return Unit;
  }
  function map($receiver, killables, create) {
    return map_0($receiver, killables, create, map$lambda);
  }
  function map$lambda_0(closure$result, closure$destroy) {
    return function () {
      var $receiver = closure$result;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$destroy(element);
      }
      return Unit;
    };
  }
  function map$lambda_1(closure$result, closure$create) {
    return function (index, element) {
      closure$result.add_wxm5ur$(index, closure$create(element));
      return Unit;
    };
  }
  function map$lambda_2(closure$destroy, closure$result) {
    return function (index, f) {
      closure$destroy(closure$result.removeAt_za3lpa$(index));
      return Unit;
    };
  }
  function map$lambda_3(closure$result) {
    return function (from, to) {
      closure$result.move_vux9f0$(from, to);
      return Unit;
    };
  }
  function map_0($receiver, killables, create, destroy) {
    var result = ListenableMutableList_init();
    plusAssign(killables, map$lambda_0(result, destroy));
    plusAssign(killables, $receiver.addListener_ednqrc$(new ListenableList$Listener(map$lambda_1(result, create), map$lambda_2(destroy, result), map$lambda_3(result))));
    return result;
  }
  function map$Holder(kill) {
    this.kill = kill;
  }
  map$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function map$lambda_4(closure$killables, closure$mapper, closure$result, closure$holders) {
    return function (index, element) {
      var ks = killables(closure$killables);
      var node = closure$mapper(element, ks.killSet);
      closure$result.add_wxm5ur$(index, node);
      closure$holders.add_wxm5ur$(index, new map$Holder(ks.kill));
      return Unit;
    };
  }
  function map$lambda_5(closure$result, closure$holders) {
    return function (index, f) {
      closure$result.removeAt_za3lpa$(index);
      var holder = closure$holders.removeAt_za3lpa$(index);
      holder.kill();
      return Unit;
    };
  }
  function map$lambda_6(closure$result, closure$holders) {
    return function (from, to) {
      closure$result.move_vux9f0$(from, to);
      closure$holders.add_wxm5ur$(to, closure$holders.removeAt_za3lpa$(from));
      return Unit;
    };
  }
  function map_1($receiver, killables, mapper) {
    var result = ListenableMutableList_init();
    var holders = ArrayList_init();
    plusAssign(killables, $receiver.addListener_ednqrc$(new ListenableList$Listener(map$lambda_4(killables, mapper, result, holders), map$lambda_5(result, holders), map$lambda_6(result, holders))));
    return result;
  }
  function MappedListenableListConfig(list, killables, mapper) {
    this.list = list;
    this.killables = killables;
    this.mapper = mapper;
  }
  MappedListenableListConfig.prototype.build = function () {
    return map_1(this.list, this.killables, this.mapper);
  };
  MappedListenableListConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MappedListenableListConfig',
    interfaces: []
  };
  MappedListenableListConfig.prototype.component1 = function () {
    return this.list;
  };
  MappedListenableListConfig.prototype.component2 = function () {
    return this.killables;
  };
  MappedListenableListConfig.prototype.component3 = function () {
    return this.mapper;
  };
  MappedListenableListConfig.prototype.copy_84j5x$ = function (list, killables, mapper) {
    return new MappedListenableListConfig(list === void 0 ? this.list : list, killables === void 0 ? this.killables : killables, mapper === void 0 ? this.mapper : mapper);
  };
  MappedListenableListConfig.prototype.toString = function () {
    return 'MappedListenableListConfig(list=' + Kotlin.toString(this.list) + (', killables=' + Kotlin.toString(this.killables)) + (', mapper=' + Kotlin.toString(this.mapper)) + ')';
  };
  MappedListenableListConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.killables) | 0;
    result = result * 31 + Kotlin.hashCode(this.mapper) | 0;
    return result;
  };
  MappedListenableListConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.killables, other.killables) && Kotlin.equals(this.mapper, other.mapper)))));
  };
  function FilteredListenableListConfig(list, killables, filterKey, input, filter) {
    this.list = list;
    this.killables = killables;
    this.filterKey = filterKey;
    this.input = input;
    this.filter = filter;
  }
  function FilteredListenableListConfig$build$Holder(closure$result, this$FilteredListenableListConfig, holders, item, holdersIndex) {
    this.closure$result = closure$result;
    this.this$FilteredListenableListConfig = this$FilteredListenableListConfig;
    this.holders = holders;
    this.item = item;
    this.holdersIndex = holdersIndex;
    this.resultIndex = common.None;
    this.resultsBefore = 0;
    this.ks = killables(this$FilteredListenableListConfig.killables);
    this.key = this$FilteredListenableListConfig.filterKey(this.item, this.ks.killSet);
    this.holders.add_wxm5ur$(this.holdersIndex, this);
    var $receiver = this.holders.listIterator_za3lpa$(this.holdersIndex + 1 | 0);
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      element.holdersIndex = element.holdersIndex + 1 | 0;
    }
    this.recalcResultsBefore();
    this.key.forEach_aaomyj$(this.ks.killSet, FilteredListenableListConfig$build$FilteredListenableListConfig$build$Holder_init$lambda(this));
  }
  function FilteredListenableListConfig$build$Holder$resultsIndexAfter$lambda(it) {
    return it + 1 | 0;
  }
  FilteredListenableListConfig$build$Holder.prototype.resultsIndexAfter = function () {
    return this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$resultsIndexAfter$lambda).getOrDefault_11rb$(this.resultsBefore);
  };
  FilteredListenableListConfig$build$Holder.prototype.recalcResultsBefore = function () {
    this.resultsBefore = this.holdersIndex === 0 ? 0 : this.holders.get_za3lpa$(this.holdersIndex - 1 | 0).resultsIndexAfter();
  };
  function FilteredListenableListConfig$build$Holder$move$forRange(closure$range, this$Holder) {
    return function (fn) {
      var $receiver = closure$range;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        fn(this$Holder.holders.get_za3lpa$(element));
      }
    };
  }
  function FilteredListenableListConfig$build$Holder$move$lambda(h) {
    h.holdersIndex = h.holdersIndex - 1 | 0;
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda_0(h) {
    h.holdersIndex = h.holdersIndex + 1 | 0;
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda$lambda(h) {
    h.shift_6taknv$(true);
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda$lambda_0(h) {
    h.shift_6taknv$(false);
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda_1(closure$fwd, closure$forRange, this$Holder, closure$result) {
    return function (ri) {
      if (closure$fwd) {
        closure$forRange(FilteredListenableListConfig$build$Holder$move$lambda$lambda);
        this$Holder.recalcResultsBefore();
      }
       else {
        this$Holder.recalcResultsBefore();
        closure$forRange(FilteredListenableListConfig$build$Holder$move$lambda$lambda_0);
      }
      closure$result.move_vux9f0$(ri, this$Holder.resultIndex.get());
      return Unit;
    };
  }
  FilteredListenableListConfig$build$Holder.prototype.move_za3lpa$ = function (to) {
    var from = this.holdersIndex;
    this.holders.add_wxm5ur$(to, this.holders.removeAt_za3lpa$(from));
    this.holdersIndex = to;
    var fwd = from < to;
    var range = fwd ? until(from, to) : new IntRange(to + 1 | 0, from);
    var forRange = FilteredListenableListConfig$build$Holder$move$forRange(range, this);
    if (fwd)
      forRange(FilteredListenableListConfig$build$Holder$move$lambda);
    else
      forRange(FilteredListenableListConfig$build$Holder$move$lambda_0);
    this.resultIndex.forEach_qlkmfe$(FilteredListenableListConfig$build$Holder$move$lambda_1(fwd, forRange, this, this.closure$result));
  };
  function FilteredListenableListConfig$build$Holder$shift$lambda(it) {
    return it - 1 | 0;
  }
  function FilteredListenableListConfig$build$Holder$shift$lambda_0(it) {
    return it + 1 | 0;
  }
  FilteredListenableListConfig$build$Holder.prototype.shift_6taknv$ = function (down) {
    if (down) {
      this.resultsBefore = this.resultsBefore - 1 | 0;
      this.resultIndex = this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$shift$lambda);
    }
     else {
      this.resultsBefore = this.resultsBefore + 1 | 0;
      this.resultIndex = this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$shift$lambda_0);
    }
  };
  function FilteredListenableListConfig$build$Holder$updateVisibility$lambda(closure$newVisible, closure$result, this$Holder) {
    return function (ri) {
      if (!closure$newVisible) {
        closure$result.removeAt_za3lpa$(ri);
        this$Holder.resultIndex = common.None;
        var $receiver = this$Holder.holders.listIterator_za3lpa$(this$Holder.holdersIndex + 1 | 0);
        while ($receiver.hasNext()) {
          var element = $receiver.next();
          element.shift_6taknv$(true);
        }
      }
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$Holder$updateVisibility$lambda_0(closure$newVisible, closure$result, this$Holder) {
    return function () {
      if (closure$newVisible) {
        closure$result.add_wxm5ur$(this$Holder.resultsBefore, this$Holder.item);
        this$Holder.resultIndex = new Some(this$Holder.resultsBefore);
        var $receiver = this$Holder.holders.listIterator_za3lpa$(this$Holder.holdersIndex + 1 | 0);
        while ($receiver.hasNext()) {
          var element = $receiver.next();
          element.shift_6taknv$(false);
        }
      }
      return Unit;
    };
  }
  FilteredListenableListConfig$build$Holder.prototype.updateVisibility_6taknv$ = function (newVisible) {
    this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$updateVisibility$lambda(newVisible, this.closure$result, this)).getOrElse_skz6lt$(FilteredListenableListConfig$build$Holder$updateVisibility$lambda_0(newVisible, this.closure$result, this));
  };
  FilteredListenableListConfig$build$Holder.prototype.updateInput_138r$ = function (i) {
    this.updateVisibility_6taknv$(this.this$FilteredListenableListConfig.filter(this.key.now, i));
  };
  FilteredListenableListConfig$build$Holder.prototype.updateKey_138q$ = function (k) {
    this.updateVisibility_6taknv$(this.this$FilteredListenableListConfig.filter(k, this.this$FilteredListenableListConfig.input.now));
  };
  FilteredListenableListConfig$build$Holder.prototype.remove = function () {
    this.updateVisibility_6taknv$(false);
    this.holders.removeAt_za3lpa$(this.holdersIndex);
    var $receiver = this.holders.listIterator_za3lpa$(this.holdersIndex);
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      element.holdersIndex = element.holdersIndex - 1 | 0;
    }
  };
  function FilteredListenableListConfig$build$FilteredListenableListConfig$build$Holder_init$lambda(this$Holder) {
    return function ($receiver, k) {
      this$Holder.updateKey_138q$(k);
      return Unit;
    };
  }
  FilteredListenableListConfig$build$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function FilteredListenableListConfig$build$lambda(closure$holders) {
    return function ($receiver, i) {
      var tmp$;
      tmp$ = closure$holders.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.updateInput_138r$(i);
      }
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$lambda_0(closure$holders, closure$result, this$FilteredListenableListConfig) {
    return function (idx, t) {
      new FilteredListenableListConfig$build$Holder(closure$result, this$FilteredListenableListConfig, closure$holders, t, idx);
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$lambda_1(closure$holders) {
    return function (idx, f) {
      closure$holders.get_za3lpa$(idx).remove();
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$lambda_2(closure$holders) {
    return function (from, to) {
      closure$holders.get_za3lpa$(from).move_za3lpa$(to);
      return Unit;
    };
  }
  FilteredListenableListConfig.prototype.build = function () {
    var result = ListenableMutableList_init();
    var holders = ArrayList_init();
    this.input.forEachLater_cksb0z$(this.killables, void 0, void 0, FilteredListenableListConfig$build$lambda(holders));
    plusAssign(this.killables, this.list.addListener_ednqrc$(new ListenableList$Listener(FilteredListenableListConfig$build$lambda_0(holders, result, this), FilteredListenableListConfig$build$lambda_1(holders), FilteredListenableListConfig$build$lambda_2(holders))));
    return result;
  };
  FilteredListenableListConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilteredListenableListConfig',
    interfaces: []
  };
  FilteredListenableListConfig.prototype.component1 = function () {
    return this.list;
  };
  FilteredListenableListConfig.prototype.component2 = function () {
    return this.killables;
  };
  FilteredListenableListConfig.prototype.component3 = function () {
    return this.filterKey;
  };
  FilteredListenableListConfig.prototype.component4 = function () {
    return this.input;
  };
  FilteredListenableListConfig.prototype.component5 = function () {
    return this.filter;
  };
  FilteredListenableListConfig.prototype.copy_eagp3a$ = function (list, killables, filterKey, input, filter) {
    return new FilteredListenableListConfig(list === void 0 ? this.list : list, killables === void 0 ? this.killables : killables, filterKey === void 0 ? this.filterKey : filterKey, input === void 0 ? this.input : input, filter === void 0 ? this.filter : filter);
  };
  FilteredListenableListConfig.prototype.toString = function () {
    return 'FilteredListenableListConfig(list=' + Kotlin.toString(this.list) + (', killables=' + Kotlin.toString(this.killables)) + (', filterKey=' + Kotlin.toString(this.filterKey)) + (', input=' + Kotlin.toString(this.input)) + (', filter=' + Kotlin.toString(this.filter)) + ')';
  };
  FilteredListenableListConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.killables) | 0;
    result = result * 31 + Kotlin.hashCode(this.filterKey) | 0;
    result = result * 31 + Kotlin.hashCode(this.input) | 0;
    result = result * 31 + Kotlin.hashCode(this.filter) | 0;
    return result;
  };
  FilteredListenableListConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.killables, other.killables) && Kotlin.equals(this.filterKey, other.filterKey) && Kotlin.equals(this.input, other.input) && Kotlin.equals(this.filter, other.filter)))));
  };
  function get_connection($receiver) {
    return $receiver.connection;
  }
  var get_bluetooth = defineInlineFunction('appsimake-common.common.get_bluetooth_83l5d8$', function ($receiver) {
    return 'bluetooth';
  });
  var get_cellular = defineInlineFunction('appsimake-common.common.get_cellular_83l5d8$', function ($receiver) {
    return 'cellular';
  });
  var get_ethernet = defineInlineFunction('appsimake-common.common.get_ethernet_83l5d8$', function ($receiver) {
    return 'ethernet';
  });
  var get_none = defineInlineFunction('appsimake-common.common.get_none_83l5d8$', function ($receiver) {
    return 'none';
  });
  var get_wifi = defineInlineFunction('appsimake-common.common.get_wifi_83l5d8$', function ($receiver) {
    return 'wifi';
  });
  var get_wimax = defineInlineFunction('appsimake-common.common.get_wimax_83l5d8$', function ($receiver) {
    return 'wimax';
  });
  var get_other = defineInlineFunction('appsimake-common.common.get_other_83l5d8$', function ($receiver) {
    return 'other';
  });
  var get_unknown = defineInlineFunction('appsimake-common.common.get_unknown_83l5d8$', function ($receiver) {
    return 'unknown';
  });
  var get_slow2g = defineInlineFunction('appsimake-common.common.get_slow2g_z7fr9$', function ($receiver) {
    return 'slow-2g';
  });
  var get_g2 = defineInlineFunction('appsimake-common.common.get_g2_z7fr9$', function ($receiver) {
    return '2g';
  });
  var get_g3 = defineInlineFunction('appsimake-common.common.get_g3_z7fr9$', function ($receiver) {
    return '3g';
  });
  var get_g4 = defineInlineFunction('appsimake-common.common.get_g4_z7fr9$', function ($receiver) {
    return '4g';
  });
  function requestFileSystem$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function requestFileSystem$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function requestFileSystem($receiver, type, size, continuation) {
    var cd = CompletableDeferred();
    $receiver.webkitRequestFileSystem(type, size, requestFileSystem$lambda(cd), requestFileSystem$lambda_0(cd));
    return cd.await(continuation);
  }
  function Coroutine$requestPersistentFileSystem($receiver_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$size = size_0;
  }
  Coroutine$requestPersistentFileSystem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$requestPersistentFileSystem.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requestPersistentFileSystem.prototype.constructor = Coroutine$requestPersistentFileSystem;
  Coroutine$requestPersistentFileSystem.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = requestQuota(this.local$$receiver.navigator.webkitPersistentStorage, this.local$size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var granted = this.result_0;
            this.state_0 = 3;
            this.result_0 = requestFileSystem(this.local$$receiver, this.local$$receiver.PERSISTENT, granted, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function requestPersistentFileSystem($receiver_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$requestPersistentFileSystem($receiver_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var get_withQuota = defineInlineFunction('appsimake-common.common.get_withQuota_nz12v2$', function ($receiver) {
    return $receiver;
  });
  var get_withQuota_0 = defineInlineFunction('appsimake-common.common.get_withQuota_yi0el1$', function ($receiver) {
    return $receiver;
  });
  function requestQuota$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function requestQuota$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function requestQuota($receiver, bytes, continuation) {
    var cd = CompletableDeferred();
    $receiver.requestQuota(bytes, requestQuota$lambda(cd), requestQuota$lambda_0(cd));
    return cd.await(continuation);
  }
  function UsageAndQuota(usage, quota) {
    this.usage = usage;
    this.quota = quota;
  }
  UsageAndQuota.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UsageAndQuota',
    interfaces: []
  };
  UsageAndQuota.prototype.component1 = function () {
    return this.usage;
  };
  UsageAndQuota.prototype.component2 = function () {
    return this.quota;
  };
  UsageAndQuota.prototype.copy_z8e4lc$ = function (usage, quota) {
    return new UsageAndQuota(usage === void 0 ? this.usage : usage, quota === void 0 ? this.quota : quota);
  };
  UsageAndQuota.prototype.toString = function () {
    return 'UsageAndQuota(usage=' + Kotlin.toString(this.usage) + (', quota=' + Kotlin.toString(this.quota)) + ')';
  };
  UsageAndQuota.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.usage) | 0;
    result = result * 31 + Kotlin.hashCode(this.quota) | 0;
    return result;
  };
  UsageAndQuota.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.usage, other.usage) && Kotlin.equals(this.quota, other.quota)))));
  };
  function queryUsageAndQuota$lambda(closure$cd) {
    return function (usage, quota) {
      closure$cd.complete_11rb$(new UsageAndQuota(usage, quota));
      return Unit;
    };
  }
  function queryUsageAndQuota$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function queryUsageAndQuota($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.queryUsageAndQuota(queryUsageAndQuota$lambda(cd), queryUsageAndQuota$lambda_0(cd));
    return cd.await(continuation);
  }
  function Coroutine$readAllEntries$lambda(closure$dir_0, closure$ch_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$dir = closure$dir_0;
    this.local$closure$ch = closure$ch_0;
    this.local$reader = void 0;
    this.local$a = void 0;
  }
  Coroutine$readAllEntries$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAllEntries$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAllEntries$lambda.prototype.constructor = Coroutine$readAllEntries$lambda;
  Coroutine$readAllEntries$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$reader = this.local$closure$dir.createReader();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = readEntries(this.local$reader, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$a = this.result_0;
            if (this.local$a.length === 0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$closure$ch.send_11rb$(this.local$a, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return this.local$closure$ch.close_dbl4no$();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readAllEntries$lambda(closure$dir_0, closure$ch_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$readAllEntries$lambda(closure$dir_0, closure$ch_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function readAllEntries($receiver, dir) {
    var ch = Channel();
    launch($receiver, void 0, void 0, readAllEntries$lambda(dir, ch));
    return ch;
  }
  function readEntries$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function readEntries$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function readEntries($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.readEntries(readEntries$lambda(cd), readEntries$lambda_0(cd));
    return cd.await(continuation);
  }
  function getDirectory$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function getDirectory$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function getDirectory($receiver, path, options, continuation) {
    if (options === void 0) {
      var $receiver_0 = {};
      $receiver_0.create = true;
      options = $receiver_0;
    }
    var cd = CompletableDeferred();
    $receiver.getDirectory(path, options, getDirectory$lambda(cd), getDirectory$lambda_0(cd));
    return cd.await(continuation);
  }
  function getFile$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function getFile$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function getFile($receiver, path, options, continuation) {
    if (options === void 0) {
      var $receiver_0 = {};
      $receiver_0.create = true;
      options = $receiver_0;
    }
    var cd = CompletableDeferred();
    $receiver.getFile(path, options, getFile$lambda(cd), getFile$lambda_0(cd));
    return cd.await(continuation);
  }
  function Coroutine$writeFile($receiver_0, name_0, blob_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$name = name_0;
    this.local$blob = blob_0;
  }
  Coroutine$writeFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeFile.prototype.constructor = Coroutine$writeFile;
  Coroutine$writeFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getFile(this.local$$receiver, this.local$name, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = createWriter(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0.write(this.local$blob);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function writeFile($receiver_0, name_0, blob_0, continuation_0, suspended) {
    var instance = new Coroutine$writeFile($receiver_0, name_0, blob_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function createWriter$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function createWriter$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function createWriter($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.createWriter(createWriter$lambda(cd), createWriter$lambda_0(cd));
    return cd.await(continuation);
  }
  function file$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function file$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function file($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.file(file$lambda(cd), file$lambda_0(cd));
    return cd.await(continuation);
  }
  function remove$lambda(closure$cd) {
    return function () {
      closure$cd.complete_11rb$(Unit);
      return Unit;
    };
  }
  function remove$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function remove($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.remove(remove$lambda(cd), remove$lambda_0(cd));
    return cd.await(continuation);
  }
  function isFileSystemSupported$lambda() {
    return window.navigator.webkitPersistentStorage != null;
  }
  var isFileSystemSupported;
  function get_isFileSystemSupported() {
    return isFileSystemSupported.value;
  }
  var objectKeys = defineInlineFunction('appsimake-common.common.objectKeys_za3rmp$', function (json) {
    return Object.keys(json);
  });
  function res(path) {
    var tmp$, tmp$_0, tmp$_1;
    var resmaps = window.resmaps;
    while (!(resmaps.modules.length === 0)) {
      var module_0 = resmaps.modules.shift();
      tmp$ = Object.keys(module_0);
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var k = tmp$[tmp$_0];
        resmaps.map[k] = module_0[k];
      }
    }
    return typeof (tmp$_1 = resmaps.map[path]) === 'string' ? tmp$_1 : throwCCE();
  }
  function State1() {
  }
  State1.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State1',
    interfaces: []
  };
  function State0() {
  }
  State0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State0',
    interfaces: []
  };
  function AsyncState0() {
  }
  AsyncState0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncState0',
    interfaces: []
  };
  function state1$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  state1$ObjectLiteral.prototype.invoke_11rb$ = function (input) {
    return this.closure$fn(input);
  };
  state1$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [State1]
  };
  function state1(fn) {
    return new state1$ObjectLiteral(fn);
  }
  function state0$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  state0$ObjectLiteral.prototype.invoke = function () {
    return this.closure$fn();
  };
  state0$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [State0]
  };
  function state0(fn) {
    return new state0$ObjectLiteral(fn);
  }
  function asyncState0$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  asyncState0$ObjectLiteral.prototype.invoke = function (continuation) {
    return this.closure$fn();
  };
  asyncState0$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AsyncState0]
  };
  function asyncState0(fn) {
    return new asyncState0$ObjectLiteral(fn);
  }
  function StateMachine1(initial) {
    this.state_8be2vx$ = initial;
  }
  StateMachine1.prototype.process_11rb$ = function (input) {
    var tmp$;
    var out = this.state_8be2vx$.invoke_11rb$(input);
    if ((tmp$ = out.first) != null) {
      this.state_8be2vx$ = tmp$;
    }
    return out.second;
  };
  StateMachine1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine1',
    interfaces: []
  };
  function StateMachine0(initial) {
    this.state_8be2vx$ = initial;
  }
  StateMachine0.prototype.process = function () {
    var tmp$;
    var out = this.state_8be2vx$.invoke();
    if ((tmp$ = out.first) != null) {
      this.state_8be2vx$ = tmp$;
    }
    return out.second;
  };
  StateMachine0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine0',
    interfaces: []
  };
  function AsyncStateMachine0(initial) {
    this.state_8be2vx$ = initial;
  }
  function Coroutine$process($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$process.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$process.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$process.prototype.constructor = Coroutine$process;
  Coroutine$process.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.state_8be2vx$.invoke(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var out = this.result_0;
            if ((tmp$ = out.first) != null) {
              this.$this.state_8be2vx$ = tmp$;
            }

            return out.second;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncStateMachine0.prototype.process = function (continuation_0, suspended) {
    var instance = new Coroutine$process(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AsyncStateMachine0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncStateMachine0',
    interfaces: []
  };
  function LazySM0(fn) {
    this.sm_8be2vx$ = new StateMachine0(state0(LazySM0$sm$lambda(fn)));
  }
  function LazySM0$sm$lambda$lambda(closure$v) {
    return function () {
      return to(null, closure$v);
    };
  }
  function LazySM0$sm$lambda(closure$fn) {
    return function () {
      var v = closure$fn();
      return to(state0(LazySM0$sm$lambda$lambda(v)), v);
    };
  }
  LazySM0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazySM0',
    interfaces: []
  };
  function State() {
  }
  State.prototype.enter = function () {
    return killable.Noop;
  };
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function StateMachine(state) {
    this.state_0 = state;
    this.destroy_0 = this.state_0.enter();
  }
  StateMachine.prototype.update_11rb$ = function (input) {
    var nextState = this.state_0.process_11rb$(input);
    if (nextState != null) {
      this.destroy_0();
      this.state_0 = nextState;
      this.destroy_0 = this.state_0.enter();
    }
  };
  StateMachine.prototype.alreadyShutdown_0 = function () {
    throw RuntimeException_init('state machine already shut down');
  };
  function StateMachine$AlreadyShutdown($outer) {
    this.$outer = $outer;
    State.call(this);
  }
  StateMachine$AlreadyShutdown.prototype.process_11rb$ = function (input) {
    return this.$outer.alreadyShutdown_0();
  };
  StateMachine$AlreadyShutdown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlreadyShutdown',
    interfaces: [State]
  };
  function StateMachine$shutdown$lambda(this$StateMachine) {
    return function () {
      this$StateMachine.alreadyShutdown_0();
      return Unit;
    };
  }
  StateMachine.prototype.shutdown = function () {
    this.destroy_0();
    this.destroy_0 = StateMachine$shutdown$lambda(this);
    this.state_0 = new StateMachine$AlreadyShutdown(this);
  };
  StateMachine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine',
    interfaces: []
  };
  var get_withStorage = defineInlineFunction('appsimake-common.common.get_withStorage_yi0el1$', function ($receiver) {
    return $receiver;
  });
  var get_storage = defineInlineFunction('appsimake-common.common.get_storage_yi0el1$', function ($receiver) {
    return $receiver.storage;
  });
  function isStorageManagerSupported$lambda() {
    return window.navigator.storage != null;
  }
  var isStorageManagerSupported;
  function get_isStorageManagerSupported() {
    return isStorageManagerSupported.value;
  }
  function JsYamlOptions() {
    return {};
  }
  function Schema(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Schema_initFields() {
    Schema_initFields = function () {
    };
    Schema$FAILSAFE_SCHEMA_instance = new Schema('FAILSAFE_SCHEMA', 0);
    Schema$JSON_SCHEMA_instance = new Schema('JSON_SCHEMA', 1);
    Schema$CORE_SCHEMA_instance = new Schema('CORE_SCHEMA', 2);
    Schema$DEFAULT_SAFE_SCHEMA_instance = new Schema('DEFAULT_SAFE_SCHEMA', 3);
    Schema$DEFAULT_FULL_SCHEMA_instance = new Schema('DEFAULT_FULL_SCHEMA', 4);
  }
  var Schema$FAILSAFE_SCHEMA_instance;
  function Schema$FAILSAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$FAILSAFE_SCHEMA_instance;
  }
  var Schema$JSON_SCHEMA_instance;
  function Schema$JSON_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$JSON_SCHEMA_instance;
  }
  var Schema$CORE_SCHEMA_instance;
  function Schema$CORE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$CORE_SCHEMA_instance;
  }
  var Schema$DEFAULT_SAFE_SCHEMA_instance;
  function Schema$DEFAULT_SAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_SAFE_SCHEMA_instance;
  }
  var Schema$DEFAULT_FULL_SCHEMA_instance;
  function Schema$DEFAULT_FULL_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_FULL_SCHEMA_instance;
  }
  Schema.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Schema',
    interfaces: [Enum]
  };
  function Schema$values() {
    return [Schema$FAILSAFE_SCHEMA_getInstance(), Schema$JSON_SCHEMA_getInstance(), Schema$CORE_SCHEMA_getInstance(), Schema$DEFAULT_SAFE_SCHEMA_getInstance(), Schema$DEFAULT_FULL_SCHEMA_getInstance()];
  }
  Schema.values = Schema$values;
  function Schema$valueOf(name) {
    switch (name) {
      case 'FAILSAFE_SCHEMA':
        return Schema$FAILSAFE_SCHEMA_getInstance();
      case 'JSON_SCHEMA':
        return Schema$JSON_SCHEMA_getInstance();
      case 'CORE_SCHEMA':
        return Schema$CORE_SCHEMA_getInstance();
      case 'DEFAULT_SAFE_SCHEMA':
        return Schema$DEFAULT_SAFE_SCHEMA_getInstance();
      case 'DEFAULT_FULL_SCHEMA':
        return Schema$DEFAULT_FULL_SCHEMA_getInstance();
      default:throwISE('No enum constant jsyaml.Schema.' + name);
    }
  }
  Schema.valueOf_61zpoe$ = Schema$valueOf;
  function get_schemaEnum($receiver) {
    var tmp$;
    return (tmp$ = $receiver.schema) != null ? Schema$valueOf(tmp$) : null;
  }
  function set_schemaEnum($receiver, v) {
    $receiver.schema = v != null ? v.toString() : null;
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$ace = _.ace || (_.ace = {});
  package$ace.Annotation = Annotation;
  var package$common = _.common || (_.common = {});
  package$common.CsKillsApiCommon = CsKillsApiCommon;
  package$common.hash_qfdq9h$ = hash;
  package$common.get_escape_pdl1vz$ = get_escape;
  Object.defineProperty(package$common, 'onResize', {
    get: get_onResize
  });
  package$common.resizeEvent_5ehnu1$ = resizeEvent;
  package$common.insertAt_tevjyx$ = insertAt;
  package$common.insertAt_y55kqv$ = insertAt_0;
  package$common.removeAt_poj3bi$ = removeAt;
  package$common.removeAt_jeu5im$ = removeAt_0;
  package$common.replaceAt_l17iyt$ = replaceAt;
  package$common.removeFromParent_asww5s$ = removeFromParent;
  package$common.replaceWith_fga9sf$ = replaceWith;
  package$common.attachEnabler_4r7ayb$ = attachEnabler;
  package$common.linkedIterable_h43q6c$ = linkedIterable;
  package$common.listen_hgi4ad$ = listen;
  package$common.listenAs_2stdkb$ = listenAs;
  package$common.onInterval_a3jiyj$ = onInterval;
  package$common.LazyDelegate = LazyDelegate;
  package$common.lazyNamed_cq6yhu$ = lazyNamed;
  ListenableList.Listener = ListenableList$Listener;
  package$common.ListenableList = ListenableList;
  package$common.Collector = Collector;
  package$common.collector_7qq44f$ = collector;
  package$common.events_ertemh$ = events;
  package$common.eventsEmitter_gg3m39$ = eventsEmitter;
  package$common.events_uqtdde$ = events_0;
  package$common.ListenableMutableList_init_287e2$ = ListenableMutableList_init;
  package$common.ListenableMutableList = ListenableMutableList;
  package$common.sorted_dqxdvy$ = sorted;
  package$common.map_4ee665$ = map;
  package$common.map_e7xyog$ = map_0;
  package$common.map_6w4pus$ = map_1;
  package$common.MappedListenableListConfig = MappedListenableListConfig;
  package$common.FilteredListenableListConfig = FilteredListenableListConfig;
  package$common.get_connection_yi0el1$ = get_connection;
  package$common.get_bluetooth_83l5d8$ = get_bluetooth;
  package$common.get_cellular_83l5d8$ = get_cellular;
  package$common.get_ethernet_83l5d8$ = get_ethernet;
  package$common.get_none_83l5d8$ = get_none;
  package$common.get_wifi_83l5d8$ = get_wifi;
  package$common.get_wimax_83l5d8$ = get_wimax;
  package$common.get_other_83l5d8$ = get_other;
  package$common.get_unknown_83l5d8$ = get_unknown;
  package$common.get_slow2g_z7fr9$ = get_slow2g;
  package$common.get_g2_z7fr9$ = get_g2;
  package$common.get_g3_z7fr9$ = get_g3;
  package$common.get_g4_z7fr9$ = get_g4;
  package$common.requestFileSystem_mif124$ = requestFileSystem;
  $$importsForInline$$['appsimake-common'] = _;
  package$common.requestPersistentFileSystem_cjjapg$ = requestPersistentFileSystem;
  package$common.get_withQuota_nz12v2$ = get_withQuota;
  package$common.get_withQuota_yi0el1$ = get_withQuota_0;
  package$common.requestQuota_o528w6$ = requestQuota;
  package$common.UsageAndQuota = UsageAndQuota;
  package$common.queryUsageAndQuota_qs12is$ = queryUsageAndQuota;
  package$common.readAllEntries_70fqbg$ = readAllEntries;
  package$common.readEntries_e3gq6l$ = readEntries;
  package$common.getDirectory_lzt4nx$ = getDirectory;
  package$common.getFile_lzt4nx$ = getFile;
  package$common.writeFile_7y1pu9$ = writeFile;
  package$common.createWriter_sqof09$ = createWriter;
  package$common.file_sqof09$ = file;
  package$common.remove_sqof09$ = remove;
  Object.defineProperty(package$common, 'isFileSystemSupported', {
    get: get_isFileSystemSupported
  });
  package$common.objectKeys_za3rmp$ = objectKeys;
  package$common.res_61zpoe$ = res;
  package$common.State1 = State1;
  package$common.State0 = State0;
  package$common.AsyncState0 = AsyncState0;
  package$common.state1_of8dpg$ = state1;
  package$common.state0_gmleg1$ = state0;
  package$common.asyncState0_rdka2b$ = asyncState0;
  package$common.StateMachine1 = StateMachine1;
  package$common.StateMachine0 = StateMachine0;
  package$common.AsyncStateMachine0 = AsyncStateMachine0;
  package$common.LazySM0 = LazySM0;
  package$common.State = State;
  package$common.StateMachine = StateMachine;
  package$common.get_withStorage_yi0el1$ = get_withStorage;
  package$common.get_storage_yi0el1$ = get_storage;
  Object.defineProperty(package$common, 'isStorageManagerSupported', {
    get: get_isStorageManagerSupported
  });
  var package$jsyaml = _.jsyaml || (_.jsyaml = {});
  package$jsyaml.JsYamlOptions = JsYamlOptions;
  Object.defineProperty(Schema, 'FAILSAFE_SCHEMA', {
    get: Schema$FAILSAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'JSON_SCHEMA', {
    get: Schema$JSON_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'CORE_SCHEMA', {
    get: Schema$CORE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_SAFE_SCHEMA', {
    get: Schema$DEFAULT_SAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_FULL_SCHEMA', {
    get: Schema$DEFAULT_FULL_SCHEMA_getInstance
  });
  package$jsyaml.Schema = Schema;
  package$jsyaml.get_schemaEnum_lf44v5$ = get_schemaEnum;
  package$jsyaml.set_schemaEnum_isj6f3$ = set_schemaEnum;
  CsKillsApiCommon.prototype.rx_y6x17j$ = CsKillsApi.prototype.rx_y6x17j$;
  CsKillsApiCommon.prototype.rx_46ic4w$ = CsKillsApi.prototype.rx_46ic4w$;
  CsKillsApiCommon.prototype.containsRx_1w65cx$ = CsKillsApi.prototype.containsRx_1w65cx$;
  CsKillsApiCommon.prototype.filtered_tnde95$ = CsKillsApi.prototype.filtered_tnde95$;
  CsKillsApiCommon.prototype.forEach_xwzbbo$ = CsKillsApi.prototype.forEach_xwzbbo$;
  CsKillsApiCommon.prototype.forEach_35q7bt$ = CsKillsApi.prototype.forEach_35q7bt$;
  CsKillsApiCommon.prototype.map_1mq1ue$ = CsKillsApi.prototype.map_1mq1ue$;
  CsKillsApiCommon.prototype.map_jtxi0h$ = CsKillsApi.prototype.map_jtxi0h$;
  CsKillsApiCommon.prototype.onChange_rlu5c6$ = CsKillsApi.prototype.onChange_rlu5c6$;
  CsKillsApiCommon.prototype.process_7xi3v7$ = CsKillsApi.prototype.process_7xi3v7$;
  CsKillsApiCommon.prototype.remAssign_7fncnf$ = CsKillsApi.prototype.remAssign_7fncnf$;
  CsKillsApiCommon.prototype.rxClass_c5yvvx$ = CsKillsApi.prototype.rxClass_c5yvvx$;
  CsKillsApiCommon.prototype.rxClass_6sflyw$ = CsKillsApi.prototype.rxClass_6sflyw$;
  CsKillsApiCommon.prototype.toChannelLater_z5dyp2$ = CsKillsApi.prototype.toChannelLater_z5dyp2$;
  CsKillsApiCommon.prototype.toRx_on0lyu$ = CsKillsApi.prototype.toRx_on0lyu$;
  CsKillsApiCommon.prototype.toRxSet_jr4bl4$ = CsKillsApi.prototype.toRxSet_jr4bl4$;
  ListenableMutableList.prototype.addListener_ednqrc$ = ListenableList.prototype.addListener_ednqrc$;
  sorted$Holder.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  sorted$Holder.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  sorted$Holder.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  sorted$Holder.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  sorted$Holder.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  sorted$Holder.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  sorted$Holder.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  sorted$Holder.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  sorted$Holder.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  sorted$Holder.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  sorted$Holder.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  sorted$Holder.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  sorted$Holder.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  sorted$Holder.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  sorted$Holder.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  onResize = lazy(onResize$lambda);
  isFileSystemSupported = lazy(isFileSystemSupported$lambda);
  isStorageManagerSupported = lazy(isStorageManagerSupported$lambda);
  Kotlin.defineModule('appsimake-common', _);
  return _;
}(typeof this['appsimake-common'] === 'undefined' ? {} : this['appsimake-common'], kotlin, this['appsimake-commonshr'], this['kotlinx-coroutines-core']);
