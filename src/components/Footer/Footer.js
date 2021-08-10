import React from 'react';

const Footer = () => {
    
    const footerStyle = {
        width: '100%',
        height: '100px',
        backgroundColor: '#ecf0f1',
    }
    return (
        <footer style={footerStyle} className="mt-5 d-flex align-items-center justify-content-center">
            <small>&copy; <span> Copyright 2021 Md. Azizul Haque Jany</span></small>
        </footer>
    );
};

export default Footer;