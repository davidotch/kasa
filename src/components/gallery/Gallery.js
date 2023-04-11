import Card from '../card/Card'
import datas from '../../data/data'
import './Gallery.scss'

export default function Gallery() {
    return (
        <main className='home_accomodation'>
            {datas.map(data => {
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