export const template = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Ticket Order Confirmation</title>
  <style>
    body {
      font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .container:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #4CAF50 0%, #3e8e41 100%);
      opacity: 0.1;
      z-index: -1;
    }
    h1 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 30px;
      color: #333;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .order-details {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      text-align: left;
      margin-bottom: 30px;
      width: 100%;
      box-sizing: border-box;
    }
    .order-details p {
      margin: 10px 0;
      font-size: 16px;
    }
    .event-info {
      text-align: left;
      margin-bottom: 30px;
      width: 100%;
    }
    .event-info h2 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
      color: #333;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .button {
      display: inline-block;
      background-color: #4CAF50;
      color: #fff;
      padding: 12px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      margin-bottom: 20px;
      transition: background-color 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .button:hover {
      background-color: #3e8e41;
    }
    .logo {
      display: block;
      margin: 0 auto 20px;
      max-width: 150px;
    }
    .barcode {
      display: block;
      margin: 30px auto;
      max-width: 250px;
    }
    .wallet-button {
      display: block;
      margin: 20px auto 0;
      max-width: 200px;
    }
  </style>
</head>
<body>
  <div class="container">
    <img class="logo" src="https://mintlify.s3-us-west-1.amazonaws.com/crossmint/logo/crossmint-light.png" alt="Company Logo">
    <h1>Ticket Order Confirmation</h1>
    <div class="order-details">
      <p><strong>Order Number:</strong> 12345</p>
      <p><strong>Event:</strong> Medellin Hackathon</p>
      <p><strong>Date:</strong> April 17, 2024</p>
      <p><strong>Tickets:</strong> General Admission</p>
      <a href="{LINK_PLACEHOLDER}" class="wallet-button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Add_to_Google_Wallet_badge.svg/1024px-Add_to_Google_Wallet_badge.svg.png" alt="Add to Google Wallet" style="max-width:100%;">
      </a>
    </div>
    <div class="event-info">
      <h2>Event Details</h2>
      <p><strong>Date:</strong> April 17, 2024</p>
      <p><strong>Time:</strong> 8:00 PM - 10:00 PM</p>
      <p><strong>Location:</strong> Universidad Pontificia Bolivariana</p>
      <p>Please have your tickets ready for entry on the day of the event.</p>
    </div>
    <p>Thank you for your order! <br><br> We're excited to have you join us for this amazing Hackathon experience.</p>
    <!-- <a class="button" href="#">Manage Your Order</a> -->
  </div>
</body>
</html>`;
