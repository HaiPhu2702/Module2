export class NameClass {

    private regNameClass:RegExp=/^[\bCAP]\d{4}[\bGHIKLM]$/
    public NameClass(Name:string){
        return this.regNameClass.test(Name);
    }
}
