import{d as X,l as j,ax as H,o as r,y as p,c as n,n as a,r as e,s as T,p as c,t as J,v as m,x as V,m as $,L as K,C as f,N as D,Q as Y,R as Z,V as ee,X as te}from"./index-4399f518.js";import{L as se,R as ie,f as le,S as ne}from"./fullScreenContextMenu-795d4b7d.js";import{g as ae,F as oe}from"./FileItem-f4ef090a.js";import{g as re}from"./db-ccfd5d0c.js";import{c as de,u as ce}from"./hook-77feb202.js";import{o as me}from"./functionalCallableComp-03af9871.js";const ue={class:"hint"},ge={key:1},pe={class:"no-res-hint"},fe={class:"hint"},ve={key:2,class:"preview-switch"},Ie=X({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(F){const v=F,u=de(s=>re(v.selectedTagIds,s)),{queue:z,images:l,onContextMenuClickU:I,stackViewEl:B,previewIdx:o,previewing:k,onPreviewVisibleChange:R,previewImgMove:w,canPreview:C,itemSize:x,gridItems:N,showGenInfo:d,imageGenInfo:_,q:G,multiSelectedIdxs:h,onFileItemClick:A,scroller:b,showMenuIdx:g,onFileDragStart:E,onFileDragEnd:P,cellWidth:U,onScroll:y}=ce(u);return j(()=>v.selectedTagIds,async()=>{var s;await u.reset(),await H(),(s=b.value)==null||s.scrollToItem(0),y()},{immediate:!0}),(s,t)=>{const L=Y,O=Z,q=ee,Q=ne;return r(),p("div",{class:"container",ref_key:"stackViewEl",ref:B},[n(Q,{size:"large",spinning:!e(z).isIdle},{default:a(()=>{var M;return[n(O,{visible:e(d),"onUpdate:visible":t[1]||(t[1]=i=>T(d)?d.value=i:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=i=>d.value=!1)},{cancelText:a(()=>[]),default:a(()=>[n(L,{active:"",loading:!e(G).isIdle},{default:a(()=>[c("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[0]||(t[0]=i=>e(J)(e(_)))},[c("div",ue,m(s.$t("doubleClickToCopy")),1),V(" "+m(e(_)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),(M=e(l))!=null&&M.length?(r(),$(e(ae),{key:0,ref_key:"scroller",ref:b,class:"file-list",items:e(l),"item-size":e(x).first,"key-field":"fullpath","item-secondary-size":e(x).second,gridItems:e(N),onScroll:e(y)},{default:a(({item:i,index:S})=>[n(oe,{idx:S,file:i,"cell-width":e(U),"show-menu-idx":e(g),"onUpdate:showMenuIdx":t[3]||(t[3]=W=>T(g)?g.value=W:null),onDragstart:e(E),onDragend:e(P),onFileItemClick:e(A),"full-screen-preview-image-url":e(l)[e(o)]?e(K)(e(l)[e(o)]):"",selected:e(h).includes(S),onContextMenuClick:e(I),onPreviewVisibleChange:e(R),"is-selected-mutil-files":e(h).length>1},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange","is-selected-mutil-files"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):e(u).load&&s.selectedTagIds.and_tags.length===1?(r(),p("div",ge,[c("div",pe,[c("p",fe,m(s.$t("tagSearchNoResultsMessage")),1),n(q,{onClick:t[4]||(t[4]=i=>e(me)()),type:"primary"},{default:a(()=>[V(m(s.$t("rebuildImageIndex")),1)]),_:1})])])):f("",!0),e(k)?(r(),p("div",ve,[n(e(se),{onClick:t[5]||(t[5]=i=>e(w)("prev")),class:D({disable:!e(C)("prev")})},null,8,["class"]),n(e(ie),{onClick:t[6]||(t[6]=i=>e(w)("next")),class:D({disable:!e(C)("next")})},null,8,["class"])])):f("",!0)]}),_:1},8,["spinning"]),e(k)&&e(l)&&e(l)[e(o)]?(r(),$(le,{key:0,file:e(l)[e(o)],idx:e(o),onContextMenuClick:e(I)},null,8,["file","idx","onContextMenuClick"])):f("",!0)],512)}}});const be=te(Ie,[["__scopeId","data-v-bb043f5a"]]);export{be as default};
