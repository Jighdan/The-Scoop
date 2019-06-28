import React from 'react';
import Router from 'next/router';
import Flex from '../../Flex';
import Button from '../../Button';
import localforage from 'localforage'
import { Firebase } from '../../../../utils/firebaseconfig';
import { IoMdLogOut } from 'react-icons/io';

const SignOut = (props) => {
    const {
        setState
    } = props;
    const _signOut = () => {
        Firebase.auth().signOut().then(()=>{
            localforage.removeItem('user').then(()=>{
                console.log('Logged out user');
                setState();
            }).catch((err)=>{
                console.log('Cant log out user' + err);
            });
        });
    }
    return(
        <Button onClick={_signOut} 
            style={{width: '135px'}}>
                <Flex justify='space-around'>
                    sign out <IoMdLogOut/>
                </Flex>
        </Button>
    )
}
export default SignOut;