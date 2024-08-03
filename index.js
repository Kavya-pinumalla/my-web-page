function sendVerification() {
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    
    // Here you can send a POST request to your server to initiate the verification process
    // For demonstration purposes, we'll just simulate the process and show a message
    
    // Simulating a successful request
    setTimeout(() => {
      document.getElementById('message').textContent = 'Verification code sent to ${emailOrPhone}.';
    }, 1000);
  }