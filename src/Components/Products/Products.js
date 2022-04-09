import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth= getAuth(app)

const Products = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h2>This is Product Page</h2>
            <p>user Name is: {user? user.displayName : "keo nai"}</p>
        </div>
    );
};

export default Products;