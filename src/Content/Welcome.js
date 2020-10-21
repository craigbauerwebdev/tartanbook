import React from 'react';
import staticData from "../utils/staticData/data";

const Welcome = (props) => {
  return (
    <div className="tartanbook welcome">
        <div className="title-wrap">
            <h1>{process.env.REACT_APP_WELCOME_MESSAGE}</h1>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry”s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="grid">
            {staticData.cards.map((card, i) => (
                <div 
                    className="item"
                    style={{ background: `url(/images/log.jpg)`, backgroundSize: "cover"}}   
                >
                    <h3>{card.title}</h3>
                </div>
              )
            )}             
        </div>
    </div>
  );
}

export default Welcome;
