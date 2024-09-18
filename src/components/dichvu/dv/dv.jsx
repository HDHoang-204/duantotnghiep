import ListDv from "../listdv/listdv"
import "./dv.scss"

function Dichvu() {
    return (
        <div className="dv">
            <div className="dv-text">
                <p>BestDeal</p>
                <div className="text-dv">
                    <h2>Dịch vụ</h2>
                </div>
            </div>
            <div className="dv-container">
                <div className="dv-main">
                    <h2>Bảng giá dịch vụ</h2>
                </div>
                <div className="list">
                    <ListDv />

                </div>

            </div>
        </div>
    )
}


export default Dichvu