import { BannerAttribute } from "./components/banner/banner.js";
import { MainSecAttribute } from "./components/mainSection/mainSection.js";
import { OtherFeatAttribute } from "./components/otherFeatures/otherFeatures.js";
import { MainNewsAttribute } from "./components/mainNews/mainNews.js";
import { OtherNewsAttribute } from "./components/otherNews/otherNews.js";
import { CharacCardsAttribute } from "./components/characters/characters.js";
import { GamesAttribute } from "./components/games/Games.js";
import dataMainSec from "./Data/DataMainSection.js";
import dataOtherFeatures from "./Data/DataOtherFeatures.js";
import dataMainNews from "./Data/DataMainNews.js";
import dataOtherNews from "./Data/DataOtherNews.js";
import dataCharacCards from "./Data/DataCharacterCards.js";
import dataGames from "./Data/DataGames.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.mainsections = [];
        this.otherfeats = [];
        this.mainnews = [];
        this.othernews = [];
        this.charcards = [];
        this.games = [];
        this.attachShadow({ mode: "open" });
        const bannersec = this.ownerDocument.createElement("my-banner");
        bannersec.setAttribute(BannerAttribute.image, "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop");
        bannersec.setAttribute(BannerAttribute.text, "Bayonetta Origins: Cereza and the Lost Demon™");
        bannersec.setAttribute(BannerAttribute.ageclass, "https://www.esrb.org/wp-content/uploads/2019/05/T.svg");
        this.banner = bannersec;
        dataMainSec.forEach((mainsec) => {
            const maincard = this.ownerDocument.createElement("main-section");
            maincard.setAttribute(MainSecAttribute.titlesec, mainsec.titlesec);
            maincard.setAttribute(MainSecAttribute.image, mainsec.image);
            maincard.setAttribute(MainSecAttribute.text, mainsec.text);
            maincard.setAttribute(MainSecAttribute.label, mainsec.label);
            this.mainsections.push(maincard);
        });
        dataOtherFeatures.forEach((otherfeat) => {
            const featcard = this.ownerDocument.createElement("other-feat");
            featcard.setAttribute(OtherFeatAttribute.image, otherfeat.image);
            featcard.setAttribute(OtherFeatAttribute.tittle, otherfeat.tittle);
            featcard.setAttribute(OtherFeatAttribute.text, otherfeat.text);
            this.otherfeats.push(featcard);
        });
        dataMainNews.forEach((mainnew) => {
            const mainnewcard = this.ownerDocument.createElement("main-news");
            mainnewcard.setAttribute(MainNewsAttribute.image, mainnew.image);
            mainnewcard.setAttribute(MainNewsAttribute.tittle, mainnew.tittle);
            mainnewcard.setAttribute(MainNewsAttribute.text, mainnew.text);
            mainnewcard.setAttribute(MainNewsAttribute.date, mainnew.date);
            this.mainnews.push(mainnewcard);
        });
        dataOtherNews.forEach((othernew) => {
            const othernewcard = this.ownerDocument.createElement("other-news");
            othernewcard.setAttribute(OtherNewsAttribute.image, othernew.image);
            othernewcard.setAttribute(OtherNewsAttribute.tittle, othernew.tittle);
            othernewcard.setAttribute(OtherNewsAttribute.date, othernew.date);
            this.othernews.push(othernewcard);
        });
        dataCharacCards.forEach((characprev) => {
            const charcard = this.ownerDocument.createElement("char-card");
            charcard.setAttribute(CharacCardsAttribute.image, characprev.image);
            charcard.setAttribute(CharacCardsAttribute.background, characprev.background);
            charcard.setAttribute(CharacCardsAttribute.name, characprev.name);
            this.charcards.push(charcard);
        });
        dataGames.forEach((game) => {
            const gamecard = this.ownerDocument.createElement("my-games");
            gamecard.setAttribute(GamesAttribute.image, game.image);
            gamecard.setAttribute(GamesAttribute.name, game.name);
            gamecard.setAttribute(GamesAttribute.date, game.date);
            gamecard.setAttribute(GamesAttribute.tag, game.tag);
            gamecard.setAttribute(GamesAttribute.curprice, game.curprice);
            gamecard.setAttribute(GamesAttribute.regprice, game.regprice);
            gamecard.setAttribute(GamesAttribute.discount, game.discount);
            gamecard.setAttribute(GamesAttribute.platform, game.platform);
            this.games.push(gamecard);
        });
    }
    ;
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            //alert(JSON.stringify(this.header.join(""),null,3));
            //alert(this.banner);
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../app/app.css">`;
            const bannerSec = this.ownerDocument.createElement("section");
            bannerSec.appendChild(this.banner);
            this.shadowRoot.appendChild(bannerSec);
            const hr1 = this.ownerDocument.createElement("hr");
            this.shadowRoot.appendChild(hr1);
            const firstMainSec = this.ownerDocument.createElement("section");
            firstMainSec.appendChild(this.mainsections[0]);
            this.shadowRoot.appendChild(firstMainSec);
            const featSec = this.ownerDocument.createElement("section");
            this.otherfeats.forEach((ofeat) => {
                var _a;
                featSec.appendChild(ofeat);
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(featSec);
            });
            const hr2 = this.ownerDocument.createElement("hr");
            this.shadowRoot.appendChild(hr2);
            const secondMainSec = this.ownerDocument.createElement("section");
            secondMainSec.className = "sec-main-sec";
            secondMainSec.appendChild(this.mainsections[1]);
            secondMainSec.appendChild(this.mainsections[2]);
            this.shadowRoot.appendChild(secondMainSec);
            const newsTitleSec = this.ownerDocument.createElement("h1");
            const newsTitile = this.ownerDocument.createTextNode("News");
            newsTitleSec.appendChild(newsTitile);
            this.shadowRoot.appendChild(newsTitleSec);
            const mainNewsSec = this.ownerDocument.createElement("section");
            this.mainnews.forEach((mnew) => {
                var _a;
                mainNewsSec.appendChild(mnew);
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainNewsSec);
            });
            const otherNewsSec = this.ownerDocument.createElement("section");
            this.othernews.forEach((onew) => {
                var _a;
                otherNewsSec.appendChild(onew);
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(otherNewsSec);
            });
            const hr3 = this.ownerDocument.createElement("hr");
            this.shadowRoot.appendChild(hr3);
            const characTitleSec = this.ownerDocument.createElement("h1");
            const characTitle = this.ownerDocument.createTextNode("Characters");
            characTitleSec.appendChild(characTitle);
            this.shadowRoot.appendChild(characTitleSec);
            const charSec = this.ownerDocument.createElement("section");
            this.charcards.forEach((ccard) => {
                var _a;
                charSec.appendChild(ccard);
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(charSec);
            });
            const hr4 = this.ownerDocument.createElement("hr");
            this.shadowRoot.appendChild(hr4);
            const digBSTitleDiv = this.ownerDocument.createElement("div");
            const digBSTitleH1 = this.ownerDocument.createElement("h1");
            const digBSTitle = this.ownerDocument.createTextNode("Digital best sellers");
            const seeFullList1 = this.ownerDocument.createElement("span");
            const seeFulllist1text = this.ownerDocument.createTextNode("see full list");
            digBSTitleH1.appendChild(digBSTitle);
            digBSTitleDiv.appendChild(digBSTitleH1);
            seeFullList1.appendChild(seeFulllist1text);
            digBSTitleDiv.appendChild(seeFullList1);
            this.shadowRoot.appendChild(digBSTitleDiv);
            const DigBSSec = this.ownerDocument.createElement("section");
            DigBSSec.appendChild(this.games[0]);
            DigBSSec.appendChild(this.games[1]);
            DigBSSec.appendChild(this.games[2]);
            DigBSSec.appendChild(this.games[3]);
            this.shadowRoot.appendChild(DigBSSec);
            const digNewRelTitleDiv = this.ownerDocument.createElement("div");
            const digNewRelTitleH1 = this.ownerDocument.createElement("h1");
            const digNewRelTitle = this.ownerDocument.createTextNode("Digital new releases");
            const seeFullList2 = this.ownerDocument.createElement("span");
            const seeFulllist2text = this.ownerDocument.createTextNode("see full list");
            digNewRelTitleH1.appendChild(digNewRelTitle);
            digNewRelTitleDiv.appendChild(digNewRelTitleH1);
            seeFullList2.appendChild(seeFulllist2text);
            digNewRelTitleDiv.appendChild(seeFullList2);
            this.shadowRoot.appendChild(digNewRelTitleDiv);
            const DigNewRelSec = this.ownerDocument.createElement("section");
            DigNewRelSec.appendChild(this.games[4]);
            DigNewRelSec.appendChild(this.games[5]);
            DigNewRelSec.appendChild(this.games[6]);
            DigNewRelSec.appendChild(this.games[7]);
            this.shadowRoot.appendChild(DigNewRelSec);
        }
    }
}
customElements.define("app-container", AppContainer);
