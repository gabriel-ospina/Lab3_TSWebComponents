import * as components from "./components/indexComponents.js"
import myHeader, { HeaderAttribute } from "./components/header/header.js"
import Banner, { BannerAttribute } from "./components/banner/banner.js"
import MainSec, { MainSecAttribute } from "./components/mainSection/mainSection.js";

import dataMainSec from "./Data/DataMainSection.js";

class AppContainer extends HTMLElement {
    header: myHeader;
    banner: Banner;
    mainsections: MainSec []=[];

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

        const bannersec = this.ownerDocument.createElement("my-banner") as Banner;
            bannersec.setAttribute(BannerAttribute.image, "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop");
            bannersec.setAttribute(BannerAttribute.text, "Bayonetta Origins: Cereza and the Lost Demon™");
            bannersec.setAttribute(BannerAttribute.ageclass, "https://www.esrb.org/wp-content/uploads/2019/05/T.svg");
            this.banner= bannersec
        
        dataMainSec.forEach((mainsec) => {
            const maincard = this.ownerDocument.createElement("main-section") as MainSec;
                maincard.setAttribute(MainSecAttribute.titlesec, mainsec.titlesec);
                maincard.setAttribute(MainSecAttribute.image, mainsec.image);
                maincard.setAttribute(MainSecAttribute.text, mainsec.text);
                maincard.setAttribute(MainSecAttribute.label, mainsec.label);
                this.mainsections.push(maincard);
        })
    };

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
            //alert(JSON.stringify(this.header.join(""),null,3));
            //alert(this.banner);
            this.shadowRoot.innerHTML=`<link rel="stylesheet" href="../app/app.css">`;

            const headerSec= this.ownerDocument.createElement("section");
            headerSec.appendChild(this.header);
            this.shadowRoot.appendChild(headerSec);

            
            const bannerSec=this.ownerDocument.createElement("section");
            bannerSec.appendChild(this.banner);
            this.shadowRoot.appendChild(bannerSec);

            const firstMainSec=this.ownerDocument.createElement("section");
            firstMainSec.appendChild(this.mainsections[0]);
            this.shadowRoot.appendChild(firstMainSec);
            
            const secondMainSec=this.ownerDocument.createElement("section");
            secondMainSec.appendChild(this.mainsections[1])
            secondMainSec.appendChild(this.mainsections[2])
            this.shadowRoot.appendChild(secondMainSec)
            

        }
    }
}

customElements.define("app-container", AppContainer)