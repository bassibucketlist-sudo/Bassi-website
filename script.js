body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #fff;
  color: #111;
}

header {
  text-align: center;
  padding: 20px;
  background: black;
  color: red;
}

header .logo {
  max-width: 120px;
}

header h1 {
  margin: 10px 0;
}

.contact {
  font-size: 16px;
  margin-top: 5px;
}

.services {
  padding: 20px;
  text-align: center;
}

.services h2 {
  color: red;
  margin-bottom: 20px;
}

.service {
  display: inline-block;
  width: 250px;
  margin: 15px;
  border: 2px solid red;
  border-radius: 8px;
  overflow: hidden;
  background: #f8f8f8;
}

.service img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.service h3 {
  margin: 10px 0;
}

button {
  background: red;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: black;
  color: red;
}

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
}

.modal-content {
  background: #fff;
  margin: auto;
  padding: 20px;
  border: 2px solid red;
  width: 70%;
  border-radius: 10px;
}

.close {
  color: red;
  float: right;
  font-size: 24px;
  cursor: pointer;
}
