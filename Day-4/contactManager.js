const contactManager = {
  contacts: [],

  addContact: function (name, phoneNumber, email) {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    this.contacts.push(newContact);
    displayContacts();
  },

  deleteContact: function (index) {
    this.contacts.splice(index, 1);
    displayContacts();
  },
};

function addContact() {
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const email = document.getElementById('email').value;

  contactManager.addContact(name, phoneNumber, email);

  // Clear the form after adding a contact
  document.getElementById('contactForm').reset();
}

function displayContacts() {
  const contactListContainer = document.getElementById('contactList');
  contactListContainer.innerHTML = '';

  contactManager.contacts.forEach((contact, index) => {
    const contactElement = document.createElement('div');
    contactElement.classList.add('contact');

    const infoElement = document.createElement('div');
    infoElement.innerHTML = `<strong>${contact.name}</strong> | ${contact.phoneNumber} | ${contact.email}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => contactManager.deleteContact(index);

    contactElement.appendChild(infoElement);
    contactElement.appendChild(deleteButton);

    contactListContainer.appendChild(contactElement);
  });
}

// Initial display
displayContacts();