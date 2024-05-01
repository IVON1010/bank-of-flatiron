# Bank Transactions App

This is a simple React application for managing bank transactions. It fetches transaction data from an API and allows users to search, add, and sort transactions.

## Installation

To run this application locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/IVON1010/bank-transactions-app.git

cd bank-transactions-app

npm install

npm start

Open your browser and go to http://localhost:3000 to view the application.

## Usage
Once the application is running, you can perform the following actions:

Search Transactions: Use the search bar to filter transactions by description.
Add Transaction: Add new transactions using the form provided.
Sort Transactions: Click on the column headers in the transaction table to sort transactions based on that column.

## Code Overview
The main logic of the application resides in the App component. Here's a brief overview of its functionality:

Fetching Data: The application fetches transaction data from the provided API URL using the fetchData function.
State Management: It manages state for transactions data (transactions), search term (searchTerm), and handles updates to these states.
Handling User Actions: It provides functions to add transactions (addTransaction), handle search input changes (handleSearch), and sort transactions (sortTransactions).
Rendering Components: It renders the transaction form (TransactionForm), search input, and transaction table (TransactionTable) with filtered transactions.

## Technologies Used
React
JavaScript
CSS

## Live link
API_URL = 'https://my-json-server.typicode.com/IVON1010/bank-of-flatiron/transactions';

## API Used
Bank of Flatiron Transactions API

## License
This project is licensed under the MIT License.

