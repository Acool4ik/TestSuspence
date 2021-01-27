import React, {Suspense} from 'react';
import useResource from './resource';
import {Posts} from './Posts';
import {Users} from './Users';

function App() {
    const resourse = useResource()

    return (
        <div className="container">
            <h1>Suspence</h1>

            <Suspense fallback={<p>Loading posts...</p>}>
                <Posts resourse={resourse} />
            </Suspense>

            <Suspense fallback={<p>Loading users...</p>}>
                <Users resourse={resourse}/>
            </Suspense>

            {/* <Suspense fallback={<p>Loading...</p>}>
                <Posts resourse={resourse} />
                <Users resourse={resourse}/>
            </Suspense> */}
            
        </div>
    );
}


export default App;
