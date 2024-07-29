import { useState } from "react";
import { http } from "../../Infrastructure/Http";

export const PageProfile = () => {
    const initialValues = {
        id: "",
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        newPassword: '',
    }

    const [valueForm, setValueForm] = useState(initialValues);

    const getPasswordFields = () => {
        const { password, newPassword, confirmPassword } = valueForm;
        return { password, newPassword, confirmPassword };
    };

    const getUserFields = () => {
        const { firstName, lastName, email, username } = valueForm;
        return { firstName, lastName, email, username };
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        const userFields = getUserFields();
        console.log(userFields);

        try {
            const response = await http.put('user/66a782ad7978d393e05c2d26', userFields, {
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE3ODJhZDc5NzhkMzkzZTA1YzJkMjYiLCJpYXQiOjE3MjIyNTQwMDAsImV4cCI6MTcyMjI2MTIwMH0.8t3OqFj4t3xUm6DuQ3pgnVLxjU6rHRJ-FZyA2SpZjnU",
                    'Content-Type': 'application/json',
                },
            });
            console.log('User updated successfully', response.data);
        } catch (error) {
            console.error('Error updating user');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900 p-6">
            <div className="w-full max-w-5xl bg-white p-10 rounded-lg shadow-lg flex space-x-12">
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Modifier informations</h2>
                    <form className="space-y-6" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                            <input
                                value={valueForm.username}
                                onChange={(e) => setValueForm({ ...valueForm, username: e.currentTarget.value })}
                                type="text"
                                id="username"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Votre nom d'utilisateur"
                            />
                        </div>

                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input
                                value={valueForm.firstName}
                                onChange={(e) => setValueForm({ ...valueForm, firstName: e.currentTarget.value })}
                                type="text"
                                id="firstName"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Prénom"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                value={valueForm.lastName}
                                onChange={(e) => setValueForm({ ...valueForm, lastName: e.currentTarget.value })}
                                type="text"
                                id="lastName"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Nom"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Addresse mail</label>
                            <input
                                value={valueForm.email}
                                onChange={(e) => setValueForm({ ...valueForm, email: e.currentTarget.value })}
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Adresse mail"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Sauvegarder
                        </button>
                    </form>
                </div>

                <div className="w-1/2">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Modifier mot de passe</h2>
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        const passwordFields = getPasswordFields();
                        console.log(passwordFields);
                    }}>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe actuel</label>
                            <input
                                value={valueForm.password}
                                onChange={(e) => setValueForm({ ...valueForm, password: e.currentTarget.value })}
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Mot de passe actuel"
                            />
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                            <input
                                value={valueForm.newPassword}
                                onChange={(e) => setValueForm({ ...valueForm, newPassword: e.currentTarget.value })}
                                type="password"
                                id="newPassword"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Nouveau mot de passe"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmer nouveau mot de passe</label>
                            <input
                                value={valueForm.confirmPassword}
                                onChange={(e) => setValueForm({ ...valueForm, confirmPassword: e.currentTarget.value })}
                                type="password"
                                id="confirmPassword"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Confirmer le nouveau mot de passe"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Changer mot de passe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
