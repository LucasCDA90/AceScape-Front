import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PageProfileEdit = () => {
    const [valueForm, setValueForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        newPassword: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3002/user/66a7991c7978d393e05c2d30');
                setValueForm({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    username: response.data.username,
                    password: '',
                    confirmPassword: '',
                    newPassword: '',
                });
            } catch (error) {
                console.error('Erreur lors de la récupération des informations utilisateur', error);
            }
        };

        fetchUser();
    }, []);

    const handleUpdateInfo = async (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, lastName, email, username, password, newPassword, confirmPassword } = valueForm;

        if (newPassword && newPassword !== confirmPassword) {
            console.error('Les nouveaux mots de passe ne correspondent pas.');
            return;
        }

        try {
            await axios.put('http://localhost:3002/user/66a7991c7978d393e05c2d30', {
                firstName,
                lastName,
                email,
                username,
                ...(newPassword && { newPassword }), 
            }, {
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE3OTkxYzc5NzhkMzkzZTA1YzJkMzAiLCJpYXQiOjE3MjIyNTk4MDIsImV4cCI6MTcyMjI2NzAwMn0.B0jFeAzumeaUwyy4Oe-bVyHHzaXDNb4QCqYoKjjANVk", 
                    'Content-Type': 'application/json',
                },
            });
            console.log('Informations mises à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour des informations', error);
        }
    };

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        const { password, newPassword, confirmPassword } = valueForm;

        if (newPassword !== confirmPassword) {
            console.error('Les nouveaux mots de passe ne correspondent pas.');
            return;
        }

        try {
            await axios.put('http://localhost:3002/user', {
                password,
                newPassword,
            }, {
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE3OTkxYzc5NzhkMzkzZTA1YzJkMzAiLCJpYXQiOjE3MjIyNTk4MDIsImV4cCI6MTcyMjI2NzAwMn0.B0jFeAzumeaUwyy4Oe-bVyHHzaXDNb4QCqYoKjjANVk", // Assurez-vous de gérer correctement le token d'authentification
                    'Content-Type': 'application/json',
                },
            });
            console.log('Mot de passe mis à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du mot de passe', error);
        }
    };

    const handleBackToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900 p-6">
            <div className="w-full max-w-5xl bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Modifier le Profil</h2>
                <div className="flex space-x-12">
                    <div className="w-1/2">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Informations de base</h3>
                        <form className="space-y-6" onSubmit={handleUpdateInfo}>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                                <input
                                    value={valueForm.username}
                                    onChange={(e) => setValueForm({ ...valueForm, username: e.currentTarget.value })}
                                    type="text"
                                    id="username"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Votre nom d'utilisateur"
                                />
                            </div>

                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                                <input
                                    value={valueForm.firstName}
                                    onChange={(e) => setValueForm({ ...valueForm, firstName: e.currentTarget.value })}
                                    type="text"
                                    id="firstName"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Prénom"
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                                <input
                                    value={valueForm.lastName}
                                    onChange={(e) => setValueForm({ ...valueForm, lastName: e.currentTarget.value })}
                                    type="text"
                                    id="lastName"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Nom"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse mail</label>
                                <input
                                    value={valueForm.email}
                                    onChange={(e) => setValueForm({ ...valueForm, email: e.currentTarget.value })}
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Adresse mail"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Sauvegarder les informations
                            </button>
                        </form>
                    </div>

                    <div className="w-1/2">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Changer le mot de passe</h3>
                        <form className="space-y-6" onSubmit={handleUpdatePassword}>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe actuel</label>
                                <input
                                    value={valueForm.password}
                                    onChange={(e) => setValueForm({ ...valueForm, password: e.currentTarget.value })}
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Mot de passe actuel"
                                />
                            </div>

                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                                <input
                                    value={valueForm.newPassword}
                                    onChange={(e) => setValueForm({ ...valueForm, newPassword: e.currentTarget.value })}
                                    type="password"
                                    id="newPassword"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Nouveau mot de passe"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmer nouveau mot de passe</label>
                                <input
                                    value={valueForm.confirmPassword}
                                    onChange={(e) => setValueForm({ ...valueForm, confirmPassword: e.currentTarget.value })}
                                    type="password"
                                    id="confirmPassword"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Confirmer le nouveau mot de passe"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Changer mot de passe
                            </button>

                            <button
                                type="button"
                                onClick={handleBackToProfile}
                                className="w-full bg-gray-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Retour au profil
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
