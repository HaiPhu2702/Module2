export class Acount {

    private regAcount:RegExp=/^[_0-9a-z]{6,}$/
    public valadateAcount(acount:string){
        return this.regAcount.test(acount);
    }
}