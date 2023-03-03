function ProjectLinkWithLogo(props) {
  if(!props.logo || !props.link)
    return null;

  return(
    <a className="projectLinkWithLogo" href={props.link}> <img src={props.logo}/> </a>
  );
}


function Project(props) {

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

      { props.projectImageLink !== undefined && <img className="projectImage" src={props.projectImageLink} /> }

      <h3 className="projectName">
        <a href={props.projectNameLink}>{props.projectName}</a>
        { props.githubLink !== undefined && <ProjectLinkWithLogo logo="github-logo.png" link={props.githubLink} /> }
        { props.firefoxLink !== undefined && <ProjectLinkWithLogo logo="firefox-logo.png" link={props.firefoxLink} /> }
        { props.figmaLink !== undefined && <ProjectLinkWithLogo logo="figma-logo.webp" link={props.figmaLink} /> }
      </h3>

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
        <a href="https://www.linkedin.com/in/noahreppert/">LinkedIn</a>
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
          projectImageLink = "https://github.com/NoahR02/odin-ecs/raw/main/repo_images/ecs-readme.svg"
          projectName = "Odin ECS"
          projectNameLink = "https://github.com/NoahR02/odin-ecs"
          projectDescription = "An Entity Component System that can dynamically add functionality to objects in my game. Odin ECS doesn’t rely on bit masks, so I can have an unlimited* amount of component types."
          githubLink = "https://github.com/NoahR02/odin-ecs"
          projectTech = {
            [
              "Odin",
              "Entity Component System"
            ]
          }
        />

        <Project 
          projectImageLink = "island-generator.png"
          projectName = "Island Generator"
          projectNameLink = "https://github.com/odin-lang/examples/blob/master/math/noise/draw_texture/noise.odin"
          projectDescription = "Island generator that uses OpenSimplex Noise and gradient points to generate unique terrain."
          githubLink = "https://github.com/odin-lang/examples/blob/master/math/noise/draw_texture/noise.odin"
          projectTech = {
            [
              "Odin",
              "OpenSimplex Noise",
              "OpenGL",
              "GLSL",
              "Git"
            ]
          }
        />

        <Project 
          projectImageLink = "calorietracker.png"
          projectName = "Calorie Tracker"
          projectNameLink = "https://github.com/NoahR02/calorie-tracker"
          projectDescription = "A fully fledged calorie tracker that allows you to track your food and weight. Integrated with the USDA FoodData Central API for the best food results!"
          githubLink = "https://github.com/NoahR02/calorie-tracker"
          figmaLink = "https://www.figma.com/file/gNLtbyZgynOxFP4hJWGdkx/Calorie-Counter?node-id=0%3A1"
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
          projectImageLink = "game-framework.png"
          projectName = "Game Framework"
          projectNameLink = "https://github.com/NoahR02/game-framework"
          projectDescription = "A 2D game framework that is capable of basic rendering, physics, and sound."
          githubLink = "https://github.com/NoahR02/game-framework"
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
          projectNameLink = "https://addons.mozilla.org/en-US/firefox/addon/copy-element-text/"
          projectDescription = "Adds a menu to the context menu, which will copy an element’s text content. Useful for copying a link’s text content."
          githubLink = "https://github.com/NoahR02/copy-element-text"
          firefoxLink = "https://addons.mozilla.org/en-US/firefox/addon/copy-element-text/"
          projectTech = {
            [ "JavaScript" ]
          }

        />
        
        
      </section>
      
    </main>
  )
}
