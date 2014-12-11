window.jQuery || document.write('<script src="../../assets/srmapexperience/js/vendor/jquery-1.11.0.min.js"><\/script>')

var base = document.createElement('a');
base.href = location.href.replace(/\#.*$/, '');

(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-N98J');

/* Preloader */
var loaderAnimation = $("#html5Loader").LoaderAnimation({
  onComplete: function() {
    console.log("preloader animation completed!");
  }
});
$.html5Loader({
  filesToLoad: '../../assets/srmapexperience/js/vendor/preload-files.json',
  onComplete: function() {
    console.log("All the assets are loaded!");
  },
  onUpdate: loaderAnimation.update
});

var intro_text = ["Take\x20the\x20Tour", "Let\u2019s\x20go,\x20let\u2019s\x20go\x21", "I\x20wanna\x20click\x20something\x21", "Okay.", "Let\x20me\x20at\x20\u2018em\x21", "Time\x20to\x20scroll\x21", "Shall we begin?"];

var poi = {
  "the-bases": {
    position: [-80.5, - 133],
    type: "default",
    anchor: "bottom",
    popup: {
      title: "The\x20Bases",
      description: "The Rift's two new bases incorporate unique architectural and stylistic elements to help you quickly orient yourself on the map. The south base features a bold and angular look in its nexus, inhibs, towers and minions, whereas the north base uses sweeping curves and smooth lines."
    }
  },
  "baron-nashor": {
    position: [-36, - 74],
    type: "monster",
    anchor: "top",
    popup: {
      title: "Baron\x20Nashor",
      description: "The\x20ol\u2019\x20Baron\x20pit,\x20home\x20to\x20countless\x20broken\x20dreams\x20as\x20well\x20as\x20the\x20Rift\u2019s\x20meanest\x20monster.\x20You\u2019ll\x20ward\x20here,\x20you\u2019ll\x20fight\x20here,\x20you\u2019ll\x20die\x20here,\x20and\x20if\x20you\u2019re\x20extra\x20awesome,\x20you\x20might\x20just\x20win\x20games\x20here.\x20Kill\x20Baron\x20and\x20you\u2019ll\x20give\x20your\x20team\x20the\x20baron\x20buff\x20along\x20with\x20a\x20good\x20chunk\x20of\x20gold\x21",
      src: "http://www.youtube.com/embed/BIEuKcvhl80?rel=0"
    }
  },
  "dragon": {
    position: [-72.5, 9],
    type: "monster",
    popup: {
      title: "Dragon",
      description: "Dragon\u2019s\x20back\x20and\x20burnier\x20than\x20ever\x20before.\x20Instead\x20of\x20breathing\x20itty\x2Dbitty\x20fireballs\x20at\x20whoever\u2019s\x20closest\x20to\x20him,\x20now\x20he\x20blasts\x20his\x20target\x20with\x20fire\x20that\x20hurts\x20nearby\x20allies.",
      src: "http://www.youtube.com/embed/D7TCLQBzeFA?rel=0"
    }
  },
  "red-brambleback": {
    position: [-74, - 30],
    type: "monster",
    anchor: "bottom",
    popup: {
      title: "Red\x20Brambleback",
      description: "Summoner\u2019s\x20Rift\x20features\x20two\x20of\x20these\x20terrors.\x20The\x20red\x20bramblebacks\x20fight\x20fiercely,\x20but\x20killing\x20one\x20grants\x20their\x20slayer\x20the\x20Crest\x20of\x20Cinders,\x20which\x20burns\x20and\x20slows\x20any\x20enemies\x20struck.",
      src: "http://www.youtube.com/embed/3XGsoigRdY8?rel=0"
    }
  },
  "blue-sentinel": {
    position: [-58.5, 19.5],
    type: "monster",
    anchor: "bottom",
    popup: {
      title: "Blue\x20Sentinel",
      description: "You\u2019ll\x20find\x20a\x20couple\x20of\x20blue\x20sentinels\x20as\x20you\x20wander\x20through\x20the\x20Rift.\x20Though\x20they\u2019re\x20passive\x20enough\x20when\x20left\x20alone,\x20they\x20pack\x20quite\x20the\x20punch\x20when\x20threatened\x20by...\x20say...\x20you.\x20Still,\x20killing\x20a\x20blue\x20sentinel\u2019s\x20definitely\x20worth\x20the\x20trouble\x3A\x20on\x20top\x20of\x20the\x20gold,\x20their\x20killer\x20gains\x20the\x20Crest\x20of\x20Insight,\x20which\x20increases\x20mana\x20regen\x20and\x20decreases\x20ability\x20cooldowns.",
      src: "http://www.youtube.com/embed/nT-FUfaTnHc?rel=0"
    }
  },
  "gromp": {
    position: [-48, - 119],
    type: "monster",
    anchor: "bottom",
    popup: {
      title: "Gromp",
      description: "Having\x20enjoyed\x20League\u2019s\x20fastest\x20growth\x20spurt\x20since\x20Lulu\x20ulted\x20Zac\x20with\x20homeguard\x20boots\x20and\x20six\x20warmogs,\x20Gromp\u2019s\x20quickly\x20made\x20quite\x20the\x20impact\x20on\x20the\x20Rift.\x20Kill\x20the\x20big\x20guy\x20for\x20gold\x21",
      src: "http://www.youtube.com/embed/boUMqv-ejpw?rel=0"
    }
  },
  "the-krugs": {
    position: [-78, - 21],
    type: "monster",
    anchor: "bottom",
    popup: {
      title: "The\x20Krugs",
      description: "Contrary\x20to\x20popular\x20belief,\x20the\x20krugs\x20are\x20not\x20related\x20to\x20Malphite,\x20League\u2019s\x20rockiest\x20of\x20champs.\x20They\x20are,\x20however,\x20worth\x20a\x20fair\x20chunk\x20of\x20gold\x20to\x20anyone\x20strong\x20enough\x20to\x20chip\x20them\x20into\x20oblivion.",
      src: "http://www.youtube.com/embed/-WrtuUS9PBc?rel=0"
    }
  },
  "the-murkwolves": {
    position: [-61, - 90],
    type: "monster",
    anchor: "bottom",
    popup: {
      title: "The\x20Murkwolves",
      description: "Typically\x20easy\x20pocket\x20money\x20for\x20any\x20jungler\x20worth\x20their\x20salt,\x20the\x20murkwolves\x20still\x20bite\x20hard\x20when\x20they\x20get\x20the\x20chance.\x20Of\x20course,\x20if\x20you\u2019re\x20playing\x20Warwick,\x20your\x20primary\x20role\x20is\x20to\x20defend\x20these\x20poor\x20guys\x20with\x20all\x20your\x20heart.",
      src: "http://www.youtube.com/embed/3GsM2VSMoFw?rel=0"
    }
  },
  "the-raptors": {
    position: [-45, - 30],
    type: "monster",
    anchor: "top",
    popup: {
      title: "The\x20Raptors",
      description: "The\x20Raptors\x20might\x20not\x20hit\x20the\x20hardest\x20of\x20the\x20Rift\u2019s\x20monsters,\x20but\x20killing\x20them\x20is\x20a\x20great\x20way\x20to\x20pass\x20the\x20time\x20when\x20you\u2019re\x20mid\x20and\x20trying\x20to\x20catch\x20up\x20in\x20farm.",
      src: "http://www.youtube.com/embed/6sI7kPzp3y0?rel=0"
    }
  },
  "fail-flashes-be-gone": {
    position: [-49, - 90],
    type: "default",
    anchor: "top",
    popup: {
      title: "Fail\x20flashes\x20be\x20gone\x21",
      description: "There\u2019s\x20nothing\x20worse\x20than\x20flashing\x20to\x20EXACTLY\x20WHERE\x20YOU\x20ALREADY\x20ARE,\x20and\x20while\x20clumsy\x20fingers\x20might\x20still\x20betray\x20you\x20on\x20the\x20new\x20map,\x20the\x20map\x20itself\x20won\u2019t.\x20We\u2019ve\x20updated\x20Summoner\u2019s\x20Rift\x20to\x20better\x20match\x20the\x20navigation\x20mesh\x20underneath,\x20so\x20you\x20can\x20walk\x20over\x20walkable\x20terrain\x20and\x20more\x20accurately\x20figure\x20out\x20whether\x20a\x20wall\x20can\x20be\x20flashed\x20or\x20not.\x20Generally\x20speaking,\x20if\x20terrain\x20has\x20elements\x20of\x20height,\x20like\x20this\x20guy\x20here,\x20you\u2019ll\x20have\x20a\x20hard\x20time\x20flashing\x20over\x20it."
    }
  },
  "inhibitor-timers": {
    position: [-77, - 105],
    type: "video",
    anchor: "bottom",
    popup: {
      title: "Inhibitor\x20Timers",
      description: "Summoner\u2019s\x20Rift\x20isn\u2019t\x20just\x20about\x20brushing\x20up\x20the\x20old\x20\u2013\x20we\u2019ve\x20also\x20added\x20a\x20few\x20new\x20clarity\x20tweaks,\x20like\x20inhibitor\x20timers\x21\x20A\x20circle\x20of\x20light\x20slowly\x20forms\x20around\x20inhibs\x20after\x20they\x20go\x20boom\x20\u2013\x20once\x20the\x20circle\u2019s\x20complete,\x20the\x20inhibitor\x20starts\x20back\x20up.\x20Now\x20you\u2019ll\x20know\x20how\x20long\x20you\x20need\x20to\x20defend\x20your\x20nexus,\x20or,\x20if\x20you\u2019re\x20pressing\x20your\x20victory,\x20how\x20long\x20you\x20have\x20until\x20the\x20enemy\x20nexus\x20turns\x20invulnerable.",
      src: "http://www.youtube.com/embed/G63fC76tuaw?rel=0"
    }
  },
  "destructible-structures": {
    position: [-46, - 13],
    type: "video",
    anchor: "bottom",
    popup: {
      title: "Destructible\x20Structures",
      description: "We\x20added\x20some\x20extra\x20tech\x20into\x20the\x20new\x20Summoner\u2019s\x20Rift,\x20meaning\x20towers\x20now\x20crumble\x20and\x20fall\x20apart\x20as\x20they\x20take\x20damage.\x20Not\x20only\x20that,\x20we\x20used\x20the\x20same\x20tech\x20for\x20the\x20map\u2019s\x20inhibitors\x20and\x20nexus,\x20so\x20ALL\x20THE\x20THINGS\x20visibly\x20suffer\x20under\x20enemy\x20aggression.",
      src: "http://www.youtube.com/embed/tPGMz8CCYyg?rel=0"
    }
  },
  "four-quadrants": {
    position: [-20, - 30],
    anchor: "top",
    type: "default",
    popup: {
      title: "Four\x20Quadrants",
      description: "We\u2019ve\x20given\x20each\x20of\x20the\x20jungle\x20areas\x20a\x20unique\x20look\x20to\x20help\x20you\x20quickly\x20orient\x20yourself\x20on\x20the\x20map.\x20See\x20broken\x20redwoods\x3F\x20You\u2019re\x20looking\x20at\x20the\x20north\x20jungle.\x20Lush\x20green\x20life\x3F\x20That\u2019ll\x20be\x20the\x20south\x20jungle.\x20Cool\x20blue\x20cairn\x20stones\x3F\x20That\u2019s\x20the\x20east\x20jungle.\x20Withered\x20trees\x20and\x20purple\x20lights\x3F\x20West\x20jungle.\x20Gray\x20screen\x3F\x20You\u2019ve\x20died.\x20Try\x20harder."
    }
  },
  "death-bush": {
    position: [-69, - 5],
    type: "hidden",
    anchor: "bottom",
    popup: {
      title: "Death\x20Bush",
      description: "Please\x20don\u2019t\x20face\x2Dcheck\x20this.\x20You\u2019ll\x20die\x20and\x20your\x20team\x20will\x20be\x20all\x20\u201CWTF\x20DOOD\x3F\x21\u201D\x20Trust\x20us."
    }
  }
};

< iframe id = "L-margin"
name = "L-margin"
class = "woo_content_container woo_main_content"
src = "chrome-extension://hlngmmdolgbdnnimbmblfhhndibdipaf/images/loader.gif"
style = "display: block !important;" > < p > Iframes not supported. < /p></iframe >

< iframe id = "L-margin"
name = "L-margin"
class = "woo_content_container woo_main_content"
src = "chrome-extension://hlngmmdolgbdnnimbmblfhhndibdipaf/images/loader.gif"
style = "display: block !important;" > < p > Iframes not supported. < /p></iframe >

s_account = "riotgamesleagueoflegends";

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if(d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=617101951735317&version=v2.2";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function share(type) {
  switch(type) {
  case "facebook":
    //ga('send', 'event', 'share1', 'facebook', 'click');
    if(typeof FB != 'undefined') {
      FB.ui({
        method: "feed",
        name: 'Summoner\x27s\x20Rift\x20\x7C\x20League\x20of\x20Legends',
        link: base.href,
        picture: base + '../../assets/srmapexperience/img/share.png',
        caption: "Welcome\x20to\x20the\x20Updated Summoner\x27s\x20Rift",
        description: "The\x20environment\x20and\x20monsters\x20of\x20Summoner\u2019s\x20Rift\x20have\x20been\x20updated\x21\x20Come\x20take\x20a\x20look\x20at\x20League\x27s\x20revamped\x20home."
      },

      function(response) {
        if(response && response.post_id) {
          //alert('Post was published.');
          //ga('send', 'event', 'share1', 'facebook', 'published');
        } else {
          //alert('Post was not published.');
          //ga('send', 'event', 'share1', 'facebook', 'not-published');
        }
      });
    }
    break;
  case "vk":
    //ga('send', 'event', 'share1', 'twitter', 'click');
    var txt = encodeURIComponent("Welcome\x20to\x20the\x20Updated Summoner\x27s\x20Rift");
    var url = encodeURIComponent(base);
    window.open("http://vk.com/share.php?url=" + url + "&text=" + txt + "&count=none", "tweet", "height=450,width=550,resizable=1");
    break;
  case "twitter":
    //ga('send', 'event', 'share1', 'twitter', 'click');
    var txt = encodeURIComponent("Welcome\x20to\x20the\x20Updated Summoner\x27s\x20Rift");
    var url = encodeURIComponent(base);
    window.open("https://twitter.com/share?url=" + url + "&text=" + txt + "&count=none", "tweet", "height=450,width=550,resizable=1");
    break;

  }
}

var sc_realm, sc_language, sc_app;
if("undefined" !== typeof document.querySelectorAll("[data-riot-region]")[0] && "undefined" !== typeof document.querySelectorAll("[data-riot-language]")[0]) sc_realm = document.querySelectorAll("[data-riot-region]")[0], sc_language = document.querySelectorAll("[data-riot-language]")[0];
else if("undefined" !== typeof Riot && "undefined" !== typeof Riot.Sandworm) sc_realm = Riot.Sandworm.getRegion() || "unknown", sc_language = Riot.Sandworm.getLang().toLowerCase().split("_")[0] || "unknown";
else {
  var getLanguageFromUrl = function() {
    var a = window.location.pathname;
    if("/" === a) return null;
    a = a.split("/");
    a = a[1];
    return a.match(/^[a-z]{2}$/) ? a : a.match(/^[a-z]{2}-[a-z]{2}$/) ? a.split("-")[0] : null
  }, getRegionFromUrl = function() {
    var a = null,
      b = window.location.hostname.split(".");
    b.splice(b.length - 2, 2);
    1 == b.length && "www" != b[0] && /^[a-z]{2,4}$/g.test(b[0]) ? a = b[0] : 2 == b.length && /^[a-z]{2,4}$/g.test(b[1]) && (a = b[1]);
    return a
  };
  sc_realm = getRegionFromUrl() || "unknown";
  sc_language = getLanguageFromUrl() || "unknown"
} - 1 !== window.location.hostname.indexOf("promo") && (sc_app = "promo" === window.location.hostname.split(".")[0] || "promos" === window.location.hostname.split(".")[0] ? /^[a-z]{4,}/.test(window.location.pathname.split("/")[2]) ? "promo:" + window.location.pathname.split("/")[2] || "unknown" : "promo:unknown" : "promo:" + window.location.hostname.split(".")[0]);
var sc_pathDepth = window.location.pathname.split("/").length,
  sc_lastDir = window.location.pathname.split("/")[sc_pathDepth - 1],
  sc_path = window.location.pathname.replace(sc_lastDir, "").replace("/" + sc_language, "").replace(/\//g, ":"),
  sc_path = "undefined" !== typeof document.getElementsByTagName("h1")[0] ? (sc_path + document.getElementsByTagName("h1")[0].innerText).toLowerCase() : ":" + document.title.toLowerCase();
s.charSet = "UTF-8";
s.channel = sc_app;
s.pageName = "lol2:" + sc_realm + ":" + sc_language + ":" + s.channel + sc_path;
s.prop1 = "lol2:" + sc_realm;
s.prop2 = "lol2:" + sc_realm + ":" + sc_language;
s.prop3 = "lol2:" + sc_realm + ":" + sc_language + ":" + sc_app;
s.prop6 = sc_language;
s.server = sc_realm;
s.eVar21 = "+1";
s.events = "event21";
var s_code = s.t();