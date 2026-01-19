const UserCard = ({ user }) => {
  const { firstName, lastName, about, photoURL, age, gender } = user;
  console.log(age);
  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <div>
          {age && <span>Age : {age}</span>} {"| "}
          {gender && <span>Gender : {gender}</span>}
        </div>
        <p>{about}</p>
        <div className="card-actions justify-center py-2">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
