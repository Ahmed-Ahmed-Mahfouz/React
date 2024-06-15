import React, { useEffect, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {
  getProductAction,
  addNewProductAction,
  updateProductAction,
} from '../Store/Actions';

export function ProductForm() {
  let [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    img: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== 0) {
      dispatch(getProductAction(id))
        .then((action) => {
          const product = action.payload;
          setFormData(product);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, id]);

  const formHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (id === 0) {
      dispatch(addNewProductAction(formData))
        .then(() => {
          navigate('/products');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      dispatch(updateProductAction(id, formData))
        .then(() => {
          navigate('/products');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container className='product-form-container'>
      <h1 className='text-center my-4'>
        {id === 0 ? 'Add Product' : 'Edit Product'}
      </h1>
      <Form onSubmit={addHandler}>
        <Form.Group className='mb-3' controlId='formProductName'>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product name'
            name='name'
            value={formData.name}
            onChange={formHandler}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formProductPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter product price'
            name='price'
            value={formData.price}
            onChange={formHandler}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formProductCategory'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product category'
            name='category'
            value={formData.category}
            onChange={formHandler}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formProductDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Enter product description'
            name='description'
            value={formData.description}
            onChange={formHandler}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formProductImage'>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product image URL'
            name='img'
            value={formData.img}
            onChange={formHandler}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='mb-3'>
          {id === 0 ? 'Add Product' : 'Update Product'}
        </Button>
      </Form>
    </Container>
  );
}
