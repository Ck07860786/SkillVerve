import React from 'react'
import user1 from '../images/user1.avif'
import user2 from '../images/user2.avif'
import user3 from '../images/user3.avif'
import user4 from '../images/user4.avif'
import user5 from '../images/user5.avif'

function Avataar() {
  return (
    <>
    <div className="avatar-group  -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src={user1} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={user2} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={user3} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={user4} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={user5} />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span>+99</span>
    </div>
  </div>
</div>
    </>
  )
}

export default Avataar