import React from 'react';
import styles from './Posts.module.scss';
import PostItem from './PostItem/PostItem';
import PostForm from './PostForm/PostForm';


class Posts extends React.Component {
    render(){
        return (
            <div>
                <PostItem/>
                <PostForm/>
            </div>
        )
    }
}
export default Posts;