

class User{
    IsAuth: boolean;
    constructor (auth: boolean){
        this.IsAuth = auth
    }
}

function authenticated(user :User){
    if ( user.IsAuth == true){
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
            console.log("User is Authenticated")
        } 
    }
    else{
        console.log("Not Authenticated")
    }
}

function log(){
    console.log("Logged")
}

class SecureApp {
    user : User
    constructor(user:User){
        this.user = user
    }
    //@authenticated()
    sensitiveData(){
        console.log("sensitive data")
    }
}