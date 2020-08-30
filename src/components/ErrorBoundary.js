import React, { Component } from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
componentDidCatch(error, info) {
    this.ListeningStateChangedEvent({ hasError: true })
    console.log(info)
}
render() {
    return this.state.hasError ? <h1>Oooops. That is not good.</h1> : this.props.children
}

}
export default ErrorBoundary;