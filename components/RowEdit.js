import React from "react";

const RowEdit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <>
    <tr>
    
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Employee Name"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Employee Id"
          name="empId"
          value={editFormData.empId}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Phone Number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter Email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter Salary"
          name="salary"
          value={editFormData.salary}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
    </>
  )

};

export default RowEdit;
