/*EditForm comes after we click the edit button 
in the adminList of selected menu 
it displays the existing values and 
we can update and submit it
*/

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {  Form,  Button } from 'react-bootstrap';

import "./FormControl.css";
import { connect } from "react-redux";
import * as addItemBuilderAction from "../../actions/index";
import './itemlist.css';



class EditForm extends Component {


    state = {

        _id: '',
        name: '',
        price: '',
        image: '',
        description: ''

    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const itemDetails = {};

        for (let param of query.entries()) {
            itemDetails[param[0]] = param[1];
        }
        // console.log(itemDetails);
        this.setState({ _id: itemDetails._id })
        this.setState({ name: itemDetails.name })
        this.setState({ price: itemDetails.price })
        this.setState({ image: itemDetails.image })
        this.setState({ description: itemDetails.description })


        //this.setState({ editItem: itemDetails })
    }



    updateMenuHandler = () => {

        const item = {
            id: this.state._id,
            name: this.state.name,
            price: this.state.price,
            image: this.state.image,
            description: this.state.description
        };


        console.log("edit Haile After item ", item)
        this.props.updateItemToDatabase(item);
    };

   
    editHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
        e.preventDefault()
    }



    render() {

        const formEdit = <Form  >
            <Form.Group >
                <Form.Label>Food Name </Form.Label>
                <Form.Control type="text" value={this.state.name} name="name" onChange={this.editHandler} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Food Price </Form.Label>
                <Form.Control type="text" value={this.state.price} name="price" onChange={this.editHandler} />

            </Form.Group><Form.Group>
                <Form.Label>Food Image  </Form.Label>
                <Form.Control value={this.state.image} name="image" onChange={this.editHandler} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Food Ingredients </Form.Label>
                <Form.Control type="text" value={this.state.description} name="description" onChange={this.editHandler} />
            </Form.Group>

            <Button onClick={this.updateMenuHandler}  variant="primary" type="button">
                <Link to= "/adminList">Submit</Link></Button>
        </Form>
        return (<div>{formEdit}</div>)

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateItemToDatabase: (item) => dispatch(addItemBuilderAction.updateItem(item))

    };
};

export default connect(null, mapDispatchToProps)(EditForm);
