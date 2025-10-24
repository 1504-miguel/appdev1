function Item({ name }) {
  return <li>{name}</li>;
}

export default function ItemList() {
  const items = ["Apples", "Bananas", "Cherries"];

  return (
    <ul>
      {items.map(item => (
        <Item key={item} name={item} />
      ))}
    </ul>
  );
}
