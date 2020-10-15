import React from 'react'
import tv from '../images/tv.png'
import { connect } from 'react-redux'
import { buyTv } from '../redux/tv/actionTv'

function TvContainer(props) {
    console.log(props)

    return (
        <div className="container">
            <img src={tv} alt="tv" />
            <p> Disponibilité:
                <span id="count"> {props.tv}</span>
            </p>
            <div className="btnContainer">
                <button onClick={() => props.buyTv()}>Acheter</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tv: state.television.tv
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyTv: () => dispatch(buyTv())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer)
