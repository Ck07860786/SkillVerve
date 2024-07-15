import React from 'react';
import Hero from '../images/dashboradskillverve.png';
import Admin from '../images/admin.png';

function BrowserMokup() {
  return (
    <>
      <div className="mockup-browser shadow-lg drop-shadow-2xl border-base-300 mt-40 border-b-8 border-l-8 border-t-4 border-r-2">
        <div className="mockup-browser-toolbar text-blue-600">
          <div className="input border-base-300 border">https://skillverve.com</div>
        </div>
        <div className="border-base-300 flex border-t ">
          
          <div>
            <img src={Admin} alt='dashboard' />
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowserMokup;
