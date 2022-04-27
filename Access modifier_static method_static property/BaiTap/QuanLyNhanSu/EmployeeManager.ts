import {Employee} from "./Employee";

export class EmployeeManager {

    static list: Employee[] = [];


    constructor() {

    }

   static add(Employee: Employee) {
       this.list.push(Employee);
    }

    static show() {
        console.log(this.list);
    }

   static show_chi_tiet() {
        this.list.forEach((value) => {
            console.log(` ho  ${value.Ho}     ten    ${value.name}   birth   ${value.birth}  ${value.adress} ${value.vitricongviec} `)
        })
    }


    static delete(so: number) {
        this.list.forEach((value, index) => {
            if (index === so) {
                return this.list.splice(so, 1)
            } else {
                return console.log("ko co ")
            }
        })
    }

   static update(vitri, value1:Employee) {
        this.list.forEach((value, index) => {
            if (index === vitri) {
                console.log("update thanh cong")
                return EmployeeManager.list[vitri] = value1;
            } else {
                return console.log("ko ton tại vi tri")
            }


        })
    }

    // Hiển thị danh sách nhân sự
    // Thêm một nhân sự mới
    // Xem chi tiết thông tin nhân sự
    // Xoá một nhân sự
    // Chỉnh sửa thông tin nhân sự

}