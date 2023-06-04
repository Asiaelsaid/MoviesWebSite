import axios from 'axios';
const axiosInstance= axios.create({
baseURL:'https://api.themoviedb.org/3/movie',
// headers:'',
params:{
    api_key:'84e232612468edb90f073d13b93dbca2'
}

})
export default axiosInstance ;