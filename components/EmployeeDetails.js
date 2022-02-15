import React, { useState, useEffect, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Styles.css";
import RowData from "./RowData";
import RowEdit from "./RowEdit";


export const EmployeeDetails = () => {
    
    // to store data locally 
    
    const getLocalItems = () =>{
        let List= localStorage.getItem('contacts')
        // console.log(List);

        if (List){
            return JSON.parse(localStorage.getItem('contacts'))
        }else{
            return []
        }
    }
    const [contacts, setContacts] = useState(getLocalItems());
    // const [items, setItems]= useState(getLocalItems())
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        empId: "",
        address: "",
        email: "",
        phoneNumber: "",
        salary: "",
    });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        empId: "",
        address: "",
        email: "",
        phoneNumber: "",
        salary: "",
    });
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
     }, [contacts]);

    const [editContactId, setEditContactId] = useState(null);

    const AddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
        
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
        
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
            salary: addFormData.salary,
            empId: addFormData.empId
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            empId: editFormData.empId,
            address: editFormData.address,
            email: editFormData.email,
            phoneNumber: editFormData.phoneNumber,
            salary: editFormData.salary,

        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
        setAddFormData('')
        
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            fullName: contact.fullName,
            empId: contact.empId,
            address: contact.address,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            salary: contact.salary,

        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
        
        
    };

    
    return (
        <>
            <h2>Please Add Employee Details Below...</h2>
            <form onSubmit={handleAddFormSubmit}>
            <div>
                <input
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter Employee Name..."
                    onChange={AddFormChange}
                    
                />
                </div>
                <input
                    type="text"
                    name="empId"
                    required="required"
                    placeholder="Enter Employee ID..."
                    onChange={AddFormChange}
                />
                <br/>
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter Address"
                    onChange={AddFormChange}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter Phone No..."
                    onChange={AddFormChange}
                />
                <br/>
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter Email..."
                    onChange={AddFormChange}
                />

                <input
                    type="number"
                    name="salary"
                    required="required"
                    placeholder="Enter Salary"
                    onChange={AddFormChange}
                /><br/> 
                <button type="submit">Add</button><br />
            </form>

            <br />
            <h2>Employee Details </h2>
            <div className="app-container">
                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Emp Id</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <Fragment>
                                    {editContactId === contact.id ? (
                                        <RowEdit
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                            
                                        />
                                    ) : (
                                        <RowData
                                            contact={contact}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                            
                                        />
                                        
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>


            </div>

        </>
    )
}
export default EmployeeDetails;