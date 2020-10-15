import React, { useState } from 'react'
import { connect } from 'react-redux'
import phone from '../images/phone.png'
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneContainer(props) {

    const [totalPhone, setTotalPhone] = useState(1)
    

    console.log(props)

    return (
        <div className="container">
            <img src={phone} alt="phone" />
            <p>
               Disponibilité: 
               <span id="count"> { props.phones }</span>
            </p>

            <div className="btnContainer">
                <button onClick={() => props.buyPhone(totalPhone)}>Acheter</button>
                <input type="text" value={totalPhone} onChange={ e => setTotalPhone(e.target.value)} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        phones: state.phone.phones
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone: totalPhone => dispatch(buyPhone(totalPhone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer)