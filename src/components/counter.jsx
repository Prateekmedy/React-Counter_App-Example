import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value : this.props.counter.value,
    //    // tags : ["tag1", "tags2", "tags3"]
    //   //  imgUrl : "https://ak0.scstatic.net/1/cdn2-cont14.sweetcouch.com/147366912403594533-react-sticker.png"
    // };

    // style = {
    //     fontSize : 10,
    //     fontWeight : "bold"
    // }

    // renderTags(){
    //     if( this.state.tags.length === 0) return <p>There are no Tags </p>;

    //     return <ul> { this.state.tags.map( tag => <li key={ tag }>{ tag }</li>)} </ul>;
    // }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = (product) => {
    //     console.log("Product ID : ",product.id);
    //     this.setState({ value : this.state.value+1 })
    // }

    // product = {
    //     id : 1
    // };

    componentDidUpdate(prevProps, prevState){
        // console.log("prevProps", prevProps);
        // console.log("prevState", prevState);
        console.log("App - Unmounted");
    }

    componentWillUnmount(){
        console.log("App - Unmounted");
    }

    render() { 

   
        //console.log("props", this.props);
        console.log("Counter - Rendered");
        return (
            <div>
                {/* <img src={ this.state.imgUrl } alt="somethings wrong" /> */}
                <span  className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondry btn-sm">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btm-sm m-1">Delete</button>
                {/* { this.state.tags.length === 0 && "please create tags!"}
              { this.renderTags() }   */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        //return value === 0 ? <h1>Zero</h1> : value ;
        return value === 0 ? 'Zero' : value ;
    }
}
 
export default Counter;