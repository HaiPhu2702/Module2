export interface I_Queue_PriorityUuTien<T>  {
    add(priority:number,name:T):void;
    delete():T;
    size():number;
}