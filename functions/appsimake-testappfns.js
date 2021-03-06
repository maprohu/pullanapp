function define(args, fn) {
    fn(
        ...args.map(function(a) {
            if (a == 'exports') {
                return module.exports;
            } else if (a.startsWith('appsimake-')) {
                return require('./' + a);
            } else {
                return require(a);
            }
        })
    );
}

define(['exports', 'kotlin', 'appsimake-testapplib', 'appsimake-functions', 'kotlinx-coroutines-core', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_testapplib, $module$appsimake_functions, $module$kotlinx_coroutines_core, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var testapplib = $module$appsimake_testapplib.testapplib;
  var commonfns = $module$appsimake_functions.commonfns;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var implementAsync = $module$appsimake_functions.commonfns.implementAsync_4bti1h$;
  function init$lambda$lambda(closure$msg) {
    return function (qds) {
      var tmp$ = firebaseadmin.admin.messaging();
      var $receiver = {};
      var closure$msg_0 = closure$msg;
      $receiver.token = qds.id;
      $receiver.data = closure$msg_0;
      tmp$.send($receiver);
      return Unit;
    };
  }
  function Coroutine$init$lambda(msg_0, f_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$msg = msg_0;
  }
  Coroutine$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda.prototype.constructor = Coroutine$init$lambda;
  Coroutine$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(commonfns.firestore.collection(testapplib.tokensPath).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.forEach(init$lambda$lambda(this.local$msg)), Unit;
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
  function init$lambda(msg_0, f_0, continuation_0, suspended) {
    var instance = new Coroutine$init$lambda(msg_0, f_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function init(exports) {
    implementAsync(testapplib.sendMessage, exports, init$lambda);
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$testappfns = _.testappfns || (_.testappfns = {});
  package$testappfns.init_za3rmp$ = init;
  Kotlin.defineModule('appsimake-testappfns', _);
  return _;
});
