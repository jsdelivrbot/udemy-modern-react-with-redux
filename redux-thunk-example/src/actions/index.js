import axios from 'axios';

export const FETCH_PROFILES = 'FETCH_PROFILES';

export function fetchUsers() {

    const request = axios.get('http://jsonplaceholder.typicode.com/users');

    return (dispatch) => {
        request.then(( { data } ) => {
            dispatch({
                type: FETCH_PROFILES,
                payload: data
            })
        })
    }

}