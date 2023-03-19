export enum MainNewsAttribute {
    "image"="image",
    "date"="date",
    "tittle"="tittle",
    "text"="text"
}

class MainNews extends HTMLElement {
    image?: string;
    date?: string;
    tittle?: string;
    text?: string

    static get observedAttributes(){
        const mainNewsAttrs: Record<MainNewsAttribute, null> = {
            image: null,
            date: null,
            tittle: null,
            text: null,
        }
        return Object.keys(mainNewsAttrs)
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }
     connectedCallback(){
        this.render();
     }

     attributeChangedCallback(
        propName: MainNewsAttribute,
        _: string | undefined,
        newValue: string | undefined,
     ){
        this[propName] = newValue;
        this.render();

     }

     render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="../app/components/mainNews/mainNews.ts">
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <div>
                    <p>${this.date || "XOXO"}</p>
                    <h3>${this.tittle || "XOXO"}</h3>
                    <p>${this.text || "XOXO"}</p>
                    <span>Read more</span>
                </div>
            </section>
            `
        }
     }
}

customElements.define("main-news", MainNews)
export default MainNews