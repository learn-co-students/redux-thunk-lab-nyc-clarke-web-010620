import React from 'react';
import './styling.css'; 

class Cat extends React.Component {

    state = {
        votes: 0
    }

componentDidMount() {
   
}

handleUpvote = () => {
    this.setState(prevState => ({ votes: prevState.votes + 1 }))
}

handleDownvote = () => {
    if (this.state.votes <= 0) {
        return
    } else {
    this.setState(prevState => ({ votes: prevState.votes - 1 }))
    }
}

    render() {
        return (
            <div className="center">
                <img src={this.props.cat.url} 
                     key={this.props.cat.id} 
                     alt={this.props.cat.id} 
                /><span></span> {this.state.votes} <span></span>
                <button onClick={this.handleUpvote}> Upvote </button><span></span>
                <button onClick={this.handleDownvote}> Downvote </button>
            </div>
        )
    }
}
export default Cat;