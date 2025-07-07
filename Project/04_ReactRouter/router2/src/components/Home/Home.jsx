import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Hero Section */}
            <section className="flex flex-col-reverse sm:flex-row items-center justify-between w-full min-h-screen px-4 sm:px-0">
                {/* Text Content */}
                <div className="w-full sm:w-1/2 px-4 sm:px-20 text-center sm:text-left">
                    <h2 className="text-4xl font-bold sm:text-5xl text-black leading-tight">
                        Download Now
                        <span className="block sm:mt-2 text-3xl sm:text-4xl text-orange-800">Lorem Ipsum</span>
                    </h2>

                    <Link
                        className="mt-6 inline-flex items-center px-6 py-3 text-white bg-orange-700 font-medium rounded-lg hover:opacity-90 transition"
                        to="/"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp; Download now
                    </Link>
                </div>

                {/* Image Content */}
                <div className="w-full sm:w-1/2 flex justify-center items-center px-4 sm:px-0">
                    <img
                        className="w-full max-w-[500px] h-auto object-contain"
                        src="https://i.ibb.co/5BCcDYB/Remote2.png"
                        alt="Hero Image"
                    />
                </div>
            </section>

            {/* Additional Image Section */}
            <div className="flex justify-center items-center py-16">
                <img
                    className="sm:w-96 w-48 object-contain"
                    src="https://i.ibb.co/2M7rtLk/Remote1.png"
                    alt="Secondary"
                />
            </div>

            {/* Bottom Heading */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}
