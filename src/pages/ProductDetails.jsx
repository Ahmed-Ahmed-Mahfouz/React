import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ProductDetails.css';
import { useDispatch } from 'react-redux';
import { getProductAction } from '../Store/Actions';

export function ProductDetails() {
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction(id))
      .then((action) => {
        const product = action.payload;
        setProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [dispatch, id]);

  const goBack = () => {
    navigate('/products');
  };

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
          <div className='spinner-border text-dark' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='product-details-container bg-dark text-light'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-8 col-lg-4'>
                <div className='card bg-secondary text-light'>
                  <div className='card-header text-center'>
                    <h1 className='card-title'>Product Details</h1>
                  </div>
                  <div className='card-body text-center'>
                    <img
                      width={200}
                      src={product.img}
                      alt={product.name}
                      className='img-fluid rounded mb-3'
                    />
                    <h3 className='card-text'> {product.name}</h3>
                    <h4 className='card-text'> ${product.price}</h4>
                    <h5 className='card-text'> {product.category}</h5>
                  </div>
                  <div className='card-footer text-center'>
                    <button onClick={goBack} className='btn btn-dark'>
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
