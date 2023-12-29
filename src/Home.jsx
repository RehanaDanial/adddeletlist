

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedAddress, setEditedAddress] = useState("");
  const [editedUsername, setEditedUsername] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

  const handleDelete = (id) => {
    const updatedData = myData.filter((item) => item.id !== id);
    setMyData(updatedData);
    setEditId(null);
  };

  const handleEdit = (id) => {
    setEditId(id);
    const editedItem = myData.find((item) => item.id === id);
    setEditedName(editedItem.name);
    setEditedAddress(editedItem.address.street);
    setEditedUsername(editedItem.username);
    setEditedEmail(editedItem.email);
  };

  const handleSaveEdit = () => {
    const updatedData = myData.map((item) =>
      item.id === editId
        ? {
            ...item,
            name: editedName,
            address: { ...item.address, street: editedAddress },
            username: editedUsername,
            email: editedEmail,
          }
        : item
    );
    setMyData(updatedData);
    setEditId(null);
    setEditedName("");
    setEditedAddress("");
    setEditedUsername("");
    setEditedEmail("");
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditedName("");
    setEditedAddress("");
    setEditedUsername("");
    setEditedEmail("");
  };

  return (
    <>
      <h1 className="contact">Hello, I'm a User Page</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <>
        <input
          type="text"
          placeholder="Name"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={editedAddress}
          onChange={(e) => setEditedAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={editedUsername}
          onChange={(e) => setEditedUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
        />
        <button onClick={handleSaveEdit}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </>
      <br/>
      <br/>

      <table>
        <thead>
          <tr className="space-th">
            <th>Id</th>
            <th className="titleAction">Name</th>
            <th>Address</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
         
        </thead>

        <tbody>
           
          {myData.map((post) => {
            const { email, username, id, name, address } = post;
            return (
              <tr className="space-around" key={id}>
                <td className="id">{id}</td>
                <td className="name">{name}</td>
                <td className="address">{address.street}</td>
                <td className="username">{username}</td>
                <td className="email">{email}</td>
                <td>
                  <div className="tableAction">
                    <FaEdit onClick={() => handleEdit(id)} />
                    <MdDelete onClick={() => handleDelete(id)} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
