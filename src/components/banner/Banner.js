import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Banner() {

    let [bannerPage, setBannerPage] = useState(false);
    let location = useLocation();
    
    useEffect(() => {
        if(location.pathname === '/about'){
            setBannerPage(true)
        };
        // eslint-disable-next-line
    }, [])

    return (
        <section className={bannerPage ? 'banner_about' : 'banner'}>
            {!bannerPage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    )
}