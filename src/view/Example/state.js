// State

import React, { Component } from 'react';
class UseState extends Component {
    state = { 
        name : 'Quân',
        age : 20,
        address : 'BG'
     } 
    handleOnchangeName = (event) => {
        this.setState({
            name:event.target.value
        })
    }
    render() { 
        return (
            <>
                <div>
                    <h4>Nhập tên</h4>
                    <input type='text' className='inputState' onChange={(event) => this.handleOnchangeName(event)} />
                </div>
                <div>
                    My name is {this.state.name} <br/>
                    My age is {this.state.age} years old <br/>
                    My address is {this.state.address} 
                </div>
            </>
        );
    }
}
 
export default UseState;