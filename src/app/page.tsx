function ProjectLinkWithLogo(props: any) {
    if(!props.logo || !props.link)
        return null;

    return(
        <a className="projectLinkWithLogo" href={props.link}> <img className="max-w-[25px]" src={props.logo}/> </a>
    );
}


function Project(props: any) {

    return(
        <div className="flex flex-col max-w-[400px] h-auto shadow-2xl border-red-400 rounded">

            { props.projectImageLink !== undefined && <img className="w-auto h-[250px] object-cover" src={props.projectImageLink} /> }

            <div className="p-8 bg-gray-200 text-black">
                <h3 className="flex align-middle items-center mt-4">
                    <a className="text-h3 mr-5 font-[500] underline" href={props.projectNameLink}>{props.projectName}</a>
                    <div className="flex space-x-3">
                        {props.githubLink !== undefined &&
                            <ProjectLinkWithLogo logo="github-logo.png" link={props.githubLink}/>}
                        {props.firefoxLink !== undefined &&
                            <ProjectLinkWithLogo logo="firefox-logo.png" link={props.firefoxLink}/>}
                        {props.figmaLink !== undefined &&
                            <ProjectLinkWithLogo logo="figma-logo.webp" link={props.figmaLink}/>}
                    </div>
                </h3>

                <p className="mt-4 min-h-[100px]">{props.projectDescription}</p>
            </div>

        </div>
    );
}

export default function Home() {
    return (
        <main className="md:container ml-auto mr-auto p-8">

            <div id="">
                <h2 className="text-h1"><span className="font-[100] text-gray-600">Hi,</span> I'm Noah Reppert.</h2>

                <p className="text-h3 mb-6">
                    I like to create software based on things that interest me or that improve my daily life.
                </p>

            </div>

            <h2 className="text-h3 w-[100%] mt-8 border-b-2 border-black mb-8">PROJECTS</h2>
            <section id="projects" className="flex [row-gap:4rem] [column-gap:4rem] flex-wrap">
                <Project
                    projectImageLink="cookies-only.png"
                    projectName="Cookies Only"
                    projectNameLink="https://cookies-only.com/"
                    projectDescription="A site about popular cookie recipes and their properties."
                    githubLink="https://github.com/NoahR02/cookies-only"
                />

                <Project
                    projectImageLink="island-generator.png"
                    projectName="Island Generator"
                    projectNameLink="https://github.com/odin-lang/examples/blob/master/math/noise/draw_texture/noise.odin"
                    projectDescription="Island generator that uses OpenSimplex Noise and gradient points to generate unique terrain."
                    githubLink="https://github.com/odin-lang/examples/blob/master/math/noise/draw_texture/noise.odin"
                />

                <Project
                    projectImageLink="calorietracker.png"
                    projectName="Calorie Tracker"
                    projectNameLink="https://github.com/NoahR02/calorie-tracker"
                    projectDescription="A calorie tracker that allows you to track your food and weight. It integrates with the USDA FoodData Central API."
                    githubLink="https://github.com/NoahR02/calorie-tracker"
                    figmaLink="https://www.figma.com/file/gNLtbyZgynOxFP4hJWGdkx/Calorie-Counter?node-id=0%3A1"
                />

                <Project
                    projectImageLink="https://github.com/NoahR02/odin-ecs/raw/main/repo_images/ecs-readme.svg"
                    projectName="Odin ECS"
                    projectNameLink="https://github.com/NoahR02/odin-ecs"
                    projectDescription="An Entity Component System that can dynamically add functionality to objects in my game."
                    githubLink="https://github.com/NoahR02/odin-ecs"
                />

                <Project
                    projectImageLink="game-framework.png"
                    projectName="Game Framework"
                    projectNameLink="https://github.com/NoahR02/game-framework"
                    projectDescription="A 2D game framework that is capable of basic rendering, physics, and sound."
                    githubLink="https://github.com/NoahR02/game-framework"
                />


            </section>

            <h2 className="text-h3 w-[100%] mt-8 border-b-2 border-black mb-8">ARTICLES</h2>
            <section id="articles" className="bg-yellow-300 font-bold flex items-center justify-center min-h-12">
                COMING SOON!
            </section>

        </main>
    )
}
