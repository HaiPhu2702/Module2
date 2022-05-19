import {Employee} from "./Employee";
import  {EmployeeManager} from "./EmployeeManager";


let NV1=new Employee("nguyen","phu",new Date("1980-6-6"),"okokok","ôfs");
let NV2=new Employee("ho","hu",new Date("1880-9-6"),"kok","fkjks");

 EmployeeManager.add(NV1)
 EmployeeManager.add(NV2)


// quanlyNV.show();

EmployeeManager.show_chi_tiet()
//
//
// quanlyNV.delete(0);
// quanlyNV.show();
//
// quanlyNV.update(0, NV1)
// quanlyNV.show()


