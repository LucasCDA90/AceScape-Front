import logo from './Application/images/logo-ace-scape.png'
import { AuthLoginForm } from './Application/Components/AuthLoginForm'

export const App = () => {
  return (
    <div className='b-vert-fonce text-white h-screen flex'>
      <div className='w-1/2 flex items-center justify-center'>
        <img src={logo} alt=""/>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-start p-8'>
        <div className='mb-8'>
          <span className='block mb-4'>"Le blackjack est une danse entre la chance et la stratégie. Saurez-vous trouver le bon équilibre ?"</span>
          <span>"Dans le blackjack, chaque carte est une opportunité. Prenez le risque et devenez maître du jeu."</span>
        </div>
      </div>
    </div>
  )
}
