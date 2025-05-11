import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (
      (paymentMethod === 'UPI' && !paymentDetails) ||
      (paymentMethod === 'Card' && !/^\d{16}$/.test(paymentDetails))
    ) {
      alert('Please enter valid payment details.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Payment method: ${paymentMethod}\nDetails: ${paymentDetails}`);
      navigate('/order-confirmation');
    }, 2000); // simulate payment processing
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Enter the details for the selected payment method.
    </Tooltip>
  );

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#28a745' }}>
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="#">Payment Page</a>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="card p-4 shadow-lg rounded">
          <h2 className="text-center text-primary mb-4">Choose Your Payment Method</h2>
          <form onSubmit={handlePayment}>
            {/* UPI */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="upi"
                value="UPI"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setPaymentDetails('');
                }}
              />
              <label className="form-check-label" htmlFor="upi">
                💸 UPI (Google Pay / PhonePe / Paytm)
              </label>
            </div>
            {paymentMethod === 'UPI' && (
              <>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="upiMethod"
                    id="paytm"
                    value="Paytm"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="paytm">
                    Paytm
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="upiMethod"
                    id="phonepe"
                    value="PhonePe"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="phonepe">
                    PhonePe
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="upiMethod"
                    id="googlepay"
                    value="GooglePay"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="googlepay">
                    Google Pay
                  </label>
                </div>
              </>
            )}

            {/* Credit/Debit Card */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="card"
                value="Card"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setPaymentDetails('');
                }}
              />
              <label className="form-check-label" htmlFor="card">
                💳 Credit / Debit Card
              </label>
            </div>
            {paymentMethod === 'Card' && (
              <>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cardType"
                    id="visa"
                    value="Visa"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="visa">
                    Visa
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cardType"
                    id="mastercard"
                    value="MasterCard"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="mastercard">
                    MasterCard
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cardType"
                    id="rupay"
                    value="RuPay"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="rupay">
                    RuPay
                  </label>
                </div>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter 16-digit card number"
                    value={paymentDetails}
                    onChange={(e) => setPaymentDetails(e.target.value)}
                    maxLength={16}
                  />
                </OverlayTrigger>
              </>
            )}

            {/* Net Banking */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="netbanking"
                value="NetBanking"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setPaymentDetails('');
                }}
              />
              <label className="form-check-label" htmlFor="netbanking">
                🏦 Net Banking
              </label>
            </div>
            {paymentMethod === 'NetBanking' && (
              <>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bank"
                    id="sbi"
                    value="SBI"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="sbi">
                    State Bank of India
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bank"
                    id="hdfc"
                    value="HDFC"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="hdfc">
                    HDFC Bank
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bank"
                    id="icici"
                    value="ICICI"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="icici">
                    ICICI Bank
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bank"
                    id="axis"
                    value="AXIS"
                    onChange={(e) => setPaymentDetails(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="axis">
                    Axis Bank
                  </label>
                </div>
              </>
            )}

            {/* Cash on Delivery */}
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="cod"
                value="CashOnDelivery"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setPaymentDetails('COD');
                }}
              />
              <label className="form-check-label" htmlFor="cod">
                💵 Cash on Delivery
              </label>
            </div>

            <button type="submit" className="btn btn-success w-100" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Processing...
                </>
              ) : (
                'Confirm and Place Order'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
