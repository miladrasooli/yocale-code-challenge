const TicketCard = ({ ticket,onChange }) => {
    return <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg p-5 text-center">
        <h1 className="text-center font-bold">Ticket details:</h1>
        <div>
            <b>id:</b> {ticket?.id} 
        </div>
        <div>
            <b>Number:</b>{ticket?.number}
        </div>
        <div>
           <b> Status:</b> 
           <select onChange={onChange} value={ticket.status}>
                <option value={'unassigned'}>Unassigned</option>
                <option value={'completed'}>Completed</option>
                <option value={'assigned'}>Assigned</option>
            </select>

        </div>

       
    </div>
}

export default TicketCard;