import React, { Component } from 'react';
import {connect} from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { logScaling } from '../stateTimeline';


/* -- Timeline -- */
class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Time_scaling",
            btn1Title: "12 Hours",
            btn2Title: "24 Hours",
            btn3Title: "36 Hours"
        }
    }

    changeTitle (a) {
        this.props.funcDummy();
        if (a === 1) {
            this.setState({title: this.state.btn1Title});
            console.log('1111111111');
        } else if (a === 2) {
            this.setState({title: this.state.btn2Title});
            console.log('22222222');
        } else {
            this.setState({title: this.state.btn3Title});
        }
    }

    render() { 
        return (
            <React.Fragment>
                <p> Timeline Component </p>
                <DropdownButton title={this.state.title}>

                    <Dropdown.Item onClick={(a) => this.changeTitle(1)}>
                        {this.state.btn1Title}
                    </Dropdown.Item>

                    <Dropdown.Item onClick={(a) => this.changeTitle(2)}>
                        {this.state.btn2Title}
                    </Dropdown.Item>
                    
                    <Dropdown.Item onClick={(a) => this.changeTitle(3)}>
                        {this.state.btn3Title}
                    </Dropdown.Item>

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
