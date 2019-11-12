import React from 'react';
import styles from './Header.module.scss';

class RestaurantHeader extends React.Component {
    render() {
        return (
            <div>
               <div className={styles.headerWrapper}></div>
               <div className={styles.iconWrapper}></div>
               <div className={styles.adressWrapper}>
                   <div className={styles.title}>Nazwa restauracji</div>
                   <div>ul. Przykładowa 12, Poznań</div>
                   <div>dzielnica</div>
               </div>
            </div>
        )
    }
}
export default RestaurantHeader;