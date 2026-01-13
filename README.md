## Full Description

This application provides a seamless experience for users to check and convert foreign exchange rates. It leverages modern web technologies to deliver a fast and aesthetically pleasing interface.

### Key Features

* **Live Exchange Rates**: Dynamically fetches the latest currency data using a custom `useCurrencyInfo` hook connected to a public currency API.
* **Instant Swap**: Allows users to quickly toggle between "From" and "To" currencies with a single click, automatically updating the amounts.
* **Responsive Design**: Built with Tailwind CSS 4 to ensure the converter works perfectly on mobile, tablet, and desktop devices.
* **Custom Reusable Components**: Features a modular `CurrencyBox` component for consistent input handling and currency selection.

---

## Folder Structure

The project follows a standard Vite-React architecture:

```text
currency_convertor/
├── public/
│   └── icon.png            # Application favicon/icon
├── src/
│   ├── Components/
│   │   └── CurrencyBox.jsx # Reusable input and dropdown component
│   ├── hooks/
│   │   └── useCurrencyInfo.js # Custom hook for API data fetching
│   ├── App.jsx             # Main application logic and state management
│   ├── App.css             # Custom styles and Tailwind imports
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles (if applicable)
├── .gitignore              # Files to ignore in Git
├── index.html              # Main HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation

```

---

## How to Use

### Prerequisites

* **Node.js** (v18 or higher recommended)
* **npm** or **yarn**

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/currency-convertor.git
cd currency-convertor

```


2. **Install dependencies**:
```bash
npm install

```


This will install React 19, Tailwind CSS 4, and other required packages.

### Running the Application

1. **Start the development server**:
```bash
npm run dev

```


2. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

### Performing a Conversion

1. **Enter Amount**: Type the numeric value you wish to convert in the "Amount" box.
2. **Select Currencies**: Choose your base currency and target currency from the dropdown menus.
3. **Swap**: Click the circular swap button in the center to reverse the conversion direction.
4. **Convert**: Click the **Convert** button at the bottom to calculate and display the result based on live market rates.

### Disclaimer
This is an educational project built to practice modern front-end skills, specifically focusing on React state management and custom hooks for API integration.