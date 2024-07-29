import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export const PageProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/user'); //marche pas
        //const response = await axios.get('http://localhost:3002/user/'); //marche pas non plus
        setUser(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 p-6">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Informations du Profil</h2>
        <div className="space-y-6">
          {user && (
            <>
              <div className="flex items-center">
                <span className="font-semibold w-1/3">Prénom:</span>
                <span>{user.firstName}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-1/3">Nom:</span>
                <span>{user.lastName}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-1/3">Nom d'utilisateur:</span>
                <span>{user.username}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-1/3">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="mt-6 text-center">
                <Link to="/profile/edit" className="inline-block bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Modifier le profil et/ou le mot de passe
                </Link>
              </div>
            </>
          )}
          {!user && (
            <div className="text-center text-gray-600">Chargement des informations du profil...</div>
          )}
        </div>
      </div>
    </div>
  );
};
