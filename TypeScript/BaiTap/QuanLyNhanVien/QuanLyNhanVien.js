"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyNhanVien = void 0;
var QuanLyNhanVien = /** @class */ (function () {
    function QuanLyNhanVien() {
        this.ListNhanVien = [];
    }
    QuanLyNhanVien.prototype.add = function (NhanVien1, NhanVien2, NhanVien3) {
        this.ListNhanVien.push(NhanVien1, NhanVien2, NhanVien3);
    };
    QuanLyNhanVien.prototype.delete = function (index) {
        for (var i_1 = 0; i_1 < this.ListNhanVien.length; i_1++) {
            if (i_1 === index) {
                console.log("da xoa thanh cong");
                return this.ListNhanVien.splice(i_1, 1);
            }
        }
        console.log(index + " ko ton tai");
    };
    QuanLyNhanVien.prototype.show = function () {
        this.ListNhanVien.forEach(function (value) {
            console.log(value);
        });
    };
    return QuanLyNhanVien;
}());
exports.QuanLyNhanVien = QuanLyNhanVien;
//# sourceMappingURL=QuanLyNhanVien.js.map