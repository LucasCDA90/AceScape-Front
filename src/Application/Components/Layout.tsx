import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ApplicationLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-around items-center bg-green-800 text-white pl-6 pr-6">
        <NavLink
          to={"/home"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:hover:bg-green-600"
        >
          Acceuil
        </NavLink>
        <NavLink
          to={"/blackjack"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:hover:bg-green-600"
        >
          BlackJack
        </NavLink>
        <NavLink
          to={"/profile"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:hover:bg-green-600"
        >
          Profil
        </NavLink>
        <NavLink
          to={"/rules"}
          className="px-24 py-8 text-lg font-semibold rounded-md transition-transform duration-300 ease-in-out transform hover:hover:bg-green-600"
        >
          Comment jouer
        </NavLink>
      </nav>
      <Outlet />
      <footer className="flex justify-center bg-green-800 text-white p-4">
        <p className="text-center">Site créé par Lucas Berger</p>
      </footer>
    </div>
  );
};
