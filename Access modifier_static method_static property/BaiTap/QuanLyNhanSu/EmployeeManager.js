"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.add = function (Employee) {
        this.list.push(Employee);
    };
    EmployeeManager.show = function () {
        console.log(this.list);
    };
    EmployeeManager.show_chi_tiet = function () {
        this.list.forEach(function (value) {
            console.log(" ho  ".concat(value.Ho, "     ten    ").concat(value.name, "   birth   ").concat(value.birth, "  ").concat(value.adress, " ").concat(value.vitricongviec, " "));
        });
    };
    EmployeeManager.delete = function (so) {
        var _this = this;
        this.list.forEach(function (value, index) {
            if (index === so) {
                return _this.list.splice(so, 1);
            }
            else {
                return console.log("ko co ");
            }
        });
    };
    EmployeeManager.update = function (vitri, value1) {
        this.list.forEach(function (value, index) {
            if (index === vitri) {
                console.log("update thanh cong");
                return EmployeeManager.list[vitri] = value1;
            }
            else {
                return console.log("ko ton tại vi tri");
            }
        });
    };
    EmployeeManager.list = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
//# sourceMappingURL=EmployeeManager.js.map