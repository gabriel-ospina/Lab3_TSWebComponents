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
                            <input type="text" placeholder="Search games, hardware, news, etc...">
                            <button>All categories<div style="background-image: url(${this.categ || "https://static.thenounproject.com/png/4700132-200.png"});"></div></button>
                        </form>
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
            `
        }
    }
}

customElements.define("my-header", myHeader)
export default myHeader