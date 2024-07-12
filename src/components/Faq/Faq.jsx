import { useState } from 'react';

const Faq = () => {
    const faqData = [
        { question: 'Is international shipping available?', answer: 'Yes, we offer international shipping.' },
        { question: 'How can I contact the author?', answer: 'You can contact the author through our contact page or social media channels.' },
        { question: 'Are there discounts for bulk orders?', answer: 'Yes, we offer discounts for bulk orders. Please contact us for more details.' },
        { question: 'What formats are available for purchase?', answer: 'The book is available in paperback and ebook formats.' }
        // Add more questions and answers as needed
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpansion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); // Collapse if already expanded
        } else {
            setExpandedIndex(index); // Expand if collapsed
        }
    };

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            <div className="grid gap-6">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6">
                        <div
                            className="cursor-pointer flex justify-between items-center"
                            onClick={() => toggleExpansion(index)}
                        >
                            <h2 className="text-lg font-semibold">{faq.question}</h2>
                            <svg
                                className={`w-6 h-6 transition-transform transform ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                        {expandedIndex === index && (
                            <p className="mt-2">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
