import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "feed", { withCredentials: true });
      if (res.status === 200) {
        dispatch(addFeed(res.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  }, []);

  if (!feed || feed.length === 0) {
    return <h1 className="text-center font-bold my-10">Feed is empty!</h1>;
  }

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
