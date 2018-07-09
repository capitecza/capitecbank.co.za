if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement){"use strict";if(this===void 0||this===null){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;if(len===0){return-1;}
var n=0;if(arguments.length>0){n=Number(arguments[1]);if(n!==n){n=0;}else if(n!==0&&n!==Infinity&&n!==-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n));}}
if(n>=len){return-1;}
var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement){return k;}}
return-1;}}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');}}
if(!String.prototype.truncate){String.prototype.truncate=function(length){if(!this)return '';return this.length>(length-3)?(this.substr(0,length-3)+'...'):this;}}
function loadImageFromDataCache(imageId){var $image=$('#'+imageId);$image.attr('src',$image.attr('data-src'));}
function findOne(list,field,value){if(!list||!field||!value)return;for(var i=0;i<list.length;i++){if(list[i][field]==value)return list[i];}}
function getLastTokenOfUrl(uri){uri=uri||window.location.pathname;if(uri.lastIndexOf('/')==uri.length-1)uri=uri.substring(0,uri.length-1);if(uri.indexOf('#')==uri.length-1)uri=uri.substring(0,uri.indexOf('#')-1);return uri.substring(uri.lastIndexOf('/')+1,uri.length);}
function scrollToId(id){$('html,body').animate({scrollTop:$('#'+id).offset().top},'slow');}
function scrollToClass(className){var mapClassLocation=$('.'+className+':first').offset().top;$('html,body').animate({scrollTop:mapClassLocation},'slow');}