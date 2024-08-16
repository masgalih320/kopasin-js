var g=Object.defineProperty,u=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,n=(r,e)=>{for(var t in e||(e={}))d.call(e,t)&&c(r,t,e[t]);if(o)for(var t of o(e))h.call(e,t)&&c(r,t,e[t]);return r},s=(r,e)=>u(r,f(e));var m=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var E=m((p,l)=>{var i=class{constructor({copy:e,paste:t}){e&&(this.copy=s(n({},e),{source:this.getElement(e.source),trigger:this.getElement(e.trigger),on:e.on||"click",success:e.success||(()=>{}),error:e.error||(()=>{})})),t&&(this.paste=s(n({},t),{target:this.getElement(t.target),trigger:this.getElement(t.trigger),on:t.on||"click",success:t.success||(()=>{}),error:t.error||(()=>{})})),this.init()}init(){this.copy&&this.handleCopy(this.copy),this.paste&&this.handlePaste(this.paste)}handleCopy(e){e.trigger.addEventListener(e.on,function(){if(e.source instanceof HTMLInputElement)e.source.select();else{let t=window.getSelection(),a=document.createRange();a.selectNodeContents(e.source),t.removeAllRanges(),t.addRange(a)}try{window.navigator.clipboard.writeText(e.source instanceof HTMLInputElement?e.source.value:e.source.textContent),e.success&&e.success()}catch(t){e.error&&e.error()}})}handlePaste(e){e.trigger.addEventListener(e.on,function(){try{e.target instanceof HTMLInputElement?window.navigator.clipboard.readText().then(t=>{e.target.value=t}):window.navigator.clipboard.readText().then(t=>{e.target.innerText=t}),e.success&&e.success()}catch(t){e.error&&e.error()}})}getElement(e){return e instanceof HTMLElement?e:document.querySelector(e)}};l.exports=i});export default E();
//# sourceMappingURL=kopasin-js.mjs.map