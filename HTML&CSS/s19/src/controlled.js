import { useState } from "react";

const Controlled = () => {
    const [name, setName]=useState('');
    const [password, setPassword]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Controlled: User Name: '+ name +', Password: ' + password )
    }

    return(
        <div className="controlled">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                type="text"
                required
                value={name}
                onChange={ (e) => setName(e.target.value)} />
                <label>Password:</label>
                <input
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>

    );
}

export default Controlled;