import React, { Component } from 'react';
import {connect} from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { logScaling, zoom } from '../stateTimeline';

import styles from './timeline.module.css';

/* -- Timeline -- */
class Timeline extends Component {

    getLinePlacements() {
        var hrs = this.props.timeSpan/(60*60*1000);
        var step = 100/hrs;
        var list_ = new Array(hrs-1);
        for (var j=1; j<hrs; j++) {
            list_.push(step*j + "%");
        }
        return list_;
    }
    
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.topbar}>
                    <DropdownButton
                    className={styles.dropdown}
                    title={this.props.scale + " Hours"}>
                        {[12, 24, 36].map((i) => {
                            return (
                                <Dropdown.Item onClick={(a) => this.props.zoom(i)}
                                key={i}>
                                    {i + " Hours"}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                </div>
                <div className={styles.sliderbox}>
                    <div className={styles.slider} style={{width: ((this.props.timeSpan/(60*60*1000))/this.props.scale)*100 + "%"}}>
                        {this.getLinePlacements().map((i) => {
                            return ( <div style={{left: i}} className={styles.line} key={i}> </div> );
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
        scale: state.timeline.scale,
        timeSpan: state.timeline.timeSpan
    }
}

//Forward Redux's dispatch function to React props
const mapDispatchToProps = dispatch => {
    return {
        funcDummy: () => dispatch(logScaling()),
        zoom: (hrs) => dispatch(zoom(hrs))
    }
}

//Connect Redux with React
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timeline);
