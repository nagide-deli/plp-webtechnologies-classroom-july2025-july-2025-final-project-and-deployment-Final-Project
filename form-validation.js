// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                // In a real application, you would submit the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateLoginForm()) {
                // In a real application, you would authenticate the user
                alert('Login successful! Redirecting to your dashboard...');
                // window.location.href = 'dashboard.html'; // Redirect to dashboard
            }
        });
    }
    
    // Contact Form Validation Function
    function validateContactForm() {
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (!name.value.trim()) {
            nameError.textContent = 'Please enter your full name';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            emailError.textContent = 'Please enter your email address';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        
        // Phone validation (optional)
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (phone.value.trim() && !phoneRegex.test(phone.value)) {
            phoneError.textContent = 'Please enter a valid phone number';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }
        
        // Subject validation
        const subject = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        if (!subject.value.trim()) {
            subjectError.textContent = 'Please enter a subject';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }
        
        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (!message.value.trim()) {
            messageError.textContent = 'Please enter your message';
            isValid = false;
        } else if (message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long';
            isValid = false;
        } else {
            messageError.textContent = '';
        }
        
        return isValid;
    }
    
    // Login Form Validation Function
    function validateLoginForm() {
        let isValid = true;
        
        // Member ID validation
        const memberId = document.getElementById('memberId');
        const memberIdError = document.getElementById('memberIdError');
        if (!memberId.value.trim()) {
            memberIdError.textContent = 'Please enter your member ID';
            isValid = false;
        } else {
            memberIdError.textContent = '';
        }
        
        // Password validation
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        if (!password.value) {
            passwordError.textContent = 'Please enter your password';
            isValid = false;
        } else if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }
        
        return isValid;
    }
});