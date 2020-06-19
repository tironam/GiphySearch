import React, { Component }  from 'react'
import Form from './Components/Form'
import Gif from './Components/Gif'
import axios from 'axios'

class App extends Component {

  state = {
    search: '',
    gifs: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleGifSearch = event => {
    event.preventDefault()
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&limit=10&rating=g&api_key=G2tqHLMXxerh62hXCinC4hBVRIjXNAEw`)
      .then(({ data }) => {
        const gifs = data.data.map(gif => gif.images.original.url)
        this.setState({ gifs, search: '' })
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <>
      <Form 
        title={this.state.search}
        handleInputChange={this.handleInputChange}
        handleGifSearch={this.handleGifSearch}
         />
         {this.state.gif.Search ? <gif gif={this.state.gifs.map(gif => <img src={gif} alt="gif" />)}}
        {/* <form>
          <p>
            <label htmlFor="Search">Search</label>
            <input 
            type="text"
            name="search"
            id="search"
            onChange={this.handleInputChange}
            value={this.state.search} />
          </p>
          <p>
          <button onClick={this.handleGifSearch}>Search Gif</button>
        </p>
        </form> */}
        {
          // <div>
          //   <Gif />
          // </div>
          // this.state.gifs.map(gif => <img src={gif} alt="gif" />)
        }
      </>
    )
  }
}

export default App