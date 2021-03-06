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

define(['exports', 'kotlin', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  function decodeMessage(msg) {
    return decodeMessageData(msg.data);
  }
  function DecodedMessage(lib, data) {
    this.lib = lib;
    this.data = data;
  }
  DecodedMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodedMessage',
    interfaces: []
  };
  function decodeMessageData(data) {
    return new DecodedMessage(ensureNotNull(data.appsimakeApp), JSON.parse(data.json));
  }
  function encodeMessageData(lib, data) {
    var $receiver = {};
    $receiver.appsimakeApp = lib.name;
    $receiver.json = JSON.stringify(data);
    return $receiver;
  }
  function createLibMessage(lib, data) {
    var $receiver = {};
    $receiver.appsimakeApp = lib.name;
    $receiver.data = data;
    return $receiver;
  }
  function postLibMessage($receiver, lib, data) {
    $receiver.postMessage(createLibMessage(lib, data));
  }
  var package$firebaseshr = _.firebaseshr || (_.firebaseshr = {});
  package$firebaseshr.decodeMessage_za3rmp$ = decodeMessage;
  package$firebaseshr.DecodedMessage = DecodedMessage;
  package$firebaseshr.decodeMessageData_i92b12$ = decodeMessageData;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$firebaseshr.encodeMessageData_yy61vh$ = encodeMessageData;
  package$firebaseshr.createLibMessage_ycvucz$ = createLibMessage;
  package$firebaseshr.postLibMessage_q9pn7$ = postLibMessage;
  Kotlin.defineModule('appsimake-firebaseshr', _);
  return _;
});
