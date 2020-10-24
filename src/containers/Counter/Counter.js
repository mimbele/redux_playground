import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/actions'

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
        incrementCounter : () => dispatch(actions.increment()),
        decrementCounter : () => dispatch(actions.decrement()),
        addToCounter : () => dispatch(actions.add(5)),
        subtractFromCounter : () => dispatch(actions.subtract(5)),
        addResult : (number) => dispatch(actions.addResultAsync(number)),
        deleteResult: (id) => dispatch(actions.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);