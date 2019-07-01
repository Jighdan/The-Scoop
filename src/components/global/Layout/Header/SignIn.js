import React, { Component } from 'react';
import Router from 'next/router'
import styled from 'styled-components';
import Flex from '../../Flex';
import Dropdown from './Dropdown';
import localforage from 'localforage'
import { PascalCase } from '../../../../utils/pascalCase';
import { Firebase, GoogleAuthProvider } from '../../../../config/firebaseconfig';

const GoogleSignInButton = styled.img`
    max-height: 45px;
    width: auto;
    cursor: pointer;
`   
const Welcome = styled.p`
    margin-right: 10px;
`
const ProfilePic = styled.img`
    height: 45px;
    width: auto;
    border-radius: 50%;
    cursor: pointer;
`
export default class SignInComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: null
        };
        localforage.getItem('user').then((usr)=>{
            if (usr) this.setState({user: usr});
        }).catch((err)=>{
            console.log(err);
        });
    }

    _parseLocalData = (obj) => {
        return {
            id: obj.uid,
            displayName: obj.displayName,
            photoURL: obj.photoURL,
            email: obj.email,
        }
    }
    _parseRemoteData = (obj) => {
        return {
            displayName: obj.displayName,
            email: obj.email,
        }
    }

   _signIn = () => {
        const db = Firebase.firestore();
        //Authenticate User
        Firebase.auth().signInWithPopup(GoogleAuthProvider).then((result)=>{
            // On successful auth we: 
            // Parse results
            const LocalUser = this._parseLocalData(result.user);
            const RemoteUser = this._parseRemoteData(result.user);
            // Create a reference based on UID returned from Google auth
            const docRef = db.collection('users').doc(`${LocalUser.id}`);
            const uid = result.user.uid;
            // Save locally
            localforage.setItem('user', LocalUser)
                .then((user)=>{
                    this.setState({user: user});
                }).catch((err)=>{
                    console.log('Cant save user to local storage' + err);
                })
            docRef.get().then((doc)=>{
                // Check if document with the docRef ID exists, if not, we create one in the DB.
                if (doc.exists) {
                    console.log('User exists in DB');
                } else {
                    db.collection('users').doc(uid)
                    .set(this._parseRemoteData(result.user))
                    .then(()=>{
                        console.log('Saved user to db ' + RemoteUser);
                    }).catch((err)=>{
                        console.log('Error while saving user to Firestore ' + err);
                    })
                }
            }).catch((err)=>{
                console.log('Error while retrieving document ' + err );
            });
        }).catch((err)=>{
            console.log('Couldnt Authenticate ' + err);
        });
    }

    render(){
        const {
            user,
        } = this.state;
        return(
            user ?
           <Flex>
               <Welcome>
                   Welcome {PascalCase(user.displayName)}
               </Welcome>
                <Dropdown setUserStateNull={()=> this.setState({user: null})}>
                    <ProfilePic src={user.photoURL} />
                </Dropdown>
               
           </Flex>  
           :
           <GoogleSignInButton src={require('../../../../assets/images/GoogleSingIn.png')} onClick={this._signIn}/>
   
       )
    }
    
}