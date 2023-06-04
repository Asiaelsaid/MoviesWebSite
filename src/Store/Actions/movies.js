import axiosInstance from './../../axiosConfig/instance';

export default function moviesaAction(){

return (dispatch)=>{
    axiosInstance
      .get("/popular?")
      .then((res) => {
        dispatch({
            type:'MOVIES',
            payload:res.data.results
        })
      })
      .catch((err) => {
        console.log(err);
      });
}
}