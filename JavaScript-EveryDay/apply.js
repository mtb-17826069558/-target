//实现一个apply的功能
Function.prototype.apply2 = function(context = window){
    context.fn = this;
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete context.fn
    return result;
}