import {useState} from "react";

export const PageProfile = () => {
    const valuesForm = {
        id: "45kfdsj4543glksjgskjl2442gsdklsjfs",
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: '',
        copnfirmPassword: '',
        newPassword: '',
    }
    
    const [valueForm, setValueForm] = useState(valuesForm)
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900 p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>
                <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault()
                    console.log(valueForm)
                    `/users/${valueForm.id}`
                    const result = tarequest
                    
                    // TODO : faire la modification de l'utilisateur connecté
                }}>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            value={valueForm.firstName}
                            onChange={(e) => setValueForm({...valueForm, firstName: e.currentTarget.value})}
                            type="text"
                            id="firstName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Your first name"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            value={valueForm.lastName}
                            onChange={(e) => setValueForm({...valueForm, lastName: e.currentTarget.value})}
                            type="text"
                            id="lastName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Your last name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Your email address"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};
