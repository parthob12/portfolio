document.addEventListener("DOMContentLoaded", function () {
  // Dynamic header animation
  const headerTitle = document.getElementById("header-title");
  let text = "Parth Barahate - Porfolio";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      headerTitle.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Smooth scrolling for navigation
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Fade-in effect for sections
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    observer.observe(section);
  });

  // Hover effect on experience and project cards
  document
    .querySelectorAll(".experience-card, .project-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Driver Drowsiness Detection System",
      image: "drowsiness.jpg",
      description:
        "In this project, I developed a driver drowsiness detection system using deep learning models for real-time monitoring. The system employed facial recognition algorithms to detect signs of driver fatigue and alert them to prevent accidents. I implemented the model using Python, leveraging libraries such as OpenCV and TensorFlow for computer vision and machine learning tasks. The system was deployed in a test environment, where it successfully demonstrated its potential to improve road safety. This project enhanced my skills in deep learning, computer vision, and deploying machine learning models in real-world applications.",
      repo: "https://github.com/parthob12/DrowsinessDetectionSystem",
    },
    {
      title: "Snippet Application",
      image: "snippet.jpg",
      description: "Built a snippet-sharing app using the MERN stack.",
      repo: "https://github.com/parthob12/Snippet-Application",
    },
    {
      title: "Credit Score Classification",
      image: "credit-score.jpg",
      description: "Implemented ML models for credit score classification.",
      repo: "https://github.com/parthob12/Credit-Score-Classification",
    },
    {
      title: "Online Retail Platform",
      image: "retail.jpg",
      description: "Developed an e-commerce platform using Django.",
      repo: "https://github.com/parthob12/Digital-Commerce-Soln",
    },
  ];

  const projectContainer = document.getElementById("react-projects");
  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.style.backgroundImage = `url(${proj.image})`;

    card.innerHTML = `
          <div class="project-info">
              <h3>${proj.title}</h3>
              <a href="${proj.repo}" target="_blank">GitHub Repo</a>
          </div>
      `;

    projectContainer.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      title: "Microsoft Future Ready Talent Program",
      image: "microsoft.jpg",
      role: "Software Developer Intern (Jan 2022 - April 2022)",
      description: [
        "During my internship at Microsoft, I had the opportunity to design and deploy web applications on Microsoft Azure. I focused on ensuring scalability and maintainability by applying test-driven development practices. I was tasked with building automated solutions using Azure services, specifically for embedding and prompt engineering, which significantly enhanced the efficiency of the systems I worked on. Additionally, I contributed to setting up CI/CD pipelines, ensuring the applications were reliable and stable. By utilizing Docker and Kubernetes, I streamlined the deployment process and improved the scalability of the applications, reducing maintenance efforts. My internship experience at Microsoft honed my cloud deployment skills and deepened my understanding of scalable, automated systems.",
      ],
      // repo: "https://github.com/parth/microsoft",
    },
    {
      title: "Commous Inc.",
      image: "commous.jpg",
      role: "Software Developer Intern (July 2021 - Dec 2021)",
      description: [
        "At Commous, I developed RESTful APIs using Node.js and Express.js to ensure seamless data flow and integration with existing systems. My role involved improving server-side logic to enhance the efficiency of data processing, allowing for smooth communication between services. I leveraged Docker to organize and manage backend services, which helped the system handle a larger user base and scale more effectively. This experience gave me a deeper understanding of backend architecture and how to integrate various technologies for optimal performance. I also contributed to automating processes, which significantly improved system reliability and user experience.",
        ,
      ],
      // repo: "https://github.com/parth/commous",
    },
  ];

  const experienceContainer = document.querySelector(".experience-container");
  experienceData.forEach((exp) => {
    const card = document.createElement("div");
    card.classList.add("experience-card");
    card.style.backgroundImage = `url(${exp.image})`;

    const info = `
          <div class="experience-info">
              <h3>${exp.title}</h3>
              <p>${exp.role}</p>
              <ul>
                  ${exp.description.map((item) => `<li>${item}</li>`).join("")}
              </ul>
              
          </div>
      `;
    card.innerHTML = info;
    experienceContainer.appendChild(card);
  });
  //<a href="${exp.repo}" target="_blank">GitHub Repo</a>
  // Add animation for experience cards
  const experienceCards = document.querySelectorAll(".experience-card");
  experienceCards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    observer.observe(card);
  });
});
