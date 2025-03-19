// Sample transaction data
const transactions = [
    { id: 1, type: "Sent", amount: "$50", to: "John Doe" },
    { id: 2, type: "Received", amount: "$100", from: "Jane Smith" },
    { id: 3, type: "Crypto", amount: "0.001 BTC", to: "Bitcoin Wallet" },
  ];
  
  const transactionList = document.querySelector(".transaction-list");
  
  // Populate transactions
  transactions.forEach((transaction) => {
    const transactionItem = document.createElement("div");
    transactionItem.classList.add("transaction-item");
    transactionItem.innerHTML = `
      <p><strong>${transaction.type}</strong>: ${transaction.amount} ${
      transaction.to ? `to ${transaction.to}` : `from ${transaction.from}`
    }</p>
    `;
    transactionList.appendChild(transactionItem);
  });
  