import React from 'react';
import styles from './Search.module.scss';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';


const Search = () =>(
    <form>
        <div className={styles.search_container}>
            <input className={styles.search_input} type="text"/>
            <button type="submit" className={styles.search_icon}> <FontAwesomeIcon icon={faSearchLocation} /></button>
        </div>
    </form>
)

export default Search;
