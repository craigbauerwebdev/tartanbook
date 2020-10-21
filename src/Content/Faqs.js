import React from 'react';
import staticData from "../utils/staticData/data";

const Faq = (props) => {

  return (
    <div className="tartanbook faq">
      <div className="title-wrap">
        <h1>FAQs</h1>
      </div>
      <ul>
        {staticData.faqs.map((faq, i) => (
            <li key={i}>{faq.question} {faq.answer}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default Faq;
