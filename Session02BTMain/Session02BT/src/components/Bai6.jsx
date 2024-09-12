import React, { useState, useEffect } from 'react';

export default function Bai6() {
    // State to hold the current time
    const [timeCurrent, setTimeCurrent] = useState(new Date());

    // Effect to update the time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeCurrent(new Date());
        }, 1000);

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h3>Bai6</h3>
            <h4>Xin chao cac ban</h4>
            <h4>Bay gio la: {timeCurrent.toLocaleTimeString()}</h4>
        </div>
    );
}
