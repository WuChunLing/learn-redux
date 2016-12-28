import { addNum,subNum } from '../action/action'

function reducer(state=0,action){
  switch (action.type) {
    case addNum:return  state+1;
    case subNum:return  state-1;
    default:return state;
  }
}
export default reducer;
