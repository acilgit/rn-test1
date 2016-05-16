import {combineReducers} from 'redux';
// import reducers
import list from './list';
import image from './image';
import web from './web';

const rootReducer = combineReducers({
    // reducer1, reducer2
    list, image, web
});

export default rootReducer;
