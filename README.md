# 🚀 DevTinder - Frontend Setup

## 📦 Create Project

### Initialize Vite + React Application

```bash
npm create vite@latest devtinder-web
cd devtinder-web
npm install
```

> Remove unnecessary files after initialization

---

## 🎨 Install Tailwind CSS

### Installation Steps

> **Reference:** [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 🌼 Install Daisy UI

### Installation Steps

> **Reference:** [DaisyUI Documentation](https://daisyui.com/docs/install/)

```bash
npm i -D daisyui@latest
```

---

## 🧭 Navbar Component

### components/Navbar.jsx

```jsx
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevTinder</a>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
```

### App.jsx (Initial)

```js
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
```

---

## 🛣️ Routing Setup

### Installation

```bash
npm i react-router-dom
```

### App.jsx (With Routing)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
```

### components/Body.jsx

```jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
```

### components/Login.jsx

```jsx
const Login = () => {
  return <div>Login</div>;
};

export default Login;
```

### components/Profile.jsx

```js
const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;
```

---

## 📄 Footer Component

### components/Footer.jsx

```js
const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content items-center p-4 fixed bottom-0">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
```

### components/Body.jsx (With Footer)

```js
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
```

---

## 📁 Project Structure

```
devtinder-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Body.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
```

---

## 🎯 Features Implemented

| Component   | Description                              | Status |
| ----------- | ---------------------------------------- | ------ |
| **Navbar**  | Top navigation with user avatar dropdown | ✅     |
| **Body**    | Main layout wrapper with Outlet          | ✅     |
| **Footer**  | Fixed bottom footer with social links    | ✅     |
| **Login**   | Login page placeholder                   | ✅     |
| **Profile** | Profile page placeholder                 | ✅     |

---

## 🎨 Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Component Library:** DaisyUI
- **Routing:** React Router DOM

---

# 🚀 DevTinder - Login & Redux Setup

## 🔐 Login Page

### Installation

```bash
npm i axios
```

### components/Login.jsx (Basic)

```js
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("rahul12@gmail.com");
  const [password, setPassword] = useState("Rahul@123");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:7777/login", {
        emailId,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title underline">Login Form</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
```

---

## ⚠️ Common Issues & Solutions

### Problems Faced

1. **CORS error**
2. **Cookies not setting in Application Tab of browser dev tools**

---

### ✅ Solution 1: Enable CORS

#### Backend: devtinder-backend/app.js

**Installation:**

```bash
npm i cors
```

**Basic CORS Setup:**

```js
app.use(cors());
```

---

### ✅ Solution 2: Configure CORS with Credentials

> **Issue:** Axios doesn't allow cookies to set on unsecured network such as HTTP protocol.

#### Backend: devtinder-backend/app.js

```js
app.use(
  cors({
    origin: "http://localhost:5173", // whitelist this domain
    credentials: true,
  }),
);
```

#### Frontend: Login.jsx

> **Note:** `withCredentials: true` → Token will be stored and sent to every API call.

```js
const handleLogin = async () => {
  try {
    const response = await axios.post(
      "http://localhost:7777/login",
      {
        emailId,
        password,
      },
      { withCredentials: true },
    );
  } catch (error) {
    console.log(error);
  }
};
```

---

## 🔧 Redux Setup

### Installation

```bash
npm i @reduxjs/toolkit react-redux
```

### Steps

1. Create a `utils` folder
2. Create `appStore`
3. Configure Store
4. Provide store to application
5. Create Slice
6. Add slice to store

---

## 🏪 Configure Store

### utils/appStore.js (Initial)

```js
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {},
});

export default appStore;
```

---

## 🔌 Provide Store to Application

### App.jsx (With Provider)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
```

---

## 🔪 Create User Slice

