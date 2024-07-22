import logo from '../images/logo-ace-scape.png'

export const Nav = () => {
    return(
        <nav className='flex b-vert-clair'>
            <img className='w-16 ml-4' src={logo} alt="" />
            <ul className='flex items-center mx-auto gap-32'>
                <li>Home</li>
                <li>Black Jack</li>
                <li>Profile</li>
                <li>How to play</li>
            </ul>
            <img className='w-46 h-46' src="" alt="" />
        </nav>
    )
}