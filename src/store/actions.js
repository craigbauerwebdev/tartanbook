// Action Creators
import axios from 'axios';

export const getVendors = (invoke = null) => {
    if (!invoke) {
        return async (dispatch, getState) => {
            const response = await axios.get('http://tartanweddings.com/wp-json/wp/v2/tartanbook');
            dispatch({
                type: "FETCH_VENDORS",
                payload: response.data
            });
        }
    }
}


export const getVenues = () => {
    // get venues
}