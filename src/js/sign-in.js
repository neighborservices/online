// Import Firebase functions from firebase.js
import { auth } from './firebase.js';

// Get reference to the form and input elements
const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting the default way

  // Collect form data
  const organizationId = document.getElementById('organizationId').value;
  const locationCode = document.getElementById('locationCode').value;
  const password = document.getElementById('password').value;

  // Sign in using Firebase Auth
  auth.signInWithEmailAndPassword(organizationId, password)
    .then((userCredential) => {
      // Sign-in successful
      console.log('Sign-in successful');
      // Redirect to the dashboard page
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      // Handle errors
      console.error('Sign-in failed:', error.message);
      alert('Sign-in failed: ' + error.message);
    });
});
