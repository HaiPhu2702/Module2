
export enum Gender {
    MALE,
    FEMALE,
    OTHER
}
export class NhanVien {

    name: string;
    gender: Gender;
    birthday: Date;
    email: string;
    phone: string = '';
        constructor(name: string, gender: Gender, birthday: Date, email: string, phone: string) {
            this.name=name;
            this.gender=gender;
            this.birthday=birthday;
            this.email=email;
            this.phone=phone;
        }

}