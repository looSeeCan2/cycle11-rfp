import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
    return (
        <div>
            <Link to="/">
                <button>Back</button>
            </Link>
            <h1>Calendar</h1>
        </div>
    );
}

export default Calendar;
