import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "profile/edit",
        { firstName, lastName, age, photoURL, gender, about },
        { withCredentials: true },
      );
      if (res.status === 200) {
        dispatch(addUser(res.data.user));

        setError("");

        setShowToast(true);

        const i = setInterval(() => {
          setShowToast(false);
          clearInterval(i);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="mx-10">
          <div className="card bg-base-300 text-primary-content w-96 py-10">
            <div className="card-body">
              <h2 className="card-title underline">Edit Profile</h2>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">PhotoURL</legend>
                  <input
                    type="url"
                    className="input"
                    placeholder="Enter PhotoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Age</legend>
                  <input
                    type="number"
                    className="input"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Gender</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">About</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter About"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="card-actions justify-center">
                <p className="text-red-500">{error}</p>
                <button className="btn" onClick={handleEdit}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, photoURL, gender, about }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Updated Successfully!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
