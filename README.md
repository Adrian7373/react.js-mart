# React JS-Mart ⚛️🛒

React JS-Mart is a modern e-commerce application built using **Next.js 16** and **React 19**. It demonstrates a component-based approach to building a shopping cart, featuring dynamic data fetching, state management, and modular styling.

## 🚀 Features

* **Dynamic Product Feed:** Fetches live product data asynchronously from [FakeStoreAPI](https://fakestoreapi.com/) using `useEffect`.
* **Interactive Shopping Cart:**
    * **Add to Cart:** Users can add products directly from the main feed.
    * **Quantity Management:** Increase or decrease item counts; items are automatically removed when quantity hits zero.
    * **Live Totals:** The total price updates instantly as you interact with the cart.
* **Modern Architecture:** Built with **Next.js App Router**, utilizing server/client component patterns (marked with `"use client"`).
* **Modular Styling:** Uses **CSS Modules** (`*.module.css`) to scope styles locally to components, preventing style conflicts.

## 🛠️ Technologies Used

* **Framework:** [Next.js 16](https://nextjs.org/)
* **Library:** [React 19](https://react.dev/)
* **Styling:** CSS Modules
* **Linting:** ESLint

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

* **State Management:** This project currently uses React's `useState` for managing the cart in-memory. Unlike the vanilla JS version, data does not persist on refresh (yet).
* **Images:** Unlike the previous version, this app uses the **actual images** provided by the API rather than a placeholder.

## 🔮 Future Improvements

* **Context API / Redux:** Implement global state management to access the cart from any page.
* **LocalStorage:** Add persistence so the cart remains saved after refreshing the page.
* **Checkout Flow:** Create a dedicated checkout page.

## 🤝 Contributing

Contributions are welcome!

---

Made with ❤️ by [Adrian Ablaza]
