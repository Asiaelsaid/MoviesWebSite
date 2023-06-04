const INTIAL_STATE = {
    movies:[]
 };
 
 
 export default function moviesReducer(state = INTIAL_STATE, action) {
 
     switch (action.type) {
         case 'MOVIES':
             return { ...state, movies:action.payload }
 
         default:
             return state;
     }
 
 }