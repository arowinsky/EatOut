import React from 'react';
import styles from '../NewLocalForm.module.scss';
import MealName from './categoriesType/MealName/MealName';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Formik, Form } from 'formik';
import Button from '../../../Button/Button';



class NewLocalCategory extends React.Component {
    state = {
        mealCatName: [
            {
                id: 1,
                name: "pizza"
            },
            {
                id: 2,
                name: "makaron"
            },
            {
                id: 3,
                name: "burger"
            },
            {
                id: 4,
                name: "sushi"
            },
            {
                id: 5,
                name: "kebab"
            },
            {
                id: 6,
                name: "zapiekanki"
            },
            {
                id: 7,
                name: "ramen"
            },
            {
                id: 8,
                name: "stek"
            },
            {
                id: 9,
                name: "obiad"
            },
            {
                id: 10,
                name: "śniadanie"
            },
            {
                id: 11,
                name: "lunch"
            }

        ]
    }
    render() {
        return (
            <div className={styles.restaurantFormWrapper}>
                  <div className={styles.formTitle}>Danie</div>
                  <Formik
                            initialValues={{ 
                            
                            }}
                            validate={values => {
                                let errors = {};
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                            }}
                            >
                            {({ isSubmitting }) => (
                                
                                <Form className={styles.restaurantForm}>
                                    <MealName mealCatName={this.state.mealCatName}/>
                                    <Button second 
                                        type="submit"
                                        className={styles.button}  
                                        disabled={isSubmitting}
                                    >
                                        <Link to="/add-new-local-3"
                                            disabled={isSubmitting}
                                            className={styles.button}
                                        >
                                            Dalej
                                        </Link>
                                    </Button>
                                </Form>
                                )}
                        </Formik>
                
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
      
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
     
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewLocalCategory);