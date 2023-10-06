import { useEffect } from "react";
import useTicketDetail from "./useTicketDetail";
import Container from "../Layouts/Container";
import { useParams } from 'react-router-dom'
import UserCard from "./Components/UserCard";
import TicketCard from "./Components/TicketCard";

const TicketDetail = () => {

    const [isLoadingTicket, isLoadingUser, ticket, user, error, getTicket, getUser, changeStatus] = useTicketDetail();
    const { id } = useParams();


    useEffect(() => {
        getTicket(id);
    }, []);

    useEffect(() => {
        if (ticket != null) {
            getUser(ticket.userId)
        }
    }, [ticket])

    const onChangeStatus = (event) => {
        changeStatus(ticket.id,event.target.value)
    }
    return <Container>
        {isLoadingUser && <div>Loading user...</div>}
        {!isLoadingUser && user != null && <UserCard user={user} />}

        {isLoadingTicket && <div>Loading ticket...</div>}
        {!isLoadingTicket && user != null && <TicketCard ticket={ticket} onChange={onChangeStatus} />}

    </Container>
}

export default TicketDetail;