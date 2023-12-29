// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import { colors } from "@mui/material";

// const About = () => {

import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const About = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState(""); 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
    setEditedTitle(editedItem.title);
    setEditedBody(editedItem.body); 
  };

  const handleSaveEdit = () => {
    const updatedData = myData.map((item) =>
      item.id === editId ? { ...item, title: editedTitle, body: editedBody } : item
    );
    
    setMyData(updatedData);
    setEditId(null);
    setEditedTitle("");
    setEditedBody("");
  };
  

  const handleCancelEdit = () => {
    setEditId(null);
    setEditedTitle("");
    setEditedBody("");
  };

  return (
    <>
      <h1 className="contact">Hello, I'm a Post Page</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
         <input
          type="text"
          value={editedBody} 
          onChange={(e) => setEditedBody(e.target.value)} 
        />
<button onClick={handleSaveEdit}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>

        

       
        {/* <button onClick={handleSaveEdit}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button> */}
      </>
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th className="titleAction">Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((post) => {
            const { id, title, body } = post;
            return (
              <tr key={id}>
                <td className="id">{id}</td>
                <td className="title">{title}</td>
                <td className="body">{body}</td>
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

export default About;










