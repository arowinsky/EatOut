import React from 'react';
import styles from './OwnerBox.module.scss';

class OwnerBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isRestaurant: false};
      }
    render(){
        return (
            (this.state.isRestaurant 
            ?
                 <div className={styles.box_wrapper}>Twoja restauracja to:</div> 
            : 
                <div className={styles.box_wrapper}>Nie masz jeszcze restauracji</div>))
    }
}

export default OwnerBox;