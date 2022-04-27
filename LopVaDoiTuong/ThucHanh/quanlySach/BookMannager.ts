import {Book} from "./Book";

export class BookMannager {

    constructor() {
    }

    books: Book[] = [];

    add(book:Book) :void {
        this.books.push(book)
    }

    getList():Book[]{
        return this.books;
    }

    findIndexFromID(ID:string){
        let i=-1;
        this.books.forEach((value,index)=>{
            if(value._ID ===ID){
                i=index;
            }
        })
        return i;

    }

    delete(ID:string){
        let index=this.findIndexFromID(ID);
        if(index != -1){
            this.books.splice(index,1)

        }else {
            console.log("ko ton tai index")
        }
    }

    updateB(ID:string,name:string){
        let index=this.findIndexFromID(ID)
        if(index !=-1){
            this.books[index].setName(name);
        }else {
            console.log("ko ton tai")
        }
    }


}