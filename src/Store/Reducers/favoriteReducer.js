
const INTIAL_STATE = {
   favorite:[]
};


export default function favoriteReducer(state = INTIAL_STATE, action) {

    switch (action.type) {
        case 'ADD_TO_FAVOIRTE':
            return { ...state, favorite:action.payload }

        default:
            return state;
    }

}