### utils/userSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
```

---

## ➕ Add Slice to Store

### utils/appStore.js (Updated)

```js
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default appStore;
```

---

## 🔑 Login with Redux

### utils/constants.js

```js
export const BASE_URL = "http://localhost:7777/";
```

### components/Login.jsx (Final)

```js
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("rahul12@gmail.com");
  const [password, setPassword] = useState("Rahul@123");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      if (response.status === 200) {
        const { user } = response.data;
        dispatch(addUser(user));
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 text-primary-content w-96 py-10">
        <div className="card-body">
          <h2 className="card-title underline">Login Form</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
```

---

## 📺 Feed Component

### components/Feed.jsx

```js
const Feed = () => {
  return <div>Feed</div>;
};

export default Feed;
```

---

## 🛣️ Updated App Routes

### App.jsx (With Feed)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
```

---

## 🧭 Updated Navbar with User State

### components/Navbar.jsx

```js
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevTinder</a>
        </div>
        <div className="flex gap-2">
          {user && (
            <div className="dropdown dropdown-end mx-4">
              <div className="flex items-center gap-4">
                <h1 className="font-bold">Welcome, {user.firstName}</h1>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
```

---

## 🔄 Redux Flow Summary

| Step | Action                       | File         |
| ---- | ---------------------------- | ------------ |
| 1    | User submits login form      | Login.jsx    |
| 2    | API call with credentials    | Login.jsx    |
| 3    | Dispatch addUser action      | Login.jsx    |
| 4    | User data stored in Redux    | userSlice.js |
| 5    | Navbar reads user from store | Navbar.jsx   |
| 6    | Display user info            | Navbar.jsx   |

---

## 📋 CORS Configuration Summary

| Configuration   | Backend                 | Frontend                |
| --------------- | ----------------------- | ----------------------- |
| **Origin**      | `http://localhost:5173` | -                       |
| **Credentials** | `true`                  | `withCredentials: true` |
| **Package**     | `cors`                  | `axios`                 |

---

## 🎯 Key Concepts

### 1. withCredentials

> Allows Axios to send and receive cookies with cross-origin requests

### 2. CORS Configuration

> Enables frontend to make requests to backend on different origin

### 3. Redux Flow

```
Login → Dispatch Action → Update Store → Component Re-renders
```

### 4. Protected Routes

> Navbar conditionally renders based on user authentication state

---

## 🔐 User Access Control

User is accessible to pages only when authorized.

### Body Component

**File:** `Body.jsx`

```javascript
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });
      if (res.status === 200) {
        const { user } = res.data;
        dispatch(addUser(user));
      }
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
```

---

## 🚪 Logout

### Navbar Component

**File:** `Navbar.jsx`

```javascript
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "logout",
        {},
        { withCredentials: true },
      );
      if (res.status === 200) {
        dispatch(removeUser());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            DevTinder
          </Link>
        </div>
        <div className="flex gap-2">
          {user && (
            <div className="dropdown dropdown-end mx-4">
              <div className="flex items-center gap-4">
                <h1 className="font-bold">Welcome, {user.firstName}</h1>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
```

---

## ⚠️ Error Handling

### Login Component

**File:** `Login.jsx`

```javascript
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("rahul12@gmail.com");
  const [password, setPassword] = useState("Rahul@123");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      if (response.status === 200) {
        const { user } = response.data;
        dispatch(addUser(user));
        navigate("/");
      }
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 text-primary-content w-96 py-10">
        <div className="card-body">
          <h2 className="card-title underline">Login Form</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <p className="text-red-500">{error}</p>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
```

---

## 📰 Feed

### Feed Slice

**File:** `feedSlice.js`

```javascript
import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: () => {
      return null;
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
```

### App Store

**File:** `appStore.js`

```javascript
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import FeedReducer from "./feedSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    feed: FeedReducer,
  },
});

export default appStore;
```

### Feed Component

**File:** `Feed.jsx`

```javascript
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

  console.log(feed);

  return (
    <div className="flex justify-center my-10">
      {feed && <UserCard user={feed[0]} />}
    </div>
  );
};

export default Feed;
```

### User Card Component

**File:** `UserCard.jsx`

```javascript
const UserCard = ({ user }) => {
  const { firstName, lastName, about, photoURL, age, gender } = user;
  return (
    <div className="card bg-base-200 w-96 shadow-sm p-3 rounded-lg">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && gender && (
          <p>
            Age : {age} | {gender.toUpperCase()}
          </p>
        )}
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
```

---

## ✏️ Edit Profile

### Profile Component

**File:** `Profile.jsx`

```javascript
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  if (!user) {
    return;
  }

  return (
    user && (
      <div>
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
```

### Edit Profile Component

**File:** `EditProfile.jsx`

```javascript
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
```

# 🔗 Connections & Requests

A comprehensive guide to managing connections and requests in your application using Redux Toolkit.

---

## 📂 Redux Slices

### **connectionSlice.js**

```js
import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },
    removeConnections: () => {
      return null;
    },
  },
});

export const { addConnections, removeConnections } = connectionSlice.actions;
export default connectionSlice.reducer;
```

---

### **requestSlice.js**

```js
import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
  },
});

export const { addRequest } = requestSlice.actions;
export default requestSlice.reducer;
```

---

## 🏪 Store Configuration

### **appStore.js**

```js
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import FeedReducer from "./feedSlice";
import ConnectionReducer from "./connectionSlice";
import RequestReducer from "./requestSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    feed: FeedReducer,
    connection: ConnectionReducer,
    request: RequestReducer,
  },
});

export default appStore;
```

---

## 🧩 Components

### **Connections.jsx**

```jsx
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
```

---

### **Requests.jsx** (Initial Version)

```jsx
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

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

  useEffect(() => {
    getRequests();
  }, []);

  if (!requests) {
    return <h1> No Requests Found</h1>;
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
                <button className="btn btn-primary">Reject</button>
                <button className="btn btn-secondary">Accept</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
```

---

## 🔄 Enhanced Request Slice

### **requestSlice.js** (Updated)

```js
import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArray = state.filter((r) => r._id != action.payload);
      return newArray;
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
```

---

## ✨ Enhanced Requests Component

### **Requests.jsx** (Final Version)

```jsx
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
      console.log(response);
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
```

---
