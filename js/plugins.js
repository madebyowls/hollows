/*
 * SVGeezy.js 1.0
 *
*/
var svgeezy=function(){return{init:function(a,b){this.avoid=a||!1,this.filetype=b||"png",this.svgSupport=this.supportsSvg(),this.svgSupport||(this.images=document.getElementsByTagName("img"),this.imgL=this.images.length,this.fallbacks())},fallbacks:function(){for(;this.imgL--;)if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var a=this.images[this.imgL].getAttribute("src");if(null===a)continue;if("svg"==this.getFileExt(a)){var b=a.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",b)}}},getFileExt:function(a){var b=a.split(".").pop();return-1!==b.indexOf("?")&&(b=b.split("?")[0]),b},hasClass:function(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();
