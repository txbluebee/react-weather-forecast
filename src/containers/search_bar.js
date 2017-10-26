import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <form>
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

export default SearchBar;
