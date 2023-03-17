export var BannerAttribute;
(function (BannerAttribute) {
    BannerAttribute["image"] = "image";
    BannerAttribute["text"] = "text";
    BannerAttribute["ageclass"] = "ageclass";
})(BannerAttribute || (BannerAttribute = {}));
class Banner extends HTMLElement {
    static get observedAttributes() {
        const banattrs = {
            image: null,
            text: null,
            ageclass: null,
        };
        return Object.keys(banattrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case BannerAttribute.text:
                this.text = newValue ? String(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/components/banner/banner.css">
            <section>
                <div style="background-image: url(${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"});" class="upper"></div>
                <div class="lower">
                    <div class="start">
                        <h1>${this.text || "help"}</h1>
                        <button>Available Now</button>
                    </div>
                    <div class="end">
                        <div style="background-image: url(${this.ageclass || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"});" class="age-class"></div>
                        <p>Animated Blood, Fantasy Violence</p>
                    </div>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-banner", Banner);
export default Banner;
