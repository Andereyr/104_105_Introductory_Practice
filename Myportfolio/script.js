const portfolioData = {
    profile: {
        name: "Андрей",
        profession: "Студент",
        age: 19
    },

projects: [
    {
        id: 1,
        title: "Сайт-визитка",
        category: "Веб",
        likes: 120,
        technologies: ["HTML", "CSS"]
    },
    {
        id: 2,
        title: "Интернет-магазин",
        category: "Веб",
        likes: 180,
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 3,
        title: "Калькулятор",
        category: "Веб",
        likes: 95,
        technologies: ["HTML", "JavaScript"]
    },
    {
        id: 4,
        title: "Страница университета",
        category: "Веб",
        likes: 150,
        technologies: ["HTML", "CSS"]
    },
    {
        id: 5,
        title: "Сайт о путешествиях",
        category: "Веб",
        likes: 75,
        technologies: ["HTML", "CSS", "JavaScript"]
    }
],


    preferences: new Map([
        ["theme", "dark"],
        ["language", "ru"]
    ])
};

const profileKeys = Object.keys(portfolioData.profile);

console.log(profileKeys);

const popularProjects = portfolioData.projects
    .filter(project => project.likes > 100)
    .map(project => `Проект: ${project.title} из категории ${project.category}`);

console.log(popularProjects);

let totalLikes = 0;

for (const project of portfolioData.projects) {
    totalLikes = totalLikes + project.likes;
}

console.log("Общее число лайков: " + totalLikes);

const allTechnologies = new Set();

for (const project of portfolioData.projects) {
    for (const technology of project.technologies) {
        allTechnologies.add(technology);
    }
}

console.log(allTechnologies);

const galleryContainer = document.querySelector(".projects-gallery");

portfolioData.projects.forEach(project => {
    const projectCard = document.createElement("div");
    const projectTitle = document.createElement("h3");
    const projectCategory = document.createElement("p");

    projectCard.classList.add("project-card");
    projectTitle.classList.add("project-title");

    projectTitle.textContent = project.title;
    projectCategory.textContent = "Категория: " + project.category;

    projectCard.append(projectTitle);
    projectCard.append(projectCategory);

    galleryContainer.append(projectCard);
});

