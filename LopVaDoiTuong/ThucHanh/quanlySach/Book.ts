export class Book {
     _ID:string;
    name:string
    constructor(ID:string,name:string) {
        this._ID=ID;
        this.name=name;
    }

    getNameB():string{
        return this.name;
    }
    setName(name:string){
        this.name=name;
    }
    getID():string{
        return this._ID
    }


}