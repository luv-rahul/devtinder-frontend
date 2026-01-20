import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);

  const getConnections = async () => {
    try {
      const response = await axios.get(BASE_URL + "connections", {
        withCredentials: true,
      });
      if (response.status === 200) {
        dispatch(addConnections(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) {
    return <h1>No connections Found</h1>;
  }

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Connections</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {connections.map((connection) => (
          <div
            key={connection._id}
            className="flex items-center gap-5 p-4 bg-white rounded-2xl"
          >
            <img
              className="h-24 w-24 rounded-full object-cover border text-black"
              src={connection.photoURL}
              alt={`${connection.firstName} ${connection.lastName}`}
            />

            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-black">
                {connection.firstName} {connection.lastName}
              </h2>
              <p className="text-sm text-gray-500">Connected</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
