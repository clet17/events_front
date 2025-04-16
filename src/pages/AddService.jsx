import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";
import { ServicesContext } from "../context/servicesContext";

const AddService = () => {
    let navigate = useNavigate()
    const { tokenStorage, userInfo } = useContext(AuthContext);
    const {fetchServices} = useContext(ServicesContext)

    const [serviceInfo, setServiceInfo] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        address: '',
        awaitbility: '',
        image: null
    });

    const handleServiceSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('title', serviceInfo.title)
        formData.append('description', serviceInfo.description)
        formData.append('price', serviceInfo.price)
        formData.append('category', serviceInfo.category)
        formData.append('address',serviceInfo.address)
        formData.append('awaitbility', serviceInfo.awaitbility)
        if(serviceInfo.image){
            formData.append('image', serviceInfo.image)
        }


        try {
            const response = await axios.post('http://localhost:8000/api/services', formData, {
                headers: {
                    'Authorization': `Bearer ${tokenStorage}`,
                    'Content-Type' : 'mutlipart/form-data'
                }
            });
            if(response.status === 201){
                console.log('Service ajouté:', response.data.message);
                navigate(`/service/${response.data.newService._id}`)
            }
           
        } catch (err) {
            console.log(err);
        } finally{
            fetchServices()
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Ajouter un Service</h2>
            <form onSubmit={handleServiceSubmit} className="flex flex-col gap-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700">Titre</label>
                    <input
                        type="text"
                        id="title"
                        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setServiceInfo({ ...serviceInfo, title: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setServiceInfo({ ...serviceInfo, description: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Prix</label>
                    <input
                        type="number"
                        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setServiceInfo({ ...serviceInfo, price: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setServiceInfo({ ...serviceInfo, category: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Adresse</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setServiceInfo({ ...serviceInfo, address: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Disponibilité</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setServiceInfo({ ...serviceInfo, awaitbility: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="file"
                        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setServiceInfo({ ...serviceInfo, image: e.target.files[0] })}
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Ajouter un service
                </button>
            </form>
        </div>
    );
};

export default AddService;
