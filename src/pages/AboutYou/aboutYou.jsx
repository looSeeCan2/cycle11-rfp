import React from 'react';
import {Link} from "react-router-dom";

const AboutYou = () => {
    return ( /// "/" = in the Link, goes back
        <div>
            <Link to="/"> 
                <button>Back</button>
            </Link>
            <h1>About You</h1>
        </div>
    );
}

export default AboutYou;
