import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);
  const [showToast, setShowToast] = useState(false);

  const getRequests = async () => {
    try {
      const response = await axios.get(BASE_URL + "user/requests/received", {
        withCredentials: true,
      });
      if (response.status === 200) {
        dispatch(addRequest(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      const response = await axios.patch(
        BASE_URL + `request/review/${status}/${_id}`,
        {},
        { withCredentials: true },
      );
      if (response.status === 200) {
        setShowToast(true);
        dispatch(removeRequest(_id));
        const i = setInterval(() => {
          setShowToast(false);
          clearInterval(i);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!requests || requests.length === 0) {
    return <h1 className="text-center my-10 font-bold"> No Requests Found</h1>;
  }

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Requests</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {requests.map((request) => (
          <div
            key={request._id}
            className="flex items-center gap-5 p-4 bg-white rounded-2xl"
          >
            <img
              className="h-24 w-24 rounded-full object-cover border text-black"
              src={request.fromUserId.photoURL}
              alt={`${request.fromUserId.firstName} ${request.fromUserId.lastName}`}
            />

            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-black">
                {request.fromUserId.firstName} {request.fromUserId.lastName}
              </h2>
              <div className="flex gap-5 my-5">
                <button
                  className="btn btn-primary"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => reviewRequest("accepted", request._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Status Updated Successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Requests;
