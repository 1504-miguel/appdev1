// export default function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://www.manilatimes.net/manilatimes/uploads/images/2025/08/15/714241.jpg"
//       alt="TJ AND KZ"
//     />
//   );
// }

 export default function TodoList() {
  const name = 'TJ and KZ';
  
  return (
    <>
    <h1>{name}'s Photo</h1>

    <img
        className="avatar"
        src="https://www.manilatimes.net/manilatimes/uploads/images/2025/08/15/714241.jpg"
        alt={name}
      />

    
    </>
    
    
  );
}
