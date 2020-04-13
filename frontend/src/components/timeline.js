import React, { Component } from 'react';
import {connect} from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { logScaling } from '../stateTimeline';

import styles from './timeline.module.css';

/* -- Timeline -- */
class Timeline extends Component {

    logThis (a) {
        //this.props.funcDummy();
        console.log(a);
    }
    
    render() { 
        return (
            <div className={styles.main}>
                <div className={styles.topbar}>
                    <DropdownButton
                    className={styles.dropdown}
                    title={"Time scale"}>
                        {["12 Hours", "24 Hours", "36 Hours"].map((i) => {
                            return (
                                <Dropdown.Item onClick={(a) => this.props.zoom(parseInt(i.split(' ')[0]))}
                                key={i}>
                                    {i}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                </div>
                <div className={styles.sliderbox}>
                    <div className={styles.slider} style={{width: this.props.scale}}>
                        {["8.3%", "16.6%", "24.9%", "33.3%", "41.3%", "49.9%", "58.3%", "66.6%", "74.9%", "83.3%", "91.6%"].map((i) => {
                            return (
                                <div style={{
                                    position: "absolute",
                                    left: i,
                                    width: "1px",
                                    height: "100%",
                                    backgroundColor: "black"
                                }} key={i}>
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

//Map Redux states to React props
const mapStateToProps = state => {
    return {
        scale: state.timeline.scale
    }
}

//Forward Redux's dispatch function to React props
const mapDispatchToProps = dispatch => {
    return {
        funcDummy: () => dispatch(logScaling()),
        zoom: () => dispatch(zoom())
    }
}

//Connect Redux with React
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timeline);
