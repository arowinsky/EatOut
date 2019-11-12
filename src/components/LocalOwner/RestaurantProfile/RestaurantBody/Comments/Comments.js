import React from 'react';
import styles from './Comments.module.scss';
import CommentItem from './CommentItem/CommentItem';
import CommentForm from './CommentForm/CommentForm';

class Comments extends React.Component {
    render(){
        return (
            <div className={styles.commentsWrapper}>
            <div className={styles.commentsContent}>
                <CommentItem/>
                <CommentForm/>
            </div>
        </div>
        )
    }
}
export default Comments;