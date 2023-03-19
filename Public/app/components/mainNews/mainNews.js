export var MainNewsAttribute;
(function (MainNewsAttribute) {
    MainNewsAttribute["image"] = "image";
    MainNewsAttribute["date"] = "date";
    MainNewsAttribute["tittle"] = "tittle";
    MainNewsAttribute["text"] = "text";
})(MainNewsAttribute || (MainNewsAttribute = {}));
class MainNews extends HTMLElement {
    static get observedAttributes() {
        const mainNewsAttrs = {
            image: null,
            date: null,
            tittle: null,
            text: null,
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
            <section>
                <img src="${this.image || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}">
                <div>
                    <p>${this.date || "XOXO"}</p>
                    <h3>${this.tittle || "XOXO"}</h3>
                    <p>${this.text || "XOXO"}</p>
                    <span>Read more</span>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("main-news", MainNews);
export default MainNews;
