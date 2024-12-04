// JavaScript form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cardNumber = document.getElementById("card_number").value;
    let cvv = document.getElementById("cvv").value;
    let expDate = document.getElementById("exp_date").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    // Simple client-side validation
    if (!name || !email || !cardNumber || !cvv || !expDate || !pincode || !gender) {
        alert("Please fill out all required fields.");
        return false;
    }

    // Validating card number format (should be exactly 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return false;
    }

    // Validating CVV format (should be 3 or 4 digits)
    if (!/^\d{3,4}$/.test(cvv)) {
        alert("CVV must be 3 or 4 digits.");
        return false;
    }

    return true; // Proceed with form submission if all checks pass
}
