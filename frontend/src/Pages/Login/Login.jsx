import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [slider, setSlider] = useState(false);

    const moveSlider = () => {
        setSlider(!slider);
    };
    return (
        <div>
            <div className="flex max-w-screen relative">
                <div className="w-1/2 h-screen bg-[#23211B] flex justify-center items-center flex-col">
                    <div className="w-3/4 h-fit text-white">
                            <h1 className="text-center uppercase text-3xl font-semibold font-[Poppins] md:mb-2">Register</h1>
                            <form className="h-3/4 flex flex-col justify-center items-center">
                                <div className="w-full relative group md:mb-10">
                                    <input type="text" id="name" required autoComplete='off' className="w-full h-10 px-4 text-lg peer bg-transparent outline-none border-b-2 border-white rounded"/>
                                    <label for="name" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Name</label>
                                </div>
                                <div className="w-full relative group md:mb-10">
                                    <input type="text" id="email" required autoComplete='off' className="w-full h-10 px-4 text-lg peer bg-transparent outline-none border-b-2 border-white rounded"/>
                                    <label for="email" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Email</label>
                                </div>
                                <div className="w-full relative group md:mb-10">
                                    <input type="text" id="password" required autoComplete='off' className="w-full h-10 px-4 text-lg peer bg-transparent outline-none border-b-2 border-white rounded"/>
                                    <label for="password" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Password</label>
                                </div>
                                <button type="submit" className="uppercase bg-[#00BDF9] w-full rounded md:py-2">Register</button>
                            </form>
                            <div className="text-white flex justify-between items-center md:mt-2">
                                <button onClick={() => { moveSlider() }} >Log In</button> 
                            </div>
                        </div>
                </div>
                <div className="w-1/2 bg-[#23211B] h-screen flex justify-center items-center flex-col">
                    <div className="w-3/4 h-fit text-white">
                        <h1 className="text-center uppercase text-3xl font-semibold font-[Poppins]">login</h1>
                        <form className="h-3/4 flex flex-col justify-center items-center">
                            <div className="w-full relative group md:mb-10">
                                <input type="text" id="email" required autoComplete='off' className="w-full h-10 px-4 text-lg peer bg-transparent outline-none border-b-2 border-white rounded"/>
                                <label for="email" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Email</label>
                            </div>
                            <div className="w-full relative group md:mb-10">
                                <input type="text" id="password" required autoComplete='off' className="w-full h-10 px-4 text-lg peer bg-transparent outline-none border-b-2 border-white rounded"/>
                                <label for="password" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Password</label>
                            </div>
                            <button className="uppercase bg-[#00BDF9] w-full rounded md:py-2">log in</button>
                        </form>
                        <div className="text-white flex justify-between items-center">
                            <button onClick={() => { moveSlider() }} >Register</button>
                            <button onClick={() => { moveSlider() }} >Forgot Password</button>
                        </div>
                    </div>
                </div>
                <div className={slider ? "absolute w-1/2 bg-yellow-500 h-screen duration-1000 left-1/2 translate-l-full" : "absolute w-1/2 bg-yellow-500 h-screen right-full duration-1000 translate-x-full"}>
                    <h1>Slider</h1>
                </div>
            </div>
        </div>
    )
}

export default Login
