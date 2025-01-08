import React, { useState } from "react";
import "../styles/faq.css";
import FAQ from "./FAQ";
import FAQContent from '../assets/FAQs.json'

export const FAQs = () => {
    const [faqs, setFaqs] = useState(
        FAQContent
    );

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };


    return (
        <div className="App">
            <h1>Some FAQs about me 😜</h1>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}
