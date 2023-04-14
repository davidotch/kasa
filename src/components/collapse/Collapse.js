import React, { useState } from "react";
import arrow from '../../assets/arrow.png';
import './Collapse.scss';

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <h3 className='collapse_title' onClick={handleClick}>
            {title}
            <img 
                className={open ? 'arrow arrow_up' : 'arrow arrow_down'} 
                src={arrow} 
                alt="show content" 
            />
      </h3>

      {/* Le contenu de la DIV est déterminé par la variable content. Si content est un tableau, chaque élément est converti en un paragraphe HTML et ajouté à la DIV. Sinon, content est affiché tel quel dans la DIV. */}
      <div className={open ? 'collapse_description' : 'collapse_hidden_description'}>
            {Array.isArray(description) ? description.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                  )
              }) : description
            }
      </div> 

    </div>  
  );
}
