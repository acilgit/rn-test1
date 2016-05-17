"use strict";

import React from 'react';

import {connect} from 'react-redux';

import ImagePage from '../pages/ImagePage';

class ImageContainer extends React.Component {
    render() {
        return (
            <ImagePage {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    const {image} = state;
    return {
        image
    };
}

export default connect(mapStateToProps)(ImageContainer);