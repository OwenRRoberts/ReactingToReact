import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.",
            phText: "Placeholder Text from the App state",
            inputStuff: "",
            hasLoaded: false
        };
    }

    changeLoaded: () => {
        //this.setState({hasLoaded: true});  same as below.  
        this.setState({ hasLoaded: !this.state.hasLoaded });  //says "when opposite of current state"
    };

render() {
    if (this.state.hasLoaded === true) {
        return (
            <>
                <h1>{this.props.text}</h1>
                <h1>{this.state.text}</h1>
                <input type="text" placeholder={this.state.phText} onChange={e => this.setState({ inputStuff: e.target.value })} />

            </>
        );
    } else {
        return (
            <>
                <h1>Loading...</h1>
                <button onClick={this.changeLoaded}>Clicky Clicky!</button>
            </>
        )
    }
}











    // const App = (props) => {
    //     return (
    //         <h1>
    //             I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.
    //         </h1>
    //     )
    // }
}

export default App;