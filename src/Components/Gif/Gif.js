import React from 'react'

const Gif = props => {
    return (
        props.gifs.map(gif => <img src={gif} alt="gif" />)
    )
}

export default Gif