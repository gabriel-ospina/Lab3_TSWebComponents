export enum GamesAttribute {
    "image"="image",
    "name"="name",
    "date"="date",
    "tag"="tag",
    "curprice"="curprice",
    "regprice"="regprice",
    "platform"="platform",
    "discount"="discount",
}

class Games extends HTMLElement{
    image?: string;
    name?: string;
    date?: string;
    tag?: string;
    curprice?: string;
    regprice?: string;
    platform?: string;
    discount?: string;

    static get observedAttributes(){
        const gamesattrs: Record<GamesAttribute, null> = {
            image: null,
            name: null,
            date: null,
            tag: null,
            curprice: null,
            regprice: null,
            platform: null,
            discount: null,
        }
        return Object.keys(gamesattrs);
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: GamesAttribute,
        _: string | undefined,
        newValue: string | undefined,
    ){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <div class="lower">
                    <div class="title">
                        <h3>${this.name || "XOXO"}</h3>
                        <p>${this.date || "XOXO"}</p>
                    </div>
                    ${this.tag || ""}
                    <div class="price">
                        <span>${this.curprice || "XOXO"}</span>
                        <span class="regprice">${this.regprice || ""}</span>
                        ${this.discount}
                    </div>
                    ${this.platform || ""}
                </div>
            </section>
            `
        }
    }
}

customElements.define("my-games", Games)
export default Games