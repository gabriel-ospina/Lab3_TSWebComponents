import { BannerAttribute } from "./components/banner/banner.js";
import { MainSecAttribute } from "./components/mainSection/mainSection.js";
import { OtherFeatAttribute } from "./components/otherFeatures/otherFeatures.js";
import { MainNewsAttribute } from "./components/mainNews/mainNews.js";
import { OtherNewsAttribute } from "./components/otherNews/otherNews.js";
import { CharacCardsAttribute } from "./components/characters/characters.js";
import { GamesAttribute } from "./components/games/Games.js";
import { HeaderAttribute } from "./components/header/header.js";
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
        const headersec = this.ownerDocument.createElement("my-header");
        headersec.setAttribute(HeaderAttribute.logoicon, "M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z");
        headersec.setAttribute(HeaderAttribute.search, "M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z");
        headersec.setAttribute(HeaderAttribute.categ, "M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z");
        headersec.setAttribute(HeaderAttribute.supp, "M28.126.862H3.876A3.904 3.904 0 0 0 0 4.757v17.838a3.905 3.905 0 0 0 3.875 3.896h8.375c.125 0 .125 0 .125.125l3.626 4.397a.122.122 0 0 0 .125.125c.125 0 .125 0 .25-.125L20 26.616a.122.122 0 0 1 .124-.125h8.001A3.904 3.904 0 0 0 32 22.595V4.757A3.903 3.903 0 0 0 28.126.862zM17.954 20.91a2.018 2.018 0 0 1-.438.64 2.062 2.062 0 0 1-1.446.58 2.092 2.092 0 0 1-.802-.154 1.944 1.944 0 0 1-.652-.43 1.98 1.98 0 0 1-.427-.642 2.119 2.119 0 0 1-.001-1.59 1.97 1.97 0 0 1 .43-.65 2.055 2.055 0 0 1 .643-.432 2.078 2.078 0 0 1 1.613 0 2.152 2.152 0 0 1 .64.428l.002.001a2.045 2.045 0 0 1 .438 2.25zm2.964-10.055a4.505 4.505 0 0 1-.662 1.159 5.04 5.04 0 0 1-.861.844l-.822.622a6.01 6.01 0 0 0-.626.538.766.766 0 0 0-.231.426l-.303 1.923h-2.517l-.222-2.13a1.824 1.824 0 0 1 .193-1.127 3.152 3.152 0 0 1 .648-.812 7.965 7.965 0 0 1 .838-.658 6.94 6.94 0 0 0 .782-.626 3.116 3.116 0 0 0 .574-.716 1.726 1.726 0 0 0 .208-.873 1.287 1.287 0 0 0-.112-.55 1.213 1.213 0 0 0-.318-.414 1.482 1.482 0 0 0-.506-.275 2.946 2.946 0 0 0-1.628.018 3.595 3.595 0 0 0-.666.277 8.824 8.824 0 0 0-.49.294.966.966 0 0 1-1.483-.33l-.872-1.378.24-.212a8 8 0 0 1 .86-.657 6.234 6.234 0 0 1 1.023-.55 6.4 6.4 0 0 1 1.192-.37 6.63 6.63 0 0 1 3.248.15 4.301 4.301 0 0 1 1.475.826 3.736 3.736 0 0 1 .966 1.314 4.161 4.161 0 0 1 .34 1.703 4.304 4.304 0 0 1-.268 1.584z");
        headersec.setAttribute(HeaderAttribute.wish, "M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z");
        headersec.setAttribute(HeaderAttribute.cart, "M23.12 28.073a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326zm2.397-7.29a1.728 1.728 0 0 0 1.498-.982l4.844-11.686a1.544 1.544 0 0 0-.15-1.551 1.593 1.593 0 0 0-1.349-.673H8.44l-.55-2.895A1.494 1.494 0 0 0 6.393 1.6H1.598A1.606 1.606 0 0 0 0 3.255a1.548 1.548 0 0 0 1.598 1.654h3.496L7.49 18.973l-1.098 4.706a1.67 1.67 0 0 0 .25 1.395 1.529 1.529 0 0 0 1.198.673h18.675a1.656 1.656 0 0 0 0-3.31H9.937l.4-1.654zm-18.726 7.29a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326z");
        headersec.setAttribute(HeaderAttribute.login, "M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84");
        headersec.setAttribute(HeaderAttribute.store, "M26.667 0H5.333A5.333 5.333 0 0 0 0 5.333v21.334A5.333 5.333 0 0 0 5.333 32h21.334A5.333 5.333 0 0 0 32 26.667V5.333A5.333 5.333 0 0 0 26.667 0zm-5.105 22.423a5.212 5.212 0 0 1-2.37-.602 10.482 10.482 0 0 1-13.67-1.608.803.803 0 0 1 1.228-1.036 8.866 8.866 0 0 0 11.914 1.04.803.803 0 0 1 .986-.005 3.461 3.461 0 0 0 5.41-2.888 3.495 3.495 0 0 0-3.39-3.416c-.016 0-.036 0-.063-.002a.962.962 0 0 0-.12.003.806.806 0 0 1-.778-.455 6.54 6.54 0 0 0-5.992-3.848c-2.82 0-5.738 1.802-5.738 4.819-.003.818.35 1.596.969 2.132l1.688-3.147a.803.803 0 0 1 1.423.015l.982 1.926.983-1.926a.8.8 0 0 1 .71-.438c.3 0 .574.164.716.428l2.076 3.933a.8.8 0 0 1-.03.804.802.802 0 0 1-1.391-.054l-1.353-2.564-.995 1.95a.803.803 0 0 1-1.431-.001l-1-1.96-1.384 2.58a.805.805 0 0 1-1.046.349 4.563 4.563 0 0 1-2.524-4.027C7.372 10.403 11.107 8 14.717 8a8.081 8.081 0 0 1 7.209 4.308 5.063 5.063 0 0 1-.363 10.115z");
        headersec.setAttribute(HeaderAttribute.games, "M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z");
        headersec.setAttribute(HeaderAttribute.switch, "M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z");
        headersec.setAttribute(HeaderAttribute.news, "M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z");
        headersec.setAttribute(HeaderAttribute.play, "M18.9 19.1c-.9 0-1-1.5-1-3.4s0-3.5 1-3.4c.9.1 1.1 1.4 1.1 3.3-.1 2-.2 3.5-1.1 3.5m-5.8 0c-.9 0-1-1.6-1-3.4 0-1.9.2-3.2 1.1-3.3 1-.1 1 1.5 1 3.4-.1 1.8-.2 3.3-1.1 3.3M32 12.4c-.1-.3-1.4-.6-5.6-1.1-2.6-.3-5.1-.5-5.2-.5-.2 0-.4-.2-.5-.4-.6-1.6-1.3-3.3-2-4.8C17.1 1.8 16.4.7 15.9.7c-.4 0-1 1.1-2.8 5-1.1 2.4-2 4.8-2 4.8-.1.2-.3.4-.5.4 0 0-2.5.1-5.1.4-4.1.4-5.4.7-5.5 1-.1.4.8 1.3 3.9 4.2 1.9 1.8 3.9 3.4 3.9 3.4.2.1.2.3.2.4v.1s-.6 2.5-1.2 5.1c-.6 3-1.1 5.4-.7 5.7.4.4 1.8-.5 5.2-2.4 2.3-1.3 4.4-2.7 4.5-2.7.2-.1.4-.1.6 0 0 0 2.2 1.4 4.4 2.7 3.4 2 4.7 2.7 5.2 2.4.4-.3 0-2.1-.7-5.7-.5-2.6-1.2-5.1-1.2-5.1v-.1c0-.2.1-.3.2-.4 0 0 1.9-1.6 3.9-3.3 3-2.9 3.9-3.9 3.8-4.2");
        this.header = headersec;
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
            const headerSec = this.ownerDocument.createElement("section");
            headerSec.appendChild(this.header);
            this.shadowRoot.appendChild(headerSec);
            const bannerSec = this.ownerDocument.createElement("section");
            bannerSec.className = "banner";
            bannerSec.appendChild(this.banner);
            this.shadowRoot.appendChild(bannerSec);
            const hr1 = this.ownerDocument.createElement("hr");
            this.shadowRoot.appendChild(hr1);
            const firstMainSec = this.ownerDocument.createElement("section");
            firstMainSec.appendChild(this.mainsections[0]);
            this.shadowRoot.appendChild(firstMainSec);
            const featSec = this.ownerDocument.createElement("section");
            featSec.className = "other-sec";
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
            newsTitleSec.className = "title";
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
            characTitleSec.className = "title";
            const characTitle = this.ownerDocument.createTextNode("Characters");
            characTitleSec.appendChild(characTitle);
            this.shadowRoot.appendChild(characTitleSec);
            const charSec = this.ownerDocument.createElement("section");
            charSec.className = "char-sec";
            this.charcards.forEach((ccard) => {
                var _a;
                charSec.appendChild(ccard);
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(charSec);
            });
            const hr4 = this.ownerDocument.createElement("hr");
            this.shadowRoot.appendChild(hr4);
            const digBSTitleDiv = this.ownerDocument.createElement("div");
            const digBSTitleH1 = this.ownerDocument.createElement("h2");
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
            const digNewRelTitleH1 = this.ownerDocument.createElement("h2");
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
