import './listdv.scss'
import { useState } from 'react'
import DVCT from '../chitiet/dvct'

function ListDv() {
    const [show, setShow] = useState(false)
    return (
        <div className='mm'>
            <div className='list'>

                <div className='list-text'>
                    <h2>Massage khô toàn thân trẻ em 90 phút</h2>
                    <p>90 Minute Session</p>
                </div>
                <div className='list-price'>
                    <h2>430,000 VND</h2>

                    <button onClick={() => setShow(!show)}>Icon</button>

                </div>
                {show && <DVCT />}

            </div>

            <div className='list'>

                <div className='list-text'>
                    <h2>Massage khô toàn thân trẻ em 90 phút</h2>
                    <p>90 Minute Session</p>
                </div>
                <div className='list-price'>
                    <h2>430,000 VND</h2>

                    <button onClick={() => setShow(!show)}>Icon</button>

                </div>
                {show && <DVCT />}

            </div>

            <div className='list'>

                <div className='list-text'>
                    <h2>Massage khô toàn thân trẻ em 90 phút</h2>
                    <p>90 Minute Session</p>
                </div>
                <div className='list-price'>
                    <h2>430,000 VND</h2>

                    <button onClick={() => setShow(!show)}>Icon</button>

                </div>
                {show && <DVCT />}

            </div>

            <div className='list'>

                <div className='list-text'>
                    <h2>Massage khô toàn thân trẻ em 90 phút</h2>
                    <p>90 Minute Session</p>
                </div>
                <div className='list-price'>
                    <h2>430,000 VND</h2>

                    <button onClick={() => setShow(!show)}>Icon</button>

                </div>
                {show && <DVCT />}

            </div>


        </div>



    )
}

export default ListDv