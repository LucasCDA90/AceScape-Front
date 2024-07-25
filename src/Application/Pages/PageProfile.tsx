import { useState } from "react";

export const PageProfile = () => {
    const valuesForm = {
        id: "45kfdsj4543glksjgskjl2442gsdklsjfs",
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        username: 'john_doe',
        password: '',
        confirmPassword: '',
        newPassword: '',
    }

    const [valueForm, setValueForm] = useState(valuesForm)

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900 p-6">
            <div className="w-full max-w-5xl bg-white p-10 rounded-lg shadow-lg flex space-x-12">
                {/* Profil Edit Form */}
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Edit Profile</h2>
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault()
                        console.log(valueForm)
                        // `/users/${valueForm.id}`
                        // const result = tarequest

                        // TODO : faire la modification de l'utilisateur connecte
                    }}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                value={valueForm.username}
                                onChange={(e) => setValueForm({ ...valueForm, username: e.currentTarget.value })}
                                type="text"
                                id="username"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Your username"
                            />
                        </div>

                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                value={valueForm.firstName}
                                onChange={(e) => setValueForm({ ...valueForm, firstName: e.currentTarget.value })}
                                type="text"
                                id="firstName"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Your first name"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                value={valueForm.lastName}
                                onChange={(e) => setValueForm({ ...valueForm, lastName: e.currentTarget.value })}
                                type="text"
                                id="lastName"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Your last name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                value={valueForm.email}
                                onChange={(e) => setValueForm({ ...valueForm, email: e.currentTarget.value })}
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Your email address"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Save Profile
                        </button>
                    </form>
                </div>

                {/* Password Change Form */}
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Change Password</h2>
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault()
                        console.log(valueForm)
                    }}>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Current Password</label>
                            <input
                                value={valueForm.password}
                                onChange={(e) => setValueForm({ ...valueForm, password: e.currentTarget.value })}
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Your current password"
                            />
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                value={valueForm.newPassword}
                                onChange={(e) => setValueForm({ ...valueForm, newPassword: e.currentTarget.value })}
                                type="password"
                                id="newPassword"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Your new password"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                            <input
                                value={valueForm.confirmPassword}
                                onChange={(e) => setValueForm({ ...valueForm, confirmPassword: e.currentTarget.value })}
                                type="password"
                                id="confirmPassword"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Confirm your new password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
