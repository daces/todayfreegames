import Head from 'next/head'
import React, { createRef , useEffect} from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import JSONdata from "./hellodata.json"
import { Img } from 'react-progressive-loader'


export default function Home() {
  
  const handleScroll = () => {}
  useEffect(() => {
      window.addEventListener('scroll', fall);
    });
  
  return (
    <div className="container">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652.4 323.43" id="star"><g transform="translate(-616 -378.8)"><path d="M513.31,144.22l4,4,4-4-4-7.431-4,7.431" transform="translate(510.69 271.211)" fill="#fff252"/><path d="M618.91,152.22l4,4,4-4-4-4-4,4" transform="translate(612 378)" fill="#fff252"/><path d="M688.01,251.03l4,4,4-4-4-4-4,4" transform="translate(495.99 384.97)" fill="#fff252"/><path d="M59.5,222.03l-10.6-10.6,10.6-10.61,10.6,10.61-10.6,10.5" transform="translate(1103.1 361.97)" fill="#fff252"/><path d="M180.15,203.18l-1.8-3.845-6.086,2.845,3.86,4.97,4.03-3.97" transform="translate(523.85 272.665)" fill="#fff252"/><path d="M131.22,270.68l1.49,1.51-.08,9.5-1.51,1.49-1.49-1.51.08-9.5,1.51-1.49" transform="translate(612 353.02)" fill="#fff252"/><path d="M126.48,250.37l9.4.07,1.49,1.52-1.51,1.48-9.4-.07-1.49-1.51,1.51-1.49" transform="translate(612 378)" fill="#fff252"/><path d="M239.91,324.23l4-4-4-4-4,4" transform="translate(612 378)" fill="#fff252"/><line x2="4" y2="4" transform="translate(847.91 698.22)" fill="#fff252"/><path d="M220.24,240l10.51,10.68L220.07,261.2l-10.52-10.68,10.69-10.42" transform="translate(658.177 388.405) rotate(-3)" fill="#fff252"/><path d="M440.24,240l10.51,10.68-10.51,18.2-10.69-18.36,10.69-10.42" transform="translate(642.45 424)" fill="#fff252"/><path d="M220.24,0l10.51,10.68L220.07,21.2,209.55,10.52,220.24.1" transform="translate(633.25 378.8)" fill="#fff252"/><path d="M220.24,240l18.51,10.52-12.127,17.156L209.55,250.52l10.69-10.42" transform="translate(441.25 176)" fill="#fff252"/><path d="M239.91,324.23l4-4-4-4-4,4" transform="translate(380.09 203.77)" fill="#fff252"/><path d="M239.91,324.23l1.6-4-1.6-4-1.81,4" transform="translate(510.49 227.77)" fill="#fff252"/><path d="M220.24,240l10.51,10.68L220.07,261.2l-10.52-10.68,10.69-10.42" transform="translate(466.177 301.265) rotate(-3)" fill="#fff252"/><path d="M131.22,270.68l1.49,1.51-.08,9.5-1.51,1.49-1.49-1.51.08-9.5,1.51-1.49" transform="translate(646.63 153.32)" fill="#fff252"/><path d="M126.48,250.37l9.4.07,1.49,1.52-1.51,1.48-9.4-.07-1.49-1.51,1.51-1.49" transform="translate(646.63 178.3)" fill="#fff252"/><path d="M131.22,270.68l1.49,1.51-.08,9.5-1.51,1.49-1.49-1.51.08-9.5,1.51-1.49" transform="translate(742.63 209.32)" fill="#fff252"/><path d="M126.48,250.37l9.4.07,1.49,1.52-1.51,1.48-9.4-.07-1.49-1.51,1.51-1.49" transform="translate(742.63 234.3)" fill="#fff252"/><path d="M220.24,0,228.1,11.313,220.07,21.2,210.644,7.019,220.24.1" transform="translate(763.901 496)" fill="#fff252"/><path d="M440.24,240l10.51,10.68-10.51,18.2-10.69-18.36,10.69-10.42" transform="matrix(-0.998, -0.07, 0.07, -0.998, 1560.91, 733.379)" fill="#fff252"/><path d="M239.91,324.23l4-4-4-4-4,4" transform="translate(828.09 223.77)" fill="#fff252"/><line x2="4" y2="4" transform="translate(1064 543.99)" fill="#fff252"/><path d="M131.22,270.68l1.49,1.51-.08,9.5-1.51,1.49-1.49-1.51.08-9.5,1.51-1.49" transform="translate(1131.03 324.82)" fill="#fff252"/><path d="M126.48,250.37l9.4.07,1.49,1.52-1.51,1.48-9.4-.07-1.49-1.51,1.51-1.49" transform="translate(1131.03 349.8)" fill="#fff252"/><path d="M180.15,203.18l-1.8-3.845-6.086,2.845,3.86,4.97,4.03-3.97" transform="translate(939.85 208.665)" fill="#fff252"/><path d="M239.91,324.23l1.6-4-1.6-4-1.81,4" transform="translate(926.49 163.77)" fill="#fff252"/><path d="M513.428,102.68l.748,1.555-.04,9.784-.758,1.535L512.63,114l.04-9.784.758-1.535" transform="translate(440.37 332.447)" fill="#fff252"/><path d="M131.22,270.68l1.49,1.51-.08,9.5-1.51,1.49-1.49-1.51.08-9.5,1.51-1.49" transform="translate(667.792 484.816) rotate(-47)" fill="#fff252"/><path d="M126.48,250.37l9.4.07,1.49,1.52-1.51,1.48-9.4-.07-1.49-1.51,1.51-1.49" transform="translate(686.061 501.852) rotate(-47)" fill="#fff252"/></g></svg>
     <main>

    <p></p>
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
              <div className="logo__title"><div className="logo__title">Today<span>free</span>games</div>
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
                    className="item__image"
                    src={item.image}
                    alt={item.title}
                    aspectRatio={0.4}
                    loadOnScreen
                  />
                </div>
                <div className="pull-right">
                  <div className="item__inner">
                    <p className="item__ends mb-5" key={`ends${index}`}>{timeAgo(item.ends)}</p>
                    <div className="mb-5"><a className="item__title mb-5" key={`title${index}`} href={item.href}><h3>{item.title}</h3></a></div>
                    <div className="item__info mb-5">
                      <span className="item__price" key={`price${index}`}>{item.price}</span>
                      <span className="item__info_price-before" key={`priceb${index}`}>{item.priceBefore}</span>
                      <span key={`merchantLink${index}`}>{item.merchantLink}</span>
                    </div>
                    <div className="item__description mb-5">
                      <p className="mb-5">{item.description}</p>
                      <p className="item__forever mb-5">Keep forever</p>
                    </div>
                  </div>
                </div>
              <div className="item__button t-a-r clear-fix ">
                <a className="item__link item__link_red border-r10" key={`href${index}`} href={item.href}>
                  {`${timeAgo(item.ends) === "Expired" ? "EXPIRED" : "Get game"}`}</a>
              </div>
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
html {
  box-sizing: border-box;
}
  body {
  font-size: 16px;
  background: linear-gradient(90deg, #F4D35E, #EE964B);
  font-family: 'Courier New', Courier, monospace;
  color: #3f3d56;
}
a {
  text-decoration: none;
  color: #3f3d56;
  font-size: 1rem;
}
h2 {
  font-size: 1.563rem ;
}
h3 {
  font-size: 1.953rem ;
  font-family: monospace;
}
#star {
  width: 100%;
  position: fixed;
  top: 62px;
  opacity: 0.8;
}
.star {
  position: absolute;
  top: 62px;
  opacity: 0.8;
}
.star__left-1 {
  top: 100%;
}
.star__left-2 {
  top: 150%;
  right: 0;
}
.star__left-3 {
  top: 200%;
  left: 3%;
}
.star__left-4 {
  top: 300%;
  right: 3%
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
  top: 72%;
}
.logo__title {
  text-transform: uppercase;
  font-family: monospace;
  background: #3f3d56;
  display: inline-block;
  border-radius: 10px;
  font-size: 3.052rem;
  font-weight: bold;
  color: #fff;
  padding: 5px;
}
.logo__title span {
  color: #3f3d56;
  margin: 0 5px;
  padding: 0 5px;
  background: #ffffff;
  border-radius: 10px;
}
.logo__description {
  font-size: 1.563rem;
}
.box {
  font-family: Helvetica Neue,Arial,Lucida Grande,sans-serif;
  transform: skew(0, 3deg);
  position: relative;
  box-shadow: 4px 2px 7px 0 #F95738;
  background: #fdfdfd;
  padding: 10px;
  border-radius: 30px;
  margin: 40px 0;
}
.box__inner {
  padding: 15px;
  transform: skew(0, -3deg);
}
.item__inner {
  padding-left: 10px;
}
.item__image {
  padding: 20px;
  padding-bottom: 100%;
}
.item__image img{
  border-radius: 50%;
  padding: 5px;
  box-shadow: 1px 1px 5px 0 #c1c1c1;
  margin: 20px auto ;
  width: 114px !important;
  height: 114px !important;
  left: 0 !important;
  right: 0 !important;
  height: 100%;
}
.item__info span {
  margin-right: 10px;
}
.item__title {
  font-size: 1.2em;
  font-weight: bold;
  color: #3f3d56;
  text-decoration: none;
}
.item__ends {
  color: #3f3d56;
  text-align: right;
  margin-right: 20px;
  font-style: italic;
  font-size: 0.8rem;
}
.item__price {
  font-size: 20px;
  color: #F95738;
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
  background:  #F95738;
  box-shadow: 0px 0px 5px 0 #ffd5d5;
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}
.item__link:hover {
  background: #3f3d56;
  box-shadow: 0px 0px 5px 0 #3f3d56;
  color: white;
  transition: 1s;
}
.item__expired {
  filter: grayscale(100%);
}
.item__forever {
  text-align: right;
  margin-right: 10px;
}
.subscribtion form {
  z-index: 12523623 !important;
  position: absolute;
  width: 100%;
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
  background: #F95738;
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
  color: #fff;
  font-size: 0.8rem;
  border-top: 4px solid #F95738;
  margin-top: 40px;
  padding: 20px;
}
.footer li{
  display: inline-block;
  margin-right: 10px;
  margin: 2px;
}
.footer li:first-child {
  display: block;
}
.footer li a{
  color: #fff;
  padding: 3px;
  font-size: 0.8rem;
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
.t-a-c {
  text-align: center;
}
.border-r10 {
  border-radius: 10px;
}
.mb-5 {
  margin-bottom: 10px;
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
    font-size: 1.563rem;
  }
  .logo__description {
    font-size: 1.25rem ;
  }
  .deals{
    margin: 0;
    width: 100%;
  }
  .box {
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
    padding: 20px;
  }
  .item__image img{
    margin: 5px auto ;
  }
  .item__forever {
    text-align: center;
    margin-right: 0;
  }
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
.fall {
  -webkit-animation: fallingStar 5s ease-in-out forwards;
  animation: fallingStar 5s ease-in-out forwards;
}
.rise {
  -webkit-animation: riseStar 5s ease-in-out ;
  animation: riseStar 5s ease-in-out ;
}
@keyframes fallingStar {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(10%);
  }
}
@keyframes riseStar {
  from {
    transform: translateY(10%);
  }
  to {
    transform: translateY(0%);
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
       <h1 className="logo__description">A simple website to never miss a free game deal</h1>
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
  position: relative;
  margin: 25px auto 90px auto;
}
.subscribtion__input  {
  padding: 10px;
  margin-right: -10px;
  outline: none;
  width: 50%;
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
  box-shadow: 0px 0px 5px 0 #F95738;
  outline: none;
  padding: 10px;
  border: none;
  background: #F95738;
  color: #fff;
}
.subscribtion__button:hover {
  background: #3f3d56;
  box-shadow: 0px 0px 5px 0 #3f3d56;
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
  position: relative;
  margin: 25px auto 90px auto;
}
.subscribtion__input  {
width: 45%;
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
  var timelimit = "Lasts";

  if (today >= pastDate) {
    return `Expired`;
  }
  if (-todayDays > 1) {
    return `${timelimit} ${-todayDays} days`;
  }
  if (-todayDays === 1) {
    return `${timelimit} ${-todayHours} hours`;
  }
  if (todayHours < 60 && todayMinutes !== 0) {
    return `${timelimit} ${todayMinutes} minutes`;
  }
  if (todayMinutes < 1) {
    return `${timelimit} ${todaySeconds} seconds`;
  }
}

var scroll = true;
let timerId;
function fall(e) {
  console.log( timerId );
  if( !timerId ){
    if( scroll = true ){
      window.requestAnimationFrame(function() {
        scroll = false;
        document.querySelector("#star").classList.remove("rise");
        document.querySelector("#star").classList.add("fall");
      });
    }
    timerId = setTimeout( function(){
        document.querySelector("#star").classList.remove("fall");
        document.querySelector("#star").classList.add("rise");
        setTimeout( function(){
          scroll = true;
          timerId = undefined;
        },5000);
      },5000);
    }
}