import axios from 'axios';
import { FETCH_TEST_DATA } from './types';


export const fetchTestData = (dispatch) => {
    return (dispatch) => {
        axios.get('/api/data')
            .then((res) => {
                dispatch({type: FETCH_TEST_DATA, payload: res.data});
            })
    }
};