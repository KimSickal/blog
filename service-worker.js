"use strict";var precacheConfig=[["/blog/index.html","2424179d8bd2fa1dc4be687f6ca2ec7b"],["/blog/static/css/main.c7d9990f.css","982176b0b350961c06b537995c4d950c"],["/blog/static/js/main.b8317aa1.js","3db8b4025831b891dc87024c45c4e772"],["/blog/static/media/2018s_starflower_1.8120c839.png","8120c8392e58070bc53b89776e06d0ae"],["/blog/static/media/2018s_starflower_2.74d785a5.png","74d785a50d855099f1a22f4175d36942"],["/blog/static/media/2018s_starflower_3_e.d21daa22.png","d21daa224ee91326d804477a6aa155ab"],["/blog/static/media/2018s_starflower_3_k.223fdfeb.png","223fdfeb292861e7cce3c861cffbd504"],["/blog/static/media/Condensed3.60a150a0.png","60a150a0572f33bb216228f38cbec6af"],["/blog/static/media/Defalut.c6e333cb.png","c6e333cbe84eee2287887eeb547a4483"],["/blog/static/media/SF_poster_1.60876325.md","60876325dcd5bd85cb3706f15c551fbe"],["/blog/static/media/SF_poster_2.7699ccc0.md","7699ccc081f8b2c67a6cf7d7d8e0b17e"],["/blog/static/media/SF_poster_3.3294ebd0.md","3294ebd08af03a85942a54782becf783"],["/blog/static/media/banner_image_revolve.06ec1e31.jpg","06ec1e3133223d1a97573dddc332f7cf"],["/blog/static/media/뒤4번로고_곤색.86a5d08a.png","86a5d08a21699c26327b71e400c11e13"],["/blog/static/media/별바_로고.77876354.png","778763546f449780ab782a19bc0dba38"],["/blog/static/media/별바_로고_2.8dff681b.png","8dff681be3ef87e172069c0f50305a85"],["/blog/static/media/별바_로고_5_1.6da77130.png","6da771302e7ea647d6a8d145ffd1cc40"],["/blog/static/media/연애혁명2안.e4719efb.png","e4719efb1b431fe65682ff12ee8819a2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/blog/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});