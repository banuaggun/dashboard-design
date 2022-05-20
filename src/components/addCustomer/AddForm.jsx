import React from "react";

const AddForm = ({ handleAddFormChange, handleAddFormSubmit, addFormData }) => {
  return (
    <form onSubmit={handleAddFormSubmit}>
      <input
        type="text"
        name="name"
        required
        placeholder="enter a name"
        onChange={handleAddFormChange}
        value={addFormData.name}
      ></input>
      <input
        type="email"
        name="email"
        required
        placeholder="enter a email"
        onChange={handleAddFormChange}
        value={addFormData.email}
      ></input>
      <input
        type="number"
        name="phone"
        required
        placeholder="enter a phone"
        onChange={handleAddFormChange}
        value={addFormData.phone}
      ></input>
      <input
        type="text"
        name="location"
        required
        placeholder="enter a location"
        onChange={handleAddFormChange}
        value={addFormData.location}
      ></input>
      <button type="submit" onClick={handleAddFormSubmit}>
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddForm;
