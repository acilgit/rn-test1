"use strict";

import React from 'react';
import {connect} from 'react-redux';

import ListCom from '../components/ListCom';

class ListContainer extends React.Component {
    render() {
        return <ListCom {...this.props} />
    }
}

function mapStateToProps(state) {
    const {list} = state;
    return {
        list
    };
}

export default connect(mapStateToProps)(ListContainer);