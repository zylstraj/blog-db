import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }
  componentWillMount() {
    axios.get('/blogs')
    .then(function(response){
      console.log(response)
      this.setState({blogs: response})
    })
  }
  render() {
    return(
      <div>
        <h1>Change The Narrative</h1>
        <blogList blogs={this.state.blogs}/>
      </div>
    )
  }
}
function Blog(props) {
  console.log(props);
  return (
    <div>
    <h1>{props.title}</h1>
    <p>{props.tagline}</p>
    <p>{props.content}</p>
    </div>
  )
}
function blogList(props) {
  return (
    <div>
    {props.blogs.map(Blog)}
    </div>
  )
}
export default App;
