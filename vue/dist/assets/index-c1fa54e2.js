import{P as U,cZ as re,a as u,d as F,bg as G,u as W,c as y,c8 as le,_ as ie,Y as A,a1 as E,ag as L,bH as H,bn as k,be as se,h as M,c_ as de,b as ue,a0 as pe,c$ as ve,aC as R,bG as ce}from"./index-8b1603a4.js";var z=function(){return{arrow:{type:[Boolean,Object],default:void 0},trigger:{type:[Array,String]},overlay:U.any,visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},align:{type:Object},getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:{type:Object,default:void 0},forceRender:{type:Boolean,default:void 0},mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:void 0},onVisibleChange:{type:Function},"onUpdate:visible":{type:Function}}},T=re(),ye=function(){return u(u({},z()),{},{type:T.type,size:String,htmlType:T.htmlType,href:String,disabled:{type:Boolean,default:void 0},prefixCls:String,icon:U.any,title:String,loading:T.loading,onClick:{type:Function}})},fe=["type","disabled","loading","htmlType","class","overlay","trigger","align","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:visible"],me=A.Group;const ge=F({compatConfig:{MODE:3},name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:G(ye(),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:["icon","leftButton","rightButton","overlay"],setup:function(n,f){var a=f.slots,B=f.attrs,P=f.emit,g=function(p){P("update:visible",p),P("visibleChange",p)},i=W("dropdown-button",n),D=i.prefixCls,_=i.direction,O=i.getPopupContainer;return function(){var b,p,e=u(u({},n),B),N=e.type,t=N===void 0?"default":N,o=e.disabled,r=e.loading,m=e.htmlType,s=e.class,d=s===void 0?"":s,l=e.overlay,C=l===void 0?(b=a.overlay)===null||b===void 0?void 0:b.call(a):l,w=e.trigger,v=e.align,c=e.visible;e.onVisibleChange;var h=e.placement,x=h===void 0?_.value==="rtl"?"bottomLeft":"bottomRight":h,S=e.href,Z=e.title,V=e.icon,q=V===void 0?((p=a.icon)===null||p===void 0?void 0:p.call(a))||y(le,null,null):V,J=e.mouseEnterDelay,K=e.mouseLeaveDelay,Q=e.overlayClassName,X=e.overlayStyle,ee=e.destroyPopupOnHide,te=e.onClick;e["onUpdate:visible"];var oe=ie(e,fe),ae={align:v,disabled:o,trigger:o?[]:w,placement:x,getPopupContainer:O.value,onVisibleChange:g,mouseEnterDelay:J,mouseLeaveDelay:K,visible:c,overlayClassName:Q,overlayStyle:X,destroyPopupOnHide:ee},j=y(A,{type:t,disabled:o,loading:r,onClick:te,htmlType:m,href:S,title:Z},{default:a.default}),I=y(A,{type:t,icon:q},null);return y(me,u(u({},oe),{},{class:E(D.value,d)}),{default:function(){return[a.leftButton?a.leftButton({button:j}):j,y(be,ae,{default:function(){return[a.rightButton?a.rightButton({button:I}):I]},overlay:function(){return C}})]}})}}});var Y=F({compatConfig:{MODE:3},name:"ADropdown",inheritAttrs:!1,props:G(z(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:["overlay"],setup:function(n,f){var a=f.slots,B=f.attrs,P=f.emit,g=W("dropdown",n),i=g.prefixCls,D=g.rootPrefixCls,_=g.direction,O=g.getPopupContainer,b=L(function(){var t=n.placement,o=t===void 0?"":t,r=n.transitionName;return r!==void 0?r:o.indexOf("top")>=0?"".concat(D.value,"-slide-down"):"".concat(D.value,"-slide-up")}),p=function(){var o,r,m,s=n.overlay||((o=a.overlay)===null||o===void 0?void 0:o.call(a)),d=Array.isArray(s)?s[0]:s;if(!d)return null;var l=d.props||{};H(!l.mode||l.mode==="vertical","Dropdown",'mode="'.concat(l.mode,`" is not supported for Dropdown's Menu.`));var C=l.selectable,w=C===void 0?!1:C,v=l.expandIcon,c=v===void 0?(r=d.children)===null||r===void 0||(m=r.expandIcon)===null||m===void 0?void 0:m.call(r):v,h=typeof c<"u"&&R(c)?c:y("span",{class:"".concat(i.value,"-menu-submenu-arrow")},[y(ce,{class:"".concat(i.value,"-menu-submenu-arrow-icon")},null)]),x=R(d)?k(d,{mode:"vertical",selectable:w,expandIcon:function(){return h}}):d;return x},e=L(function(){var t=n.placement;if(!t)return _.value==="rtl"?"bottomRight":"bottomLeft";if(t.includes("Center")){var o=t.slice(0,t.indexOf("Center"));return H(!t.includes("Center"),"Dropdown","You are using '".concat(t,"' placement in Dropdown, which is deprecated. Try to use '").concat(o,"' instead.")),o}return t}),N=function(o){P("update:visible",o),P("visibleChange",o)};return function(){var t,o,r=n.arrow,m=n.trigger,s=n.disabled,d=n.overlayClassName,l=(t=a.default)===null||t===void 0?void 0:t.call(a)[0],C=k(l,se({class:E(l==null||(o=l.props)===null||o===void 0?void 0:o.class,M({},"".concat(i.value,"-rtl"),_.value==="rtl"),"".concat(i.value,"-trigger"))},s?{disabled:s}:{})),w=E(d,M({},"".concat(i.value,"-rtl"),_.value==="rtl")),v=s?[]:m,c;v&&v.indexOf("contextmenu")!==-1&&(c=!0);var h=de({arrowPointAtCenter:ue(r)==="object"&&r.pointAtCenter,autoAdjustOverflow:!0}),x=pe(u(u(u({},n),B),{},{builtinPlacements:h,overlayClassName:w,arrow:r,alignPoint:c,prefixCls:i.value,getPopupContainer:O.value,transitionName:b.value,trigger:v,onVisibleChange:N,placement:e.value}),["overlay","onUpdate:visible"]);return y(ve,x,{default:function(){return[C]},overlay:p})}}});Y.Button=ge;const be=Y;export{be as D,ge as a};