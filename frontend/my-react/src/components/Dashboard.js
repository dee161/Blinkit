import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch user data
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you store the JWT token in localStorage
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error(error.response.data);
            }
        };

        // Fetch user's uploaded images
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/images', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you store the JWT token in localStorage
                    }
                });
                setImages(response.data);
            } catch (error) {
                console.error(error.response.data);
            }
        };

        fetchUser();
        fetchImages();
    }, []);

    return (
        <div>
            <h2>Welcome to Dashboard, {user && user.email}</h2>
            <h3>Uploaded Images:</h3>
            <div className="grid grid-cols-3 gap-4">
                {images.map(image => (
                    <div key={image._id}>
                        <img src={`http://localhost:5000/${image.filename}`} alt="Uploaded" className="max-w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
