import './banner.scss';

export default function Banner(props) {
    return (
        <div className={props.class}>
            <img src={props.image} alt={props.alt} />
            {props.children}
        </div>
    );
}
