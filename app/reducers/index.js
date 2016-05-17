import {combineReducers} from 'redux';
// import reducers
import list from './list';
import image from './image';
import web from './web';

const rootReducer = combineReducers({
    list, image, web
});

export default rootReducer;
