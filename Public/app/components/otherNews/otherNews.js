export var OtherNewsAttribute;
(function (OtherNewsAttribute) {
    OtherNewsAttribute["image"] = "image";
    OtherNewsAttribute["date"] = "date";
    OtherNewsAttribute["tittle"] = "tittle";
})(OtherNewsAttribute || (OtherNewsAttribute = {}));
class OtherNews extends HTMLElement {
    static get observedAttributes() {
        const mainNewsAttrs = {
            image: null,
            date: null,
            tittle: null,
        };
        return Object.keys(mainNewsAttrs);
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
            <link rel="stylesheet" href="../app/components/mainNews/mainNews.ts">
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <div>
                    <p>${this.date || "XOXO"}</p>
                    <h3>${this.tittle || "XOXO"}</h3>
                    <span>Read more</span>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("other-news", OtherNews);
export default OtherNews;
