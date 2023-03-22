export var HeaderAttribute;
(function (HeaderAttribute) {
    HeaderAttribute["logoicon"] = "logoicon";
    HeaderAttribute["search"] = "search";
    HeaderAttribute["categ"] = "categ";
    HeaderAttribute["supp"] = "supp";
    HeaderAttribute["wish"] = "wish";
    HeaderAttribute["cart"] = "cart";
    HeaderAttribute["login"] = "login";
    HeaderAttribute["store"] = "store";
    HeaderAttribute["games"] = "games";
    HeaderAttribute["switch"] = "switch";
    HeaderAttribute["news"] = "news";
    HeaderAttribute["play"] = "play";
})(HeaderAttribute || (HeaderAttribute = {}));
class myHeader extends HTMLElement {
    static get observedAttributes() {
        const headattrs = {
            logoicon: null,
            search: null,
            categ: null,
            supp: null,
            wish: null,
            cart: null,
            login: null,
            store: null,
            games: null,
            switch: null,
            news: null,
            play: null,
        };
        return Object.keys(headattrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/components/header/header.css">
            <header>
                <div class="upper">
                    <div class="start">
                        <div class="logo-container"><svg viewBox="0 0 97 24" width="69" size="69"><path d="${this.logoicon}" fill="currentColor"></path></svg></div>
                        <form>
                        <button class="searc-bar">
                            <div class="search-cont"><svg viewBox="0 0 32 32" width="18"><path d="${this.search}"></path></svg></div>
                            <span>Search games, hardware, news, etc</span>
                        </button>
                        <div class="all-cat">
                            <span class="cat-text">All categories</span>
                            <div class="cat-icon"><svg viewBox="0 0 32 32" width="14" size="14"><path d="${this.categ}"></path></svg></div>
                        </div>
                    </div>
                    <div class="end">
                        <button>
                            <div style="background-image: url(${this.supp || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                            Support
                        </button>
                        <button>
                            <div style="background-image: url(${this.wish || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                            Wish List
                        </button>
                        <button>
                            <div style="background-image: url(${this.cart || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                            Cart
                        </button>
                        <button>
                            <div style="background-image: url(${this.login || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                            Log in / Sign up
                        </button>
                    </div>
                </div>
                <div class="lower">
                    <button>
                        <div style="background-image: url(${this.store || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        My Nintendo Store
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </button>
                    <button>
                        <div style="background-image: url(${this.games || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        Games
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </button>
                    <button>
                        <div style="background-image: url(${this.switch || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        Nintendo Swtich
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </button>
                    <button>
                        <div style="background-image: url(${this.news || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        News & Events
                    </button>
                    <button>
                        <div style="background-image: url(${this.play || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        Play Nintendo
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </button>
                </div>
            </header>
            `;
        }
    }
}
customElements.define("my-header", myHeader);
export default myHeader;
