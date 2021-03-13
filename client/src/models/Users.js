import Session from "./Session";
const users = [
    { 
        name: "Andrew",
        handle: "@Andrew",
        pass: "pass",
        freinds: [],
    },
    {
        name: "NullUser",
        handle: "@NullUser",
        pass: "NullUser",
        freinds: [],
    },
];


export function GetUsers(){
    return users
}

export function GetUser(id){
    return users.filter( x=> x.user.handle == id );
}

export function GetFriends(id){
    return users.filter(Session.user.freinds.includes(id));
}

export function GetUserCred(name, pass){
    if (!users.filter( x=> x.name == name && x.pass == pass).length)
    {
        return users.filter( x=> x.name == "NullUser" && x.pass == "NullUser");
    }
    else
    {
        return users.filter( x=> x.name == name && x.pass == pass);
    }
}