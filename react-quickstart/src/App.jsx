import './App.css'

function Fruit(){
  const products = [
  { title: 'Mango', id: 1 },
  { title: 'Watermelon', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);

}

export default Fruit
