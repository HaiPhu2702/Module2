export interface I_Stack_Queue<T>{
    push(data:T):void
    pop():T |undefined
    peek():T | undefined
    size():number
}