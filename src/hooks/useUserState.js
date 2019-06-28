import { useState } from "react"
import { createContainer } from "unstated-next"
import { Firebase, GoogleAuthProvider } from "../utils/firebaseconfig";

function _useUserState(initialState = null){
    const [user, setUser] = useState(initialState);
    const signIn = () =>{ 
        Firebase.auth().signInWithPopup(GoogleAuthProvider).then((result)=>{
            console.log('results from auth ====>' + JSON.stringify(result))
            setUser(result.user);
        }).catch((err)=>{
            console.log('CANT AUTHENTICATE')
            console.log(err)
        })
    }
    const signOut = () => {
        Firebase.auth().signOut().then(()=>{
            setUser(null)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return { user, signIn, signOut}
}

let useUserState = createContainer(_useUserState);

export {
    useUserState
}