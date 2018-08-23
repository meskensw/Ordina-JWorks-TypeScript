class Movie extends Item implements Rating {
    age: number;
    name: string;

    constructor(title:string, genre:string, description:string, age:number, name:string) {
        super(title, genre, description);
        this.age= age;
        this.name= name;
    }


    render(element: HTMLElement){
        const article = super.generateArticle();
        const age= document.createElement("span");
        age.innerHTML=this.age.toString();
        const name = document.createElement("span");
        name.innerHTML=this.name;
        article.appendChild(age);
        article.appendChild(name);
        element.appendChild(article);
    }

}

