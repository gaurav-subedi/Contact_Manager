# Contact Manager

## Overview
The **Contact Manager** is a React-based web application that allows users to add, store, and manage contact details. It uses **React components** for UI rendering and **local storage** for data persistence.

## Features
- Add new contacts with Name, Phone Number, and Location.
- Store contact data in **local storage** to retain information across sessions.
- Display a list of stored contacts dynamically.
- Delete all stored contacts with a single click.
- Modular React components for better scalability.

## Technologies Used
- **React.js** (Frontend UI)
- **LocalStorage API** (Data Persistence)
- **CSS** (Styling & Layout)

## Installation & Setup
### Step 1: Clone the Repository
```sh
git clone https://github.com/gaurav-subedi/contact-manager.git
cd contact-manager
```

### Step 2: Install Dependencies
Make sure you have **Node.js** installed, then run:
```sh
npm install
```

### Step 3: Start the Development Server
```sh
npm start
```
This will start the app on `http://localhost:3000`.

## Usage
1. **Enter contact details** (Name, Phone Number, Address).
2. **Click the "Add Contact" button** to save the contact.
3. Contacts are displayed under the "Contact List" section.
4. Contacts are stored in **local storage** to persist between sessions.
5. Click "Clear All Data" to remove all stored contacts.
