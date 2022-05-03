import React from 'react';
import Logo from '../../Assets/Logo.png'
import {ImgLogo, DivContainer} from './Styled'

function Header() {
    return (
        <div>
            <DivContainer>
                <ImgLogo src={Logo} alt="Logo Labex"/>
            </DivContainer>
        </div>
    );
}

export default Header;