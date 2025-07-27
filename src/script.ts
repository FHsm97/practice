

function auth<T extends {new(...args:any[])}>(constractor:T){
    
    console.log(constractor);
    
    return class extends constractor{
        auth=false;
    }
}


function authFactory(value:boolean){
    return function auth<T extends {new(...args:any[])}>(constractor:T){
    
    console.log(constractor);
    
    return class extends constractor{
        auth=value;
    }
}
}

function changable(value:boolean){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){

        console.log(target,propertyKey);
        console.log(target[propertyKey]);
        
        

        descriptor.writable=false;

    }
}



@authFactory(true)
class User{
    private name='fatemeh hashemi'
    constructor(public message:string){}

    
    @changable(false)
    getName(){
        return this.name;
    }
}

let user=new User('hello');
console.log(user);
// console.log(user.name);
console.log(user.getName());
user.getName=()=>'fatemeh' //error in console because it is writable and can not change
console.log(user.getName());



