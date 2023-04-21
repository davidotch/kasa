import { useState } from "react";
import arrow from '../../assets/arrow.png';
import './Collapse.scss';

// La fonction Collapse prend en paramètre 'title' et 'description' qui peuvent être masqués ou révélés en cliquant sur le titre.
export default function Collapse({ title, description }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <h3 className='collapse_title' onClick={() => setOpen(!open)}>
            {title}
            <img 
                className={open ? 'arrow arrow_up' : 'arrow arrow_down'} 
                src={arrow} 
                alt="show content" 
            />
      </h3>

      {/* le contenu de la description est affiché ou masqué en fonction de l'état actuel.
      Si la description est un tableau, chaque élément est affiché dans un paragraphe HTML, sinon la description est simplement affichée.
      La fonction retourne une div qui contient le titre et la description. */}
      <div className={open ? 'collapse_description' : 'collapse_hidden_description'}>
        {Array.isArray(description) ?
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          : description
        }
      </div>


    </div>  
  );
}
