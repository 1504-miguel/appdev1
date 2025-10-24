export default function Avatar({ name, imageUrl }) {
  return <img className="avatar" src={imageUrl} alt={name} />;
}