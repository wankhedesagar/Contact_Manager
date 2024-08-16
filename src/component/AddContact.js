import React from 'react'

function AddContact() {
  return (
    <React.Fragment>
      <h1 className="add-contact">Add Contact</h1>
    <div className="formHeader">
      <form action="">
        <label htmlFor="">Name:</label>
        <br />
        <input type="text" placeholder="Enter Name" name="name"  />
        <br />
        <label htmlFor="">Email:</label>
        <br />
        <input type="email" placeholder="Enter Email" name="email" />
      </form>
      <button  className="btn">Add Contact</button>

    </div>
    </React.Fragment>
  );
}

export default AddContact