function Footer() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src="./pictures/footer-logo.png" alt="logo" />
        </div>
        <div>
          <div className="download1">
            <img src="./pictures/googleplay.png" alt="playstore" />
          </div>
          <div className="download2">
            <img src="./pictures/appstore.png" alt="appstore" />
          </div>
        </div>
        <div>
          <table>
            <tr>
              <td>Privacy Policy</td>
              <td>About Us</td>
            </tr>
  
            <tr>
              <td>Our Food</td>
              <td>Careers</td>
            </tr>
  
            <tr>
              <td>Terms and Conditions</td>
              <td>Menu</td>
            </tr>
  
            <tr>
              <td>Opportunities</td>
              <td>Family Activities</td>
            </tr>
          </table>
        </div>
        <div>
          <table>
            <tr>
              <td>Follow us on</td>
            </tr>
            <tr>
              <td className="logos">
                <img src="./pictures/logos.png" alt="links" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

  export default Footer;