document.addEventListener("DOMContentLoaded", function () {
  // Dynamic header animation
  const headerTitle = document.getElementById("header-title");
  let text = "Parth Barahate - Portfolio";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      headerTitle.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Highlight active navigation link based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });

  // Fade-in effect for sections
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Once animation is triggered, we can stop observing
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    observer.observe(section);
  });

  // Experience data
  const experienceData = [
    {
      title: "ONC",
      image: "placeholder.jpg",
      role: "Software Developement Intern (March 2025 - May 2025)",
      description: [
        "Developed dynamic frontend interfaces with JavaScript and React.js, optimizing user experience and performance. Worked on backend services using WordPress (PHP) and custom JavaScript to support API integrations and data workflows. Implemented core APIs for authentication, search, and user feed, ensuring secure and efficient data exchange. Integrated SQL databases for user and content management, writing optimized queries for speed and security. Contributed to user authentication flows, including login and session handling, enhancing app security. Collaborated with cross-functional teams in an Agile environment, participating in code reviews, testing, and end-to-end feature delivery.",
      ],
    },
    {
      title: "Microsoft Future Ready Talent Program",
      image: "microsoft.jpg",
      role: "Software Developer Intern (Jan 2022 - April 2022)",
      description: [
        "During my internship, I had the opportunity to design and deploy web applications on Microsoft Azure. I focused on ensuring scalability and maintainability by applying test-driven development practices. I was tasked with building automated solutions using Azure services, specifically for embedding and prompt engineering, which significantly enhanced the efficiency of the systems I worked on. Additionally, I contributed to setting up CI/CD pipelines, ensuring the applications were reliable and stable. By utilizing Docker and Kubernetes, I streamlined the deployment process and improved the scalability of the applications, reducing maintenance efforts. My internship experience at Microsoft honed my cloud deployment skills and deepened my understanding of scalable, automated systems.",
      ],
    },
    {
      title: "Commous Inc.",
      image: "commous.jpg",
      role: "Software Developer Intern (July 2021 - Dec 2021)",
      description: [
        "At Commous, I developed robust RESTful APIs using Node.js and Express.js to ensure seamless data flow and integration with existing systems. My role involved enhancing server-side logic to improve the efficiency of data processing, allowing for smooth communication between various services. I leveraged Docker to organize and manage backend services, which enabled the system to handle a larger user base and scale more effectively. This experience provided me with a deeper understanding of backend architecture and how to integrate various technologies for optimal performance and reliability. I also contributed to automating processes, which significantly improved system reliability and user experience. Additionally, I collaborated closely with front-end developers to ensure that the APIs met their needs, facilitating a more cohesive development process.",
      ],
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

  // Projects data
  const projectList = [
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
      description:
        "I designed and developed a Snippet Application using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to securely share and bookmark code snippets. I implemented user authentication and data security features to ensure that user information was protected. Additionally, I integrated automated test cases to maintain the platform's stability and security. By utilizing APIs for data retrieval and submission, I was able to create a seamless user experience across different platforms. This project helped me refine my skills in full-stack development, focusing on both frontend and backend technologies.",
      repo: "https://github.com/parthob12/Snippet-Application",
    },
    {
      title: "Credit Score Classification",
      image: "credit-score.jpg",
      description:
        "For this project, I developed a credit score classification system using machine learning algorithms such as Logistic Regression, Decision Trees, and Support Vector Machines. The goal of the system was to predict creditworthiness and assist in informed decision-making for financial institutions. I deployed the model using cloud-based data pipelines for scalability and integrated interpretability features to make the results more understandable. I designed unit and functional tests to ensure the model's reliability, helping enhance its application in real-world financial decision-making. This project strengthened my expertise in machine learning and model deployment.",
      repo: "https://github.com/parthob12/Credit-Score-Classification",
    },
    {
      title: "Online Retail Platform",
      image: "retail.jpg",
      description:
        "I developed a full-featured online retail platform using Python and Django, incorporating advanced security protocols for transactions and integrating payment gateways to ensure a seamless customer experience. The platform allowed for secure and efficient processing of customer orders and transactions. I also implemented automated testing suites to ensure the platform's reliability and incorporated microservices for optimized scalability and responsiveness. This project helped me improve my skills in full-stack web development, particularly in building secure and scalable e-commerce solutions.",
      repo: "https://github.com/parthob12/Digital-Commerce-Soln",
    },
  ];

  const projectContainer = document.getElementById("react-projects");
  projectList.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Make the entire card clickable
    card.addEventListener("click", (e) => {
      // Don't trigger card click if clicking the button
      if (!e.target.classList.contains("btn")) {
        window.open(project.repo, "_blank");
      }
    });

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const info = `
          <div class="project-info">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.repo}" target="_blank" class="btn">GitHub Repo</a>
          </div>
      `;

    card.appendChild(img);
    card.innerHTML += info;
    projectContainer.appendChild(card);
  });

  // Contact form handling
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalBtnText = submitBtn.innerHTML;

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Show loading state
    submitBtn.innerHTML =
      'Opening Email... <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    // Create mailto link with pre-filled information
    const mailtoLink = `mailto:parthbarahate221@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      contactForm.reset();
    }, 3000);
  });

  // Add animation class to section titles
  document.querySelectorAll("section h2").forEach((title) => {
    title.classList.add("animate-title");
  });

  // Create Intersection Observer for section titles
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Once animation is triggered, we can stop observing
          titleObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: "0px",
    }
  );

  // Start observing all section titles
  document.querySelectorAll("section h2").forEach((title) => {
    titleObserver.observe(title);
  });
});
