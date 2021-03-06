if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-musiclib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-musiclib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-musiclib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-musiclib'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-musiclib'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-musiclib'.");
}
this['appsimake-musiclib'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_firebaseshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var lib = $module$appsimake_commonshr.commonlib.lib;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var coll = $module$appsimake_commonshr.commonlib.coll_287e2$;
  var Base = $module$appsimake_firebaseshr.firebaseshr.Base;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var initFrom = $module$appsimake_firebaseshr.firebaseshr.initFrom_bruz9y$;
  var wrapper = $module$appsimake_firebaseshr.firebaseshr.wrapper_c00y0o$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var BaseRootVal = $module$appsimake_firebaseshr.firebaseshr.BaseRootVal;
  var baseProp = $module$appsimake_firebaseshr.firebaseshr.baseProp_k7618i$;
  StoreState.prototype = Object.create(Base.prototype);
  StoreState.prototype.constructor = StoreState;
  UserSongState.prototype = Object.create(Enum.prototype);
  UserSongState.prototype.constructor = UserSongState;
  UserSong.prototype = Object.create(Base.prototype);
  UserSong.prototype.constructor = UserSong;
  Mp3File.prototype = Object.create(Base.prototype);
  Mp3File.prototype.constructor = Mp3File;
  ActivePlaylist.prototype = Object.create(BaseRootVal.prototype);
  ActivePlaylist.prototype.constructor = ActivePlaylist;
  ActivePlaylist$Companion.prototype = Object.create(ActivePlaylist.prototype);
  ActivePlaylist$Companion.prototype.constructor = ActivePlaylist$Companion;
  LocalPlaylist.prototype = Object.create(ActivePlaylist.prototype);
  LocalPlaylist.prototype.constructor = LocalPlaylist;
  CloudPlaylist.prototype = Object.create(ActivePlaylist.prototype);
  CloudPlaylist.prototype.constructor = CloudPlaylist;
  CustomPlaylist.prototype = Object.create(ActivePlaylist.prototype);
  CustomPlaylist.prototype.constructor = CustomPlaylist;
  PlayerSettings.prototype = Object.create(Base.prototype);
  PlayerSettings.prototype.constructor = PlayerSettings;
  var music_metadata = new PropertyMetadata('music');
  var music;
  function get_music() {
    return music.getValue_lrcp0p$(this, music_metadata);
  }
  var songs;
  var songs_metadata = new PropertyMetadata('songs');
  function get_songs($receiver) {
    return songs.getValue_lrcp0p$($receiver, songs_metadata);
  }
  var storage;
  var storage_metadata = new PropertyMetadata('storage');
  function get_storage($receiver) {
    return storage.getValue_lrcp0p$($receiver, storage_metadata);
  }
  var usersongs;
  var usersongs_metadata = new PropertyMetadata('usersongs');
  function get_usersongs($receiver) {
    return usersongs.getValue_lrcp0p$($receiver, usersongs_metadata);
  }
  function StoreState() {
    Base.call(this);
    this.count_8lqj3v$_0 = this.o.scalar_287e2$().withDefault_11rc$(0).prop_absfod$().provideDelegate_n5byny$(this, StoreState$count_metadata);
  }
  var StoreState$count_metadata = new PropertyMetadata('count');
  Object.defineProperty(StoreState.prototype, 'count', {
    get: function () {
      return this.count_8lqj3v$_0.getValue_lrcp0p$(this, StoreState$count_metadata);
    }
  });
  StoreState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoreState',
    interfaces: [Base]
  };
  function UserSongState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UserSongState_initFields() {
    UserSongState_initFields = function () {
    };
    UserSongState$Like_instance = new UserSongState('Like', 0);
    UserSongState$DontLike_instance = new UserSongState('DontLike', 1);
  }
  var UserSongState$Like_instance;
  function UserSongState$Like_getInstance() {
    UserSongState_initFields();
    return UserSongState$Like_instance;
  }
  var UserSongState$DontLike_instance;
  function UserSongState$DontLike_getInstance() {
    UserSongState_initFields();
    return UserSongState$DontLike_instance;
  }
  UserSongState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSongState',
    interfaces: [Enum]
  };
  function UserSongState$values() {
    return [UserSongState$Like_getInstance(), UserSongState$DontLike_getInstance()];
  }
  UserSongState.values = UserSongState$values;
  function UserSongState$valueOf(name) {
    switch (name) {
      case 'Like':
        return UserSongState$Like_getInstance();
      case 'DontLike':
        return UserSongState$DontLike_getInstance();
      default:throwISE('No enum constant musiclib.UserSongState.' + name);
    }
  }
  UserSongState.valueOf_61zpoe$ = UserSongState$valueOf;
  function BasePropFactory$enum$lambda(it) {
    return it.name;
  }
  function BasePropFactory$enum$lambda_0(typeClosure$E, isE) {
    return function (it) {
      return typeClosure$E.valueOf_61zpoe$(it);
    };
  }
  function UserSong() {
    Base.call(this);
    this.state_bbx9l$_0 = this.o.scalar_287e2$().map_4zme6a$(BasePropFactory$enum$lambda_0(UserSongState, Kotlin.isInstanceOf(UserSongState)), BasePropFactory$enum$lambda).prop_absfod$().provideDelegate_n5byny$(this, UserSong$state_metadata);
  }
  var UserSong$state_metadata = new PropertyMetadata('state');
  Object.defineProperty(UserSong.prototype, 'state', {
    get: function () {
      return this.state_bbx9l$_0.getValue_lrcp0p$(this, UserSong$state_metadata);
    }
  });
  UserSong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSong',
    interfaces: [Base]
  };
  function Mp3File() {
    Base.call(this);
    this.artist_gnizx9$_0 = this.o.scalar_287e2$().prop_absfod$().provideDelegate_n5byny$(this, Mp3File$artist_metadata);
    this.title_oczcia$_0 = this.o.scalar_287e2$().prop_absfod$().provideDelegate_n5byny$(this, Mp3File$title_metadata);
    this.bytes_g2yq1r$_0 = this.o.scalar_287e2$().prop_absfod$().provideDelegate_n5byny$(this, Mp3File$bytes_metadata);
    this.secs_s9ic5k$_0 = this.o.scalar_287e2$().prop_absfod$().provideDelegate_n5byny$(this, Mp3File$secs_metadata);
    this.artistfix_p2btfg$_0 = this.o.scalar_287e2$().prop_absfod$().provideDelegate_n5byny$(this, Mp3File$artistfix_metadata);
    this.titlefix_4417u5$_0 = this.o.scalar_287e2$().prop_absfod$().provideDelegate_n5byny$(this, Mp3File$titlefix_metadata);
  }
  var Mp3File$artist_metadata = new PropertyMetadata('artist');
  Object.defineProperty(Mp3File.prototype, 'artist', {
    get: function () {
      return this.artist_gnizx9$_0.getValue_lrcp0p$(this, Mp3File$artist_metadata);
    }
  });
  var Mp3File$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(Mp3File.prototype, 'title', {
    get: function () {
      return this.title_oczcia$_0.getValue_lrcp0p$(this, Mp3File$title_metadata);
    }
  });
  var Mp3File$bytes_metadata = new PropertyMetadata('bytes');
  Object.defineProperty(Mp3File.prototype, 'bytes', {
    get: function () {
      return this.bytes_g2yq1r$_0.getValue_lrcp0p$(this, Mp3File$bytes_metadata);
    }
  });
  var Mp3File$secs_metadata = new PropertyMetadata('secs');
  Object.defineProperty(Mp3File.prototype, 'secs', {
    get: function () {
      return this.secs_s9ic5k$_0.getValue_lrcp0p$(this, Mp3File$secs_metadata);
    }
  });
  var Mp3File$artistfix_metadata = new PropertyMetadata('artistfix');
  Object.defineProperty(Mp3File.prototype, 'artistfix', {
    get: function () {
      return this.artistfix_p2btfg$_0.getValue_lrcp0p$(this, Mp3File$artistfix_metadata);
    }
  });
  var Mp3File$titlefix_metadata = new PropertyMetadata('titlefix');
  Object.defineProperty(Mp3File.prototype, 'titlefix', {
    get: function () {
      return this.titlefix_4417u5$_0.getValue_lrcp0p$(this, Mp3File$titlefix_metadata);
    }
  });
  Mp3File.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mp3File',
    interfaces: [Base]
  };
  function ActivePlaylist() {
    ActivePlaylist$Companion_getInstance();
    BaseRootVal.call(this);
    this.position_xm37wp$_0 = this.o.scalar_287e2$().prop_absfod$().provideDelegate_n5byny$(this, ActivePlaylist$position_metadata);
  }
  var ActivePlaylist$position_metadata = new PropertyMetadata('position');
  Object.defineProperty(ActivePlaylist.prototype, 'position', {
    get: function () {
      return this.position_xm37wp$_0.getValue_lrcp0p$(this, ActivePlaylist$position_metadata);
    }
  });
  function ActivePlaylist$Companion() {
    ActivePlaylist$Companion_instance = this;
    ActivePlaylist.call(this);
    this.emptyOf = wrapper([ActivePlaylist$Companion$emptyOf$lambda, ActivePlaylist$Companion$emptyOf$lambda_0, ActivePlaylist$Companion$emptyOf$lambda_1]);
  }
  ActivePlaylist$Companion.prototype.of_za3rmp$ = function (d) {
    return initFrom(this.emptyOf(d), d);
  };
  function ActivePlaylist$Companion$emptyOf$lambda() {
    return new LocalPlaylist();
  }
  function ActivePlaylist$Companion$emptyOf$lambda_0() {
    return new CloudPlaylist();
  }
  function ActivePlaylist$Companion$emptyOf$lambda_1() {
    return new CustomPlaylist();
  }
  ActivePlaylist$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ActivePlaylist]
  };
  var ActivePlaylist$Companion_instance = null;
  function ActivePlaylist$Companion_getInstance() {
    if (ActivePlaylist$Companion_instance === null) {
      new ActivePlaylist$Companion();
    }
    return ActivePlaylist$Companion_instance;
  }
  ActivePlaylist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActivePlaylist',
    interfaces: [BaseRootVal]
  };
  function LocalPlaylist() {
    ActivePlaylist.call(this);
  }
  LocalPlaylist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalPlaylist',
    interfaces: [ActivePlaylist]
  };
  function CloudPlaylist() {
    ActivePlaylist.call(this);
  }
  CloudPlaylist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloudPlaylist',
    interfaces: [ActivePlaylist]
  };
  function CustomPlaylist() {
    ActivePlaylist.call(this);
    this.songs_jc8wwp$_0 = this.o.array_287e2$().prop_absfod$().provideDelegate_n5byny$(this, CustomPlaylist$songs_metadata);
  }
  var CustomPlaylist$songs_metadata = new PropertyMetadata('songs');
  Object.defineProperty(CustomPlaylist.prototype, 'songs', {
    get: function () {
      return this.songs_jc8wwp$_0.getValue_lrcp0p$(this, CustomPlaylist$songs_metadata);
    }
  });
  CustomPlaylist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CustomPlaylist',
    interfaces: [ActivePlaylist]
  };
  function PlayerSettings() {
    Base.call(this);
    this.activePlaylist_hmjqbe$_0 = baseProp(this.o.scalar_287e2$(), ActivePlaylist$Companion_getInstance().emptyOf).provideDelegate_n5byny$(this, PlayerSettings$activePlaylist_metadata);
  }
  var PlayerSettings$activePlaylist_metadata = new PropertyMetadata('activePlaylist');
  Object.defineProperty(PlayerSettings.prototype, 'activePlaylist', {
    get: function () {
      return this.activePlaylist_hmjqbe$_0.getValue_lrcp0p$(this, PlayerSettings$activePlaylist_metadata);
    }
  });
  PlayerSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerSettings',
    interfaces: [Base]
  };
  var package$musiclib = _.musiclib || (_.musiclib = {});
  Object.defineProperty(package$musiclib, 'music', {
    get: get_music
  });
  package$musiclib.get_songs_lzzonv$ = get_songs;
  package$musiclib.get_storage_lzzonv$ = get_storage;
  package$musiclib.get_usersongs_13xn5r$ = get_usersongs;
  package$musiclib.StoreState = StoreState;
  Object.defineProperty(UserSongState, 'Like', {
    get: UserSongState$Like_getInstance
  });
  Object.defineProperty(UserSongState, 'DontLike', {
    get: UserSongState$DontLike_getInstance
  });
  package$musiclib.UserSongState = UserSongState;
  $$importsForInline$$['appsimake-firebaseshr'] = $module$appsimake_firebaseshr;
  package$musiclib.UserSong = UserSong;
  package$musiclib.Mp3File = Mp3File;
  Object.defineProperty(ActivePlaylist, 'Companion', {
    get: ActivePlaylist$Companion_getInstance
  });
  package$musiclib.ActivePlaylist = ActivePlaylist;
  package$musiclib.LocalPlaylist = LocalPlaylist;
  package$musiclib.CloudPlaylist = CloudPlaylist;
  package$musiclib.CustomPlaylist = CustomPlaylist;
  package$musiclib.PlayerSettings = PlayerSettings;
  music = lib().provideDelegate_n5byny$(this, music_metadata);
  songs = coll();
  storage = coll();
  usersongs = coll();
  Kotlin.defineModule('appsimake-musiclib', _);
  return _;
}(typeof this['appsimake-musiclib'] === 'undefined' ? {} : this['appsimake-musiclib'], kotlin, this['appsimake-commonshr'], this['appsimake-firebaseshr']);
