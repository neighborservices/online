// Get reference to the form and input elements
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting the default way

  // Collect form data
  const hotelName = document.getElementById('hotelName').value;
  const state = document.getElementById('state').value;
  const streetAddress = document.getElementById('streetAddress').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zipCode').value;
  const staffName = document.getElementById('staffName').value;
  const role = document.getElementById('role').value;
  const telephone = document.getElementById('telephone').value;
  const companyEmail = document.getElementById('companyEmail').value;

  // Create a new user in Firebase Authentication
  auth.createUserWithEmailAndPassword(companyEmail, 'defaultPassword123')
    .then((userCredential) => {
      const user = userCredential.user;

      // Store hotel and staff details in Firestore
      db.collection('hotels').doc(user.uid).set({
        hotelName: hotelName,
        state: state,
        streetAddress: streetAddress,
        city: city,
        zipCode: zipCode
      })
      .then(() => {
        console.log('Hotel information saved successfully');

        // Save staff information
        return db.collection('staff').add({
          name: staffName,
          role: role,
          telephone: telephone,
          companyEmail: companyEmail,
          hotelId: user.uid
        });
      })
      .then(() => {
        console.log('Staff information saved successfully');
        alert('Registration successful!');
        // Redirect to sign-in page
        window.location.href = 'sign-in.html';
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        alert('Error saving data: ' + error.message);
      });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      alert('Error creating user: ' + error.message);
    });
});
