import React from "react";
import styles from "../../AddEatingPlace.module.scss";
import { Field } from "formik";
const MealName = ({ mealCatName }) => {
  const categoriesName = mealCatName.length ? (
    mealCatName.map(mealCatName => {
      return (
        <div>
          <div key={mealCatName.id}>
            <div className={styles.checkboxItem}>
              <label htmlFor={mealCatName.name}>{mealCatName.name}</label>
              <Field
                type="checkbox"
                name={mealCatName.value}
                checked={mealCatName.value === true ? true : null}
              />
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>Nie masz żadnych kategorii</p>
  );
  return <div className={styles.mealNameWrapper}>{categoriesName}</div>;
};
export default MealName;
