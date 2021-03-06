import React, {} from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseURL} from '../shared/baseURL';



function RenderDishCards(dish){
     return(
          <Link to={`menu/${dish.id}`}>
               <Card>
                    <CardImg width="100%"  src={baseURL+dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                         <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
               </Card>
          </Link>
     );
}

function Menu(props) {
     
     const menu = props.dishes.dishes.map((dish) => {
          return(
               <div key={dish.id} className="col-12 col-md-5 m-1">
                         {RenderDishCards(dish)}    
               </div>
          );
     });

     if(props.dishes.isLoading){
          return(
               <div className='container'>
                    <div className='row'>
                         <Loading/>
                    </div>
               </div>
          );
     }
     else if(props.dishes.errMess){
          return(
               <div className='container'>
                    <div className='row'>
                         <h4>{props.dishes.errMess}</h4>
                    </div>
               </div>
          );
     }

     else{
          return (
               <div>
                    <Breadcrumb>
                         <div className="container">
                              <div className="row">
                                   <BreadcrumbItem><Link to="home"> Home</Link></BreadcrumbItem>
                                   <BreadcrumbItem active>Menu</BreadcrumbItem>
                              </div>
                         </div>
                    </Breadcrumb>   
                    
                    <div className="container">
                         <div>
                              <br/><h3>Menu</h3><hr/>
                         </div>
                         <div className="row row-content">
                              {menu}   
                         </div>
                    </div>
               </div>
     
          );
     }
}


export default Menu;