import axios from "axios";
const instance = axios.create({
    baseURl:"https://api.themoviedb.org"
});
export default instance;