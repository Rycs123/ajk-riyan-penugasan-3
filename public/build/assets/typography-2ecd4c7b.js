import{r as b,j as se,a as me}from"./app-cc4a6dc3.js";function ie(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=ie(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function le(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=ie(e))&&(o&&(o+=" "),o+=r);return o}const re=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,te=le,ae=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return te(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:n}=r,s=Object.keys(i).map(c=>{const d=t==null?void 0:t[c],g=n==null?void 0:n[c];if(d===null)return null;const x=re(d)||re(g);return i[c][x]}),l=t&&Object.entries(t).reduce((c,d)=>{let[g,x]=d;return x===void 0||(c[g]=x),c},{}),u=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,d)=>{let{class:g,className:x,...v}=d;return Object.entries(v).every(C=>{let[m,h]=C;return Array.isArray(h)?h.includes({...n,...l}[m]):{...n,...l}[m]===h})?[...c,g,x]:c},[]);return te(e,s,u,t==null?void 0:t.class,t==null?void 0:t.className)},F="-";function he(e){const r=ye(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function i(s){const l=s.split(F);return l[0]===""&&l.length!==1&&l.shift(),ce(l,r)||xe(s)}function n(s,l){const u=t[s]||[];return l&&o[s]?[...u,...o[s]]:u}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function ce(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?ce(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(F);return(s=r.validators.find(({validator:l})=>l(n)))==null?void 0:s.classGroupId}const oe=/^\[(.+)\]$/;function xe(e){if(oe.test(e)){const r=oe.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ye(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return we(Object.entries(e.classGroups),t).forEach(([n,s])=>{_(s,o,n,r)}),o}function _(e,r,t,o){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:ne(r,i);n.classGroupId=t;return}if(typeof i=="function"){if(ve(i)){_(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([n,s])=>{_(s,ne(r,n),t,o)})})}function ne(e,r){let t=e;return r.split(F).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ve(e){return e.isThemeGetter}function we(e,r){return r?e.map(([t,o])=>{const i=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[r+s,l])):n);return[t,i]}):e}function Ce(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function i(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return i(n,s),s},set(n,s){t.has(n)?t.set(n,s):i(n,s)}}}const de="!";function ke(e){const r=e.separator,t=r.length===1,o=r[0],i=r.length;return function(s){const l=[];let u=0,c=0,d;for(let m=0;m<s.length;m++){let h=s[m];if(u===0){if(h===o&&(t||s.slice(m,m+i)===r)){l.push(s.slice(c,m)),c=m+i;continue}if(h==="/"){d=m;continue}}h==="["?u++:h==="]"&&u--}const g=l.length===0?s:s.substring(c),x=g.startsWith(de),v=x?g.substring(1):g,C=d&&d>c?d-c:void 0;return{modifiers:l,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:C}}}function ze(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function Se(e){return{cache:Ce(e.cacheSize),splitModifiers:ke(e),...he(e)}}const $e=/\s+/;function Ae(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split($e).map(s=>{const{modifiers:l,hasImportantModifier:u,baseClassName:c,maybePostfixModifierPosition:d}=t(s);let g=o(d?c.substring(0,d):c),x=!!d;if(!g){if(!d)return{isTailwindClass:!1,originalClassName:s};if(g=o(c),!g)return{isTailwindClass:!1,originalClassName:s};x=!1}const v=ze(l).join(":");return{isTailwindClass:!0,modifierId:u?v+de:v,classGroupId:g,originalClassName:s,hasPostfixModifier:x}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:u,hasPostfixModifier:c}=s,d=l+u;return n.has(d)?!1:(n.add(d),i(u,c).forEach(g=>n.add(l+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Ee(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ue(r))&&(o&&(o+=" "),o+=t);return o}function ue(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ue(e[o]))&&(t&&(t+=" "),t+=r);return t}function Me(e,...r){let t,o,i,n=s;function s(u){const c=r.reduce((d,g)=>g(d),e());return t=Se(c),o=t.cache.get,i=t.cache.set,n=l,l(u)}function l(u){const c=o(u);if(c)return c;const d=Ae(u,t);return i(u,d),d}return function(){return n(Ee.apply(null,arguments))}}function f(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const fe=/^\[(?:([a-z-]+):)?(.+)\]$/i,je=/^\d+\/\d+$/,Pe=new Set(["px","full","screen"]),Re=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ve=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ge=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ne=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function y(e){return $(e)||Pe.has(e)||je.test(e)}function z(e){return A(e,"length",Ue)}function $(e){return!!e&&!Number.isNaN(Number(e))}function I(e){return A(e,"number",$)}function j(e){return!!e&&Number.isInteger(Number(e))}function Ie(e){return e.endsWith("%")&&$(e.slice(0,-1))}function a(e){return fe.test(e)}function S(e){return Re.test(e)}const Te=new Set(["length","size","percentage"]);function Oe(e){return A(e,Te,pe)}function Le(e){return A(e,"position",pe)}const We=new Set(["image","url"]);function Be(e){return A(e,We,qe)}function _e(e){return A(e,"",Fe)}function P(){return!0}function A(e,r,t){const o=fe.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Ue(e){return Ve.test(e)}function pe(){return!1}function Fe(e){return Ge.test(e)}function qe(e){return Ne.test(e)}function He(){const e=f("colors"),r=f("spacing"),t=f("blur"),o=f("brightness"),i=f("borderColor"),n=f("borderRadius"),s=f("borderSpacing"),l=f("borderWidth"),u=f("contrast"),c=f("grayscale"),d=f("hueRotate"),g=f("invert"),x=f("gap"),v=f("gradientColorStops"),C=f("gradientColorStopPositions"),m=f("inset"),h=f("margin"),k=f("opacity"),w=f("padding"),H=f("saturate"),T=f("scale"),Z=f("sepia"),J=f("skew"),K=f("space"),X=f("translate"),O=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",a,r],p=()=>[a,r],Q=()=>["",y,z],V=()=>["auto",$,a],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],B=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",a],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[$,I],N=()=>[$,a];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[y,z],blur:["none","",S,a],brightness:M(),borderColor:[e],borderRadius:["none","","full",S,a],borderSpacing:p(),borderWidth:Q(),contrast:M(),grayscale:E(),hueRotate:N(),invert:E(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Ie,z],inset:W(),margin:W(),opacity:M(),padding:p(),saturate:M(),scale:M(),sepia:E(),skew:N(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),a]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",j,a]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",j,a]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",j,a]},a]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[j,a]},a]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",a,r]}],"min-w":[{"min-w":["min","max","fit",a,y]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[S]},S,a]}],h:[{h:[a,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",y,a]}],"max-h":[{"max-h":[a,r,"min","max","fit"]}],"font-size":[{text:["base",S,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",$,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",y,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",y,z]}],"underline-offset":[{"underline-offset":["auto",y,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Le]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Oe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Be]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[y,a]}],"outline-w":[{outline:[y,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[y,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,_e]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":D()}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",S,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[g]}],saturate:[{saturate:[H]}],sepia:[{sepia:[Z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[j,a]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[y,z,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ze=Me(He);function be(...e){return Ze(le(e))}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},R.apply(this,arguments)}function Je(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function ge(...e){return r=>e.forEach(t=>Je(t,r))}function or(...e){return b.useCallback(ge(...e),e)}const q=b.forwardRef((e,r)=>{const{children:t,...o}=e,i=b.Children.toArray(t),n=i.find(Xe);if(n){const s=n.props.children,l=i.map(u=>u===n?b.Children.count(s)>1?b.Children.only(null):b.isValidElement(s)?s.props.children:null:u);return b.createElement(U,R({},o,{ref:r}),b.isValidElement(s)?b.cloneElement(s,void 0,l):null)}return b.createElement(U,R({},o,{ref:r}),t)});q.displayName="Slot";const U=b.forwardRef((e,r)=>{const{children:t,...o}=e;return b.isValidElement(t)?b.cloneElement(t,{...Qe(o,t.props),ref:r?ge(r,t.ref):t.ref}):b.Children.count(t)>1?b.Children.only(null):null});U.displayName="SlotClone";const Ke=({children:e})=>b.createElement(b.Fragment,null,e);function Xe(e){return b.isValidElement(e)&&e.type===Ke}function Qe(e,r){const t={...r};for(const o in r){const i=e[o],n=r[o];/^on[A-Z]/.test(o)?i&&n?t[o]=(...l)=>{n(...l),i(...l)}:i&&(t[o]=i):o==="style"?t[o]={...i,...n}:o==="className"&&(t[o]=[i,n].filter(Boolean).join(" "))}return{...e,...t}}const Ye=ae("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),De=b.forwardRef(({className:e,variant:r,size:t,asChild:o=!1,...i},n)=>{const s=o?q:"button";return se.jsx(s,{className:be(Ye({variant:r,size:t,className:e})),ref:n,...i})});De.displayName="Button";const er=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],nr=er.reduce((e,r)=>{const t=b.forwardRef((o,i)=>{const{asChild:n,...s}=o,l=n?q:r;return b.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),b.createElement(l,R({},s,{ref:i}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function sr(e,r){e&&me.flushSync(()=>e.dispatchEvent(r))}const rr=ae("font-open-sans text-foreground",{variants:{variant:{"h1-48/48":"text-4xl lg:text-5xl font-extrabold","h2-30/36":"text-3xl font-semibold","h3-24/32":"text-2xl font-semibold","h4-20/28":"text-xl font-semibold","large-18/28":"text-lg","lead-20/28":"text-xl","p-16/24":"text-base","body-14/24":"text-sm leading-6","subtle-14/20":"text-sm","small-14/14":"text-sm leading-none","detail-12/20":"text-xs leading-5"},weight:{default:"",extralight:"font-extralight",light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold",extrabold:"font-extrabold"}},defaultVariants:{variant:"p-16/24",weight:"default"}});function ir({as:e,children:r,className:t,variant:o,weight:i,...n}){const s=e||"p";return se.jsx(s,{className:be(rr({variant:o,weight:i,className:t})),...n,children:r})}export{or as $,De as B,ir as T,R as _,ae as a,Ke as b,be as c,Ye as d,nr as e,q as f,sr as g,ge as h};
