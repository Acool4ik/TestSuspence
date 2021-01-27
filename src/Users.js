import React, {Fragment} from 'react';

export const Users = ({resourse}) => {
    const users = resourse.users.read();

    return (
        <Fragment>
            <h3>Modal Users</h3>
            <ul>

                {users.map(el => (
                    <li key={el.id}>{el.name}</li>
                ))}
                
            </ul>
        </Fragment>
    )
}