import {Book} from "./Book";
import {BookMannager} from "./BookMannager";



let book1 = new Book('B001','Lập trình Java');
let book2 = new Book('B002','Lập trình PHP');
let book3 = new Book('B003','Lập trình TypeScript');

let bookManager = new BookMannager()
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
let show= bookManager.getList()
console.log(show);

bookManager.updateB("B001","ruby")
console.log(bookManager.getList());