import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Footer() {

    return (
        <>
            <div className="bg-mainColor mt-96 px-3">
                <div className="container max-w-[1200px] mx-auto max-sm:px-4 py-8 flex items-center justify-between max-md:flex-col max-md:gap-12 max-md:py-12 max-md:text-center">
                    <div className="text-white">
                        <p className="capitalize text-4xl">Join our newsletter now</p>
                        <p className="max-md:mt-6">Register now to get updates on promotions...</p>
                    </div>
                    <div className="bg-white rounded-md overflow-hidden">
                        <input type="text" placeholder="Enter Your Email To Subscribe" className="pl-4 pr-10 py-3 outline-none border-0" />
                        <button className="uppercase text-white py-3 px-3 bg-mainBlack max-md:w-full">Subscribe</button>
                    </div>
                </div>
            </div>
            <footer className="text-white bg-mainBlack px-3">
                <div className="container max-w-[1200px] max-sm:px-4 mx-auto py-6">
                    <div className="grid gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 max-sm:text-center">
                        <div>
                            <h2 className="text-xl my-6">Your Logo</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the
                                and typesetting industry. Lorem Ipsum is
                                dummy text of the printing.
                            </p>
                            <div className="flex items-center mt-6 max-sm:justify-center">
                                <div className="rounded-full mr-2 bg-mainColor hover:bg-blue-600 transition p-2"><img src={facebook} alt="Facebook" /></div>
                                <div className="rounded-full mr-2 bg-mainColor hover:bg-blue-600 transition p-2"><img src={instagram} alt="Instagram" /></div>
                                <div className="rounded-full mr-2 bg-mainColor hover:bg-blue-600 transition p-2"><img src={twitter} alt="Twitter" /></div>
                                <div className="rounded-full mr-2 bg-mainColor hover:bg-blue-600 transition p-2"><img src={linkedin} alt="Linked In" /></div>
                            </div>
                        </div>
                        <div className="max-md:ml-0 ml-12">
                            <h2 className="text-xl my-6">Quick Links</h2>
                            <ul>
                                <li className="my-2"><a href="">Home</a></li>
                                <li className="my-2"><a href="">About Us</a></li>
                                <li className="my-2"><a href="">Blog</a></li>
                                <li className="my-2"><a href="">FAQ</a></li>
                                <li className="my-2"><a href="">Services</a></li>
                            </ul>
                        </div>
                        <div className="max-md:ml-0 ml-2">
                            <h2 className="text-xl my-6">Services</h2>
                            <ul>
                                <li className="my-2"><a href="">Wish List</a></li>
                                <li className="my-2"><a href="">Login</a></li>
                                <li className="my-2"><a href="">Submit a Request</a></li>
                                <li className="my-2"><a href="">Appointment</a></li>
                                <li className="my-2"><a href="">Promotional Offers</a></li>
                            </ul>
                        </div>
                        <div className="max-xl:ml-12 max-md:ml-0 max-sm:mx-auto max-sm:flex max-sm:flex-col">
                            <h2 className="text-xl my-6">Contact</h2>
                            <div className="flex gap-4 items-center my-6 max-sm:mx-auto">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>124 Brooklyn, New York <br /> United States</p>
                            </div>
                            <div className="flex gap-4 items-center my-6 max-sm:mx-auto">
                                <FontAwesomeIcon icon={faMobileScreen} />
                                <p>+0123456789</p>
                            </div>
                            <div className="flex gap-4 items-center my-6 max-sm:mx-auto">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>Example@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}