import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";

function ContactList(props) {
  const {contact,removeContact} = props;
  console.log(contact);

  const contactList = contact.map((val,myId) => {
    return (
      <div key={myId} className="contacts">
        <div className="name">{val.data.name}</div>
        <div className="email">{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="contactsHeader">ContactList</div>
      <div className="listRender">{contactList}</div>
    </React.Fragment>
  );
}

export default ContactList;