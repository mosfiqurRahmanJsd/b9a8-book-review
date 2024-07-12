

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Discover BookVibes</h1>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                    <div className="max-w-lg md:w-1/2 mx-auto mb-6 md:mb-0">
                        <img src="https://i.ibb.co/5kktDs6/dsds.png" alt="About Us" className="rounded-lg shadow-md" />
                    </div>
                    <div className="max-w-lg md:w-1/2 mx-auto md:ml-6">
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            At BookVibes, we believe in the transformative power of books. Our journey began with a passion for literature and a desire to create a community where book lovers could discover, share, and celebrate their favorite reads.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            Our team is dedicated to curating a diverse selection of books that inspire, entertain, and enrich the lives of our readers. Whether you’re seeking the latest bestsellers or hidden literary gems, we’re here to guide you on your reading journey.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            Join us as we explore the world of books together. Let BookVibes be your companion in discovering stories that resonate and characters that linger long after the final page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
