import React, { Component } from 'react';
import {connect} from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { logScaling } from '../stateTimeline';


/* -- Timeline -- */
class Timeline extends Component {

    logThis (a) {
        //this.props.funcDummy();
        if (a === 1) {
            console.log('1');
        } else if (a === 2) {
            console.log('2');
        } else {
            console.log('3');
        }
    }

    render() { 
        return (
            <React.Fragment>
                <p> Timeline Component </p>
                <DropdownButton title={"Time scale"}>
                    {["12 Hours", "24 Hours", "36 Hours"].map((i) => {
                        return (
                            <Dropdown.Item onClick={(a) => this.logThis(parseInt(1))}>
                                {i}
                            </Dropdown.Item>
                        );
                    })}
                </DropdownButton>
            </React.Fragment>
        );
    }
}

//Map Redux states to React props
const mapStateToProps = state => {
    return {
        scaling: state.timeline.scaling
    }
}

//Forward Redux's dispatch function to React props
const mapDispatchToProps = dispatch => {
    return {
        funcDummy: () => dispatch(logScaling())
    }
}

//Connect Redux with React
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timeline);
