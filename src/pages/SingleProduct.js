import { Link, useParams } from 'react-router-dom';
import products from '../../../react-router-6-tutorial-placeholder/src/data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const { image, name } = product;
  console.log(image);
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products" className="btn">
        Return to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
