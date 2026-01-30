# Products Dashboard

A web-based products dashboard that fetches and displays product information from an external API. The application features a grid layout that showcases product images, titles, descriptions, and prices. it has features like search and category filtering.

## Features

- **Dynamic Product Fetching**: Retrieves product data from the [EscuelaJS API](https://api.escuelajs.co/api/v1/products)
- **Search**: Real-time search by product title—results update as you type in the search box
- **Category Filter**: A dropdown populated with unique categories from the API; filter products by category or show all
- **Loading States**: Shows a loading indicator while fetching data
- **Error Handling**: Displays error messages when API requests fail
- **Product Information Display**: Each product card shows:
  - Product image
  - Product title
  - Product description
  - Product price (displayed in EGP)

## Technologies Used

- HTML5
- CSS3 (Flexbox for layout)
- Vanilla JavaScript (Fetch API for data retrieval)

## Project Structure

```
products dashboard/
├── index.html          # Main HTML structure
├── css/
│   └── style.css      # Styling for the dashboard
├── js/
│   └── script.js      # JavaScript logic for fetching and displaying products
└── README.md          # Project documentation
```