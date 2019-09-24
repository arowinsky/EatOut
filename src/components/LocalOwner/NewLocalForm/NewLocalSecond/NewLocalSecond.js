import React from 'react';
import styles from '../NewLocalForm.module.scss';
import Button from '../../../Button/Button';
import { connect } from "react-redux";
import NewCategory from './MenuForm/NewCatagory';
import AddCategory from './MenuForm/AddCategoryForm';
import {Link} from 'react-router-dom';


class NewLocalSecond extends React.Component {
    state = { 
        categories: [
            {
                id: 1,
                name: 'drinks', 
            },
            {
                id: 2,
                name: 'starters',
            }
        ]
    }
    deleteCategory = (id) => {
        const categories = this.state.categories.filter(categories => {
            return categories.id !== id
        });
        this.setState({
            categories
        })
    }
    addCategory = (category) => {
        category.id = Math.random();
        let categories = [...this.state.categories, category];
        this.setState({
            categories
        })
    }


    render () {
       // console.log(this.state.categories[0].dish.dishName);
        return (
            <div className={styles.restaurantFormWrapper}>
                <div className={styles.formTitle}>Dodaj menu</div>
                <div className={styles.restaurantForm}>
                    <div className={styles.newCategory}>
                        <NewCategory 
                            categories={this.state.categories}
                            deleteCategory={this.deleteCategory} 
                            addMeal={this.addMeal}                
                            />
                        <AddCategory addCategory={this.addCategory}/>
                    </div>
                    <Link to="/add-new-local-3" 
                    className={styles.button}>
                        <Button second 
                        type="submit"  
                        >
                            Dalej
                        </Button>
                    </Link>
                </div>
                
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
  )(NewLocalSecond);
  
//export default NewLocalFirst;