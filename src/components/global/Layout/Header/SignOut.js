import React from 'react';
import Router from 'next/router';
import Flex from '../../Flex';
import Button from '../../Button';
import localforage from 'localforage'
import { Firebase } from '../../../../config/firebaseconfig';
import { IoMdLogOut } from 'react-icons/io';

const SignOut = (props) => {
    const {
        setUserStateNull,
        className,
        style,
        color,
        shadow,
    } = props;
    const _signOut = () => {
        Firebase.auth().signOut().then(()=>{
            localforage.removeItem('user').then(()=>{
                console.log('Logged out user');
                setUserStateNull();
            }).catch((err)=>{
                console.log('Cant log out user' + err);
            });
        });
    }
    return(
        <Button onClick={_signOut} className={className} shadow={shadow}
        style={{width: props.width || '135px', ...style}} color={color}>
            <Flex justify='space-around'>
                sign out <IoMdLogOut/>
            </Flex>
        </Button>
    )
}
export default SignOut;