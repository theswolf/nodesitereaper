class Page {
    constructor(pageTitle,contents,next) {
        this.pageTitle = pageTitle;
        this.contents = contents;
        this.hasNext = !!next && !next.endsWith('index.htm');
        this.next = next;
        this.id = 0;
    }
}

module.exports = Page