import {NhanVien} from "./NhanVien";

export class QuanLyNhanVien {
    ListNhanVien: NhanVien[] = [];

    constructor() {
    }

    add(NhanVien1: NhanVien, NhanVien2: NhanVien, NhanVien3: NhanVien) {
        this.ListNhanVien.push(NhanVien1, NhanVien2, NhanVien3);
    }

    delete(index: number) {
        for (let i = 0; i < this.ListNhanVien.length; i++) {
            if (i === index) {
                console.log("da xoa thanh cong")
                return this.ListNhanVien.splice(i, 1)
            }
        }
        console.log(index + " ko ton tai")

    }

    show() {
        this.ListNhanVien.forEach((value) => {
            console.log(value);
        })
    }


}