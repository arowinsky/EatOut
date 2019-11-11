import React from 'react';
import styles from './Menu.module.scss';
import image from '../../../../../assets/body/placeholder.png'

class Menu extends React.Component {
    render(){
        return (
            <div className={styles.menuWrapper}>
                <div className={styles.menuContent}>
                    <img src={image} alt="menu"/>
                </div>
            </div>
        )
    }
}
export default Menu;