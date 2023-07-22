import React, { useRef } from "react";

const Uncontrolled =() => {
    
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        alert('Controlled: User Name: '+ name +', Password: ' + password )
    };

    return(
        <form>
            <label>Name:</label>
            <input
            type="text"
            ref={ nameRef }
            />
            <label>Password:</label>
            <input
            type="text"
            ref={ passwordRef }
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>

    )
};

export default Uncontrolled;