const projects = [
    {
        id: 1,
        image:'test.jpeg',
        category: 'javascript',
        title: 'short quiz',
        github: 'https://github.com/olajosh84/quiz.git',
        view: 'https://olajeksquiz.netlify.app',
        stack: "html + css + javascript",
    },
    {
        id: 2,
        image:'goal.png',
        category: 'javascript',
        title: 'goals tracker',
        github: 'https://github.com/olajosh84/goals-tracker.git',
        view: 'https://olajeksgoalstracker.netlify.app',
        stack: "html + css + javascript",
    },
    {
        id: 3,
        image:'banner.jpeg',
        category: 'javascript',
        title: 'demo responsive website',
        github: 'https://github.com/olajosh84/demo-website.git',
        view: 'https://olajeksdemowebsite.netlify.app',
        stack: "html + css + javascript",
    },
    {
        id: 4,
        image:'panel.jpeg',
        category: 'react',
        title: 'admin panel',
        github: 'https://github.com/olajosh84/react-admin-panel.git',
        view: 'https://olajeksadminpanel.netlify.app',
        stack: "html + css + javascript + react",
    },
    {
        id: 5,
        image:'chat.png',
        category: 'MERN',
        title: 'chat app',
        github: 'https://github.com/olajosh84/chat-app-with-MERN.git',
        view: 'https://olajekschat.onrender.com',
        stack: "html + css + bootstrap + mern",
    },
    {
        id: 6,
        image:'auth.jpeg',
        category: 'MERN',
        title: 'user authentication',
        github: 'https://github.com/olajosh84/website-with-Tailwindcss-and-MERN.git',
        view: 'https://olajekswebauth.onrender.com',
        stack: "html + css + tailwind + redux + mern"
    },
    
];

const projectsContainer = document.querySelector('.projects');
/*const projectCategory = document.querySelector("#project-category");
const projectCateogories = ['all', ...new Set(projects.map(project => project.category))];
for(let category of projectCateogories){
   projectCategory.innerHTML += `<option value=${category}>${category}</option>`
}

projectCategory.addEventListener("change", function(){
    let category = this.value;
    let filteredProjects;
    if(category === 'all'){
        filteredProjects = projects;
    }else{
        filteredProjects = projects.filter(project => project.category === category);
    }
    
    showProjects(filteredProjects);

})*/


function showProjects(allProjects){
    const featuredProjects = allProjects.map((project) => {
    const {id, image, category, title, github, view, stack} = project;
    return `
        <div class="featured-project animate">
            <img src="./assets/images/${image}" alt="">
            <div class="project-info">
                <h2>${title}</h2>
                <div class="project-btns">
                   <a href=${view} title='View App' target='_blank'><button class="web-btn">
                        <i class="fas fa-globe"></i>
                        view
                    </button></a>
                     <a href=${github} title='Github Repository' target='_blank'><button class="git-btn">
                       <i class="fab fa-github"></i>
                        github
                    </button></a>
                </div>
                <div class="tech-stack">${stack}</div>
            </div>
        </div>
    `
    }).join("");
    projectsContainer.innerHTML = featuredProjects;
}

window.addEventListener("DOMContentLoaded", showProjects(projects));


