import React, { useState } from "react";
import Guest from "./components/Guest";
import GuestFilter from "./components/GuestFilter";
import GuestForm from "./components/GuestForm";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Male: (guest) => guest.gender === "Male",
  Female: (guest) => guest.gender !== "Male"
};    

const FILTER_GUESTS = Object.keys(FILTER_MAP);


  function App(props) {
    const [guests, setGuests] = useState(props.guests);
    const [filter, setFilter] = useState('All');
    const [isModing, setModing] = useState(false);

    //To Add Guest
    function addGuest(g) {
      const newGuest = { 
        id: `guest-${nanoid()}`, 
        fname: g.fname, 
        email: g.email, 
        gender: g.gender, 
        phone: g.phone, 
        dor: g.dor 
      };
      setGuests([...guests, newGuest]);
    }

    //To Delete Guest
    function deleteGuest(id) {
      console.log(id)
      const remainingGuests = guests.filter((guest) => id !== guest.id);
      setGuests(remainingGuests);
    }    

    //To Edit Guest
    function editGuest(id, g) {
      const newGuest = {
        fname: g.fname,
        email: g.email, 
        gender: g.gender, 
        phone: g.phone, 
        dor: g.dor 
      };
      const editedGuestList = guests.map((guest) => {
        if (id === guest.id) {
          return newGuest
        }
        return guest;
      });
      setGuests(editedGuestList);
    }


    //To Update GuestList
    const guestList = guests
    .filter(FILTER_MAP[filter])
    .map((guest, index) => (
        <Guest 
          id={guest.id} 
          fname={guest.fname} 
          email={guest.email} 
          gender={guest.gender} 
          phone={guest.phone} 
          dor={guest.dor}
          key={guest.id}
          deleteGuest={deleteGuest}
          editGuest={editGuest}
          count={index}
        />
      )
    );

    //To Update FilterList
    const filterList = FILTER_GUESTS.map((gender) => (
      <GuestFilter 
        key={gender} 
        name={gender}
        isPressed={gender === filter}
        setFilter={setFilter}
      />
    ));    

    const guestNoun = guestList.length !== 1 ? 'Guests' : 'Guest';
    const headingText = `${guestList.length} ${guestNoun} remaining`;

    //Light Mode Template
    const Light = (
      <div className="container border shadow">
        <h1 className="text-center">Mesh GuestBook React App.</h1><br /><br />
        <div className="form-group text-right">
          <button 
            type="button" 
            className="btn border bg-light text-dark"
            onClick={() => setModing(false)}
          >
            Light Mode
          </button>
          <button 
            type="button" 
            className="btn border bg-dark text-light"
            onClick={() => setModing(true)}
          >
            Dark Mode
          </button>
        </div>
        <p className="border border-info rounded-lg text-center">
          Fill-in all fields to Enable the Add/Save Button.
        </p>
        <GuestForm addGuest={addGuest} />
        <hr /><hr /><br />
        <div className="container form-group row">
          {filterList}
        </div>
        <h2>
          {headingText}
        </h2>
        <table class="table table-striped table-bordered table-responsive">
          <thead className="bg-dark text-light">
            <tr>
              <th>S/N</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Date of Register</th>
            </tr>
          </thead>
          <tbody role="table">
            {guestList}
          </tbody>
        </table>
      </div>
    );

    //Dark Mode Template
    const Dark = (
      <div className="container bg-dark text-light shadow">
        <h1 className="text-center">Mesh GuestBook React App.</h1><br /><br />
        <div className="form-group text-right">
          <button 
            type="button" 
            className="btn border bg-light"
            onClick={() => setModing(false)}
          >
            Light Mode
          </button>
          <button 
            type="button" 
            className="btn border bg-dark text-light"
            onClick={() => setModing(true)}
          >
            Dark Mode
          </button>
        </div>
        <p className="border border-info rounded-lg text-center">
          Fill-in all fields to Enable the Add/Save Button.
        </p>
        <GuestForm addGuest={addGuest} />
        <hr /><hr /><br />
        <div className="container form-group row">
          {filterList}
        </div>
        <h2>
          {headingText}
        </h2>
        <table class="table table-striped table-bordered table-responsive text-light">
          <thead className="bg-light text-dark">
            <tr>
              <th>S/N</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Date of Register</th>
            </tr>
          </thead>
          <tbody role="table">
            {guestList}
          </tbody>
        </table>
      </div>
    );
    
    return <>{isModing ? Dark : Light}</>;

  }


export default App;