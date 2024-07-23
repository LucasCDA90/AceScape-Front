export const AuthLoginForm = () => {
    return (
        <form action="" className='flex flex-col w-64 text-white'>
            <div className='flex flex-col mb-4'>
                <label htmlFor="email" className="text-white">Email address</label>
                <input type="text" id="email" className="text-black"/>
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" className="text-black"/>
            </div>
            <a href="" className="mb-4">Forgot password ?</a>
            <div className="flex gap-4">
                <button className="b-vert-clair2x p-4 rounded-md">Create account</button>
                <button className="b-vert-clair2x p-4 rounded-md">Sign in</button>
            </div>
        </form>
    )
}
