export enum HeaderAttribute{
    "logoicon"="logoicon",
    "search"="search",
    "categ"="categ",
    "supp"="supp",
    "wish"="wish",
    "cart"="cart",
    "login"="login",
    "store"="store",
    "games"="games",
    "switch"="switch",
    "news"="news",
    "play"="play",
}

class myHeader extends HTMLElement {
    logoicon?: string;
    search?: string;
    categ?: string;
    supp?: string;
    wish?: string;
    cart?: string;
    login?: string;
    store?: string;
    games?: string;
    switch?: string;
    news?: string;
    play?: string;

    static get observedAttributes(){
        const headattrs: Record<HeaderAttribute, null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: HeaderAttribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot) {
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
                        <a class="button-end">
                            <div class="sec-icon"><svg viewBox="0 0 32 32" width="18" size="18"><path d="${this.supp}"></path></svg></div>
                            <span class="bold-text">Support</span>
                        </a>
                        <a class="button-end">
                            <div class="sec-icon"><svg viewBox="0 0 32 32" width="18" size="18"><path d="${this.wish}"></path></svg></div>
                            <span class="bold-text">Wish List</span>
                        </a>
                        <a class="button-end">
                            <div class="sec-icon"><svg viewBox="0 0 32 32" width="18" size="18"><path d="${this.cart}"></path></svg></div>
                            <span class="bold-text">Cart</span>
                        </a>
                        <a class="button-end">
                            <div class="sec-icon"><svg viewBox="0 0 32 32" width="18" size="18"><path d="${this.login}"></path></svg></div>
                            <span class="bold-text">Log in / Sign up</span>
                        </a>
                    </div>
                </div>
                <div class="lower">
                    <a>
                        <div style="background-image: url(${this.store || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        <span class="bold-text">My Nintendo Store</span>
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </a>
                    <a>
                        <div style="background-image: url(${this.games || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        <span class="bold-text">Games</span>
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </a>
                    <a>
                        <div style="background-image: url(${this.switch || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        <span class="bold-text">Nintendo Switch</span>
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </a>
                    <a>
                        <div style="background-image: url(${this.news || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        <span class="bold-text">News & Events</span>
                    </a>
                    <a>
                        <div style="background-image: url(${this.play || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                        <span class="bold-text">Play Nintendo</span>
                        <div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div>
                    </a>
                </div>
            </header>
            `
        }
    }
}

customElements.define("my-header", myHeader)
export default myHeader