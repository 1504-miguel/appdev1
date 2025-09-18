import './App.css'

function Name(){
  const isTrue = true;

  let name;
  if (isTrue) {
    name = "Nath";
  } else {
    name = "Migs"
  }
  return(
    <>
    <h1>{name}</h1>
    
    </>
  )

}

export default Name
