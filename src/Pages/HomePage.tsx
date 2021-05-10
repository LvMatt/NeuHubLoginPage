import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import styles from './HomePage.module.scss';
import CardsWrapper from '../Components/CardsWrapper/CardsWrapper';
import Logo from '../Assets/Images/Logo.png'
import Hub from '../Assets/Images/HUB.png'

class HomePage extends Component {
    render(){
        return(
            <div className={styles.App}>
                <Navbar 
                    logo={Hub}
                    logoAdditional={Logo}
                />
                <CardsWrapper/>
            </div>
        )
    }
}

export default HomePage;