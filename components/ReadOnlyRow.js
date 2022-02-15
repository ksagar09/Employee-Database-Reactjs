import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.empId}</td>
      <td>{contact.address}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.salary}</td>

      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
