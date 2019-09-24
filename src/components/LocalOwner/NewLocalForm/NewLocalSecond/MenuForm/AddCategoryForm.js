import React from 'react';
import styles from '../../NewLocalForm.module.scss';

class AddCategory extends React.Component {
    state = {
       name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCategory(this.state);
        this.setState({
            name: ''
        })
       
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={styles.restaurantFormWrapper}>
                   <div className={styles.categoryElement}>
                        <label>Dodaj kategorię: </label>
                        <input 
                            id="catInput"
                            type="text"
                            className={styles.input} 
                            onChange={this.handleChange}
                            placeholder="+"
                            value={this.state.name}
                            />
                   </div>
                   
                </form>
            </div>
        )
    }
}
export default AddCategory;