import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Account2() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('account2Data');
    if (savedData) {
      const {
        firstName,
        lastName,
        email,
        addressLine1,
        addressLine2,
        city,
        zip,
        phone
      } = JSON.parse(savedData);
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setAddressLine1(addressLine1);
      setAddressLine2(addressLine2);
      setCity(city);
      setZip(zip);
      setPhone(phone);
    }
  }, []);

  // Save data to localStorage whenever any field changes
  useEffect(() => {
    const data = { firstName, lastName, email, addressLine1, addressLine2, city, zip, phone };
    localStorage.setItem('account2Data', JSON.stringify(data));
  }, [firstName, lastName, email, addressLine1, addressLine2, city, zip, phone]);

  return (
    <div>
      <div className=''>
        <form className='div-3' action="">
          <label className='input_text' htmlFor="">Name
            <div className='div-104'>
              <input
                className='input'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className='input'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </label>
          <label className='input_text' htmlFor="">Type
            <input
              className='input'
              type="email"
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className='input_text' htmlFor="">Address
            <input
              className='input'
              type="text"
              placeholder='Address line 1'
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
            <input
              className='input'
              type="text"
              placeholder='Address line 2'
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
            <input
              className='input'
              type="text"
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className='input'
              type="text"
              placeholder='Zip'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </label>
          <label className='input_text' htmlFor="">Phone
            <input
              type="number"
              className='input'
              placeholder='+1 (555) 000-0000'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <Link to="/2">
            <button className='button'>Continue »</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Account2;
