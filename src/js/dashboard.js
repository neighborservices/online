// Import necessary Firebase functions from firebase.js
import { db } from "./firebase.js";

// Elements for various sections
const overviewContent = document.getElementById("overview-content");
const assignmentsContent = document.getElementById("assignments-content");
const roomsContent = document.getElementById("rooms-content");
const reportsContent = document.getElementById("reports-content");

// Function to load overview details
function loadOverview() {
    db.collection("assignments")
        .get()
        .then((snapshot) => {
            let output = "<ul>";
            snapshot.docs.forEach((doc) => {
                const data = doc.data();
                output += `<li>Room: ${data.room}, Staff: ${data.staff}, Date: ${data.date}</li>`;
            });
            output += "</ul>";
            overviewContent.innerHTML = output;
        })
        .catch((err) => {
            console.error("Error loading overview:", err);
        });
}

// Function to handle staff assignments
function loadAssignments() {
    db.collection("staff")
        .get()
        .then((snapshot) => {
            let output = "<h3>Unassigned Staff:</h3><ul>";
            snapshot.docs.forEach((doc) => {
                const data = doc.data();
                if (!data.assignedRoom) {
                    output += `<li>${data.name}</li>`;
                }
            });
            output += "</ul>";
            assignmentsContent.innerHTML = output;
        })
        .catch((err) => {
            console.error("Error loading assignments:", err);
        });
}

// Function to load rooms and generate QR codes
function loadRooms() {
    db.collection("rooms")
        .get()
        .then((snapshot) => {
            let output = "<h3>Rooms:</h3><ul>";
            snapshot.docs.forEach((doc) => {
                const data = doc.data();
                output += `<li>${data.roomNumber}</li>`;
                // TODO: Generate QR code logic here
            });
            output += "</ul>";
            roomsContent.innerHTML = output;
        })
        .catch((err) => {
            console.error("Error loading rooms:", err);
        });
}

// Function to load reports
function loadReports() {
    db.collection("reports")
        .get()
        .then((snapshot) => {
            let output = "<h3>Reports:</h3><ul>";
            snapshot.docs.forEach((doc) => {
                const data = doc.data();
                output += `<li>Report: ${data.description}, Date: ${data.date}</li>`;
            });
            output += "</ul>";
            reportsContent.innerHTML = output;
        })
        .catch((err) => {
            console.error("Error loading reports:", err);
        });
}

// Load all sections when the dashboard is loaded
document.addEventListener("DOMContentLoaded", () => {
    loadOverview();
    loadAssignments();
    loadRooms();
    loadReports();
});
