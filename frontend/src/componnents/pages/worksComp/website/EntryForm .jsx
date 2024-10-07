import React, { useState } from "react";
import "./EntryForm.css"; // Optional: Add some CSS for styling
import axios from "axios";

const EntryForm = () => {
    // Set up initial state for form fields
    const [formData, setFormData] = useState({
        links: "",
        details: ""
    });

    const [isEditing, setIsEditing] = useState(false);

    // Handle form field change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const postDAta = async (data) => {
        console.log("Form Data :", data);
        await axios.post('/api/weblinks', { links: data.links, details: data.details })
            .then((res) => {
                console.log(res);
                setFormData("")
            }
            )
            .catch((error) => console.error(error));
    }



    // Handle form submission (for Submit button)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        postDAta(formData)
        // Add further submit logic here, such as an API call
        setIsEditing(false); // Disable editing after submit
    };

    // Handle form update (for Update button)
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Form Data Updated:", formData);
        setIsEditing(true); // Enable editing when updating
    };

    return (
        <div className="entry-form-container">
            <h2>Entry Form add data</h2>
            <form>
                <div className="form-row">
                    <label>Links:</label>
                    <input
                        type="text"
                        name="links"
                        value={formData.links}
                        onChange={handleChange}
                    // disabled={!isEditing && formData.links !== ""}
                    />
                </div>
                <div className="form-row">
                    <label>details:</label>
                    <input
                        type="text"
                        name="details"
                        value={formData.title}
                        onChange={handleChange}
                    // disabled={!isEditing && formData.details !== ""}
                    />
                </div>

                <div className="form-row">
                    {/* Conditional rendering for Submit and Update buttons */}
                    {!isEditing ? (
                        <button onClick={handleSubmit}>Submit</button>
                    ) : (
                        <button onClick={handleUpdate}>Update</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default EntryForm;
