import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={this.onFormSubmit} >
                        <h2 className="pt-5">5 day weather forecast</h2>
                        <div className="input-group">
                            <input 
                                onChange={this.onInputChange}
                                value = {this.state.term}
                                type="text" 
                                className="form-control" 
                                placeholder="Search for City for weather forcase" />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="submit">Search </button>
                            </span>
                        </div>
                     </form>   
                </div>
             </div>   
        );
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
