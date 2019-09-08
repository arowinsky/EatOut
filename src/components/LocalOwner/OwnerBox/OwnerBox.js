import React from 'react';
import styles from './OwnerBox.module.scss';
import Button from '../../Button/Button';
import {Link} from 'react-router-dom';

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
                <div className={styles.box_wrapper}>
                    Nie masz jeszcze restauracji
                    <br/>
                <Link to="/add-new-local-1"><Button second >Dodaj swój lokal</Button></Link>
                </div>))
    }
}

export default OwnerBox;