import './Insfrastructure/Style/index.css'
import logo from './Application/images/logo-ace-scape.png'
import { AuthLoginForm } from './Application/Components/AuthLoginForm'

export const App = () => {
  return (
    <div className='b-vert-fonce text-white'>
      <img src={logo} alt=""/>
      <span>"Join the AceScape adventure, where every card dealt leads to an epic journey through the realms of chance and strategy!"</span>
      <span>"Life is like a deck of cards; it's not about the hand you're dealt, but how you play it."</span>
      <AuthLoginForm/>

      
    </div>
  )
}