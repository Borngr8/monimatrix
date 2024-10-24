import React from 'react'

const page = () => {
    return (
        <React.Fragment>
            <main>
                <section className="top">
                    <div className="top-con">
                        <div className="welcome">
                            Welcome to <span>MONIMATRIX</span> website
                        </div>
                        <a href='/about' className="btn pointer">About Us</a>
                        <div className="bg-gradient1"></div>
                        <div className="bg-gradient2"></div>
                    </div>
                </section>
                <section className="about"></section>
            </main>
        </React.Fragment>
    )
}

export default page