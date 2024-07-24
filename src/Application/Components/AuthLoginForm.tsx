export const AuthLoginForm = () => {
    return (
        <form action="" className="flex flex-col w-64 text-white">
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-white">Email address</label>
                <input
                    type="email"
                    id="email"
                    className="text-black p-2 border border-gray-600 rounded-md"
                    placeholder="Enter your email"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="password" className="text-white">Password</label>
                <input
                    type="password"
                    id="password"
                    className="text-black p-2 border border-gray-600 rounded-md"
                    placeholder="Enter your password"
                />
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                />
                <label htmlFor="terms" className="text-white text-sm">
                    I accept the <a href="#" className="text-green-400 underline">terms and conditions</a> and <a href="#" className="text-green-400 underline">cookies policy</a>.
                </label>
            </div>
            <a href="#" className="text-white mb-4">Forgot password?</a>
            <div className="flex gap-4">
                <button className="b-vert-clair2x p-4 rounded-md">Create account</button>
                <button className="b-vert-clair2x p-4 rounded-md">Sign in</button>
            </div>
        </form>
    );
};
