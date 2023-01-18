import React, { useState } from "react";


export default function Guest(props) {
    const [isEditing, setEditing] = useState(false);
    const [newGuest, setNewGuest] = useState({
        fname: "",
        email: "",
        gender: "",
        phone: "",
        dor: ""
    });
    
    //To Handle Change in Edit Template Mode
    function handleChange(e) {
        console.log(props.id)
        const name = e.target.name;
        const value = e.target.value;
        setNewGuest(previousState => ({
            ...previousState, [name]: value
        }))
    }

    //To Handle Submission of HTML Form in Edit Template Mode
    function handleSubmit(e) {
        e.preventDefault();
        props.editGuest(props.id, newGuest);
        setNewGuest({
            fname: "",
            email: "",
            gender: "",
            phone: "",
            dor: ""
        });
        setEditing(false);
    }    

    //For Numbering The Table
    const count = (props.count/1 + 1) + ".)";

    //For Disabling Save(SUBMIT) Button, To Check Form Before Saving in the Edit Template Mode
    let isAnonymous;
    (newGuest.fname ==="" || 
    newGuest.email ==="" || 
    newGuest.gender ==="" || 
    newGuest.phone ==="" || 
    newGuest.dor === "")? isAnonymous = true : isAnonymous = false;

    //The Editing Template
    const editingTemplate = (
        <>
            <tr id={props.id}>
                <td>{count}</td>
                <td 
                    className="font-weight-bold"
                >
                    <label>Edit "{props.fname}"</label>
                    <input 
                        type="text" 
                        name="fname"
                        value={newGuest.fname}
                        required
                        placeholder={props.fname}
                        onChange={handleChange}
                    />
                </td>
                <td>
                <label>Edit "{props.email}"</label>
                    <input 
                        type="email" 
                        name="email"
                        value={newGuest.email}
                        required
                        placeholder={props.email}
                        onChange={handleChange}
                    />
                </td>
                <td>
                    <label>Edit "{props.gender}"</label>
                    <select 
                        name="gender"
                        required
                        value={newGuest.gender}
                        onChange={handleChange}
                    >
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </td>
                <td>
                    <label>Edit "{props.phone}"</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={newGuest.phone}
                        required
                        placeholder={props.phone}
                        onChange={handleChange}
                    />
                </td>
                <td>
                    <label>Edit "{props.dor}"</label>
                    <input 
                        type="date" 
                        name="dor"
                        value={newGuest.dor}
                        required
                        onChange={handleChange}
                    />
                </td>
            </tr>
            <tr>
                <td colSpan={3} className="text-center">
                    <button 
                        type="button" 
                        className="btn border-dark w-50 font-weight-bold"
                        onClick={() => setEditing(false)}
                    >
                        Cancel
                    </button>
                </td>
                <td colSpan={3} className="text-center">
                    <button 
                        type="submit" 
                        className="btn bg-dark text-white w-50 font-weight-bold"
                        disabled={isAnonymous ? true : false}
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </td>
            </tr>
        </>
    )

    //The Viewing Template
    const viewTemplate = (
        <>
            <tr id={props.id}>
                <td>{count}</td>
                <td className="font-weight-bold">{props.fname}</td>
                <td>{props.email}</td>
                <td>{props.gender}</td>
                <td>{props.phone}</td>
                <td>{props.dor}</td>
            </tr>
            <tr>
                <td colSpan={3} className="text-center">
                    <button 
                        type="button" 
                        className="btn border-secondary text-secondary w-50 font-weight-bold"
                        onClick={() => {
                            setNewGuest({
                                fname: props.fname,
                                email: props.email,
                                gender: props.gender,
                                phone: props.phone,
                                dor: props.dor
                        });
                            setEditing(true);
                        }}
                    >
                        Edit
                    </button>
                </td>
                <td colSpan={3} className="text-center">
                    <button 
                        type="button" 
                        className="btn bg-danger text-white w-50 font-weight-bold"
                        onClick={() => props.deleteGuest(props.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
  return <>{isEditing ? editingTemplate : viewTemplate}</>;
}



