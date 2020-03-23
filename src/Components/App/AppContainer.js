import {connect} from "react-redux";
import App from "./index";

const mapStateToProps =(state)=>({
    url:state.url,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(App);