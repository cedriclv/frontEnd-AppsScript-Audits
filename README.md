 🖥️ Audit API Frontend

This is a simple **frontend interface** built with HTML, CSS, and JavaScript that interacts with the [Google Apps Script Audit API](https://script.google.com/). It works as a Single Page Application made in Vanilla JS.

It allows users to:
- View audit records
- Submit new audits
- Update existing records
- Delete records

## 🔗 Backend API

This frontend consumes the [Google Apps Script Audit API](../backend), which handles all data storage and logic via a connected Google Spreadsheet.

## 📁 Project Structure

frontend/ ├── index.html # Main HTML page ├── style.css # Optional styles ├── script.js # JavaScript to interact with the API

## ⚙️ Configuration

In `script.js`, update the following constant:

```js
const API_URL = "https://script.google.com/macros/s/your-web-app-id/exec";
const API_KEY = "your-api-key";
✨ Features
📋 Fetch and display all audit entries

➕ Submit new audit records

✏️ Edit existing audits by ID

❌ Delete audits with confirmation

🔍 Optional filtering by client, status, or date

🔧 Usage
Open index.html in a browser (can be hosted or local).

Fill in the form to submit a new audit.

Use the displayed list to:

View current audits

Update or delete entries

📦 Example Request

fetch(`${API_URL}?key=${API_KEY}&client=thomas`)
  .then(res => res.json())
  .then(data => console.log(data.data));

🚀 Hosting
You can host this frontend on:

GitHub Pages

Netlify / Vercel

Google Sites (with embedded iframe)

Any static web server

📄 License
This frontend is open-source and can be reused or adapted for any purpose.