import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            isChecker:false,
        }
    }
    changeChecker=(bool)=>{
        this.setState({
            isChecker:bool,
        })
    }
    
    render() {
        let{isChecker}=this.state
        return (
            <div>
                <h1>Prompt</h1>
            <button type="button" className="btn btn-primary" onClick={()=>this.changeChecker(false)}>Cho phép</button>
            <button type="button" className="btn btn-danger" onClick={()=>this.changeChecker(true)} >Không cho phép</button>
            <Prompt when={isChecker} message={location=>(`Bạn có chắc muốn đi đến ${location.pathname}`)}/>
            </div>
        );
    }
}

export default Contact;