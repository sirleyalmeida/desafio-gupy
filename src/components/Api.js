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


        // console.log(JSON.stringify(this.state.database))
    }

    // getContact = () => {
    //     const mapData = this.state.database.map((contactApplicant) => {
    //         console.log('name', contactApplicant.name)
    //     })
    // }

    render() {
        console.log(JSON.stringify(this.state.database))
        return (
            <div>
                {
                    this.state.database.map((elem, index) => {
                        return (
                            <p key={index}> {elem.name} </p>
                        )
                    })
                }

            </div>

        );
    }
}

export default Api;