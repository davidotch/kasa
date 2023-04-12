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
      {open ? (
        <div className="collapse_description">
          <p>{description}</p>
        </div>
      ) : (
        <div className="collapse_hidden_description">{description}</div>
      )}
    </div>
  );
}
