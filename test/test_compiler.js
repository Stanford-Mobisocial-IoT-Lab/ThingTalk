// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingTalk
//
// Copyright 2017-2020 The Board of Trustees of the Leland Stanford Junior University
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Compiler from '../lib/compiler';
import SchemaRetriever from '../lib/schema';

import _mockSchemaDelegate from './mock_schema_delegate';
import _mockMemoryClient from './mock_memory_client';
let schemaRetriever = new SchemaRetriever(_mockSchemaDelegate, _mockMemoryClient, true);

const TEST_CASES = [
    //1
    [`now => @com.xkcd.get_comic() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.xkcd", { }, "get_comic", _t_0, { projection: ["title", "picture_url", "link", "alt_text"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.number;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.title;
          _t_9 = _t_5.picture_url;
          _t_10 = _t_5.link;
          _t_11 = _t_5.alt_text;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 2
    [`now => @com.xkcd(id="com.xkcd-123").get_comic() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.xkcd", { id: "com.xkcd-123", }, "get_comic", _t_0, { projection: ["title", "picture_url", "link", "alt_text"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.number;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.title;
          _t_9 = _t_5.picture_url;
          _t_10 = _t_5.link;
          _t_11 = _t_5.alt_text;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 3
    [`now => @com.xkcd.get_comic() => @com.twitter.post(status=title);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.xkcd", { }, "get_comic", _t_0, { projection: ["title"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.number;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.title;
          _t_9 = _t_5.picture_url;
          _t_10 = _t_5.link;
          _t_11 = _t_5.alt_text;
          try {
            _t_12 = {};
            _t_12.status = _t_8;
            await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_12));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 4
    [`now => @com.xkcd.get_comic(), number <= 1000 => @com.twitter.post(status=title);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.xkcd", { }, "get_comic", _t_0, { projection: ["title", "number"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.number;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.title;
          _t_9 = _t_5.picture_url;
          _t_10 = _t_5.link;
          _t_11 = _t_5.alt_text;
          _t_13 = 1000;
          _t_12 = _t_6 <= _t_13;
          if (_t_12) {
            try {
              _t_14 = {};
              _t_14.status = _t_8;
              await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_14));
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 5
    [`monitor(@thermostat.get_temperature(), value >= 21C) => @org.thingpedia.builtin.thingengine.builtin.say(message="bla");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("thermostat", { }, "get_temperature", _t_1, { projection: ["value"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.value;
        _t_8 = __builtin.isNewTuple(_t_0, _t_5, ["value"]);
        _t_9 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_9);
        _t_0 = _t_9;
        if (_t_8) {
          _t_11 = 21;
          _t_10 = _t_7 >= _t_11;
          if (_t_10) {
            try {
              _t_12 = {};
              _t_13 = "bla";
              _t_12.message = _t_13;
              await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.builtin", { }, "say", _t_12));
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 6
    [`monitor (@thermostat.get_temperature(), value >= 21C) => @org.thingpedia.builtin.thingengine.builtin.say(message="bla");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("thermostat", { }, "get_temperature", _t_1, { projection: ["value"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.value;
        _t_8 = __builtin.isNewTuple(_t_0, _t_5, ["value"]);
        _t_9 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_9);
        _t_0 = _t_9;
        if (_t_8) {
          _t_11 = 21;
          _t_10 = _t_7 >= _t_11;
          if (_t_10) {
            try {
              _t_12 = {};
              _t_13 = "bla";
              _t_12.message = _t_13;
              await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.builtin", { }, "say", _t_12));
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 7
    [`now => @org.thingpedia.builtin.thingengine.builtin.say(message="test");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "test";
      _t_0.message = _t_1;
      await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.builtin", { }, "say", _t_0));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 8
    [`monitor(@com.twitter(id="twitter-foo").home_timeline(), author=="HillaryClinton"^^tt:username) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = new Array(1);
    _t_3 = new Array(3);
    _t_4 = "author";
    _t_3[0] = _t_4;
    _t_5 = "==";
    _t_3[1] = _t_5;
    _t_6 = new __builtin.Entity("HillaryClinton", null);
    _t_3[2] = _t_6;
    _t_2[0] = _t_3;
    _t_7 = await __env.invokeMonitor("com.twitter", { id: "twitter-foo", }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"], filter: _t_2 });
    {
      let _iter_tmp = await _t_7.next();
      while (!_iter_tmp.done) {
        _t_8 = _iter_tmp.value;
        _t_9 = _t_8[0];
        _t_10 = _t_8[1];
        _t_11 = _t_10.__response;
        _t_12 = _t_10.text;
        _t_13 = _t_10.hashtags;
        _t_14 = _t_10.urls;
        _t_15 = _t_10.author;
        _t_16 = _t_10.in_reply_to;
        _t_17 = _t_10.tweet_id;
        _t_18 = __builtin.isNewTuple(_t_0, _t_10, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_19 = __builtin.addTuple(_t_0, _t_10);
        await __env.writeState(0, _t_19);
        _t_0 = _t_19;
        if (_t_18) {
          _t_21 = String (_t_15);
          _t_22 = new __builtin.Entity("HillaryClinton", null);
          _t_23 = String (_t_22);
          _t_20 = __builtin.equality(_t_21, _t_23);
          if (_t_20) {
            try {
              await __env.output(String(_t_9), _t_10);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
        } else {

        }
        _iter_tmp = await _t_7.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 9
    [`monitor(@org.thingpedia.weather.current(location=new Location(1, 3, "Somewhere"))) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = new __builtin.Location(1, 3, "Somewhere");
    _t_1.location = _t_2;
    _t_3 = await __env.invokeMonitor("org.thingpedia.weather", { }, "current", _t_1, { projection: ["temperature", "wind_speed", "humidity", "cloudiness", "fog", "status", "icon"] });
    {
      let _iter_tmp = await _t_3.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = _t_4[0];
        _t_6 = _t_4[1];
        _t_7 = _t_6.__response;
        _t_8 = _t_6.temperature;
        _t_9 = _t_6.wind_speed;
        _t_10 = _t_6.humidity;
        _t_11 = _t_6.cloudiness;
        _t_12 = _t_6.fog;
        _t_13 = _t_6.status;
        _t_14 = _t_6.icon;
        _t_15 = __builtin.isNewTuple(_t_0, _t_6, ["temperature", "wind_speed", "humidity", "cloudiness", "fog", "status", "icon"]);
        _t_16 = __builtin.addTuple(_t_0, _t_6);
        await __env.writeState(0, _t_16);
        _t_0 = _t_16;
        if (_t_15) {
          try {
            await __env.output(String(_t_5), _t_6);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_3.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 10
    [`monitor(@org.thingpedia.weather.current(location=new Location(1, 3))) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = new __builtin.Location(1, 3, null);
    _t_1.location = _t_2;
    _t_3 = await __env.invokeMonitor("org.thingpedia.weather", { }, "current", _t_1, { projection: ["temperature", "wind_speed", "humidity", "cloudiness", "fog", "status", "icon"] });
    {
      let _iter_tmp = await _t_3.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = _t_4[0];
        _t_6 = _t_4[1];
        _t_7 = _t_6.__response;
        _t_8 = _t_6.temperature;
        _t_9 = _t_6.wind_speed;
        _t_10 = _t_6.humidity;
        _t_11 = _t_6.cloudiness;
        _t_12 = _t_6.fog;
        _t_13 = _t_6.status;
        _t_14 = _t_6.icon;
        _t_15 = __builtin.isNewTuple(_t_0, _t_6, ["temperature", "wind_speed", "humidity", "cloudiness", "fog", "status", "icon"]);
        _t_16 = __builtin.addTuple(_t_0, _t_6);
        await __env.writeState(0, _t_16);
        _t_0 = _t_16;
        if (_t_15) {
          try {
            await __env.output(String(_t_5), _t_6);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_3.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 11
    [`attimer(time=[new Time(12, 30)]) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  try {
    _t_1 = new Array(1);
    _t_2 = new __builtin.Time(12, 30, 0);
    _t_1[0] = _t_2;
    _t_0 = await __env.invokeAtTimer(_t_1, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          await __env.output(String(_t_3), _t_4);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke at-timer", _exc_);
  }`]],

    // 12
    [`attimer(time=[new Time(12, 30)]) => @com.twitter.post(status="lol");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  try {
    _t_1 = new Array(1);
    _t_2 = new __builtin.Time(12, 30, 0);
    _t_1[0] = _t_2;
    _t_0 = await __env.invokeAtTimer(_t_1, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          _t_5 = {};
          _t_6 = "lol";
          _t_5.status = _t_6;
          await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_5));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke at-timer", _exc_);
  }`]],

    // 13
    [`timer(base=new Date(), interval=1h) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          await __env.output(String(_t_3), _t_4);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 14
    [`timer(base=new Date(), interval=1h) => @com.twitter.post(status="lol");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          _t_5 = {};
          _t_6 = "lol";
          _t_5.status = _t_6;
          await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_5));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 15
    [`now => @com.youtube.search_videos(query="lol"), video_url == "http:// www.youtube.com"^^tt:url =>  notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "lol";
      _t_0.query = _t_1;
      _t_2 = new Array(1);
      _t_3 = new Array(3);
      _t_4 = "video_url";
      _t_3[0] = _t_4;
      _t_5 = "==";
      _t_3[1] = _t_5;
      _t_6 = new __builtin.Entity("http:// www.youtube.com", null);
      _t_3[2] = _t_6;
      _t_2[0] = _t_3;
      _t_7 = await __env.invokeQuery("com.youtube", { }, "search_videos", _t_0, { projection: ["video_id", "title", "description", "thumbnail", "video_url"], filter: _t_2 });
      _t_8 = __builtin.getAsyncIterator(_t_7);
      {
        let _iter_tmp = await _t_8.next();
        while (!_iter_tmp.done) {
          _t_9 = _iter_tmp.value;
          _t_10 = _t_9[0];
          _t_11 = _t_9[1];
          _t_12 = _t_11.channel_id;
          _t_13 = _t_11.count;
          _t_14 = _t_11.__response;
          _t_15 = _t_11.video_id;
          _t_16 = _t_11.title;
          _t_17 = _t_11.description;
          _t_18 = _t_11.thumbnail;
          _t_19 = _t_11.video_url;
          _t_21 = new __builtin.Entity("http:// www.youtube.com", null);
          _t_20 = __builtin.equality(_t_19, _t_21);
          if (_t_20) {
            try {
              await __env.output(String(_t_10), _t_11);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_8.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 16
    [`monitor(@com.xkcd(id="com.xkcd-6").get_comic()) => @com.twitter(id="twitter-foo").post_picture(caption=title, picture_url=picture_url);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.xkcd", { id: "com.xkcd-6", }, "get_comic", _t_1, { projection: ["title", "picture_url", "link", "alt_text"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.number;
        _t_7 = _t_5.__response;
        _t_8 = _t_5.title;
        _t_9 = _t_5.picture_url;
        _t_10 = _t_5.link;
        _t_11 = _t_5.alt_text;
        _t_12 = __builtin.isNewTuple(_t_0, _t_5, ["title", "picture_url", "link", "alt_text"]);
        _t_13 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_13);
        _t_0 = _t_13;
        if (_t_12) {
          try {
            _t_14 = {};
            _t_14.caption = _t_8;
            _t_15 = String (_t_9);
            _t_14.picture_url = _t_15;
            await __builtin.drainAction(__env.invokeAction("com.twitter", { id: "twitter-foo", }, "post_picture", _t_14));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 17
    [`class @dyn_0 extends @remote {
        action send(in req foo : String);
    }
    now => @dyn_0.send(foo="foo");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "foo";
      _t_0.foo = _t_1;
      await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.remote", { }, "send", _t_0));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 18
    [`monitor(@com.twitter.home_timeline(), text =~ "foo" || (text =~"bar" && !(text =~ "lol"))) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.text;
        _t_8 = _t_5.hashtags;
        _t_9 = _t_5.urls;
        _t_10 = _t_5.author;
        _t_11 = _t_5.in_reply_to;
        _t_12 = _t_5.tweet_id;
        _t_13 = __builtin.isNewTuple(_t_0, _t_5, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_14 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_14);
        _t_0 = _t_14;
        if (_t_13) {
          _t_15 = false;
          _t_16 = true;
          _t_19 = "lol";
          _t_18 = __builtin.like(_t_7, _t_19);
          _t_17 = ! (_t_18);
          _t_16 = _t_16 && _t_17;
          _t_21 = "bar";
          _t_20 = __builtin.like(_t_7, _t_21);
          _t_16 = _t_16 && _t_20;
          _t_15 = _t_15 || _t_16;
          _t_23 = "foo";
          _t_22 = __builtin.like(_t_7, _t_23);
          _t_15 = _t_15 || _t_22;
          if (_t_15) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 19
    [`monitor(@com.twitter.home_timeline()) => @org.thingpedia.builtin.thingengine.builtin.say(message=$result);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.text;
        _t_8 = _t_5.hashtags;
        _t_9 = _t_5.urls;
        _t_10 = _t_5.author;
        _t_11 = _t_5.in_reply_to;
        _t_12 = _t_5.tweet_id;
        _t_13 = __builtin.isNewTuple(_t_0, _t_5, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_14 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_14);
        _t_0 = _t_14;
        if (_t_13) {
          try {
            _t_15 = {};
            _t_16 = await __env.formatEvent(_t_4, _t_5, "string");
            _t_15.message = _t_16;
            await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.builtin", { }, "say", _t_15));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 20
    // this used to be a different program
    // it is left here to avoid changing numbers
    [`monitor(@com.twitter.home_timeline()) => @org.thingpedia.builtin.thingengine.builtin.say(message=$result);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.text;
        _t_8 = _t_5.hashtags;
        _t_9 = _t_5.urls;
        _t_10 = _t_5.author;
        _t_11 = _t_5.in_reply_to;
        _t_12 = _t_5.tweet_id;
        _t_13 = __builtin.isNewTuple(_t_0, _t_5, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_14 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_14);
        _t_0 = _t_14;
        if (_t_13) {
          try {
            _t_15 = {};
            _t_16 = await __env.formatEvent(_t_4, _t_5, "string");
            _t_15.message = _t_16;
            await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.builtin", { }, "say", _t_15));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 21
    [`monitor(@com.xkcd(id="com.xkcd-6").get_comic()) => @com.twitter.post(status=title);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.xkcd", { id: "com.xkcd-6", }, "get_comic", _t_1, { projection: ["title", "picture_url", "link", "alt_text"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.number;
        _t_7 = _t_5.__response;
        _t_8 = _t_5.title;
        _t_9 = _t_5.picture_url;
        _t_10 = _t_5.link;
        _t_11 = _t_5.alt_text;
        _t_12 = __builtin.isNewTuple(_t_0, _t_5, ["title", "picture_url", "link", "alt_text"]);
        _t_13 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_13);
        _t_0 = _t_13;
        if (_t_12) {
          try {
            _t_14 = {};
            _t_14.status = _t_8;
            await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_14));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 22
    [`now => @org.thingpedia.builtin.thingengine.builtin.get_time(), time >= new Time(10,0) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("org.thingpedia.builtin.thingengine.builtin", { }, "get_time", _t_0, { projection: ["time"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.time;
          _t_9 = __builtin.getTime (_t_7);
          _t_10 = new __builtin.Time(10, 0, 0);
          _t_8 = _t_9 >= _t_10;
          if (_t_8) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 23
    [`now => @com.uber.price_estimate(start=new Location(1, 3, "Somewhere"), end=new Location(1, 3, "Somewhere")), low_estimate >= 7 => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new __builtin.Location(1, 3, "Somewhere");
      _t_0.end = _t_1;
      _t_2 = new __builtin.Location(1, 3, "Somewhere");
      _t_0.start = _t_2;
      _t_3 = new Array(1);
      _t_4 = new Array(3);
      _t_5 = "low_estimate";
      _t_4[0] = _t_5;
      _t_6 = ">=";
      _t_4[1] = _t_6;
      _t_7 = 7;
      _t_4[2] = _t_7;
      _t_3[0] = _t_4;
      _t_8 = await __env.invokeQuery("com.uber", { }, "price_estimate", _t_0, { projection: ["uber_type", "low_estimate", "high_estimate", "surge", "duration", "distance"], filter: _t_3 });
      _t_9 = __builtin.getAsyncIterator(_t_8);
      {
        let _iter_tmp = await _t_9.next();
        while (!_iter_tmp.done) {
          _t_10 = _iter_tmp.value;
          _t_11 = _t_10[0];
          _t_12 = _t_10[1];
          _t_13 = _t_12.__response;
          _t_14 = _t_12.uber_type;
          _t_15 = _t_12.low_estimate;
          _t_16 = _t_12.high_estimate;
          _t_17 = _t_12.surge;
          _t_18 = _t_12.duration;
          _t_19 = _t_12.distance;
          _t_21 = 7;
          _t_22 = __builtin.getCurrency (_t_21);
          _t_20 = _t_15 >= _t_22;
          if (_t_20) {
            try {
              await __env.output(String(_t_11), _t_12);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_9.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 24
    [`class @__dyn_0 extends @org.thingpedia.builtin.thingengine.remote {
        action send (in req __principal : Entity(tt:contact), in req __program_id : Entity(tt:program_id), in req __flow : Number, in req __kindChannel : Entity(tt:function));
    }
    monitor(@com.twitter.home_timeline()) => @__dyn_0.send(__principal="mock-account:12345678"^^tt:contact("me"), __program_id=$program_id, __flow=0, __kindChannel=$type);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.text;
        _t_8 = _t_5.hashtags;
        _t_9 = _t_5.urls;
        _t_10 = _t_5.author;
        _t_11 = _t_5.in_reply_to;
        _t_12 = _t_5.tweet_id;
        _t_13 = __builtin.isNewTuple(_t_0, _t_5, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_14 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_14);
        _t_0 = _t_14;
        if (_t_13) {
          try {
            _t_15 = {};
            _t_16 = 0;
            _t_15.__flow = _t_16;
            _t_15.__kindChannel = _t_4;
            _t_17 = new __builtin.Entity("mock-account:12345678", "me");
            _t_15.__principal = _t_17;
            _t_18 = __env.program_id;
            _t_15.__program_id = _t_18;
            await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.remote", { }, "send", _t_15));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }
  try {
    _t_19 = 0;
    _t_20 = new __builtin.Entity("mock-account:12345678", "me");
    await __env.sendEndOfFlow(_t_20, _t_19);
  } catch(_exc_) {
    __env.reportError("Failed to signal end-of-flow", _exc_);
  }`]],

    // 25
    [`monitor(@com.twitter.home_timeline(), any(@org.thingpedia.builtin.thingengine.builtin.get_time(), time >= new Time(9,0) && time <= new Time(10, 0)));
    monitor(@com.twitter.home_timeline(), text =~ "lol" && any(@org.thingpedia.builtin.thingengine.builtin.get_time(), time >= new Time(9,0) && time <= new Time(10, 0)));`,
    [`  "use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.text;
        _t_8 = _t_5.hashtags;
        _t_9 = _t_5.urls;
        _t_10 = _t_5.author;
        _t_11 = _t_5.in_reply_to;
        _t_12 = _t_5.tweet_id;
        _t_13 = __builtin.isNewTuple(_t_0, _t_5, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_14 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_14);
        _t_0 = _t_14;
        if (_t_13) {
          _t_15 = false;
          try {
            _t_16 = {};
            _t_17 = await __env.invokeQuery("org.thingpedia.builtin.thingengine.builtin", { }, "get_time", _t_16, { projection: ["time"] });
            _t_18 = __builtin.getAsyncIterator(_t_17);
            {
              let _iter_tmp = await _t_18.next();
              while (!_iter_tmp.done) {
                _t_19 = _iter_tmp.value;
                _t_20 = _t_19[0];
                _t_21 = _t_19[1];
                _t_22 = _t_21.__response;
                _t_23 = _t_21.time;
                _t_24 = true;
                _t_26 = __builtin.getTime (_t_23);
                _t_27 = new __builtin.Time(10, 0, 0);
                _t_25 = _t_26 <= _t_27;
                _t_24 = _t_24 && _t_25;
                _t_29 = __builtin.getTime (_t_23);
                _t_30 = new __builtin.Time(9, 0, 0);
                _t_28 = _t_29 >= _t_30;
                _t_24 = _t_24 && _t_28;
                if (_t_24) {
                  _t_15 = true;
                  break;
                } else {

                }
                _iter_tmp = await _t_18.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          if (_t_15) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`, `  "use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  _t_0 = await __env.readState(1);
  try {
    _t_1 = {};
    _t_2 = new Array(1);
    _t_3 = new Array(3);
    _t_4 = "text";
    _t_3[0] = _t_4;
    _t_5 = "=~";
    _t_3[1] = _t_5;
    _t_6 = "lol";
    _t_3[2] = _t_6;
    _t_2[0] = _t_3;
    _t_7 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"], filter: _t_2 });
    {
      let _iter_tmp = await _t_7.next();
      while (!_iter_tmp.done) {
        _t_8 = _iter_tmp.value;
        _t_9 = _t_8[0];
        _t_10 = _t_8[1];
        _t_11 = _t_10.__response;
        _t_12 = _t_10.text;
        _t_13 = _t_10.hashtags;
        _t_14 = _t_10.urls;
        _t_15 = _t_10.author;
        _t_16 = _t_10.in_reply_to;
        _t_17 = _t_10.tweet_id;
        _t_18 = __builtin.isNewTuple(_t_0, _t_10, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_19 = __builtin.addTuple(_t_0, _t_10);
        await __env.writeState(1, _t_19);
        _t_0 = _t_19;
        if (_t_18) {
          _t_20 = true;
          _t_21 = false;
          try {
            _t_22 = {};
            _t_23 = await __env.invokeQuery("org.thingpedia.builtin.thingengine.builtin", { }, "get_time", _t_22, { projection: ["time"] });
            _t_24 = __builtin.getAsyncIterator(_t_23);
            {
              let _iter_tmp = await _t_24.next();
              while (!_iter_tmp.done) {
                _t_25 = _iter_tmp.value;
                _t_26 = _t_25[0];
                _t_27 = _t_25[1];
                _t_28 = _t_27.__response;
                _t_29 = _t_27.time;
                _t_30 = true;
                _t_32 = __builtin.getTime (_t_29);
                _t_33 = new __builtin.Time(10, 0, 0);
                _t_31 = _t_32 <= _t_33;
                _t_30 = _t_30 && _t_31;
                _t_35 = __builtin.getTime (_t_29);
                _t_36 = new __builtin.Time(9, 0, 0);
                _t_34 = _t_35 >= _t_36;
                _t_30 = _t_30 && _t_34;
                if (_t_30) {
                  _t_21 = true;
                  break;
                } else {

                }
                _iter_tmp = await _t_24.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          _t_20 = _t_20 && _t_21;
          _t_38 = "lol";
          _t_37 = __builtin.like(_t_12, _t_38);
          _t_20 = _t_20 && _t_37;
          if (_t_20) {
            try {
              await __env.output(String(_t_9), _t_10);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
        } else {

        }
        _iter_tmp = await _t_7.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 26
    [`class @__dyn_0 extends @org.thingpedia.builtin.thingengine.remote {
        action send (in req __principal : Entity(tt:contact), in req __program_id : Entity(tt:program_id), in req __flow : Number, in req __kindChannel : Entity(tt:function), in opt interval : Measure(ms));
    }
    timer(base=new Date(), interval=10s) => @__dyn_0.send(__principal="1234"^^tt:contact, __program_id=$program_id, __flow=0, __kindChannel=$type, interval=10s);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 10000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          _t_5 = {};
          _t_6 = 0;
          _t_5.__flow = _t_6;
          _t_5.__kindChannel = _t_3;
          _t_7 = new __builtin.Entity("1234", null);
          _t_5.__principal = _t_7;
          _t_8 = __env.program_id;
          _t_5.__program_id = _t_8;
          _t_9 = 10000;
          _t_5.interval = _t_9;
          await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.remote", { }, "send", _t_5));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }
  try {
    _t_10 = 0;
    _t_11 = new __builtin.Entity("1234", null);
    await __env.sendEndOfFlow(_t_11, _t_10);
  } catch(_exc_) {
    __env.reportError("Failed to signal end-of-flow", _exc_);
  }`]],

    // 27
    [`
    class @__dyn_0 extends @org.thingpedia.builtin.thingengine.remote {
        monitorable list query receive (in req __principal : Entity(tt:contact), in req __program_id : Entity(tt:program_id), in req __flow : Number, out __kindChannel : Entity(tt:function), out interval : Measure(ms));
    }
    monitor( @__dyn_0.receive(__principal="mock-account:12345678"^^tt:contact("me"), __program_id=$program_id, __flow=0))  => @security-camera.set_power(power=enum(on));`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = 0;
    _t_1.__flow = _t_2;
    _t_3 = new __builtin.Entity("mock-account:12345678", "me");
    _t_1.__principal = _t_3;
    _t_4 = await __env.invokeMonitor("org.thingpedia.builtin.thingengine.remote", { }, "receive", _t_1, { projection: ["__kindChannel", "interval"] });
    {
      let _iter_tmp = await _t_4.next();
      while (!_iter_tmp.done) {
        _t_5 = _iter_tmp.value;
        _t_6 = _t_5[0];
        _t_7 = _t_5[1];
        _t_8 = _t_7.__response;
        _t_9 = _t_7.__kindChannel;
        _t_10 = _t_7.interval;
        _t_11 = __builtin.isNewTuple(_t_0, _t_7, ["__kindChannel", "interval"]);
        _t_12 = __builtin.addTuple(_t_0, _t_7);
        await __env.writeState(0, _t_12);
        _t_0 = _t_12;
        if (_t_11) {
          try {
            _t_13 = {};
            _t_14 = "on";
            _t_13.power = _t_14;
            await __builtin.drainAction(__env.invokeAction("security-camera", { }, "set_power", _t_13));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_4.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 28
    [`monitor (@com.twitter.home_timeline() => @com.bing.web_search(query="foo")) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  _t_0 = await __env.readState(0);
  _t_1 = async function(__emit) {
    _t_2 = await __env.readState(1);
    try {
      _t_3 = {};
      _t_4 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_3, { projection: [] });
      {
        let _iter_tmp = await _t_4.next();
        while (!_iter_tmp.done) {
          _t_5 = _iter_tmp.value;
          _t_6 = _t_5[0];
          _t_7 = _t_5[1];
          _t_8 = _t_7.__response;
          _t_9 = _t_7.text;
          _t_10 = _t_7.hashtags;
          _t_11 = _t_7.urls;
          _t_12 = _t_7.author;
          _t_13 = _t_7.in_reply_to;
          _t_14 = _t_7.tweet_id;
          _t_15 = __builtin.isNewTuple(_t_2, _t_7, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
          _t_16 = __builtin.addTuple(_t_2, _t_7);
          await __env.writeState(1, _t_16);
          _t_2 = _t_16;
          if (_t_15) {
            __emit(_t_6, _t_7);
          } else {

          }
          _iter_tmp = await _t_4.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke trigger", _exc_);
    }
  }
  _t_17 = async function(__emit) {
    _t_18 = await __env.readState(2);
    try {
      _t_19 = {};
      _t_20 = "foo";
      _t_19.query = _t_20;
      _t_21 = await __env.invokeMonitor("com.bing", { }, "web_search", _t_19, { projection: ["title", "description", "link"] });
      {
        let _iter_tmp = await _t_21.next();
        while (!_iter_tmp.done) {
          _t_22 = _iter_tmp.value;
          _t_23 = _t_22[0];
          _t_24 = _t_22[1];
          _t_25 = _t_24.__response;
          _t_26 = _t_24.title;
          _t_27 = _t_24.description;
          _t_28 = _t_24.link;
          _t_29 = __builtin.isNewTuple(_t_18, _t_24, ["title", "description", "link"]);
          _t_30 = __builtin.addTuple(_t_18, _t_24);
          await __env.writeState(2, _t_30);
          _t_18 = _t_30;
          if (_t_29) {
            __emit(_t_23, _t_24);
          } else {

          }
          _iter_tmp = await _t_21.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke trigger", _exc_);
    }
  }
  _t_31 = __builtin.streamUnion(_t_1, _t_17);
  {
    let _iter_tmp = await _t_31.next();
    while (!_iter_tmp.done) {
      _t_32 = _iter_tmp.value;
      _t_33 = _t_32[0];
      _t_34 = _t_32[1];
      _t_35 = _t_34.query;
      _t_36 = _t_34.__response;
      _t_37 = _t_34.title;
      _t_38 = _t_34.description;
      _t_39 = _t_34.link;
      _t_40 = _t_34.text;
      _t_41 = _t_34.hashtags;
      _t_42 = _t_34.urls;
      _t_43 = _t_34.author;
      _t_44 = _t_34.in_reply_to;
      _t_45 = _t_34.tweet_id;
      _t_46 = __builtin.isNewTuple(_t_0, _t_34, ["title", "description", "link", "text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
      _t_47 = __builtin.addTuple(_t_0, _t_34);
      await __env.writeState(0, _t_47);
      _t_0 = _t_47;
      if (_t_46) {
        try {
          await __env.output(String(_t_33), _t_34);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
      } else {

      }
      _iter_tmp = await _t_31.next();
    }
  }`]],

    // 29
    [`monitor (@com.twitter.home_timeline() => @com.bing.web_search(query="foo")), text =~ "lol" => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  _t_0 = await __env.readState(1);
  _t_1 = async function(__emit) {
    _t_2 = await __env.readState(2);
    try {
      _t_3 = {};
      _t_4 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_3, { projection: [] });
      {
        let _iter_tmp = await _t_4.next();
        while (!_iter_tmp.done) {
          _t_5 = _iter_tmp.value;
          _t_6 = _t_5[0];
          _t_7 = _t_5[1];
          _t_8 = _t_7.__response;
          _t_9 = _t_7.text;
          _t_10 = _t_7.hashtags;
          _t_11 = _t_7.urls;
          _t_12 = _t_7.author;
          _t_13 = _t_7.in_reply_to;
          _t_14 = _t_7.tweet_id;
          _t_15 = __builtin.isNewTuple(_t_2, _t_7, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
          _t_16 = __builtin.addTuple(_t_2, _t_7);
          await __env.writeState(2, _t_16);
          _t_2 = _t_16;
          if (_t_15) {
            __emit(_t_6, _t_7);
          } else {

          }
          _iter_tmp = await _t_4.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke trigger", _exc_);
    }
  }
  _t_17 = async function(__emit) {
    _t_18 = await __env.readState(3);
    try {
      _t_19 = {};
      _t_20 = "foo";
      _t_19.query = _t_20;
      _t_21 = await __env.invokeMonitor("com.bing", { }, "web_search", _t_19, { projection: ["title", "description", "link"] });
      {
        let _iter_tmp = await _t_21.next();
        while (!_iter_tmp.done) {
          _t_22 = _iter_tmp.value;
          _t_23 = _t_22[0];
          _t_24 = _t_22[1];
          _t_25 = _t_24.__response;
          _t_26 = _t_24.title;
          _t_27 = _t_24.description;
          _t_28 = _t_24.link;
          _t_29 = __builtin.isNewTuple(_t_18, _t_24, ["title", "description", "link"]);
          _t_30 = __builtin.addTuple(_t_18, _t_24);
          await __env.writeState(3, _t_30);
          _t_18 = _t_30;
          if (_t_29) {
            __emit(_t_23, _t_24);
          } else {

          }
          _iter_tmp = await _t_21.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke trigger", _exc_);
    }
  }
  _t_31 = __builtin.streamUnion(_t_1, _t_17);
  {
    let _iter_tmp = await _t_31.next();
    while (!_iter_tmp.done) {
      _t_32 = _iter_tmp.value;
      _t_33 = _t_32[0];
      _t_34 = _t_32[1];
      _t_35 = _t_34.query;
      _t_36 = _t_34.__response;
      _t_37 = _t_34.title;
      _t_38 = _t_34.description;
      _t_39 = _t_34.link;
      _t_40 = _t_34.text;
      _t_41 = _t_34.hashtags;
      _t_42 = _t_34.urls;
      _t_43 = _t_34.author;
      _t_44 = _t_34.in_reply_to;
      _t_45 = _t_34.tweet_id;
      _t_46 = __builtin.isNewTuple(_t_0, _t_34, ["title", "description", "link", "text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
      _t_47 = __builtin.addTuple(_t_0, _t_34);
      await __env.writeState(1, _t_47);
      _t_0 = _t_47;
      if (_t_46) {
        _t_48 = await __env.readState(0);
        _t_50 = "lol";
        _t_49 = __builtin.like(_t_40, _t_50);
        _t_51 = _t_49 !== _t_48;
        if (_t_51) {
          await __env.writeState(0, _t_49);
        } else {

        }
        _t_48 = ! (_t_48);
        _t_49 = _t_49 && _t_48;
        if (_t_49) {
          try {
            await __env.output(String(_t_33), _t_34);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
      } else {

      }
      _iter_tmp = await _t_31.next();
    }
  }`]],

    // 30
    [`now => @com.twitter.home_timeline() => @com.bing.web_search(query=text) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.twitter", { }, "home_timeline", _t_0, { projection: [] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.text;
          _t_8 = _t_5.hashtags;
          _t_9 = _t_5.urls;
          _t_10 = _t_5.author;
          _t_11 = _t_5.in_reply_to;
          _t_12 = _t_5.tweet_id;
          try {
            _t_13 = {};
            _t_13.query = _t_7;
            _t_14 = await __env.invokeQuery("com.bing", { }, "web_search", _t_13, { projection: ["title", "description", "link"] });
            _t_15 = __builtin.getAsyncIterator(_t_14);
            {
              let _iter_tmp = await _t_15.next();
              while (!_iter_tmp.done) {
                _t_16 = _iter_tmp.value;
                _t_17 = _t_16[0];
                _t_18 = _t_16[1];
                _t_19 = _t_18.__response;
                _t_20 = _t_18.title;
                _t_21 = _t_18.description;
                _t_22 = _t_18.link;
                _t_23 = __builtin.combineOutputTypes(_t_4, _t_17);
                _t_24 = {};
                _t_24.query = _t_7;
                _t_24.__response = _t_19;
                _t_24.title = _t_20;
                _t_24.description = _t_21;
                _t_24.link = _t_22;
                _t_24.text = _t_7;
                _t_24.hashtags = _t_8;
                _t_24.urls = _t_9;
                _t_24.author = _t_10;
                _t_24.in_reply_to = _t_11;
                _t_24.tweet_id = _t_12;
                _t_25 = _t_24.query;
                _t_26 = _t_24.__response;
                _t_27 = _t_24.title;
                _t_28 = _t_24.description;
                _t_29 = _t_24.link;
                _t_30 = _t_24.text;
                _t_31 = _t_24.hashtags;
                _t_32 = _t_24.urls;
                _t_33 = _t_24.author;
                _t_34 = _t_24.in_reply_to;
                _t_35 = _t_24.tweet_id;
                try {
                  await __env.output(String(_t_23), _t_24);
                } catch(_exc_) {
                  __env.reportError("Failed to invoke action", _exc_);
                }
                _iter_tmp = await _t_15.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 31
    [`now => @com.twitter.home_timeline() => @com.bing.web_search(query="foo") => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = async function(__emit) {
      try {
        _t_1 = {};
        _t_2 = await __env.invokeQuery("com.twitter", { }, "home_timeline", _t_1, { projection: [] });
        _t_3 = __builtin.getAsyncIterator(_t_2);
        {
          let _iter_tmp = await _t_3.next();
          while (!_iter_tmp.done) {
            _t_4 = _iter_tmp.value;
            _t_5 = _t_4[0];
            _t_6 = _t_4[1];
            _t_7 = _t_6.__response;
            _t_8 = _t_6.text;
            _t_9 = _t_6.hashtags;
            _t_10 = _t_6.urls;
            _t_11 = _t_6.author;
            _t_12 = _t_6.in_reply_to;
            _t_13 = _t_6.tweet_id;
            __emit(_t_5, _t_6);
            _iter_tmp = await _t_3.next();
          }
        }
      } catch(_exc_) {
        __env.reportError("Failed to invoke query", _exc_);
      }
    }
    _t_14 = async function(__emit) {
      try {
        _t_15 = {};
        _t_16 = "foo";
        _t_15.query = _t_16;
        _t_17 = await __env.invokeQuery("com.bing", { }, "web_search", _t_15, { projection: ["title", "description", "link"] });
        _t_18 = __builtin.getAsyncIterator(_t_17);
        {
          let _iter_tmp = await _t_18.next();
          while (!_iter_tmp.done) {
            _t_19 = _iter_tmp.value;
            _t_20 = _t_19[0];
            _t_21 = _t_19[1];
            _t_22 = _t_21.__response;
            _t_23 = _t_21.title;
            _t_24 = _t_21.description;
            _t_25 = _t_21.link;
            __emit(_t_20, _t_21);
            _iter_tmp = await _t_18.next();
          }
        }
      } catch(_exc_) {
        __env.reportError("Failed to invoke query", _exc_);
      }
    }
    _t_26 = __builtin.tableCrossJoin(_t_0, _t_14);
    {
      let _iter_tmp = await _t_26.next();
      while (!_iter_tmp.done) {
        _t_27 = _iter_tmp.value;
        _t_28 = _t_27[0];
        _t_29 = _t_27[1];
        _t_30 = _t_29.query;
        _t_31 = _t_29.__response;
        _t_32 = _t_29.title;
        _t_33 = _t_29.description;
        _t_34 = _t_29.link;
        _t_35 = _t_29.text;
        _t_36 = _t_29.hashtags;
        _t_37 = _t_29.urls;
        _t_38 = _t_29.author;
        _t_39 = _t_29.in_reply_to;
        _t_40 = _t_29.tweet_id;
        try {
          await __env.output(String(_t_28), _t_29);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_26.next();
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 32
    [`attimer(time=[new Time(20, 10)]) => @com.thecatapi(id="com.thecatapi").get() => @com.gmail(id="xxxx").send_picture(to="xxxx"^^tt:email_address, subject="xxx", message="xxx", picture_url=picture_url);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  try {
    _t_1 = new Array(1);
    _t_2 = new __builtin.Time(20, 10, 0);
    _t_1[0] = _t_2;
    _t_0 = await __env.invokeAtTimer(_t_1, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          _t_5 = {};
          _t_6 = await __env.invokeQuery("com.thecatapi", { id: "com.thecatapi", }, "get", _t_5, { projection: ["picture_url"] });
          _t_7 = __builtin.getAsyncIterator(_t_6);
          {
            let _iter_tmp = await _t_7.next();
            while (!_iter_tmp.done) {
              _t_8 = _iter_tmp.value;
              _t_9 = _t_8[0];
              _t_10 = _t_8[1];
              _t_11 = _t_10.count;
              _t_12 = _t_10.__response;
              _t_13 = _t_10.image_id;
              _t_14 = _t_10.picture_url;
              _t_15 = _t_10.link;
              _t_16 = __builtin.combineOutputTypes(_t_3, _t_9);
              _t_17 = {};
              _t_17.count = _t_11;
              _t_17.__response = _t_12;
              _t_17.image_id = _t_13;
              _t_17.picture_url = _t_14;
              _t_17.link = _t_15;
              _t_18 = _t_17.count;
              _t_19 = _t_17.__response;
              _t_20 = _t_17.image_id;
              _t_21 = _t_17.picture_url;
              _t_22 = _t_17.link;
              try {
                _t_23 = {};
                _t_24 = "xxx";
                _t_23.message = _t_24;
                _t_25 = String (_t_21);
                _t_23.picture_url = _t_25;
                _t_26 = "xxx";
                _t_23.subject = _t_26;
                _t_27 = new __builtin.Entity("xxxx", null);
                _t_23.to = _t_27;
                await __builtin.drainAction(__env.invokeAction("com.gmail", { id: "xxxx", }, "send_picture", _t_23));
              } catch(_exc_) {
                __env.reportError("Failed to invoke action", _exc_);
              }
              _iter_tmp = await _t_7.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke at-timer", _exc_);
  }`]],

    // 33
    [`class @__dyn_0 extends @org.thingpedia.builtin.thingengine.remote {
        action send (in req __principal : Entity(tt:contact), in req __program_id : Entity(tt:program_id), in req __flow : Number, in req __kindChannel : Entity(tt:function), in req data : String);
    }
    now => @org.thingpedia.builtin.test(id="org.thingpedia.builtin.test").get_data(size=10byte, count=1) => @__dyn_0(id="org.thingpedia.builtin.thingengine.remote").send(__principal="matrix-account:@gcampax2:matrix.org"^^tt:contact, __program_id=$program_id, __flow=0, __kindChannel=$type, data=data);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = 1;
      _t_0.count = _t_1;
      _t_2 = 10;
      _t_0.size = _t_2;
      _t_3 = await __env.invokeQuery("org.thingpedia.builtin.test", { id: "org.thingpedia.builtin.test", }, "get_data", _t_0, { projection: ["data"] });
      _t_4 = __builtin.getAsyncIterator(_t_3);
      {
        let _iter_tmp = await _t_4.next();
        while (!_iter_tmp.done) {
          _t_5 = _iter_tmp.value;
          _t_6 = _t_5[0];
          _t_7 = _t_5[1];
          _t_8 = _t_7.__response;
          _t_9 = _t_7.data;
          try {
            _t_10 = {};
            _t_11 = 0;
            _t_10.__flow = _t_11;
            _t_10.__kindChannel = _t_6;
            _t_12 = new __builtin.Entity("matrix-account:@gcampax2:matrix.org", null);
            _t_10.__principal = _t_12;
            _t_13 = __env.program_id;
            _t_10.__program_id = _t_13;
            _t_10.data = _t_9;
            await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.remote", { id: "org.thingpedia.builtin.thingengine.remote", }, "send", _t_10));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_4.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    try {
      _t_14 = 0;
      _t_15 = new __builtin.Entity("matrix-account:@gcampax2:matrix.org", null);
      await __env.sendEndOfFlow(_t_15, _t_14);
    } catch(_exc_) {
      __env.reportError("Failed to signal end-of-flow", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 34
    [`timer(base=new Date(), interval=1h) => @com.twitter.search(), text =~ "lol" => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          _t_5 = {};
          _t_6 = new Array(1);
          _t_7 = new Array(3);
          _t_8 = "text";
          _t_7[0] = _t_8;
          _t_9 = "=~";
          _t_7[1] = _t_9;
          _t_10 = "lol";
          _t_7[2] = _t_10;
          _t_6[0] = _t_7;
          _t_11 = await __env.invokeQuery("com.twitter", { }, "search", _t_5, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"], filter: _t_6 });
          _t_12 = __builtin.getAsyncIterator(_t_11);
          {
            let _iter_tmp = await _t_12.next();
            while (!_iter_tmp.done) {
              _t_13 = _iter_tmp.value;
              _t_14 = _t_13[0];
              _t_15 = _t_13[1];
              _t_16 = _t_15.count;
              _t_17 = _t_15.__response;
              _t_18 = _t_15.text;
              _t_19 = _t_15.hashtags;
              _t_20 = _t_15.urls;
              _t_21 = _t_15.author;
              _t_22 = _t_15.in_reply_to;
              _t_23 = _t_15.tweet_id;
              _t_25 = "lol";
              _t_24 = __builtin.like(_t_18, _t_25);
              if (_t_24) {
                _t_26 = __builtin.combineOutputTypes(_t_3, _t_14);
                _t_27 = {};
                _t_27.count = _t_16;
                _t_27.__response = _t_17;
                _t_27.text = _t_18;
                _t_27.hashtags = _t_19;
                _t_27.urls = _t_20;
                _t_27.author = _t_21;
                _t_27.in_reply_to = _t_22;
                _t_27.tweet_id = _t_23;
                _t_28 = _t_27.count;
                _t_29 = _t_27.__response;
                _t_30 = _t_27.text;
                _t_31 = _t_27.hashtags;
                _t_32 = _t_27.urls;
                _t_33 = _t_27.author;
                _t_34 = _t_27.in_reply_to;
                _t_35 = _t_27.tweet_id;
                try {
                  await __env.output(String(_t_26), _t_27);
                } catch(_exc_) {
                  __env.reportError("Failed to invoke action", _exc_);
                }
              } else {

              }
              _iter_tmp = await _t_12.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 35
    [`now => @com.twitter.post_picture(picture_url="file:// /home/gcampagn/Pictures/Me/me%202016.jpg"^^tt:picture, caption="lol");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "lol";
      _t_0.caption = _t_1;
      _t_2 = new __builtin.Entity("file:// /home/gcampagn/Pictures/Me/me%202016.jpg", null);
      _t_3 = String (_t_2);
      _t_0.picture_url = _t_3;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post_picture", _t_0));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 36
    [`now => count(@com.bing.web_search(query="dogs")) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = 0;
    try {
      _t_1 = {};
      _t_2 = "dogs";
      _t_1.query = _t_2;
      _t_3 = await __env.invokeQuery("com.bing", { }, "web_search", _t_1, { projection: [] });
      _t_4 = __builtin.getAsyncIterator(_t_3);
      {
        let _iter_tmp = await _t_4.next();
        while (!_iter_tmp.done) {
          _t_5 = _iter_tmp.value;
          _t_6 = _t_5[0];
          _t_7 = _t_5[1];
          _t_8 = _t_7.__response;
          _t_9 = _t_7.title;
          _t_10 = _t_7.description;
          _t_11 = _t_7.link;
          _t_12 = 1;
          _t_0 = _t_0 + _t_12;
          _iter_tmp = await _t_4.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    _t_14 = "count";
    _t_13 = __builtin.aggregateOutputType(_t_14, _t_6);
    _t_15 = {};
    _t_15.count = _t_0;
    try {
      await __env.output(String(_t_13), _t_15);
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 37
    [`timer(base=new Date(),interval=1h) => count(@com.bing.web_search(query="dogs")) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = 0;
        try {
          _t_6 = {};
          _t_7 = "dogs";
          _t_6.query = _t_7;
          _t_8 = await __env.invokeQuery("com.bing", { }, "web_search", _t_6, { projection: [] });
          _t_9 = __builtin.getAsyncIterator(_t_8);
          {
            let _iter_tmp = await _t_9.next();
            while (!_iter_tmp.done) {
              _t_10 = _iter_tmp.value;
              _t_11 = _t_10[0];
              _t_12 = _t_10[1];
              _t_13 = _t_12.__response;
              _t_14 = _t_12.title;
              _t_15 = _t_12.description;
              _t_16 = _t_12.link;
              _t_17 = 1;
              _t_5 = _t_5 + _t_17;
              _iter_tmp = await _t_9.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        _t_19 = "count";
        _t_18 = __builtin.aggregateOutputType(_t_19, _t_11);
        _t_20 = {};
        _t_20.count = _t_5;
        _t_21 = __builtin.combineOutputTypes(_t_3, _t_18);
        _t_22 = {};
        _t_22.count = _t_5;
        _t_23 = _t_22.count;
        try {
          await __env.output(String(_t_21), _t_22);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 38
    [`timer(base=new Date(),interval=1h) => count(mime_type of @com.google.drive.list_drive_files()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = new __builtin.EqualitySet();
        try {
          _t_6 = {};
          _t_7 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_6, { projection: ["mime_type"] });
          _t_8 = __builtin.getAsyncIterator(_t_7);
          {
            let _iter_tmp = await _t_8.next();
            while (!_iter_tmp.done) {
              _t_9 = _iter_tmp.value;
              _t_10 = _t_9[0];
              _t_11 = _t_9[1];
              _t_12 = _t_11.order_by;
              _t_13 = _t_11.__response;
              _t_14 = _t_11.file_id;
              _t_15 = _t_11.file_name;
              _t_16 = _t_11.mime_type;
              _t_17 = _t_11.description;
              _t_18 = _t_11.starred;
              _t_19 = _t_11.created_time;
              _t_20 = _t_11.modified_time;
              _t_21 = _t_11.file_size;
              _t_22 = _t_11.last_modified_by;
              _t_23 = _t_11.link;
              _t_5.add(_t_11);
              _iter_tmp = await _t_8.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        _t_25 = "count";
        _t_24 = __builtin.aggregateOutputType(_t_25, _t_10);
        _t_26 = {};
        _t_27 = _t_5.size;
        _t_26.mime_type = _t_27;
        _t_28 = __builtin.combineOutputTypes(_t_3, _t_24);
        _t_29 = {};
        _t_29.mime_type = _t_27;
        _t_30 = _t_29.mime_type;
        try {
          await __env.output(String(_t_28), _t_29);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 39
    [`timer(base=new Date(),interval=1h) => avg(file_size of @com.google.drive.list_drive_files()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_6 = 0;
        _t_5 = 0;
        try {
          _t_7 = {};
          _t_8 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_7, { projection: ["file_size"] });
          _t_9 = __builtin.getAsyncIterator(_t_8);
          {
            let _iter_tmp = await _t_9.next();
            while (!_iter_tmp.done) {
              _t_10 = _iter_tmp.value;
              _t_11 = _t_10[0];
              _t_12 = _t_10[1];
              _t_13 = _t_12.order_by;
              _t_14 = _t_12.__response;
              _t_15 = _t_12.file_id;
              _t_16 = _t_12.file_name;
              _t_17 = _t_12.mime_type;
              _t_18 = _t_12.description;
              _t_19 = _t_12.starred;
              _t_20 = _t_12.created_time;
              _t_21 = _t_12.modified_time;
              _t_22 = _t_12.file_size;
              _t_23 = _t_12.last_modified_by;
              _t_24 = _t_12.link;
              _t_25 = 1;
              _t_5 = _t_5 + _t_25;
              _t_6 = _t_6 + _t_22;
              _iter_tmp = await _t_9.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        _t_27 = "avg";
        _t_26 = __builtin.aggregateOutputType(_t_27, _t_11);
        _t_28 = {};
        _t_29 = _t_6 / _t_5;
        _t_28.file_size = _t_29;
        _t_30 = __builtin.combineOutputTypes(_t_3, _t_26);
        _t_31 = {};
        _t_31.file_size = _t_29;
        _t_32 = _t_31.file_size;
        try {
          await __env.output(String(_t_30), _t_31);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 40
    [`timer(base=new Date(),interval=1h) => max(file_size of @com.google.drive.list_drive_files()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = -Infinity;
        try {
          _t_6 = {};
          _t_7 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_6, { projection: ["file_size"] });
          _t_8 = __builtin.getAsyncIterator(_t_7);
          {
            let _iter_tmp = await _t_8.next();
            while (!_iter_tmp.done) {
              _t_9 = _iter_tmp.value;
              _t_10 = _t_9[0];
              _t_11 = _t_9[1];
              _t_12 = _t_11.order_by;
              _t_13 = _t_11.__response;
              _t_14 = _t_11.file_id;
              _t_15 = _t_11.file_name;
              _t_16 = _t_11.mime_type;
              _t_17 = _t_11.description;
              _t_18 = _t_11.starred;
              _t_19 = _t_11.created_time;
              _t_20 = _t_11.modified_time;
              _t_21 = _t_11.file_size;
              _t_22 = _t_11.last_modified_by;
              _t_23 = _t_11.link;
              _t_5 = __builtin.max(_t_5, _t_21);
              _iter_tmp = await _t_8.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        _t_25 = "max";
        _t_24 = __builtin.aggregateOutputType(_t_25, _t_10);
        _t_26 = {};
        _t_26.file_size = _t_5;
        _t_27 = __builtin.combineOutputTypes(_t_3, _t_24);
        _t_28 = {};
        _t_28.file_size = _t_5;
        _t_29 = _t_28.file_size;
        try {
          await __env.output(String(_t_27), _t_28);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 41
    [`now => @com.google.drive.list_drive_files() => max(file_size of @com.google.drive.list_drive_files()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  let _t_52;
  let _t_53;
  let _t_54;
  let _t_55;
  let _t_56;
  let _t_57;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = async function(__emit) {
      try {
        _t_1 = {};
        _t_2 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_1, { projection: ["file_size"] });
        _t_3 = __builtin.getAsyncIterator(_t_2);
        {
          let _iter_tmp = await _t_3.next();
          while (!_iter_tmp.done) {
            _t_4 = _iter_tmp.value;
            _t_5 = _t_4[0];
            _t_6 = _t_4[1];
            _t_7 = _t_6.order_by;
            _t_8 = _t_6.__response;
            _t_9 = _t_6.file_id;
            _t_10 = _t_6.file_name;
            _t_11 = _t_6.mime_type;
            _t_12 = _t_6.description;
            _t_13 = _t_6.starred;
            _t_14 = _t_6.created_time;
            _t_15 = _t_6.modified_time;
            _t_16 = _t_6.file_size;
            _t_17 = _t_6.last_modified_by;
            _t_18 = _t_6.link;
            __emit(_t_5, _t_6);
            _iter_tmp = await _t_3.next();
          }
        }
      } catch(_exc_) {
        __env.reportError("Failed to invoke query", _exc_);
      }
    }
    _t_19 = async function(__emit) {
      _t_20 = -Infinity;
      try {
        _t_21 = {};
        _t_22 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_21, { projection: ["file_size"] });
        _t_23 = __builtin.getAsyncIterator(_t_22);
        {
          let _iter_tmp = await _t_23.next();
          while (!_iter_tmp.done) {
            _t_24 = _iter_tmp.value;
            _t_25 = _t_24[0];
            _t_26 = _t_24[1];
            _t_27 = _t_26.order_by;
            _t_28 = _t_26.__response;
            _t_29 = _t_26.file_id;
            _t_30 = _t_26.file_name;
            _t_31 = _t_26.mime_type;
            _t_32 = _t_26.description;
            _t_33 = _t_26.starred;
            _t_34 = _t_26.created_time;
            _t_35 = _t_26.modified_time;
            _t_36 = _t_26.file_size;
            _t_37 = _t_26.last_modified_by;
            _t_38 = _t_26.link;
            _t_20 = __builtin.max(_t_20, _t_36);
            _iter_tmp = await _t_23.next();
          }
        }
      } catch(_exc_) {
        __env.reportError("Failed to invoke query", _exc_);
      }
      _t_40 = "max";
      _t_39 = __builtin.aggregateOutputType(_t_40, _t_25);
      _t_41 = {};
      _t_41.file_size = _t_20;
      __emit(_t_39, _t_41);
    }
    _t_42 = __builtin.tableCrossJoin(_t_0, _t_19);
    {
      let _iter_tmp = await _t_42.next();
      while (!_iter_tmp.done) {
        _t_43 = _iter_tmp.value;
        _t_44 = _t_43[0];
        _t_45 = _t_43[1];
        _t_46 = _t_45.file_size;
        _t_47 = _t_45.order_by;
        _t_48 = _t_45.__response;
        _t_49 = _t_45.file_id;
        _t_50 = _t_45.file_name;
        _t_51 = _t_45.mime_type;
        _t_52 = _t_45.description;
        _t_53 = _t_45.starred;
        _t_54 = _t_45.created_time;
        _t_55 = _t_45.modified_time;
        _t_56 = _t_45.last_modified_by;
        _t_57 = _t_45.link;
        try {
          await __env.output(String(_t_44), _t_45);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_42.next();
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 42
    [`monitor (max(file_size of @com.google.drive.list_drive_files())) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  _t_0 = await __env.readState(0);
  _t_1 = await __env.readState(1);
  _t_2 = await __env.readState(2);
  try {
    _t_3 = {};
    _t_4 = await __env.invokeMonitor("com.google.drive", { }, "list_drive_files", _t_3, { projection: ["file_size"] });
    {
      let _iter_tmp = await _t_4.next();
      while (!_iter_tmp.done) {
        _t_5 = _iter_tmp.value;
        _t_6 = _t_5[0];
        _t_7 = _t_5[1];
        _t_8 = _t_7.order_by;
        _t_9 = _t_7.__response;
        _t_10 = _t_7.file_id;
        _t_11 = _t_7.file_name;
        _t_12 = _t_7.mime_type;
        _t_13 = _t_7.description;
        _t_14 = _t_7.starred;
        _t_15 = _t_7.created_time;
        _t_16 = _t_7.modified_time;
        _t_17 = _t_7.file_size;
        _t_18 = _t_7.last_modified_by;
        _t_19 = _t_7.link;
        _t_20 = __builtin.isNewTuple(_t_2, _t_7, ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"]);
        _t_21 = __builtin.addTuple(_t_2, _t_7);
        await __env.writeState(2, _t_21);
        _t_2 = _t_21;
        if (_t_20) {
          _t_22 = _t_7.__timestamp;
          _t_23 = _t_22 <= _t_1;
          _t_24 = ! (_t_23);
          if (_t_24) {
            await __env.writeState(1, _t_22);
            _t_1 = _t_22;
            _t_25 = -Infinity;
            try {
              _t_26 = {};
              _t_27 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_26, { projection: ["file_size"] });
              _t_28 = __builtin.getAsyncIterator(_t_27);
              {
                let _iter_tmp = await _t_28.next();
                while (!_iter_tmp.done) {
                  _t_29 = _iter_tmp.value;
                  _t_30 = _t_29[0];
                  _t_31 = _t_29[1];
                  _t_32 = _t_31.order_by;
                  _t_33 = _t_31.__response;
                  _t_34 = _t_31.file_id;
                  _t_35 = _t_31.file_name;
                  _t_36 = _t_31.mime_type;
                  _t_37 = _t_31.description;
                  _t_38 = _t_31.starred;
                  _t_39 = _t_31.created_time;
                  _t_40 = _t_31.modified_time;
                  _t_41 = _t_31.file_size;
                  _t_42 = _t_31.last_modified_by;
                  _t_43 = _t_31.link;
                  _t_25 = __builtin.max(_t_25, _t_41);
                  _iter_tmp = await _t_28.next();
                }
              }
            } catch(_exc_) {
              __env.reportError("Failed to invoke query", _exc_);
            }
            _t_45 = "max";
            _t_44 = __builtin.aggregateOutputType(_t_45, _t_30);
            _t_46 = {};
            _t_46.file_size = _t_25;
            _t_47 = __builtin.isNewTuple(_t_0, _t_46, ["file_size"]);
            _t_48 = __builtin.addTuple(_t_0, _t_46);
            await __env.writeState(0, _t_48);
            _t_0 = _t_48;
            if (_t_47) {
              try {
                await __env.output(String(_t_44), _t_46);
              } catch(_exc_) {
                __env.reportError("Failed to invoke action", _exc_);
              }
            } else {

            }
          } else {

          }
        } else {

        }
        _iter_tmp = await _t_4.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 43
    [`timer(base=new Date(),interval=1h) => sort(file_size desc of @com.google.drive.list_drive_files())[1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  let _t_52;
  let _t_53;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = false;
        _t_6 = -Infinity;
        try {
          _t_9 = {};
          _t_10 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_9, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"], sort: ["file_size", "desc"], limit: 1 });
          _t_11 = __builtin.getAsyncIterator(_t_10);
          {
            let _iter_tmp = await _t_11.next();
            while (!_iter_tmp.done) {
              _t_12 = _iter_tmp.value;
              _t_13 = _t_12[0];
              _t_14 = _t_12[1];
              _t_15 = _t_14.order_by;
              _t_16 = _t_14.__response;
              _t_17 = _t_14.file_id;
              _t_18 = _t_14.file_name;
              _t_19 = _t_14.mime_type;
              _t_20 = _t_14.description;
              _t_21 = _t_14.starred;
              _t_22 = _t_14.created_time;
              _t_23 = _t_14.modified_time;
              _t_24 = _t_14.file_size;
              _t_25 = _t_14.last_modified_by;
              _t_26 = _t_14.link;
              _t_27 = _t_6 < _t_24;
              if (_t_27) {
                _t_6 = _t_24;
                _t_7 = _t_14;
                _t_8 = _t_13;
                _t_5 = true;
              } else {

              }
              _iter_tmp = await _t_11.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        if (_t_5) {
          _t_28 = _t_7.order_by;
          _t_29 = _t_7.__response;
          _t_30 = _t_7.file_id;
          _t_31 = _t_7.file_name;
          _t_32 = _t_7.mime_type;
          _t_33 = _t_7.description;
          _t_34 = _t_7.starred;
          _t_35 = _t_7.created_time;
          _t_36 = _t_7.modified_time;
          _t_37 = _t_7.file_size;
          _t_38 = _t_7.last_modified_by;
          _t_39 = _t_7.link;
          _t_40 = __builtin.combineOutputTypes(_t_3, _t_8);
          _t_41 = {};
          _t_41.order_by = _t_28;
          _t_41.__response = _t_29;
          _t_41.file_id = _t_30;
          _t_41.file_name = _t_31;
          _t_41.mime_type = _t_32;
          _t_41.description = _t_33;
          _t_41.starred = _t_34;
          _t_41.created_time = _t_35;
          _t_41.modified_time = _t_36;
          _t_41.file_size = _t_37;
          _t_41.last_modified_by = _t_38;
          _t_41.link = _t_39;
          _t_42 = _t_41.order_by;
          _t_43 = _t_41.__response;
          _t_44 = _t_41.file_id;
          _t_45 = _t_41.file_name;
          _t_46 = _t_41.mime_type;
          _t_47 = _t_41.description;
          _t_48 = _t_41.starred;
          _t_49 = _t_41.created_time;
          _t_50 = _t_41.modified_time;
          _t_51 = _t_41.file_size;
          _t_52 = _t_41.last_modified_by;
          _t_53 = _t_41.link;
          try {
            await __env.output(String(_t_40), _t_41);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 44
    [`timer(base=new Date(),interval=1h) => sort(file_size asc of @com.google.drive.list_drive_files())[1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  let _t_52;
  let _t_53;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = false;
        _t_6 = Infinity;
        try {
          _t_9 = {};
          _t_10 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_9, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"], sort: ["file_size", "asc"], limit: 1 });
          _t_11 = __builtin.getAsyncIterator(_t_10);
          {
            let _iter_tmp = await _t_11.next();
            while (!_iter_tmp.done) {
              _t_12 = _iter_tmp.value;
              _t_13 = _t_12[0];
              _t_14 = _t_12[1];
              _t_15 = _t_14.order_by;
              _t_16 = _t_14.__response;
              _t_17 = _t_14.file_id;
              _t_18 = _t_14.file_name;
              _t_19 = _t_14.mime_type;
              _t_20 = _t_14.description;
              _t_21 = _t_14.starred;
              _t_22 = _t_14.created_time;
              _t_23 = _t_14.modified_time;
              _t_24 = _t_14.file_size;
              _t_25 = _t_14.last_modified_by;
              _t_26 = _t_14.link;
              _t_27 = _t_6 > _t_24;
              if (_t_27) {
                _t_6 = _t_24;
                _t_7 = _t_14;
                _t_8 = _t_13;
                _t_5 = true;
              } else {

              }
              _iter_tmp = await _t_11.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        if (_t_5) {
          _t_28 = _t_7.order_by;
          _t_29 = _t_7.__response;
          _t_30 = _t_7.file_id;
          _t_31 = _t_7.file_name;
          _t_32 = _t_7.mime_type;
          _t_33 = _t_7.description;
          _t_34 = _t_7.starred;
          _t_35 = _t_7.created_time;
          _t_36 = _t_7.modified_time;
          _t_37 = _t_7.file_size;
          _t_38 = _t_7.last_modified_by;
          _t_39 = _t_7.link;
          _t_40 = __builtin.combineOutputTypes(_t_3, _t_8);
          _t_41 = {};
          _t_41.order_by = _t_28;
          _t_41.__response = _t_29;
          _t_41.file_id = _t_30;
          _t_41.file_name = _t_31;
          _t_41.mime_type = _t_32;
          _t_41.description = _t_33;
          _t_41.starred = _t_34;
          _t_41.created_time = _t_35;
          _t_41.modified_time = _t_36;
          _t_41.file_size = _t_37;
          _t_41.last_modified_by = _t_38;
          _t_41.link = _t_39;
          _t_42 = _t_41.order_by;
          _t_43 = _t_41.__response;
          _t_44 = _t_41.file_id;
          _t_45 = _t_41.file_name;
          _t_46 = _t_41.mime_type;
          _t_47 = _t_41.description;
          _t_48 = _t_41.starred;
          _t_49 = _t_41.created_time;
          _t_50 = _t_41.modified_time;
          _t_51 = _t_41.file_size;
          _t_52 = _t_41.last_modified_by;
          _t_53 = _t_41.link;
          try {
            await __env.output(String(_t_40), _t_41);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 45
    [`now => sort(file_size desc of @com.google.drive.list_drive_files())[2:1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = 2;
    _t_1 = 1;
    _t_2 = __builtin.argmax;
    _t_3 = "file_size";
    _t_4 = new __builtin.ArgMinMaxState(_t_2, _t_3, _t_0, _t_1);
    try {
      _t_5 = {};
      _t_6 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_5, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"], sort: ["file_size", "desc"], limit: 2 });
      _t_7 = __builtin.getAsyncIterator(_t_6);
      {
        let _iter_tmp = await _t_7.next();
        while (!_iter_tmp.done) {
          _t_8 = _iter_tmp.value;
          _t_9 = _t_8[0];
          _t_10 = _t_8[1];
          _t_11 = _t_10.order_by;
          _t_12 = _t_10.__response;
          _t_13 = _t_10.file_id;
          _t_14 = _t_10.file_name;
          _t_15 = _t_10.mime_type;
          _t_16 = _t_10.description;
          _t_17 = _t_10.starred;
          _t_18 = _t_10.created_time;
          _t_19 = _t_10.modified_time;
          _t_20 = _t_10.file_size;
          _t_21 = _t_10.last_modified_by;
          _t_22 = _t_10.link;
          _t_4.update(_t_10, _t_9);
          _iter_tmp = await _t_7.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    for (_t_23 of _t_4) {
      _t_24 = _t_23[0];
      _t_25 = _t_23[1];
      _t_26 = _t_25.order_by;
      _t_27 = _t_25.__response;
      _t_28 = _t_25.file_id;
      _t_29 = _t_25.file_name;
      _t_30 = _t_25.mime_type;
      _t_31 = _t_25.description;
      _t_32 = _t_25.starred;
      _t_33 = _t_25.created_time;
      _t_34 = _t_25.modified_time;
      _t_35 = _t_25.file_size;
      _t_36 = _t_25.last_modified_by;
      _t_37 = _t_25.link;
      try {
        await __env.output(String(_t_24), _t_25);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 46 simple indexing
    [`now => @com.google.drive.list_drive_files()[2:1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = 2;
    _t_1 = false;
    _t_2 = 0;
    try {
      _t_3 = {};
      _t_4 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_3, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"], limit: 2 });
      _t_5 = __builtin.getAsyncIterator(_t_4);
      {
        let _iter_tmp = await _t_5.next();
        while (!_iter_tmp.done) {
          _t_6 = _iter_tmp.value;
          _t_7 = _t_6[0];
          _t_8 = _t_6[1];
          _t_9 = _t_8.order_by;
          _t_10 = _t_8.__response;
          _t_11 = _t_8.file_id;
          _t_12 = _t_8.file_name;
          _t_13 = _t_8.mime_type;
          _t_14 = _t_8.description;
          _t_15 = _t_8.starred;
          _t_16 = _t_8.created_time;
          _t_17 = _t_8.modified_time;
          _t_18 = _t_8.file_size;
          _t_19 = _t_8.last_modified_by;
          _t_20 = _t_8.link;
          _t_21 = 1;
          _t_2 = _t_2 + _t_21;
          _t_22 = _t_0 == _t_2;
          if (_t_22) {
            _t_1 = true;
            break;
          } else {

          }
          _iter_tmp = await _t_5.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_1) {
      try {
        await __env.output(String(_t_7), _t_8);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    } else {

    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 47 more simple indexing
    [`attimer(time=[new Time(7, 30)]) => @com.google.drive.list_drive_files()[2:1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  try {
    _t_1 = new Array(1);
    _t_2 = new __builtin.Time(7, 30, 0);
    _t_1[0] = _t_2;
    _t_0 = await __env.invokeAtTimer(_t_1, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = 2;
        _t_6 = false;
        _t_7 = 0;
        try {
          _t_8 = {};
          _t_9 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_8, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"], limit: 2 });
          _t_10 = __builtin.getAsyncIterator(_t_9);
          {
            let _iter_tmp = await _t_10.next();
            while (!_iter_tmp.done) {
              _t_11 = _iter_tmp.value;
              _t_12 = _t_11[0];
              _t_13 = _t_11[1];
              _t_14 = _t_13.order_by;
              _t_15 = _t_13.__response;
              _t_16 = _t_13.file_id;
              _t_17 = _t_13.file_name;
              _t_18 = _t_13.mime_type;
              _t_19 = _t_13.description;
              _t_20 = _t_13.starred;
              _t_21 = _t_13.created_time;
              _t_22 = _t_13.modified_time;
              _t_23 = _t_13.file_size;
              _t_24 = _t_13.last_modified_by;
              _t_25 = _t_13.link;
              _t_26 = 1;
              _t_7 = _t_7 + _t_26;
              _t_27 = _t_5 == _t_7;
              if (_t_27) {
                _t_6 = true;
                break;
              } else {

              }
              _iter_tmp = await _t_10.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
        if (_t_6) {
          _t_28 = __builtin.combineOutputTypes(_t_3, _t_12);
          _t_29 = {};
          _t_29.order_by = _t_14;
          _t_29.__response = _t_15;
          _t_29.file_id = _t_16;
          _t_29.file_name = _t_17;
          _t_29.mime_type = _t_18;
          _t_29.description = _t_19;
          _t_29.starred = _t_20;
          _t_29.created_time = _t_21;
          _t_29.modified_time = _t_22;
          _t_29.file_size = _t_23;
          _t_29.last_modified_by = _t_24;
          _t_29.link = _t_25;
          _t_30 = _t_29.order_by;
          _t_31 = _t_29.__response;
          _t_32 = _t_29.file_id;
          _t_33 = _t_29.file_name;
          _t_34 = _t_29.mime_type;
          _t_35 = _t_29.description;
          _t_36 = _t_29.starred;
          _t_37 = _t_29.created_time;
          _t_38 = _t_29.modified_time;
          _t_39 = _t_29.file_size;
          _t_40 = _t_29.last_modified_by;
          _t_41 = _t_29.link;
          try {
            await __env.output(String(_t_28), _t_29);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke at-timer", _exc_);
  }`]],

    // 48 complex indexing
    [`now => @com.google.drive.list_drive_files()[2, 3, 4] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(3);
    _t_1 = 2;
    _t_0[0] = _t_1;
    _t_2 = 3;
    _t_0[1] = _t_2;
    _t_3 = 4;
    _t_0[2] = _t_3;
    _t_4 = new Array(0);
    try {
      _t_5 = {};
      _t_6 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_5, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"] });
      _t_7 = __builtin.getAsyncIterator(_t_6);
      {
        let _iter_tmp = await _t_7.next();
        while (!_iter_tmp.done) {
          _t_8 = _iter_tmp.value;
          _t_9 = _t_8[0];
          _t_10 = _t_8[1];
          _t_11 = _t_10.order_by;
          _t_12 = _t_10.__response;
          _t_13 = _t_10.file_id;
          _t_14 = _t_10.file_name;
          _t_15 = _t_10.mime_type;
          _t_16 = _t_10.description;
          _t_17 = _t_10.starred;
          _t_18 = _t_10.created_time;
          _t_19 = _t_10.modified_time;
          _t_20 = _t_10.file_size;
          _t_21 = _t_10.last_modified_by;
          _t_22 = _t_10.link;
          _t_23 = new Array(2);
          _t_23[0] = _t_10;
          _t_23[1] = _t_9;
          _t_4.push(_t_23);
          _iter_tmp = await _t_7.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    _t_24 = __builtin.indexArray(_t_4, _t_0);
    for (_t_25 of _t_24) {
      _t_27 = _t_25[0];
      _t_26 = _t_25[1];
      _t_28 = _t_27.order_by;
      _t_29 = _t_27.__response;
      _t_30 = _t_27.file_id;
      _t_31 = _t_27.file_name;
      _t_32 = _t_27.mime_type;
      _t_33 = _t_27.description;
      _t_34 = _t_27.starred;
      _t_35 = _t_27.created_time;
      _t_36 = _t_27.modified_time;
      _t_37 = _t_27.file_size;
      _t_38 = _t_27.last_modified_by;
      _t_39 = _t_27.link;
      try {
        await __env.output(String(_t_26), _t_27);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 49 complex slicing
    [`now => @com.google.drive.list_drive_files()[2:4] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = 2;
    _t_1 = 4;
    _t_2 = new Array(0);
    try {
      _t_3 = {};
      _t_4 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_3, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"], limit: 5 });
      _t_5 = __builtin.getAsyncIterator(_t_4);
      {
        let _iter_tmp = await _t_5.next();
        while (!_iter_tmp.done) {
          _t_6 = _iter_tmp.value;
          _t_7 = _t_6[0];
          _t_8 = _t_6[1];
          _t_9 = _t_8.order_by;
          _t_10 = _t_8.__response;
          _t_11 = _t_8.file_id;
          _t_12 = _t_8.file_name;
          _t_13 = _t_8.mime_type;
          _t_14 = _t_8.description;
          _t_15 = _t_8.starred;
          _t_16 = _t_8.created_time;
          _t_17 = _t_8.modified_time;
          _t_18 = _t_8.file_size;
          _t_19 = _t_8.last_modified_by;
          _t_20 = _t_8.link;
          _t_21 = new Array(2);
          _t_21[0] = _t_8;
          _t_21[1] = _t_7;
          _t_2.push(_t_21);
          _iter_tmp = await _t_5.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    _t_22 = __builtin.sliceArray(_t_2, _t_0, _t_1);
    for (_t_23 of _t_22) {
      _t_25 = _t_23[0];
      _t_24 = _t_23[1];
      _t_26 = _t_25.order_by;
      _t_27 = _t_25.__response;
      _t_28 = _t_25.file_id;
      _t_29 = _t_25.file_name;
      _t_30 = _t_25.mime_type;
      _t_31 = _t_25.description;
      _t_32 = _t_25.starred;
      _t_33 = _t_25.created_time;
      _t_34 = _t_25.modified_time;
      _t_35 = _t_25.file_size;
      _t_36 = _t_25.last_modified_by;
      _t_37 = _t_25.link;
      try {
        await __env.output(String(_t_24), _t_25);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 50 sorting
    [`now => sort(file_size asc of @com.google.drive.list_drive_files()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(0);
    try {
      _t_1 = {};
      _t_2 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_1, { projection: ["file_id", "file_name", "mime_type", "description", "starred", "created_time", "modified_time", "file_size", "last_modified_by", "link"], sort: ["file_size", "asc"] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.order_by;
          _t_8 = _t_6.__response;
          _t_9 = _t_6.file_id;
          _t_10 = _t_6.file_name;
          _t_11 = _t_6.mime_type;
          _t_12 = _t_6.description;
          _t_13 = _t_6.starred;
          _t_14 = _t_6.created_time;
          _t_15 = _t_6.modified_time;
          _t_16 = _t_6.file_size;
          _t_17 = _t_6.last_modified_by;
          _t_18 = _t_6.link;
          _t_19 = new Array(2);
          _t_19[0] = _t_6;
          _t_19[1] = _t_5;
          _t_0.push(_t_19);
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    _t_20 = "file_size";
    __builtin.sortasc(_t_0, _t_20);
    for (_t_21 of _t_0) {
      _t_23 = _t_21[0];
      _t_22 = _t_21[1];
      _t_24 = _t_23.order_by;
      _t_25 = _t_23.__response;
      _t_26 = _t_23.file_id;
      _t_27 = _t_23.file_name;
      _t_28 = _t_23.mime_type;
      _t_29 = _t_23.description;
      _t_30 = _t_23.starred;
      _t_31 = _t_23.created_time;
      _t_32 = _t_23.modified_time;
      _t_33 = _t_23.file_size;
      _t_34 = _t_23.last_modified_by;
      _t_35 = _t_23.link;
      try {
        await __env.output(String(_t_22), _t_23);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 51
    [`
    now => @com.thecatapi.get() => notify;
    now => @com.twitter.post(status="foo");
    `,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.thecatapi", { }, "get", _t_0, { projection: ["image_id", "picture_url", "link"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.count;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.image_id;
          _t_9 = _t_5.picture_url;
          _t_10 = _t_5.link;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_11 = {};
      _t_12 = "foo";
      _t_11.status = _t_12;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_11));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 52
    [`
    monitor (@com.twitter.home_timeline()) => notify;
    now => @com.thecatapi.get() => notify;
    now => @com.twitter.post(status="foo");
    `,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.thecatapi", { }, "get", _t_0, { projection: ["image_id", "picture_url", "link"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.count;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.image_id;
          _t_9 = _t_5.picture_url;
          _t_10 = _t_5.link;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_11 = {};
      _t_12 = "foo";
      _t_11.status = _t_12;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_11));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`, `  "use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.twitter", { }, "home_timeline", _t_1, { projection: ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.text;
        _t_8 = _t_5.hashtags;
        _t_9 = _t_5.urls;
        _t_10 = _t_5.author;
        _t_11 = _t_5.in_reply_to;
        _t_12 = _t_5.tweet_id;
        _t_13 = __builtin.isNewTuple(_t_0, _t_5, ["text", "hashtags", "urls", "author", "in_reply_to", "tweet_id"]);
        _t_14 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_14);
        _t_0 = _t_14;
        if (_t_13) {
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 53
    [`function q(p_query : String) {
        @com.bing.web_search(query=p_query);
      }
      function a(p_status : String) {
        @com.twitter.post(status=p_status);
      }
      // FIXME we cannot invoke query procedures as queries yet...
      //now => q(p_query="foo") => a(p_status=link);
      now => a(p_status="no");
      `,
    [`"use strict";
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  await __env.enterProcedure(0, "q");
  try {
    try {
      _t_1 = {};
      _t_2 = await __env.invokeQuery("com.bing", { }, "web_search", _t_1, { projection: ["title", "description", "link"] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.__response;
          _t_8 = _t_6.title;
          _t_9 = _t_6.description;
          _t_10 = _t_6.link;
          try {
            __emit(_t_5, _t_6);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, "q");
  }`, `"use strict";
  let _t_1;
  await __env.enterProcedure(1, "a");
  try {
    try {
      _t_1 = {};
      _t_1.status = _t_0;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_1));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(1, "a");
  }`, `  "use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  await __env.enterProcedure(2, null);
  try {
    try {
      _t_0 = __scope.a;
      _t_1 = "no";
      _t_2 = await __builtin.invokeStreamVarRef(__env, _t_0, _t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          await __env.output(String(_t_4), _t_5);
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(2, null);
  }`]],

    // 54
    [`function s1() {
        monitor(@org.thingpedia.weather.current(location=new Location(1,2,"foo")));
      }
      s1() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  await __env.enterProcedure(0, "s1");
  try {
    _t_0 = await __env.readState(0);
    try {
      _t_1 = {};
      _t_2 = new __builtin.Location(1, 2, "foo");
      _t_1.location = _t_2;
      _t_3 = await __env.invokeMonitor("org.thingpedia.weather", { }, "current", _t_1, { projection: ["temperature", "wind_speed", "humidity", "cloudiness", "fog", "status", "icon"] });
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.__response;
          _t_8 = _t_6.temperature;
          _t_9 = _t_6.wind_speed;
          _t_10 = _t_6.humidity;
          _t_11 = _t_6.cloudiness;
          _t_12 = _t_6.fog;
          _t_13 = _t_6.status;
          _t_14 = _t_6.icon;
          _t_15 = __builtin.isNewTuple(_t_0, _t_6, ["temperature", "wind_speed", "humidity", "cloudiness", "fog", "status", "icon"]);
          _t_16 = __builtin.addTuple(_t_0, _t_6);
          await __env.writeState(0, _t_16);
          _t_0 = _t_16;
          if (_t_15) {
            try {
              __emit(_t_5, _t_6);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke trigger", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, "s1");
  }`, `  "use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  try {
    _t_0 = __scope.s1;
    _t_1 = await __builtin.invokeStreamVarRef(__env, _t_0);
    {
      let _iter_tmp = await _t_1.next();
      while (!_iter_tmp.done) {
        _t_2 = _iter_tmp.value;
        _t_3 = _t_2[0];
        _t_4 = _t_2[1];
        _t_5 = _t_4.__response;
        try {
          await __env.output(String(_t_3), _t_4);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_1.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke stream", _exc_);
  }`]],

    // 55
    [`let cat = @com.thecatapi.get();
      now => cat() => notify;
      now => cat() => @com.twitter.post_picture(caption="cat", picture_url=picture_url);
    `,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(0);
    try {
      _t_1 = {};
      _t_2 = await __env.invokeQuery("com.thecatapi", { }, "get", _t_1, { projection: ["image_id", "picture_url", "link"] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.count;
          _t_8 = _t_6.__response;
          _t_9 = _t_6.image_id;
          _t_10 = _t_6.picture_url;
          _t_11 = _t_6.link;
          _t_12 = new Array(2);
          _t_12[0] = _t_5;
          _t_12[1] = _t_6;
          _t_0.push(_t_12);
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    __env.clearGetCache();
    _t_13 = __builtin.getAsyncIterator(_t_0);
    {
      let _iter_tmp = await _t_13.next();
      while (!_iter_tmp.done) {
        _t_14 = _iter_tmp.value;
        _t_15 = _t_14[0];
        _t_16 = _t_14[1];
        _t_17 = _t_16.__response;
        _t_18 = _t_16.image_id;
        _t_19 = _t_16.picture_url;
        _t_20 = _t_16.link;
        try {
          await __env.output(String(_t_15), _t_16);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_13.next();
      }
    }
    __env.clearGetCache();
    _t_21 = __builtin.getAsyncIterator(_t_0);
    {
      let _iter_tmp = await _t_21.next();
      while (!_iter_tmp.done) {
        _t_22 = _iter_tmp.value;
        _t_23 = _t_22[0];
        _t_24 = _t_22[1];
        _t_25 = _t_24.__response;
        _t_26 = _t_24.image_id;
        _t_27 = _t_24.picture_url;
        _t_28 = _t_24.link;
        try {
          _t_29 = {};
          _t_30 = "cat";
          _t_29.caption = _t_30;
          _t_31 = String (_t_27);
          _t_29.picture_url = _t_31;
          await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post_picture", _t_29));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_21.next();
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 56
    [`let cat = @com.thecatapi.get();
      now => cat() => notify;
      //  every hour post THE SAME cat picture
      timer(base=new Date(), interval=1h) => cat() => @com.twitter.post_picture(caption="cat", picture_url=picture_url);
    `,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(0);
    try {
      _t_1 = {};
      _t_2 = await __env.invokeQuery("com.thecatapi", { }, "get", _t_1, { projection: ["image_id", "picture_url", "link"] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.count;
          _t_8 = _t_6.__response;
          _t_9 = _t_6.image_id;
          _t_10 = _t_6.picture_url;
          _t_11 = _t_6.link;
          _t_12 = new Array(2);
          _t_12[0] = _t_5;
          _t_12[1] = _t_6;
          _t_0.push(_t_12);
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    await __env.writeState(0, _t_0);
    __env.clearGetCache();
    _t_13 = await __env.readState(0);
    _t_14 = __builtin.getAsyncIterator(_t_13);
    {
      let _iter_tmp = await _t_14.next();
      while (!_iter_tmp.done) {
        _t_15 = _iter_tmp.value;
        _t_16 = _t_15[0];
        _t_17 = _t_15[1];
        _t_18 = _t_17.__response;
        _t_19 = _t_17.image_id;
        _t_20 = _t_17.picture_url;
        _t_21 = _t_17.link;
        try {
          await __env.output(String(_t_16), _t_17);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_14.next();
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`, `"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        _t_5 = await __env.readState(0);
        _t_6 = __builtin.getAsyncIterator(_t_5);
        {
          let _iter_tmp = await _t_6.next();
          while (!_iter_tmp.done) {
            _t_7 = _iter_tmp.value;
            _t_8 = _t_7[0];
            _t_9 = _t_7[1];
            _t_10 = _t_9.__response;
            _t_11 = _t_9.image_id;
            _t_12 = _t_9.picture_url;
            _t_13 = _t_9.link;
            _t_14 = __builtin.combineOutputTypes(_t_3, _t_8);
            _t_15 = {};
            _t_15.__response = _t_10;
            _t_15.image_id = _t_11;
            _t_15.picture_url = _t_12;
            _t_15.link = _t_13;
            _t_16 = _t_15.__response;
            _t_17 = _t_15.image_id;
            _t_18 = _t_15.picture_url;
            _t_19 = _t_15.link;
            try {
              _t_20 = {};
              _t_21 = "cat";
              _t_20.caption = _t_21;
              _t_22 = String (_t_18);
              _t_20.picture_url = _t_22;
              await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post_picture", _t_20));
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
            _iter_tmp = await _t_6.next();
          }
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 57 simple procedure declarations
    [`function p1(p_foo : String) {
        now => @com.bing.web_search(query = p_foo) => notify;
        now => @com.twitter.post(status = p_foo);
    }
    function p2(p_foo : String) {
        now => @com.facebook.post(status = p_foo);
    }
    now => p1(p_foo = "one");
    now => p1(p_foo = "two");
    p1(p_foo = "three");
    p2(p_foo = "four");
    `,
    [`"use strict";
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  await __env.enterProcedure(0, "p1");
  try {
    try {
      _t_1 = {};
      _t_2 = await __env.invokeQuery("com.bing", { }, "web_search", _t_1, { projection: ["title", "description", "link"] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.__response;
          _t_8 = _t_6.title;
          _t_9 = _t_6.description;
          _t_10 = _t_6.link;
          try {
            __emit(_t_5, _t_6);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_11 = {};
      _t_11.status = _t_0;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_11));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, "p1");
  }`, `  "use strict";
  let _t_1;
  await __env.enterProcedure(1, "p2");
  try {
    try {
      _t_1 = {};
      _t_1.status = _t_0;
      await __builtin.drainAction(__env.invokeAction("com.facebook", { }, "post", _t_1));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(1, "p2");
  }`, `"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  await __env.enterProcedure(2, null);
  try {
    try {
      _t_0 = __scope.p1;
      _t_1 = "one";
      _t_2 = await __builtin.invokeStreamVarRef(__env, _t_0, _t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.title;
          _t_8 = _t_5.description;
          _t_9 = _t_5.link;
          await __env.output(String(_t_4), _t_5);
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_10 = __scope.p1;
      _t_11 = "two";
      _t_12 = await __builtin.invokeStreamVarRef(__env, _t_10, _t_11);
      {
        let _iter_tmp = await _t_12.next();
        while (!_iter_tmp.done) {
          _t_13 = _iter_tmp.value;
          _t_14 = _t_13[0];
          _t_15 = _t_13[1];
          _t_16 = _t_15.__response;
          _t_17 = _t_15.title;
          _t_18 = _t_15.description;
          _t_19 = _t_15.link;
          await __env.output(String(_t_14), _t_15);
          _iter_tmp = await _t_12.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_20 = __scope.p1;
      _t_21 = "three";
      _t_22 = await __builtin.invokeStreamVarRef(__env, _t_20, _t_21);
      {
        let _iter_tmp = await _t_22.next();
        while (!_iter_tmp.done) {
          _t_23 = _iter_tmp.value;
          _t_24 = _t_23[0];
          _t_25 = _t_23[1];
          _t_26 = _t_25.__response;
          _t_27 = _t_25.title;
          _t_28 = _t_25.description;
          _t_29 = _t_25.link;
          await __env.output(String(_t_24), _t_25);
          _iter_tmp = await _t_22.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_30 = __scope.p2;
      _t_31 = "four";
      _t_32 = await __builtin.invokeStreamVarRef(__env, _t_30, _t_31);
      {
        let _iter_tmp = await _t_32.next();
        while (!_iter_tmp.done) {
          _t_33 = _iter_tmp.value;
          _t_34 = _t_33[0];
          _t_35 = _t_33[1];
          _t_36 = _t_35.__response;
          await __env.output(String(_t_34), _t_35);
          _iter_tmp = await _t_32.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(2, null);
  }`]],

    // 58 procedure with results
    [`function p1(p_foo : String) {
        let r1 = @com.bing.web_search(query = p_foo);
        now => r1() => notify; // this is the statement that produces the result
        now => r1() => @com.twitter.post(status = title);
    }
    now => p1(p_foo = "one");
    now => p1(p_foo = "two");
    `,
    [`"use strict";
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  await __env.enterProcedure(0, "p1");
  try {
    _t_1 = new Array(0);
    try {
      _t_2 = {};
      _t_3 = await __env.invokeQuery("com.bing", { }, "web_search", _t_2, { projection: ["title", "description", "link"] });
      _t_4 = __builtin.getAsyncIterator(_t_3);
      {
        let _iter_tmp = await _t_4.next();
        while (!_iter_tmp.done) {
          _t_5 = _iter_tmp.value;
          _t_6 = _t_5[0];
          _t_7 = _t_5[1];
          _t_8 = _t_7.__response;
          _t_9 = _t_7.title;
          _t_10 = _t_7.description;
          _t_11 = _t_7.link;
          _t_12 = new Array(2);
          _t_12[0] = _t_6;
          _t_12[1] = _t_7;
          _t_1.push(_t_12);
          _iter_tmp = await _t_4.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    __env.clearGetCache();
    _t_13 = __builtin.getAsyncIterator(_t_1);
    {
      let _iter_tmp = await _t_13.next();
      while (!_iter_tmp.done) {
        _t_14 = _iter_tmp.value;
        _t_15 = _t_14[0];
        _t_16 = _t_14[1];
        _t_17 = _t_16.__response;
        _t_18 = _t_16.title;
        _t_19 = _t_16.description;
        _t_20 = _t_16.link;
        try {
          __emit(_t_15, _t_16);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_13.next();
      }
    }
    __env.clearGetCache();
    _t_21 = __builtin.getAsyncIterator(_t_1);
    {
      let _iter_tmp = await _t_21.next();
      while (!_iter_tmp.done) {
        _t_22 = _iter_tmp.value;
        _t_23 = _t_22[0];
        _t_24 = _t_22[1];
        _t_25 = _t_24.__response;
        _t_26 = _t_24.title;
        _t_27 = _t_24.description;
        _t_28 = _t_24.link;
        try {
          _t_29 = {};
          _t_29.status = _t_26;
          await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_29));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_21.next();
      }
    }
  } finally {
    await __env.exitProcedure(0, "p1");
  }`, `  "use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  await __env.enterProcedure(1, null);
  try {
    try {
      _t_0 = __scope.p1;
      _t_1 = "one";
      _t_2 = await __builtin.invokeStreamVarRef(__env, _t_0, _t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.title;
          _t_8 = _t_5.description;
          _t_9 = _t_5.link;
          await __env.output(String(_t_4), _t_5);
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_10 = __scope.p1;
      _t_11 = "two";
      _t_12 = await __builtin.invokeStreamVarRef(__env, _t_10, _t_11);
      {
        let _iter_tmp = await _t_12.next();
        while (!_iter_tmp.done) {
          _t_13 = _iter_tmp.value;
          _t_14 = _t_13[0];
          _t_15 = _t_13[1];
          _t_16 = _t_15.__response;
          _t_17 = _t_15.title;
          _t_18 = _t_15.description;
          _t_19 = _t_15.link;
          await __env.output(String(_t_14), _t_15);
          _iter_tmp = await _t_12.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(1, null);
  }`]],

    // 59 procedure with nested declarations
    [`function p1(p_foo : String) {
        function q1() {
          @com.bing.web_search(query = p_foo);
        }
        // FIXME we cannot invoke procedures as queries yet
        //now => q1() => notify;
        //now => q1() => @com.twitter.post(status = title);
        @com.twitter.post(status = p_foo);
    }
    now => p1(p_foo = "one");
    now => p1(p_foo = "two");
    `,
    [`"use strict";
  let _t_11;
  let _t_12;
  await __env.enterProcedure(0, "p1");
  try {
    _t_11 = async function(__env, __emit) {
      "use strict";
      let _t_1;
      let _t_2;
      let _t_3;
      let _t_4;
      let _t_5;
      let _t_6;
      let _t_7;
      let _t_8;
      let _t_9;
      let _t_10;
      await __env.enterProcedure(1, "q1");
      try {
        try {
          _t_1 = {};
          _t_2 = await __env.invokeQuery("com.bing", { }, "web_search", _t_1, { projection: ["title", "description", "link"] });
          _t_3 = __builtin.getAsyncIterator(_t_2);
          {
            let _iter_tmp = await _t_3.next();
            while (!_iter_tmp.done) {
              _t_4 = _iter_tmp.value;
              _t_5 = _t_4[0];
              _t_6 = _t_4[1];
              _t_7 = _t_6.__response;
              _t_8 = _t_6.title;
              _t_9 = _t_6.description;
              _t_10 = _t_6.link;
              try {
                __emit(_t_5, _t_6);
              } catch(_exc_) {
                __env.reportError("Failed to invoke action", _exc_);
              }
              _iter_tmp = await _t_3.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke query", _exc_);
        }
      } finally {
        await __env.exitProcedure(1, "q1");
      }
    };
    try {
      _t_12 = {};
      _t_12.status = _t_0;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_12));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, "p1");
  }`, `"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  await __env.enterProcedure(2, null);
  try {
    try {
      _t_0 = __scope.p1;
      _t_1 = "one";
      _t_2 = await __builtin.invokeStreamVarRef(__env, _t_0, _t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          await __env.output(String(_t_4), _t_5);
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_7 = __scope.p1;
      _t_8 = "two";
      _t_9 = await __builtin.invokeStreamVarRef(__env, _t_7, _t_8);
      {
        let _iter_tmp = await _t_9.next();
        while (!_iter_tmp.done) {
          _t_10 = _iter_tmp.value;
          _t_11 = _t_10[0];
          _t_12 = _t_10[1];
          _t_13 = _t_12.__response;
          await __env.output(String(_t_11), _t_12);
          _iter_tmp = await _t_9.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(2, null);
  }`]],

    // 60 nested procedures
    [`function p1(p_foo : String) {
        function p2(p_bar : String) {
            now => @com.tumblr.blog.post_text(title = p_foo, body = p_bar);
        }
        now => p2(p_bar = "body one");
        now => p2(p_bar = "body two");
    }
    now => p1(p_foo = "title one");
    now => p1(p_foo = "title two");
    `,
    [`"use strict";
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  await __env.enterProcedure(0, "p1");
  try {
    _t_3 = async function(__env, __emit, _t_1) {
      "use strict";
      let _t_2;
      await __env.enterProcedure(1, "p2");
      try {
        try {
          _t_2 = {};
          _t_2.body = _t_1;
          _t_2.title = _t_0;
          await __builtin.drainAction(__env.invokeAction("com.tumblr.blog", { }, "post_text", _t_2));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
      } finally {
        await __env.exitProcedure(1, "p2");
      }
    };
    try {
      _t_4 = "body one";
      _t_5 = await __builtin.invokeStreamVarRef(__env, _t_3, _t_4);
      {
        let _iter_tmp = await _t_5.next();
        while (!_iter_tmp.done) {
          _t_6 = _iter_tmp.value;
          _t_7 = _t_6[0];
          _t_8 = _t_6[1];
          _t_9 = _t_8.__response;
          _iter_tmp = await _t_5.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_10 = "body two";
      _t_11 = await __builtin.invokeStreamVarRef(__env, _t_3, _t_10);
      {
        let _iter_tmp = await _t_11.next();
        while (!_iter_tmp.done) {
          _t_12 = _iter_tmp.value;
          _t_13 = _t_12[0];
          _t_14 = _t_12[1];
          _t_15 = _t_14.__response;
          _iter_tmp = await _t_11.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, "p1");
  }`, `  "use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  await __env.enterProcedure(2, null);
  try {
    try {
      _t_0 = __scope.p1;
      _t_1 = "title one";
      _t_2 = await __builtin.invokeStreamVarRef(__env, _t_0, _t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          await __env.output(String(_t_4), _t_5);
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_7 = __scope.p1;
      _t_8 = "title two";
      _t_9 = await __builtin.invokeStreamVarRef(__env, _t_7, _t_8);
      {
        let _iter_tmp = await _t_9.next();
        while (!_iter_tmp.done) {
          _t_10 = _iter_tmp.value;
          _t_11 = _t_10[0];
          _t_12 = _t_10[1];
          _t_13 = _t_12.__response;
          await __env.output(String(_t_11), _t_12);
          _iter_tmp = await _t_9.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(2, null);
  }`]],

    // 61 nested procedures, called from a rule
    [`function p1(p_foo : String) {
        function p2(p_bar : String) {
            now => @com.tumblr.blog.post_text(title = p_foo, body = p_bar);
        }
        now => p2(p_bar = "body one");
        now => p2(p_bar = "body two");
    }
    timer(base=new Date(), interval=1h) => p1(p_foo = "title one");
    `,
    [`"use strict";
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  await __env.enterProcedure(0, "p1");
  try {
    _t_3 = async function(__env, __emit, _t_1) {
      "use strict";
      let _t_2;
      await __env.enterProcedure(1, "p2");
      try {
        try {
          _t_2 = {};
          _t_2.body = _t_1;
          _t_2.title = _t_0;
          await __builtin.drainAction(__env.invokeAction("com.tumblr.blog", { }, "post_text", _t_2));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
      } finally {
        await __env.exitProcedure(1, "p2");
      }
    };
    try {
      _t_4 = "body one";
      _t_5 = await __builtin.invokeStreamVarRef(__env, _t_3, _t_4);
      {
        let _iter_tmp = await _t_5.next();
        while (!_iter_tmp.done) {
          _t_6 = _iter_tmp.value;
          _t_7 = _t_6[0];
          _t_8 = _t_6[1];
          _t_9 = _t_8.__response;
          _iter_tmp = await _t_5.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
    __env.clearGetCache();
    try {
      _t_10 = "body two";
      _t_11 = await __builtin.invokeStreamVarRef(__env, _t_3, _t_10);
      {
        let _iter_tmp = await _t_11.next();
        while (!_iter_tmp.done) {
          _t_12 = _iter_tmp.value;
          _t_13 = _t_12[0];
          _t_14 = _t_12[1];
          _t_15 = _t_14.__response;
          _iter_tmp = await _t_11.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, "p1");
  }`, `"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, null);
    _t_3 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_4 = _iter_tmp.value;
        try {
          _t_5 = __scope.p1;
          _t_6 = "title one";
          _t_7 = await __builtin.invokeStreamVarRef(__env, _t_5, _t_6);
          {
            let _iter_tmp = await _t_7.next();
            while (!_iter_tmp.done) {
              _t_8 = _iter_tmp.value;
              _t_9 = _t_8[0];
              _t_10 = _t_8[1];
              _t_11 = _t_10.__response;
              await __env.output(String(_t_9), _t_10);
              _iter_tmp = await _t_7.next();
            }
          }
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 62
    [`attimer(time=[new Time(9,0), new Time(15,0)]) => @org.thingpedia.builtin.thingengine.builtin.say(message="it's 9am or 3pm");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  try {
    _t_1 = new Array(2);
    _t_2 = new __builtin.Time(9, 0, 0);
    _t_1[0] = _t_2;
    _t_3 = new __builtin.Time(15, 0, 0);
    _t_1[1] = _t_3;
    _t_0 = await __env.invokeAtTimer(_t_1, null);
    _t_4 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_5 = _iter_tmp.value;
        try {
          _t_6 = {};
          _t_7 = "it's 9am or 3pm";
          _t_6.message = _t_7;
          await __builtin.drainAction(__env.invokeAction("org.thingpedia.builtin.thingengine.builtin", { }, "say", _t_6));
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke at-timer", _exc_);
  }`]],

    // 63
    [`now => @com.spotify.get_currently_playing() => @com.spotify.add_songs_to_playlist(songs=[song], playlist="my favorite");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.spotify", { }, "get_currently_playing", _t_0, { projection: ["song"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.song;
          try {
            _t_8 = {};
            _t_9 = "my favorite";
            _t_8.playlist = _t_9;
            _t_10 = new Array(1);
            _t_10[0] = _t_7;
            _t_8.songs = _t_10;
            await __builtin.drainAction(__env.invokeAction("com.spotify", { }, "add_songs_to_playlist", _t_8));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 64 Database query
    [`now => [id] of @org.wikidata.city(), id =~ "palo alto" => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_1 = __ast[0];
      _t_0 = await __env.invokeDBQuery("org.wikidata", { }, _t_1);
      _t_2 = __builtin.getAsyncIterator(_t_0);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 65
    [`now => @org.wikidata.city(), id =~ "palo alto" => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_1 = __ast[0];
      _t_0 = await __env.invokeDBQuery("org.wikidata", { }, _t_1);
      _t_2 = __builtin.getAsyncIterator(_t_0);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.inception;
          _t_9 = _t_5.named_after;
          _t_10 = _t_5.continent;
          _t_11 = _t_5.country;
          _t_12 = _t_5.capital_of;
          _t_13 = _t_5.located_in_the_administrative_territorial_entity;
          _t_14 = _t_5.located_in_or_next_to_body_of_water;
          _t_15 = _t_5.coordinate_location;
          _t_16 = _t_5.head_of_government;
          _t_17 = _t_5.population;
          _t_18 = _t_5.water_as_percent_of_area;
          _t_19 = _t_5.elevation_above_sea_level;
          _t_20 = _t_5.located_in_time_zone;
          _t_21 = _t_5.twinned_administrative_body;
          _t_22 = _t_5.shares_border_with;
          _t_23 = _t_5.area;
          _t_24 = _t_5.postal_code;
          _t_25 = _t_5.official_website;
          _t_26 = _t_5.flag_image;
          _t_27 = _t_5.number_of_households;
          _t_28 = _t_5.image;
          _t_29 = _t_5.highest_point;
          _t_30 = _t_5.language_used;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 66
    [`now => @org.wikidata.city(), postal_code ~= '94305' => @com.twitter.post(status=postal_code);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_1 = __ast[0];
      _t_0 = await __env.invokeDBQuery("org.wikidata", { }, _t_1);
      _t_2 = __builtin.getAsyncIterator(_t_0);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.inception;
          _t_9 = _t_5.named_after;
          _t_10 = _t_5.continent;
          _t_11 = _t_5.country;
          _t_12 = _t_5.capital_of;
          _t_13 = _t_5.located_in_the_administrative_territorial_entity;
          _t_14 = _t_5.located_in_or_next_to_body_of_water;
          _t_15 = _t_5.coordinate_location;
          _t_16 = _t_5.head_of_government;
          _t_17 = _t_5.population;
          _t_18 = _t_5.water_as_percent_of_area;
          _t_19 = _t_5.elevation_above_sea_level;
          _t_20 = _t_5.located_in_time_zone;
          _t_21 = _t_5.twinned_administrative_body;
          _t_22 = _t_5.shares_border_with;
          _t_23 = _t_5.area;
          _t_24 = _t_5.postal_code;
          _t_25 = _t_5.official_website;
          _t_26 = _t_5.flag_image;
          _t_27 = _t_5.number_of_households;
          _t_28 = _t_5.image;
          _t_29 = _t_5.highest_point;
          _t_30 = _t_5.language_used;
          try {
            _t_31 = {};
            _t_31.status = _t_24;
            await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_31));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 67
    [`timer(base=new Date(), interval=1h, frequency=3) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  try {
    _t_1 = new Date(XNOWX);
    _t_2 = 3600000;
    _t_3 = 3;
    _t_0 = await __env.invokeTimer(_t_1, _t_2, _t_3);
    _t_4 = null;
    {
      let _iter_tmp = await _t_0.next();
      while (!_iter_tmp.done) {
        _t_5 = _iter_tmp.value;
        try {
          await __env.output(String(_t_4), _t_5);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_0.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke timer", _exc_);
  }`]],

    // 68 compound types & function inheritance
    [`now => @org.thingpedia.test.compounds_and_inheritance.foo() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("org.thingpedia.test.compounds_and_inheritance", { }, "foo", _t_0, { projection: ["compound", "p4", "compound.nestedCompound", "compound.nestedCompound.p1", "compound.nestedCompound.p2", "compound.p3", "name", "description", "image"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.compound;
          if (_t_7) {
            _t_8 = _t_7.nestedCompound;
            if (_t_8) {
              _t_9 = _t_8.p1;
              _t_10 = _t_8.p2;
            } else {

            }
            _t_11 = _t_7.p3;
          } else {

          }
          _t_12 = _t_5.p4;
          _t_13 = _t_5.name;
          _t_14 = _t_5.description;
          _t_15 = _t_5.image;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 69 parameter passing with compound types
    [`now => @org.thingpedia.test.compounds_and_inheritance.foo() => @com.twitter.post(status=compound.nestedCompound.p1);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("org.thingpedia.test.compounds_and_inheritance", { }, "foo", _t_0, { projection: ["compound.nestedCompound.p1"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.compound;
          if (_t_7) {
            _t_8 = _t_7.nestedCompound;
            if (_t_8) {
              _t_9 = _t_8.p1;
              _t_10 = _t_8.p2;
            } else {

            }
            _t_11 = _t_7.p3;
          } else {

          }
          _t_12 = _t_5.p4;
          _t_13 = _t_5.name;
          _t_14 = _t_5.description;
          _t_15 = _t_5.image;
          try {
            _t_16 = {};
            _t_16.status = _t_9;
            await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_16));
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 70 monitor of that stuff
    [`monitor(@org.thingpedia.test.compounds_and_inheritance.foo()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("org.thingpedia.test.compounds_and_inheritance", { }, "foo", _t_1, { projection: ["compound", "p4", "compound.nestedCompound", "compound.nestedCompound.p1", "compound.nestedCompound.p2", "compound.p3", "name", "description", "image"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.__response;
        _t_7 = _t_5.compound;
        if (_t_7) {
          _t_8 = _t_7.nestedCompound;
          if (_t_8) {
            _t_9 = _t_8.p1;
            _t_10 = _t_8.p2;
          } else {

          }
          _t_11 = _t_7.p3;
        } else {

        }
        _t_12 = _t_5.p4;
        _t_13 = _t_5.name;
        _t_14 = _t_5.description;
        _t_15 = _t_5.image;
        _t_16 = __builtin.isNewTuple(_t_0, _t_5, ["compound", "p4", "name", "description", "image"]);
        _t_17 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_17);
        _t_0 = _t_17;
        if (_t_16) {
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]],

    // 71 filter() computer operator
    [`now => [review filter reviewRating.ratingValue >= 0] of @org.schema.restaurant() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("org.schema", { }, "restaurant", _t_0, { projection: ["review"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.name;
          _t_8 = _t_5.serveCuisine;
          _t_9 = _t_5.priceRange;
          _t_10 = _t_5.openingHours;
          _t_11 = _t_5.address;
          if (_t_11) {
            _t_12 = _t_11.addressCountry;
            _t_13 = _t_11.addressRegion;
            _t_14 = _t_11.postalCode;
            _t_15 = _t_11.streetAddress;
            _t_16 = _t_11.addressLocality;
          } else {

          }
          _t_17 = _t_5.aggregateRating;
          if (_t_17) {
            _t_18 = _t_17.ratingValue;
            _t_19 = _t_17.reviewCount;
          } else {

          }
          _t_20 = _t_5.review;
          _t_21 = _t_5.telephone;
          _t_22 = _t_5.brand;
          if (_t_22) {
            _t_23 = _t_22.name;
          } else {

          }
          _t_24 = _t_5.description;
          _t_25 = _t_5.image;
          _t_26 = _t_5.geo;
          _t_27 = _t_20.filter((_t_28) => {
            _t_29 = _t_28.reviewRating;
            if (_t_29) {
              _t_30 = _t_29.ratingValue;
            } else {

            }
            _t_31 = _t_28.datePublished;
            _t_32 = _t_28.description;
            _t_33 = _t_28.author;
            _t_35 = 0;
            _t_34 = _t_30 >= _t_35;
            return _t_34;
          });
          _t_5.review = _t_27;
          _t_36 = {};
          _t_36.review = _t_27;
          try {
            await __env.output(String(_t_4), _t_36);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 72 aggregate fitler
    [`now => @org.schema.restaurant(), count(review filter reviewRating.ratingValue >= 0) >= 0 => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("org.schema", { }, "restaurant", _t_0, { projection: ["name", "serveCuisine", "priceRange", "openingHours", "address", "aggregateRating", "review", "telephone", "brand", "address.addressCountry", "address.addressRegion", "address.postalCode", "address.streetAddress", "address.addressLocality", "aggregateRating.ratingValue", "aggregateRating.reviewCount", "brand.name", "description", "image", "geo"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.name;
          _t_8 = _t_5.serveCuisine;
          _t_9 = _t_5.priceRange;
          _t_10 = _t_5.openingHours;
          _t_11 = _t_5.address;
          if (_t_11) {
            _t_12 = _t_11.addressCountry;
            _t_13 = _t_11.addressRegion;
            _t_14 = _t_11.postalCode;
            _t_15 = _t_11.streetAddress;
            _t_16 = _t_11.addressLocality;
          } else {

          }
          _t_17 = _t_5.aggregateRating;
          if (_t_17) {
            _t_18 = _t_17.ratingValue;
            _t_19 = _t_17.reviewCount;
          } else {

          }
          _t_20 = _t_5.review;
          _t_21 = _t_5.telephone;
          _t_22 = _t_5.brand;
          if (_t_22) {
            _t_23 = _t_22.name;
          } else {

          }
          _t_24 = _t_5.description;
          _t_25 = _t_5.image;
          _t_26 = _t_5.geo;
          _t_28 = _t_20.filter((_t_29) => {
            _t_30 = _t_29.reviewRating;
            if (_t_30) {
              _t_31 = _t_30.ratingValue;
            } else {

            }
            _t_32 = _t_29.datePublished;
            _t_33 = _t_29.description;
            _t_34 = _t_29.author;
            _t_36 = 0;
            _t_35 = _t_31 >= _t_36;
            return _t_35;
          });
          _t_37 = __builtin.count(_t_28);
          _t_38 = 0;
          _t_27 = _t_37 >= _t_38;
          if (_t_27) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 73 distance operator
    [`now => [distance(geo, new Location(90,0,"north pole"))] of @org.schema.place() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("org.schema", { }, "place", _t_0, { projection: ["distance", "geo"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.address;
          if (_t_7) {
            _t_8 = _t_7.addressCountry;
            _t_9 = _t_7.addressRegion;
            _t_10 = _t_7.postalCode;
            _t_11 = _t_7.streetAddress;
            _t_12 = _t_7.addressLocality;
          } else {

          }
          _t_13 = _t_5.geo;
          _t_14 = _t_5.name;
          _t_15 = _t_5.description;
          _t_16 = _t_5.image;
          _t_17 = new __builtin.Location(90, 0, "north pole");
          _t_18 = __builtin.distance(_t_13, _t_17);
          _t_5.distance = _t_18;
          _t_19 = {};
          _t_19.distance = _t_18;
          try {
            await __env.output(String(_t_4), _t_19);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 74 Used to be "Test screen selection as a context"
    // Left here to preserve the numbering
    [`now => @com.twitter.post(status="foo");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "foo";
      _t_0.status = _t_1;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_0));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 75 Test device selector
    [`now => @light-bulb(name="bedroom").set_power(power=enum(on));`,
    [`"use strict";
  let _t_0;
  let _t_1;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "on";
      _t_0.power = _t_1;
      await __builtin.drainAction(__env.invokeAction("light-bulb", { name: "bedroom", }, "set_power", _t_0));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 76 Test device selector (with explicit all)
    [`now => @light-bulb(name="bedroom", all=true).set_power(power=enum(on));`,
    [`"use strict";
  let _t_0;
  let _t_1;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "on";
      _t_0.power = _t_1;
      await __builtin.drainAction(__env.invokeAction("light-bulb", { name: "bedroom", }, "set_power", _t_0));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 77 computation (+)
    [`now => [("Text: " + text)] of @com.twitter.home_timeline() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.twitter", { }, "home_timeline", _t_0, { projection: ["result", "text"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.text;
          _t_8 = _t_5.hashtags;
          _t_9 = _t_5.urls;
          _t_10 = _t_5.author;
          _t_11 = _t_5.in_reply_to;
          _t_12 = _t_5.tweet_id;
          _t_13 = "Text: ";
          _t_14 = _t_13 + _t_7;
          _t_5.result = _t_14;
          _t_15 = {};
          _t_15.result = _t_14;
          try {
            await __env.output(String(_t_4), _t_15);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 78 computation (-)
    [`now => [(file_size - 1GiB)] of @com.google.drive.list_drive_files() => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.google.drive", { }, "list_drive_files", _t_0, { projection: ["result", "file_size"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.order_by;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.file_id;
          _t_9 = _t_5.file_name;
          _t_10 = _t_5.mime_type;
          _t_11 = _t_5.description;
          _t_12 = _t_5.starred;
          _t_13 = _t_5.created_time;
          _t_14 = _t_5.modified_time;
          _t_15 = _t_5.file_size;
          _t_16 = _t_5.last_modified_by;
          _t_17 = _t_5.link;
          _t_18 = 1073741824;
          _t_19 = _t_15 - _t_18;
          _t_5.result = _t_19;
          _t_20 = {};
          _t_20.result = _t_19;
          try {
            await __env.output(String(_t_4), _t_20);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 79 date
    [`now => @org.thingpedia.weather.sunrise(location=new Location(90, 0, "north pole"), date=new Date("2020-01-04T18:08:20.451Z")) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new Date(XNOWX);
      _t_0.date = _t_1;
      _t_2 = new __builtin.Location(90, 0, "north pole");
      _t_0.location = _t_2;
      _t_3 = await __env.invokeQuery("org.thingpedia.weather", { }, "sunrise", _t_0, { projection: ["sunrise_time", "sunset_time"] });
      _t_4 = __builtin.getAsyncIterator(_t_3);
      {
        let _iter_tmp = await _t_4.next();
        while (!_iter_tmp.done) {
          _t_5 = _iter_tmp.value;
          _t_6 = _t_5[0];
          _t_7 = _t_5[1];
          _t_8 = _t_7.__response;
          _t_9 = _t_7.sunrise_time;
          _t_10 = _t_7.sunset_time;
          try {
            await __env.output(String(_t_6), _t_7);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_4.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 80 computed date (+)
    [`now => @org.thingpedia.weather.sunrise(location=new Location(90, 0, "north pole"), date=new Date("2020-01-04T18:08:20.451Z") + 7min) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new Date(XNOWX);
      _t_2 = 420000;
      _t_3 = __builtin.dateAdd(_t_1, _t_2);
      _t_0.date = _t_3;
      _t_4 = new __builtin.Location(90, 0, "north pole");
      _t_0.location = _t_4;
      _t_5 = await __env.invokeQuery("org.thingpedia.weather", { }, "sunrise", _t_0, { projection: ["sunrise_time", "sunset_time"] });
      _t_6 = __builtin.getAsyncIterator(_t_5);
      {
        let _iter_tmp = await _t_6.next();
        while (!_iter_tmp.done) {
          _t_7 = _iter_tmp.value;
          _t_8 = _t_7[0];
          _t_9 = _t_7[1];
          _t_10 = _t_9.__response;
          _t_11 = _t_9.sunrise_time;
          _t_12 = _t_9.sunset_time;
          try {
            await __env.output(String(_t_8), _t_9);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_6.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 81 computed date (-)
    [`now => @org.thingpedia.weather.sunrise(location=new Location(90, 0, "north pole"), date=new Date("2020-01-04T18:08:20.451Z") - 7min) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new Date(XNOWX);
      _t_2 = 420000;
      _t_3 = __builtin.dateSub(_t_1, _t_2);
      _t_0.date = _t_3;
      _t_4 = new __builtin.Location(90, 0, "north pole");
      _t_0.location = _t_4;
      _t_5 = await __env.invokeQuery("org.thingpedia.weather", { }, "sunrise", _t_0, { projection: ["sunrise_time", "sunset_time"] });
      _t_6 = __builtin.getAsyncIterator(_t_5);
      {
        let _iter_tmp = await _t_6.next();
        while (!_iter_tmp.done) {
          _t_7 = _iter_tmp.value;
          _t_8 = _t_7[0];
          _t_9 = _t_7[1];
          _t_10 = _t_9.__response;
          _t_11 = _t_9.sunrise_time;
          _t_12 = _t_9.sunset_time;
          try {
            await __env.output(String(_t_8), _t_9);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_6.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 82 compilation bug
    [`now => sort(distance(geo, new Location(13, 13)) asc of @com.yelp.restaurant())[1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = false;
    _t_1 = Infinity;
    try {
      _t_4 = {};
      _t_5 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_4, { projection: ["id", "link", "rating", "cuisines", "geo", "image_url"], sort: ["distance", "asc"], limit: 1 });
      _t_6 = __builtin.getAsyncIterator(_t_5);
      {
        let _iter_tmp = await _t_6.next();
        while (!_iter_tmp.done) {
          _t_7 = _iter_tmp.value;
          _t_8 = _t_7[0];
          _t_9 = _t_7[1];
          _t_10 = _t_9.__response;
          _t_11 = _t_9.id;
          _t_12 = _t_9.image_url;
          _t_13 = _t_9.link;
          _t_14 = _t_9.cuisines;
          _t_15 = _t_9.price;
          _t_16 = _t_9.rating;
          _t_17 = _t_9.reviewCount;
          _t_18 = _t_9.geo;
          _t_19 = _t_9.phone;
          _t_20 = _t_9.openingHours;
          _t_21 = new __builtin.Location(13, 13, null);
          _t_22 = __builtin.distance(_t_18, _t_21);
          _t_9.distance = _t_22;
          _t_23 = _t_1 > _t_22;
          if (_t_23) {
            _t_1 = _t_22;
            _t_2 = _t_9;
            _t_3 = _t_8;
            _t_0 = true;
          } else {

          }
          _iter_tmp = await _t_6.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_0) {
      _t_24 = _t_2.__response;
      _t_25 = _t_2.id;
      _t_26 = _t_2.image_url;
      _t_27 = _t_2.link;
      _t_28 = _t_2.cuisines;
      _t_29 = _t_2.price;
      _t_30 = _t_2.rating;
      _t_31 = _t_2.reviewCount;
      _t_32 = _t_2.geo;
      _t_33 = _t_2.phone;
      _t_34 = _t_2.openingHours;
      _t_35 = _t_2.distance;
      _t_36 = {};
      _t_36.id = _t_25;
      _t_36.link = _t_27;
      _t_36.rating = _t_30;
      _t_36.cuisines = _t_28;
      _t_36.geo = _t_32;
      _t_36.image_url = _t_26;
      try {
        await __env.output(String(_t_3), _t_36);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    } else {

    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 83 compiler bug
    [`now => count(@com.yelp.restaurant()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = 0;
    try {
      _t_1 = {};
      _t_2 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_1, { projection: [] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.__response;
          _t_8 = _t_6.id;
          _t_9 = _t_6.image_url;
          _t_10 = _t_6.link;
          _t_11 = _t_6.cuisines;
          _t_12 = _t_6.price;
          _t_13 = _t_6.rating;
          _t_14 = _t_6.reviewCount;
          _t_15 = _t_6.geo;
          _t_16 = _t_6.phone;
          _t_17 = _t_6.openingHours;
          _t_18 = 1;
          _t_0 = _t_0 + _t_18;
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    _t_20 = "count";
    _t_19 = __builtin.aggregateOutputType(_t_20, _t_5);
    _t_21 = {};
    _t_21.count = _t_0;
    try {
      await __env.output(String(_t_19), _t_21);
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 84 projection
    [`now => [rating] of @com.yelp.restaurant();`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_0, { projection: ["id", "rating"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.image_url;
          _t_9 = _t_5.link;
          _t_10 = _t_5.cuisines;
          _t_11 = _t_5.price;
          _t_12 = _t_5.rating;
          _t_13 = _t_5.reviewCount;
          _t_14 = _t_5.geo;
          _t_15 = _t_5.phone;
          _t_16 = _t_5.openingHours;
          _t_17 = {};
          _t_17.id = _t_7;
          _t_17.rating = _t_12;
          try {
            await __env.output(String(_t_4), _t_17);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 85 dontcare
    [`now => (@com.yelp.restaurant()), true(cuisines) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_0, { projection: ["id", "link", "rating", "cuisines", "geo", "image_url"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.image_url;
          _t_9 = _t_5.link;
          _t_10 = _t_5.cuisines;
          _t_11 = _t_5.price;
          _t_12 = _t_5.rating;
          _t_13 = _t_5.reviewCount;
          _t_14 = _t_5.geo;
          _t_15 = _t_5.phone;
          _t_16 = _t_5.openingHours;
          _t_17 = true;
          if (_t_17) {
            _t_18 = {};
            _t_18.id = _t_7;
            _t_18.link = _t_9;
            _t_18.rating = _t_12;
            _t_18.cuisines = _t_10;
            _t_18.geo = _t_14;
            _t_18.image_url = _t_8;
            try {
              await __env.output(String(_t_4), _t_18);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 86
    [`now => [count(cuisines)] of (@com.yelp.restaurant()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_0, { projection: ["id", "count", "cuisines"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.image_url;
          _t_9 = _t_5.link;
          _t_10 = _t_5.cuisines;
          _t_11 = _t_5.price;
          _t_12 = _t_5.rating;
          _t_13 = _t_5.reviewCount;
          _t_14 = _t_5.geo;
          _t_15 = _t_5.phone;
          _t_16 = _t_5.openingHours;
          _t_17 = __builtin.count(_t_10);
          _t_5.count = _t_17;
          _t_18 = {};
          _t_18.id = _t_7;
          _t_18.count = _t_17;
          try {
            await __env.output(String(_t_4), _t_18);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 87
    // function with result, called from assignment
    [`
    function cat_and_twitter() {
      let cat = @com.thecatapi.get();
      // FIXME
      //now => cat() => @com.twitter.post_picture(picture_url=picture_url, caption="cat");
      now => cat() => notify;
      @com.twitter.post_picture(picture_url="http://foo"^^tt:picture, caption="cat");
    }
    // FIXME this does not work for some reason
    //let cat2 = cat_and_twitter();
    //now => cat2() => notify;
    @com.thecatapi.get();
    `,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  await __env.enterProcedure(0, "cat_and_twitter");
  try {
    _t_0 = new Array(0);
    try {
      _t_1 = {};
      _t_2 = await __env.invokeQuery("com.thecatapi", { }, "get", _t_1, { projection: ["image_id", "picture_url", "link"] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.count;
          _t_8 = _t_6.__response;
          _t_9 = _t_6.image_id;
          _t_10 = _t_6.picture_url;
          _t_11 = _t_6.link;
          _t_12 = new Array(2);
          _t_12[0] = _t_5;
          _t_12[1] = _t_6;
          _t_0.push(_t_12);
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    __env.clearGetCache();
    _t_13 = __builtin.getAsyncIterator(_t_0);
    {
      let _iter_tmp = await _t_13.next();
      while (!_iter_tmp.done) {
        _t_14 = _iter_tmp.value;
        _t_15 = _t_14[0];
        _t_16 = _t_14[1];
        _t_17 = _t_16.__response;
        _t_18 = _t_16.image_id;
        _t_19 = _t_16.picture_url;
        _t_20 = _t_16.link;
        try {
          __emit(_t_15, _t_16);
        } catch(_exc_) {
          __env.reportError("Failed to invoke action", _exc_);
        }
        _iter_tmp = await _t_13.next();
      }
    }
    __env.clearGetCache();
    try {
      _t_21 = {};
      _t_22 = "cat";
      _t_21.caption = _t_22;
      _t_23 = new __builtin.Entity("http://foo", null);
      _t_24 = String (_t_23);
      _t_21.picture_url = _t_24;
      await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post_picture", _t_21));
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, "cat_and_twitter");
  }`, `"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  await __env.enterProcedure(1, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.thecatapi", { }, "get", _t_0, { projection: ["image_id", "picture_url", "link"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.count;
          _t_7 = _t_5.__response;
          _t_8 = _t_5.image_id;
          _t_9 = _t_5.picture_url;
          _t_10 = _t_5.link;
          try {
            await __env.output(String(_t_4), _t_5);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(1, null);
  }`]],

    // 88
    [`now => sort(count(recipeCategory) asc of @org.schema.full.Recipe())[1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  let _t_52;
  let _t_53;
  let _t_54;
  let _t_55;
  let _t_56;
  let _t_57;
  let _t_58;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = false;
    _t_1 = Infinity;
    try {
      _t_4 = {};
      _t_5 = await __env.invokeQuery("org.schema.full", { }, "Recipe", _t_4, { projection: ["id", "recipeYield", "recipeCategory", "recipeIngredient", "recipeInstructions", "nutrition", "suitableForDiet", "recipeCuisine", "cookTime", "cookingMethod", "nutrition.saturatedFatContent", "nutrition.fatContent", "nutrition.unsaturatedFatContent", "nutrition.sugarContent", "nutrition.cholesterolContent", "nutrition.carbohydrateContent", "nutrition.proteinContent", "nutrition.sodiumContent", "nutrition.transFatContent", "nutrition.fiberContent", "nutrition.calories", "nutrition.servingSize"], sort: ["count", "asc"], limit: 1 });
      _t_6 = __builtin.getAsyncIterator(_t_5);
      {
        let _iter_tmp = await _t_6.next();
        while (!_iter_tmp.done) {
          _t_7 = _iter_tmp.value;
          _t_8 = _t_7[0];
          _t_9 = _t_7[1];
          _t_10 = _t_9.__response;
          _t_11 = _t_9.id;
          _t_12 = _t_9.recipeYield;
          _t_13 = _t_9.recipeCategory;
          _t_14 = _t_9.recipeIngredient;
          _t_15 = _t_9.recipeInstructions;
          _t_16 = _t_9.nutrition;
          if (_t_16) {
            _t_17 = _t_16.saturatedFatContent;
            _t_18 = _t_16.fatContent;
            _t_19 = _t_16.unsaturatedFatContent;
            _t_20 = _t_16.sugarContent;
            _t_21 = _t_16.cholesterolContent;
            _t_22 = _t_16.carbohydrateContent;
            _t_23 = _t_16.proteinContent;
            _t_24 = _t_16.sodiumContent;
            _t_25 = _t_16.transFatContent;
            _t_26 = _t_16.fiberContent;
            _t_27 = _t_16.calories;
            _t_28 = _t_16.servingSize;
          } else {

          }
          _t_29 = _t_9.suitableForDiet;
          _t_30 = _t_9.recipeCuisine;
          _t_31 = _t_9.cookTime;
          _t_32 = _t_9.cookingMethod;
          _t_33 = __builtin.count(_t_13);
          _t_9.count = _t_33;
          _t_34 = _t_1 > _t_33;
          if (_t_34) {
            _t_1 = _t_33;
            _t_2 = _t_9;
            _t_3 = _t_8;
            _t_0 = true;
          } else {

          }
          _iter_tmp = await _t_6.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_0) {
      _t_35 = _t_2.__response;
      _t_36 = _t_2.id;
      _t_37 = _t_2.recipeYield;
      _t_38 = _t_2.recipeCategory;
      _t_39 = _t_2.recipeIngredient;
      _t_40 = _t_2.recipeInstructions;
      _t_41 = _t_2.nutrition;
      if (_t_41) {
        _t_42 = _t_41.saturatedFatContent;
        _t_43 = _t_41.fatContent;
        _t_44 = _t_41.unsaturatedFatContent;
        _t_45 = _t_41.sugarContent;
        _t_46 = _t_41.cholesterolContent;
        _t_47 = _t_41.carbohydrateContent;
        _t_48 = _t_41.proteinContent;
        _t_49 = _t_41.sodiumContent;
        _t_50 = _t_41.transFatContent;
        _t_51 = _t_41.fiberContent;
        _t_52 = _t_41.calories;
        _t_53 = _t_41.servingSize;
      } else {

      }
      _t_54 = _t_2.suitableForDiet;
      _t_55 = _t_2.recipeCuisine;
      _t_56 = _t_2.cookTime;
      _t_57 = _t_2.cookingMethod;
      _t_58 = _t_2.count;
      try {
        await __env.output(String(_t_3), _t_2);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    } else {

    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

     // 89
    [`now => [nutrition.cholesterolContent, nutrition.saturatedFatContent] of (@org.schema.full.Recipe()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("org.schema.full", { }, "Recipe", _t_0, { projection: ["id", "nutrition.saturatedFatContent", "nutrition.cholesterolContent"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.recipeYield;
          _t_9 = _t_5.recipeCategory;
          _t_10 = _t_5.recipeIngredient;
          _t_11 = _t_5.recipeInstructions;
          _t_12 = _t_5.nutrition;
          if (_t_12) {
            _t_13 = _t_12.saturatedFatContent;
            _t_14 = _t_12.fatContent;
            _t_15 = _t_12.unsaturatedFatContent;
            _t_16 = _t_12.sugarContent;
            _t_17 = _t_12.cholesterolContent;
            _t_18 = _t_12.carbohydrateContent;
            _t_19 = _t_12.proteinContent;
            _t_20 = _t_12.sodiumContent;
            _t_21 = _t_12.transFatContent;
            _t_22 = _t_12.fiberContent;
            _t_23 = _t_12.calories;
            _t_24 = _t_12.servingSize;
          } else {

          }
          _t_25 = _t_5.suitableForDiet;
          _t_26 = _t_5.recipeCuisine;
          _t_27 = _t_5.cookTime;
          _t_28 = _t_5.cookingMethod;
          _t_29 = {};
          _t_29.id = _t_7;
          _t_30 = {};
          _t_29.nutrition = _t_30;
          _t_29.nutrition.saturatedFatContent = _t_13;
          _t_29.nutrition.cholesterolContent = _t_17;
          try {
            await __env.output(String(_t_4), _t_29);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 90: bug with both "in opt" and "out" action parameters
    [`now => @uk.ac.cam.multiwoz.Train.make_booking(day=enum(friday), train="TR2530"^^uk.ac.cam.multiwoz.Train:Train("tr2530"));`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = "friday";
      _t_0.day = _t_1;
      _t_2 = new __builtin.Entity("TR2530", "tr2530");
      _t_0.train = _t_2;
      _t_3 = __env.invokeAction("uk.ac.cam.multiwoz.Train", { }, "make_booking", _t_0);
      _t_4 = __builtin.getAsyncIterator(_t_3);
      {
        let _iter_tmp = await _t_4.next();
        while (!_iter_tmp.done) {
          _t_5 = _iter_tmp.value;
          _t_6 = _t_5[0];
          _t_7 = _t_5[1];
          _t_8 = _t_7.book_people;
          _t_9 = _t_7.__response;
          _t_10 = _t_7.reference_number;
          await __env.output(String(_t_6), _t_7);
          _iter_tmp = await _t_4.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke action", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 91
    // projection on a function with input parameters: the input parameters are carried over
    [`now => [temperature] of @org.thingpedia.weather.current(location=new Location(37.442156, -122.1634471, "Palo Alto, California")) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new __builtin.Location(37.442156, -122.1634471, "Palo Alto, California");
      _t_0.location = _t_1;
      _t_2 = await __env.invokeQuery("org.thingpedia.weather", { }, "current", _t_0, { projection: ["temperature"] });
      _t_3 = __builtin.getAsyncIterator(_t_2);
      {
        let _iter_tmp = await _t_3.next();
        while (!_iter_tmp.done) {
          _t_4 = _iter_tmp.value;
          _t_5 = _t_4[0];
          _t_6 = _t_4[1];
          _t_7 = _t_6.__response;
          _t_8 = _t_6.temperature;
          _t_9 = _t_6.wind_speed;
          _t_10 = _t_6.humidity;
          _t_11 = _t_6.cloudiness;
          _t_12 = _t_6.fog;
          _t_13 = _t_6.status;
          _t_14 = _t_6.icon;
          _t_15 = {};
          _t_15.location = _t_1;
          _t_15.temperature = _t_8;
          try {
            await __env.output(String(_t_5), _t_15);
          } catch(_exc_) {
            __env.reportError("Failed to invoke action", _exc_);
          }
          _iter_tmp = await _t_3.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 92 restaurants open 24/7
    [`now => @com.yelp.restaurant(),
  openingHours == new RecurrentTimeSpecification({ beginTime = new Time(0,0), endTime = new Time(24,0) }) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new Array(1);
      _t_2 = new Array(3);
      _t_3 = "openingHours";
      _t_2[0] = _t_3;
      _t_4 = "==";
      _t_2[1] = _t_4;
      _t_5 = [new __builtin.RecurrentTimeRule({ beginTime: new __builtin.Time(0, 0, 0), endTime: new __builtin.Time(24, 0, 0), interval: 86400000, frequency: 1, dayOfWeek: null, beginDate: null, endDate: null, subtract: false, })];
      _t_2[2] = _t_5;
      _t_1[0] = _t_2;
      _t_6 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_0, { projection: ["id", "link", "rating", "cuisines", "geo", "image_url", "openingHours"], filter: _t_1 });
      _t_7 = __builtin.getAsyncIterator(_t_6);
      {
        let _iter_tmp = await _t_7.next();
        while (!_iter_tmp.done) {
          _t_8 = _iter_tmp.value;
          _t_9 = _t_8[0];
          _t_10 = _t_8[1];
          _t_11 = _t_10.__response;
          _t_12 = _t_10.id;
          _t_13 = _t_10.image_url;
          _t_14 = _t_10.link;
          _t_15 = _t_10.cuisines;
          _t_16 = _t_10.price;
          _t_17 = _t_10.rating;
          _t_18 = _t_10.reviewCount;
          _t_19 = _t_10.geo;
          _t_20 = _t_10.phone;
          _t_21 = _t_10.openingHours;
          _t_23 = [new __builtin.RecurrentTimeRule({ beginTime: new __builtin.Time(0, 0, 0), endTime: new __builtin.Time(24, 0, 0), interval: 86400000, frequency: 1, dayOfWeek: null, beginDate: null, endDate: null, subtract: false, })];
          _t_22 = __builtin.equality(_t_21, _t_23);
          if (_t_22) {
            _t_24 = {};
            _t_24.id = _t_12;
            _t_24.link = _t_14;
            _t_24.rating = _t_17;
            _t_24.cuisines = _t_15;
            _t_24.geo = _t_19;
            _t_24.image_url = _t_13;
            try {
              await __env.output(String(_t_9), _t_24);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_7.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 93 restaurants open this sunday
    [`now => @com.yelp.restaurant(), contains(openingHours, new Date(enum sunday)) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new Array(1);
      _t_2 = new Array(3);
      _t_3 = "openingHours";
      _t_2[0] = _t_3;
      _t_4 = "contains";
      _t_2[1] = _t_4;
      _t_5 = new Date(XNOWX);
      _t_2[2] = _t_5;
      _t_1[0] = _t_2;
      _t_6 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_0, { projection: ["id", "link", "rating", "cuisines", "geo", "image_url", "openingHours"], filter: _t_1 });
      _t_7 = __builtin.getAsyncIterator(_t_6);
      {
        let _iter_tmp = await _t_7.next();
        while (!_iter_tmp.done) {
          _t_8 = _iter_tmp.value;
          _t_9 = _t_8[0];
          _t_10 = _t_8[1];
          _t_11 = _t_10.__response;
          _t_12 = _t_10.id;
          _t_13 = _t_10.image_url;
          _t_14 = _t_10.link;
          _t_15 = _t_10.cuisines;
          _t_16 = _t_10.price;
          _t_17 = _t_10.rating;
          _t_18 = _t_10.reviewCount;
          _t_19 = _t_10.geo;
          _t_20 = _t_10.phone;
          _t_21 = _t_10.openingHours;
          _t_23 = new Date(XNOWX);
          _t_22 = __builtin.recurrentTimeSpecContains(_t_21, _t_23);
          if (_t_22) {
            _t_24 = {};
            _t_24.id = _t_12;
            _t_24.link = _t_14;
            _t_24.rating = _t_17;
            _t_24.cuisines = _t_15;
            _t_24.geo = _t_19;
            _t_24.image_url = _t_13;
            try {
              await __env.output(String(_t_9), _t_24);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_7.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 94 restaurants open now
    [`now => @com.yelp.restaurant(), contains(openingHours, new Date()) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new Array(1);
      _t_2 = new Array(3);
      _t_3 = "openingHours";
      _t_2[0] = _t_3;
      _t_4 = "contains";
      _t_2[1] = _t_4;
      _t_5 = new Date(XNOWX);
      _t_2[2] = _t_5;
      _t_1[0] = _t_2;
      _t_6 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_0, { projection: ["id", "link", "rating", "cuisines", "geo", "image_url", "openingHours"], filter: _t_1 });
      _t_7 = __builtin.getAsyncIterator(_t_6);
      {
        let _iter_tmp = await _t_7.next();
        while (!_iter_tmp.done) {
          _t_8 = _iter_tmp.value;
          _t_9 = _t_8[0];
          _t_10 = _t_8[1];
          _t_11 = _t_10.__response;
          _t_12 = _t_10.id;
          _t_13 = _t_10.image_url;
          _t_14 = _t_10.link;
          _t_15 = _t_10.cuisines;
          _t_16 = _t_10.price;
          _t_17 = _t_10.rating;
          _t_18 = _t_10.reviewCount;
          _t_19 = _t_10.geo;
          _t_20 = _t_10.phone;
          _t_21 = _t_10.openingHours;
          _t_23 = new Date(XNOWX);
          _t_22 = __builtin.recurrentTimeSpecContains(_t_21, _t_23);
          if (_t_22) {
            _t_24 = {};
            _t_24.id = _t_12;
            _t_24.link = _t_14;
            _t_24.rating = _t_17;
            _t_24.cuisines = _t_15;
            _t_24.geo = _t_19;
            _t_24.image_url = _t_13;
            try {
              await __env.output(String(_t_9), _t_24);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_7.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 95 restaurants open at 5pm
    [`now => @com.yelp.restaurant(), contains(openingHours, new Time(17, 0)) => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = new Array(1);
      _t_2 = new Array(3);
      _t_3 = "openingHours";
      _t_2[0] = _t_3;
      _t_4 = "contains";
      _t_2[1] = _t_4;
      _t_5 = new __builtin.Time(17, 0, 0);
      _t_2[2] = _t_5;
      _t_1[0] = _t_2;
      _t_6 = await __env.invokeQuery("com.yelp", { }, "restaurant", _t_0, { projection: ["id", "link", "rating", "cuisines", "geo", "image_url", "openingHours"], filter: _t_1 });
      _t_7 = __builtin.getAsyncIterator(_t_6);
      {
        let _iter_tmp = await _t_7.next();
        while (!_iter_tmp.done) {
          _t_8 = _iter_tmp.value;
          _t_9 = _t_8[0];
          _t_10 = _t_8[1];
          _t_11 = _t_10.__response;
          _t_12 = _t_10.id;
          _t_13 = _t_10.image_url;
          _t_14 = _t_10.link;
          _t_15 = _t_10.cuisines;
          _t_16 = _t_10.price;
          _t_17 = _t_10.rating;
          _t_18 = _t_10.reviewCount;
          _t_19 = _t_10.geo;
          _t_20 = _t_10.phone;
          _t_21 = _t_10.openingHours;
          _t_23 = new __builtin.Time(17, 0, 0);
          _t_22 = __builtin.recurrentTimeSpecContains(_t_21, _t_23);
          if (_t_22) {
            _t_24 = {};
            _t_24.id = _t_12;
            _t_24.link = _t_14;
            _t_24.rating = _t_17;
            _t_24.cuisines = _t_15;
            _t_24.geo = _t_19;
            _t_24.image_url = _t_13;
            try {
              await __env.output(String(_t_9), _t_24);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_7.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 96 nested indices (issue #236)
    [`now => (sort(popularity desc of ((@com.spotify2.song()), id =~ "str:QUOTED_STRING::3:"))[1])[1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  let _t_52;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(1);
    _t_1 = 1;
    _t_0[0] = _t_1;
    _t_2 = new Array(0);
    _t_3 = false;
    _t_4 = -Infinity;
    try {
      _t_7 = {};
      _t_8 = new Array(1);
      _t_9 = new Array(3);
      _t_10 = "id";
      _t_9[0] = _t_10;
      _t_11 = "=~";
      _t_9[1] = _t_11;
      _t_12 = "str:QUOTED_STRING::3:";
      _t_9[2] = _t_12;
      _t_8[0] = _t_9;
      _t_13 = await __env.invokeQuery("com.spotify2", { }, "song", _t_7, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"], filter: _t_8, sort: ["popularity", "desc"], limit: 1 });
      _t_14 = __builtin.getAsyncIterator(_t_13);
      {
        let _iter_tmp = await _t_14.next();
        while (!_iter_tmp.done) {
          _t_15 = _iter_tmp.value;
          _t_16 = _t_15[0];
          _t_17 = _t_15[1];
          _t_18 = _t_17.__response;
          _t_19 = _t_17.id;
          _t_20 = _t_17.artists;
          _t_21 = _t_17.album;
          _t_22 = _t_17.genres;
          _t_23 = _t_17.release_date;
          _t_24 = _t_17.popularity;
          _t_25 = _t_17.energy;
          _t_26 = _t_17.danceability;
          _t_28 = "str:QUOTED_STRING::3:";
          _t_27 = __builtin.like(_t_19, _t_28);
          if (_t_27) {
            _t_29 = _t_4 < _t_24;
            if (_t_29) {
              _t_4 = _t_24;
              _t_5 = _t_17;
              _t_6 = _t_16;
              _t_3 = true;
            } else {

            }
          } else {

          }
          _iter_tmp = await _t_14.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_3) {
      _t_30 = _t_5.__response;
      _t_31 = _t_5.id;
      _t_32 = _t_5.artists;
      _t_33 = _t_5.album;
      _t_34 = _t_5.genres;
      _t_35 = _t_5.release_date;
      _t_36 = _t_5.popularity;
      _t_37 = _t_5.energy;
      _t_38 = _t_5.danceability;
      _t_39 = new Array(2);
      _t_39[0] = _t_5;
      _t_39[1] = _t_6;
      _t_2.push(_t_39);
    } else {

    }
    _t_40 = __builtin.indexArray(_t_2, _t_0);
    for (_t_41 of _t_40) {
      _t_43 = _t_41[0];
      _t_42 = _t_41[1];
      _t_44 = _t_43.__response;
      _t_45 = _t_43.id;
      _t_46 = _t_43.artists;
      _t_47 = _t_43.album;
      _t_48 = _t_43.genres;
      _t_49 = _t_43.release_date;
      _t_50 = _t_43.popularity;
      _t_51 = _t_43.energy;
      _t_52 = _t_43.danceability;
      try {
        await __env.output(String(_t_42), _t_43);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 97 nested indices (issue #236)
    [`now => ((sort(popularity desc of ((@com.spotify2.song()), id =~ "str:QUOTED_STRING::3:")))[1])[1] => @com.spotify2.play_song(song=id);`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  let _t_52;
  let _t_53;
  let _t_54;
  let _t_55;
  let _t_56;
  let _t_57;
  let _t_58;
  let _t_59;
  let _t_60;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(1);
    _t_1 = 1;
    _t_0[0] = _t_1;
    _t_2 = new Array(0);
    _t_3 = false;
    _t_4 = -Infinity;
    try {
      _t_7 = {};
      _t_8 = new Array(1);
      _t_9 = new Array(3);
      _t_10 = "id";
      _t_9[0] = _t_10;
      _t_11 = "=~";
      _t_9[1] = _t_11;
      _t_12 = "str:QUOTED_STRING::3:";
      _t_9[2] = _t_12;
      _t_8[0] = _t_9;
      _t_13 = await __env.invokeQuery("com.spotify2", { }, "song", _t_7, { projection: ["id"], filter: _t_8, sort: ["popularity", "desc"], limit: 1 });
      _t_14 = __builtin.getAsyncIterator(_t_13);
      {
        let _iter_tmp = await _t_14.next();
        while (!_iter_tmp.done) {
          _t_15 = _iter_tmp.value;
          _t_16 = _t_15[0];
          _t_17 = _t_15[1];
          _t_18 = _t_17.__response;
          _t_19 = _t_17.id;
          _t_20 = _t_17.artists;
          _t_21 = _t_17.album;
          _t_22 = _t_17.genres;
          _t_23 = _t_17.release_date;
          _t_24 = _t_17.popularity;
          _t_25 = _t_17.energy;
          _t_26 = _t_17.danceability;
          _t_28 = "str:QUOTED_STRING::3:";
          _t_27 = __builtin.like(_t_19, _t_28);
          if (_t_27) {
            _t_29 = _t_4 < _t_24;
            if (_t_29) {
              _t_4 = _t_24;
              _t_5 = _t_17;
              _t_6 = _t_16;
              _t_3 = true;
            } else {

            }
          } else {

          }
          _iter_tmp = await _t_14.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_3) {
      _t_30 = _t_5.__response;
      _t_31 = _t_5.id;
      _t_32 = _t_5.artists;
      _t_33 = _t_5.album;
      _t_34 = _t_5.genres;
      _t_35 = _t_5.release_date;
      _t_36 = _t_5.popularity;
      _t_37 = _t_5.energy;
      _t_38 = _t_5.danceability;
      _t_39 = new Array(2);
      _t_39[0] = _t_5;
      _t_39[1] = _t_6;
      _t_2.push(_t_39);
    } else {

    }
    _t_40 = __builtin.indexArray(_t_2, _t_0);
    for (_t_41 of _t_40) {
      _t_43 = _t_41[0];
      _t_42 = _t_41[1];
      _t_44 = _t_43.__response;
      _t_45 = _t_43.id;
      _t_46 = _t_43.artists;
      _t_47 = _t_43.album;
      _t_48 = _t_43.genres;
      _t_49 = _t_43.release_date;
      _t_50 = _t_43.popularity;
      _t_51 = _t_43.energy;
      _t_52 = _t_43.danceability;
      try {
        _t_53 = {};
        _t_53.song = _t_45;
        _t_54 = __env.invokeAction("com.spotify2", { }, "play_song", _t_53);
        _t_55 = __builtin.getAsyncIterator(_t_54);
        {
          let _iter_tmp = await _t_55.next();
          while (!_iter_tmp.done) {
            _t_56 = _iter_tmp.value;
            _t_57 = _t_56[0];
            _t_58 = _t_56[1];
            _t_59 = _t_58.__response;
            _t_60 = _t_58.device;
            await __env.output(String(_t_57), _t_58);
            _iter_tmp = await _t_55.next();
          }
        }
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 98 nested indices (complex index inside)
    [`now => ((sort(popularity desc of @com.spotify2.song()))[1, 2, 3])[1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  let _t_48;
  let _t_49;
  let _t_50;
  let _t_51;
  let _t_52;
  let _t_53;
  let _t_54;
  let _t_55;
  let _t_56;
  let _t_57;
  let _t_58;
  let _t_59;
  let _t_60;
  let _t_61;
  let _t_62;
  let _t_63;
  let _t_64;
  let _t_65;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(1);
    _t_1 = 1;
    _t_0[0] = _t_1;
    _t_2 = new Array(0);
    _t_3 = new Array(3);
    _t_4 = 1;
    _t_3[0] = _t_4;
    _t_5 = 2;
    _t_3[1] = _t_5;
    _t_6 = 3;
    _t_3[2] = _t_6;
    _t_7 = new Array(0);
    _t_8 = new Array(0);
    try {
      _t_9 = {};
      _t_10 = await __env.invokeQuery("com.spotify2", { }, "song", _t_9, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"], sort: ["popularity", "desc"] });
      _t_11 = __builtin.getAsyncIterator(_t_10);
      {
        let _iter_tmp = await _t_11.next();
        while (!_iter_tmp.done) {
          _t_12 = _iter_tmp.value;
          _t_13 = _t_12[0];
          _t_14 = _t_12[1];
          _t_15 = _t_14.__response;
          _t_16 = _t_14.id;
          _t_17 = _t_14.artists;
          _t_18 = _t_14.album;
          _t_19 = _t_14.genres;
          _t_20 = _t_14.release_date;
          _t_21 = _t_14.popularity;
          _t_22 = _t_14.energy;
          _t_23 = _t_14.danceability;
          _t_24 = new Array(2);
          _t_24[0] = _t_14;
          _t_24[1] = _t_13;
          _t_8.push(_t_24);
          _iter_tmp = await _t_11.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    _t_25 = "popularity";
    __builtin.sortdesc(_t_8, _t_25);
    for (_t_26 of _t_8) {
      _t_28 = _t_26[0];
      _t_27 = _t_26[1];
      _t_29 = _t_28.__response;
      _t_30 = _t_28.id;
      _t_31 = _t_28.artists;
      _t_32 = _t_28.album;
      _t_33 = _t_28.genres;
      _t_34 = _t_28.release_date;
      _t_35 = _t_28.popularity;
      _t_36 = _t_28.energy;
      _t_37 = _t_28.danceability;
      _t_38 = new Array(2);
      _t_38[0] = _t_28;
      _t_38[1] = _t_27;
      _t_7.push(_t_38);
    }
    _t_39 = __builtin.indexArray(_t_7, _t_3);
    for (_t_40 of _t_39) {
      _t_42 = _t_40[0];
      _t_41 = _t_40[1];
      _t_43 = _t_42.__response;
      _t_44 = _t_42.id;
      _t_45 = _t_42.artists;
      _t_46 = _t_42.album;
      _t_47 = _t_42.genres;
      _t_48 = _t_42.release_date;
      _t_49 = _t_42.popularity;
      _t_50 = _t_42.energy;
      _t_51 = _t_42.danceability;
      _t_52 = new Array(2);
      _t_52[0] = _t_42;
      _t_52[1] = _t_41;
      _t_2.push(_t_52);
    }
    _t_53 = __builtin.indexArray(_t_2, _t_0);
    for (_t_54 of _t_53) {
      _t_56 = _t_54[0];
      _t_55 = _t_54[1];
      _t_57 = _t_56.__response;
      _t_58 = _t_56.id;
      _t_59 = _t_56.artists;
      _t_60 = _t_56.album;
      _t_61 = _t_56.genres;
      _t_62 = _t_56.release_date;
      _t_63 = _t_56.popularity;
      _t_64 = _t_56.energy;
      _t_65 = _t_56.danceability;
      try {
        await __env.output(String(_t_55), _t_56);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 99 nested indices (complex index outsde)
    [`now => ((sort(popularity desc of @com.spotify2.song()))[1])[1, 2, 3] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  let _t_39;
  let _t_40;
  let _t_41;
  let _t_42;
  let _t_43;
  let _t_44;
  let _t_45;
  let _t_46;
  let _t_47;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(3);
    _t_1 = 1;
    _t_0[0] = _t_1;
    _t_2 = 2;
    _t_0[1] = _t_2;
    _t_3 = 3;
    _t_0[2] = _t_3;
    _t_4 = new Array(0);
    _t_5 = false;
    _t_6 = -Infinity;
    try {
      _t_9 = {};
      _t_10 = await __env.invokeQuery("com.spotify2", { }, "song", _t_9, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"], sort: ["popularity", "desc"], limit: 1 });
      _t_11 = __builtin.getAsyncIterator(_t_10);
      {
        let _iter_tmp = await _t_11.next();
        while (!_iter_tmp.done) {
          _t_12 = _iter_tmp.value;
          _t_13 = _t_12[0];
          _t_14 = _t_12[1];
          _t_15 = _t_14.__response;
          _t_16 = _t_14.id;
          _t_17 = _t_14.artists;
          _t_18 = _t_14.album;
          _t_19 = _t_14.genres;
          _t_20 = _t_14.release_date;
          _t_21 = _t_14.popularity;
          _t_22 = _t_14.energy;
          _t_23 = _t_14.danceability;
          _t_24 = _t_6 < _t_21;
          if (_t_24) {
            _t_6 = _t_21;
            _t_7 = _t_14;
            _t_8 = _t_13;
            _t_5 = true;
          } else {

          }
          _iter_tmp = await _t_11.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_5) {
      _t_25 = _t_7.__response;
      _t_26 = _t_7.id;
      _t_27 = _t_7.artists;
      _t_28 = _t_7.album;
      _t_29 = _t_7.genres;
      _t_30 = _t_7.release_date;
      _t_31 = _t_7.popularity;
      _t_32 = _t_7.energy;
      _t_33 = _t_7.danceability;
      _t_34 = new Array(2);
      _t_34[0] = _t_7;
      _t_34[1] = _t_8;
      _t_4.push(_t_34);
    } else {

    }
    _t_35 = __builtin.indexArray(_t_4, _t_0);
    for (_t_36 of _t_35) {
      _t_38 = _t_36[0];
      _t_37 = _t_36[1];
      _t_39 = _t_38.__response;
      _t_40 = _t_38.id;
      _t_41 = _t_38.artists;
      _t_42 = _t_38.album;
      _t_43 = _t_38.genres;
      _t_44 = _t_38.release_date;
      _t_45 = _t_38.popularity;
      _t_46 = _t_38.energy;
      _t_47 = _t_38.danceability;
      try {
        await __env.output(String(_t_37), _t_38);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 100 nested indices (no sort)
    [`now => (@com.spotify2.song()[1])[1] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(1);
    _t_1 = 1;
    _t_0[0] = _t_1;
    _t_2 = new Array(0);
    _t_3 = 1;
    _t_4 = false;
    _t_5 = 0;
    try {
      _t_6 = {};
      _t_7 = await __env.invokeQuery("com.spotify2", { }, "song", _t_6, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"], limit: 1 });
      _t_8 = __builtin.getAsyncIterator(_t_7);
      {
        let _iter_tmp = await _t_8.next();
        while (!_iter_tmp.done) {
          _t_9 = _iter_tmp.value;
          _t_10 = _t_9[0];
          _t_11 = _t_9[1];
          _t_12 = _t_11.__response;
          _t_13 = _t_11.id;
          _t_14 = _t_11.artists;
          _t_15 = _t_11.album;
          _t_16 = _t_11.genres;
          _t_17 = _t_11.release_date;
          _t_18 = _t_11.popularity;
          _t_19 = _t_11.energy;
          _t_20 = _t_11.danceability;
          _t_21 = 1;
          _t_5 = _t_5 + _t_21;
          _t_22 = _t_3 == _t_5;
          if (_t_22) {
            _t_4 = true;
            break;
          } else {

          }
          _iter_tmp = await _t_8.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_4) {
      _t_23 = new Array(2);
      _t_23[0] = _t_11;
      _t_23[1] = _t_10;
      _t_2.push(_t_23);
    } else {

    }
    _t_24 = __builtin.indexArray(_t_2, _t_0);
    for (_t_25 of _t_24) {
      _t_27 = _t_25[0];
      _t_26 = _t_25[1];
      _t_28 = _t_27.__response;
      _t_29 = _t_27.id;
      _t_30 = _t_27.artists;
      _t_31 = _t_27.album;
      _t_32 = _t_27.genres;
      _t_33 = _t_27.release_date;
      _t_34 = _t_27.popularity;
      _t_35 = _t_27.energy;
      _t_36 = _t_27.danceability;
      try {
        await __env.output(String(_t_26), _t_27);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 101 nested indices (no sort, complex index outside)
    [`now => (@com.spotify2.song()[1])[1, 2, 3] => notify;`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  await __env.enterProcedure(0, null);
  try {
    _t_0 = new Array(3);
    _t_1 = 1;
    _t_0[0] = _t_1;
    _t_2 = 2;
    _t_0[1] = _t_2;
    _t_3 = 3;
    _t_0[2] = _t_3;
    _t_4 = new Array(0);
    _t_5 = 1;
    _t_6 = false;
    _t_7 = 0;
    try {
      _t_8 = {};
      _t_9 = await __env.invokeQuery("com.spotify2", { }, "song", _t_8, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"], limit: 1 });
      _t_10 = __builtin.getAsyncIterator(_t_9);
      {
        let _iter_tmp = await _t_10.next();
        while (!_iter_tmp.done) {
          _t_11 = _iter_tmp.value;
          _t_12 = _t_11[0];
          _t_13 = _t_11[1];
          _t_14 = _t_13.__response;
          _t_15 = _t_13.id;
          _t_16 = _t_13.artists;
          _t_17 = _t_13.album;
          _t_18 = _t_13.genres;
          _t_19 = _t_13.release_date;
          _t_20 = _t_13.popularity;
          _t_21 = _t_13.energy;
          _t_22 = _t_13.danceability;
          _t_23 = 1;
          _t_7 = _t_7 + _t_23;
          _t_24 = _t_5 == _t_7;
          if (_t_24) {
            _t_6 = true;
            break;
          } else {

          }
          _iter_tmp = await _t_10.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
    if (_t_6) {
      _t_25 = new Array(2);
      _t_25[0] = _t_13;
      _t_25[1] = _t_12;
      _t_4.push(_t_25);
    } else {

    }
    _t_26 = __builtin.indexArray(_t_4, _t_0);
    for (_t_27 of _t_26) {
      _t_29 = _t_27[0];
      _t_28 = _t_27[1];
      _t_30 = _t_29.__response;
      _t_31 = _t_29.id;
      _t_32 = _t_29.artists;
      _t_33 = _t_29.album;
      _t_34 = _t_29.genres;
      _t_35 = _t_29.release_date;
      _t_36 = _t_29.popularity;
      _t_37 = _t_29.energy;
      _t_38 = _t_29.danceability;
      try {
        await __env.output(String(_t_28), _t_29);
      } catch(_exc_) {
        __env.reportError("Failed to invoke action", _exc_);
      }
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]],

    // 102 compilation of when-get w/ param passing (goes through legacy path as stream join w/ pp)
   [`monitor(@com.xkcd.get_comic()) => @com.yandex.translate.translate(target_language="it"^^tt:iso_lang_code, text=title) => @com.twitter.post(status=translated_text);`,
   [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  _t_0 = await __env.readState(0);
  try {
    _t_1 = {};
    _t_2 = await __env.invokeMonitor("com.xkcd", { }, "get_comic", _t_1, { projection: ["title", "picture_url", "link", "alt_text"] });
    {
      let _iter_tmp = await _t_2.next();
      while (!_iter_tmp.done) {
        _t_3 = _iter_tmp.value;
        _t_4 = _t_3[0];
        _t_5 = _t_3[1];
        _t_6 = _t_5.number;
        _t_7 = _t_5.__response;
        _t_8 = _t_5.title;
        _t_9 = _t_5.picture_url;
        _t_10 = _t_5.link;
        _t_11 = _t_5.alt_text;
        _t_12 = __builtin.isNewTuple(_t_0, _t_5, ["title", "picture_url", "link", "alt_text"]);
        _t_13 = __builtin.addTuple(_t_0, _t_5);
        await __env.writeState(0, _t_13);
        _t_0 = _t_13;
        if (_t_12) {
          try {
            _t_14 = {};
            _t_15 = new __builtin.Entity("it", null);
            _t_14.target_language = _t_15;
            _t_14.text = _t_8;
            _t_16 = await __env.invokeQuery("com.yandex.translate", { }, "translate", _t_14, { projection: ["translated_text"] });
            _t_17 = __builtin.getAsyncIterator(_t_16);
            {
              let _iter_tmp = await _t_17.next();
              while (!_iter_tmp.done) {
                _t_18 = _iter_tmp.value;
                _t_19 = _t_18[0];
                _t_20 = _t_18[1];
                _t_21 = _t_20.source_language;
                _t_22 = _t_20.__response;
                _t_23 = _t_20.translated_text;
                _t_24 = __builtin.combineOutputTypes(_t_4, _t_19);
                _t_25 = {};
                _t_25.target_language = _t_15;
                _t_25.text = _t_8;
                _t_25.source_language = _t_21;
                _t_25.__response = _t_22;
                _t_25.translated_text = _t_23;
                _t_25.number = _t_6;
                _t_25.title = _t_8;
                _t_25.picture_url = _t_9;
                _t_25.link = _t_10;
                _t_25.alt_text = _t_11;
                _t_26 = _t_25.target_language;
                _t_27 = _t_25.text;
                _t_28 = _t_25.source_language;
                _t_29 = _t_25.__response;
                _t_30 = _t_25.translated_text;
                _t_31 = _t_25.number;
                _t_32 = _t_25.title;
                _t_33 = _t_25.picture_url;
                _t_34 = _t_25.link;
                _t_35 = _t_25.alt_text;
                try {
                  _t_36 = {};
                  _t_36.status = _t_30;
                  await __builtin.drainAction(__env.invokeAction("com.twitter", { }, "post", _t_36));
                } catch(_exc_) {
                  __env.reportError("Failed to invoke action", _exc_);
                }
                _iter_tmp = await _t_17.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
        } else {

        }
        _iter_tmp = await _t_2.next();
      }
    }
  } catch(_exc_) {
    __env.reportError("Failed to invoke trigger", _exc_);
  }`]
   ],

    // 103 comparison subquery 1
   [`@com.spotify2.album() filter popularity >= any([energy] of @com.spotify2.song());`,
   [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.spotify2", { }, "album", _t_0, { projection: ["id", "artists", "release_date", "popularity"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.artists;
          _t_9 = _t_5.release_date;
          _t_10 = _t_5.popularity;
          _t_11 = false;
          try {
            _t_12 = {};
            _t_13 = await __env.invokeQuery("com.spotify2", { }, "song", _t_12, { projection: ["energy"] });
            _t_14 = __builtin.getAsyncIterator(_t_13);
            {
              let _iter_tmp = await _t_14.next();
              while (!_iter_tmp.done) {
                _t_15 = _iter_tmp.value;
                _t_16 = _t_15[0];
                _t_17 = _t_15[1];
                _t_18 = _t_17.__response;
                _t_19 = _t_17.id;
                _t_20 = _t_17.artists;
                _t_21 = _t_17.album;
                _t_22 = _t_17.genres;
                _t_23 = _t_17.release_date;
                _t_24 = _t_17.popularity;
                _t_25 = _t_17.energy;
                _t_26 = _t_17.danceability;
                _t_27 = {};
                _t_27.energy = _t_25;
                _t_28 = _t_10 >= _t_25;
                if (_t_28) {
                  _t_11 = true;
                  break;
                } else {

                }
                _iter_tmp = await _t_14.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          if (_t_11) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]
   ],

    // 104 comparison subquery 2
   [`@com.spotify2.song() filter album == any([id] of @com.spotify2.album());`,
   [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.spotify2", { }, "song", _t_0, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.artists;
          _t_9 = _t_5.album;
          _t_10 = _t_5.genres;
          _t_11 = _t_5.release_date;
          _t_12 = _t_5.popularity;
          _t_13 = _t_5.energy;
          _t_14 = _t_5.danceability;
          _t_15 = false;
          try {
            _t_16 = {};
            _t_17 = await __env.invokeQuery("com.spotify2", { }, "album", _t_16, { projection: ["id"] });
            _t_18 = __builtin.getAsyncIterator(_t_17);
            {
              let _iter_tmp = await _t_18.next();
              while (!_iter_tmp.done) {
                _t_19 = _iter_tmp.value;
                _t_20 = _t_19[0];
                _t_21 = _t_19[1];
                _t_22 = _t_21.__response;
                _t_23 = _t_21.id;
                _t_24 = _t_21.artists;
                _t_25 = _t_21.release_date;
                _t_26 = _t_21.popularity;
                _t_27 = {};
                _t_27.id = _t_23;
                _t_28 = __builtin.equality(_t_9, _t_23);
                if (_t_28) {
                  _t_15 = true;
                  break;
                } else {

                }
                _iter_tmp = await _t_18.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          if (_t_15) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]
   ],

    // 105 comparison subquery with sort
   [`@com.spotify2.song() filter album == any([id] of sort(release_date desc of @com.spotify2.album())[1]);`,
   [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  let _t_35;
  let _t_36;
  let _t_37;
  let _t_38;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.spotify2", { }, "song", _t_0, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.artists;
          _t_9 = _t_5.album;
          _t_10 = _t_5.genres;
          _t_11 = _t_5.release_date;
          _t_12 = _t_5.popularity;
          _t_13 = _t_5.energy;
          _t_14 = _t_5.danceability;
          _t_15 = false;
          _t_16 = false;
          _t_17 = -Infinity;
          try {
            _t_20 = {};
            _t_21 = await __env.invokeQuery("com.spotify2", { }, "album", _t_20, { projection: ["id"], sort: ["release_date", "desc"], limit: 1 });
            _t_22 = __builtin.getAsyncIterator(_t_21);
            {
              let _iter_tmp = await _t_22.next();
              while (!_iter_tmp.done) {
                _t_23 = _iter_tmp.value;
                _t_24 = _t_23[0];
                _t_25 = _t_23[1];
                _t_26 = _t_25.__response;
                _t_27 = _t_25.id;
                _t_28 = _t_25.artists;
                _t_29 = _t_25.release_date;
                _t_30 = _t_25.popularity;
                _t_31 = _t_17 < _t_29;
                if (_t_31) {
                  _t_17 = _t_29;
                  _t_18 = _t_25;
                  _t_19 = _t_24;
                  _t_16 = true;
                } else {

                }
                _iter_tmp = await _t_22.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          if (_t_16) {
            _t_32 = _t_18.__response;
            _t_33 = _t_18.id;
            _t_34 = _t_18.artists;
            _t_35 = _t_18.release_date;
            _t_36 = _t_18.popularity;
            _t_37 = {};
            _t_37.id = _t_33;
            _t_38 = __builtin.equality(_t_9, _t_33);
            if (_t_38) {
              _t_15 = true;
              break;
            } else {

            }
          } else {

          }
          if (_t_15) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]
   ],

    // 106 comparison subquery with sort
    [`@gov.nasa.asteroid() filter distance <= any([distance(location, new Location(1, 2))] of @org.thingpedia.builtin.thingengine.builtin.get_gps());`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("gov.nasa", { }, "asteroid", _t_0, { projection: ["asteroid_id", "name", "estimated_diameter_min", "estimated_diameter_max", "is_dangerous", "relative_velocity", "distance", "orbiting_body"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.asteroid_id;
          _t_8 = _t_5.name;
          _t_9 = _t_5.estimated_diameter_min;
          _t_10 = _t_5.estimated_diameter_max;
          _t_11 = _t_5.is_dangerous;
          _t_12 = _t_5.relative_velocity;
          _t_13 = _t_5.distance;
          _t_14 = _t_5.orbiting_body;
          _t_15 = false;
          try {
            _t_16 = {};
            _t_17 = await __env.invokeQuery("org.thingpedia.builtin.thingengine.builtin", { }, "get_gps", _t_16, { projection: ["distance", "location"] });
            _t_18 = __builtin.getAsyncIterator(_t_17);
            {
              let _iter_tmp = await _t_18.next();
              while (!_iter_tmp.done) {
                _t_19 = _iter_tmp.value;
                _t_20 = _t_19[0];
                _t_21 = _t_19[1];
                _t_22 = _t_21.__response;
                _t_23 = _t_21.location;
                _t_24 = _t_21.altitude;
                _t_25 = _t_21.bearing;
                _t_26 = _t_21.speed;
                _t_27 = new __builtin.Location(1, 2, null);
                _t_28 = __builtin.distance(_t_23, _t_27);
                _t_21.distance = _t_28;
                _t_29 = {};
                _t_29.distance = _t_28;
                _t_30 = _t_13 <= _t_28;
                if (_t_30) {
                  _t_15 = true;
                  break;
                } else {

                }
                _iter_tmp = await _t_18.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          if (_t_15) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]
    ],

    // 107 existential subquery
    [`@com.spotify2.song() filter any([id] of @com.spotify2.album() filter id =~ "lol");`,
    [`"use strict";
  let _t_0;
  let _t_1;
  let _t_2;
  let _t_3;
  let _t_4;
  let _t_5;
  let _t_6;
  let _t_7;
  let _t_8;
  let _t_9;
  let _t_10;
  let _t_11;
  let _t_12;
  let _t_13;
  let _t_14;
  let _t_15;
  let _t_16;
  let _t_17;
  let _t_18;
  let _t_19;
  let _t_20;
  let _t_21;
  let _t_22;
  let _t_23;
  let _t_24;
  let _t_25;
  let _t_26;
  let _t_27;
  let _t_28;
  let _t_29;
  let _t_30;
  let _t_31;
  let _t_32;
  let _t_33;
  let _t_34;
  await __env.enterProcedure(0, null);
  try {
    try {
      _t_0 = {};
      _t_1 = await __env.invokeQuery("com.spotify2", { }, "song", _t_0, { projection: ["id", "artists", "album", "genres", "release_date", "popularity", "energy", "danceability"] });
      _t_2 = __builtin.getAsyncIterator(_t_1);
      {
        let _iter_tmp = await _t_2.next();
        while (!_iter_tmp.done) {
          _t_3 = _iter_tmp.value;
          _t_4 = _t_3[0];
          _t_5 = _t_3[1];
          _t_6 = _t_5.__response;
          _t_7 = _t_5.id;
          _t_8 = _t_5.artists;
          _t_9 = _t_5.album;
          _t_10 = _t_5.genres;
          _t_11 = _t_5.release_date;
          _t_12 = _t_5.popularity;
          _t_13 = _t_5.energy;
          _t_14 = _t_5.danceability;
          _t_15 = false;
          try {
            _t_16 = {};
            _t_17 = new Array(1);
            _t_18 = new Array(3);
            _t_19 = "id";
            _t_18[0] = _t_19;
            _t_20 = "=~";
            _t_18[1] = _t_20;
            _t_21 = "lol";
            _t_18[2] = _t_21;
            _t_17[0] = _t_18;
            _t_22 = await __env.invokeQuery("com.spotify2", { }, "album", _t_16, { projection: ["id"], filter: _t_17 });
            _t_23 = __builtin.getAsyncIterator(_t_22);
            {
              let _iter_tmp = await _t_23.next();
              while (!_iter_tmp.done) {
                _t_24 = _iter_tmp.value;
                _t_25 = _t_24[0];
                _t_26 = _t_24[1];
                _t_27 = _t_26.__response;
                _t_28 = _t_26.id;
                _t_29 = _t_26.artists;
                _t_30 = _t_26.release_date;
                _t_31 = _t_26.popularity;
                _t_33 = "lol";
                _t_32 = __builtin.like(_t_28, _t_33);
                if (_t_32) {
                  _t_34 = {};
                  _t_15 = true;
                  break;
                } else {

                }
                _iter_tmp = await _t_23.next();
              }
            }
          } catch(_exc_) {
            __env.reportError("Failed to invoke query", _exc_);
          }
          if (_t_15) {
            try {
              await __env.output(String(_t_4), _t_5);
            } catch(_exc_) {
              __env.reportError("Failed to invoke action", _exc_);
            }
          } else {

          }
          _iter_tmp = await _t_2.next();
        }
      }
    } catch(_exc_) {
      __env.reportError("Failed to invoke query", _exc_);
    }
  } finally {
    await __env.exitProcedure(0, null);
  }`]
    ],
];

// eslint-disable-next-line prefer-arrow-callback
const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
async function test(i) {
    console.log('Test Case #' + (i+1));

    let [code, expected] = TEST_CASES[i];

    try {
        const compiler = new Compiler(schemaRetriever, true);

        const compiled = await compiler.compileCode(code);

        const generated = [];
        for (let name in compiler._toplevelscope)
            generated.push(compiler._toplevelscope[name]);
        if (compiled.command)
            generated.push(compiled.command);
        generated.push(...compiled.rules);
        if (generated.length !== expected.length) {
            console.error('Test Case #' + (i+1) + ': wrong number of generated functions');
            console.error(`Expected ${expected.length}, Generated ${generated.length}`);
            if (process.env.TEST_MODE)
                throw new Error(`testCompiler ${i+1} FAILED`);
        }

        for (let j = 0; j < Math.max(expected.length, generated.length); j++) {
            let code = generated[j] || [];
            code = code.replace(/new Date\([0-9]+\)/g, 'new Date(XNOWX)');

            if (code === undefined || code.trim() !== expected[j].trim()) {
                console.error('Test Case #' + (i+1) + ': compiled code does not match what expected');
                //console.error('Expected: ' + expected[j]);
                console.error('Compiled: ' + code);
                if (process.env.TEST_MODE)
                    throw new Error(`testCompiler ${i+1} FAILED`);
            } else {
                new AsyncFunction('__builtin', '__scope', '__ast', '__env', code);
            }
        }
    } catch(e) {
        console.error('Test Case #' + (i+1) + ': failed with exception');
        console.error('Code: ' + code);
        console.error('Error: ' + e.message);
        console.error(e.stack);
        if (process.env.TEST_MODE)
            throw e;
    }
}

export default async function main() {
    const max = !module.parent && process.argv[2] ? parseInt(process.argv[2]) : Infinity;
    for (let i = 0; i < Math.min(max, TEST_CASES.length); i++)
      await test(i);
}
if (!module.parent)
    main();
