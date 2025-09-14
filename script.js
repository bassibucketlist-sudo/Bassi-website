// Booking modal
const bookingModal = document.getElementById('booking-modal');
const serviceModal = document.getElementById('service-modal');
const serviceDetails = document.getElementById('service-details');
const closeButtons = document.querySelectorAll('.close');

// Open booking modal
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    bookingModal.style.display = 'flex';
  });
});

// Open service details modal
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.getAttribute('data-service');
    let content = '';

    switch(service) {
      case 'car-wash':
        content = `
          <h2>Car Wash Packages</h2>
          <h3>Basic (1–2 hours)</h3>
          <ul>
            <li>Hand soft-touch wash</li>
            <li>Vacuuming mats</li>
            <li>Wheel cleaning</li>
            <li>Tire shine</li>
            <li>Interior towel drying</li>
            <li>Interior glass cleaning</li>
            <li>Microfiber towel dry</li>
          </ul>
          <p><strong>Pricing:</strong><br>
          Sedan – $150<br>
          SUV – $180<br>
          Truck/Van – $220</p>

          <h3>Premium</h3>
          <ul>
            <li>Everything in Basic, plus:</li>
            <li>Detailed interior cleaning</li>
            <li>Total mud guard & tire care</li>
            <li>Dashboard clean & shine</li>
            <li>Fabric shampooing</li>
            <li>Deodorizer treatment</li>
          </ul>
          <p><strong>Pricing:</strong><br>
          Sedan – $200<br>
          SUV – $250<br>
          Truck/Van – $300</p>

          <h3>Add-ons</h3>
          <ul>
            <li>Pet hair removal – $40</li>
            <li>Paint restoration – $20</li>
            <li>Mat & seat steaming – $50</li>
          </ul>
          <p><em>Prices may vary depending on vehicle type and condition.</em></p>
        `;
        break;

      case 'driveway':
        content = `<h2>Driveway Cleaning</h2><p>Professional cleaning for all driveway materials. Pricing based on size and condition.</p>`;
        break;

      case 'sidewalk':
        content = `<h2>Sidewalk Cleaning</h2><p>Deep cleaning for sidewalks. Pricing depends on area and material.</p>`;
        break;

      case 'fence':
        content = `<h2>Fence Cleaning</h2><p>Wood fence cleaning only. Price based on area.</p>`;
        break;

      case 'boat':
        content = `<h2>Boat Cleaning</h2><p>Complete washing, waxing, and interior care for boats. Pricing depends on size and detailing needs.</p>`;
        break;

      case 'bin':
        content = `<h2>Bin Cleaning</h2><p>Sanitize, deodorize, and deep clean bins to remove odor and bacteria. Flat rate per bin.</p>`;
        break;
    }

    serviceDetails.innerHTML = content;
    serviceModal.style.display = 'flex';
  });
});

// Close modals
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    bookingModal.style.display = 'none';
    serviceModal.style.display = 'none';
  });
});

// Close on outside click
window.addEventListener('click', e => {
  if (e.target === bookingModal || e.target === serviceModal) {
    bookingModal.style.display = 'none';
    serviceModal.style.display = 'none';
  }
});
