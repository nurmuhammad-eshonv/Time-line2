import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Menyu() {
  const [data, setData] = useState<any>(null);
  const [data2, setData2] = useState<any>(null);
  const [data3, setData3] = useState<any>(null);
  const [data4, setData4] = useState<any>(null);
  const [data5, setData5] = useState<any>(null);
  const [data6, setData6] = useState<any>(null);

  useEffect(() => {
    // Retrieve and parse the stored data whenever the component mounts or updates
    setData(JSON.parse(localStorage.getItem("accountData") || 'null'));
    setData2(JSON.parse(localStorage.getItem("account2Data") || 'null'));
    setData3(JSON.parse(localStorage.getItem("account3Data") || 'null'));
    setData4(JSON.parse(localStorage.getItem("account4Data") || 'null'));
    setData5(JSON.parse(localStorage.getItem("account5Data") || 'null'));
    setData6(JSON.parse(localStorage.getItem("account6Data") || 'null'));
  }, []); // Empty dependency array means this effect runs only once on mount

  // Define a function to determine the background color based on each piece of data
  function getBackgroundColor(value: any) {
    if(value){
      return "red"
    }
    return;
  }

  return (
    <div className='div-1'>
      <div className='div-1-1'>
        <div className='div-0'>
          <NavLink to="/">
            <p style={{ backgroundColor: getBackgroundColor(data) }} className='p1'>1</p>
          </NavLink>
          <NavLink to="/1">
            <p style={{ backgroundColor: getBackgroundColor(data2) }} className='p1'>2</p>
          </NavLink>
          <NavLink to="/2">
            <p style={{ backgroundColor: getBackgroundColor(data3) }} className='p1'>3</p>
          </NavLink>
        </div>
        <NavLink to="/3">
          <p style={{ backgroundColor: getBackgroundColor(data4) }} className='p1'>4</p>
        </NavLink>
        <NavLink to="/4">
          <p style={{ backgroundColor: getBackgroundColor(data5) }} className='p1'>5</p>
        </NavLink>
        <NavLink to="/5">
          <p style={{ backgroundColor: getBackgroundColor(data6) }} className='p1'>6</p>
        </NavLink>
      </div>
      <div className='div-1-2'>
        <div className='div-2'>
          <p className='p2'>Business structure</p>
          <p className='p3'>Business representative</p>
          <p className='p3'>Business details</p>
        </div>
        <p className='p2'>Bank details</p>
        <p className='p2'>2 step authentication</p>
        <p className='p2'>Overview</p>
      </div>
    </div>
  );
}

export default Menyu;
