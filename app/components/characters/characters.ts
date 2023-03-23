export enum CharacCardsAttribute {
    "background"="background",
    "image"="image",
    "name"="name"
}

class CharacCards extends HTMLElement {
    background?: string;
    image?: string;
    name?: string;

    static get observedAttributes(){
        const characattrs: Record<CharacCardsAttribute, null> = {
            background: null,
            image: null,
            name: null
        }
        return Object.keys(characattrs)
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: CharacCardsAttribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        this[propName]=newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="../app/components/characters/characters.css">
            <section>
                <div class="images">
                    <div class="bground">
                        <img src="${this.background || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                    </div>
                    <div class="main">
                        <img src="${this.image || "https://static.thenounproject.com/png/4700132-200.png"}">
                    </div>
                </div>
                <h2>${this.name || "XOXO"}</h2>
            </section>
            `
        }
    }
}

customElements.define("char-card", CharacCards)
export default CharacCards