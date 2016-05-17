"use strict";

import React from 'react';
import {connect} from 'react-redux';

import Second from '../components/ImageCom';

class ImageContainer extends React.Component {
    render() {
        return <Second {...this.props} />
    }
}

function mapStateToProps(state) {
    const {image} = state;
    return {
        image
    };
}

export default connect(mapStateToProps)(ImageContainer);