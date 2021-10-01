import React from 'react';

const Notfound = () => {
    return (
        <div style={{
            textAlign: 'center',
            marginTop:'100px'
        }}>
            <h1 style={{
                fontSize: '80px',
                fontWeight: '700',
                fontStyle:'italic',
                color: 'orangered',
                
            }}>404</h1>
            <h2>This page are not available . Please search another page</h2>
        </div>
    );
};

export default Notfound;