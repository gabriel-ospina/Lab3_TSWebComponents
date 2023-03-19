export var MainSecAttribute;
(function (MainSecAttribute) {
    MainSecAttribute["titlesec"] = "titlesec";
    MainSecAttribute["image"] = "image";
    MainSecAttribute["text"] = "text";
    MainSecAttribute["label"] = "label";
})(MainSecAttribute || (MainSecAttribute = {}));
class MainSec extends HTMLElement {
    static get observedAttributes() {
        const mainattrs = {
            titlesec: null,
            image: null,
            text: null,
            label: null,
        };
        return Object.keys(mainattrs);
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
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/components/mainSection/mainSection.css">
            <section>
            <h1>${this.titlesec || "plssss"}</h1>
            <div style="background-image: url(${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"});"></div>
            <section class="lower">
                <h3>${this.text || "noooo"}</h3><button>${this.label || "carajo"}</button>
            </section>
            </section>
            <hr>
            `;
        }
    }
}
customElements.define("main-section", MainSec);
export default MainSec;
