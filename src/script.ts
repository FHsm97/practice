// function auth(param){
//     console.log(param);
    
// } log class User

function auth<T extends {new(...args:any[])}>(constractor:T){
    //process
    let auth=false;
    console.log(constractor);
    
    return class extends constractor{
        auth=auth;
    }
}

@auth
class User{
    name='fatemeh hashemi'
    constructor(public message:string){

    }
}

let user=new User('hello');
console.log(user);






function first<T extends {new(...args:any[])}>(constractor:T){
    console.log(constractor);

    return class extends constractor{
        property='first property'
    }
    
}

function second<T extends {new(...args:any[])}>(constractor:T){
    console.log(constractor);

    return class extends constractor{
        property='second property'
    }
    
}


@first
@second
class People{
    fName="fatemeh"
}

let people=new People();
console.log(people);
