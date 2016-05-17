"use strict";

import React from 'react';
import {connect} from 'react-redux';

import ListPage from '../pages/ListPage';

class ListContainer extends React.Component {
    render() {
        return <ListPage {...this.props} />
    }
}

function mapStateToProps(state) {
    const {list} = state;
    return {
        list
    };
}

export default connect(mapStateToProps)(ListContainer);