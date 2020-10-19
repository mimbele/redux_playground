import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addToCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractFromCounter} />
                <br />
                <button onClick={() => this.props.addResult(this.props.ctr)}>Add To Results</button>
                <ul>
                    {this.props.results.map( item => (
                        <li 
                            key={item.id}
                            onClick={() => this.props.deleteResult(item.id)}>{item.data}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ctr : state.ctr.counter, results: state.rst.results})

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter : () => dispatch({type: actions.INCREMENT}),
        decrementCounter : () => dispatch({type: actions.DECREMENT}),
        addToCounter : () => dispatch({type: actions.ADD, amount: 5}),
        subtractFromCounter : () => dispatch({type: actions.SUBTRACT, amount: 5}),
        addResult : (number) => dispatch({type: actions.ADD_RESULT, number: number}),
        deleteResult: (id) => dispatch({type: actions.DELETE_RESULT, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);