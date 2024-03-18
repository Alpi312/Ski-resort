// Dummy data for room listings
const roomsData = [
    { id: 1, name: "Single Room", price: 100 },
    { id: 2, name: "Double Room", price: 150 },
    { id: 3, name: "Suite", price: 250 }
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const roomListings = document.getElementById('room-listings');
    const bookingForm = document.getElementById('booking-form');
  
    // Generate room listings
    roomsData.forEach(room => {
      const roomElement = document.createElement('div');
      roomElement.classList.add('room');
      roomElement.innerHTML = `
        <h2>${room.name}</h2>
        <p>$${room.price}/night</p>
        <button class="book-now-btn" data-room-id="${room.id}">Book Now</button>
      `;
      roomListings.appendChild(roomElement);
    });
  
    // Booking form submission
    bookingForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const checkIn = document.getElementById('check-in').value;
      const checkOut = document.getElementById('check-out').value;
      const bookingDetails = {
        name,
        email,
        checkIn,
        checkOut
      };
      localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
      window.location.href = 'checkout.html'; // Redirect to checkout page
    });
  
    // Handle booking button clicks
    roomListings.addEventListener('click', function(event) {
      if (event.target.classList.contains('book-now-btn')) {
        const roomId = event.target.getAttribute('data-room-id');
        const room = roomsData.find(room => room.id == roomId);
        localStorage.setItem('selectedRoom', JSON.stringify(room));
        window.location.href = 'checkout.html'; // Redirect to checkout page
      }
    });
  });
  