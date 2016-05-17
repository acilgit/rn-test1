import {combineReducers} from 'redux';
// import reducers
import {listReducer} from './list';
import {imageReducer} from './image';
import {webReducer} from './web';

const rootReducer = combineReducers({
    // reducer1, reducer2
    listReducer, imageReducer, webReducer
});

export default rootReducer;
