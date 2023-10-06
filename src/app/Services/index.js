import { Constants } from "../Constants";
import axios from 'axios'
export const initAxios=()=>{
    axios.defaults.baseURL = Constants.BASE_URL;
}