import React from 'react';
import styles from './PostItem.module.scss';

class PostItem extends React.Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <div className={styles.itemWrapper}>
                    <div className={styles.commentOwner}>
                        <div className={styles.icon}>ikona</div>
                        <div className={styles.name}>name</div>
                        <div className={styles.date}>data</div>
                    </div>

                    <div className={styles.commentItem}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem;