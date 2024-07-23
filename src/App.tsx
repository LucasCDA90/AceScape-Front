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
          <span className='block mb-4'>"Join the AceScape adventure, where every card dealt leads to an epic journey through the realms of chance and strategy!"</span>
          <span>"Life is like a deck of cards; it's not about the hand you're dealt, but how you play it."</span>
        </div>
        <AuthLoginForm/>
      </div>
    </div>
  )
}
