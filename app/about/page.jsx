'use client'

import React, { useState } from 'react'

const page = () => {
    const [item, setItem] = useState({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false, nine: false, ten: false })

    return (
        <main className='about-main'>
            <section className="about-top">
                <div className="top-con">
                    <div className="btn">About Us</div>
                    <div className="">
                        <ul className="about-list">
                            <li onClick={() => setItem({ two: false, three: false, four: false, five: false, six: false, seven: false, eight: false, nine: false, ten: false, one: item.one == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Who is MONIMATRIX:
                                    <svg className={item.one == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.one == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            MONIMATRIX MULTIVENTURES is an indigenous
                                            Nigerian general contracts and merchandise business
                                            with registration number 7447941, Tin number
                                            1074059732 - focused on Forex copy trade provider and Forex training.
                                            To join www.monimatrix.com  Forex training class please click (I want to join). 
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, three: false, four: false, five: false, six: false, seven: false, eight: false, nine: false, ten: false, two: item.two == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    The Function of MONIMATRIX:
                                    <svg className={item.two == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.two == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            MONIMATRIX is a Forex trader wizard that created a
                                            proficient Forex trading algorithm that trades the
                                            Forex market so good. MONIMATRIX trading
                                            algorithm is plugged into the Forex Market; trades
                                            the Forex Market very well and also allow investors to
                                            copy the trade at ease and also teaches individuals Forex trading art.
                                            To join www.monimatrix.com  Forex training class please click (I want to join). 
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, two: false, four: false, five: false, six: false, seven: false, eight: false, nine: false, ten: false, three: item.three == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Advantages of Joining MONIMATRIX:
                                    <svg className={item.three == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.three == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <ol>
                                            <li>
                                                You will have access to multiple stream of income
                                                with only 100000 cent to follow our trade.
                                            </li>
                                            <li>
                                                The profit you will experience joining
                                                MONIMATRIX will be better.
                                            </li>
                                            <li>
                                                Your local bank account will be connected to the
                                                world richest market on earth.
                                            </li>
                                            <li>
                                                Forex market is not a ponzi scheme.
                                            </li>
                                            <li>
                                                To join www.monimatrix.com  Forex training class please click (I want to join). 
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, two: false, three: false, five: false, six: false, seven: false, eight: false, nine: false, ten: false, four: item.four == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Disadvantage of Joining MONIMATRIX:
                                    <svg className={item.four == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.four == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <ol>
                                            <li>
                                                You lose quarter of your investment whenever
                                                we trade badly.
                                            </li>
                                            <li>
                                                All your investment could be erased if the bad
                                                trade is unbearable.
                                            </li>
                                            <li>
                                                Forex market is too risky due to its flexibility.
                                            </li>
                                            <li>
                                                Participant cannot hold MONIMATRIX
                                                accountable whenever a quarter or the entire
                                                investment erase.
                                            </li>
                                            <li>
                                                To join www.monimatrix.com  Forex training class please click (I want to join). 
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, two: false, three: false, four: false, six: false, seven: false, eight: false, nine: false, ten: false, five: item.five == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Our Motto:
                                    <svg className={item.five == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.five == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            Slow and steady is our motto.
                                            To join www.monimatrix.com  Forex training class please click (I want to join). 
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, two: false, three: false, four: false, five: false, seven: false, eight: false, nine: false, ten: false, six: item.six == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Our Goals:
                                    <svg className={item.six == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.six == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            Our goal is to be the best Forex copy trade
                                            provider all kind of investor would wish to have.
                                            To join www.monimatrix.com  Forex training class please click (I want to join). 
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, two: false, three: false, four: false, five: false, six: false, eight: false, nine: false, ten: false, seven: item.seven == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Fund Safety:
                                    <svg className={item.seven == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.seven == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            MONIMATRIX have the top ranked algorithm to safe guide
                                            investor’s funds with high-tech proficiencies that controls
                                            trade decisions. The system is well equipped with a good tool
                                            that handles risk reward ratio.
                                            To join www.monimatrix.com  Forex training class please click (I want to join). 
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, nine: false, ten: false, eight: item.eight == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Advice:
                                    <svg className={item.eight == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.eight == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            Minimum deposit to copy MONIMATRIX trade is
                                            100000 cent. Test our system with just 100000 cent.
                                            To join www.monimatrix.com  Forex training class please click (I want to join). 
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => setItem({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false, ten: false, nine: item.nine == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Copy Our Trade:
                                    <svg className={item.nine == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.nine == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            Copy Our Trade:
                                            To copy our trade please paste the website <a href="https://hfm.com">https://hfm.com</a> into
                                            your web browser.
                                            Follow the steps:
                                        </p>
                                        <ol>
                                            <li>
                                                When the site opens find Register button and click at it.
                                            </li>
                                            <li>
                                                A Registration window will come-up for you to fill your data.
                                            </li>
                                            <li>
                                                Then carefully follow the registration prompt instructions.
                                            </li>
                                            <li>
                                                When you are through with the registration on the hfm
                                                prompt instruction, do the following to copy our trade
                                                within your myhf id environment.
                                            </li>
                                            <li>
                                                Click HFcopy button,
                                            </li>
                                            <li>
                                                A dropdown menu will display, and then select Follow A
                                                Strategy.
                                            </li>
                                            <li>
                                                A Follow A Strategy environment will display.
                                            </li>
                                            <li>
                                                Then at the all strategies search engine within Follow A
                                                Strategy environment type MONIMATRIX.
                                            </li>
                                            <li>
                                                Click search.
                                            </li>
                                            <li>
                                                MONIMATRIX will display for you to follow.
                                            </li>
                                            <li>
                                                Then follow us via MONIMATRIX.
                                            </li>
                                            <li>
                                                MONIMATRIX MONIMATRIX MONIMATRIX endeavour
                                                that you copy MONIMATRIX.
                                            </li>
                                            <li>
                                                To join www.monimatrix.com  Forex training class please click (I want to join). 
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                            {/* <li onClick={() => setItem({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false, nine: false, ten: item.ten == false ? true : false })} className="about-item pointer">
                                <div className="about-item-top">
                                    Contact Us:
                                    <svg className={item.ten == false ? 'rotate-0' : 'rotate-180'} stroke="#ababab" fill="#ababab" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </div>
                                <div className={item.ten == false ? 'about-item-close' : 'about-item-open'}>
                                    <div className="about-item-desc-con">
                                        <p>
                                            Contact Us via Address:
                                        </p>
                                        <p>
                                            7B, Omudioga Road,
                                            Port Harcourt,
                                            Rivers State,
                                            Nigeria
                                        </p>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className="bg-gradient1"></div>
                    <div className="bg-gradient2"></div>
                </div>
            </section>
            <section className="about"></section>
        </main>
    )
}

export default page
