/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.jqxWidget("jqxColorPicker","",{}),a.extend(a.jqx._jqxColorPicker.prototype,{defineInstance:function(){var b={disabled:!1,height:null,width:null,color:new a.jqx.color({hex:"ff0000"}),redString:"R:",greenString:"G:",blueString:"B:",showTransparent:!1,colorMode:"saturation",_delayLoading:!1,events:["colorchange"]};return a.extend(!0,this,b),b},_createFromInput:function(b){var c=this;if("input"==c.element.nodeName.toLowerCase()){c.field=c.element,c.field.className&&(c._className=c.field.className);var d={title:c.field.title};if(c.field.getAttribute("value")){var e=c.field.getAttribute("value");c.color=new a.jqx.color({hex:e})}c.field.id.length?d.id=c.field.id.replace(/[^\w]/g,"_")+"_"+b:d.id=a.jqx.utilities.createId()+"_"+b;var f=a("<div></div>",d);f[0].style.cssText=c.field.style.cssText,c.width||(c.width=a(c.field).width()),c.height||(c.height=a(c.field).outerHeight()),a(c.field).hide().after(f);var g=c.host.data();if(c.host=f,c.host.data(g),c.element=f[0],c.element.id=c.field.id,c.field.id=d.id,c._className&&(c.host.addClass(c._className),a(c.field).removeClass(c._className)),c.field.tabIndex){var h=c.field.tabIndex;c.field.tabIndex=-1,c.element.tabIndex=h}}},createInstance:function(b){this._createFromInput("jqxColorPicker"),this.render();var c=this;a.jqx.utilities.resize(this.host,function(){c._setSize(),c.refresh()},!1,!this._delayLoading)},render:function(){this.element.innerHTML="";this._isTouchDevice=a.jqx.mobile.isTouchDevice(),"string"==typeof this.color&&(this.color=new a.jqx.color({hex:this.color})),this._setSize(),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-reset")),this.host.addClass(this.toThemeProperty("jqx-color-picker")),this.container=a("<div style='width: 100%; height: 100%; position: relative;'></div>"),this.container.appendTo(this.host),this.colorMap=a("<div style='left: 0; top: 0; position: absolute;'></div>"),this.colorMap.appendTo(this.container),this.colorBar=a("<div style='left: 0; top: 0; position: absolute;'></div>"),this.colorBar.appendTo(this.container),this.colorPanel=a("<div style='left: 0; top: 0; position: absolute;'></div>"),this.colorPanel.appendTo(this.container),this.hexPanel=a("<div style='float: left;'></div>"),this.hexPanel.appendTo(this.colorPanel),this.hexPanel.append('<span style="text-align: left;" >#</span>'),this.hex=a("<input maxlength='6' style='height: 18px;'/>"),this.hex.addClass(this.toThemeProperty("jqx-input")),this.hex.addClass(this.toThemeProperty("jqx-widget-content")),this.hex.appendTo(this.hexPanel),this.colorPanel.append('<div style="font-size: 1px; clear: both;"></div>'),this.rgb=a("<div style='margin-top: 2px;'></div>"),this.rgb.appendTo(this.colorPanel),this.red=a("<input style='width: 25px; height: 18px;' maxlength='3'/>"),this.red.addClass(this.toThemeProperty("jqx-input")),this.red.addClass(this.toThemeProperty("jqx-widget-content")),this.rgb.append('<span style="text-align: left;">'+this.redString+"</span>"),this.red.appendTo(this.rgb),this.green=a("<input style='margin-right: 2px; height: 18px; width: 25px;' maxlength='3'/>"),this.green.addClass(this.toThemeProperty("jqx-input")),this.green.addClass(this.toThemeProperty("jqx-widget-content")),this.rgb.append('<span style="text-align: left;">'+this.greenString+"</span>"),this.green.appendTo(this.rgb),this.colorPanel.addClass(this.toThemeProperty("jqx-color-picker-map-overlay")),this._mapImageOverlayURL=this._getImageUrl(this.colorPanel),this.colorPanel.removeClass(this.toThemeProperty("jqx-color-picker-map-overlay")),this.blue=a("<input style='height: 18px; width: 25px;' maxlength='3'/>"),this.blue.addClass(this.toThemeProperty("jqx-input")),this.blue.addClass(this.toThemeProperty("jqx-widget-content")),this.rgb.append('<span style="text-align: left;">'+this.blueString+"</span>"),this.blue.appendTo(this.rgb),this.preview=a("<div style='background: red; position: absolute;'></div>"),this.preview.addClass(this.toThemeProperty("jqx-widget-content")),this.preview.appendTo(this.colorPanel),this.colorBarPointer=a("<div style='top: 0; left: 0; position: absolute; width: 100%;'></div>"),this.colorBarPointer.addClass(this.toThemeProperty("jqx-color-picker-bar-pointer")),this.colorMapPointer=a("<div style='top: 0; left: 0; position: absolute; width: 100%;'></div>"),this.colorMapPointer.addClass(this.toThemeProperty("jqx-color-picker-pointer")),this.transparent=a("<div style='text-align: center; clear: both;'><a style='text-align: center;' href='#'>transparent</a></div>"),this.disabled&&(this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled")),this.element.disabled=!0),this._addHandlers()},val:function(a){return 0==arguments.length?"#"+this.color.hex:(this.setColor(a),this.color.hex)},_setPositionFromValue:function(){var a=this,b=a.color.h,c=100-a.color.v,d=a.colorMap.height(),e=a.colorMap.width(),f=b*e/360,g=c*d/100;if("saturation"==this.colorMode){var h=100-a.color.s;h=h*d/100,a._saturation=100-a.color.s,a.colorMapPointer.css("margin-left",f-8),a.colorMapPointer.css("margin-top",g-8),a.colorBarPointer.css("margin-top",h-8),a.colorMapImageOverlay.css("opacity",(100-a.color.s)/100)}else{var b=a.color.s,f=b*e/100,g=c*d/100,h=360-a.color.h;h=h*d/360,a._hue=a.color.h,a.colorMapPointer.css("margin-left",f-8),a.colorMapPointer.css("margin-top",g-8),a.colorBarPointer.css("margin-top",h-8)}},updateRGB:function(){var a=this;a.color.setRgb(a.red.val(),a.green.val(),a.blue.val()),a._updateUI(),a._raiseEvent("0",{color:a.color}),a.color.transparent=!1},_setPosition:function(b,c,d){var e=parseInt(b.pageX),f=parseInt(c.offset().left),g=parseInt(b.pageY),h=parseInt(c.offset().top);if(this._isTouchDevice){var i=a.jqx.position(b);e=i.left,g=i.top}d[0].className.indexOf("jqx-color-picker-bar")==-1&&d.css("margin-left",e-8-f),g>=h&&g<=h+c.height()&&d.css("margin-top",g-8-h)},_handleKeyInput:function(a,b,c){if(!a.disabled){if(!a._validateKey(b))return b;c.val(a._setValueInRange(c.val(),0,255)),this.updateRGB(),this._setPositionFromValue()}},_addHandlers:function(){var b=this;this.addHandler(this.colorMapPointer,"dragStart",function(a){return a.preventDefault(),!1}),this.addHandler(this.colorBarPointer,"dragStart",function(a){return a.preventDefault(),!1}),this.addHandler(this.transparent,"click",function(a){b._raiseEvent("0",{color:"transparent"}),a.preventDefault(),b.color.transparent=!0}),this.addHandler(this.host,"selectionstart",function(a){return a.preventDefault(),!1}),this.addHandler(this.blue,"keyup blur",function(a){b._handleKeyInput(b,a,b.blue)}),this.addHandler(this.green,"keyup blur",function(a){b._handleKeyInput(b,a,b.green)}),this.addHandler(this.red,"keyup blur",function(a){b._handleKeyInput(b,a,b.red)}),this.addHandler(this.hex,"keyup blur",function(a){if(!b.disabled)return b._validateKey(a)?void(6==b.hex.val().toString().length&&(b.hex.val(b.color.validateHex(b.hex.val())),b.color.setHex(b.hex.val()),b._updateUI(),b._setPositionFromValue(),b._raiseEvent("0",{color:b.color}))):a}),this.addHandler(this.colorMap,"dragstart",function(a){return a.preventDefault(),!1});var c=function(a){if(b._setPosition(a,b.colorMap,b.colorMapPointer),"saturation"==b.colorMode){var c=b._valuesFromMouse(a,b.colorMap,360,100);c.x>360&&(c.x=360),b.color.setHsv(c.x,null!=b._saturation?100-b._saturation:100,100-c.y)}else{var c=b._valuesFromMouse(a,b.colorMap,100,100);c.x>100&&(c.x=100),b.color.setHsv(null!=b._hue?b._hue:360,c.x,100-c.y)}b._updateUI(),b._raiseEvent("0",{color:b.color}),b.color.transparent=!1},d="mousedown.picker"+this.element.id;this._isTouchDevice&&(d=a.jqx.mobile.getTouchEventName("touchstart")+".picker"+this.element.id),this.addHandler(this.colorMap,d,function(a){b.disabled||(b.beginDrag=!0,c(a))});var e="mousemove.picker"+this.element.id;this._isTouchDevice&&(e=a.jqx.mobile.getTouchEventName("touchmove")+".picker"+this.element.id),this.addHandler(a(document),e,function(a){b.disabled||1==b.beginDrag&&(c(a),b._isTouchDevice&&a.preventDefault())}),this._isTouchDevice||this.addHandler(this.colorBar,"dragstart",function(a){return a.preventDefault(),!1});var f=function(a){if(b._setPosition(a,b.colorBar,b.colorBarPointer),"saturation"==b.colorMode){var c=b._valuesFromMouse(a,b.colorBar,100,100);b.color.s=c.y,b._saturation=c.y,b.colorMapImageOverlay.css("opacity",b.color.s/100),b.color.setHsv(b.color.h,100-b.color.s,b.color.v)}else{var c=b._valuesFromMouse(a,b.colorBar,100,360);b.color.h=360-c.y,b._hue=b.color.h,b.color.setHsv(b.color.h,b.color.s,b.color.v)}b._updateUI(),b._raiseEvent("0",{color:b.color}),b.color.transparent=!1},g="mousemove.colorBar"+this.element.id,h="mousedown.colorBar"+this.element.id,i="mouseup.colorBar"+this.element.id;this._isTouchDevice&&(g=a.jqx.mobile.getTouchEventName("touchmove")+".colorBar"+this.element.id,h=a.jqx.mobile.getTouchEventName("touchstart")+".colorBar"+this.element.id,i=a.jqx.mobile.getTouchEventName("touchend")+".colorBar"+this.element.id),this.addHandler(this.colorBar,h,function(a){b.disabled||(b.beginDragBar=!0,f(a))}),this.addHandler(a(document),g,function(a){b.disabled||1==b.beginDragBar&&(f(a),b._isTouchDevice&&a.preventDefault())}),this.addHandler(a(document),i,function(a){b.disabled||(b.beginDrag=!1,b.beginDragBar=!1)})},_removeHandlers:function(){this.removeHandler(this.transparent,"click"),this.removeHandler(this.host,"selectionstart"),this.removeHandler(this.blue,"keyup blur"),this.removeHandler(this.green,"keyup blur"),this.removeHandler(this.red,"keyup blur"),this.removeHandler(this.hex,"keyup blur"),this.removeHandler(this.colorMap,"dragstart"),this.removeHandler(this.colorBar,"dragstart"),this.removeHandler(this.colorMapPointer,"dragStart"),this.removeHandler(this.colorBarPointer,"dragStart");var b=this.element.id,c="mousemove.colorBar"+b,d="mousedown.colorBar"+b,e="mouseup.colorBar"+b,f="mousedown.picker"+b,g="mousemove.picker"+b;this._isTouchDevice&&(c=a.jqx.mobile.getTouchEventName("touchmove")+".colorBar"+b,d=a.jqx.mobile.getTouchEventName("touchstart")+".colorBar"+b,e=a.jqx.mobile.getTouchEventName("touchend")+".colorBar"+b,f=a.jqx.mobile.getTouchEventName("touchstart")+".picker"+b,g=a.jqx.mobile.getTouchEventName("touchmove")+".picker"+b),this.removeHandler(this.colorMap,f),this.removeHandler(this.colorMap,g),this.removeHandler(this.colorBar,d),this.removeHandler(this.colorBar,c),this.removeHandler(a(document),g),this.removeHandler(a(document),c),this.removeHandler(a(document),e)},_raiseEvent:function(b,c){void 0==c&&(c={owner:null});var d=this.events[b],e=c?c:{};e.owner=this;var f=new a.Event(d);f.owner=this,f.args=e;var g=this.host.trigger(f);return g},setColor:function(b){b&&("transparent"==b?(this.color.transparent=!0,this.color.hex="000",this.color.r=0,this.color.g=0,this.color.b=0):b.r?this.color=new a.jqx.color({rgb:b}):"#"==b.substring(0,1)?this.color=new a.jqx.color({hex:b.substring(1)}):this.color=new a.jqx.color({hex:b}),this._updateUI(),this._setPositionFromValue(),this._raiseEvent("0",{color:this.color}))},getColor:function(){return this.color},resize:function(a,b){this.width=a,this.height=b,this._setSize(),this.refresh()},propertyChangedHandler:function(a,b,c,d){void 0!=a.isInitialized&&0!=a.isInitialized&&("colorMode"==b&&a.refresh(),"color"==b&&(a._updateUI(),a._setPositionFromValue(),a._raiseEvent("0",{color:d})),"width"!=b&&"height"!=b||(a._setSize(),a.refresh()),"showTransparent"==b&&a.refresh(),"disabled"==b&&(this.element.disabled=d,d?a.host.addClass(a.toThemeProperty("jqx-fill-state-disabled")):a.host.removeClass(a.toThemeProperty("jqx-fill-state-disabled"))))},_valuesFromMouse:function(b,c,d,e){var f=0,g=0,h=c.offset(),i=c.height(),j=c.width(),k=b.pageX,l=b.pageY;if(this._isTouchDevice){var m=a.jqx.position(b);k=m.left,l=m.top}f=k<h.left?0:k>h.left+j?j:k-h.left+1,g=l<h.top?0:l>h.top+i?i:l-h.top+1;var n=parseInt(f/j*d),o=parseInt(g/i*e);return{x:n,y:o}},_validateKey:function(a){return 9!=a.keyCode&&16!=a.keyCode&&38!=a.keyCode&&29!=a.keyCode&&40!=a.keyCode&&17!=a.keyCode&&37!=a.keyCode&&(!a.ctrlKey||a.keyCode!="c".charCodeAt()&&a.keyCode!="v".charCodeAt())&&(!a.ctrlKey||a.keyCode!="C".charCodeAt()&&a.keyCode!="V".charCodeAt())&&(!a.ctrlKey&&!a.shiftKey)},_setValueInRange:function(a,b,c){return""==a||isNaN(a)?b:(a=parseInt(a),a>c?c:a<b?b:a)},destroy:function(){a.jqx.utilities.resize(this.host,null,!0),this.host.removeClass(),this._removeHandlers(),this.host.remove()},setPointerStyle:function(a){this.colorMapPointer.removeClass(),"transparent"!=a&&""!=a.hex||this.colorMapPointer.addClass(this.toThemeProperty("jqx-color-picker-pointer"));var b=105,c=.299*a.r+.587*a.g+.114*a.b,d=255-c<b?"Black":"White";"Black"==d?this.colorMapPointer.addClass(this.toThemeProperty("jqx-color-picker-pointer")):this.colorMapPointer.addClass(this.toThemeProperty("jqx-color-picker-pointer-alt"))},_updateUI:function(){var b=this;b.red.val(b.color.r),b.green.val(b.color.g),b.blue.val(b.color.b),b.hex.val(b.color.hex);var c=new a.jqx.color({hex:"fff"});"saturation"==this.colorMode?(c.setHsv(this.color.h,100,this.color.v),b.colorBar.css("background","#"+c.hex)):(c.setHsv(this.color.h,100,100),b.colorMap.css("background-color","#"+c.hex)),b.preview.css("background","#"+this.color.hex),b.setPointerStyle(this.color)},_setSize:function(){null!=this.width&&this.width.toString().indexOf("px")!=-1?this.host.width(this.width):void 0==this.width||isNaN(this.width)||this.host.width(this.width),null!=this.height&&this.height.toString().indexOf("px")!=-1?this.host.height(this.height):void 0==this.height||isNaN(this.height)||this.host.height(this.height),this.host.width()<130&&this.host.width(150),this.host.height()<70&&this.host.height(70),null!=this.width&&this.width.toString().indexOf("%")!=-1&&this.host.width(this.width),null!=this.height&&this.height.toString().indexOf("%")!=-1&&this.host.height(this.height)},_arrange:function(){var a=this.host.height(),b=this.host.width(),c=a-44;if(this.showTransparent&&(c=a-64),!(c<=0)){this.colorMap.width(85*b/100),this.colorMap.height(c),this.colorBar.height(c),this.colorBar.css("left",this.colorMap.width()+4),this.colorBar.width(8*b/100),this.colorBarPointer.width(this.colorBar.width()),this.colorPanel.width(b),this.colorPanel.height(40),this.showTransparent&&this.colorPanel.height(60),this.colorPanel.css("top",c+4),this.colorPanel.css("text-align","left"),this.hex.width(this.colorMap.width()-this.colorBar.width()-4);var d=this.red.prev().outerWidth()-this.hex.prev().outerWidth();d<4&&(d=4),this.hex.css("margin-left",d+"px"),this.preview.width(this.colorBar.width()+7),this.preview.height(25),this.preview.addClass(this.toThemeProperty("jqx-rc-all")),this.preview.addClass(this.toThemeProperty("jqx-color-picker-preview")),this.preview.css("left",this.colorMap.width()-2),this.preview.css("top","5px");var e=this.hex.width(),f=e-this.blue.prev().outerWidth()-this.green.prev().outerWidth()-6;return f>0?(this.blue.width(f/3),this.green.width(f/3),void this.red.width(f/3)):void 0}},_getColorPointer:function(){var b=a("<div></div>");return b.addClass(this.toThemeProperty("jqx-color-picker-pointer")),b},_getImageUrl:function(a){var b=a.css("backgroundImage");return b=b.replace('url("',""),b=b.replace('")',""),b=b.replace("url(",""),b=b.replace(")","")},refresh:function(){this._delayLoading||(this._saturation=null,this._hue=null,this.colorMap.removeClass(),this.colorBar.removeClass(),this.colorMap.addClass(this.toThemeProperty("jqx-disableselect")),this.colorBar.addClass(this.toThemeProperty("jqx-disableselect")),this.colorPanel.addClass(this.toThemeProperty("jqx-color-picker-panel")),this.colorBar.css("background-image",""),this.colorMap.css("background-image",""),"saturation"==this.colorMode?(this.colorMap.addClass(this.toThemeProperty("jqx-color-picker-map")),this.colorBar.addClass(this.toThemeProperty("jqx-color-picker-bar"))):(this.colorMap.addClass(this.toThemeProperty("jqx-color-picker-map-hue")),this.colorBar.addClass(this.toThemeProperty("jqx-color-picker-bar-hue"))),this._barImageURL=this._getImageUrl(this.colorBar),this._mapImageURL=this._getImageUrl(this.colorMap),this._arrange(),this.colorBar.children().remove(),this.colorBarImageContainer=a("<div style='overflow: hidden;'></div>"),this.colorBarImageContainer.width(this.colorBar.width()),this.colorBarImageContainer.height(this.colorBar.height()),this.colorBarImageContainer.appendTo(this.colorBar),this.colorBarImage=a("<img/>"),this.colorBarImage.appendTo(this.colorBarImageContainer),this.colorBarImage.attr("src",this._barImageURL),this.colorBar.css("background-image","none"),this.colorBarImage.attr("width",this.colorBar.width()),this.colorBarImage.attr("height",this.colorBar.height()),this.colorBarPointer.appendTo(this.colorBar),this.colorMap.children().remove(),this.colorMapImage=a("<img/>"),this.colorMapImage.appendTo(this.colorMap),this.colorMapImage.attr("src",this._mapImageURL),this.colorMap.css("background-image","none"),this.colorMapImage.attr("width",this.colorMap.width()),this.colorMapImage.attr("height",this.colorMap.height()),this.colorMapImageOverlay=a("<img style='position: absolute; left: 0; top: 0;'/>"),this.colorMapImageOverlay.prependTo(this.colorMap),this.colorMapImageOverlay.attr("src",this._mapImageOverlayURL),this.colorMapImageOverlay.attr("width",this.colorMap.width()),this.colorMapImageOverlay.attr("height",this.colorMap.height()),this.colorMapImageOverlay.css("opacity",0),this.colorMapPointer.appendTo(this.colorMap),this.showTransparent&&this.transparent.appendTo(this.colorPanel),this._updateUI(),this._setPositionFromValue())}}),a.jqx.color=function(a){var b={r:0,g:0,b:0,h:0,s:0,v:0,hex:"",hexToRgb:function(a){a=this.validateHex(a);var b="00",c="00",d="00";return 6==a.length?(b=a.substring(0,2),c=a.substring(2,4),d=a.substring(4,6)):(a.length>4&&(b=a.substring(4,a.length),a=a.substring(0,4)),a.length>2&&(c=a.substring(2,a.length),a=a.substring(0,2)),a.length>0&&(d=a.substring(0,a.length))),{r:this.hexToInt(b),g:this.hexToInt(c),b:this.hexToInt(d)}},validateHex:function(a){return a=new String(a).toUpperCase(),a=a.replace(/[^A-F0-9]/g,"0"),a.length>6&&(a=a.substring(0,6)),a},webSafeDec:function(a){return a=Math.round(a/51),a*=51},hexToWebSafe:function(a){var b,c,d;return 3==a.length?(b=a.substring(0,1),c=a.substring(1,1),d=a.substring(2,1)):(b=a.substring(0,2),c=a.substring(2,4),d=a.substring(4,6)),intToHex(this.webSafeDec(this.hexToInt(b)))+this.intToHex(this.webSafeDec(this.hexToInt(c)))+this.intToHex(this.webSafeDec(this.hexToInt(d)))},rgbToWebSafe:function(a){return{r:this.webSafeDec(a.r),g:this.webSafeDec(a.g),b:this.webSafeDec(a.b)}},rgbToHex:function(a){return this.intToHex(a.r)+this.intToHex(a.g)+this.intToHex(a.b)},intToHex:function(a){var b=parseInt(a).toString(16);return 1==b.length&&(b="0"+b),b.toUpperCase()},hexToInt:function(a){return parseInt(a,16)},hslToRgb:function(a){var b=parseInt(a.h)/360,c=parseInt(a.s)/100,d=parseInt(a.l)/100;if(d<=.5)var e=d*(1+c);else var e=d+c-d*c;var f=2*d-e,g=b+1/3,h=b,i=b-1/3,j=Math.round(255*this.hueToRgb(f,e,g)),k=Math.round(255*this.hueToRgb(f,e,h)),l=Math.round(255*this.hueToRgb(f,e,i));return{r:j,g:k,b:l}},hueToRgb:function(a,b,c){return c<0?c+=1:c>1&&(c-=1),6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a},rgbToHsv:function(a){var b=a.r/255,c=a.g/255,d=a.b/255;hsv={h:0,s:0,v:0};var e=0,f=0;return b>=c&&b>=d?(f=b,e=c>d?d:c):c>=d&&c>=b?(f=c,e=b>d?d:b):(f=d,e=c>b?b:c),hsv.v=f,hsv.s=f?(f-e)/f:0,hsv.s?(delta=f-e,b==f?hsv.h=(c-d)/delta:c==f?hsv.h=2+(d-b)/delta:hsv.h=4+(b-c)/delta,hsv.h=parseInt(60*hsv.h),hsv.h<0&&(hsv.h+=360)):hsv.h=0,hsv.s=parseInt(100*hsv.s),hsv.v=parseInt(100*hsv.v),hsv},hsvToRgb:function(a){rgb={r:0,g:0,b:0};var b=a.h,c=a.s,d=a.v;if(0==c)0==d?rgb.r=rgb.g=rgb.b=0:rgb.r=rgb.g=rgb.b=parseInt(255*d/100);else{360==b&&(b=0),b/=60,c/=100,d/=100;var e=parseInt(b),f=b-e,g=d*(1-c),h=d*(1-c*f),i=d*(1-c*(1-f));switch(e){case 0:rgb.r=d,rgb.g=i,rgb.b=g;break;case 1:rgb.r=h,rgb.g=d,rgb.b=g;break;case 2:rgb.r=g,rgb.g=d,rgb.b=i;break;case 3:rgb.r=g,rgb.g=h,rgb.b=d;break;case 4:rgb.r=i,rgb.g=g,rgb.b=d;break;case 5:rgb.r=d,rgb.g=g,rgb.b=h}rgb.r=parseInt(255*rgb.r),rgb.g=parseInt(255*rgb.g),rgb.b=parseInt(255*rgb.b)}return rgb},setRgb:function(a,b,c){var d=function(a){return a<0||a>255?0:isNaN(parseInt(a))?0:a};this.r=d(a),this.g=d(b),this.b=d(c);var e=this.rgbToHsv(this);this.h=e.h,this.s=e.s,this.v=e.v,this.hex=this.rgbToHex(this)},setHsl:function(a,b,c){this.h=a,this.s=b,this.l=c;var d=this.hslToRgb(this);this.r=d.r,this.g=d.g,this.b=d.b,this.hex=this.rgbToHex(d)},setHsv:function(a,b,c){this.h=a,this.s=b,this.v=c;var d=this.hsvToRgb(this);this.r=d.r,this.g=d.g,this.b=d.b,this.hex=this.rgbToHex(d)},setHex:function(a){this.hex=a;var b=this.hexToRgb(this.hex);this.r=b.r,this.g=b.g,this.b=b.b;var c=this.rgbToHsv(b);this.h=c.h,this.s=c.s,this.v=c.v}};if(a)if(a.hex){var c=b.validateHex(a.hex);b.setHex(c)}else a.r?b.setRgb(a.r,a.g,a.b):a.h?b.setHsv(a.h,a.s,a.v):a.rgb&&b.setRgb(a.rgb.r,a.rgb.g,a.rgb.b);return b}}(jqxBaseFramework);

