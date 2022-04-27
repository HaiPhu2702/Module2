"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
var NhanVien = /** @class */ (function () {
    function NhanVien(name, gender, birthday, email, phone) {
        this.phone = '';
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return NhanVien;
}());
exports.NhanVien = NhanVien;
//# sourceMappingURL=NhanVien.js.map