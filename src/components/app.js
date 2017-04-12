import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }
  componentWillMount() {
    fetch('/blogs')
    .then(res => res.json())
    .then(data => {
      this.setState({ blogs: data})
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
