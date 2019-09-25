import React from 'react';
import styles from '../../NewLocalForm.module.scss';

const NewCategory = ({categories, deleteCategory, addMeal}) => {

    const categoriesList = categories.length ? (
        categories.map(categories => {
            return (
                <div>
                <div key={categories.id} className={styles.categoryWrapper}> 
                    <div 
                        onClick={() => {deleteCategory(categories.id)}}
                        className={styles.categoryName}
                    >
                        {categories.name} <div className={styles.deleteElement}>-</div>
                    </div>
                    <div>{categories.dish !== undefined ? categories.dish.dishName : <p>Nie ma dań w danej kategorii</p> }</div>
                </div>
                   
                </div>
            )
        })
    ) : (
        <p>Nie masz żadnych kategorii </p>)
   return (
       <div className={styles.categoryWrapper}>
           {categoriesList}
       </div>
   ) 
}
export default NewCategory;