import React from 'react';
import styles from './PostForm.module.scss';

class PostForm extends React.Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <div className={styles.formWrapper}>
                    <div className={styles.formItem}>
                        <textarea className={styles.commentArea}></textarea>
                        <button className={styles.button}>Wyślij</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm;