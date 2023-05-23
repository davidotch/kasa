import Card from '../card/Card';
import './Gallery.scss';
import { useEffect, useState } from 'react';

export default function Gallery() {

    const [ data, setData ] = useState();

    //  On utilise useEffect pour récupérer des données de data.json en utilisant la méthode fetch qui effectue une requête HTTP.
    useEffect(() => {

        // La fonction getData est une fonction asynchrone qui utilise await pour attendre la réponse de la requête avant de continuer.
        const getData = async () => {
            await fetch('data.json',{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Sorry an error occured...");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        getData();
    });
    
    

    return (
        <main className='home_accomodation'>

            {/* la méthode .map() prend chaque élément de data et renvoie <Card> pour chacun d'entre eux. */}
            {data && data.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    );
}