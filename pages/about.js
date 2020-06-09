import React from "react"

const AboutPage = () => (
  <main>
    <div className="menu">
      <span className="menu__item menu__page-about"><a href="/">Home</a></span>
      <span >
        <a className="menu__social-icon" href="https://twitter.com/todayFreeGames" target="_blank" rel="noreferrer">
          <img
            className="menu__twitter-follow"
            src="./img/twitter.svg"
            width="40" height="42" alt="Twitter free icon" title="Today free games official twitter account" />
        </a>
      </span>
    </div>

    <div className="logo">
      <div className="logo__inner">
        <a href="/">
          <div className="logo__title">Today<span>FREE</span>games
          <h3 className="logo__description">A simple website to never miss a free game deal.</h3>
          </div>
        </a>
      </div>
    </div>

    <div className="content">
      <h1>A simple list of free game deals today.</h1>
      <p>
        This website is made to be a list of free deals (on any e-retailer, on Steam, Epic Games Store etc.) so that you never miss a game you can get for free.
        Get the deals via the website, sign up for the email list, or any social media. It's free.

        Contact mail: mail@gamesfree.today
      </p>
    </div>

    <footer>
      <div>
        <ul className="footer">
          <li>Copyright todayfreegames.com © 2020</li>
          <li><a href="/toc" target="_blank">Terms of Service</a></li>
          <li><a href="/privacy-policy" target="_blank">Privacy Policy</a></li>
          <li><a href="/gdpr" target="_blank">GDPRegulation</a></li>
        </ul>
      </div>
    </footer>
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