import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <section className="header">
                    <div className="logo"><a href="/">MONIMATRIX</a></div>
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-item">
                                Nigeria
                            </li>
                            <li className="menu-item">
                                <div className="nig-green"></div>
                                <div className="nig-white"></div>
                                <div className="nig-green"></div>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
        </React.Fragment>
    )
}

export default Header