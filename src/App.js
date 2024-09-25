import { useState } from "react";
import { Contact, ContactForms } from "./component/contact";
import "./styles/index.css";
import { NavBar } from "./component/NavBar";
const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  // to convert the data back to the original object form
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);
  //to make ssure the data stored in contacts is an array
  const addContactData = (addedContact) => {
    const allContacts = [addedContact, ...contacts];
    //spread functioning of JS to allow us store multiple inputted data
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
    //if we don't use the JSON command the local storage will store the data, which is in the form of object, in the string which will not work for the map functiom
  };
  const clearData = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <div className="NavBar">
        <NavBar></NavBar>
      </div>
      <div className="contact_adder">
        <ContactForms addContact={addContactData}></ContactForms>
      </div>
      <div className="contact_list">
        <h1>Contact Lists </h1>
        {/* map function can only iterate over an array so we should be careful about thw contacts variable */}
        {contacts.map((data) => (
          <Contact key={data.id} data={data}>
            {/* we have included the key to stop the duplication of the data. This will give a warning in the console if the number is same */}
          </Contact>
        ))}
        <button onClick={clearData}>Clear All Data</button>
      </div>
    </>
  );
};

export default App;
