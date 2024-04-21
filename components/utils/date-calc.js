function formatDate(inputDate) {
  // Convert inputDate string to a Date object
  const date = new Date(inputDate);

  // Extract year, month, and day from the Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const day = String(date.getDate()).padStart(2, "0");

  // Return formatted date string in the desired format (YYYY-MM-DD)
  return `posted on ${year}-${month}-${day}`;
}

// Example usage
const inputDate = "2023-07-01T20:56:59.000Z";
const formattedDate = formatDate(inputDate);
console.log(formattedDate); // Output: 2023-07-01

module.exports = formatDate;
