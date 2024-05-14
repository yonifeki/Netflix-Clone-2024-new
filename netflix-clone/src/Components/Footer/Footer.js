import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './footer.css'
const Footer = () => {
  return (
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of UseS</li>
                <li>Corrporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service_code"> 
            <p>
            service_code
            </p>
          </div>
        <div className="copy_write">
          &copy; 1997-2024 Netflix, Inc.
          </div>
      </div>
    </div>
  );
}

export default Footer
