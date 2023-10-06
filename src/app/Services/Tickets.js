import axios from "axios";

export const Tickets={
    all:(controller)=>axios.get('/tickets',{signal: controller.signal}),
    filter:(value,controller)=>axios.get(`tickets?status=${value}`,{signal:controller.signal}),
    one:(id,controller)=>axios.get(`/tickets/${id}`,{signal:controller.signal}),
    updateStatus:(id,status,controller)=>axios.patch(`tickets/${id}`,{status},{signal:controller.signal})
}