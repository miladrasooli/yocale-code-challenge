import { useEffect, useRef, useState } from "react";
import { Tickets } from "../../Services/Tickets";
import { Users } from "../../Services/Users";


const useTicketDetail = () => {
    const [ticket, setTicket] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoadingTicket, setIsLoadingTicket] = useState(false);
    const [isLoadingUser, setIsLoadingUser] = useState(false);

    const [error, setError] = useState({ error: false, type: 'general', message: '' })
    const abortController = useRef(new AbortController());
    const isFirstLoad=useRef(true)

    const getTicket = (id) => {

        loadSingleTicket(id);
    }

    const getUser = (id) => {
        loadSingleUser(id);
    }

    const loadSingleUser = async (id) => {
        try {
            setIsLoadingUser(true);
            const { data } = await Users.one(id, abortController.current);
            setUser(data)
        }
        catch (er) {
            setTicket([]);
            setError({
                error: true,
                type: 'user',
                message: er.message
            })
        }
        finally {
            setIsLoadingUser(false)
        }
    }

    const loadSingleTicket = async (id) => {
        try {
            setIsLoadingTicket(true);
            const { data } = await Tickets.one(id);
            setTicket(data)
        }
        catch (er) {
            setTicket([]);
            setError({
                error: true,
                type: 'ticket',
                message: er.message
            })
        }
        finally {
            setIsLoadingTicket(false)
        }
    }
    const changeStatus = async (id, status) => {
        try {
            setIsLoadingTicket(true);
            await Tickets.updateStatus(id, status);
            setIsLoadingTicket(false);
            setTicket({...ticket,status:status})
        }
        catch (er) {
            setIsLoadingTicket(false)
            setError({
                error: true,
                type: 'ticket',
                message: er.message
            })

        }
        finally {
            setIsLoadingTicket(false)
        }
    }

    useEffect(() => {
        return abortController.current.abort();
    }, [])


    return [isLoadingTicket, isLoadingUser, ticket, user, error, getTicket, getUser, changeStatus]
}

export default useTicketDetail;