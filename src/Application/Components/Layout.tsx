import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { user$ } from "../../Module/User";

export const ApplicationLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("ok")
    user$.subscribe(async (user) => {
      if (user && user.token) {
        try {
          await axios.post("http://localhost:3002/logout", {}, {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          });
          
          localStorage.removeItem('token');
          user$.next(null);
          navigate("/");
        } catch (error) {
          console.error("Erreur lors de la déconnexion :");
        }
      } else {
        console.error("Erreur : Utilisateur non connecté ou jeton manquant.");
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-around items-center bg-green-800 text-white pl-6 pr-6">
        <NavLink
          to={"/home"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:bg-green-600"
        >
          Acceuil
        </NavLink>
        <NavLink
          to={"/blackjack"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:bg-green-600"
        >
          BlackJack
        </NavLink>
        <NavLink
          to={"/profile"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:bg-green-600"
        >
          Profil
        </NavLink>
        <NavLink
          to={"/rules"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:bg-green-600"
        >
          Comment jouer
        </NavLink>
        <button
          onClick={handleLogout}
          className="px-8 py-4 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:bg-red-600"
        >
          Déconnexion
        </button>
      </nav>
      <Outlet />
      <footer className="flex justify-center bg-green-800 text-white p-4">
        <p className="text-center">Site créé par Lucas Berger</p>
      </footer>
    </div>
  );
};
