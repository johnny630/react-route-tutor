import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to="/products/p1">Porduct 1</Link></li>
        <li><Link to="/products/p2">Porduct 2</Link></li>
        <li><Link to="/products/p3">Porduct 3</Link></li>
      </ul>
    </section>
  )
}

export default Products;