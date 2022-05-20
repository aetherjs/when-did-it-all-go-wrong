import React, { Component } from 'react';
import { formatDistanceToNowStrict } from 'date-fns'
import './clock.css'

class Clock extends Component {

    constructor(props) {
        super(props);
        this.startTime = new Date('February 24, 2022 05:00:00')
        this.state = {
            displayTime: formatDistanceToNowStrict(this.startTime, {unit: 'day'})
        }
    }

    //This happens when the component mount and the setInterval function get called with a call back function updateClock()
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        );
    }

    //This section clears setInterval by calling intervalID so as to optimise memory
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    //This function set the state of the time to a new time
    updateClock() {
        this.setState({
            displayTime: formatDistanceToNowStrict(this.startTime, {unit: 'day'})
        });
    }

    render() {
        return (
            <div className="Time">
                <p> {this.state.displayTime}</p>
            </div>
        );
    }
}

export default Clock;