import React,{Component} from 'react';
import { BreadcrumbItem,Breadcrumb, Form, FormGroup, Label, Col,Input, Button, FormFeedback } from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state={
            firstname: '',
            lastname:'',
            email:'',
            phone:'',
            agree: false,
            contactType: 'Tel.',
            message:'',
            touched:{
                firstname : false,
                lastname : false,
                email : false,
                phone : false,
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        
    }


    handleInputChange(event){
        const target = event.target;
        const value = target.type==='checkbox'?target.checked:target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
    }


    handleSubmit(event){
        console.log(JSON.stringify(this.state));
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }


    handleBlur = (feild) => (event) => {
        this.setState({
            touched : {...this.state.touched, [feild]:true}
        })
    }


    validate(firstname,lastname,phone,email){
        const errors = {
            firstname: '',
            lastname:'',
            email:'',
            phone:''
        };

        if (this.state.touched.firstname && firstname.length < 3) {
            errors.firstname = 'First Name should be greater than 3 charactes';
        } 
        else if(this.state.touched.firstname && firstname.length > 10) {
            errors.firstname = 'First Name should be less than 10 charactes';
        }

        if (this.state.touched.lastname && lastname.length < 3) {
            errors.lastname = 'Last Name should be greater than 3 charactes';
        } 
        else if(this.state.touched.lastname && lastname.length > 10) {
            errors.lastname = 'Last Name should be less than 10 charactes';
        }

        const reg = /^\d+$/;

        if(this.state.touched.phone && !reg.test(phone))
            errors.phone = 'Phone number should only be numbers';

        if(this.state.touched.email && email.split('').filter((x)=>x==='@').length!==1){
            errors.email = 'Check your email again'
        }

        return errors;
        
    }


    render(){
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.phone,this.state.email);
        return(
            <div>
                <div>
                    <Breadcrumb>
                        <div className="container">
                            <div className="row">
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                            </div>
                        </div>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <br/><h3>Contact Us</h3><hr/>
                    <div className="row row-content">
                        <div className="col-12">
                        <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                                <h5>Our Address</h5>
                                <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                                </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                    </div>
                    <div className='row row-content'>
                        <div className='col-12'>
                            <h3>Share us your Feedback!</h3><br/>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={3}>First Name</Label>
                                    <Col md={9}>
                                        <Input onChange={this.handleInputChange} valid={errors.firstname===''} invalid={errors.firstname!==''} onBlur={this.handleBlur('firstname')} type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname}></Input>
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md={3}>Last Name</Label>
                                    <Col md={9}>
                                        <Input onChange={this.handleInputChange} valid={errors.lastname===''} invalid={errors.lastname!==''} onBlur={this.handleBlur('lastname')} type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname}></Input>
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phone" md={3}>Phone Number</Label>
                                    <Col md={9}>
                                        <Input onChange={this.handleInputChange} valid={errors.phone===''} invalid={errors.phone!==''} onBlur={this.handleBlur('phone')} type="text" id="phone" name="phone" placeholder="Phone Number" value={this.state.phone}></Input>
                                        <FormFeedback>{errors.phone}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={3}>Email</Label>
                                    <Col md={9}>
                                        <Input onChange={this.handleInputChange} valid={errors.email===''} invalid={errors.email!==''} onBlur={this.handleBlur('email')} type="email" id="email" name="email" placeholder="Email" value={this.state.email}></Input>
                                        <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md={3}>Feedback</Label>
                                    <Col md={9}>
                                        <Input onChange={this.handleInputChange} type="textarea" rows={5} id="message" name="message" placeholder="Feedback" value={this.state.message}></Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:4,offset:3}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input onChange={this.handleInputChange} type='checkbox' name="agree" checked={this.state.agree}/>
                                                <h6><strong>May we contact you?</strong></h6>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3,offset:2}}>
                                        <Input onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType}>
                                            <option>Phone</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:10,offset:3}}>
                                        <Button type='submit' color='primary'>Send Feedback</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;