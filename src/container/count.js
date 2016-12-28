import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../component/Counter'
import * as CounterActions from '../action/num'

function mapStateToProps(state) {
  return {
    num: state.num
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
