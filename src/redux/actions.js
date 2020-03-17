// import axios from 'axios';
import {Type} from './types';



function test(str) {
    return {type: Type.GET_TEST, payload: str};
};



export const getTest = function () {

    return async function (dispatch) {
        // const result = await axios
        //     .get(standartReq)
        //     .catch(error => {
        //         return error;
        //     });
        const result = {status:200, text:'test in store'}
        if (result.status === 200) {
            dispatch(test(result.text));
        }

    };
};

