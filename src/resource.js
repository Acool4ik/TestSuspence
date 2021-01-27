export default function useResource() {
    return {
        posts: wrapperPromise(fetchPosts()),
        users: wrapperPromise(fetchUsers())
    }
}

const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, ms)
    })
}

function wrapperPromise(propmise) {
    let status = 'pending';
    let response;
    const suspender = propmise
       .then(r => {
            status = 'success';
            response = r; 
       })
       .catch(err => {
            status = 'error';
            response = err;
       });

    return {
        read() {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw response
            } else if (status === 'success') {
                return response
            }
        }
    }
    
}

function fetchPosts() {
    return delay(6000)
        .then(() => fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'))
        .then(resp => resp.json())
}

async function fetchUsers() {
    await delay(3000)
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
    return res.json();
}