import '../../style/about.scss'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import about from '../../assets/imaage/about.jpg'
import about1 from '../../assets/imaage/about1.jpg'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
function About() {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='about'>
            <div className='text_about' data-aos="fade-right">
                <h2>Cơ sở vật chất</h2>
            </div>
            <div className="main_about" data-aos="fade-left">
                <img src={about} alt="" />
                <div className="about1">
                    <h2>Khơi dậy mọi giác quan</h2>
                    <p>Với kiến trúc Chăm-Pa đầy mê hoặc, SPA được ví như chốn thiên đường chăm sóc sức khỏe, vẻ đẹp, tâm hồn. Nơi đây chính là điểm dừng chân lý tưởng để bạn cùng gia đình ,,bạn bè, người thân, ... đến và tận hưởng những khoảng khắc hạnh phúc nhất</p>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /> <p>Cơ sở vật chất hiện đại và tiện nghi</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p> Đội ngũ nhân viên giàu kinh nghiệm</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p>Dịch vụ tiêu chuẩn, tiện ích đẳng cấp</p></div>
                </div>
            </div>


            <div className="main_about" data-aos="fade-left">

                <div className="about1">
                    <h2>Khơi dậy mọi giác quan</h2>
                    <p>Với kiến trúc Chăm-Pa đầy mê hoặc, SPA được ví như chốn thiên đường chăm sóc sức khỏe, vẻ đẹp, tâm hồn. Nơi đây chính là điểm dừng chân lý tưởng để bạn cùng gia đình ,,bạn bè, người thân, ... đến và tận hưởng những khoảng khắc hạnh phúc nhất</p>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /> <p>Cơ sở vật chất hiện đại và tiện nghi</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p> Đội ngũ nhân viên giàu kinh nghiệm</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p>Dịch vụ tiêu chuẩn, tiện ích đẳng cấp</p></div>
                </div>
                <img src={about1} alt="" />
            </div>
        </div>
    )
}

export default About