export class Email {
    private regExpEmail: RegExp=/^[0-9a-zA-Z]+[0-9a-zA-Z]*@[0-9a-zA-Z]+(\.[0-9a-zA-z]+)$/
    public validate(regex:string){
        return this.regExpEmail.test(regex);
    }

}