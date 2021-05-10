import React from 'react';
import LeftCard from '../LeftCard/LeftCard';
import RightCard from '../RightCard/RightCard';
import styles from './CardsWrapper.module.scss';

const CardsWrapper = () => {
    return(
        <div className={styles.Wrapper}>
                <LeftCard/>
                <RightCard/>
        </div>
    );
}

export default CardsWrapper;