import React from 'react';
class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database =[]
    }
  }
  
  // componentDidMount() { 
  // }

  getData() {
    fetch('http://www.mocky.io/v2/5d34c0b62e0000953fa6b7f1')
    .then(resp => resp.json())
    .then(data => {
      let bd = data.results.map((bd) => {
        return (
          <div key={bd.results}>
          </div>
        )
      })
      this.setState({bd:bd});
      console.log('state', this.state.bd);
    })
  }
  
  render() {
    return(
      <div className='container'>
        <div className='container-data'>
          {this.state.bd}
        </div>
      </div>
    )
  }
}

export default Data;