const Session = {
    user: null,
    message: [] // To be used later
}
export default Session;

export function LogIn(name, handle, pass){
    Session.user = { name: name, handle: handle, pass: pass }
}

export function SignUp(name, handle, pass){
    Session.user = { name: name, handle: handle, pass: pass, friends: [] }
}

export function Logout(){
    Session.user = null
}


import { GetUserCred } from "../models/Users";
export function LogInCred(name, pass){

    GetUserCred(name, pass)
}