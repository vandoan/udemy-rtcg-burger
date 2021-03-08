import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        // alert('Onwards');
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Wing Dinger',
                address: {
                    street: '1 Test St.',
                    zipCode: '43424',
                    county: 'Germany'
                },
                email: 'test@test.com',

            },
            deliveryMethod: 'Snail'
        }
        axios.post('/orders.s', order)
            .then( response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error =>
                this.setState({ loading: false })
            );
    }

    render() {
        let form = (
            <form>
                <input className='Input' type='text' name="name" placeholder="Your Name" />
                <input className='Input' type='email' name="email" placeholder="Email" />
                <input className='Input' type='text' name="street" placeholder="Street" />
                <input className='Input' type='text' name="postal" placeholder="Postal Code" />
                <Button onClick={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className='ContactData'>
                <h4> Enter your Contact Data</h4>
                { form}
            </div>
        )
    }
}

export default ContactData;