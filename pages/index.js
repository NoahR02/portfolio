function Project(props) {

  const projectLinksRenderData = () => {
    let projectLinks = [];

    for(let [key, value] of Object.entries(props.projectLinks)) {
      projectLinks.push(<a key={key} href={value}> {key} </a>);
      projectLinks.push(<span key={value}> | </span>);
    }
  
    // Remove the extra |.
    projectLinks.pop();

    return projectLinks;
  };

  let projectLinks = projectLinksRenderData();


  const projectTechRenderData = () => {
  
    let projectTech = [];

    for(let tech of props.projectTech) {
      projectTech.push(<span key={tech} className="tag"> {tech} </span>);
    }

    return projectTech;
  }

  let projectTech = projectTechRenderData();

  return(
    <div className="project">

      <h3 className="projectName"><a href="https://calorietracker.site">{props.projectName}</a></h3>

      <div className="projectLinks"> { projectLinks } </div>

      <p className="projectDescription">{props.projectDescription}</p>

      <div className="projectTech">
        {projectTech}
      </div>

    </div>
        );
}

export default function Home() {
  return (
    <main id="portfolioHome">
      
      <nav id="nav">
        <h2 id="portfolioName">Noah Reppert</h2>
        <a href="mailto:noahreppert95@gmail.com">Email</a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/noah-reppert-8577a51a7/">LinkedIn</a>
        <span> | </span>
        <a href="http://github.com/NoahR02">Github</a>
        <span> | </span>
        <a href="tel:484-636-4771">484-636-4771</a>
        <span> | </span>
        <a href="/resume.pdf">Resume</a>
        
        <p id="portfolioDescription">I’m a programmer with an interest in full stack web development. My passion for programming originated from my desire to create products.</p>
      </nav>
      
      <section id="projects">

        <h2 id="projectsHeading">Projects:</h2>
      
        <Project 
          projectName = "Calorie Tracker"
          projectDescription = "A fully fledged calorie tracker that allows you to track your food and weight. Integrated with the USDA FoodData Central API for the best food results!"
          projectLinks = {
            {
              "Github" : "https://github.com/NoahR02/calorie-tracker",
              "Figma Designs": "https://www.figma.com/file/gNLtbyZgynOxFP4hJWGdkx/Calorie-Counter?node-id=0%3A1"
            }
          }
          projectTech = {
            [
              "React.js",
              "PostgreSQL",
              "Express.js",
              "FoodData Central API",
              "Node.js"
            ]
          }
          />

         <Project 
          projectName = "Game Framework"
          projectDescription = "A 2D game framework that is capable of basic rendering, physics, and sound."
          projectLinks = {
            {
              "Github" : "https://github.com/NoahR02/game-framework"           
            }
          }
          projectTech = {
            [
              "C++",
              "OpenGL",
              "OpenAL",
              "CMake",
              "GLSL"
            ]
          }
         />
        
        <Project 

          projectName = "Copy Element Text"
          projectDescription = "Adds a menu to the context menu, which will copy an element’s text content. Useful for copying a link’s text content."
          projectLinks = {
             {
              "Github" : "https://github.com/NoahR02/copy-element-text",
              "Firefox Extension" : "https://addons.mozilla.org/en-US/firefox/addon/copy-element-text/"
             } 
          }
          projectTech = {
            [ "JavaScript" ]
          }

        />


        <Project 
          projectName="Portfolio"
          projectDescription="A portfolio site(this website!) that is built with Next.js. If I decide to expand this website and add blogs then it'll be very easy with Next.js."
          projectLinks={ 
            {
              "Github" : "https://github.com/NoahR02/portfolio"
            }
          }
          projectTech={
            [
              "React.js",
              "Next.js",
              "SSR"
            ]
          }
        />
        
        
      </section>
      
      <section id="hobbies">
        <h2 id="hobbiesHeading">Hobbies:</h2>
        
        <div className="hobby">
          <h3 className="hobbyHeading">Drawing</h3>
          <p className="hobbyDescription">In my free time I like to draw portraits as it allows me to express my creativity.</p>
        </div>
        
        <div className="hobby">
          <h3 className="hobbyHeading">PC Gaming</h3>
          <p className="hobbyDescription">I like to play games, mostly FPS games like CSGO and Call of Duty.</p>
        </div>
        
      </section>
      
    </main>
  )
}
