import React from 'react'

const Form = props => {
    return (
        <form>
            <p>
                <label htmlFor="Search">Search</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={props.handleInputChange}
                    value={props.search} />
            </p>
            <p>
                <button onClick={props.handleGifSearch}>Search Gif</button>
            </p>
        </form>
    )
}

export default Form