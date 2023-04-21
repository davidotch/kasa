import './banner.scss';

// La fonction Banner prend un objet props en paramètre et utilise les propriétés de cet objet pour spécifier les attributs CSS de la bannière, son image et son texte
export default function Banner(props) {
    return (
        <div className={props.class}>
            <img src={props.image} alt={props.alt} />
            {props.children}
        </div>
    );
}
