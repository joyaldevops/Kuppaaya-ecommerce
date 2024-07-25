import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../pages/Footer';
import PaymentOptionsComponent from './PaymentOptionsComponent';
import PageNavbar from '../pages/PageNavbar';

const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const CheckOut = () => {
  const location = useLocation();
  const { cartItems, total } = location.state || { cartItems: [], total: 0 };
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhone: '',
    addressType: 'home',
  });

  const handleSaveAndDeliver = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          cartItems,
          total,
        }),
      });
      if (response.ok) {
        alert('Order placed successfully!');
        setShowPaymentOptions(true);
      } else {
        alert('Failed to place order.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCurrentLocation = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/get-location');
      const data = await response.json();
      setFormData({
        ...formData,
        address: data.location.region || '',
        city: data.location.city || '',
        state: data.location.country || '',
        pincode: data.location.zip || '',
        locality: data.location.region || '',
      });
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageNavbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {!showPaymentOptions ? (
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 flex-grow max-w-6xl w-full mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Add New Address</h2>
                
                <button 
                  className="bg-black text-white py-2 px-4 rounded-lg mb-6 flex items-center hover:bg-gray-800 transition duration-300 w-full sm:w-auto justify-center sm:justify-start"
                  onClick={handleCurrentLocation}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Use my current location
                </button>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="border rounded-md p-3 w-full" />
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile Number" className="border rounded-md p-3 w-full" />
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="Pincode" className="border rounded-md p-3 w-full" />
                  <input type="text" name="locality" value={formData.locality} onChange={handleInputChange} placeholder="Locality" className="border rounded-md p-3 w-full" />
                  <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="Address (Area & Street)" className="border rounded-md p-3 col-span-full h-24 w-full"></textarea>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City/District" className="border rounded-md p-3 w-full" />
                  <select name="state" value={formData.state} onChange={handleInputChange} className="border rounded-md p-3 w-full">
                    <option value="">---Select state---</option>
                    {statesList.map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                  <input type="text" name="landmark" value={formData.landmark} onChange={handleInputChange} placeholder="Landmark (Optional)" className="border rounded-md p-3 w-full" />
                  <input type="tel" name="alternatePhone" value={formData.alternatePhone} onChange={handleInputChange} placeholder="Alternate Phone Number" className="border rounded-md p-3 w-full" />
                  
                  <div className="col-span-full">
                    <p className="font-semibold mb-2">Address Type</p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="addressType" 
                          value="home"
                          checked={formData.addressType === 'home'}
                          onChange={handleInputChange}
                          className="mr-2" 
                        />
                        Home Delivery
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="addressType" 
                          value="work"
                          checked={formData.addressType === 'work'}
                          onChange={handleInputChange}
                          className="mr-2" 
                        />
                        Work (Delivery between 10:00 am - 5:00 pm)
                      </label>
                    </div>
                  </div>
                </form>

                <div className="mt-6 space-y-4">
                  <button 
                    className="w-full bg-black text-white py-3 rounded border border-black hover:bg-gray-800 transition duration-300"
                    onClick={handleSaveAndDeliver}
                  >
                    Save & Deliver here
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 sm:p-6 w-full lg:w-96">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Price Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-base sm:text-lg">
                    <span>Total ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</span>
                    <span>₹ {total}</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg">
                    <span>Original price</span>
                    <span>₹ {total}</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg sm:text-xl pt-4 border-t">
                    <span>Total</span>
                    <span>₹ {total}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <PaymentOptionsComponent total={total} cartItemsCount={cartItems.length} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;