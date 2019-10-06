import React from 'react';
import styles from '../NewLocalForm.module.scss';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Button from './../../../Button/Button';



class NewLocalResume extends React.Component {
   
    render() {
        return (
            <div className={styles.restaurantFormWrapper}>
               <div className={styles.formTitle}>Potwierdź dane:</div>  
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
  )(NewLocalResume);