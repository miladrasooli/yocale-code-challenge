const UserCard = ({ user }) => {
    return <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg p-5 text-center">
        <h1 className="text-center font-bold">User details:</h1>
        <img className="rounded-full w-20 h-20 m-auto" src={user?.image} />
        <div>
            <b>Full Name:</b> {user?.firstName} {user?.lastName}
        </div>
        <div>
           <b> Date of birth:</b> {user?.dob}
        </div>
        <div>
            <b>Address:</b>{user?.address}
        </div>
    </div>
}

export default UserCard;