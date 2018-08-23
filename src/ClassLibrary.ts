class ClassLibrary{
    private items:Array<Item>;

    public constructor() {
        this.items = new Array<Item>();
        let book1:Book = new Book("title1", "author1", "genre1", "description1");
        let movie1:Movie = new Movie("title2", "genre2","description2",2,"name2");
        this.items.push(book1,movie1);
    }

    public generate(){
        let headElement: HTMLElement = document.getElementById("items");
        for(let i =0; i<this.items.length; i++){
            this.items[i].render(headElement);
        }
    }


}