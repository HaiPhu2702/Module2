"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien_1 = require("./NhanVien");
var QuanLyNhanVien_1 = require("./QuanLyNhanVien");
var NhanVien_2 = require("./NhanVien");
var NV1 = new NhanVien_1.NhanVien("phu", NhanVien_2.Gender.MALE, new Date("1997-02-27"), "hdggd@gmail", "234631421");
var NV2 = new NhanVien_1.NhanVien("hoa", NhanVien_2.Gender.FEMALE, new Date("1989-10-27"), "hdggd@gmail", "46314");
var NV3 = new NhanVien_1.NhanVien("hss", NhanVien_2.Gender.OTHER, new Date("1978-02-27"), "hdggd@gmail", "231421");
var listStaff = new QuanLyNhanVien_1.QuanLyNhanVien();
//addd
listStaff.add(NV1, NV2, NV3);
//show
listStaff.show();
//delete
listStaff.delete(1);
listStaff.show();
