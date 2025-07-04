import { useState } from "react";
import { useImmer } from "use-immer";

const ContactForm = () => {
  // Create a state variable to hold contact information
  // Initialize with an object containing name and message properties
  const [contact, setContact] = useImmer({
    name: "",
    message: ""
  })

  // Function to handle name change
  function handleNameChange(e){
    setContact(draft => {
      draft.name = e.target.value; // Using useImmer to update the name property
    })
  }

  // Function to handle message change
  function handleMessageChange(e){
    setContact(draft => {
      draft.message = e.target.value; // Using useImmer to update the message property
    });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input type="text" placeholder="name" value={contact.name} onChange={handleNameChange} />
        <br />
        <input type="text" placeholder="message" value={contact.message} onChange={handleMessageChange} />
      </form>
      <h1>Contact Detail</h1>
      <p>Name : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </div>
  )
}

export default ContactForm;