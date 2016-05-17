"use strict";

import React from 'react';
import {connect} from 'react-redux';

import WebCom from '../components/WebCom';

class WebContainer extends React.Component {
    render() {
        return <WebCom {...this.props} />
    }
}

function mapStateToProps(state) {
    const {web} = state;
    return {
        web
    };
}

export default connect(mapStateToProps)(WebContainer);