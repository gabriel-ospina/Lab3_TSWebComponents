import * as components from "./components/indexComponents.js"
import myHeader, { HeaderAttribute } from "./components/header/header.js"

class AppContainer extends HTMLElement {
    header: myHeader;

    constructor(){
        super();
        this.attachShadow({ mode: "open"})

    
        const headersec = this.ownerDocument.createElement("my-header") as myHeader;
            headersec.setAttribute(HeaderAttribute.logoicon, "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png");
            // headersec.setAttribute(HeaderAttribute.search, "");
            // headersec.setAttribute(HeaderAttribute.categ, "");
            // headersec.setAttribute(HeaderAttribute.supp, "");
            // headersec.setAttribute(HeaderAttribute.wish, "");
            // headersec.setAttribute(HeaderAttribute.cart, "");
            // headersec.setAttribute(HeaderAttribute.login, "");
            // headersec.setAttribute(HeaderAttribute.store, "");
            // headersec.setAttribute(HeaderAttribute.games, "");
            // headersec.setAttribute(HeaderAttribute.switch, "");
            // headersec.setAttribute(HeaderAttribute.news, "");
            // headersec.setAttribute(HeaderAttribute.play, "");
            this.header= headersec;
        
    };

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
            //alert(JSON.stringify(this.header.join(""),null,3));
            //alert(this.header.join(""));
            this.shadowRoot.innerHTML=`<link rel="stylesheet" href="../app/app.css">`;

            const oSec= this.ownerDocument.createElement("section");

            oSec.appendChild(this.header);
            this.shadowRoot.appendChild(oSec);



            // <section>
            // <my-header>
            // ${this.header.join("")}
            // </my-header>
            // </section>
        }
    }
}

customElements.define("app-container", AppContainer)