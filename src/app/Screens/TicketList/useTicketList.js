import { useEffect, useRef, useState } from "react";
import { Tickets } from "../../Services/Tickets";

const useTicketList = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ error: false, type: 'general', message: '' })

    const abortController = useRef(null);
    const loadTickets = async () => {
        try {

            if (abortController.current)
                abortController.current.abort();

            abortController.current = new AbortController();

            setIsLoading(true);
    
            const { data } = await Tickets.all(abortController.current);
            setTickets(data)
        }
        catch (er) {
            setTickets([]);
            setError({
                error: true,
                type: 'general',
                message: er.message
            })
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {

        loadTickets();
        return () => {
            if (abortController.current)
                abortController.current.abort()
        }

    }, [])

    const filter = async (value) => {

        if (abortController.current)
            abortController.current.abort();

        abortController.current=new AbortController();

        try {
            setIsLoading(true);

            if (value.trim() == 'select') {
                const { data } = await Tickets.all(abortController.current);
                setTickets(data)
            }
            else {
                const { data } = await Tickets.filter(value, abortController.current);
                setTickets(data)
            }
        }
        catch (er) {

            setTickets([]);
            setError({
                error: true,
                type: 'general',
                message: er.message
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    return [isLoading, tickets, error, filter]
}

export default useTicketList;