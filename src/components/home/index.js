import React from "react"
import "./style.css"
import Project from "../project"
import Navigation from "../navigation"

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <Navigation />
        <header className="header">
          <div className="title-one"><h1>Hello</h1></div>
          <div className="title-two"><h1>World!</h1></div>
        </header>

        <section className="portfolio-wrapper">
          <div className="portfolio-container-one">
            <Project
              title="Radio"
              objective="fetching API's and setting state in react"
              keyword="API, JavaScript, react"
              image="images/radio.jpg" />
          </div>
          <div className="portfolio-container-two">
            <Project
              title="FAQ"
              objective="expanding the view by toggeling classes in JavaScript"
              keyword="Html, CSS, JavaScript"
              image="images/FAQ.png" />
          </div>
          <div className="portfolio-container-three">
            <Project
              title="Clock"
              objective="Creating a clock using react"
              keyword="API, JavaScript, react"
              image="images/clock.png" />
          </div>
          <div className="portfolio-container-four">
            <Project
              title="Christmas Calendar"
              objective="group project creating a Christmas Calendar for Kivra"
              keyword="Html, CSS, JavaScript"
              image="images/group-calendar.png" />
          </div>
        </section>

        <footer className="footer">
          <div className="contact">
            <h4>Cecilia Wong</h4>
            <p>cissi.wong@gmail.com</p>
            <p>+46(0)762009902</p>
          </div>

          <div className="social-media">
            <a href="https://www.instagram.com/cissiwong/" target="_none">
              <img src="" alt="instagram icon" />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_none">
              <img src="" alt="linkedin icon" />
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Home
