// export default function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://www.manilatimes.net/manilatimes/uploads/images/2025/08/15/714241.jpg"
//       alt="TJ AND KZ"
//     />
//   );
// }

//  export default function TodoList() {
//   const name = 'TJ and KZ';
  
//   return (
//     <>
//     <h1>{name}'s Photo</h1>

//     <img
//         className="avatar"
//         src="https://www.manilatimes.net/manilatimes/uploads/images/2025/08/15/714241.jpg"
//         alt={name}
//       />

    
//     </>
    
    
//   );
// }


// export default function TodoList() {
//   return (
//     <ul style={{
//       backgroundColor: 'black',
//       color: 'yellow'
//     }}>
//       <li>KZ and TJ were introduced by mutual friends, including singers Martin Nievera and Kedevon</li>
//       <li>They didn't know that the song "Palagi," which they wrote, has a part about their wedding rings. 
//         KZ said their ring has silver, gold, and diamonds, and the bridge of their song is 
//         "Sa pagdating ng ating pilak at ginto
//         Diyamante ma'y abutin"</li>
//       <li>I love them Both as a fan</li>
//       <li>By the way Tj fav color  is Yellow and KZ is Black or more dark color</li>
//     </ul>
//   );
// }


const person = {
  name: 'TJ and KZ',
  theme: {
    backgroundColor: 'black',
    color: 'yellow'
  }
};


export default function IdolList() {
  return (
    <div style={person.theme}>
      <h1>{person.name} Photo and Trivia</h1>
      <img
        className="avatar"
        src="https://www.manilatimes.net/manilatimes/uploads/images/2025/08/15/714241.jpg"
        alt="TJ and KZ"
      />
      <ul>
        <li>KZ and TJ were introduced by mutual friends, including singers Martin Nievera and Kedevon</li>
        <li>They didn't know that the song "Palagi," which they wrote, has a part about their wedding rings. 
         KZ said their ring has silver, gold, and diamonds, and the bridge of their song is 
         "Sa pagdating ng ating pilak at ginto
         Diyamante ma'y abutin"</li>
       <li>I love them Both as a fan</li>
       <li>By the way Tj fav color  is Yellow and KZ is Black or more dark color</li>
      </ul>
    </div>
  );
}


