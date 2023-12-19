import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const registerfun=()=>{
        navigate('/register');
    }
    return (
        <div className='homepg'>
            <div className="quote">
            <h4 className='yogaquote'>Yoga is the perfect opportunity to be curious about who you are</h4>
            <h4 className='yogaquote'>Register now to get into yoga training classes</h4>
            <button className='reegisterbtn' onClick={registerfun}>Register</button>
            </div>
        </div>
    );
}

export default Home;