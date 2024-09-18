import "../../style/contact.scss"
import menu1 from '../../assets/imaage/menu1.jpg'
import { Link } from "react-router-dom"
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
function Contact() {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className=' container'>
            <div className="contact" >
                <div className="item">
                    <img src={menu1} alt="" />
                </div>

                <div className="item text-contact" data-aos='fade-up'>
                    <h2 className="text-name">Đặt lịch</h2>
                    <p>Trước khi đặt massage online. Vui lòng tham khảo giá liệu trình massage trên trang thông tin SPA của chúng tôi</p>
                    <Link className="btn-ct">Đặt lịch</Link>
                </div>

                <div className="item">
                    <img src={menu1} alt="" />
                </div>


                <div className="item text-contact" data-aos='fade-up'>
                    <h2 className="text-name">Liên hệ</h2>
                    <p>Nếu có bất kì câu hỏi hay yêu cầu nào, bất cứ lúc nào xin hãy liên lạc với chúng tôi. Chúng tôi đặt sự thoải mái của bạn lên hàng đầu</p>
                    <Link className="btn-ct">Liên hệ</Link>
                </div>

                <div className="item">
                    <img src={menu1} alt="" />
                </div>

                <div className="item text-contact" data-aos='fade-up'>
                    <h2 className="text-name">Vị trí</h2>
                    <p>Đà Nẵng có 1 địa điểm spa. Bạn có thể nhận dịch vụ tại vị trí thuận tiện nhất. Chúng tôi sẽ giúp bạn</p>
                    <Link className="btn-ct">Địa chỉ</Link>
                </div>

            </div>
        </div>
    )

}

export default Contact