"use strict";

import React from 'react';
import {connect} from 'react-redux';

import WebPage from '../pages/WebPage';

class WebContainer extends React.Component {
    render() {
        return <WebPage {...this.props} />
    }
}

function mapStateToProps(state) {
    const {web} = state;
    return {
        web
    };
}

export default connect(mapStateToProps)(WebContainer);