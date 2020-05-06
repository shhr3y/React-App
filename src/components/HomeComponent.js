import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'


function Home(props) {
     
     function RenderCard({item}){
          return(
               <Card>
                    <CardImg src={item.image} alt={item.name}/>
                    <CardBody>
                         <CardTitle>{item.name}</CardTitle>
                         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                         <CardText>{item.description}</CardText>
                    </CardBody>
               </Card>
          );
     }

     return(
          <div className="container">
               <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                         <RenderCard item= {props.featuredDish}/>
                    </div>
                    <div className="col-12 col-md m-1">
                         <RenderCard item= {props.featuredPromotion}/>
                    </div>
                    <div className="col-12 col-md m-1">
                         <RenderCard item= {props.featuredLeader}/>
                    </div>
               </div>
          </div>
     );
}

export default Home;