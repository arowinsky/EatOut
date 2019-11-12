import React from 'react';
import styles from './Info.module.scss';

class Info extends React.Component {
    render(){
        return (
            <div className={styles.infoWrapper}>
               <div className={styles.infoContent}>
                   <div className={styles.title}>Kontakt</div>
                   <div className={styles.content}>numer telefonu: 123-456-789</div>
                   <div className={styles.content}>email: nazwa@example.com</div>
                   <div className={styles.title}>Kuchnia</div>
                   <div className={styles.content}>kuchnia1, kuchnia2, kuchnia3</div>
                   <div className={styles.title}>Dania</div>
                   <div className={styles.content}>danie1, danie2, danie3</div>
                   <div className={styles.title}>Udogodnienia</div>
                   <div className={styles.content}>udogodnienie1, udogodnienie2, udogodnienie3</div>
                   <div className={styles.title}>Godziny otwarcia</div>
                   <div className={styles.timeWrapper}>
                        <div className={styles.timeDay}>Poniedziałek 10-20</div>
                        <div className={styles.timeDay}>Wtorek 10-20</div>
                        <div className={styles.timeDay}>Środa 10-20</div>
                        <div className={styles.timeDay}>Czwartek 10-20</div>
                        <div className={styles.timeDay}>Piątek 10-20</div>
                        <div className={styles.timeDay}>Sobota 10-20</div>
                        <div className={styles.timeDay}>Niedziela 10-20</div>
                   </div>
               </div>
            </div>
        )
    }
}
export default Info;