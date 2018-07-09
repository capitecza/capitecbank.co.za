window.Modernizr=(function(A,c,g){var I="2.6.2",w={},y=true,L=c.documentElement,a="modernizr",H=c.createElement(a),E=H.style,K=c.createElement("input"),C=":)",b={}.toString,j=" -webkit- -moz- -o- -ms- ".split(" "),h="Webkit Moz O ms",F=h.split(" "),J=h.toLowerCase().split(" "),l={},p={},f={},e=[],k=e.slice,s,n=function(U,W,O,V){var N,T,Q,R,M=c.createElement("div"),S=c.body,P=S||c.createElement("body");if(parseInt(O,10)){while(O--){Q=c.createElement("div");Q.id=V?V[O]:a+(O+1);M.appendChild(Q)}}N=["&#173;",'<style id="s',a,'">',U,"</style>"].join("");M.id=a;(S?M:P).innerHTML+=N;P.appendChild(M);if(!S){P.style.background="";P.style.overflow="hidden";R=L.style.overflow;L.style.overflow="hidden";L.appendChild(P)}T=W(M,U);if(!S){P.parentNode.removeChild(P);L.style.overflow=R}else{M.parentNode.removeChild(M)}return!!T},G=function(O){var N=A.matchMedia||A.msMatchMedia;if(N){return N(O).matches}var M;n("@media "+O+" { #"+a+" { position: absolute; } }",function(P){M=(A.getComputedStyle?getComputedStyle(P,null):P.currentStyle)["position"]=="absolute"});return M},o=(function(){var N={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};function M(O,Q){Q=Q||c.createElement(N[O]||"div");O="on"+O;var P=O in Q;if(!P){if(!Q.setAttribute){Q=c.createElement("div")}if(Q.setAttribute&&Q.removeAttribute){Q.setAttribute(O,"");P=r(Q[O],"function");if(!r(Q[O],"undefined")){Q[O]=g}Q.removeAttribute(O)}}Q=null;return P}return M})(),i=({}).hasOwnProperty,x;if(!r(i,"undefined")&&!r(i.call,"undefined")){x=function(M,N){return i.call(M,N)}}else{x=function(M,N){return((N in M)&&r(M.constructor.prototype[N],"undefined"))}}if(!Function.prototype.bind){Function.prototype.bind=function d(O){var P=this;if(typeof P!="function"){throw new TypeError()}var M=k.call(arguments,1),N=function(){if(this instanceof N){var S=function(){};S.prototype=P.prototype;var R=new S();var Q=P.apply(R,M.concat(k.call(arguments)));if(Object(Q)===Q){return Q}return R}else{return P.apply(O,M.concat(k.call(arguments)))}};return N}}function D(M){E.cssText=M}function u(N,M){return D(j.join(N+";")+(M||""))}function r(N,M){return typeof N===M}function t(N,M){return!!~(""+N).indexOf(M)}function z(O,M){for(var N in O){var P=O[N];if(!t(P,"-")&&E[P]!==g){return M=="pfx"?P:true}}return false}function q(N,Q,P){for(var M in N){var O=Q[N[M]];if(O!==g){if(P===false){return N[M]}if(r(O,"function")){return O.bind(P||Q)}return O}}return false}function m(Q,M,P){var N=Q.charAt(0).toUpperCase()+Q.slice(1),O=(Q+" "+F.join(N+" ")+N).split(" ");if(r(M,"string")||r(M,"undefined")){return z(O,M)}else{O=(Q+" "+(J).join(N+" ")+N).split(" ");return q(O,M,P)}}l.touch=function(){var M;if(("ontouchstart"in A)||A.DocumentTouch&&c instanceof DocumentTouch){M=true}else{n(["@media (",j.join("touch-enabled),("),a,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(N){M=N.offsetTop===9})}return M};l.history=function(){return!!(A.history&&history.pushState)};l.draganddrop=function(){var M=c.createElement("div");return("draggable"in M)||("ondragstart"in M&&"ondrop"in M)};l.borderradius=function(){return m("borderRadius")};l.boxshadow=function(){return m("boxShadow")};l.opacity=function(){u("opacity:.55");return(/^0.55$/).test(E.opacity)};l.cssanimations=function(){return m("animationName")};l.csstransforms=function(){return!!m("transform")};l.csstransforms3d=function(){var M=!!m("perspective");if(M&&"webkitPerspective"in L.style){n("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(N,O){M=N.offsetLeft===9&&N.offsetHeight===3})}return M};l.csstransitions=function(){return m("transition")};l.fontface=function(){var M;n('@font-face {font-family:"font";src:url("https://")}',function(Q,R){var P=c.getElementById("smodernizr"),N=P.sheet||P.styleSheet,O=N?(N.cssRules&&N.cssRules[0]?N.cssRules[0].cssText:N.cssText||""):"";M=/src/i.test(O)&&O.indexOf(R.split(" ")[0])===0});return M};l.video=function(){var N=c.createElement("video"),M=false;try{if(M=!!N.canPlayType){M=new Boolean(M);M.ogg=N.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");M.h264=N.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");M.webm=N.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(O){}return M};l.audio=function(){var N=c.createElement("audio"),M=false;try{if(M=!!N.canPlayType){M=new Boolean(M);M.ogg=N.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");M.mp3=N.canPlayType("audio/mpeg;").replace(/^no$/,"");M.wav=N.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");M.m4a=(N.canPlayType("audio/x-m4a;")||N.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(O){}return M};l.localstorage=function(){try{localStorage.setItem(a,a);localStorage.removeItem(a);return true}catch(M){return false}};l.sessionstorage=function(){try{sessionStorage.setItem(a,a);sessionStorage.removeItem(a);return true}catch(M){return false}};l.applicationcache=function(){return!!A.applicationCache};function B(){w.input=(function(O){for(var N=0,M=O.length;N<M;N++){f[O[N]]=!!(O[N]in K)}if(f.list){f.list=!!(c.createElement("datalist")&&A.HTMLDataListElement)}return f})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));w.inputtypes=(function(P){for(var O=0,N,R,Q,M=P.length;O<M;O++){K.setAttribute("type",R=P[O]);N=K.type!=="text";if(N){K.value=C;K.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(R)&&K.style.WebkitAppearance!==g){L.appendChild(K);Q=c.defaultView;N=Q.getComputedStyle&&Q.getComputedStyle(K,null).WebkitAppearance!=="textfield"&&(K.offsetHeight!==0);L.removeChild(K)}else{if(/^(search|tel)$/.test(R)){}else{if(/^(url|email)$/.test(R)){N=K.checkValidity&&K.checkValidity()===false}else{N=K.value!=C}}}}p[P[O]]=!!N}return p})("search tel url email datetime date month week time datetime-local number range color".split(" "))}for(var v in l){if(x(l,v)){s=v.toLowerCase();w[s]=l[v]();e.push((w[s]?"":"no-")+s)}}w.input||B();w.addTest=function(N,O){if(typeof N=="object"){for(var M in N){if(x(N,M)){w.addTest(M,N[M])}}}else{N=N.toLowerCase();if(w[N]!==g){return w}O=typeof O=="function"?O():O;if(typeof y!=="undefined"&&y){L.className+=" "+(O?"":"no-")+N}w[N]=O}return w};D("");H=K=null;(function(V,X){var P=V.html5||{};var S=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var N=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var ab;var T="_html5shiv";var M=0;var Z={};var Q;(function(){try{var ae=X.createElement("a");ae.innerHTML="<xyz></xyz>";ab=("hidden"in ae);Q=ae.childNodes.length==1||(function(){(X.createElement)("a");var ag=X.createDocumentFragment();return(typeof ag.cloneNode=="undefined"||typeof ag.createDocumentFragment=="undefined"||typeof ag.createElement=="undefined")}())}catch(af){ab=true;Q=true}}());function R(ae,ag){var ah=ae.createElement("p"),af=ae.getElementsByTagName("head")[0]||ae.documentElement;ah.innerHTML="x<style>"+ag+"</style>";return af.insertBefore(ah.lastChild,af.firstChild)}function W(){var ae=U.elements;return typeof ae=="string"?ae.split(" "):ae}function aa(ae){var af=Z[ae[T]];if(!af){af={};M++;ae[T]=M;Z[M]=af}return af}function Y(ah,ae,ag){if(!ae){ae=X}if(Q){return ae.createElement(ah)}if(!ag){ag=aa(ae)}var af;if(ag.cache[ah]){af=ag.cache[ah].cloneNode()}else{if(N.test(ah)){af=(ag.cache[ah]=ag.createElem(ah)).cloneNode()}else{af=ag.createElem(ah)}}return af.canHaveChildren&&!S.test(ah)?ag.frag.appendChild(af):af}function ac(ag,ai){if(!ag){ag=X}if(Q){return ag.createDocumentFragment()}ai=ai||aa(ag);var aj=ai.frag.cloneNode(),ah=0,af=W(),ae=af.length;for(;ah<ae;ah++){aj.createElement(af[ah])}return aj}function ad(ae,af){if(!af.cache){af.cache={};af.createElem=ae.createElement;af.createFrag=ae.createDocumentFragment;af.frag=af.createFrag()}ae.createElement=function(ag){if(!U.shivMethods){return af.createElem(ag)}return Y(ag,ae,af)};ae.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+W().join().replace(/\w+/g,function(ag){af.createElem(ag);af.frag.createElement(ag);return'c("'+ag+'")'})+");return n}")(U,af.frag)}function O(ae){if(!ae){ae=X}var af=aa(ae);if(U.shivCSS&&!ab&&!af.hasCSS){af.hasCSS=!!R(ae,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")}if(!Q){ad(ae,af)}return ae}var U={elements:P.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:(P.shivCSS!==false),supportsUnknownElements:Q,shivMethods:(P.shivMethods!==false),type:"default",shivDocument:O,createElement:Y,createDocumentFragment:ac};V.html5=U;O(X)}(this,c));w._version=I;w._prefixes=j;w._domPrefixes=J;w._cssomPrefixes=F;w.mq=G;w.hasEvent=o;w.testProp=function(M){return z([M])};w.testAllProps=m;w.testStyles=n;L.className=L.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(y?" js "+e.join(" "):"");return w})(this,this.document);(function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)}function Z(b){return"string"==typeof b}function Y(){}function X(b){return!b||"loaded"==b||"complete"==b||"uninitialized"==b}function W(){var b=O.shift();M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),W()):M=0}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)},50);for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this}function T(){var b=L;return b.loader={load:U,i:0},b}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance"in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d}},N,L;L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;for(l=0;l<p;l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))}for(l=0;l<h;l++){q=E[l](q)}return q}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2})))}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}),n(b,r,v,0,t)}else{if(Object(b)===b){for(g in o=function(){var a=0,i;for(i in b){b.hasOwnProperty(i)&&a++}return a}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}:r[g]=function(i){return function(){var a=[].slice.call(arguments);i&&i.apply(this,a),p()}}(q[g])),n(b[g],r,v,g,t))}}}}else{!h&&p()}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;u(t?w.yep:w.nope,!!s),s&&u(s)}var k,f,d=this.yepnope.loader;if(Z(e)){n(e,0,d,0)}else{if(F(e)){for(k=0;k<e.length;k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)}}else{Object(e)===e&&m(e,d)}}},L.addPrefix=function(d,c){C[d]=c},L.addFilter=function(b){E.push(b)},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;g.src=r;for(b in p){g.setAttribute(b,p[b])}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)},R(function(){f||(f=1,q(1))},n),m?g.onload():Q.parentNode.insertBefore(g,Q)},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;l.href=b,l.rel="stylesheet",l.type="text/css";for(f in m){l.setAttribute(f,m[f])}k||(Q.parentNode.insertBefore(l,Q),R(n,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};$(document).ready(function(){$('.ie8 .mobileFooterLinks .searchOverlay').hide();$(".mBlocksEntry h3").each(function(index){var checkmBlocksLength=$(this).text().length;if(checkmBlocksLength>30){$(".mBlocksWrapper").addClass("mBlocksWrapperFullWidth");console.log(checkmBlocksLength)}});try{$('input[name="term"]').autocomplete({source:searchAutoCompleteTerms,select:function(event,ui){$('input[name="term"]').val(ui.item.label);$('form[name="searchForm"]').submit();}});}
catch(e){}
$('.mainSearch a, #footerSection5Heading').click(function(){$('.siteWrapper .siteHeader').toggleClass('siteActiveSearch');$('.siteWrapper .siteContent').toggleClass('siteActiveSearch');$('.mobileFooterLinks .searchOverlay').hide();$('.mobileFooterLinks').toggle();$('.siteFooter').toggleClass('siteFooterActiveSearch');$('.bodyBackgroundDefault').toggleClass('activeBackgroundSearch');$('html, body').animate({scrollTop:$('html').offset().top},0);setTimeout(function(){$('.mobileFooterLinks .searchOverlay').fadeIn();$('input[name="term"]').focus();},200);return false;});if(navigator.userAgent.match(/iPad/i)){$('.isotopeContainer .quadrupleColumn.global-one .globalOneCircularContent .globalOneCircularContentItem').click(function(){console.log('no click')
return false;});$('.isotopeContainer .quadrupleColumn.global-one .globalOneCircularContent .globalOneCircularContentItem span').click(function(){var globalLink=$(this).parent().attr('href')
console.log(globalLink)
window.location.href=globalLink;});}
if($.browser.mozilla){$("body").addClass("browserFF");}
if(!$('.isotopeContainer').length){$('.sliderList').fadeIn();$('.rangeSlider').fadeIn();}
$('.searchCloseWindow').click(function(){$('.siteWrapper .siteHeader').removeClass('siteActiveSearch');$('.siteWrapper .siteContent').removeClass('siteActiveSearch');$('.mobileFooterLinks').fadeOut();$('.mobileFooterLinks .searchOverlay').fadeOut();$('.bodyBackgroundDefault').removeClass('activeBackgroundSearch');setTimeout(function(){$('.siteFooter').removeClass('siteFooterActiveSearch');},500);return false;});$('body').addClass('js-enabled');if(Modernizr.touch){$('body').addClass('touch');}else{$('body').addClass('noTouch');}
$('.noTouch .navMore').hover(function(){$('.secondaryNav').fadeOut('fast');$('.siteHeader > ul').fadeOut('fast');$('.primaryNav').fadeOut('fast');},function(){$('.secondaryNav').fadeIn('fast');$('.siteHeader > ul').fadeIn('fast');$('.primaryNav').fadeIn('fast');});$(".globalOneLandingPage .collectionSlider ul li").click(function(){window.location.href=$(this).find('a').attr('href');console.log("test")});$(".globalOneLandingPage .collectionSlider ul li").click(function(){if($(".dynamicGlobalOneItem a").text()==="Ways to Transact"&&$(".dynamicGlobalOneItem a").parent().prev().find('a').text()==="Ways to Transact"){$(".dynamicGlobalOneItem a").parent().prev().find('a').parent().parent().hide();}});$(".globalonecircularcontenWebsitetDesktop").click(function(){$(".mainSearch a").trigger('click');return false;})
$('.galleryInfoOverlay').click(function(){var clickedElement=this;var url='/gallery/overlay?uri='+encodeURIComponent($(this).attr('data-galleryuri'));$('#galleryOverlay').load(url,function(){var imagePosition=parseInt($(clickedElement).attr('data-imageposition'));$('#galleryOverlay div ul').css('left',-imagePosition*gallerywidth);loadImageFromDataCache('galleryImage_'+imagePosition);setTimeout(function(){loadImageFromDataCache('galleryImage_'+(imagePosition-1));loadImageFromDataCache('galleryImage_'+(imagePosition+1));},1500);if(!imagePosition)$('#galleryOverlay .prev').hide();if(-imagePosition*gallerywidth>(gallerycontainer-gallerywidth))$("#galleryOverlay .next").hide();$('#galleryOverlay').fadeIn();});$('.siteContent').css('z-index','10000001');return false;});$('#myInfoSubTextRemove').on('click',function(){$(this).hide();$('#myInfoSubTextDone').show();$(".myInfo ul li").addClass("sideInfoEdit");$(".additionalInfoRemove").show();});$('#myInfoSubTextDone').on('click',function(){$(this).hide();$('#myInfoSubTextRemove').show();$(".myInfo ul li").removeClass("sideInfoEdit");$(".additionalInfoRemove").hide();});$('.myInfo > a').click(function(){$(".myInfo").css('left','-220px');$(".myInfo > h2").removeAttr('style');$(".myInfo > span").removeAttr('style');$(".myInfo > ul").removeAttr('style');});$('.footerTab').show().addClass("activeFooterTab");$('input[type="checkbox"]').each(function(){var $this=$(this);$this.wrap('<div class="checkBoxContainer" />');$this.on('click',function(){if($this.is(':checked')){$this.parent().addClass("checkActive");}else{$this.parent().removeClass("checkActive");}});if($this.is(':checked'))$this.parent().addClass("checkActive");});var $select=$('select');$select.on('change',function(){$(this).next('span').text($(this).val()?$(this).find('option:selected').text():$(this).find('option:first').text());});$select.on('keypress',function(){$(this).next('span').text($(this).val()?$(this).find('option:selected').text():$(this).find('option:first').text());});$('.customSelectContainer').each(function(){var $wrap=$(this);var spantext=$wrap.find('select').find(':selected').text();$wrap.find('span').text(spantext);});var myFavourites=localStorage.myFavourites?JSON.parse(localStorage.myFavourites):[];for(var i=0;i<=Math.min(myFavourites.length,8);i++){if(myFavourites[i]){$('.myInfo ul').append('<li><a href="'+myFavourites[i].uri+'">'+myFavourites[i].title.truncate(24)+'</a><p class="additionalInfoRemove" onclick="toggleMyFavourite(\''+myFavourites[i].uri+'\')">X</p></li>');}}
addActiveClassesOnFavouritesPanels(myFavourites);if(!myFavourites.length){showMyFavouritesEmptyNotification();$('.sideInfoActionBar').hide();}
$('.editableRichText').each(function(){$(this).find('a').each(function(){if($(this).attr('href')!==undefined){var file=$(this).attr('href').split('/').reverse()[0],ext=file.split('.').reverse()[0];if(ext=='pdf'){$(this).attr({"data-event-category":'download',"data-event-action":'click',"data-gtm":file});}}});});});function toggleMyFavourite(uri,thisTitle){uri=uri||window.location.pathname;var title=thisTitle.title||document.title.split('|')[0];var myFavourites=localStorage.myFavourites?JSON.parse(localStorage.myFavourites):[];var storedFavourite=findOne(myFavourites,'uri',uri);if(storedFavourite){var index=myFavourites.indexOf(storedFavourite);myFavourites.splice(index,1);localStorage.myFavourites=JSON.stringify(myFavourites);$($('.myInfo ul li')[index]).remove();if(myFavourites[0]){showMyFavouritesNotification('bookmarkRemovedNotification');}
else{showMyFavouritesEmptyNotification();$(".myInfo ul li").removeClass("sideInfoEdit");$(".additionalInfoRemove").hide();$('.sideInfoActionBar').hide();}}
else{myFavourites.unshift({uri:uri,title:title});localStorage.myFavourites=JSON.stringify(myFavourites);$('.myInfo ul').prepend('<li><a href="'+uri+'">'+title.truncate(24)+'</a><p class="additionalInfoRemove" onclick="toggleMyFavourite(\''+uri+'\')">X</p></li>');showMyFavouritesNotification('bookmarkSavedNotification');$('#myInfoSubTextRemove').show();}
addActiveClassesOnFavouritesPanels(myFavourites);slideOutMyFavouritesPanel();return false;}
function addActiveClassesOnFavouritesPanels(myFavourites){$('.additionalInfo').each(function(){var active=false;for(var i=0;i<myFavourites.length;i++){var uri=myFavourites[i].uri;var uriToCheck=$(this).find('a').attr('data-uritosave')||window.location.pathname;if(uri==uriToCheck){$(this).addClass('activeFind');$(this).find('a').addClass('activeAdd');active=true;}}
if(!active){$(this).removeClass('activeFind');$(this).find('a').removeClass('activeAdd');}});}
function showMyFavouritesEmptyNotification(){showMyFavouritesNotification('noBookmarksStoredNotification',true);}
function showMyFavouritesNotification(notification,leaveVisible){$('.sideInfoAlert').hide();$('.emptyBookmarks').hide();$('#'+notification).show();if(!leaveVisible){setTimeout(function(){$('#'+notification).hide();$(".myInfo").css('left','-220px');},6000);}}
function slideOutMyFavouritesPanel(){$(".myInfo").css('left','0px');$(".myInfo > h2").css('margin-left','0px');$(".myInfo > span").css('margin-left','0px');$(".myInfo > ul").css('margin-left','0px');}
function slideInMyFavouritesPanel(){$(".myInfo").css('left','-220px');$(".myInfo > h2").css('margin-left','0px');$(".myInfo > span").css('margin-left','0px');$(".myInfo > ul").css('margin-left','0px');}
function bindAccordion($wrapper){$wrapper.find('.accordionContent').hide();if(!$wrapper.find('.accordionWrapper').hasClass('loadAllClosed')){$wrapper.find('.accordionContent:first').show().parent().addClass('activeAccordion');}
$wrapper.find('.accordionHeading').on('click',function(){if($(this).parent().hasClass("activeAccordion")){$(this).parent().removeClass("activeAccordion");}else if($wrapper.find('.accordionWrapper').hasClass('allowAnyExpanded')){$(this).parent().addClass("activeAccordion");}else if(!$wrapper.find('.accordionWrapper').hasClass('allowAnyExpanded')){$wrapper.find(".activeAccordion").removeClass("activeAccordion");$(this).parent().toggleClass("activeAccordion");}
if(!$wrapper.find('.accordionWrapper').hasClass('allowAnyExpanded')){$wrapper.find('.accordionContent').slideUp('fast');}else if(!$(this).parent().hasClass("activeAccordion")){$(this).parent().find('.accordionContent').slideUp('fast');}
var $content=$(this).parent().find('.accordionContent');if(!$content.is(':visible')){$content.slideDown('fast',function(){$('html, body').animate({scrollTop:$(this).offset().top-200},500);})}});}
function bindFilesArchive($wrapper){$wrapper.find('.filesArchiveContent').hide();$wrapper.find('.filesArchiveHeading').on('click',function(){$wrapper.find('.filesArchiveContent').slideToggle('fast');});}