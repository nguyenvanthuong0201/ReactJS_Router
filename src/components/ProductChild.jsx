import React, { Component } from 'react';

class ProductChild extends Component {
    render() {
        let {match}=this.props          //truyền giá trị của match sang, rồi console.log lấy giá trị param
        let slug=match.params.slug   
        return (
            <div>
                <h1>Đây là chi tiết nè hen {slug}</h1>
            </div>
        );
    }
}

export default ProductChild;