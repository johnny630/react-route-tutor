import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <span>{params.productId}</span>
    </section>
  );
}

export default ProductDetail;
