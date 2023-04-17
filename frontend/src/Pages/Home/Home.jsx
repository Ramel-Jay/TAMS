import React,{ useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/home", { withCredentials: true }).then((response) => {
            if(response.data.error){
                navigate("/Login");
            }
        });
    })

    return (
        <div>
            <h1>Hello This is the home page</h1>
        </div>
    )
}

export default Home
