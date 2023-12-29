
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { colors } from "@mui/material";

const Todos = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [editId, setEditId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
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
    };

    const handleSaveEdit = () => {
        const updatedData = myData.map((item) =>
            item.id === editId ? { ...item, title: editedTitle } : item
        );
        setMyData(updatedData);
        setEditId(null);
        setEditedTitle("")
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setEditedTitle("")
    };

    useEffect(() => {
        console.log(myData, "myData");
    }, [myData]);

    return (
        <>
            <h1 className="contact">Hello, Im a todos Page</h1>
            {isError !== "" && <h2>{isError}</h2>}

            <>
                <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
            </>

            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th className="titleAction">Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myData.map((post) => {
                        const { userId, id, title } = post;
                        return (
                            <tr className="todos-data" key={id}>
                                <td className="id">{id}</td>
                                <td className="title">

                                    {title}
                                </td>
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

export default Todos;















