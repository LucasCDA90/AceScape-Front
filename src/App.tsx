import { Link } from 'react-router-dom';
import logo from './Application/images/logo-ace-scape.png';

export const App = () => {
  return (
    <div className='bg-green-900 text-white h-screen flex'>
      <div className='w-1/2 flex items-center justify-center'>
      <img src={logo} alt=""/>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-start p-8'>
        <div className='mb-8'>
          <span className='block mb-4'>"Le blackjack est une danse entre la chance et la stratégie. Saurez-vous trouver le bon équilibre ?"</span>
          <span>"Dans le blackjack, chaque carte est une opportunité. Prenez le risque et devenez maître du jeu."</span>
        </div>
        <div className='flex gap-4'>
          <Link to="/login">
            <button className="bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Se connecter
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Créer un compte
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
