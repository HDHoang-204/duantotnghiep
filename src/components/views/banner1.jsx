import '../../style/banner1.scss'
import banner2 from '../../assets/imaage/banner2.jpg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
function Bannerr() {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='banner1'>
            <img src={banner2} alt="" />
            <div className='text-bn'>
                <h2 data-aos="fade-up">Lộ trình chăm sóc da 7 bước</h2>
                <Link to='/chitiet'className='btn' data-aos="fade-up">Xem chi tiết</Link>
            </div>
        </div>
    )
}

export default Bannerr