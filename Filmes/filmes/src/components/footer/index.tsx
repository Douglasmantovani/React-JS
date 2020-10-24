import React from 'react';
import Logo from '../../assets/images/logonegativo.png'
import '../../assets/style/global.css';
import '../footer/style.css'

function Footer() {
  return (
    <div className="Footer">
    <img src={Logo} alt="Logo do footer"/>
    <hr/>
    <div>
            <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
            <p>Call us now toll free: (800)2345-6789</p>
            <p>Customer support: support@demolink.org</p>
            <p>Skype: sample-username</p>
            </div>
    </div>
  );
}
export default Footer;
