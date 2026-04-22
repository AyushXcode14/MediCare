import Razorpay from 'razorpay';

try {
  console.log('Testing Razorpay initialization with missing keys...');
  const instance = new Razorpay({
    key_id: undefined,
    key_secret: undefined
  });
  console.log('Razorpay initialized successfully without keys.');
} catch (error) {
  console.error('Razorpay initialization failed:', error.message);
}
