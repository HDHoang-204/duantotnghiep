import { Link } from "react-router-dom";
import "../../style/header.scss"

function Header() {
    return (

        <div className="content">
            <div className="text">
                <h2>Tẩy da chết</h2>
                <p>Với dịch vụ PEEL WHITE</p>
                <div className="sale"><span>Ưu đãi chỉ với</span></div>
                <h3>
                    359K
                </h3>

                <Link>Đặt Lịch Ngay</Link>
            </div>

        </div>


    )
}



export default Header;