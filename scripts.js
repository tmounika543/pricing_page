function addStyles(element) {
  element.style.margin = '-10px -5px -10px -5px';
  element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)'; // Add box shadow
}

function removeStyles(element) {
  element.style.margin = '0';
  element.style.boxShadow = 'none'; // Remove box shadow
}

function purchase(plan) {
  alert(`You have purchased the ${plan} plan.`);
}
