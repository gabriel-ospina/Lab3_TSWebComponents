import * as components from "./components/indexComponents.js"
import myHeader, { HeaderAttribute } from "./components/header/header.js"
import Banner, { BannerAttribute } from "./components/banner/banner.js"
import MainSec, { MainSecAttribute } from "./components/mainSection/mainSection.js";
import OtherFeatures, { OtherFeatAttribute } from "./components/otherFeatures/otherFeatures.js";
import MainNews, { MainNewsAttribute } from "./components/mainNews/mainNews.js";
import OtherNews, { OtherNewsAttribute } from "./components/otherNews/otherNews.js";


import dataMainSec from "./Data/DataMainSection.js";
import dataOtherFeatures from "./Data/DataOtherFeatures.js";
import dataMainNews from "./Data/DataMainNews.js";
import dataOtherNews from "./Data/DataOtherNews.js";
class AppContainer extends HTMLElement {
    header: myHeader;
    banner: Banner;
    mainsections: MainSec []=[];
    otherfeats: OtherFeatures []=[];
    mainnews: MainNews []=[];
    othernews: OtherNews []= [];

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

        dataOtherFeatures.forEach((otherfeat) => {
            const featcard = this.ownerDocument.createElement("other-feat") as OtherFeatures;
                featcard.setAttribute(OtherFeatAttribute.image, otherfeat.image);
                featcard.setAttribute(OtherFeatAttribute.tittle, otherfeat.tittle);
                featcard.setAttribute(OtherFeatAttribute.text, otherfeat.text);
                this.otherfeats.push(featcard);
        })
        
        dataMainNews.forEach((mainnew) => {
            const mainnewcard = this.ownerDocument.createElement("main-news") as MainNews;
                mainnewcard.setAttribute(MainNewsAttribute.image, mainnew.image);
                mainnewcard.setAttribute(MainNewsAttribute.tittle, mainnew.tittle);
                mainnewcard.setAttribute(MainNewsAttribute.text, mainnew.text);
                mainnewcard.setAttribute(MainNewsAttribute.date, mainnew.date);
                this.mainnews.push(mainnewcard);
        })
        
        dataOtherNews.forEach((othernew) => {
            const othernewcard = this.ownerDocument.createElement("other-news") as OtherNews;
                othernewcard.setAttribute(OtherNewsAttribute.image, othernew.image);
                othernewcard.setAttribute(OtherNewsAttribute.tittle, othernew.tittle);
                othernewcard.setAttribute(OtherNewsAttribute.date, othernew.date);
                this.othernews.push(othernewcard);
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

            const featSec=this.ownerDocument.createElement("section");
            this.otherfeats.forEach((ofeat) => {
                featSec.appendChild(ofeat);
                this.shadowRoot?.appendChild(featSec);
            })
            
            const secondMainSec=this.ownerDocument.createElement("section");
            secondMainSec.appendChild(this.mainsections[1]);
            secondMainSec.appendChild(this.mainsections[2]);
            this.shadowRoot.appendChild(secondMainSec);

            const newsTitleSec=this.ownerDocument.createElement("h1");
            const newsTitile= this.ownerDocument.createTextNode("News");
            newsTitleSec.appendChild(newsTitile);
            this.shadowRoot.appendChild(newsTitleSec);

            const mainNewsSec=this.ownerDocument.createElement("section");
            this.mainnews.forEach((mnew) => {
                mainNewsSec.appendChild(mnew);
                this.shadowRoot?.appendChild(mainNewsSec);
            })
            
            const otherNewsSec=this.ownerDocument.createElement("section");
            this.othernews.forEach((onew) => {
                otherNewsSec.appendChild(onew);
                this.shadowRoot?.appendChild(otherNewsSec);
            })

            const characTitleSec=this.ownerDocument.createElement("h1");
            const characTitle= this.ownerDocument.createTextNode("Characters");
            characTitleSec.appendChild(characTitle);
            this.shadowRoot.appendChild(characTitleSec);
            
            const digBSTitleSec=this.ownerDocument.createElement("h1");
            const digBSTitile= this.ownerDocument.createTextNode("Digital best sellers");
            digBSTitleSec.appendChild(digBSTitile);
            this.shadowRoot.appendChild(digBSTitleSec);
            
            const digNewRelTitleSec=this.ownerDocument.createElement("h1");
            const digNewRelTitile= this.ownerDocument.createTextNode("Digital new realease");
            digNewRelTitleSec.appendChild(digNewRelTitile);
            this.shadowRoot.appendChild(digNewRelTitleSec);
            
        }
    }
}

customElements.define("app-container", AppContainer)