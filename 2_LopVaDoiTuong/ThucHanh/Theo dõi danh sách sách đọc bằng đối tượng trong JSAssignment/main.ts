
import {Book} from "./book";
let Book1=new  Book("LaoHac","NamCao",false)
let Book2=new  Book("HacQue","CaoCao" ,true)

let books=[];
books.push(Book1,Book2);


books.map((value => {
    let bookInfo=value.title+" by "+ value.author;
    if(value.alreadyRead){
        console.log("book ready "+bookInfo)
    }else {
        console.log("book not ready "+bookInfo)

    }

}))
