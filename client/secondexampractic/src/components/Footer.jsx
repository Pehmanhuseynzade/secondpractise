import React from 'react'
import { Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
function Footer() {
  return (
    <>
      <footer className='footer-img' >
        <div className='foooter'>
          <div className='foot1'>
            <h3 style={{ fontSize: "25px" }}>Top Products</h3>
            <ul style={{ display: "block", fontSize: "18px", lineHeight: "1.5", marginTop: "10px" }}>
              <Link>
                <li>Managed Website</li>
              </Link>
              <Link>
                <li>Manage Reputation</li>
              </Link>
              <Link>
                <li>Power Tools</li>
              </Link>
              <Link>
                <li>Marketing Service</li>
              </Link>
            </ul>
          </div>
          <div className='foot2'>
            <h3 style={{ fontSize: "25px" }}>Newsletter</h3>
            <p style={{ display: "block", fontSize: "18px", lineHeight: "1.5", marginTop: "10px" }}>You can trust us. we only send promo offers, not a single spam.</p>
            <div style={{ margin: "10px" }}>
              <TextField style={{ backgroundColor: "white" }} id="outlined-basic" placeholder='Enter Email' type='email' name='email' variant="outlined" />
              <Button style={{ backgroundColor: "#8a90ff", position: "relative", top: "7px", left: "50px", padding: "10px" }}>SUBSCRIBE</Button>
            </div>
          </div>
          <div className='foot3'>
            <h3>Instragram Feed</h3>

            <div style={{ marginTop: "8px" }}>
              <ul>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i1.jpg.webp" alt="footimage" /></li>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i2.jpg" alt="footimage" /></li>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i3.jpg" alt="footimage" /></li>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i4.jpg" alt="footimage" /></li>
              </ul>
              <ul>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i5.jpg" alt="footimage" /></li>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i6.jpg" alt="footimage" /></li>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i7.jpg" alt="footimage" /></li>
                <li><img src="https://preview.colorlib.com/theme/robotics/img/i8.jpg" alt="footimage" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div><p>Copyright ©2023 All rights reserved | This template is made with</p><span style={{ color: "#8a90ff" }}>&#10084;</span> by <span style={{ color: "#8a90ff" }}>Colorlib</span></div>
          <div style={{ marginTop: "15px", display: "flex", gap: "20px", fontSize: "20px" }}>
            <i class="fa-brands fa-facebook footicon"></i>
            <i class="fa-brands fa-twitter footicon"></i>
            <i class="fa-solid fa-globe footicon"></i>
            <i class="fa-brands fa-behance footicon"></i>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
