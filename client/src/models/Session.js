const Session = {
    user: null,
    message: [] // To be used later
}
export default Session;

export function Login(){
    Session.user = { name: "Andrew", handle: '@Andrew' }
}

export function Logout(){
    Session.user = null
}