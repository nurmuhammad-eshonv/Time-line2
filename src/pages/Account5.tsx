import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Account5() {
  const [sms, setSms] = useState<string>('');
  const [authenticator, setAuthenticator] = useState<string>('');

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('account5Data');
    if (savedData) {
      const { sms, authenticator } = JSON.parse(savedData);
      setSms(sms);
      setAuthenticator(authenticator);
    }
  }, []);

  // Save data to localStorage whenever any field changes
  useEffect(() => {
    const data = { sms, authenticator };
    localStorage.setItem('account5Data', JSON.stringify(data));
  }, [sms, authenticator]);

  return (
    <div>
      <div className=''>
        <form className='div-3' action="">
          <label className='input_text' htmlFor="">Keep your account secure
            <input
              className='input'
              type="text"
              placeholder='Use SMS'
              value={sms}
              onChange={(e) => setSms(e.target.value)}
            />
            <input
              className='input'
              type="text"
              placeholder='Use an authenticator app'
              value={authenticator}
              onChange={(e) => setAuthenticator(e.target.value)}
            />
          </label>
          <Link to="/5">
            <button className='button'>Continue »</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Account5;
