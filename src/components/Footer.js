import React from 'react'

const Footer = () => {

    let year = new Date().getUTCFullYear();
  return (
    <footer className="text-center mt-5 p-3">
        <p> &copy; Copyrights Reserved {year} </p>
    </footer>
  )
}

export default Footer;