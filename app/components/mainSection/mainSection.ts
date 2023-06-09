export enum MainSecAttribute {
    "titlesec"="titlesec",
    "image"="image",
    "text"="text",
    "label"="label"
}

class MainSec extends HTMLElement{
    titlesec?: string;
    image?: string;
    text?: string;
    label?: string

    static get observedAttributes(){
        const mainattrs: Record<MainSecAttribute, null> = {
            titlesec: null,
            image: null,
            text: null,
            label: null,
        }
        return Object.keys(mainattrs)
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: MainSecAttribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        switch (propName){
            default:
                this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =`
            <link rel="stylesheet" href="../app/components/mainSection/mainSection.css">
            
            <h1>${this.titlesec || "plssss"}</h1>
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <section class="lower">
                    <h3>${this.text || "XOXO"}</h3><a><span>${this.label || "XOXO"}</span></a>
                </section>
            </section>
            <hr>
            `
        }
    }
}
customElements.define("main-section", MainSec)
export default MainSec