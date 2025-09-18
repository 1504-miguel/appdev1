import './App.css'

const user = {
  name: 'Nathaniel David',
  imageUrl: 'https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/526992463_1809192703360441_3334903504517642380_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEfbqp2UB1e2smXjAf0rzpDq5rWbsw1Of-rmtZuzDU5_5hWe1RW5L_84-yjL312op95R261e4BwTq8ZmTZw2tLF&_nc_ohc=6Kq3C5LOXgMQ7kNvwFK_4G1&_nc_oc=AdlYSh6gMjd-7y6j7qv_q8GfjiiO2r8n9rRMM43JMInDB-Wo1v0UEtqodrvbO6EjJPs&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=AxY1k2bxrcayeEbaPsXVuQ&oh=00_AfZ9XyufpFjN1ja_f8vYmJljqqmPZsQx89JqVN0eI-RLuQ&oe=68D1D6B5',
  imageSize: 500
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


export default Profile
