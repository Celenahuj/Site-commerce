(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();class ce{constructor(t,n={}){let a=document.getElementById(t);a||(a=document.createElement("div"),console.warn(`Element with id "${t}" not found. Creating a new div as root.`),document.body.appendChild(a)),this.root=a,this.routes=[],this.layouts={},this.currentRoute=null,this.isAuthenticated=!1,this.loginPath=n.loginPath||"/login",this.basePath=this.normalizeBasePath(n.basePath||"/"),window.addEventListener("popstate",()=>this.handleRoute()),document.addEventListener("click",r=>{const s=r.target.closest("[data-link]");s&&(r.preventDefault(),this.navigate(s.getAttribute("href")))})}normalizeBasePath(t){return!t||t==="/"?"/":`/${t.replace(/^\/+|\/+$/g,"")}/`}stripBasePath(t){return this.basePath==="/"?t||"/":t.startsWith(this.basePath)?t.slice(this.basePath.length-1)||"/":t||"/"}withBasePath(t){if(!t)return this.basePath;if(/^https?:\/\//.test(t))return t;const n=t.startsWith("/")?t:`/${t}`;return this.basePath==="/"?n:`${this.basePath.slice(0,-1)}${n}`}setAuth(t){this.isAuthenticated=t}addLayout(t,n){return this.layouts[t]=n,this}findLayout(t){let n=null,a=0;for(const[r,s]of Object.entries(this.layouts))t.startsWith(r)&&r.length>a&&(n=s,a=r.length);return n}addRoute(t,n,a={}){const r=this.pathToRegex(t),s=this.extractParams(t);return this.routes.push({path:t,regex:r,keys:s,handler:n,requireAuth:a.requireAuth||!1,useLayout:a.useLayout!==!1}),this}pathToRegex(t){if(t==="*")return/.*/;const n=t.replace(/\//g,"\\/").replace(/:(\w+)/g,"([^\\/]+)").replace(/\*/g,".*");return new RegExp("^"+n+"$")}extractParams(t){const n=[],a=t.matchAll(/:(\w+)/g);for(const r of a)n.push(r[1]);return n}getParams(t,n){const a=n.match(t.regex);if(!a)return{};const r={};return t.keys.forEach((s,o)=>{r[s]=a[o+1]}),r}navigate(t){window.history.pushState(null,null,this.withBasePath(t)),this.handleRoute()}handleRoute(){const t=this.stripBasePath(window.location.pathname);for(const a of this.routes)if(a.regex.test(t)){if(a.requireAuth&&!this.isAuthenticated){sessionStorage.setItem("redirectAfterLogin",t),this.navigate(this.loginPath);return}this.currentRoute=t;const r=this.getParams(a,t),s=a.handler(r,this);s instanceof Promise?s.then(o=>{this.renderContent(o,a,t)}):this.renderContent(s,a,t);return}const n=this.routes.find(a=>a.path==="*");if(n){const a=n.handler({},this);this.root.innerHTML=a}}renderContent(t,n,a){const r=t instanceof DocumentFragment;if(n.useLayout){const s=this.findLayout(a);if(s){const o=s(),i=o.querySelector("slot");if(i)if(r)i.replaceWith(t);else{const g=document.createElement("template");g.innerHTML=t,i.replaceWith(g.content)}else console.warn("Layout does not contain a <slot> element. Content will not be inserted.");this.root.innerHTML="",this.root.appendChild(o)}else r?(this.root.innerHTML="",this.root.appendChild(t)):this.root.innerHTML=t}else r?(this.root.innerHTML="",this.root.appendChild(t)):this.root.innerHTML=t;this.attachEventListeners(a)}attachEventListeners(t){const n=document.getElementById("loginBtn");n&&n.addEventListener("click",()=>{this.login()});const a=document.getElementById("logoutBtn");a&&a.addEventListener("click",()=>{this.logout()})}login(){this.setAuth(!0);const t=sessionStorage.getItem("redirectAfterLogin");sessionStorage.removeItem("redirectAfterLogin"),this.navigate(t||"/dashboard")}logout(){this.setAuth(!1),this.navigate(this.loginPath)}start(){this.handleRoute()}}const ue=`<div class="mx-auto max-w-4xl p-6">
  <h1 class="mb-6 text-4xl font-bold text-gray-900">À propos</h1>
  <p class="mb-6 text-lg text-gray-700">
    Base de code pour la SAE 3.01. Octobre 2025</p>
<p class="mb-6 text-lg text-gray-700">
    Se référer à la documentation pour comprendre comment l'utiliser
    </p>
   
</div>`;function de(){return ue}let V="";console.error("VITE_API_URL is missing for production build. Configure it to your AlwaysData API base URL.");let w=async function(e){let t={method:"GET",credentials:"include"};try{var n=await fetch(V+e,t)}catch(r){return console.error("Echec de la requête : "+r),!1}return n.status!=200?(console.error("Erreur de requête : "+n.status),!1):await n.json()},_=async function(e,t){let n=JSON.stringify(t),a={method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:n};try{var r=await fetch(V+e,a)}catch(s){return console.error("Echec de la requête : "+s),!1}return r.status===200||r.status===201?await r.json():(console.error("Erreur de requête : "+r.status),!1)},me=async function(e,t){let n=JSON.stringify(t),a={method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:n};try{var r=await fetch(V+e,a)}catch(s){return console.error("Echec de la requête : "+s),!1}return r.status===200||r.status===204?r.status===204?!0:await r.json():(console.error("Erreur de requête : "+r.status),!1)},B={},J=[{id:1,name:"Marteau",description:"Un marteau est un outil utilisé pour enfoncer des clous dans du bois ou d'autres matériaux. Il se compose d'une tête lourde en métal fixée à un manche en bois ou en fibre de verre.",price:9.99},{id:2,name:"Tournevis",description:"Un tournevis est un outil utilisé pour visser ou dévisser des vis. Il se compose d'une tige en métal avec une tête qui s'adapte à la fente de la vis.",price:5.99},{id:3,name:"Clé à molette",description:"Une clé à molette est un outil utilisé pour serrer ou desserrer des écrous et des boulons. Elle se compose d'une mâchoire réglable qui s'adapte à différentes tailles d'écrous.",price:12.99},{id:4,name:"Pince",description:"Une pince est un outil utilisé pour saisir, tenir ou plier des objets. Elle se compose de deux bras articulés qui se rejoignent en un point de pivot.",price:7.99},{id:5,name:"Scie",description:"Une scie est un outil utilisé pour couper des matériaux, généralement en bois. Elle se compose d'une lame dentée fixée à un manche.",price:14.99},{id:6,name:"Perceuse",description:"Une perceuse est un outil utilisé pour percer des trous dans divers matériaux. Elle se compose d'un moteur qui fait tourner une mèche.",price:49.99},{id:7,name:"Ponceuse",description:"Une ponceuse est un outil utilisé pour lisser des surfaces en bois ou en métal. Elle se compose d'un moteur qui fait vibrer ou tourner un abrasif.",price:79.99},{id:8,name:"Mètre",description:"Un mètre est un outil utilisé pour mesurer des distances. Il se compose d'une bande graduée en métal ou en plastique.",price:19.99},{id:9,name:"Niveau à bulle",description:"Un niveau à bulle est un outil utilisé pour vérifier l'horizontalité ou la verticalité d'une surface. Il se compose d'un tube rempli de liquide avec une bulle d'air à l'intérieur.",price:9.99}];B.fetch=async function(e){let t=await w("products/"+e);return t==!1?J.pop():[t]};B.fetchAll=async function(){let e=await w("products");return e==!1?J:e};let K={},pe=[{id:1,name:"Marteau"},{id:2,name:"Tournevis"},{id:3,name:"Clé à molette"},{id:4,name:"Pince"},{id:5,name:"Scie"},{id:6,name:"Perceuse"},{id:7,name:"Ponceuse"},{id:8,name:"Mètre"},{id:9,name:"Niveau à bulle"}];K.fetchByCategory=async function(e){let t=await w("products?category="+e);return t==!1?pe:t};const fe=function(e){return`/${e.replace(/^\/+|\/+$/g,"")}/`},N=fe("/Site-commerce/"),Y=function(e){return!e||!e.startsWith("/")||N==="/"||e.startsWith(N)?e:`${N}${e.replace(/^\/+/,"")}`};let M=function(e,t){let n=e;for(let a in t)n=n.replaceAll(new RegExp("{{"+a+"}}","g"),t[a]);return n=n.replace(/(src|href)\s*=\s*(["'])(\/[^"']*)\2/g,(a,r,s,o)=>`${r}=${s}${Y(o)}${s}`),n};function c(e){const t=e.replace(/(src|href)\s*=\s*(["'])(\/[^"']*)\2/g,(a,r,s,o)=>`${r}=${s}${Y(o)}${s}`),n=document.createElement("template");return n.innerHTML=t.trim(),n.content}const ge=`<a href="/products/{{id}}/{{name}}" data-link>
  <article
    class="overflow-hidden bg-white p-6 shadow-md transition hover:shadow-lg w-80"
  >
    <div class="mb-4 flex justify-center">
      <img
        src="{{image}}"
        alt="{{name}}"
        class="h-64 w-full object-cover rounded"
      />
    </div>
    <div class="w-full">
      <h3
        class="mb-8 text-2xl text-center text-gray-900 font-cormorant tracking-wide uppercase "
      >
        {{name}}
      </h3>
      <div class="flex items-center justify-between w-full">
        <span
          class="text-base font-normal text-gray-900"
          style="letter-spacing: 1.12px"
          >{{price}}€</span
        >
        <button
          data-buy="{{id}}"
          class="rounded-lg bg-white p-2 transition hover:bg-gray-100"
          aria-label="Ajouter au panier"
        >
          <img src="/icon-shop.png" alt="Ajouter au panier" class="h-6 w-6" />
        </button>
      </div>
    </div>
  </article>
</a>`,he=function(e){return e?e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`:"/logo.png"};let X={html:function(e){let t='<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-items-center">';for(let n of e){const a={...n,image:he(n.image)};t+=M(ge,a)}return t+"</div>"},dom:function(e){return c(X.html(e))}},P={};P.login=async function(e,t){return await _("auth/login",{email:e,password:t})};P.Auth=async function(){return await w("auth")};P.logout=async function(){return await _("auth/logout",{})};let l={},u=[],j=null;async function Z(){if(j===null)try{const e=await P.Auth();e&&e.auth&&e.id?j=e.id:j="guest"}catch{j="guest"}return`cart_${j}`}async function y(){const e=await Z();let t=localStorage.getItem(e);t?u=JSON.parse(t):u=[]}async function R(){const e=await Z();localStorage.setItem(e,JSON.stringify(u))}async function ee(){await y(),console.log(" Calcul des totaux avec items:",u);let e=0;for(let a of u)console.log(`  Item: ${a.name} | Prix: ${a.price} | Qté: ${a.quantity} | Ligne: ${a.price*a.quantity}`),e+=a.price*a.quantity;let t=0,n=e+t;return console.log(`  💰 Sous-total: ${e} | Livraison: ${t} | TOTAL: ${n}`),{subtotal:e,shipping:t,total:n}}l.addItem=async function(e){await y();const t=u.find(n=>n.id===e.id);return t?t.quantity<5&&t.quantity++:u.push({id:e.id,name:e.name||"Produit",description:e.description||"",image:e.image||"default.png",price:e.price||0,quantity:1}),await R(),!0};l.updateQuantity=async function(e,t){await y(),console.log(` updateQuantity - ID: ${e}, Nouvelle quantité: ${t}`);let n=u.find(a=>a.id===e);n?(console.log(`  Avant: ${n.name} - Qté: ${n.quantity}`),n.quantity=parseInt(t),console.log(`  Après: ${n.name} - Qté: ${n.quantity}`),await R()):console.error(`  Item avec ID ${e} non trouvé!`)};l.removeItem=async function(e){await y(),u=u.filter(t=>t.id!==e),await R()};l.clear=async function(){u=[],await R()};l.clearCart=async function(){u=[],await R()};l.getItems=async function(){return await y(),u};l.getCart=async function(){return await y(),u};l.getItemCount=async function(){await y();let e=0;for(let t of u)e+=t.quantity;return e};l.getTotalItems=async function(){return await l.getItemCount()};l.getTotalPrice=async function(){return(await ee()).total};l.isEmpty=async function(){return await y(),u.length===0};l.removeProduct=async function(e){await y(),u=u.filter(t=>t.id!==e),await R()};l.getState=async function(){let e=await ee();return{items:u,itemCount:await l.getItemCount(),subtotal:e.subtotal,shipping:e.shipping,total:e.total,isEmpty:u.length===0}};const ye=`<div class="text-center">
  <h1 class="font-cormorant text-5xl md:text-5xl text-gray-900 mt-10 mb-6">
    Bonjour {{username}}
  </h1>

  <img 
    src="/bandeau.png" 
    alt="bandeau" 
    class="w-full mx-auto mb-8" 
  />

  <h1 class="font-cormorant text-5xl text-gray-900 my-10">
    Nos produits
  </h1>
  <h1 class="font-heebo">{{nombre}} produits</h1>
  <slot name="products"></slot>
</div>`;let E={products:[],user:null};const xe=function(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`/${e}`:"/placeholder.png"};let T={};T.handler_clickOnProduct=async function(e){let t=e.target.closest("[data-buy]");if(t){e.preventDefault(),e.stopPropagation();let n=t.dataset.buy,a=E.products.find(r=>r.id==n);a&&(await l.addItem({id:a.id,name:a.name,description:a.description||"",image:xe(a.image),price:parseFloat(a.price)||0}),alert(`✅ "${a.name}" ajouté au panier !`))}};T.init=async function(e){try{let t=await P.Auth();t&&t.auth===!0&&(E.user=t)}catch{console.log("Utilisateur non connecté")}return e?.id?E.products=await K.fetchByCategory(e.id):E.products=await B.fetchAll(),S.init(E.products)};let S={};S.init=function(e){let t=S.createPageFragment(e);return S.attachEvents(t),t};S.createPageFragment=function(e){let t=e.length,n=E.user?.username||"",a=M(ye,{username:n,nombre:t}),r=c(a),s=r.querySelector('slot[name="products"]');return s&&s.replaceWith(X.dom(e)),r};S.attachEvents=function(e){return e.firstElementChild.addEventListener("click",T.handler_clickOnProduct),e};function W(e){return T.init(e)}let z={},ve=[{id:1,name:"marteau1.png",product_id:1},{id:2,name:"marteau2.png",product_id:1},{id:3,name:"tournevis1.png",product_id:2},{id:4,name:"cle_molette1.png",product_id:3}];z.fetch=async function(e){let t=await w("productimages/"+e);return t==!1?[]:[t]};z.fetchAll=async function(){let e=await w("productimages");return e==!1?ve:e};const be=`<article class="min-h-screen py-24 px-12">
  <h1 class="text-5xl md:text-7xl font-cormorant tracking-[0.25em] text-black mb-20 uppercase">
    {{name}}
  </h1>

  <div class="mx-auto flex flex-col md:flex-row items-center justify-center gap-24 max-w-7xl">
    <!-- Image du produit -->
    <div class="md:w-1/2 flex justify-center">
      <img 
        id="main-image"
        src="{{image}}" 
        alt="{{name}}" 
        class="object-contain w-96 md:w-[28rem]"
      />
    </div>

    <!-- Contenu du produit -->
    <div class="md:w-1/2 text-center md:text-left text-black leading-relaxed">
      <p class="text-lg md:text-xl mb-8">
        {{description}}
      </p>

      <div class="space-y-3 text-base md:text-lg mb-8">
        <p><span >Allergènes :</span> {{allergens}}</p>
        <p><span >Valeur énergétique :</span> Environ {{calories}} kcal</p>
      </div>

      <p class="text-2xl mb-10 font-semibold">Prix : {{price}} €</p>

      <button 
        data-buy="{{id}}" 
        class="border border-black px-10 py-4 text-base tracking-wider font-heebo hover:opacity-35 transition-all duration-300"
      >
        AJOUTER AU PANIER
      </button>
    </div>
  </div>
</article>
`;let te={html:function(e){return M(be,e)},dom:function(e){return c(te.html(e))}};const we=`<div class="product-gallery grid grid-cols-4 gap-2 mt-4">
  {{gallery}}
</div>`;let Pe={dom:function(e){let t=we,n="";if(e.images&&e.images.length>0)for(let a of e.images)n+=`<img 
          src="${a.src}" 
          alt="Image ${a.id}" 
          class="gallery-image"
          data-image="${a.src}"
        >`;return t=t.replace("{{gallery}}",n),c(t)}};const ke=`<div class="p-6">
  <a
    href="#"
    id="btnRetour"
    class="inline-block mb-8 text-black hover:opacity-70 transition"
  >
    ← Retour
  </a>

  <div>
    <div>
      <slot name="detail"></slot>
    </div>
    <div class="product-gallery">
      <slot name="gallery"></slot>
    </div>
  </div>
</div>
`;let d={products:[],productImages:[],currentProduct:null};const ne=function(e){return e?e.startsWith("http://")||e.startsWith("https://")?e:`/${e}`:"/placeholder.png"};d.getProductById=function(e){return d.products.find(t=>t.id==e)};d.getImagesByProductId=function(e){let t=[];for(let n=0;n<d.productImages.length;n++){let a=d.productImages[n];a.product_id==e&&(a.src=ne(a.name),t.push(a))}return t};let x={};x.handler_clickOnProduct=async function(e){e.target.dataset.buy!==void 0&&(e.target.dataset.buy,d.currentProduct&&(await l.addItem({id:d.currentProduct.id,name:d.currentProduct.name,description:d.currentProduct.description||"",image:ne(d.currentProduct.image),price:parseFloat(d.currentProduct.price)||0}),alert(`✅ "${d.currentProduct.name}" ajouté au panier !`)))};x.handler_clickOnBack=function(e){e.preventDefault(),history.back()};x.handler_clickOnGalleryImage=function(e){if(e.target.classList.contains("gallery-image")){const t=document.querySelector("#main-image");t&&(t.src=e.target.dataset.image)}};x.init=async function(e){const t=e.id;d.products=await B.fetchAll(),d.productImages=await z.fetchAll();let n=d.getProductById(t);return n&&(n.images=d.getImagesByProductId(t),d.currentProduct=n),L.init(n)};let L={};L.init=function(e){let t=L.createPageFragment(e);return L.attachEvents(t),t};L.createPageFragment=function(e){let t=c(ke),n=te.dom(e),a=Pe.dom(e);const r=t.querySelector('slot[name="detail"]');r&&r.replaceWith(n);const s=t.querySelector('slot[name="gallery"]');return s&&s.replaceWith(a),t};L.attachEvents=function(e){e.querySelector("[data-buy]").addEventListener("click",x.handler_clickOnProduct);const n=e.querySelector("#btnRetour");n&&n.addEventListener("click",x.handler_clickOnBack);const a=e.querySelector(".product-gallery");return a&&a.addEventListener("click",x.handler_clickOnGalleryImage),e};function Ce(e){return console.log("ProductDetailPage",e),x.init(e)}const Ee=`<div class="max-w-sm mx-auto mt-20 p-6 bg-white rounded-none shadow-none border border-gray-200">
  <!-- Header Connexion / Inscription -->
  <div class="flex justify-center items-center space-x-3 mb-8">
    <a 
      class="text-gray-800 text-2xl font-medium hover:underline"
    >
      Inscription
    </a>
  </div>

  <!-- Sous-titre -->
  <p class="text-center text-gray-900 text-lg font-semibold mb-6">
    Saisis ton adresse e-mail
  </p>

  <div id="errorMessage" class="hidden bg-red-500 text-white p-3 rounded-md mb-5"></div>
  <div id="successMessage" class="hidden bg-green-500 text-white p-3 rounded-md mb-5"></div>

  <form id="userForm" class="space-y-4">
    <!-- Champ Email -->
    <div>
      <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="E-mail" 
        required
        class="w-full border border-gray-300 text-gray-800 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-none text-sm"
      >
    </div>

    <div>
      <input 
        type="username" 
        name="username" 
        id="username" 
        placeholder="Nom d'utilisateur" 
        required
        minlength="6"
        class="w-full border border-gray-300 text-gray-800 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-none text-sm"
      >
    </div>

    <!-- Champ Mot de passe -->
    <div>
      <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Mot de passe" 
        required
        minlength="6"
        class="w-full border border-gray-300 text-gray-800 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-none text-sm"
      >
    </div>

    <!-- Bouton -->
    <button 
      type="submit" 
      class="w-full border font-heebo text-base border-gray-800 text-gray-800 text-xs tracking-widest py-2 hover:opacity-35 transition-all duration-300"
    >
      CONTINUER
    </button>
  </form>
  <div class="text-center mt-6 text-gray-600">
        Déjà un compte ? 
        <a href="/login" data-link="" class="border-gray-800 hover:underline font-medium">
            Se connecter
        </a>
    </div>
</div>`;let ae={};ae.dom=function(){return c(Ee)};let C={},Se=[{id:1,email:"user1@example.com",username:"user1",password:"password1"},{id:2,email:"user2@example.com",username:"user2",password:"password2"},{id:3,email:"user3@example.com",username:"user3",password:"password3"},{id:4,email:"user4@example.com",username:"user4",password:"password4"}];C.fetch=async function(e){let t=await w("users/"+e);return t==!1?[]:[t]};C.fetchAll=async function(){let e=await w("users");return e==!1?Se:e};C.create=async function(e){return await _("users",e)};C.update=async function(e,t){return await me("users/"+e,t)};const Le=`<div class="signin-page">
    <slot name="userForm" id="userForm"></slot>
</div>`;let F={};F.handler_form=async function(e){e.preventDefault();let t=e.target,n=new FormData(t),a=n.get("email"),r=n.get("username"),s=n.get("password");const o=document.querySelector("#successMessage"),i=document.querySelector("#errorMessage");let g={email:a,username:r,password:s},k=await C.create(g);k&&k!==!1?(o&&(o.textContent=`Bienvenue ${r} ! Compte créé avec succès.`,o.classList.remove("hidden")),i&&i.classList.add("hidden"),t.reset(),setTimeout(()=>{window.router?window.router.navigate("/login"):window.location.hash="/login"},2e3)):(i&&(i.textContent="Cet email est déjà utilisé. Veuillez en choisir un autre.",i.classList.remove("hidden")),o&&o.classList.add("hidden"))};F.init=function(){return I.init()};let I={};I.init=function(){let e=I.createPageFragment();return I.attachEvents(e),e};I.createPageFragment=function(){let e=c(Le),t=ae.dom();const n=e.querySelector('slot[name="userForm"]');return n&&n.replaceWith(t),e};I.attachEvents=function(e){return e.querySelector("form").addEventListener("submit",F.handler_form),e};function Ie(){return F.init()}const qe=`<div>
  <!-- Messages de succès/erreur -->
  <div id="successMessage" class="hidden mb-4 p-3 bg-green-100 text-green-800 border border-green-300 rounded"></div>
  <div id="errorMessage" class="hidden mb-4 p-3 bg-red-100 text-red-800 border border-red-300 rounded"></div>

  <!-- Titre -->
  <h1 class="text-3xl md:text-4xl tracking-wide mb-10 font-cormorant text-gray-900">
    Données personnelles
  </h1>

  <!-- Formulaire -->
  <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Adresse mail -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Adresse mail</label>
      <input 
        type="email" 
        name="email"
        value="{{email}}"
        required
        class="w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none focus:border-gray-800"
      />
    </div>

    <!-- Nouveau mot de passe -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label>
      <input 
        type="password" 
        name="password"
        placeholder="Créer un nouveau mot de passe"
        class="w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none focus:border-gray-800"
      />
    </div>

    <!-- Username -->
    <div class="col-span-1 md:col-span-2">
      <label class="block text-sm font-medium text-gray-700 mb-2">Nom d'utilisateur *</label>
      <input 
        type="text" 
        name="username"
        value="{{username}}"
        required
        class="w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none focus:border-gray-800"
      />
    </div>

    <!-- Bouton -->
    <div class="col-span-1 md:col-span-2 mt-6">
      <button 
        type="submit" 
        class="w-full border text-base font-heebo border-gray-900 text-gray-900 font-medium tracking-wide py-2 hover:opacity-35 transition-all duration-300">
        ENREGISTRER
      </button>
    </div>
  </form>
</div>`;let re={html:function(e){return M(qe,e)},dom:function(e){return c(re.html(e))}};const $e=`<div class="p-12">
  <a
    href="#"
    id="btnRetour"
    class="inline-block mb-8 text-gray-900 hover:opacity-70 transition-opacity duration-200"
  >
    ← Retour
  </a>
  <slot name="updateForm" id="updateForm"></slot>
</div>`;let h={User:null},v={};v.handler_form=async function(e){e.preventDefault();let t=e.target,n=new FormData(t),a=n.get("email"),r=n.get("username"),s=n.get("password");console.log("👤 M.User:",h.User),console.log("🆔 ID utilisateur:",h.User?.id),console.log("📤 Données récupérées:",{email:a,username:r,password:s});const o=document.querySelector("#successMessage"),i=document.querySelector("#errorMessage");try{console.log("💾 Tentative de mise à jour du profil...");let g={email:a,username:r};s&&s.trim()!==""&&(g.password=s),console.log("📦 Données envoyées au serveur:",g);let k=await C.update(h.User.id,g);if(console.log("📦 Réponse du serveur:",k),k&&k.id){console.log("✅ Profil mis à jour avec succès"),h.User={...h.User,...g},o&&(o.textContent="Vos informations ont été mises à jour avec succès.",o.classList.remove("hidden")),i&&i.classList.add("hidden");let H=t.querySelector('[name="password"]');H&&(H.value=""),setTimeout(()=>{o&&o.classList.add("hidden")},5e3)}else console.log("❌ Échec de la mise à jour"),i&&(i.textContent=k?.error||"Une erreur est survenue lors de la mise à jour. Veuillez réessayer.",i.classList.remove("hidden")),o&&o.classList.add("hidden")}catch(g){console.error("💥 Erreur lors de la mise à jour :",g),i&&(i.textContent="Une erreur technique est survenue. Veuillez réessayer ultérieurement.",i.classList.remove("hidden")),o&&o.classList.add("hidden")}};v.handler_clickOnBack=function(e){e.preventDefault(),window.router?window.router.navigate("/"):window.history.back()};v.loadUserData=async function(){try{console.log("📥 Chargement des données utilisateur...");let e=await P.Auth();return console.log("🔍 authResult brut:",e),console.log("🔍 authResult.auth:",e?.auth),console.log("🔍 Type de authResult.auth:",typeof e?.auth),e&&e.auth===!0?(h.User=e,console.log("✅ Données utilisateur chargées:",h.User),h.User):(console.log("❌ Utilisateur non authentifié"),console.log("❌ Raison:",e?`authResult.auth = ${e.auth}`:"authResult null"),window.router&&window.router.navigate("/login"),null)}catch(e){return console.error("💥 Erreur lors du chargement des données:",e),null}};v.init=async function(){return await v.loadUserData(),q.init()};let q={};q.init=function(){let e=q.createPageFragment();return q.attachEvents(e),e};q.createPageFragment=function(){let e=c($e),t=re.dom({email:h.User?.email||"",username:h.User?.username||""});const n=e.querySelector('slot[name="updateForm"]');return n&&n.replaceWith(t),e};q.attachEvents=function(e){let t=e.querySelector("form");t&&t.addEventListener("submit",v.handler_form);const n=e.querySelector("#btnRetour");return n&&n.addEventListener("click",v.handler_clickOnBack),e};function Ae(){return v.init()}const Me=`<div class="max-w-sm mx-auto mt-20 p-6 bg-white rounded-none shadow-none border border-gray-200">
  <!-- Header Connexion / Inscription -->
  <div class="flex justify-center items-center space-x-3 mb-8">
    <a 
      class="text-gray-800 text-2xl font-medium hover:underline"
    >
      Connexion
    </a>
    
  </div>

  <!-- Sous-titre -->
  <p class="text-center text-gray-900 text-lg font-semibold mb-6">
    Saisis ton adresse e-mail
  </p>

  <div id="errorMessage" class="hidden bg-red-500 text-white p-3 rounded-md mb-5"></div>
  <div id="successMessage" class="hidden bg-green-500 text-white p-3 rounded-md mb-5"></div>

  <form id="userForm" class="space-y-4">
    <!-- Champ Email -->
    <div>
      <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="E-mail" 
        required
        class="w-full border border-gray-300 text-gray-800 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-none text-sm"
      >
    </div>

    <!-- Champ Mot de passe -->
    <div>
      <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Mot de passe" 
        required
        minlength="6"
        class="w-full border border-gray-300 text-gray-800 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-none text-sm"
      >
    </div>

    <!-- Bouton -->
    <button 
      type="submit" 
      class="w-full border text-base font-heebo border-gray-800 text-gray-800 tracking-widest py-2 hover:bg-gray-100 transition"
    >
      CONTINUER
    </button>
  </form>
  <div class="text-center mt-6 text-gray-600">
        Déjà un compte ? 
        <a href="/signup" data-link="" class="border-gray-800 hover:underline font-medium">
            S'inscrire
        </a>
    </div>
</div>
`;let se={};se.dom=function(){return c(Me)};const Re=`<div class="signin-page">
    <slot name="userForm" id="userForm"></slot>
</div>`;let je={User:null},U={};U.handler_form=async function(e){e.preventDefault();let t=e.target,n=new FormData(t),a=n.get("email"),r=n.get("password");const s=document.querySelector("#successMessage"),o=document.querySelector("#errorMessage");try{console.log("🔐 Tentative de connexion...");let i=await P.login(a,r);console.log("📦 Réponse reçue:",i),i&&i.id?(console.log("✅ Utilisateur authentifié:",i.email),je.User=i,s&&(s.textContent=`Connexion réussie ! Bienvenue ${i.email}`,s.classList.remove("hidden")),o&&o.classList.add("hidden"),setTimeout(()=>{console.log("🚀 Mise à jour auth et redirection..."),window.router?(window.router.setAuth(!0),window.router.navigate("/profile"),console.log("✅ Navigate appelé")):console.error("❌ window.router n'existe pas !")},500)):(console.log("❌ Échec authentification"),o&&(o.textContent=i?.error||"Email ou mot de passe incorrect.",o.classList.remove("hidden")),s&&s.classList.add("hidden"))}catch(i){console.error("💥 Erreur lors de la connexion :",i),o&&(o.textContent="Une erreur est survenue. Veuillez réessayer.",o.classList.remove("hidden"))}};U.init=function(){return $.init()};let $={};$.init=function(){let e=$.createPageFragment();return $.attachEvents(e),e};$.createPageFragment=function(){let e=c(Re),t=se.dom();const n=e.querySelector('slot[name="userForm"]');return n&&n.replaceWith(t),e};$.attachEvents=function(e){let t=e.querySelector("form");return t&&t.addEventListener("submit",U.handler_form),e};function De(){return U.init()}const Be=`
<div class="bg-[#fcfcfc] text-gray-800 min-h-screen flex flex-col items-center pt-20">

  <!-- En-tête utilisateur -->
  <header class="text-center mb-12">
    <h1 class="text-2xl font-semibold">Bonjour</h1>
  </header>

  <!-- Liens principaux -->
  <main class="w-full max-w-md flex flex-col items-start space-y-6 px-6">
    <!-- Mes achats -->
    <a href="#" data-link class="w-full flex items-center justify-between border-b border-gray-200 pb-4 hover:bg-gray-50 transition">
      <div class="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18m-9 5h9" />
        </svg>
        <span class="text-lg">Mes achats</span>
      </div>
      <span class="text-2xl text-gray-400">&rsaquo;</span>
    </a>

    <!-- Données personnelles -->
    <a href="/data" class="w-full flex items-center justify-between border-b border-gray-200 pb-4 hover:bg-gray-50 transition">
      <div class="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-3.33 0-6 2.67-6 6h12c0-3.33-2.67-6-6-6z" />
        </svg>
        <span class="text-lg">Données personnelles</span>
      </div>
      <span class="text-2xl text-gray-400">&rsaquo;</span>
    </a>
  </main>

  <!-- Bouton déconnexion -->
  <footer class="mt-12 w-full max-w-md px-6">
    <button type="button" class="w-full border border-gray-400 rounded-md py-3 text-gray-600 hover:bg-gray-100 transition">
      Se déconnecter
    </button>
  </footer>

  <!-- Bouton de fermeture (optionnel, coin haut droit) -->
  <button href="/" data-link class="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-3xl font-light">&times;</button>

</div>

`;let oe={};oe.dom=function(){return c(Be)};const Te=`<div class="profile-page">
    <slot name="profile" id="profile"></slot>
</div>`;let O={};O.handler_clickOnLogout=async function(e){e.preventDefault(),console.log("Déconnexion..."),await C.logout(),window.router&&window.router.setAuth(!1),setTimeout(()=>{window.router?window.router.navigate("/login"):window.location.hash="/login"},100)};O.init=function(){return A.init()};let A={};A.init=function(){let e=A.createPageFragment();return A.attachEvents(e),e};A.createPageFragment=function(){let e=c(Te),t=oe.dom();const n=e.querySelector('slot[name="profile"]');return n&&n.replaceWith(t),e};A.attachEvents=function(e){let t=e.querySelector('button[type="button"]');return t&&t.addEventListener("click",O.handler_clickOnLogout),e};function Fe(){return O.init()}const Ue=`        
<div id="cart-container" class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
    <!-- Header -->
    <div id="cart-header" class="flex justify-between items-center mb-8">
        <h2 class="text-5xl font-cormorant leading-none">Panier</h2>
        <button class="text-gray-500 hover:text-gray-800 text-3xl leading-none">
            &times;
        </button>
    </div>

    <!-- Le contenu du panier (items + total + bouton) sera injecté ici -->
    <slot name="cart-items" class="space-y-6"></slot>
</div>`,ie=`<div class="text-center py-8">
  <p class="text-gray-500 text-lg mb-4">Votre panier est vide</p>
  <a href="/products" data-link class="inline-block bg-gray-900 text-white px-6 py-2 hover:bg-gray-700 transition">
    Découvrir nos produits
  </a>
</div>
`,Oe=`<div class="space-y-6 mb-6">
  <slot name="items"></slot>
</div>

<div class="flex justify-between items-center mt-6 pt-4">
  <p class="text-gray-600">
    Total <span class="text-sm text-gray-400">TVA comprise</span>
  </p>
  <p class="text-lg font-semibold">{{priceTotal}}€</p>
</div>
`,Ne=`<div class="border-b pb-5">
  <div class="flex gap-4">
    <div class="w-28 h-28 flex items-center justify-center">
      <img
        src="{{image}}"
        alt="{{name}}"
        class="object-cover w-full h-full"
      />
    </div>

    <div class="flex-1">
      <h3 class="text-lg font-heebo">{{name}}</h3>
      <p class="text-gray-700 mb-3">{{unitPrice}}€ / unité</p>

      <div class="flex items-center gap-3">
        <!-- Sélecteur de quantité -->
        <div class="flex items-center border rounded text-sm">
          <button 
            data-decrease="{{id}}"
            class="px-2 text-gray-600 hover:text-black"
          >
            −
          </button>
          <input  
            min="1" 
            max="99"
            value="{{quantity}}" 
            data-qty="{{id}}"
            class="w-12 text-center border-0 focus:outline-none"
          >
          <button 
            data-increase="{{id}}"
            class="px-2 text-gray-600 hover:text-black"
          >
            +
          </button>
        </div>

        <!-- Sous-total -->
        <p class="text-gray-700 font-semibold ml-4">{{lineTotal}}€</p>

        <div class="flex items-center gap-2 text-gray-500 ml-auto">
          <!-- Bouton supprimer -->
          <button 
            data-remove="{{id}}"
            class="hover:text-red-600" 
            aria-label="Supprimer"
            title="Supprimer cet article"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;let b={cart:[]},f={};f.handleQuantityChange=async function(e){const t=e.target;if(!t.dataset.qty)return;const n=parseInt(t.dataset.qty),a=parseInt(t.value);a>0&&(await l.updateQuantity(n,a),await m.refreshCartContent())};f.handleIncrease=async function(e){const t=e.target.closest("button[data-increase]");if(!t)return;const n=parseInt(t.dataset.increase),a=b.cart.find(r=>r.id===n);a&&(await l.updateQuantity(n,a.quantity+1),await m.refreshCartContent())};f.handleDecrease=async function(e){const t=e.target.closest("button[data-decrease]");if(!t)return;const n=parseInt(t.dataset.decrease),a=b.cart.find(r=>r.id===n);a&&a.quantity>1&&(await l.updateQuantity(n,a.quantity-1),await m.refreshCartContent())};f.handleRemoveItem=async function(e){console.log("handleRemoveItem appelé",e.target);const t=e.target.closest("button[data-remove]");if(console.log("Bouton trouvé:",t),!t)return;const n=parseInt(t.dataset.remove);console.log("ID produit à supprimer:",n),confirm("Voulez-vous retirer cet article du panier ?")&&(await l.removeProduct(n),await m.refreshCartContent())};f.handleClose=function(e){e.preventDefault(),window.router&&window.router.navigate("/products")};f.handlePayment=async function(e){if(e.preventDefault(),b.cart.length===0){alert("Votre panier est vide");return}const t=await l.getTotalPrice();alert(`Paiement de ${t.toFixed(2)}€ en cours...`)};f.init=async function(){return b.cart=await l.getCart(),await m.init()};let m={};m.init=async function(){const e=c(Ue),t=e.querySelector('slot[name="cart-items"]');if(!t)return e;if(b.cart.length===0)t.replaceWith(c(ie));else{const n=await m.createCartContent();t.replaceWith(n)}return m.attachEvents(e),e};m.createCartContent=async function(){const e=(await l.getTotalPrice()).toFixed(2);let t=Oe;t=t.replaceAll("{{priceTotal}}",e);const n=c(t),a=n.querySelector('slot[name="items"]');if(a){const r=m.createItemsList();a.replaceWith(r)}return n};m.createItemsList=function(){const e=document.createDocumentFragment();return b.cart.forEach(t=>{const n=m.createItemDOM(t);e.appendChild(n)}),e};m.createItemDOM=function(e){let t=Ne;t=t.replaceAll("{{id}}",e.id),t=t.replaceAll("{{image}}",e.image||"/placeholder.png"),t=t.replaceAll("{{name}}",e.name),t=t.replaceAll("{{unitPrice}}",e.price.toFixed(2)),t=t.replaceAll("{{quantity}}",e.quantity);const n=(e.price*e.quantity).toFixed(2);return t=t.replaceAll("{{lineTotal}}",n),c(t).firstElementChild};m.attachEvents=function(e){e.querySelectorAll("input[data-qty]").forEach(i=>{i.addEventListener("input",f.handleQuantityChange),i.addEventListener("change",f.handleQuantityChange)}),e.querySelectorAll("button[data-increase]").forEach(i=>{i.addEventListener("click",f.handleIncrease)}),e.querySelectorAll("button[data-decrease]").forEach(i=>{i.addEventListener("click",f.handleDecrease)});const r=e.querySelectorAll("button[data-remove]");console.log("Boutons de suppression trouvés:",r.length),r.forEach(i=>{i.addEventListener("click",f.handleRemoveItem)});const s=e.querySelector("button.text-3xl");s&&s.addEventListener("click",f.handleClose),e.querySelectorAll("button").forEach(i=>{i.textContent.trim()==="PAYER"&&i.addEventListener("click",f.handlePayment)})};m.refreshCartContent=async function(){b.cart=await l.getCart();const e=document.getElementById("cart-container");if(!e){console.error("Conteneur du panier non trouvé");return}const t=document.getElementById("cart-header");if(!t){console.error("Header du panier non trouvé");return}let n=t.nextElementSibling;for(;n;){const a=n;n=n.nextElementSibling,a.remove()}if(b.cart.length===0){const a=c(ie);e.appendChild(a)}else{const a=await m.createCartContent();e.appendChild(a),m.attachEvents(e)}};function Ve(){return f.init()}const _e=`<div style="min-height: 100vh; display: flex; flex-direction: column;">
    <slot name="header"></slot>
    <main style="flex: 1;">
        <slot></slot>
    </main>
    <slot name="footer"></slot>
</div>
    `,We=`<nav class="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 xl:gap-12">
  <a
    href="/products/categories/1"
    data-link
    class="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300 "
  >
    NOS PAINS
  </a>
  <a
    href="/products/categories/2"
    data-link
    class="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300 "
  >
    NOS DESSERTS
  </a>
  <a
    href="/products/categories/3"
    data-link
    class="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300 "
  >
    NOS BOISSONS
  </a>
</nav>
`;let D={html:function(e){return M(We,e)},dom:function(e){return c(D.html(e))}};const Q=`<header class="relative bg-white shadow-sm">
  <div class="flex items-center justify-between px-4 py-4 md:px-8">
    <!-- Logo Section -->
    <div class="flex items-center">
      <a href="/" data-link class="w-16 h-20 md:w-[90px] md:h-[126px]">
        <img
          src="/logo.png"
          alt="Logo"
          class="w-full h-full object-cover"
        />
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex items-center gap-8 xl:gap-12">
      <a
        href="/products"
        data-link
        class="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300"
      >
        NOS PRODUITS
      </a>
      <slot name="categories-nav"></slot>
    </nav>

    <!-- Icons Section -->
    <div class="flex items-center gap-4 md:gap-6">
      <!-- User Icon -->
      <a href="/login" data-link class="hover:opacity-70 transition-opacity duration-300">
        <img src="/icon-user.png" alt="Compte utilisateur" class="w-5 h-5 md:w-6 md:h-6" />
      </a>

      <!-- Basket Icon -->
      <a href="/cart" data-link class="hover:opacity-70 transition-opacity duration-300">
        <img src="/icon-shop.png" alt="Panier" class="w-5 h-5 md:w-6 md:h-6" />
      </a>

      <!-- Burger Menu Button (Mobile) -->
      <button 
        id="burger-menu-btn"
        class="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Menu"
      >
        <span class="block w-6 h-0.5 bg-black transition-all duration-300"></span>
        <span class="block w-6 h-0.5 bg-black transition-all duration-300"></span>
        <span class="block w-6 h-0.5 bg-black transition-all duration-300"></span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <nav 
    id="mobile-menu"
    class="hidden lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 transition-all duration-300"
  >
    <div class="flex flex-col px-4 py-6 space-y-4">
      <a
        href="/products"
        data-link
        class="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300 py-2"
      >
        NOS PRODUITS
      </a>
      <slot name="categories-nav-mobile"></slot>
    </div>
  </nav>
</header>



`;let ze={html(){let e=D.html();return console.log(e),Q.replace('<slot name="categories-nav"></slot>',e)},dom(){let e=c(Q),t=e.querySelector('slot[name="categories-nav"]');t&&t.replaceWith(D.dom());let n=e.querySelector('slot[name="categories-nav-mobile"]');return n&&n.replaceWith(D.dom()),setTimeout(()=>{const a=document.getElementById("burger-menu-btn"),r=document.getElementById("mobile-menu");a&&(a.onclick=()=>{r.classList.toggle("hidden");const s=a.querySelectorAll("span"),o=!r.classList.contains("hidden");s[0].style.transform=o?"rotate(45deg) translate(5px, 7px)":"none",s[1].style.opacity=o?"0":"1",s[2].style.transform=o?"rotate(-45deg) translate(5px, -7px)":"none"})},100),e}};const He=`<footer class="bg-white px-4 md:px-9 py-12 md:py-16 box-border" style="font-family: 'Heebo', sans-serif;">
        <div class="flex flex-col gap-12 items-center max-w-[1200px] mx-auto w-full">

            <!-- Top Section -->
            <div class="flex flex-col md:flex-row items-start md:items-start justify-between gap-8 md:gap-40 w-full">

                <!-- Logo -->
                <div class="w-28 h-32 md:w-[117px] md:h-[163px] shrink-0 flex-shrink-0">
                    <img src="/logo.png" alt="Feuillette Logo" class="w-full h-auto object-cover">
                </div>

                <!-- Links Columns -->
                <div class="flex flex-col md:flex-row gap-6 md:gap-16 items-start w-full md:w-auto text-black">
                    <!-- Column 1 -->
                    <div class="flex flex-col items-start gap-2">
                        <a href="/politique-confidentialite" class="hover:opacity-70 transition">Politique De
                            Confidentialité</a>
                        <a href="/cookies" class="hover:opacity-70 transition">Préférence Cookies</a>
                        <a href="/mentions-legales" class="hover:opacity-70 transition">Mentions Légales</a>
                        <a href="/faq" class="hover:opacity-70 transition">FAQ</a>
                    </div>

                    <!-- Column 2 -->
                    <div class="flex flex-col items-start gap-2">
                        <a href="/emploi" class="hover:opacity-70 transition">Offres d'Emploi</a>
                        <a href="/fidelite" class="hover:opacity-70 transition">Programme De Fidélité</a>
                        <a href="/cgv-fidelite" class="hover:opacity-70 transition">CGV Programme De Fidélité</a>
                        <a href="/presse" class="hover:opacity-70 transition">Contacts Presse Agence Match</a>
                    </div>
                </div>

                <!-- Newsletter Section -->
                <div class="flex flex-col gap-4 items-start w-full md:w-[250px]">
                    <h3 class="text-black text-xl md:text-[23px] tracking-[0.69px] font-semibold">Newsletter</h3>
                    <p class="text-black text-xs md:text-sm">Inscrivez-vous pour recevoir nos offres</p>

                    <!-- Input + Bouton avec icône -->
                    <div
                        class="flex flex-col md:flex-row items-stretch md:items-center justify-between w-full border border-[#716559] px-1 py-2 gap-2 md:gap-0">
                        <input type="email" placeholder="Votre email"
                            class="text-[#716559] text-xs md:text-sm tracking-[-0.6px] bg-transparent border-none outline-none flex-1"
                            style="font-family: 'Inter', sans-serif; font-weight: 500;">
                        <button class="w-10 h-8 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center"
                            aria-label="S'inscrire à la newsletter">
                            <img src="/letter.png" alt="Arrow" class="w-full h-full object-contain">
                        </button>
                    </div>


                    <!-- Social Icons -->
                    <div class="w-28 h-4 mt-4">
                        <img src="/social-icons.png" alt="Réseaux sociaux" class="w-full h-full">
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="flex flex-col gap-4 items-center w-full text-center text-black">
                <p class="text-xs md:text-[10px] font-medium">© 2024 Feuillette, Tous Droits réservés</p>
                <p class="text-xs md:text-[10px] font-medium">Retrouvez les enseignes du Groupe Feuillette</p>

                <!-- Brand Logos -->
                <div class="flex flex-col items-center justify-center w-full mt-4">
                    <!-- Logos Row -->
                    <div class="flex flex-wrap gap-4 md:gap-8 items-center justify-center mb-3">
                        <img src="/fredelian-ferret.png" alt="Frédélian Ferret" class="w-16 h-9 object-cover">
                        <img src="/cafe-feuillette.png" alt="Café Feuillette" class="w-20 h-8 object-cover">
                        <img src="/chez-lucette.png" alt="Chez Lucette" class="w-18 h-9 object-cover">
                        <img src="/epicerie-feuillette.png" alt="Épicerie Feuillette" class="w-12 h-10 object-cover">
                    </div>

                    <!-- Brand Names Row -->
                    <div
                        class="flex flex-wrap gap-4 md:gap-9 items-center justify-center text-xs md:text-[10px] font-medium">
                        <span>Frédélian Ferret</span>
                        <span>Café Feuillette</span>
                        <span>Chez Lucette</span>
                        <span>Épicerie Feuillette</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;let le={html:function(e){return M(He,e)},dom:function(e){return c(le.html(e))}};function Qe(){let e=c(_e),t=ze.dom(),n=le.dom();return e.querySelector('slot[name="header"]').replaceWith(t),e.querySelector('slot[name="footer"]').replaceWith(n),e}const Ge=` <section>
    <h1>404 - Page non trouvée</h1>
        <p>Cette page n'existe pas</p>
    <nav>
        <a href="/" data-link>Retour à l'accueil</a>
    </nav>
</section>`;function Je(){return Ge}const p=new ce("app",{loginPath:"/login",basePath:"/Site-commerce/"});window.router=p;const G=await P.Auth();G&&G.auth?p.setAuth(!0):p.setAuth(!1);p.addLayout("/",Qe);p.addRoute("/",W);p.addRoute("/about",de);p.addRoute("/products",W);p.addRoute("/login",De,{useLayout:!1});p.addRoute("/data",Ae,{useLayout:!1});p.addRoute("/cart",Ve,{requireAuth:!0});p.addRoute("/signup",Ie,{useLayout:!1});p.addRoute("/products/categories/:id",W);p.addRoute("/profile",Fe,{requireAuth:!0});p.addRoute("/products/:id/:slug",Ce);p.addRoute("*",Je);p.start();
