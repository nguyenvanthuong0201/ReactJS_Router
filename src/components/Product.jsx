import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ProductChild from './ProductChild';

class Product extends Component {
    
    render() {
        const products=[
            {
                id:1,
                name:"IPhone X",
                price:350000,
                slug:"iPhoneX"
            },
            {
                id:2,
                name:"IPhone 8",
                price:33000,
                slug:"iPhone8"
            },
            {
                id:3,
                name:"IPhone 7",
                price:30000,
                slug:"iPhone7"
            },
            {
                id:4,
                name:"IPhone 6",
                price:20000,
                slug:"iPhone6"

            },
        ]
        let {match}=this.props;
        let url = match.url // lấy url của trang

        let result = products.map((product,index)=>{
                return(
                    <NavLink to={`${url}/${product.slug}`} key={index}  >
                       <li>{product.id}--{product.name}--{product.price}</li>
                    </NavLink>
                 )
        })
        return (
            <div> 
                <h1>Đối tượng match ,URL</h1>
                   <div className="container">
                       <div className="row">
                           <div className="col-sm-12">
                                <ul>
                                {result}
                                </ul>
                           </div>
                       </div>
                       <div className="row">
                           <Route path="/sanPham/:slug" component={ProductChild}/>
                       </div>
                   </div>
            </div>
        );
    }
}

export default Product;