import React from 'react';
import styles from './OwnerContent.module.scss';
import OwnerBox from '../OwnerBox/OwnerBox';


class OwnerContent extends React.Component {
    render(){
        return (
            <div className={styles.owner_wrapper}>
                <div className={styles.salutation}>Witaj,</div>
                <div className={styles.owner_name}>Lorem Ipsum</div>
                <OwnerBox/>
            </div>
        )
    }
}

export default OwnerContent;