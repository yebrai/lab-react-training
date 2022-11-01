

function IdCard(props) {
  console.log(props);
 let {user} = props
  return (
    <div>
    <img src="" alt="" />
      <div>
        <p>First name: {user.firstName}</p>
        <p>Last name:{user.lastName}</p>
        <p>Gender: {user.gender}</p>
        <p>Height: {user.height}</p>
        <p>Birth: {user.birth}</p>
        <p></p>
      </div>
    </div>
  );
}

export default IdCard;
