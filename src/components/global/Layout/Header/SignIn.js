import React, { Component } from 'react';
import Router from 'next/router'
import styled from 'styled-components';
import Flex from '../../Flex';
import Dropdown from './Dropdown';
import localforage from 'localforage'
import { PascalCase } from '../../../../utils/pascalCase';
import { Firebase, GoogleAuthProvider } from '../../../../utils/firebaseconfig';

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

    _parseGoogleAuthData = (obj) => {
        const model = {
            displayName: obj.displayName,
            photoURL: obj.photoURL,
            email: obj.email,
        }
        return model;
    }

   _signIn = () => {
        Firebase.auth().signInWithPopup(GoogleAuthProvider).then((result)=>{
            const User = this._parseGoogleAuthData(result.user)
            localforage.setItem('user', User)
            .then((user)=>{
                this.setState({user: user})
            }).catch((err)=>{
                console.log('CANT SET ITEM' + err)
            });
            
        }).catch((err)=>{
            console.log('CANT AUTHENTICATE' + err)
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
                <Dropdown userState={()=> this.setState({user: null})}>
                    <ProfilePic src={user.photoURL} />
                </Dropdown>
               
           </Flex>  
           :
           <GoogleSignInButton src={require('../../../../assets/images/GoogleSingIn.png')} onClick={this._signIn}/>
   
       )
    }
    
}