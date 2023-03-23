export enum OtherNewsAttribute {
    "image"="image",
    "date"="date",
    "tittle"="tittle",
}

class OtherNews extends HTMLElement {
    image?: string;
    date?: string;
    tittle?: string;

    static get observedAttributes(){
        const mainNewsAttrs: Record<OtherNewsAttribute, null> = {
            image: null,
            date: null,
            tittle: null,
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
        propName: OtherNewsAttribute,
        _: string | undefined,
        newValue: string | undefined,
     ){
        this[propName] = newValue;
        this.render();

     }

     render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="../app/components/otherNews/otherNews.css">
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <div>
                    <p>${this.date || "XOXO"}</p>
                    <h3>${this.tittle || "XOXO"}</h3>
                    <span>Read more</span>
                </div>
            </section>
            `
        }
     }
}

customElements.define("other-news", OtherNews)
export default OtherNews