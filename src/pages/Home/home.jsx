import React from 'react';
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Link to="aboutYou">
                <button>About You</button>
            </Link>
            <Link to="form">
                <button>Form</button>
            </Link>
            <Link to="anotherPage">
                <button>Another Page</button>
            </Link>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;
