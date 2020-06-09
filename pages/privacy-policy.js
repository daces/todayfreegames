import React from "react"

const AboutPage = () => (
  <main>
    <h1 data-v-d97821ea="">Privacy Policy</h1> <p data-v-d97821ea="">Your privacy is important to us. It is Free Games Today's policy to respect your privacy regarding any
    information we may collect from you across our website, <a data-v-d97821ea="" href="https://freegamestoday.com/">https://freegamestoday.com</a>,
    and other sites we own and operate.</p> <p data-v-d97821ea="">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair
    and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it
    will be used.</p> <p data-v-d97821ea="">We only retain collected information for as long as necessary to provide you with your requested service.
    What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as
    unauthorised access, disclosure, copying, use or modification.</p> <p data-v-d97821ea="">We don’t share any personally identifying information publicly or with third-parties, except when required to
    by law.</p> <p data-v-d97821ea="">Our website may link to external sites that are not operated by us. Please be aware that we have no control
    over the content and practices of these sites, and cannot accept responsibility or liability for their
    respective privacy policies.</p> <p data-v-d97821ea="">You are free to refuse our request for your personal information, with the understanding that we may be
    unable to provide you with some of your desired services.</p> <p data-v-d97821ea="">Your continued use of our website will be regarded as acceptance of our practices around privacy and personal
    information. If you have any questions about how we handle user data and personal information, feel free to
    contact us.</p>
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