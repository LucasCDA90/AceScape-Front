import './Insfrastructure/Style/index.css'
import aces from './Application/images/aces.png'
import logo from './Application/images/logo-ace-scape.png'
import { Nav } from './Application/Components/Nav'
import { AuthLoginForm } from './Application/Components/AuthLoginForm'

export const App = () => {
  return (
    <div className='b-vert-fonce text-white'>
      <Nav/>
      <img src={aces} alt="" className='w-24'/>
      <img src={logo} alt="" /* className='w-24' *//>
      <span>"Join the AceScape adventure, where every card dealt leads to an epic journey through the realms of chance and strategy!"</span>
      <span>"Life is like a deck of cards; it's not about the hand you're dealt, but how you play it."</span>
      <AuthLoginForm/>

      
    </div>
  )
}