import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
  } from 'styled-dropdown-component';
import SignOut from './SignOut';

const CustomDropdown = (props) => {
    const [ isDropdownHidden, toggleDropdown] = useState(true);
    const {
        children,
        className,
        style,
        userState
    } = props;
    const _toggle = () => {
        const bool = !isDropdownHidden
        toggleDropdown(bool);
    }
    return(
        <Dropdown className={className}>
            <div onClick={_toggle}>
                {children}
            </div>
            <DropdownMenu hidden={isDropdownHidden}>
                <DropdownItem>
                    test
                </DropdownItem>
                <DropdownItem>
                    test
                </DropdownItem>
                <DropdownItem>
                    <SignOut setState={userState}/>
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    )
}
export default CustomDropdown;