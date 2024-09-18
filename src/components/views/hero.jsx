import '../../style/hero.scss'
import menu1 from '../../assets/imaage/menu1.jpg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'


function Hero() {
    useEffect(() => {
        Aos.init()

    }, [])
    return (

        <div className='hero'>
            <div className='text_hero' data-aos='fade-right'>
                <h2>Dịch vụ nổi bật </h2>
            </div>

            <div className='main'>
                <div className='main2' data-aos='fade-right'>

                    <img src={menu1} alt="" />


                    <div className='text_main'>
                        <h3>Massage Đá Nóng Thải Độc & Thư Giãn </h3>
                        <p>Thoa tinh dầu massage toàn thân, sau đó chườm đá nóng vùng lưng để thải độc, giảm đau nhức, căng cơ và lưu thông mạch máu.</p>
                        <br />
                        <Link to='/'> Xem chi tiết</Link>
                    </div>
                </div>

                <div className='main2' data-aos='fade-right'>
                    <img src={menu1} alt="" />
                    <div className='text_main'>
                        <h3>Massage Đá Nóng Thải Độc & Thư Giãn </h3>
                        <p>Thoa tinh dầu massage toàn thân, sau đó chườm đá nóng vùng lưng để thải độc, giảm đau nhức, căng cơ và lưu thông mạch máu.</p>
                        <br />
                        <Link to='/'> Xem chi tiết</Link>
                    </div>
                </div>

                <div className='main2' data-aos='fade-right'>
                    <img src={menu1} alt="" />
                    <div className='text_main'>
                        <h3>Massage Đá Nóng Thải Độc & Thư Giãn </h3>
                        <p>Thoa tinh dầu massage toàn thân, sau đó chườm đá nóng vùng lưng để thải độc, giảm đau nhức, căng cơ và lưu thông mạch máu.</p>
                        <br />
                        <Link to='/'> Xem chi tiết</Link>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Hero