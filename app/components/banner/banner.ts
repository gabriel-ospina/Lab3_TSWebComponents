export enum BannerAttribute{
    "image"="image",
    "text"="text",
    "ageclass"="ageclass",
}

class Banner extends HTMLElement {
    image?: string;
    text?: string;
    ageclass?: string;

    static get observedAttributes(){
        const banattrs: Record<BannerAttribute,null> = {
            image: null,
            text: null,
            ageclass: null,
        };
        return Object.keys(banattrs);
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: BannerAttribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/components/banner/banner.css">
            <section>
                <div class="upper">
                    <img class="banner" src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                </div>
                <div class="lower">
                    <div class="start">
                        <h1>${this.text || "help"}</h1>
                    </div>
                    <a><span>Available Now</span></a>
                    <div class="end">
                        <img class="age-class" src="${this.ageclass || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}" class="age-class">
                        <p>Animated Blood, Fantasy Violence</p>
                    </div>
                </div>
            </section>
            `
        }
    }
}

customElements.define("my-banner", Banner)
export default Banner