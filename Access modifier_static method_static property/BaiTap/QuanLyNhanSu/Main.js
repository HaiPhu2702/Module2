"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var NV1 = new Employee_1.Employee("nguyen", "phu", new Date("1980-6-6"), "okokok", "ôfs");
var NV2 = new Employee_1.Employee("ho", "hu", new Date("1880-9-6"), "kok", "fkjks");
EmployeeManager_1.EmployeeManager.add(NV1);
EmployeeManager_1.EmployeeManager.add(NV2);
// quanlyNV.show();
EmployeeManager_1.EmployeeManager.show_chi_tiet();
//
//
// quanlyNV.delete(0);
// quanlyNV.show();
//
// quanlyNV.update(0, NV1)
// quanlyNV.show()
//# sourceMappingURL=Main.js.map