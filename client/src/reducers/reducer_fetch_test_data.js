import { FETCH_TEST_DATA } from "../actions/types";

export default function(state = {}, action) {
    console.log("ACTION  : ",action);
    switch(action.type) {
        case FETCH_TEST_DATA:
            return action.payload.data;
        default:
            return state;
    }
}

