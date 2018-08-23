abstract class Item {
    protected title: string;
    protected genre: string;
    protected description: string;

    constructor(title:string,genre:string,description:string){
        this.title = title;
        this.genre = genre;
        this.description = description;
    }

    public render(element: HTMLElement): void {
        const article = this.generateArticle();
        element.appendChild(article);
    }

    public generateArticle(){
        const article = document.createElement("div");
        const title= document.createElement("h3");
        title.innerHTML=this.title;
        const genre = document.createElement("span");
        genre.innerHTML=this.genre;
        const description = document.createElement("div");
        description.innerHTML=this.description;
        article.appendChild(title);
        article.appendChild(genre);
        article.appendChild(description);
        return article;
    }

}
