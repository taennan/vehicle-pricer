const Mt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};Mt();function _t(){}function It(t,e){for(const o in e)t[o]=e[o];return t}function ut(t){return t()}function dt(){return Object.create(null)}function j(t){t.forEach(ut)}function Pt(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function At(t){return Object.keys(t).length===0}function Et(t,e,o,i){if(t){const n=vt(t,e,o,i);return t[0](n)}}function vt(t,e,o,i){return t[1]&&i?It(o.ctx.slice(),t[1](i(e))):o.ctx}function Ft(t,e,o,i){if(t[2]&&i){const n=t[2](i(o));if(e.dirty===void 0)return n;if(typeof n=="object"){const r=[],a=Math.max(e.dirty.length,n.length);for(let b=0;b<a;b+=1)r[b]=e.dirty[b]|n[b];return r}return e.dirty|n}return e.dirty}function zt(t,e,o,i,n,r){if(n){const a=vt(e,o,i,r);t.p(a,n)}}function St(t){if(t.ctx.length>32){const e=[],o=t.ctx.length/32;for(let i=0;i<o;i++)e[i]=-1;return e}return-1}function x(t,e){t.appendChild(e)}function k(t,e,o){t.insertBefore(e,o||null)}function y(t){t.parentNode.removeChild(t)}function Ct(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}function d(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function w(){return U(" ")}function pt(t,e,o,i){return t.addEventListener(e,o,i),()=>t.removeEventListener(e,o,i)}function h(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function Lt(t){return Array.from(t.childNodes)}function yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function X(t,e){t.value=e==null?"":e}let et;function T(t){et=t}const S=[],ft=[],W=[],gt=[],Dt=Promise.resolve();let Q=!1;function Tt(){Q||(Q=!0,Dt.then(kt))}function tt(t){W.push(t)}const J=new Set;let H=0;function kt(){const t=et;do{for(;H<S.length;){const e=S[H];H++,T(e),jt(e.$$)}for(T(null),S.length=0,H=0;ft.length;)ft.pop()();for(let e=0;e<W.length;e+=1){const o=W[e];J.has(o)||(J.add(o),o())}W.length=0}while(S.length);for(;gt.length;)gt.pop()();Q=!1,J.clear(),T(t)}function jt(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}const N=new Set;let qt;function A(t,e){t&&t.i&&(N.delete(t),t.i(e))}function C(t,e,o,i){if(t&&t.o){if(N.has(t))return;N.add(t),qt.c.push(()=>{N.delete(t),i&&(o&&t.d(1),i())}),t.o(e)}}function R(t){t&&t.c()}function L(t,e,o,i){const{fragment:n,on_mount:r,on_destroy:a,after_update:b}=t.$$;n&&n.m(e,o),i||tt(()=>{const p=r.map(ut).filter(Pt);a?a.push(...p):j(p),t.$$.on_mount=[]}),b.forEach(tt)}function D(t,e){const o=t.$$;o.fragment!==null&&(j(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(S.push(t),Tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ut(t,e,o,i,n,r,a,b=[-1]){const p=et;T(t);const s=t.$$={fragment:null,ctx:null,props:r,update:_t,not_equal:n,bound:dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:dt(),dirty:b,skip_bound:!1,root:e.target||p.$$.root};a&&a(s.root);let f=!1;if(s.ctx=o?o(t,e.props||{},(c,E,..._)=>{const v=_.length?_[0]:E;return s.ctx&&n(s.ctx[c],s.ctx[c]=v)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](v),f&&Yt(t,c)),E}):[],s.update(),f=!0,j(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const c=Lt(e.target);s.fragment&&s.fragment.l(c),c.forEach(y)}else s.fragment&&s.fragment.c();e.intro&&A(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),kt()}T(p)}class Bt{$destroy(){D(this,1),this.$destroy=_t}$on(e,o){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function $t(t){let e,o,i;const n=t[1].default,r=Et(n,t,t[0],null);return{c(){e=d("p"),o=d("strong"),r&&r.c(),h(e,"class","svelte-lfm0l3")},m(a,b){k(a,e,b),x(e,o),r&&r.m(o,null),i=!0},p(a,[b]){r&&r.p&&(!i||b&1)&&zt(r,n,a,a[0],i?Ft(n,a[0],b,null):St(a[0]),null)},i(a){i||(A(r,a),i=!0)},o(a){C(r,a),i=!1},d(a){a&&y(e),r&&r.d(a)}}}function Xt(t,e,o){let{$$slots:i={},$$scope:n}=e;return t.$$set=r=>{"$$scope"in r&&o(0,n=r.$$scope)},[n,i]}class V extends Bt{constructor(e){super(),Ut(this,e,Xt,$t,wt,{})}}function mt(t,e,o){const i=t.slice();return i[8]=e[o],i[10]=o,i}function Ht(t){let e;return{c(){e=U("Vehicle Age (in years)")},m(o,i){k(o,e,i)},d(o){o&&y(e)}}}function Rt(t){let e;return{c(){e=U("Vehicle Value (when new)")},m(o,i){k(o,e,i)},d(o){o&&y(e)}}}function Vt(t){let e;return{c(){e=U("Current Value:")},m(o,i){k(o,e,i)},d(o){o&&y(e)}}}function Wt(t){let e;return{c(){e=U("Historical Values:")},m(o,i){k(o,e,i)},d(o){o&&y(e)}}}function Nt(t){let e,o;return{c(){e=d("td"),o=U(t[10]),h(e,"class","label svelte-1es2kwa")},m(i,n){k(i,e,n),x(e,o)},d(i){i&&y(e)}}}function Gt(t){let e;return{c(){e=d("td"),e.textContent="Original",h(e,"class","label svelte-1es2kwa")},m(o,i){k(o,e,i)},d(o){o&&y(e)}}}function ht(t){let e,o,i,n=G(t[8])+"",r,a;function b(f,c){return f[10]===0?Gt:Nt}let s=b(t)(t);return{c(){e=d("tr"),s.c(),o=w(),i=d("td"),r=U(n),a=w(),h(i,"class","value svelte-1es2kwa")},m(f,c){k(f,e,c),s.m(e,null),x(e,o),x(e,i),x(i,r),x(e,a)},p(f,c){c&4&&n!==(n=G(f[8])+"")&&yt(r,n)},d(f){f&&y(e),s.d()}}}function Zt(t){let e,o,i,n,r,a,b,p,s,f,c,E,_,v,ot,q,Y=G(t[3])+"",Z,it,B,nt,M,O,rt,F,at,$,z,K,lt;r=new V({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),v=new V({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),B=new V({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}});let I=t[2],m=[];for(let l=0;l<I.length;l+=1)m[l]=ht(mt(t,I,l));return{c(){e=d("main"),o=d("section"),o.innerHTML="<h1>Vehicle Value Evaluator</h1>",i=w(),n=d("section"),R(r.$$.fragment),a=w(),b=d("input"),p=w(),R(s.$$.fragment),f=w(),c=d("input"),E=w(),_=d("section"),R(v.$$.fragment),ot=w(),q=d("p"),Z=U(Y),it=w(),R(B.$$.fragment),nt=w(),M=d("table"),O=d("thead"),O.innerHTML=`<tr><th class="svelte-1es2kwa"><strong>Age</strong></th> 
          <th class="svelte-1es2kwa"><strong>Value</strong></th></tr>`,rt=w(),F=d("tbody");for(let l=0;l<m.length;l+=1)m[l].c();at=w(),$=d("section"),$.innerHTML=`<p class="info svelte-1es2kwa">Prices are computed by reducing the original value by <strong>20%</strong>
      for the first year then reducing by <strong>10%</strong> every other year</p>`,h(o,"class","svelte-1es2kwa"),h(b,"class","svelte-1es2kwa"),h(c,"class","svelte-1es2kwa"),h(n,"class","svelte-1es2kwa"),h(q,"class","value-display svelte-1es2kwa"),h(F,"class","svelte-1es2kwa"),h(M,"class","svelte-1es2kwa"),h(_,"class","svelte-1es2kwa"),h($,"class","svelte-1es2kwa"),h(e,"class","svelte-1es2kwa")},m(l,g){k(l,e,g),x(e,o),x(e,i),x(e,n),L(r,n,null),x(n,a),x(n,b),X(b,t[0]),x(n,p),L(s,n,null),x(n,f),x(n,c),X(c,t[1]),x(e,E),x(e,_),L(v,_,null),x(_,ot),x(_,q),x(q,Z),x(_,it),L(B,_,null),x(_,nt),x(_,M),x(M,O),x(M,rt),x(M,F);for(let P=0;P<m.length;P+=1)m[P].m(F,null);x(e,at),x(e,$),z=!0,K||(lt=[pt(b,"input",t[6]),pt(c,"input",t[7])],K=!0)},p(l,[g]){const P={};g&2048&&(P.$$scope={dirty:g,ctx:l}),r.$set(P),g&1&&b.value!==l[0]&&X(b,l[0]);const bt={};g&2048&&(bt.$$scope={dirty:g,ctx:l}),s.$set(bt),g&2&&c.value!==l[1]&&X(c,l[1]);const st={};g&2048&&(st.$$scope={dirty:g,ctx:l}),v.$set(st),(!z||g&8)&&Y!==(Y=G(l[3])+"")&&yt(Z,Y);const xt={};if(g&2048&&(xt.$$scope={dirty:g,ctx:l}),B.$set(xt),g&4){I=l[2];let u;for(u=0;u<I.length;u+=1){const ct=mt(l,I,u);m[u]?m[u].p(ct,g):(m[u]=ht(ct),m[u].c(),m[u].m(F,null))}for(;u<m.length;u+=1)m[u].d(1);m.length=I.length}},i(l){z||(A(r.$$.fragment,l),A(s.$$.fragment,l),A(v.$$.fragment,l),A(B.$$.fragment,l),z=!0)},o(l){C(r.$$.fragment,l),C(s.$$.fragment,l),C(v.$$.fragment,l),C(B.$$.fragment,l),z=!1},d(l){l&&y(e),D(r),D(s),D(v),D(B),Ct(m,l),K=!1,j(lt)}}}function Ot(t){const e=t.replaceAll(/\s/g,"").replaceAll(/\D/g,"").replaceAll(/\W/g,"");return Number(e)}function Kt(t){const e=t.replace("$","").replaceAll("_","").replaceAll(",","");return Number(e)}function G(t){let e=String(t),o=[],i=e.indexOf(".");i===-1&&(i=1/0),e.slice(0,i).split("").reverse().forEach((a,b)=>{b%3===0&&b>0&&o.unshift(","),o.unshift(a)});let r=e.slice(i,i+3);return r.length==2&&(r=`${r}0`),`$${o.join("")+r}`}function Jt(t,e){let o=e*.8,i=[e,o];for(let n=1;n<t;n++)o*=.9,i.push(o);return i}function Qt(t,e,o){let i,n,r,a,b="3",p="10,000";function s(){b=this.value,o(0,b)}function f(){p=this.value,o(1,p)}return t.$$.update=()=>{var c;t.$$.dirty&1&&o(5,i=Ot(b)),t.$$.dirty&2&&o(4,n=Kt(p)),t.$$.dirty&48&&o(2,r=Jt(i,n)),t.$$.dirty&20&&o(3,a=(c=r[r.length-1])!=null?c:n)},[b,p,r,a,n,i,s,f]}class te extends Bt{constructor(e){super(),Ut(this,e,Qt,Zt,wt,{})}}new te({target:document.getElementById("app")});
