import React from 'react';
import styles from './LeftCard.module.scss';
import LoginPic from '../../Assets/Images/LoginPic.png';
const LeftCard = () => {
    return(
        <div className={styles.Wrapper}>
            <div className={styles.LeftCard}>
                <div className={styles.Login_Text}>
                    <p><span>Welcome back! </span><span>Nice to see you again, we hope you are doing great</span></p>
                </div>
                <div className={styles.Login_Picture}>
                    <img src={LoginPic} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default LeftCard;