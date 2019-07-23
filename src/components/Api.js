import React from 'react';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            database: []
        }
    }

    componentDidMount() {
        fetch("http://www.mocky.io/v2/5d34c0b62e0000953fa6b7f1")
            .then(resp => resp.json())
            .then(resp => this.setState({ database: resp }))
        console.log(JSON.stringify(this.state.database))
    }

    render() {

        console.log(JSON.stringify(this.state.database))
        return (
            <div>
                <p>{JSON.stringify(this.state.database)}</p>

            </div>

        );
    }
}



export default Api;