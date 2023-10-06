import axios from "axios";

export const Users={
    one:(id,controller)=>axios.get(`/users/${id}`,{signal:controller.signal})
}