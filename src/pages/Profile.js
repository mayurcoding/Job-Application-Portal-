import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [editUser, setEditUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSave = () => {
    setUser(editUser);
    alert("Profile Updated!");
  };

  return (
    <div>
      <h2>Profile</h2>
      <label>Name:</label>
      <input type="text" name="name" value={editUser.name} onChange={handleChange} />
      <br />
      <label>Email:</label>
      <input type="email" name="email" value={editUser.email} onChange={handleChange} />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
