import React from "react"

const AboutPage = () => (
  <main>
    <div className="menu">
      <span className="menu__item menu__page-about"><a href="/about">About</a></span>
      <span >
        <a className="menu__social-icon" href="https://twitter.com/todayFreeGames" target="_blank" rel="noreferrer">
          get updates on
              <img
            className="menu__twitter-follow"
            src="/img/twitter.svg"
            width="40" height="42" alt="Today free games official twitter account" title="Today free games official twitter account" />
        </a>
      </span>
    </div>

    <a href="/">
      <div className="logo">
        <div className="logo__inner">
          <div className="logo__title"><h2 className="logo__title">Today<span>FREE</span>games</h2>
            <h1 className="logo__description">A simple website to never miss a free game deal.</h1>
          </div>
        </div>
      </div>
    </a>


    <div className="content">
      <h1>A simple list of free game deals today.</h1>
      <p>
        This website is made to be a list of free deals (on any e-retailer, on Steam, Epic Games Store etc.) so that you never miss a game you can get for free.
        Get the deals via the website, sign up for the email list, or any social media. It's free.
      <p>
          Contact mail: todayfreegames@gmail.com
        </p>
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
    <style jsx global>{`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
  font-family: 'Courier New', Courier, monospace;
  color: #3f3d56;
}
a {
  text-decoration: none;
}
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
.menu__twitter-follow {
  vertical-align: middle;
  padding-left: 10px;
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
  font-family: monospace;
  word-spacing: -3px;
}
      @media screen and (max-width: 414px) {
      .logo__title {
        font-size: 2rem;
      }
      .logo__description {
        font-size: 10px;
      }
      .footer li{
      display: block;
      }
      .footer{
      text-align: center;
      padding-top: 20px;
      margin-top: 40px;
      }
      }
      `}</style>

  </main>
)
export default AboutPage