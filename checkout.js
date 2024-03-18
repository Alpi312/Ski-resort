document.addEventListener('DOMContentLoaded', function() {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    const selectedRoom = JSON.parse(localStorage.getItem('selectedRoom'));
    const bookingDetailsSection = document.getElementById('booking-details');
  
    if (bookingDetails && selectedRoom) {
      const bookingDetailsHTML = `
        <h2>Booking Details:</h2>
        <p><strong>Name:</strong> ${bookingDetails.name}</p>
        <p><strong>Email:</strong> ${bookingDetails.email}</p>
        <p><strong>Check-in:</strong> ${bookingDetails.checkIn}</p>
        <p><strong>Check-out:</strong> ${bookingDetails.checkOut}</p>
        <h2>Room Details:</h2>
        <p><strong>Room:</strong> ${selectedRoom.name}</p>
        <p><strong>Price:</strong> $${selectedRoom.price}/night</p>
      `;
      bookingDetailsSection.innerHTML = bookingDetailsHTML;
    } else {
      bookingDetailsSection.innerHTML = '<p>No booking details found.</p>';
    }
  });
  