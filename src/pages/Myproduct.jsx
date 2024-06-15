import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, getAllProductsAction } from '../Store/Actions';
import { useEffect } from 'react';

export function Myproduct() {
  const dispatch = useDispatch();
  const { ProductList, isLoading } = useSelector((state) => state.productSlice);
  console.log(ProductList);
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);
  const deleteHandler = (id) => {
    dispatch(deleteProductAction(id));
  };
  if (!Array.isArray(ProductList)) {
    return null;
  }
  return (
    <div className='p-1 text-center mt-5'>
      <h1>Our Products</h1>
      <div className='container d-flex flex-column align-items-start'>
        <Link to='/products/0/edit' className='mb-3'>
          <i className='fs-3 m-2 bi bi-plus-circle-fill'></i>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan='5' className='text-center'>
                  <i className='fs-3 m-2 bi bi-arrow-repeat text-info'></i>
                </td>
              </tr>
            ) : (
              ProductList.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <img width={50} src={product.img} alt='' />
                    </td>
                    <td>{product.category}</td>
                    <td>
                      <Link to={`/products/${product.id}`}>
                        <i className='mx-2 text-warning fs-5 bi bi-eye-fill'></i>
                      </Link>

                      <Link to={`/products/${product.id}/edit`}>
                        <i className='mx-2 text-info fs-5 bi bi-pencil-square'></i>
                      </Link>
                      <i
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteHandler(product.id)}
                        className='mx-2 text-danger fs-5 bi bi-trash3-fill'
                      ></i>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
