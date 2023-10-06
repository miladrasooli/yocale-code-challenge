import { useHistory  } from "react-router-dom";
import TicketTable from "./Components/TicketTable";
import useTicketList from "./useTicketList";
import Container from "../Layouts/Container";

export default function TicketList() {

    const [isLoading, tickets, error,filter] = useTicketList();
    const history = useHistory();

    const onTicketSelect=(id)=>{
        history.push(`/ticket/${id}`)
    }

    const onFilter=(event)=>{
        filter(event.target.value)
    }
    return (
        <Container>
            <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Tickets</h1>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        disabled
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        New Ticket
                    </button>
                </div>
            </div>

            <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                {isLoading&&<div>Loading tickets...</div>}
                {!isLoading&&tickets.length>0&&<TicketTable filterChanged={onFilter} tickets={tickets} isLoading={isLoading} onSelect={onTicketSelect}/>}
                {!isLoading&&tickets.length==0&&<div>No tickets to show</div>}
            </div>
        </div>
        </Container>
    )
}
