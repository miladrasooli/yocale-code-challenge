import axios from "axios";

export const Users={
    one:(id)=>axios.get(`/users/${id}`)
}