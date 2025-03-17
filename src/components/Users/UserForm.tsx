'use client'
import { useState } from "react";
import { createUser } from "@/services/users/userService";
import { User } from "@/models/User";

const UserForm = () => {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [localisation, setLocalisation] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newUser: Omit<User, "id"> = {
                nom,
                email,
                localisation: localisation || undefined,
            };

            await createUser(newUser);
            alert("Utilisateur ajouté avec succès !");
            setNom("");
            setEmail("");
            setLocalisation("");
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'utilisateur", error);
            alert("Échec de l'ajout de l'utilisateur.");
        }
    };

    return (
        <div>
            <h2>Ajouter un utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom:</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Localisation:</label>
                    <input
                        type="text"
                        value={localisation}
                        onChange={(e) => setLocalisation(e.target.value)}
                    />
                </div>

                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default UserForm;
