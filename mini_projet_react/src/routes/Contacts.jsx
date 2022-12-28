import React from "react";
import ContactIcon from "../components/ContactIcon";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import FormDialog from "../components/FormDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { display } from "@mui/system";
function Contacts() {
  const { new_contacts, setNew_contacts, contacts, setContacts } =
    useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const [searchBy, setSearchBy] = useState({
    name: true,
    email: false,
    phone_number: false,
  });
  function addContact(e) {
    e.preventDefault();
    setContacts((old) => [...old, contactInfo]);
    setContactInfo({
      name: "",
      email: "",
      phone_number: "",
    });
  }
  function checkSearch(person) {
    // you can add checkbox inputs {search by name or email ...}
    //NOTE: like this => if namecheck && String(person.name).toLowerCase().includes(String(searchInput).toLowerCase()) => return person
    if (
      String(person.name.trim())
        .toLowerCase()
        .includes(String(searchInput.trim()).toLowerCase()) ||
      String(person.phone_number.trim())
        .toLowerCase()
        .includes(String(searchInput.trim()).toLowerCase()) ||
      String(person.email.trim())
        .toLowerCase()
        .includes(String(searchInput.trim()).toLowerCase())
    ) {
      return true;
    }
  }
  useEffect(() => {
    let newArr = contacts?.filter((person) => {
      if (checkSearch(person)) {
        return { ...person };
      }
    });
    setNew_contacts(newArr);
  }, [searchInput, contacts]);
  return (
    <>
      <div className="contact-btn">
        <button className="btn-dialog" onClick={handleClick}>
          Display contacts
        </button>
        <FormDialog
          onSubmit={addContact}
          value1={contactInfo.name}
          value2={contactInfo.email}
          value3={contactInfo.phone_number}
          onchange1={(e) => {
            setContactInfo((old) => ({ ...old, name: e.target.value }));
          }}
          onchange2={(e) => {
            setContactInfo((old) => ({ ...old, email: e.target.value }));
          }}
          onchange3={(e) => {
            setContactInfo((old) => ({
              ...old,
              phone_number: e.target.value,
            }));
          }}
        />
      </div>
      {isShown && (
        <div>
          <center>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </div>
          </center>
          <div className="form-container"></div>
          <section className="cards">
            {new_contacts?.map((person) => (
              <ContactIcon
                name={person.name}
                email={person.email}
                phone_number={person.phone_number}
                key={Math.random()}
                searchInput={searchInput}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
export default Contacts;
// NOTE: getch() <=> fetch()
