import React from "react"

const AboutPage = () => (
  <main>
    <h1 data-v-21bc4490="">GDPR Statement</h1> <p data-v-21bc4490="">This website collects the user email via a user input on the main page. Free Games Today stores the email
    with the explicit consent of the user, provided by clicking the button associated with the input. </p> <p data-v-21bc4490="">The user may unsubscribe from the email at any time by clicking the corresponding link in the email.</p> <p data-v-21bc4490="">This website may also collect cookies to improve user experience.</p>
    <style jsx>{`
      main {
      padding: 0 30px;
      }
      .menu {
        text-align: right;
        padding: 10px;
      }
      .menu__item::after {
        content: "/";
        padding: 0 10px;
      }
      .menu__page-about {
        line-height: 42px;
        vertical-align: top;
      }
      .menu__social-icon {
        position: relative;
        display: inline-block;
      }
      .menu__social-icon::before {
        content: "follow us";
        vertical-align: top;
        line-height: 42px;
        margin-right: 10px;
        pointer-events: none;
      }
      .logo {
        background: url('../img/background.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        text-align: center;
        color: #3f3d56;
        width: 100%;
        margin: 0 auto;
        height: 300px;
      }
      .logo__inner {
        position: absolute;
        left: 0;
        right: 0;
        top: 60%;
      }
      .logo__title {
        text-transform: uppercase;
        background: #3f3d56;
        display: inline-block;
        font-size: 3rem;
        font-weight: bold;
        color: #f1f0ff;
        padding: 5px;
      }
      .logo__title span {
        color: #ffffff;
        margin: 0 5px;
        padding: 0 5px;
        background: #6c63ff;
      }
      .logo__description {
        color: #ffffff;
        font-size: 12px;
        padding: 5px;
        text-align: center;
        margin: 0;
        background: #f86d70;
      }
      `}</style>

  </main>
)
export default AboutPage