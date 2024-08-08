import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../Module/User.hook.ts";
import { user$ } from "../../Module/User.ts";

export const PageProfileEdit = () => {
    const user = useUserInfo();
    const [valueForm, setValueForm] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        username: user?.username || '',
    });
    
    const [valuePasswordForm, setValuePasswordForm] = useState({
        password: '',
        confirmPassword: '',
        newPassword: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setValueForm({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
            });
        }
    }, [user]);

    const handleUpdateInfo = async (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, lastName, email, username } = valueForm;

        try {
            const response = await axios.put(`http://localhost:3002/user/${user?._id}`, {
                firstName,
                lastName,
                email,
                username,
            }, {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Informations mises à jour avec succès');
            // Mettre à jour l'observable avec les nouvelles informations utilisateur
            user$.next(response.data);
            navigate('/profile');
        } catch (error) {
            console.error('Erreur lors de la mise à jour des informations', error);
        }
    };

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        const { password, newPassword, confirmPassword } = valuePasswordForm;

        if (newPassword !== confirmPassword) {
            console.error('Les nouveaux mots de passe ne correspondent pas.');
            return;
        }

        try {
            const response = await axios.put(`http://localhost:3002/user/${user?._id}`, {
                password: newPassword
            }, {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Mot de passe mis à jour avec succès');
            console.log(response)
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
                                    value={valuePasswordForm.password}
                                    onChange={(e) => setValuePasswordForm({ ...valuePasswordForm, password: e.currentTarget.value })}
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Mot de passe actuel"
                                />
                            </div>

                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                                <input
                                    value={valuePasswordForm.newPassword}
                                    onChange={(e) => setValuePasswordForm({ ...valuePasswordForm, newPassword: e.currentTarget.value })}
                                    type="password"
                                    id="newPassword"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Nouveau mot de passe"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmer nouveau mot de passe</label>
                                <input
                                    value={valuePasswordForm.confirmPassword}
                                    onChange={(e) => setValuePasswordForm({ ...valuePasswordForm, confirmPassword: e.currentTarget.value })}
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
