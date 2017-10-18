import React, { PropTypes, Component } from 'react';
import News from "../components/News";
import {getNewsToday,searchMediaAction} from "../actions/newActions";
import { connect } from 'react-redux';


class NewsPage extends Component {


    constructor() {
        super();
    }

    componentDidMount() {
        console.log("Dispath action call api");
        this.props.dispatch(getNewsToday());
    }

    render() {
        return (
            <News />
        );
    }

}

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = ({ news }) => ({
   news : news
});

// connect method from react-router connects the component with redux store
export default connect(
    mapStateToProps)(NewsPage);