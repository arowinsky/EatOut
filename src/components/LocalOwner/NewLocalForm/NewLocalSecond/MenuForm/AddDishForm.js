import React from 'react';
import styles from '../../NewLocalForm.module.scss';

class AddDish extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={styles.restaurantFormWrapper}>
                   <div className={styles.categoryElement}>
                        <label>Dodaj danie: </label>
                        <input 
                            type="text"
                            className={styles.input}
                            onChange={this.handleChange}
                            />
                   </div>
                   <div className={styles.categoryElement}>
                        <label>Dodaj cenę: </label>
                        <input 
                            type="number"
                            className={styles.input}
                            min="0" 
                            />
                   </div>
                   <div className={styles.categoryElement}>
                        <label>Dodaj opis: </label>
                        <input 
                            type="text"
                            className={styles.input} 
                            />
                   </div>
                   <button type="submit" className={styles.newDishBtn}>Dodaj danie</button>
                </form>
            </div>
        )
    }
}
export default AddDish;
