import Topbar from "../components/Topbar";
import {connect} from 'react-redux';
import { menuClick } from "../service/actions/action";

const mapStateToProps = (state)=>({
    data:state
})

const mapDispatchToProps = (dispatch)=>({
    menuClickHandler:data=>dispatch(menuClick(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)