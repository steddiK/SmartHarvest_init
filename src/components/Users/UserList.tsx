'use client'
import { useEffect, useState } from "react";
import { getUsers } from "@/services/users/userService";
import { User } from "@/models/User";

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error("Erreur lors du chargement des utilisateurs", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nom} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
