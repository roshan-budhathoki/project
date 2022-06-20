import { Button } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    let navigate = useNavigate();
    const showSignin = () =>{
        navigate("./signin", { replace: true });
    }

    const showSignup = () => {
        navigate("./signup", { replace: true });
    }
    return(
        <div className='flex justify-center h-screen items-center mx-[40%]'>
            <Button type="primary" htmlType="submit" onClick={showSignin} className='border-2 mb-1 w-full border-slate-200 bg-blue-500 text-slate-100 rounded-lg'>
                SignIn
            </Button> 
            <Button type="primary" onClick={showSignup} htmlType="submit" className='border-2 mb-1 w-full border-slate-200 bg-blue-500 text-slate-100 rounded-lg'>
                SignUp
            </Button> 
        </div>
    );
}

export default Home;