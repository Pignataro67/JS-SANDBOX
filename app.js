// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthlyPayment');
  const totalPayment = document.getElementById('totalPayment');
  const totalInterest = document.getElementById('totalInterest');

  const principal =  parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) /100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;;

  e.preventDefault();
}