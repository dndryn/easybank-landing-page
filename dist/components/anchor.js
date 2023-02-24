export default class AnchorGenerator {
    anchor;
    constructor(href, text) {
        this.anchor = this.createAnchorNode(href, text);
    }
    createAnchorNode(href, text) {
        let a = document.createElement("a");
        a.href = href;
        a.innerText = text;
        return a;
    }
    getAnchor() {
        return this.anchor;
    }
}
