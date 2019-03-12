import React, { Component } from 'react';
import Welcome from 'components/Welcome';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Welcome name="React" />;
    }
}

export default App;