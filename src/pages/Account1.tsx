import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Account1() {
  const [business, setBusiness] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');

  useEffect(() => {
    const savedData = localStorage.getItem('accountData');
    if (savedData) {
      const { business, type, addressLine1, addressLine2, city, zip } = JSON.parse(savedData);
      setBusiness(business);
      setType(type);
      setAddressLine1(addressLine1);
      setAddressLine2(addressLine2);
      setCity(city);
      setZip(zip);
    }
  }, []);

  useEffect(() => {
    const data = { business, type, addressLine1, addressLine2, city, zip };
    localStorage.setItem('accountData', JSON.stringify(data));
  }, [business, type, addressLine1, addressLine2, city, zip]);

  return (
    <div>
      <div className=''>
        <form className='div-3' action="">
          <label className='input_text' htmlFor="">Business address
            <select
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className='input'
              name=""
              id=""
            >
              <option value="oohtg3">Registered business address</option>
              <option value="othoi35h"></option>
              <option value="o5yihyi3"></option>
              <option value="ptjh3j"></option>
              <option value="35hhjp33j"></option>
            </select>
          </label>
          <label className='input_text' htmlFor="">Type
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className='input'
              name=""
              id=""
            >
              <option value="">Type of business</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
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
          <Link to="/1">
            <button className='button'>Continue »</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Account1;
