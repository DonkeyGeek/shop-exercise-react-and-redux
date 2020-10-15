import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { apiCall } from '../redux/comments/actionComments'

const CommentsContainer = ({ apiData, apiComment}) => {

   // console.log(apiData)

    useEffect(() => {
        apiComment()
        
    }, [apiComment])

    const displayApiData = apiData.isLoading ? (
        <p>Loading ...</p>
    )
    : apiData.error ? (
        <p>{apiData.error}</p>
    )
    : 
    (
        apiData.comments.map( comment => {
            return (
                <div key={comment.id} className="comments">
                    <p>{comment.body}</p>
                </div>
            )
        })
    )

    
    return (
        <React.Fragment>
            <h2>Commentaires:</h2>
            <hr />
            { displayApiData }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        apiData: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        apiComment: () => dispatch(apiCall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
