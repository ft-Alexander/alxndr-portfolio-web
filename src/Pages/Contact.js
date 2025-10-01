import React from "react";
import { contactDetails } from "../Details";

function Contact() {
    const { email, phone } = contactDetails;

    return (
        <main className="container mx-auto max-w-5xl py-20 px-4 md:px-0">
            <section className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold mb-6">
                    Have any questions? Reach out to me!
                </h1>
                <p className="text-lg md:text-xl text-content mb-10">
                    I’d love to hear from you. Drop an email or give me a call.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
                    {/* Email Card */}
                    <a
                        href={`mailto:${email}`}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        {email}
                    </a>

                    {/* Phone Card */}
                    <a
                        href={`tel:${phone}`}
                        className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        {phone}
                    </a>
                </div>

                <p className="mt-10 text-content text-lg md:text-xl">
                    I typically respond within 24 hours!
                </p>
            </section>
        </main>
    );
}

export default Contact;
