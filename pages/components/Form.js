import { useState } from "react";

export default function Form() {
    const [username, setUsername] = useState("");

    const handleSubmit = async (event)=> {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            Username:
            <input
                type="text"
                value={username}
                onChange={(event)=>{
                    setUsername(event.target.value)
                }} 
            />
            <a href="/api/auth/signin">Login</a>
        </form>
    )
}