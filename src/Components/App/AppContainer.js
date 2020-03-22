import {connect} from "react-redux";
import App from "./index";

export default connect((state) => {
    console.log(state);
    return state;
})(App);