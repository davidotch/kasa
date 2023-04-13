import ArrowBack from '../../assets/carousel_arrow_back.png'
import ArrowForward from '../../assets/carousel_arrow_forward.png'
import { useState } from 'react'

export default function carousel({imgSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImg = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imgSlider.length -1)
            setCurrentIndex(0)
    }

    const previousImg = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imgSlider.length -1)
    }

    return (
        <div style={{backgroundImage : `url($imgSlider[currentIndex])`}} className='carousel'>
            {imgSlider.length > 1 &&
            <>
                <img
                    className='carousel_arrow carousel_arrow_back'
                    src={ArrowBack}
                    alt='Show next image'
                    onClick={nextImg}
                />
                <img
                    className='carousel_arrow carousel_arrow_forward'
                    src={ArrowFor}
                    alt='Show previous image'
                    onclick={previousImg}
                />
                <p className='slideCount'>
                    {currentIndex + 1} / {imgSlider.length}
                </p>
            </>
            }
        </div>
    )
}