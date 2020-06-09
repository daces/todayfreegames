import Head from 'next/head'
import React, { createRef } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import JSONdata from "./hellodata.json"
import { Img } from 'react-progressive-loader'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Today Free Games | A list of free game deals happening today. </title>
        <link rel="icon" href="favicon.ico" />
        <meta data-n-head="ssr" data-hid="description" name="description" content="All games free today. A simple website to never miss a free game deal." />
        <meta data-n-head="ssr" data-hid="author" name="author" content="Dragan" />
        <meta data-n-head="ssr" data-hid="og:type" name="og:type" property="og:type" content="website" />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title" property="og:title" content="Free Games Today" />
        <meta data-n-head="ssr" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="Free Games Today" />
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" property="og:description" content="All games free today. A simple website to never miss a free game deal." />
      </Head>
      <div>


      </div>
      <main>
        <p></p>
        <div className="menu">
          <span className="menu__item menu__page-about"><a href="/about">About</a></span>
          <span >
            <a className="menu__social-icon" href="https://twitter.com/todayFreeGames" target="_blank" rel="noreferrer">
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
              <div className="logo__title">Today<span>FREE</span>games
              <h3 className="logo__description">A simple website to never miss a free game deal.</h3>
              </div>
            </div>
          </div>
        </a>

        <Newsletter />

        <div className="deals">
          {JSONdata.map(function (item, index) {
            return <div key={`box${index}`} className={`box item clear-fix ${timeAgo(item.ends) === "Expired" ? 'item__expired' : ''}`} >
              <div className="box__inner clear-fix" >
                <div className="pull-left">
                  <Img
                    src={item.image}
                    alt={item.title}
                    loadOnScreen
                  />
                </div>
                <div className="pull-right">
                  <div className="item__inner">
                    <p className="item__ends mb-5" key={`ends${index}`}>{timeAgo(item.ends)}</p>
                    <p className="mb-5"><a className="item__title mb-5" key={`title${index}`} href={item.href}>{item.title}</a></p>
                    <div className="item__info mb-5">
                      <span className="item__price" key={`price${index}`}>{item.price}</span>
                      <span className="item__info_price-before" key={`priceb${index}`}>{item.priceBefore}</span>
                      <span key={`merchantLink${index}`}>{item.merchantLink}</span>
                    </div>
                    <div className="item__description mb-5">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item__button t-a-r">
                <a className="item__link item__link_red border-r10" key={`href${index}`} href={item.href}>
                  {`${timeAgo(item.ends) === "Expired" ? "EXPIRED" : "Get deal"}`}</a>
              </div>
            </div>
          })}
        </div>
      </main >
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
.menu__social-icon::before {
  position: absolute;
  content: "get updates on";
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
.box {
  font-family: Helvetica Neue,Arial,Lucida Grande,sans-serif;
  position: relative;
  box-shadow: 1px 1px 3px 0 #e6e6e6;
  background: #fdfdfd;
  padding: 10px;
  border-radius: 10px;
  margin: 20px 0;
}
.item__inner {
  padding-left: 10px;
}
.item__image {
  width: 100%;
  height: 100%;
}
.item__info span {
  margin-right: 10px;
}
.item__title {
  font-size: 1.2em;
  font-weight: bold;
  color: #6c63ff;
  text-decoration: none;
}
.item__ends {
  color: #a6a6a2;
  text-align: right;
  font-style: italic;
}
.item__price {
  font-size: 20px;
  color: #f86d70;
  font-weight: bold;
}
.item__info_price-before {
  text-decoration: line-through;
}
.item__button {
  margin: 10px;
}
.item__link {
  padding: 10px;
}
.item__link_red {
  background:  #f86d70;
  box-shadow: 0px 0px 5px 0 #ffd5d5;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}
.item__link:hover {
  background: #6c63ff;
  color: white;
  transition: 1s;
}
.item__expired {
  filter: grayscale(100%);
}
.subscribtion {
  text-align: center;
  width: 433px;
  margin: 40px auto;
}
.subscribtion__input  {
  padding: 10px;
  margin-right: -10px;
  outline: none;
  width: 60%;
  color:  #a5a5a5;
  font-weight: bold;
  font-style: italic;
  vertical-align: middle;
  border: 1px solid #e6e6e6;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.subscribtion input::placeholder,
input::-webkit-input-placeholder,
input:-moz-placeholder,
input:-ms-input-placeholder
 {
  color: #999;
  font-weight: normal;
  font-style: italic;
}
.subscribtion__button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0 #ffd5d5;
  outline: none;
  padding: 10px;
  border: none;
  background: #f86d70;
  color: #fff;
}
.subscribtion__button:hover {
  background: #6c63ff;
  color: white;
  transition: 1s;
}
.subscribtion_message {
  padding: 10px;
  color: #fff;
  font-weight: bold;
}
.subscribtion_success {
  background: #8bc34a;
}
.subscribtion_fail {
  background: #e4463a;
}
.footer{
  background: #3f3d56;
  list-style-type: none;
  color: #676490;
  font-size: 12px;
  border-top: 4px solid #e6e6e6;
  margin-top: 40px;
  padding: 20px;
}
.footer li{
  display: inline-block;
  margin-right: 10px;
}
.footer li:first-child {
  display: block;
}
.footer li a{
  color: #676490;
  font-size:16px;
  text-decoration: underline;
}
.pull-left{
  float: left;
  width: 20%;
}
.pull-right{
  float: right;
  width: 80%;
}
.t-a-r {
  text-align: right;
}
.border-r10 {
  border-radius: 10px;
}
.mb-5 {
  margin-bottom: 5px;
}
.clear-fix::after,
.clear-fix::before {
  content: "";
  display: block;
  clear: both;
}
@media screen and (min-width: 768px) {
.deals {
  width: 680px;
  margin: 0 auto;
}
}
@media screen and (max-width: 414px) {

  .logo__title {
    font-size: 2rem;
  }
  .logo__description {
    font-size: 10px;
  }
  .deals{
    margin: 0;
    width: 100%;
  }
  .box {
    font-size: 12px;
    position: relative;
  }
  .item__button {
    margin: 10px 0;
  }
  .item__link {
    display: block;
    text-align: center;
  }
  .pull-left, .pull-right {
    width: 100%;
    float: none;
  }
  .pull-left {
    text-align: center;
    margin-top: 20px;
  }
  .item__made-hot {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }
  .item__image {
    width: auto;
  }
.footer li{
  display: block;
}
.footer{
  text-align: center;
  padding-top: 20px;
  margin: 40px 0 20px 0;
}
}

`}</style>

    </div>
  )
}

const url = "https://gmail.us10.list-manage.com/subscribe/post?u=93d784ce4bb00cc3e9f7f05e5&amp;id=4b6c1eea34"

const Newsletter = () => {
  const emailRef = createRef(undefined)

  return (
    <div className="subscribtion">
      <h2>Would you like me to keep you in the loop?</h2>
      <p>...</p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => {
          switch (status) {
            case "sending":
              return <div className="subscribtion_message">Sending...</div>
            case "success":
              return <div className="subscribtion_message subscribtion_success">Subscribed.</div>
            case "error":
              Newsletter()
              setTimeout(function () { Newsletter(); }, 1500)
              alert(JSON.stringify(message))
            //return <div className="subscribtion_message subscribtion_fail" dangerouslySetInnerHTML={{ __html: message }} />
            default:
              return (
                <form
                  onSubmit={() => {
                    event.preventDefault()

                    subscribe({
                      EMAIL: emailRef.current.value,
                    })
                  }}
                >
                  <input className="subscribtion__input" placeholder="Enter your email..." type="email" ref={emailRef} />
                  <input className="subscribtion__button" type="submit" value="Sign up for email updates" />
                </form>
              )
          }
        }}
      />
      <style jsx>{`
.subscribtion {
  text-align: center;
  width: 433px;
  margin: 40px auto;
}
.subscribtion__input  {
  padding: 10px;
  margin-right: -10px;
  outline: none;
  width: 60%;
  color:  #a5a5a5;
  font-weight: bold;
  font-style: italic;
  vertical-align: middle;
  border: 1px solid #e6e6e6;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.subscribtion input::placeholder,
input::-webkit-input-placeholder,
input:-moz-placeholder,
input:-ms-input-placeholder
 {
  color: #999;
  font-weight: normal;
  font-style: italic;
}
.subscribtion__button {
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0 #ffd5d5;
  outline: none;
  padding: 10px;
  border: none;
  background: #f86d70;
  color: #fff;
}
.subscribtion__button:hover {
  background: #6c63ff;
  color: white;
  transition: 1s;
}
.subscribtion_message span {
  padding: 10px;
  color: #fff;
  font-weight: bold;
}
@media screen and (max-width: 414px) {
.subscribtion {
text-align: center;
width: 100%;
margin: 40px auto;
}
.subscribtion__input  {
width: 50%;
}
}
`}</style>
    </div>
  )
}
function timeAgo(pastDate) {
  pastDate = new Date(pastDate * 1000);
  var today = new Date();
  var todaySeconds = Math.round((today - pastDate) / 1000);
  var todayMinutes = Math.round(todaySeconds / 60);
  var todayHours = ((todayMinutes / 60) % 1) * 10 < 5 ? Math.floor(todayMinutes / 60) : Math.ceil(todayMinutes / 60);
  var todayDays = ((todayHours / 24) % 1) * 10 < 5 ? Math.floor(todayHours / 24) : Math.ceil(todayHours / 24);

  if (today >= pastDate) {
    return `Expired`;
  }
  if (-todayDays > 1) {
    return `Ends in ${-todayDays} days`;
  }
  if (-todayDays === 1) {
    return `Ends in ${-todayHours} hours`;
  }
  if (todayHours < 60 && todayMinutes !== 0) {
    return `Ends in ${todayMinutes} minutes`;
  }
  if (todayMinutes < 1) {
    return `Ends in ${todaySeconds} seconds`;
  }
}

