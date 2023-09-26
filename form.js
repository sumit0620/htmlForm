// Get references to form elements and the output div
const form = document.getElementById("myForm");
const outputDiv = document.getElementById("outputDiv");
const dataTable = document.getElementById("dataTable");
const submitButton = document.getElementById("submitButton");

// Function to handle form submission
submitButton.addEventListener("click", function () {
  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;

  let isAllCorrect = true;
  if (name === "") {
    console.log("less");
    isAllCorrect = false;
    alert("Name should not be blank");
  }

  if (password.length < 8 || password === "") {
    isAllCorrect = false;
    console.log("less");
    alert(
      "Password should not be empty and should be greater than 8 characters"
    );
  }

  if (isAllCorrect) {
    // Create a new row in the table
    const newRow = dataTable.insertRow();
    // Create cells for each column
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const passwordCell = newRow.insertCell(2);
    const genderCell = newRow.insertCell(3);
    const actionCell = newRow.insertCell(4);

    // Add Action button for editing
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      // Populate the form fields with data from the selected row
      document.getElementById("name").value = nameCell.textContent;
      document.getElementById("email").value = emailCell.textContent;
      document.getElementById("password").value = passwordCell.textContent;
      document.getElementById("gender").value = genderCell.textContent;
      // Add a "Save" button to save the edited values
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", function () {
        // Update the row with edited values
        nameCell.textContent = document.getElementById("name").value;
        emailCell.textContent = document.getElementById("email").value;
        passwordCell.textContent = document.getElementById("password").value;
        genderCell.textContent = document.getElementById("gender").value;
        // Remove the "Save" button
        actionCell.removeChild(saveButton);
      });
      actionCell.appendChild(saveButton);
    });
    actionCell.appendChild(editButton);

    // Add Action button for deleting
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      // Delete the row
      dataTable.deleteRow(newRow.rowIndex);
    });
    actionCell.appendChild(deleteButton);

    // Set the cell values to the form input values
    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    genderCell.textContent = gender;

    // Clear the form fields after submission
    form.reset();
  }
});

/*
  Different code of line 
*/

// // // Get references to form elements and the output div
// // const form = document.getElementById("myForm");
// // const outputDiv = document.getElementById("outputDiv");
// // const outputNormal = document.getElementById("outputNormal");
// // const dataTable = document.getElementById("dataTable");
// // const submitButton = document.getElementById("submitButton");

// // // Function to handle form submission
// // submitButton.addEventListener("click", function () {
// //   // Get form input values
// //   const name = document.getElementById("name").value;
// //   const email = document.getElementById("email").value;
// //   const password = document.getElementById("password").value;
// //   const gender = document.getElementById("gender").value;

// //   let isAllCorrect = true;
// //   if (name === "") {
// //     console.log("less");
// //     isAllCorrect = false;
// //     alert("name should not  be blank");
// //   }

// //   if (password.length < 8 || password === "") {
// //     lsCorrect = false;
// //     console.log("less");
// //     alert(
// //       " password should not be empty  and password should be greater then 8"
// //     );
// //     isAllCorrect = false;
// //   }

// //   if (isAllCorrect) {
// //     //     outputNormal.innerHTML = `
// //     // <h3>Input Data:</h3>
// //     // <p><strong>Name:</strong> ${name}</p>
// //     // <p><strong>Email:</strong> ${email}</p>
// //     // <p><strong>Password:</strong> ${password}</p>
// //     // <p><strong>Gender:</strong> ${gender}</p>`;

// //     // Create a new row in the table
// //     const newRow = dataTable.insertRow();
// //     // Create cells for each column
// //     const nameCell = newRow.insertCell(0);
// //     const emailCell = newRow.insertCell(1);
// //     const passwordCell = newRow.insertCell(2);
// //     const genderCell = newRow.insertCell(3);
// //     const actionCell = newRow.insertCell(4);
// //     const editButton = document.createElement("button");
// //     editButton.textContent = "Edit";
// //     editButton.addEventListener("click", function () {
// //       // Add code for handling the edit action here
// //       // You can access the row's data using newRow and update the form fields for editing
// //       document.getElementById("name").value = nameCell.textContent;
// //       document.getElementById("email").value = emailCell.textContent;
// //       document.getElementById("password").value = passwordCell.textContent;
// //       document.getElementById("gender").value = genderCell.textContent;
// //     });
// //     actionCell.appendChild(editButton);

// //     // Add Action button
// //     const actionButton = document.createElement("button");
// //     actionButton.textContent = "Action";
// //     actionButton.addEventListener("click", function () {
// //       // Add code for handling the action here
// //       // You can access the row's data using newRow
// //       dataTable.deleteRow(newRow.rowIndex);
// //     });
// //     actionCell.appendChild(actionButton);

// //     // Set the cell values to the form input values
// //     nameCell.textContent = name;
// //     emailCell.textContent = email;
// //     passwordCell.textContent = password;
// //     genderCell.textContent = gender;

// //     // Clear the form fields after submission
// //     form.reset();
// //   }
// // });

// // Get references to form elements and the output div
// const form = document.getElementById("myForm");
// const dataTable = document.getElementById("dataTable");
// const submitButton = document.getElementById("submitButton");

// // Create an array to store the submitted data
// const dataArray = [];

// // Function to handle form submission
// submitButton.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent the form from submitting and refreshing the page

//   // Get form input values
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const gender = document.getElementById("gender").value;

//   let isAllCorrect = true;
//   if (name === "") {
//     isAllCorrect = false;
//     alert("Name should not be blank");
//   }

//   if (password.length < 8 || password === "") {
//     isAllCorrect = false;
//     alert("Password should not be empty and should be greater than 8 characters");
//   }

//   if (isAllCorrect) {
//     // Store the submitted data in an object
//     const newData = {
//       name: name,
//       email: email,
//       password: password,
//       gender: gender,
//     };

//     // Push the object into the dataArray
//     dataArray.push(newData);

//     // Create a new row in the table
//     const newRow = dataTable.insertRow();
//     // Create cells for each column
//     const nameCell = newRow.insertCell(0);
//     const emailCell = newRow.insertCell(1);
//     const passwordCell = newRow.insertCell(2);
//     const genderCell = newRow.insertCell(3);

//     // Set the cell values to the form input values
//     nameCell.textContent = newData.name;
//     emailCell.textContent = newData.email;
//     passwordCell.textContent = newData.password;
//     genderCell.textContent = newData.gender;

//     // Clear the form fields after submission
//     form.reset();
//   }
// });
