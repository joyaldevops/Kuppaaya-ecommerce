import React from 'react';
import { CreditCard } from 'lucide-react';
// import Footer from './Footer';

const PaymentOptionsComponent = ({ total, cartItemsCount }) => {
  return (
    <div>
    {/* <div className="bg-white rounded-lg shadow-md"> */}
      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Left column */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Payment Options</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-black"></div>
              <span>UPI Payment</span>
            </div>
            
            <div className="ml-6 space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="upi" className="form-radio" />
                <span>Phone pe</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="upi" className="form-radio" />
                <span>Google pay</span>
              </label>
            </div>
            
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>UPI Wallet</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Credit/Debit Card</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Net Banking</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Cash on Delivery</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>EMI</span>
            </label>
          </div>
          
          <button className="mt-6 w-full bg-black text-white py-2 px-4 rounded">
            Proceed
          </button>
        </div>
        
        {/* Right column */}
        <div className="flex-1 space-y-4">
          <div className="border rounded p-4">
            <h3 className="font-bold mb-2">Price Details</h3>
            <div className="flex justify-between">
              <span>Total({cartItemsCount} item{cartItemsCount !== 1 ? 's' : ''})</span>
              <span>₹ {total}</span>
            </div>
            <div className="flex justify-between">
              <span>Original price</span>
              <span>₹ {total}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>
          </div>
          
          <div className="border rounded p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              <span>5% Cashback on Axis Bank Card</span>
            </div>
            <span>&gt;</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5" />
            <span className="text-sm">Safe & secure payments. Easy returns 100% Authentic products.</span>
          </div>
        </div>
      </div>
    {/* </div> */}

    {/* < Footer /> */}
    </div>
  );
};

export default PaymentOptionsComponent;