import React from 'react';

import axios from 'axios';

export default class Demo extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`202.191.56.159:2900/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (

            <ul>
                <p>Hương</p>
                {this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}