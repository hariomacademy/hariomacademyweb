import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div>
          <img src="/logo.png" alt="Hari om academy" />
          <p>
            Hari Om Academy, as a family have
            <br />
            passion  to serve student community
            <br />
            by way of  providing good source of
            <br />
            study and quality guidance.
          </p>
          <p>Developed by Meetwit</p>
        </div>
        <div className="links">
          <h1>Links</h1>
          <ul>
            <li>
              <Link href="/courses">
                <a href="/courses">Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a href="/gallery">Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a href="/blog">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a href="/about">About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h1>Follow Us</h1>
          <ul>
            <li>
              <a href="https://www.instagram.com/hariomacademyedu/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="http://facebook.com/hariomacademy" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="http://youtube.com/hariomacadmey" target="_blank" rel="noopener noreferrer">Youtube</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=+918210026457&text=Hi" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Contact</h1>
          <p>+91 8210026457</p>
          <p>
            Chhota Govindpur,
            <br />
            Near Shri Ram Mandir,
            <br />
            Jamshedpur,
            <br />
            Jharkhand 831015
          </p>
        </div>
      </div>
      <style jsx>
        {`
          img {
            width: 60px;
          }
          .container {
            background: #fff;
            color: #6B778C;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0 70px;
            max-width: 1200px;
            margin: 90px auto 0;
          }
          p {
            margin-top: 10px;
          }
          h1 {
            font-family: 'Rubik';
            font-weight: 500;
            color: #6B778C;
          }
          ul li {
            margin-top: 10px;
          }
          ul li a {
            text-decoration: none;
            color: #6B778C;
            opacity: 0.7;
          }
          ul li a:hover {
            text-decoration: underline;
            color: #4C9AFF;
          }
          @media only screen and (max-width: 992px) { 
            .footer {
              margin-top: 30px;
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              grid-gap: 1.3rem;
              text-align: center;
            }
            .links{
              display: none;
              justify-content: space-around;
            }
          }
        `}
      </style>
    </div>
  );
}
