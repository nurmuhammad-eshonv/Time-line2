import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Account4() {
  const [currency, setCurrency] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [iban, setIban] = useState<string>('');
  const [confirmIban, setConfirmIban] = useState<string>('');

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('account4Data');
    if (savedData) {
      const { currency, country, iban, confirmIban } = JSON.parse(savedData);
      setCurrency(currency);
      setCountry(country);
      setIban(iban);
      setConfirmIban(confirmIban);
    }
  }, []);

  // Save data to localStorage whenever any field changes
  useEffect(() => {
    const data = { currency, country, iban, confirmIban };
    localStorage.setItem('account4Data', JSON.stringify(data));
  }, [currency, country, iban, confirmIban]);

  return (
    <div>
      <div className=''>
        <form className='div-3' action="">
          <label className='input_text' htmlFor="">Currency
            <select
              className='input'
              name=""
              id=""
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="">Select your currency...</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="jpy">JPY</option>
              <option value="aud">AUD</option>
            </select>
          </label>
          <label className='input_text' htmlFor="">Country of bank account
            <select
              className='input'
              name=""
              id=""
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="jp">Japan</option>
            </select>
          </label>
          <label className='input_text' htmlFor="">IBAN
            <input
              className='input'
              type="text"
              placeholder='Enter your IBAN'
              value={iban}
              onChange={(e) => setIban(e.target.value)}
            />
            <input
              className='input'
              type="text"
              placeholder='Confirm IBAN'
              value={confirmIban}
              onChange={(e) => setConfirmIban(e.target.value)}
            />
          </label>
          <Link to="/4">
            <button className='button'>Continue »</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Account4;
