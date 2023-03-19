export var OtherFeatAttribute;
(function (OtherFeatAttribute) {
    OtherFeatAttribute["image"] = "image";
    OtherFeatAttribute["tittle"] = "tittle";
    OtherFeatAttribute["text"] = "text";
})(OtherFeatAttribute || (OtherFeatAttribute = {}));
class OtherFeatures extends HTMLElement {
    static get observedAttributes() {
        const otherfeatattrs = {
            image: null,
            tittle: null,
            text: null,
        };
        return Object.keys(otherfeatattrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/components/otherFeatures/otherFeatures.css">
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <div>
                    <h3>${this.tittle || "sorrryyyy"}</h3>
                    <span>${this.text || ""}</span>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("other-feat", OtherFeatures);
export default OtherFeatures;
