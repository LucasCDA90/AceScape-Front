import {useState} from "react";
import {http} from "../../Infrastructure/Http.ts";

export const AuthLoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handlerConnexion = async () => {
        try {
            const response = await http.post('/login', {
                username: username,
                password: password
            })
            
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <form action="" className="flex flex-col w-64 text-white">
            <div className="flex flex-col mb-4">
                <label htmlFor="username" className="text-white">Nom d'utilisateur :</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    id="username"
                    className="text-black p-2 border border-gray-600 rounded-md"
                    placeholder="Entrez votre nom d'utilisateur"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="password" className="text-white">Mot de passe :</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    className="text-black p-2 border border-gray-600 rounded-md"
                    placeholder="Entrez votre mot de passe"
                />
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                />
                <label htmlFor="terms" className="text-white text-sm">
                    J'accepte les <a href="#" className="text-green-400 underline">termes et conditions</a> et la <a href="#" className="text-green-400 underline">politique de cookies</a>.
                </label>
            </div>
            <a href="#" className="text-white mb-4">Mot de passe oublié ?</a>
            <div className="flex gap-4">
                <button className="b-vert-clair2x p-4 rounded-md">Créer un compte</button>
                <button onClick={handlerConnexion} className="b-vert-clair2x p-4 rounded-md">Se connecter</button>
            </div>
        </form>
    );
};
