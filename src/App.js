import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';

class App extends Component {

   state = { 
        name : "apple",
        counters : [
            { id : 1, value : 4 },
            { id : 2, value : 0 },
            { id : 3, value : 0 },
            { id : 4, value : 0 }
        ]
    };

    
    constructor(){
        super();
        console.log("App - Contructor");
    }

    componentDidMount(){
      console.log("App - Mount ");
    }


    handleDelete = (counterId) => {
        console.log("Event Handled");
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({ counters });
    }
        
    handleIncrement = (counter) => {
        console.log("Increment Event Handled");
        const counters = [...this.state.counters]; //clone of this.state.counters Array
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    }

    handleReset = () => {
        console.log("Reset Event Handled");
        const counters = this.state.counters.map(c => {
            c.value = 0 
            return c;
        });
        this.setState({ counters });
    }



  render() {
    console.log("App - Render");
    return (
        <Router>
            <div>
                <NavBar totalCounter={ this.state.counters.filter(c => c.value > 0).length} name={this.state.name}/>
                <Switch>
                    <Route path="/" exact component={() => <Counters 
                        counters={this.state.counters}
                        onReset = { this.handleReset}
                        onDelete = {this.handleDelete}
                        onIncrement = {this.handleIncrement}/>} />
                    <Route  path="/about/:name" component={props => <About {...props} />} />
                    <Route  path="/contact" component={Contact} />
                    <Route component={()=> <h1>This path us not defined</h1>} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
