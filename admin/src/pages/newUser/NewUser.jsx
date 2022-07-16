import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import app from "../../firebase";
import { addUser } from "../../redux/apiCalls";
import "./newUser.css";

export default function NewUser() {
  const history = useHistory();
  const [userInput, setUserInput] = useState({});
  const [file, setFile] = useState(null);
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserInput((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const user = {
            ...userInput,
            img: downloadURL,
            gender,
          };
          addUser(user, dispatch);
          history.push("/");
        });
      }
    );
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="file">Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder="john"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="John Smith"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="+1 123 456 78"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            id="address"
            placeholder="New York | USA"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              onClick={(e) => setGender(e.target.value)}
              name="gender"
              id="male"
              value="male"
            />
            <label htmlFor="male">Male</label>
            <input
              onClick={(e) => setGender(e.target.value)}
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label htmlFor="female">Female</label>
            <input
              onClick={(e) => setGender(e.target.value)}
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="newUserButton">
          Create
        </button>
      </form>
    </div>
  );
}
