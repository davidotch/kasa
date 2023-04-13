import Card from '../card/Card'
import './Gallery.scss'
import { useEffect, useState } from 'react';

export default function Gallery() {

    const [ data, setData ] = useState();

    useEffect(() => {

        const getData = async () => {
            fetch('../data.json')
            .then((res) => {
                if (!res.ok) {
                    throw Error("Sorry an error occured...");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        getData();
    });
    
    

    return (
        <main className='home_accomodation'>
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
    )
}