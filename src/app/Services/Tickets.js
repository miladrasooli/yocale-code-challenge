import axios from "axios";

export const Tickets={
    all:(controller)=>axios.get('/tickets',{signal: controller.signal}),
    filter:(value,controller)=>axios.get(`tickets?status=${value}`,{signal:controller.signal}),
    one:(id)=>axios.get(`/tickets/${id}`),
    updateStatus:(id,status)=>axios.patch(`tickets/${id}`,{status})
}