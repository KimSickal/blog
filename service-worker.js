"use strict";var precacheConfig=[["/blog/index.html","aae4fea57839e16934814a855fd2c1f4"],["/blog/static/css/main.ad95af53.css","7747d490fb04381327d86d33c0f259ef"],["/blog/static/js/main.05c8400d.js","da65fa9a37b5bbd4bf433c6c6df535ef"],["/blog/static/media/1.77876354.png","778763546f449780ab782a19bc0dba38"],["/blog/static/media/1.86a5d08a.png","86a5d08a21699c26327b71e400c11e13"],["/blog/static/media/2.8dff681b.png","8dff681be3ef87e172069c0f50305a85"],["/blog/static/media/2018s_starflower_1.8120c839.png","8120c8392e58070bc53b89776e06d0ae"],["/blog/static/media/2018s_starflower_2.74d785a5.png","74d785a50d855099f1a22f4175d36942"],["/blog/static/media/2018s_starflower_3_e.d21daa22.png","d21daa224ee91326d804477a6aa155ab"],["/blog/static/media/2018s_starflower_3_k.223fdfeb.png","223fdfeb292861e7cce3c861cffbd504"],["/blog/static/media/3.6da77130.png","6da771302e7ea647d6a8d145ffd1cc40"],["/blog/static/media/3.a0e23080.png","a0e23080a2d930ed177af3d0bdbad60f"],["/blog/static/media/4.8ab32618.png","8ab3261804ee87d23541900806647976"],["/blog/static/media/5.7cc0155d.png","7cc0155d2b3a50f130612d4b97969d6b"],["/blog/static/media/Condensed3.60a150a0.png","60a150a0572f33bb216228f38cbec6af"],["/blog/static/media/Defalut.c6e333cb.png","c6e333cbe84eee2287887eeb547a4483"],["/blog/static/media/HMC.ff539b71.md","ff539b71b08c1628239029610e212e01"],["/blog/static/media/SF_logo.c0409ad9.md","c0409ad96447ed6f60fd0505086af227"],["/blog/static/media/SF_poster.4842262e.md","4842262e9653727d278608f859197008"],["/blog/static/media/SF_poster.4ce389f7.md","4ce389f7d485f617822e9e003f3a33cc"],["/blog/static/media/SF_poster_1.24c6857b.md","24c6857b840cbe9218ae07e5b4b831e7"],["/blog/static/media/SF_poster_1.5513ca46.md","5513ca46d835984e0b19625ab351de55"],["/blog/static/media/SF_poster_2.178f321a.md","178f321a82cbc94946adae61cfc07e05"],["/blog/static/media/SF_poster_2.e54feea9.md","e54feea98d1f33a9a32d67713d73bba3"],["/blog/static/media/SF_poster_3.0811b217.md","0811b217d425487bfbfd5b8069643466"],["/blog/static/media/banner_image_revolve.06ec1e31.jpg","06ec1e3133223d1a97573dddc332f7cf"],["/blog/static/media/haje_poster.bed79537.md","bed79537cb93234a428c9dc4b84068a1"],["/blog/static/media/haje_poster.d41d8cd9.md","d41d8cd98f00b204e9800998ecf8427e"],["/blog/static/media/mighty_logo.8f8e793b.md","8f8e793b7c047a3f3a5a60be17f08d89"],["/blog/static/media/연애혁명2안.e4719efb.png","e4719efb1b431fe65682ff12ee8819a2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/blog/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});