export class Phone {
    private regPhoneNumber:RegExp=/^$/
    public phoneNumber(phoneNumber:string){
        return this.regPhoneNumber.test(phoneNumber);
    }
}