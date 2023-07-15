(()=>{"use strict";function e(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","content-container");const n=document.createElement("div");n.setAttribute("id","main-headline");const a=document.createTextNode("Le Macaron Magnifique"),i=document.createElement("div");i.setAttribute("id","main-text");const c=document.createTextNode("Indulge in Parisian perfection at our bakery, where every bite is a journey of bliss. From classic raspberry to innovative lavender-infused macarons, experience a symphony of flavors and colors. Elevate your dessert game with our heavenly treats and discover the artistry of macarons at Le Macaron Magnifique.");n.appendChild(a),i.appendChild(c),t.appendChild(n),t.appendChild(i),e.appendChild(t)}const t=[{name:"Citrus Bliss",description:"Experience the vibrant burst of citrus with our orange macaron. Tangy orange-infused shell meets a smooth, refreshing orange cream filling for a delightful treat.",image:"citrus.jpg"},{name:"Pistachio Dream",description:"A heavenly combination of ground pistachios, folded into the macaron batter, resulting in a subtly nutty and rich flavor. The filling boasts a luscious pistachio ganache for an indulgent experience.",image:"pistachio.jpg"},{name:"Lemon Lavender Zest",description:"A delightful marriage of zesty lemon and soothing lavender. The macaron shell is infused with a hint of lavender, and the tangy lemon buttercream center provides a refreshing burst of citrus.",image:"lemon.jpg"},{name:"Salted Caramel Crunch",description:"A perfect balance of sweet and salty. The macaron shell is studded with caramelized sugar for a satisfying crunch, while the luxurious salted caramel filling adds a delightful creamy finish.",image:"caramel.jpg"},{name:"Chocolate Mint",description:"A classic combination that never disappoints. The macaron shell is infused with a touch of peppermint, and the decadent chocolate ganache filling brings a rich and refreshing twist to this timeless flavor.",image:"chocolate.jpg"}];function n(n){"Home"==n.target.innerText?e():"Menu"==n.target.innerText?function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("div");n.setAttribute("id","content-container-menu");const a=document.createElement("div");a.setAttribute("id","menu-headline");const i=document.createTextNode("Flavors");a.appendChild(i);const c=document.createElement("div");c.setAttribute("id","menu-text"),t.forEach((function(e){const t=document.createElement("div");t.setAttribute("class","flavor-card");const n=document.createElement("div");n.setAttribute("class","flavor-image-container");const a=document.createElement("img");a.setAttribute("src",`./img/${e.image}`),a.setAttribute("class","flavor-image");const i=document.createElement("div");i.setAttribute("class","flavor-title"),i.innerText=e.name;const o=document.createElement("div");o.setAttribute("class","flavor-description"),o.innerText=e.description,n.appendChild(a),t.appendChild(n),t.appendChild(i),t.appendChild(o),c.appendChild(t)})),n.appendChild(a),n.appendChild(c),e.appendChild(n)}():function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","content-container");const n=document.createElement("div");n.setAttribute("id","contact-headline");const a=document.createTextNode("Contact Us"),i=document.createElement("div");i.setAttribute("id","contact-text");const c=document.createElement("span");c.setAttribute("class","label"),c.innerText="Phone: ";const o=document.createElement("p");o.setAttribute("class","contact-info"),o.innerText="555-555-5555";const r=document.createElement("span");r.setAttribute("class","label"),r.innerText="Email: ";const s=document.createElement("p");s.setAttribute("class","contact-info"),s.innerText="hello@leemacaronmagnifique.com";const d=document.createElement("span");d.setAttribute("class","label"),d.innerText="Address: ";const l=document.createElement("p");s.setAttribute("class","contact-info"),l.innerText="555 Main Street, Anytown, USA",n.appendChild(a),i.appendChild(c),i.appendChild(o),i.appendChild(r),i.appendChild(s),i.appendChild(d),i.appendChild(l),t.appendChild(n),t.appendChild(i),e.appendChild(t)}()}!function(){const e=document.getElementById("nav"),t=document.createElement("div");t.setAttribute("id","nav-container"),["Home","Menu","Contact"].forEach((function(e){const a=document.createElement("button");a.setAttribute("class","nav-button"),a.innerText=e,t.appendChild(a),a.addEventListener("click",n)})),e.appendChild(t)}(),e()})();