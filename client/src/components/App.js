import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Link , Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    componentDidMount(){
        this.props.fetchTestData();
    }
    render(){
        const DataComponent = () => {
            return <div>
                {this.props.testReducer}
            </div>
        };
        return (
            <Router>

                    <div>
                        <Link to={'/api/data1'}>Data</Link>

                            <Route path={'/api/data1'} render={DataComponent}/>

                    </div>
            </Router>

        );
    }

}

function mapStateToProps(state){
    return {
        testReducer: state.testReducer
    }
}

export default connect(mapStateToProps, actions)(App);
