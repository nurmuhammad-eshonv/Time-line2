import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Account3() {
  const [vatNumber, setVatNumber] = useState<string>('');
  const [industry, setIndustry] = useState<string>('');
  const [website, setWebsite] = useState<string>('');

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('account3Data');
    if (savedData) {
      const { vatNumber, industry, website } = JSON.parse(savedData);
      setVatNumber(vatNumber);
      setIndustry(industry);
      setWebsite(website);
    }
  }, []);

  // Save data to localStorage whenever any field changes
  useEffect(() => {
    const data = { vatNumber, industry, website };
    localStorage.setItem('account3Data', JSON.stringify(data));
  }, [vatNumber, industry, website]);

  return (
    <div>
      <div className=''>
        <form className='div-3' action="">
          <label className='input_text' htmlFor="">VAT
            <input
              className='input'
              type="text"
              placeholder='VAT number'
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
            />
          </label>
          <label className='input_text' htmlFor="">Industry
            <select
              className='input'
              name=""
              id=""
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Please select your industry...</option>
              <option value="industry1">Industry 1</option>
              <option value="industry2">Industry 2</option>
              <option value="industry3">Industry 3</option>
              <option value="industry4">Industry 4</option>
              <option value="industry5">Industry 5</option>
            </select>
          </label>
          <label className='input_text' htmlFor="">Organization website
            <input
              className='input'
              type="text"
              placeholder='www.example.com'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
          <Link to="/3">
            <button className='button'>Continue »</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Account3;
