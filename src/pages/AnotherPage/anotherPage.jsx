import React from 'react';
import { Link } from 'react-router-dom';

const AnotherPage = () => {
    return (
        <div>
            <Link to="/">
                <button>Back</button>
            </Link>
            <h1>Another Page</h1>
        </div>
    );
}

export default AnotherPage;
