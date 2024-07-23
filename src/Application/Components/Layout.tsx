import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ApplicationLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-around b-vert-clair text-white p-4">
        <h1>
          <NavLink to={"/"} className="mx-4 hover:b-vert-clair2x p-4 rounded-md">Home</NavLink>
        </h1>
        <h1>
          <NavLink to={"/blackjack"} className="mx-4 hover:b-vert-clair2x p-4 rounded-md">BlackJack</NavLink>
        </h1>
        <h1>
          <NavLink to={"/profile"} className="mx-4 hover:b-vert-clair2x p-4 rounded-md">Profile</NavLink>
        </h1>
        <h1>
          <NavLink to={"/rules"} className="mx-4 hover:b-vert-clair2x p-4 rounded-md">How to play</NavLink>
        </h1>
      </nav>
        <Outlet />
      <footer className="flex justify-center b-vert-clair text-white p-4">
        <p className="text-center">Site créé par Lucas Berger</p>
      </footer>
    </div>
  );
};
