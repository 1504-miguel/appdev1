import { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data when the component first loads
        fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []); // empty array → run once on component mount

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <input type="checkbox" checked={user.completed} readOnly />
                        {user.name}
                        {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersList;

