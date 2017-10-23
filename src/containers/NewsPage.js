import React, { PropTypes, Component } from 'react';
import News from "../components/News";
import {getNewsToday,searchMediaAction} from "../actions/newActions";
import { connect } from 'react-redux';


class NewsPage extends Component {


    constructor() {
        super();
    }

    componentDidMount() {
        console.log("1-> Dispath action from  Newspage Component");
        this.props.dispatch(getNewsToday());
    }

    render() {
        const {news} = this.props;
        console.log("7-> News Container Receive from reducer and passing it to News component " , news);
        return (
            <News news={news}/>
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