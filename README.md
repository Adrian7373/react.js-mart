# React JS-Mart ⚛️🛒

React JS-Mart is a modern e-commerce application built using **Next.js 16** and **React 19**. It demonstrates a component-based approach to building a shopping cart, featuring dynamic data fetching, state management, and modular styling.

## 🚀 Features

* **Dynamic Product Feed:** Fetches live product data asynchronously from [FakeStoreAPI](https://fakestoreapi.com/) using `useEffect`.
* **Interactive Shopping Cart:**
    * **Add to Cart:** Users can add products directly from the main feed.
    * **Quantity Management:** Increase or decrease item counts; items are automatically removed when quantity hits zero.
    * **Live Totals:** The total price updates instantly as you interact with the cart.
* **Modern Architecture:** Built with **Next.js App Router**, utilizing server/client component patterns (marked with `"use client").
* **Modular Styling:** Uses **CSS Modules** (`*.module.css`) to scope styles locally to components, preventing style conflicts.
* **Cart Persistence:** Data persists across browser sessions using localStorage integration.
* **Enhanced UI/UX:** Improved Cart component design with better visual presentation.
* **Loading States:** Professional loading spinner displayed while fetching product data.

## 🛠️ Technologies Used

* **Framework:** [Next.js 16](https://nextjs.org/)
* **Library:** [React 19](https://react.dev/)
* **Styling:** CSS Modules
* **Linting:** ESLint
* **Storage:** LocalStorage for cart persistence

## 📂 Project Structure

```text
/src
├── app
│   ├── layout.js       # Root layout
│   ├── page.jsx        # Main Logic (State management & Data Fetching)
│   ├── page.module.css # Styles for the main layout
│   └── globals.css     # Global styles
├── Cart
│   ├── Cart.jsx        # Cart Component (renders the list and totals)
│   └── Cart.module.css # Cart-specific styles
└── ProductCard
    ├── ProductCard.jsx # Reusable Card Component for individual items
    └── ProductCard.module.css # Card-specific styles

```

## 🔧 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install

```

Then, run the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000]() with your browser to see the result.

## 📝 Notes

* **State Management:** This project uses React's `useState` for managing the cart in-memory with localStorage persistence, ensuring cart data persists on page refresh.
* **Images:** Unlike previous versions, this app uses the **actual images** provided by the API rather than placeholders.

## 🔮 Future Improvements

* **Context API / Redux:** Implement global state management to access the cart from any page.
* **Checkout Flow:** Create a dedicated checkout page with order processing.
* **User Authentication:** Add user login and registration functionality.
* **Product Filtering & Search:** Implement advanced product search and filtering capabilities.
* **Payment Integration:** Integrate payment gateway for transaction processing.
* **Order History:** Allow users to view their previous orders.

## 🤝 Contributing

Contributions are welcome!

---

Made with ❤️ by [Adrian Ablaza]