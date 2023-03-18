export enum OtherFeatAttribute{
    "image"="image",
    "tittle"="tittle",
    "text"="text",
}

class OtherFeatures extends HTMLElement {
    image?: string;
    tittle?: string;
    text?: string;

    static get observedAttributes(){
        const otherfeatattrs: Record<OtherFeatAttribute, null> = {
            image: null,
            tittle: null,
            text: null,
        }
        return Object.keys(otherfeatattrs)
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: OtherFeatAttribute,
        _: string | undefined,
        newValue: string | undefined,
    ){
        this[propName] = newValue;
        this.render();
    }


    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/components/otherFeatures/otherFeatures.css">
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <div>
                    <h3>${this.tittle || "sorrryyyy"}</h3>
                    <span>${this.text || "oh no"}</span>
                </div>
            </section>
            `
        }

    }
}
customElements.define("other-feat", OtherFeatures)
export default OtherFeatures