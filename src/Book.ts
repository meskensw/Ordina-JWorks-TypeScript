class Book extends Item {
    author: Author;

    constructor(title: string, authorName: string, genre: string, description: string) {
        super(title, genre, description);
        this.author = new Author(authorName);
    }

    render(element: HTMLElement) {
        const article = super.generateArticle();
        let author1 = document.createElement("span");
        author1.innerHTML = "test";
        article.appendChild(author1);
        element.appendChild(article);
    }
}