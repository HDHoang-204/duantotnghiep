import Header from "./layout/header";  // Giả sử bạn đã có header
import "../style/lienhe.scss";         // CSS của bạn
import MapComponent from './views/MapComponent'; // Import component bản đồ

function LienHe() {
    return (
        <>
            <Header />
            <h1 className="b1">CAM KẾT CỦA CHÚNG TÔI</h1>
            <div className="camket">
                <p>Hít thở bình yên, thở ra căng thẳng. Thư giãn có thể mang lại sự nhẹ nhõm cho phần lớn
                    những gì khiến bạn cảm thấy khó chịu. Trong thế giới căng thẳng và thường xuyên tiêu cực của chúng tôi,
                    quyết định ưu tiên thư giãn của bạn sẽ giúp bạn điều hướng, xử lý và giảm thiểu căng thẳng</p>
                <p className="p2">Hít thở bình yên, thở ra căng thẳng. Thư giãn có thể mang lại sự nhẹ nhõm cho phần lớn
                    những gì khiến bạn cảm thấy khó chịu. Trong thế giới căng thẳng và thường xuyên tiêu cực của chúng tôi,
                    quyết định ưu tiên thư giãn của bạn sẽ giúp bạn điều hướng, xử lý và giảm thiểu căng thẳng</p>
            </div>
            <div className="map">
            <MapComponent />
            </div>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <h6 className="b2">Địa chỉ Spa: 219 Nguyễn Sinh Sắc, Liên Chiểu, Đà Nẵng</h6>
                <h6 className="b2">Thông tin liên hệ: 0123456789</h6>
            </div>

            <div className="lienhe">
                <div>
                    <p> Hãy trải nghiệm những bí mật của thư giản</p>
                    <p> Thư giãn là trạng thái cơ thể và tâm trí được thả lỏng, không căng
                        thẳng hoặc áp lực. Nó giúp giảm mệt mỏi, lo lắng và mang lại cảm
                        giác thoải mái, tươi mới</p>
                    <h5>KHÁM PHÁ VỀ CHÚNG TÔI </h5>
                </div>
                <div className="img1">
                    <img src="https://i.pinimg.com/564x/86/47/ef/8647ef5b51553a8e57ca32e6b2ec74f0.jpg" alt="" />
                </div>
            </div >
            <div className="lienhe">
                <div className="img2">
                    <img src="https://i.pinimg.com/564x/86/47/ef/8647ef5b51553a8e57ca32e6b2ec74f0.jpg" alt="" />
                </div>
                <div>
                    <p> Hãy trải nghiệm những bí mật của thư giản</p>
                    <p> Thư giãn là trạng thái cơ thể và tâm trí được thả lỏng, không căng
                        thẳng hoặc áp lực. Nó giúp giảm mệt mỏi, lo lắng và mang lại cảm
                        giác thoải mái, tươi mới</p>
                    <h5>KHÁM PHÁ VỀ CHÚNG TÔI </h5>
                </div>
            </div >
        </>
    );
}

export default LienHe;
