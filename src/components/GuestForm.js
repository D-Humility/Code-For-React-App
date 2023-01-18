import React, { useState } from "react";


export default function GuestForm(props) {
    const [guest, setGuest] = useState({
        fname: "",
        email: "",
        gender: "",
        phone: "",
        dor: ""
    });

    //To Handle Change in HTML Form
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setGuest(previousState => ({
            ...previousState, [name]: value
        }))
    }

    //To Handle Submission of HTML Form
    function handleSubmit(e) {
        e.preventDefault();
        props.addGuest(guest);
        setGuest({
            fname: "",
            email: "",
            gender: "",
            phone: "",
            dor: ""
        })
    }

    //For Disabling Add(SUBMIT) Button, To Check Form Before Submitting
    let isAnonymous;
    (guest.fname ==="" || 
    guest.email ==="" || 
    guest.gender ==="" || 
    guest.phone ==="" || 
    guest.dor === "")? isAnonymous = true : isAnonymous = false;

      
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="FName">Full Name:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Full Name" 
                    required
                    id="FName"
                    autoComplete="off"
                    name="fname"
                    value={guest.fname}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input 
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Enter Email Address"
                    required
                    autoComplete="off"
                    name="email"
                    value={guest.email}
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="Gender">Gender:</label>
                    <select 
                        className="form-control" 
                        id="Gender"
                        required
                        autoComplete="off"
                        name="gender"
                        value={guest.gender}
                        onChange={handleChange}
                    >
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="form-group col ml-1">
                    <label htmlFor="PNumber">Phone No.:</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="PNumber" 
                        placeholder="+234..."
                        required
                        autoComplete="off"
                        name="phone"
                        value={guest.phone}    
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col ml-1">
                    <label htmlFor="Date">Date of Register:</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="Date" 
                        required
                        autoComplete="off"
                        name="dor"
                        value={guest.dor}    
                        onChange={handleChange}
                        />
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <button 
                    type="submit" 
                    class="btn btn-primary btn-lg"
                    disabled={isAnonymous ? true : false}
                >
                    Add
                </button>

                <div class="text-right">
                    <button 
                        type="button" 
                        class="btn btn-dark btn-lg"
                        onClick={() => 
                            setGuest({
                                fname: "",
                                email: "",
                                gender: "",
                                phone: "",
                                dor: ""
                            })
                        }
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </form>
    )
}
