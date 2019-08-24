import React from 'react';
import styles from './OwnerContent.module.scss';
import OwnerBox from '../OwnerBox/OwnerBox';
import taco from '../../../assets/body/taco.png';
import FoodImgComponent from '../../Footer/FooterImages/FoodImgComponent';

class OwnerContent extends React.Component {
    constructor(props){
        super();
        this.state = {
            food: "taco"
        }
    }
    render(){
        return (
            <div className={styles.owner_wrapper}>
                <div className={styles.salutation}>Witaj,</div>
                <div className={styles.owner_name}>Lorem Ipsum</div>
                <OwnerBox/>
                <FoodImgComponent imagePath={taco}/>
                
            </div>
        )
    }
}

export default OwnerContent;