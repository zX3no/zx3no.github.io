/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/@justinribeiro/lite-youtube@1.7.1/lite-youtube.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
export class LiteYTEmbed extends HTMLElement{constructor(){super(),this.isIframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid","playlistid","videoplay","videotitle"]}connectedCallback(){this.addEventListener("pointerover",(()=>LiteYTEmbed.warmConnections(this)),{once:!0}),this.addEventListener("click",(()=>this.addIframe()))}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(t){this.setAttribute("videoid",t)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(t){this.setAttribute("playlistid",t)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(t){this.setAttribute("videotitle",t)}get videoPlay(){return this.getAttribute("videoplay")||"Play"}set videoPlay(t){this.setAttribute("videoplay",t)}get videoStartAt(){return this.getAttribute("videoStartAt")||"0"}get autoLoad(){return this.hasAttribute("autoload")}get autoPause(){return this.hasAttribute("autopause")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}set params(t){this.setAttribute("params",t)}set posterQuality(t){this.setAttribute("posterquality",t)}get disableNoscript(){return this.hasAttribute("disablenoscript")}setupDom(){const t=this.attachShadow({mode:"open"});let e="";window.liteYouTubeNonce&&(e=`nonce="${window.liteYouTubeNonce}"`),t.innerHTML=`\n      <style ${e}>\n        :host {\n          --aspect-ratio: var(--lite-youtube-aspect-ratio, 16 / 9);\n          --aspect-ratio-short: var(--lite-youtube-aspect-ratio-short, 9 / 16);\n          --frame-shadow-visible: var(--lite-youtube-frame-shadow-visible, yes);\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          aspect-ratio: var(--aspect-ratio);\n        }\n\n        @media (max-width: 40em) {\n          :host([short]) {\n            aspect-ratio: var(--aspect-ratio-short);\n          }\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder, slot[name=image]::slotted(*) {\n          object-fit: cover;\n          width: 100%;\n        }\n\n        @container style(--frame-shadow-visible: yes) {\n          #frame::before {\n            content: '';\n            display: block;\n            position: absolute;\n            top: 0;\n            background-image: linear-gradient(180deg, #111 -20%, transparent 90%);\n            height: 60px;\n            width: 100%;\n            z-index: 1;\n          }\n        }\n\n        #playButton {\n          width: 68px;\n          height: 48px;\n          background-color: transparent;\n          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');\n          z-index: 1;\n          border: 0;\n          border-radius: inherit;\n        }\n\n        #playButton:before {\n          content: '';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n\n        #playButton,\n        #playButton:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n          cursor: inherit;\n        }\n\n        /* Post-click styles */\n        .activated {\n          cursor: unset;\n        }\n\n        #frame.activated::before,\n        #frame.activated > #playButton {\n          display: none;\n        }\n      </style>\n      <div id="frame">\n        <picture>\n          <slot name="image">\n            <source id="webpPlaceholder" type="image/webp">\n            <source id="jpegPlaceholder" type="image/jpeg">\n            <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">\n          </slot>\n        </picture>\n        <button id="playButton"></button>\n      </div>\n    `,this.domRefFrame=t.querySelector("#frame"),this.domRefImg={fallback:t.querySelector("#fallbackPlaceholder"),webp:t.querySelector("#webpPlaceholder"),jpeg:t.querySelector("#jpegPlaceholder")},this.domRefPlayButton=t.querySelector("#playButton")}setupComponent(){0===this.shadowRoot.querySelector("slot[name=image]").assignedNodes().length&&this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),(this.autoLoad||this.isYouTubeShort()||this.autoPause)&&this.initIntersectionObserver(),this.disableNoscript||this.injectSearchNoScript()}attributeChangedCallback(t,e,i){e!==i&&(this.setupComponent(),this.domRefFrame.classList.contains("activated")&&(this.domRefFrame.classList.remove("activated"),this.shadowRoot.querySelector("iframe").remove(),this.isIframeLoaded=!1))}injectSearchNoScript(){const t=document.createElement("noscript");this.prepend(t),t.innerHTML=this.generateIframe()}generateIframe(t=!1){let e=t?0:1;const i=this.noCookie?"-nocookie":"";let o;return o=this.playlistId?`?listType=playlist&list=${this.playlistId}&`:`${this.videoId}?`,this.autoPause&&(this.params="enablejsapi=1"),this.isYouTubeShort()&&(this.params=`loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`,e=1),`\n<iframe credentialless frameborder="0" title="${this.videoTitle}"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n  src="https://www.youtube${i}.com/embed/${o}autoplay=${e}&${this.params}"\n></iframe>`}addIframe(t=!1){if(!this.isIframeLoaded){const e=this.generateIframe(t);this.domRefFrame.insertAdjacentHTML("beforeend",e),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.attemptShortAutoPlay(),this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){this.testPosterImage(),this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.domRefImg?.fallback?.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}async testPosterImage(){setTimeout((()=>{const t=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,e=new Image;e.fetchPriority="low",e.referrerPolicy="origin",e.src=t,e.onload=async t=>{const e=t.target;90==e?.naturalHeight&&120==e?.naturalWidth&&(this.posterQuality="hqdefault");const i=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;this.domRefImg.webp.srcset=i;const o=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg.fallback.loading=this.posterLoading,this.domRefImg.jpeg.srcset=o,this.domRefImg.fallback.src=o,this.domRefImg.fallback.loading=this.posterLoading}}),100)}initIntersectionObserver(){if(new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.isIntersecting&&!this.isIframeLoaded&&(LiteYTEmbed.warmConnections(this),this.addIframe(!0),e.unobserve(this))}))}),{root:null,rootMargin:"0px",threshold:0}).observe(this),this.autoPause){new IntersectionObserver(((t,e)=>{t.forEach((t=>{1!==t.intersectionRatio&&this.shadowRoot.querySelector("iframe")?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}),{threshold:1}).observe(this)}}attemptShortAutoPlay(){this.isYouTubeShort()&&setTimeout((()=>{this.shadowRoot.querySelector("iframe")?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}),2e3)}isYouTubeShort(){return""===this.getAttribute("short")&&window.matchMedia("(max-width: 40em)").matches}static addPrefetch(t,e){const i=document.createElement("link");i.rel=t,i.href=e,i.crossOrigin="true",document.head.append(i)}static warmConnections(t){LiteYTEmbed.isPreconnected||window.liteYouTubeIsPreconnected||(LiteYTEmbed.addPrefetch("preconnect","https://i.ytimg.com/"),LiteYTEmbed.addPrefetch("preconnect","https://s.ytimg.com"),t.noCookie?LiteYTEmbed.addPrefetch("preconnect","https://www.youtube-nocookie.com"):(LiteYTEmbed.addPrefetch("preconnect","https://www.youtube.com"),LiteYTEmbed.addPrefetch("preconnect","https://www.google.com"),LiteYTEmbed.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),LiteYTEmbed.addPrefetch("preconnect","https://static.doubleclick.net")),LiteYTEmbed.isPreconnected=!0,window.liteYouTubeIsPreconnected=!0)}}LiteYTEmbed.isPreconnected=!1,customElements.define("lite-youtube",LiteYTEmbed);
//# sourceMappingURL=/sm/0aaa381ef15a8e52bfc3fb3c48b7d9213aeffcc1b9797e202c430b6685259878.map