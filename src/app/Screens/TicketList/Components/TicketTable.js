import TicketListHeader from "./TicketListHeader";
import TicketRow from "./TicketRow";


const TicketTable = ({ tickets, isLoading, onSelect, filterChanged }) => {

    const _onSelect = (id) => {
        onSelect(id)
    }


    return <div className="p-5">
        <label>
            Filter by status:
            <select onChange={filterChanged}>
                <option value={'select'}>Select</option>
                <option value={'unassigned'}>Unassigned</option>
                <option value={'completed'}>Completed</option>
                <option value={'assigned'}>Assigned</option>
            </select>
        </label>

        <table className="min-w-full divide-y divide-gray-300">


            <TicketListHeader />

            <tbody>
                {tickets.map((ticket, index) => (
                    <TicketRow key={ticket.id + '_' + index} ticket={ticket} onSelect={_onSelect} />
                ))}
            </tbody>
        </table>


    </div>
}

export default TicketTable;