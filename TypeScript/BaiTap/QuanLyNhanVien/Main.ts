import {NhanVien} from "./NhanVien";
import {QuanLyNhanVien} from "./QuanLyNhanVien";
import {Gender} from "./NhanVien";

let NV1=new NhanVien("phu",Gender.MALE,new Date("1997-02-27"),"hdggd@gmail","234631421")

let NV2=new NhanVien("hoa",Gender.FEMALE,new Date("1989-10-27"),"hdggd@gmail","46314")

let NV3=new NhanVien("hss",Gender.OTHER,new Date("1978-02-27"),"hdggd@gmail","231421")

let listStaff=new QuanLyNhanVien();

//addd
listStaff.add(NV1,NV2,NV3);
//show
listStaff.show();
//delete
listStaff.delete(1);
listStaff.show();