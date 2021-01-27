import React, {Fragment} from 'react';

export const Posts = ({resourse}) => {
    const posts = resourse.posts.read();

    return (
        <Fragment>
            <h3>Modal Posts</h3>
            <ul>
            
                {posts.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}

            </ul>
        </Fragment>
    )
}