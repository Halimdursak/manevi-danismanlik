// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

// Appointment Button
const appointmentBtn = document.getElementById('appointmentBtn');
appointmentBtn.addEventListener('click', () => {
    document.querySelector('.appointment-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// Payment Modal
const appointmentForm = document.getElementById('appointmentForm');
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.getElementById('closeModal');
const confirmation = document.getElementById('confirmation');
const creditCardOption = document.getElementById('creditCard');
const bankTransferOption = document.getElementById('bankTransfer');
const creditCardForm = document.getElementById('creditCardForm');
const completePayment = document.getElementById('completePayment');

// Confirmation elements
const confirmationDate = document.getElementById('confirmationDate');
const confirmationTime = document.getElementById('confirmationTime');
const confirmationType = document.getElementById('confirmationType');

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values for confirmation
    const dateValue = document.getElementById('date').value;
    const timeValue = document.getElementById('time').value;
    const typeValue = document.getElementById('consultType').value;
    
    // Format date for display
    const dateObj = new Date(dateValue);
    const formattedDate = dateObj.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Update confirmation elements
    confirmationDate.textContent = formattedDate;
    confirmationTime.textContent = document.querySelector(`#time option[value="${timeValue}"]`).textContent;
    confirmationType.textContent = document.querySelector(`#consultType option[value="${typeValue}"]`).textContent;
    
    // Show payment modal
    paymentModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// Payment Options
creditCardOption.addEventListener('click', () => {
    creditCardOption.classList.add('selected');
    bankTransferOption.classList.remove('selected');
    creditCardForm.style.display = 'block';
});

bankTransferOption.addEventListener('click', () => {
    bankTransferOption.classList.add('selected');
    creditCardOption.classList.remove('selected');
    creditCardForm.style.display = 'none';
});

// Complete Payment
completePayment.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    confirmation.style.display = 'block';
    
    // Scroll to confirmation
    confirmation.scrollIntoView({
        behavior: 'smooth'
    });
    
    // Reset form
    appointmentForm.reset();
});