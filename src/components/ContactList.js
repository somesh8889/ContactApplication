import React from "react";
import ContactCard from "./ContactCard";

class ContactList extends React.Component{
    render(){
        const deleteConactHandler = (id) => {
            this.props.getContactId(id);
        };
        const renderContactList=this.props.contacts.map((contact)=>{
            return (
                <ContactCard contact={contact}
                clickHander={deleteConactHandler}
                key={contact.id}/>
            );
        });
        return(
            <div className="ui celled list">
                {renderContactList}
            </div>
        )
    };
};

export default ContactList;