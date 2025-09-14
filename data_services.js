<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Car Wash - Bassi’s Bucket</title>
  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #111;
      color: #eee;
      line-height: 1.6;
      text-align: center;
    }
    header {
      background: linear-gradient(90deg, #111, #900);
      padding: 20px;
    }
    header h1 {
      color: #fff;
    }
    .hero {
      background: url('services3.jpg') no-repeat center/cover;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hero h2 {
      background: rgba(0,0,0,0.6);
      padding: 20px;
      border-radius: 10px;
      color: #fff;
      font-size: 2.5rem;
    }
    .content {
      padding: 40px;
    }
    .content h3 {
      color: #f33;
      margin-bottom: 15px;
    }
    .content p {
      max-width: 800px;
      margin: auto;
    }
  </style>
</head>
<body>
  <header>
    <h1>Bassi’s Bucket</h1>
  </header>

  <div class="hero">
    <h2>Car Wash Packages</h2>
  </div>

  <div class="content">
    <h3>Basic</h3>
    <p>Sedan $150 | SUV $180 | Truck/Van $220</p>

    <h3>Premium</h3>
    <p>Sedan $200 | SUV $250 | Truck/Van $300</p>

    <h3>Add-ons</h3>
    <p>Pet Hair Removal $40 | Paint Restoration $20 | Seat Steaming $50</p>

    <p><em>Prices may vary depending on vehicle condition.</em></p>
  </div>
</body>
</html>export const SERVICES = [
  {
    id: 'basic',
    title: 'Basic Car Wash',
    features: [
      'Interior & exterior',
      'Soft-touch wash',
      'Vacuum mats',
      'Wheel cleaning',
      'Ceramic shield & shine',
      'Tire shine',
      'Interior towel drying',
      'Clean all interior glass'
    ],
    image: '/service1.jpg',
    priceNote: 'Prices vary by car type'
  },
  {
    id: 'premium',
    title: 'Premium Car Wash',
    features: [
      'Interior & exterior',
      'Soft-touch wash / foam',
      'Microfiber towel & air dry',
      'Clean windows inside & out',
      'Wheel cleaning',
      'Tire shine',
      'Car shield & shine',
      'Vacuum mats & seats',
      'Fabric shampooing',
      'Clean door jambs',
      'Cleaning cup holders',
      'Dashboard clean & shine'
    ],
    image: '/service2.jpg',
    priceNote: 'Prices vary by car type'
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    features: [
      'Full interior deep clean',
      'Detailed shampooing & extraction',
      'Stain removal',
      'Pet hair removal available'
    ],
    image: '/service3.jpg',
    price: '$75/hr'
  },
  {
    id: 'driveway',
    title: 'Driveway Cleaning',
    features: [
      'Power wash surface',
      'Pricing depends on material & area'
    ],
    image: '/service4.jpg'
  },
  {
    id: 'sidewalk',
    title: 'Sidewalk Cleaning',
    features: [
      'Power wash concrete & walkways',
      'Pricing depends on material & area'
    ],
    image: '/service5.jpg'
  },
  {
    id: 'fence',
    title: 'Fence Cleaning (Wood Only)',
    features: [
      'Wood fence cleaning',
      'Pricing depends on area'
    ],
    image: '/service6.jpg'
  }
]
