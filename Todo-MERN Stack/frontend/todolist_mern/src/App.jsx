import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login.jsx';

const App = () => {
    const [token, setToken] = useState(null);

    return (
        <div>
            <h1>To-Do List</h1>
            {!token ? (
                <>
                    <Register />
                    <Login setToken={setToken} />
                </>
            ) : (
                <h2>Welcome back!</h2>
            )}
        </div>
    );
};

export default App;
