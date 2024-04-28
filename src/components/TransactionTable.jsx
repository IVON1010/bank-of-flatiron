
const TransactionTable = ({ transactions, onDelete }) => {
    const [sortBy, setSortBy] = useState(null);
  
    const handleSort = (property) => {
      if (sortBy === property) {
        // If already sorted by the same property, reverse the order
        transactions.reverse();
      } else {
        // Sort the transactions by the selected property
        transactions.sort((a, b) => (a[property] > b[property] ? 1 : -1));
      }
      setSortBy(property);
    };
  