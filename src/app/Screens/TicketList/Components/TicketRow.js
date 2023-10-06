const TicketRow = ({ ticket, onSelect }) => {

    return <tr>
        <td
            className={'border-t border-transparent relative py-4 pl-4 pr-3 text-sm sm:pl-6'}>
            <div className="font-medium text-gray-900">
                {ticket.id}
            </div>

        </td>

        <td
            className={'border-t border-transparent relative py-4 pl-4 pr-3 text-sm sm:pl-6'}>
            <div className="font-medium text-gray-900">
                {ticket.userId}
            </div>

        </td>

        <td
            className={'border-t border-transparent relative py-4 pl-4 pr-3 text-sm sm:pl-6'}>
            <div className="font-medium text-gray-900">
                {ticket.number}
            </div>

        </td>

        <td
            className={'border-t border-transparent relative py-4 pl-4 pr-3 text-sm sm:pl-6'}>
            <div className="font-medium text-gray-900">
                {ticket.status}
            </div>

        </td>

        <td
            className={'border-t border-transparent relative py-4 pl-4 pr-3 text-sm sm:pl-6'}
        >
            <button
                onClick={() => onSelect(ticket.id)}
                type="button"
                className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
            >
                Select
            </button>
        </td>
    </tr>
}

export default TicketRow;