import React from 'react';
import axios from 'axios';

class BlogList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render() {
  return (
    <div>
    <h1>See if this works</h1>

    </div>
  )
}
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }
  componentDidMount() {
    axios.get('/api/blogs')
    .then(function(res){
      console.log(res)
    })
    .catch(function (error) {
      console.log(error);
 });
  }
  render() {
    return(
      <div>
        <h1>Change The Narrative</h1>
        <BlogList blogs={this.state.blogs}/>
      </div>
    )
  }
}

export default App;
