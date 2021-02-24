import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm">
            <div className="container-fluid d-flex justify-content-center text-secondary">
                <i className="fas fa-sun p-1 fs-4"></i>
                <span className="navbar-brand fw-bolder text-secondary">Climapp</span>
            </div>
        </nav>
    );
}

export default Nav;