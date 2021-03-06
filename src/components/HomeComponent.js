import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import {Loading} from './LoadingComponent'
import {baseURL} from '../shared/baseURL';
import { FadeTransform} from 'react-animation-components';

function Home(props) {
     
     function RenderCard({item,isLoading,errMess}){

          if(isLoading){
               return(
                    <div>
                         <div className="text-center mt-6">
                              <Loading/>
                         </div>
                    </div>
               );
          }
          else if(errMess){
               return(
                    <h4>{errMess}</h4>
               );
          }
          else{
               return(
                    <FadeTransform in tranformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                         <Card>
                              <CardImg src={baseURL+item.image} alt={item.name}/>
                              <CardBody>
                                   <CardTitle>{item.name}</CardTitle>
                                   {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                                   <CardText>{item.description}</CardText>
                              </CardBody>
                         </Card>
                    </FadeTransform>
               );
          }
     }

     return(
          <div className="container">
               <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                         <RenderCard 
                              item= {props.featuredDish} 
                              isLoading={props.dishesLoading} 
                              errMess={props.dishesErrMess}
                         />
                    </div>
                    <div className="col-12 col-md m-1">
                         <RenderCard 
                              item= {props.featuredPromotion}
                              isLoading={props.promotionsLoading} 
                              errMess={props.promotionsErrMess}
                         />
                    </div>
                    <div className="col-12 col-md m-1">
                         <RenderCard 
                              item= {props.featuredLeader}
                              isLoading={props.leadersLoading} 
                              errMess={props.leadersErrMess}
                         />
                    </div>
               </div>
          </div>
     );
}

export default Home;