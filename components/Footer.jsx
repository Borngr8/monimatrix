import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer-top">
                    <div className="footer-top-con">
                        <div className="footer-top-social">
                            Please follow us on 
                            <a href='https://twitter.com/monimatric'>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="footer-double">
                            <span className="footer-red">For enquiries, email:</span>
                            <span className="footer-light">monimatricventures@gmail.com</span>
                        </div>
                        <div className="footer-double">
                            <span className="footer-red">For enquiries, phone:</span>
                            <span className="footer-light">+234(0)8189207600, +234(0)8167674632</span>
                        </div>
                        <div className="footer-double">
                        <span className="footer-red">Contact Us via address:</span>
                            <span className="footer-light">7b Omudioga Rd, Port Harcourt, Rivers State Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                © {new Date().getFullYear()} MONIMATRIX MULTIVENTURES. BN 7447941 (Registered by the Coporate Affairs Commision of Nigeria). All Rights Reserved.
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer