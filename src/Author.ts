class Author {

    private _name : string;

    constructor(name){
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}