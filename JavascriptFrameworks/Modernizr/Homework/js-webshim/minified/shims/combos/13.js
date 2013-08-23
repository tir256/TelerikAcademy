(function(e,t,i){"use strict";var n,a=t.audio&&t.video,r=!1,s=i.bugs,o=function(){i.ready(l,function(){i.mediaelement.createSWF||(i.mediaelement.loadSwf=!0,i.reTest([l],a))})},u=i.cfg.mediaelement,l=u&&"jwplayer"==u.player?"mediaelement-swf":"mediaelement-jaris";if(!u)return i.error("mediaelement wasn't implemented but loaded"),void 0;if(a){var c=document.createElement("video");t.videoBuffered="buffered"in c,r="loop"in c,i.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(a&&!u.preferFlash){var d={1:1,2:1},p=function(t){var a,r=t.target.parentNode;!u.preferFlash&&(e(t.target).is("audio, video")||r&&e("source:last",r)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!d[a.prop("error")]&&e(function(){n&&!u.preferFlash?(o(),i.ready("WINDOWLOAD "+l,function(){setTimeout(function(){u.preferFlash||!i.mediaelement.createSWF||a.is(".nonnative-api-active")||(u.preferFlash=!0,document.removeEventListener("error",p,!0),e("audio, video").each(function(){i.mediaelement.selectSource(this)}),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",p,!0)})};document.addEventListener("error",p,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!d[t]?(p({target:this}),!1):void 0})}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}var n=i.cfg.track,a=function(t){e(t.target).filter("track").each(r)},r=function(){return s.track||!n.override&&3==e.prop(this,"readyState")?(n.override=!0,i.reTest("track"),document.removeEventListener("error",a,!0),this&&e.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support"),!1):void 0},o=function(){document.addEventListener("error",a,!0),s.track?r():e("track").each(r)};n.override||(i.isReady("track")?o():e(o))}(),i.register("mediaelement-core",function(e,i,c,d,p){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var h=i.mediaelement;h.parseRtmp=function(e){var t,n,a,r=e.src.split("://"),s=r[1].split("/");for(e.server=r[0]+"://"+s[0]+"/",e.streamId=[],t=1,n=s.length;n>t;t++)a||-1===s[t].indexOf(":")||(s[t]=s[t].split(":")[1],a=!0),a?e.streamId.push(s[t]):e.server+=s[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var m=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=h.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:h.parseRtmp(a)),a):a},f=!n&&"postMessage"in c&&a,v=function(){v.loaded||(v.loaded=!0,e(function(){i.loader.loadList(["track-ui"])}))},g=function(){var t;return function(){!t&&f&&(t=!0,i.loader.loadScript("https://www.youtube.com/player_api"),e(function(){i.polyfill("mediaelement-yt")}))}}(),y=function(){n?o():g()};i.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},h.mimeTypes.source=e.extend({},h.mimeTypes.audio,h.mimeTypes.video),h.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(h.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):p}),n},h.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=m(t,n);return a.src?i.push(a):e("source",t).each(function(){a=m(this,n),a.src&&i.push(a)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(e){var i=d.createElement("source");"string"==typeof e&&(e={src:e}),i.setAttribute("src",e.src),e.type&&i.setAttribute("type",e.type),e.media&&i.setAttribute("media",e.media),t.append(i)})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==p&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),h.srces(this,t),e(this).mediaLoad()})},h.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube","video/rtmp","audio/rtmp"],h.canThirdPlaySrces=function(t,i){var a="";return(n||f)&&(t=e(t),i=i||h.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=h.swfMimeTypes.indexOf(t.container)||f&&"video/youtube"==t.container)?(a=t,!1):p})),a};var b={};h.canNativePlaySrces=function(t,i){var n="";if(a){t=e(t);var r=(t[0].nodeName||"").toLowerCase(),s=(b[r]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!s)return n;i=i||h.srces(t),e.each(i,function(e,i){return i.type&&s.call(t[0],i.type)?(n=i,!1):p})}return n},h.setError=function(t,n){n||(n="can't play sources"),e(t).pause().data("mediaerror",n),i.warn("mediaelementError: "+n),setTimeout(function(){e(t).data("mediaerror")&&e(t).trigger("mediaerror")},1)};var w=function(){var e;return function(t,a,r){e||v(),i.ready(n?l:"mediaelement-yt",function(){h.createSWF?h.createSWF(t,a,r):e||(e=!0,y(),w(t,a,r))}),e||!f||h.createSWF||g()}}(),T=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=h.canThirdPlaySrces(e,n),r?w(e,r,t):a?h.setError(e,!1):T(e,t,!1,n,!0)):(r=h.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&h.setActive(e,"html5",t):a?(h.setError(e,!1),t&&"third"==t.isActive&&h.setActive(e,"html5",t)):T(e,t,!0,n,!0))},k=/^(?:embed|object|datalist)$/i,x=function(t,n){var a=i.data(t,"mediaelementBase")||i.data(t,"mediaelementBase",{}),r=h.srces(t),s=t.parentNode;clearTimeout(a.loadTimer),e.data(t,"mediaerror",!1),r.length&&s&&1==s.nodeType&&!k.test(s.nodeName||"")&&(n=n||i.data(t,"mediaelement"),T(t,n,u.preferFlash||p,r))};h.selectSource=x,e(d).on("ended",function(t){var n=i.data(t.target,"mediaelement");(!r||n&&"html5"!=n.isActive||e.prop(t.target,"loop"))&&setTimeout(function(){!e.prop(t.target,"paused")&&e.prop(t.target,"loop")&&e(t.target).prop("currentTime",0).play()},1)}),i.ready("dom-support",function(){r||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var r=i.defineNodeNameProperty(t,"load",{prop:{value:function(){var e=i.data(this,"mediaelement");x(this,e),!a||e&&"html5"!=e.isActive||!r.prop._supvalue||r.prop._supvalue.apply(this,arguments)}}});b[t]=i.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(i){var r="";return a&&b[t].prop._supvalue&&(r=b[t].prop._supvalue.call(this,i),"no"==r&&(r="")),!r&&n&&(i=e.trim((i||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(i)&&(r="maybe")),r}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){x(e),e=null},9)}})});var E=function(){var t=function(){if(i.implement(this,"mediaelement")&&(x(this),a)){var t,n,r=this,s=function(){var t=e.prop(r,"buffered");if(t){for(var i="",n=0,a=t.length;a>n;n++)i+=t.end(n);return i}},o=function(){var t=s();t!=n&&(n=t,e(r).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=s()),clearTimeout(t),t=setTimeout(o,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(t)}})}},n=!1;i.ready("dom-support",function(){n=!0,i.addReady(function(i,n){var a=e("video, audio",i).add(n.filter("video, audio")).each(t);!v.loaded&&e("track",a).length&&v(),a=null})}),a&&!n&&i.addReady(function(t,i){n||e("video, audio",t).add(i.filter("video, audio")).each(function(){return!h.canNativePlaySrces(this)||!v.loaded&&e("track",this).length?(y(),n=!0,!1):p})})};t.track&&!s.track&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),a?(i.isReady("mediaelement-core",!0),E(),i.ready("WINDOWLOAD mediaelement",y)):i.ready(l,E),i.ready("WINDOWLOAD mediaelement",v)})})(jQuery,Modernizr,jQuery.webshims),jQuery.webshims.register("track",function(e,t,i,n){"use strict";var a=t.mediaelement;(new Date).getTime();var r=e.fn.addBack?"addBack":"andSelf",s={subtitles:1,captions:1,descriptions:1},o=e("<track />"),u=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var i={};return e.addEventListener=function(e,n){i[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]=n},e.removeEventListener=function(e,n){i[e]&&i[e]!=n&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]&&delete i[e]},e},c={getCueById:function(e){for(var t=null,i=0,n=this.length;n>i;i++)if(this[i].id===e){t=this[i];break}return t}},d={0:"disabled",1:"hidden",2:"showing"},p={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var i=this.cues[this.cues.length-1];i&&i.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=a.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var i=this.cues||[],n=0,a=i.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;a>n;n++)if(i[n]===e){i.splice(n,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},h=["kind","label","srclang"],m={srclang:"language"},f=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(i,n){var a,r,s=[],o=[],u=[];if(i||(i=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),n||(i.blockTrackListUpdate=!0,n=e.prop(this,"textTracks"),i.blockTrackListUpdate=!1),clearTimeout(i.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");u.push(t),-1==n.indexOf(t)&&o.push(t)}),i.scriptedTextTracks)for(a=0,r=i.scriptedTextTracks.length;r>a;a++)u.push(i.scriptedTextTracks[a]),-1==n.indexOf(i.scriptedTextTracks[a])&&o.push(i.scriptedTextTracks[a]);for(a=0,r=n.length;r>a;a++)-1==u.indexOf(n[a])&&s.push(n[a]);if(s.length||o.length){for(n.splice(0),a=0,r=u.length;r>a;a++)n.push(u[a]);for(a=0,r=s.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"removetrack",track:s[a]}));for(a=0,r=o.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"addtrack",track:o[a]}));(i.scriptedTextTracks||s.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(i,n){n||(n=t.data(i,"trackData")),n&&!n.isTriggering&&(n.isTriggering=!0,setTimeout(function(){(n.track||{}).readyState?e(i).closest("audio, video").triggerHandler("updatetrackdisplay"):e(i).triggerHandler("checktrackmode"),n.isTriggering=!1},1))},y=e("<div />")[0];i.TextTrackCue=function(e,i,n){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=i,this.text=n,this.id="",this.pauseOnExit=!1,l(this)},i.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",i="",r=n.createDocumentFragment();return f(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,n;if(t!=this.text)for(t=this.text,i=a.parseCueTextToHTML(t),y.innerHTML=i,e=0,n=y.childNodes.length;n>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},a.createCueList=function(){return e.extend([],c)},a.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,i=/\<\s*\//,n=function(e,t,n,a){var r;return i.test(a)?r="</"+e+">":(n.splice(0,1),r="<"+e+" "+t+'="'+n.join(" ").replace(/\"/g,"&#34;")+'">'),r},a=function(e){var i=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return i[0]&&(i[0]=i[0].toLowerCase(),t.test(i[0])?"c"==i[0]?e=n("span","class",i,e):"v"==i[0]&&(e=n("q","title",i,e)):e=""),e};return function(t){return t.replace(e,a)}}(),a.loadTextTrack=function(i,n,r,o){var u="play playing timeupdate updatetrackdisplay",l=r.track,c=function(){var r,s,o=e.prop(n,"src");if("disabled"!=l.mode&&o&&e.attr(n,"src")&&(e(i).unbind(u,c),e(n).unbind("checktrackmode",c),!l.readyState)){r=function(){l.readyState=3,l.cues=null,l.activeCues=l.shimActiveCues=l._shimActiveCues=null,e(n).triggerHandler("error")},l.readyState=1;try{l.cues=a.createCueList(),l.activeCues=l.shimActiveCues=l._shimActiveCues=a.createCueList(),s=e.ajax({dataType:"text",url:o,success:function(o){"text/vtt"!=s.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),a.parseCaptions(o,l,function(t){t&&"length"in t?(l.readyState=2,e(n).triggerHandler("load"),e(i).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(d){r(),t.warn(d)}}};l.readyState=0,l.shimActiveCues=null,l._shimActiveCues=null,l.activeCues=null,l.cues=null,e(i).unbind(u,c),e(n).unbind("checktrackmode",c),e(i).on(u,c),e(n).on("checktrackmode",c),o&&(l.mode=s[l.kind]?"showing":"hidden",c())},a.createTextTrack=function(i,n){var s,o;return n.nodeName&&(o=t.data(n,"trackData"),o&&(g(n,o),s=o.track)),s||(s=l(t.objectCreate(p)),u||h.forEach(function(t){var i=e.prop(n,t);i&&(s[m[t]||t]=i)}),n.nodeName?(u&&h.forEach(function(i){t.defineProperty(s,m[i]||i,{get:function(){return e.prop(n,i)}})}),o=t.data(n,"trackData",{track:s}),a.loadTextTrack(i,n,o,e.prop(n,"default")&&e(n).siblings("track[default]")[r]()[0]==n)):(u&&h.forEach(function(e){t.defineProperty(s,m[e]||e,{value:n[e],writeable:!1})}),s.cues=a.createCueList(),s.activeCues=s._shimActiveCues=s.shimActiveCues=a.createCueList(),s.mode="hidden",s.readyState=2)),s},a.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,i=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,n=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,a=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var s,o,u,l,c,d,p,h,m,f;if(h=i.exec(r))return null;if(h=n.exec(r))return null;if(h=a.exec(r))return null;for(s=r.split(/\n/g);!s[0].replace(/\s+/gi,"").length&&s.length>0;)s.shift();for(s[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(p=s.shift().replace(/\s*/gi,"")+""),d=0;s.length>d;d++){var v=s[d];(m=e.exec(v))&&(c=m.slice(1),o=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),u=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),s=s.slice(0,d).concat(s.slice(d+1));break}return o||u?(l=s.join("\n"),f=new TextTrackCue(o,u,l),p&&(f.id=p),f):(t.warn("couldn't extract time information: "+[o,u,s.join("\n"),p].join(" ; ")),null)}}(),a.parseCaptions=function(e,i,n){a.createCueList();var r,s,o,u,l;e?(o=/^WEBVTT(\s*FILE)?/gi,s=function(c,d){for(;d>c;c++){if(r=e[c],o.test(r))l=!0;else if(r.replace(/\s*/gi,"").length){if(!l){t.error("please use WebVTT format. This is the standard"),n(null);break}r=a.parseCaptionChunk(r,c),r&&i.addCue(r)}if((new Date).getTime()-30>u){c++,setTimeout(function(){u=(new Date).getTime(),s(c,d)},90);break}}c>=d&&(l||t.error("please use WebVTT format. This is the standard"),n(i.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){u=(new Date).getTime(),e=e.split(/\n\n+/g),s(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},a.createTrackList=function(e,i){return i=i||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),i.textTracks||(i.textTracks=[],t.defineProperties(i.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),l(i.textTracks)),i.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var i=t.data(this,"trackData");this.setAttribute("data-kind",e),i&&(i.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(i,n){var a=m[n]||n;t.onNodeNamesPropertyModify("track",n,function(){var i=t.data(this,"trackData"),r=this;i&&("kind"==n&&g(this,i),u||(i.track[a]=e.prop(this,n)),clearTimeout(i.changedTrackPropTimer),i.changedTrackPropTimer=setTimeout(function(){e(r).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(i){if(i){var n,r=t.data(this,"trackData");r&&(n=e(this).closest("video, audio"),n[0]&&a.loadTextTrack(n,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return a.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n=a.createTrackList(e,i);return i.blockTrackListUpdate||v.call(e,i,n),n},writeable:!1},addTextTrack:{value:function(e,i,n){var r=a.createTextTrack(this,{kind:o.prop("kind",e||"").prop("kind"),label:i||"",srclang:n||""}),s=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return s.scriptedTextTracks||(s.scriptedTextTracks=[]),s.scriptedTextTracks.push(r),v.call(this),r}}},"prop"),e(n).on("emptied ended updatetracklist",function(i){if(e(i.target).is("audio, video")){var n=t.data(i.target,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(i.target,n)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var i,n,a=e.prop(this,"track"),r=this.track;r&&(i=e.prop(this,"kind"),n=b(this,r),(r.mode||n)&&(a.mode=d[r.mode]||r.mode),"descriptions"!=i&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:i}))),e(this).on("load error",w)}};t.addReady(function(i,n){var a=n.filter("video, audio, track").closest("audio, video");e("video, audio",i).add(a).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var i=e.prop(this,"textTracks"),n=this.textTracks;i.length!=n.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),a.each(function(){var e=this,i=t.data(e,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){v.call(e,i)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")});