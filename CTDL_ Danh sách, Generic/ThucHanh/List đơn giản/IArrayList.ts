export interface IArrayList<T> {
    add(data:T):void
    get(index:number):T
    //xoa cuoi
    remove():void
    size():number

}