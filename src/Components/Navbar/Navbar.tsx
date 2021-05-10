import React from 'react';
import Logo from '../../Assets/Images/Logo.png'
import Hub from '../../Assets/Images/HUB.png'
import styles from './Navbar.module.scss';

// Navigation bar, that can be reused, if both props for logo image are specified

type NavbarProps = {
    logo: string,
    logoAdditional: string
}

const Navbar = (props : NavbarProps) => {
    return(
        <div className={styles.Wrapper} data-testid='navbarId'>
            <div className={styles.Navbar}>
                    <div className={styles.Logo}>
                        <a href="/">
                            <img src={props.logoAdditional} alt="Logo"/>
                            <img src={props.logo} alt="Hub"/>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;