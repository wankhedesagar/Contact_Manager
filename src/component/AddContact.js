import React, { useState } from 'react'

function AddContact({addContact}) {

  const [contactData,setContactData] = useState({name:"",email:""});

  const handleChange = (e) => {
    if(e.target.name === 'name'){
      setContactData({...contactData, name:e.target.value})
    }
    else{
      setContactData({...contactData,email: e.target.value})
    }
  }

  const handleAdd = () => {
    if(contactData.name === "" || contactData.email === ""){
        alert('please fill all the details')
        return;
    }
    //this console will show thie data that you entered 
    // console.log(contactData);
    addContact(contactData)
    setContactData({name:"",email:""})
}


  return (
    <React.Fragment>
      <h1 className="add-contact">Add Contact</h1>
    <div className="formHeader">
      <form action="">
        <label htmlFor="">Name:</label>
        <br />
        <input type="text" placeholder="Enter Name" name="name" value={contactData.name} onChange={handleChange} />
        <br />
        <label htmlFor="">Email:</label>
        <br />
        <input type="email" placeholder="Enter Email" name="email"value={contactData.email} onChange={handleChange}  />
      </form>
      <button onClick={handleAdd}  className="btn">Add Contact</button>

    </div>
    </React.Fragment>
  );
}

export default AddContact