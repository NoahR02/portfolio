import Head from 'next/head'

export default function Home() {
  return (
    <main id="portfolioHome">
      
      <nav id="nav">
        <h2 id="portfolioName">Noah Reppert</h2>
        <a href="mailto:noahreppert95@gmail.com">Email</a>
        <span> | </span>
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <span> | </span>
        <a href="http://github.com/NoahR02">Github</a>
        <span> | </span>
        <a href="tel:484-636-4771">484-636-4771</a>
        <span> | </span>
        <a href="/">Resume</a>
        
        <p id="portfolioDescription">I’m a programmer with an interest for full stack web development. My passion for programming originated from my desire to create products.</p>
      </nav>
      
      <section id="projects">
        
        <h2 id="projectsHeading">Projects:</h2>
      
        <div className="project">
          
          <h3 className="projectName"><a href="https://calorietracker.site">Calorie Tracker</a></h3>
          
          <div className="projectLinks">
            <a href="https://github.com/NoahR02/calorie-tracker"> Github</a>
            <span> | </span>
            <a href="https://calorietracker.site"> Live Website</a>
            <span> | </span>
            <a href="https://www.figma.com/file/gNLtbyZgynOxFP4hJWGdkx/Calorie-Counter?node-id=0%3A1"> Figma Designs</a>
          </div>
          
          <p className="projectDescription">
          A fully fledged calorie tracker that allows you to track your food, weight, and mood. Integrated with the USDA FoodData Central API for the best food results!
          </p>
          
          <div className="projectTech">
            <span className="tag">React.js</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Express.js</span>
            <span className="tag">FoodData Central API</span>
            <span className="tag">Node.js</span>
         
          </div>
        
        </div>
        
        <div className="project">
          
          <h3 className="projectName"><a href="http://calorietracker.site">YouTube MP3 Downloader</a></h3>
          
          <div className="projectLinks">
            <a> Private Source Code</a>
          </div>
          
          <p className="projectDescription">
            A mp3 downloader that utilities cheerio.js to web scrape search results directly from YouTube and download any video from the search results in a mp3 format.
          </p>
          
          <div className="projectTech">
            <span className="tag">Express.js</span>
            <span className="tag">EJS</span>
            <span className="tag">Cheerio.js</span>
            <span className="tag">Node.js</span>
          </div>
        
        </div>
        
        
      </section>
      
      <section id="hobbies">
        <h2 id="hobbiesHeading">Hobbies:</h2>
        
        <div className="hobby">
          <h3 className="hobbyHeading">Drawing</h3>
          <p className="hobbyDescription">In my free time or whenever I'm feeling creative I like to draw.</p>
        </div>
        
        <div className="hobby">
          <h3 className="hobbyHeading">PC Gaming</h3>
          <p className="hobbyDescription">When I'm done everything that needs to be done I like to sit down and play some games, mostly FPS games like CSGO, Call of Duty, and more.</p>
        </div>
        
      </section>
      
      
      <style jsx>{`
        
        #portfolioHome {
          min-height: 100vh;
          height: auto;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items:center;
          margin: 5em 0;
          margin-left:3vw;
        }
        
        #portfolioHome #nav, #portfolioHome #projects, #portfolioHome #hobbies {
          width: 35vw;
          margin-bottom: 1em;
        }
        
        #nav a {
         font-size: 1.3em;
         margin-right:0.3em;
        }
        
        #nav #portfolioName {
          font-size:3em;
          margin-bottom: 0.3em;
        }
        
        #nav #portfolioDescription {
          font-size:1.5em;
          opacity: 0.7;
        }
        
        
        #projects #projectsHeading, #portfolioHome #hobbiesHeading {
          font-size: 2em;
        }
        
        #projects .project:first-of-type {
          margin-top: 2em;
        }
        
        #projects .project:last-of-type {
          margin-bottom: 2em;
        }
        
        #projects .project {
          margin : 4em 0;
        }
        
        .project .projectDescription {
          margin: 1.5em 0;
          color:#282828;
          width: 70%;
        }
        
        .project .projectName a {
          font-size:1.2em;
          font-weight:500;
          text-decoration: none;
          color:#1d1d1d;
        }
        
        .project a {
          text-decoration : none;
          font-size:1.1em;
        }
        
        .project .projectTech {
          display: flex;
          flex-wrap:wrap;
          width: 80%;
        }
        
        #hobbies .hobby:first-of-type {
          margin-top:2em;
        }
        
        #hobbies .hobby {
          margin-top:3em;
        }
        span {
          font-size:1.2em;
        }
        .tag {
          background: #f2f2f2;
          border-radius: 15px;
          padding:7px 20px;
          margin-right:1em;
          margin-bottom:1em;
          font-size: 0.8em;
          width: auto;
        }
        
        @media screen and (max-width: 1200px) {
          #portfolioHome #nav, #portfolioHome #projects, #portfolioHome #hobbies {
            width: 80vw;
            margin-bottom: 1em;
          }
        }
      `}</style>
      
    </main>
  )
}
