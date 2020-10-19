import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addToCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractFromCounter} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ctr : state.counter})

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter : () => dispatch({type: 'INCREMENT'}),
        decrementCounter : () => dispatch({type: 'DECREMENT'}),
        addToCounter : () => dispatch({type: 'ADD', amount: 5}),
        subtractFromCounter : () => dispatch({type: 'SUBTRACT', amount: 5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);