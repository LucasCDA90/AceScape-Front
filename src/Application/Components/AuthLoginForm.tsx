import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const AuthLoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate(); // Redirection react-router

    const handlerConnexion = async () => {
        try {
            const response = await axios.post('http://localhost:3002/login', {
                username,
                password
            });
            

            setSuccessMessage("Connexion réussie !");
            setErrorMessage("");

            
            localStorage.setItem('token', response.data.token);
            
            
            navigate('/');
        } catch (error: any) {
            setSuccessMessage("");
            setErrorMessage(error.response?.data?.message || 'Erreur lors de la connexion.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900 p-6">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Se connecter</h2>
                <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    handlerConnexion();
                }}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Entrez votre nom d'utilisateur"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                    
                    <a href="#" className="text-green-600 hover:underline">Mot de passe oublié ?</a>
                    
                    {errorMessage && (
                        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
                    )}
                    
                    {successMessage && (
                        <div className="text-green-500 text-sm mb-4">{successMessage}</div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Se connecter
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <Link to="/" className="text-green-600 hover:underline">Retour à l'accueil</Link>
                </div>
            </div>
        </div>
    );
};
