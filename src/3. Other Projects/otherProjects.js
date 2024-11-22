import React, { useState, useEffect } from "react";
import "./otherProjects.css";

const projects = [
  {
    title: "To Do List",
    description:
      "A JavaScript-based to do list that simplifies task management with easy task addition, editing, and deletion. For enhanced productivity.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/jOJLLzv",
    alt: "To Do List Screenshot",
  },
  {
    title: "Number Validator",
    description:
      "The Number Validator provides a reliable tool for validating and formatting phone numbers according to specified criteria.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/ZEZVOgq",
    alt: "Number Validator Screenshot",
  },
  {
    title: "Roman Numeral Converter",
    description:
      "Effortlessly convert numeric values to Roman Numerals. Offering a handy tool for numerical representation in ancient Roman notation.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/VwNqjov",
    alt: "Roman Numeral Converter Screenshot",
  },
  {
    title: "Pokémon Search Engine",
    description:
      "Allows users to find detailed information about their favorite Pokémon. Including stats, types, and abilities. Enhancing their gaming experience with essential information.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/KKYbgKe",
    alt: "Pokémon Search Engine Screenshot",
  },
  {
    title: "Palindrome Checker",
    description:
      "Swiftly determines whether a given input string reads the same forwards and backwards, providing a handy tool for verifying palindrome sequences with ease.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/rNboLbQ",
    alt: "Palindrome Checker Screenshot",
  },
  {
    title: "Football Team Cards",
    description:
      "Displays detailed profiles of players and teams. Including statistics, achievements, and biographical information. Offering fans an immersive experience.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/pen/jOJwged",
    alt: "Football Team Cards Screenshot",
  },
  {
    title: "Date Formatter",
    description:
      "Streamlines the process of formatting dates according to user preferences, providing a versatile tool for converting date strings into various formats with ease and precision.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/RwdVMMR",
    alt: "Date Formatter Screenshot",
  },
  {
    title: "Cash Register Game",
    description:
      "Test your skills at efficiently handling transactions by calculating totals, providing change, and keeping track of inventory. With the register as a reliable tool for smooth retail operations.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/poBqEzK",
    alt: "Cash Register Game Screenshot",
  },
  {
    title: "Calorie Counter",
    description:
      "Enables users to track their daily food intake, calculate calories, and monitor nutritional goals, promoting healthier lifestyle choices through convenient and intuitive tracking features.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/qBvreMP",
    alt: "Calorie Counter Screenshot",
  },
  {
    title: "Binary Converter",
    description:
      "Facilitates the conversion of decimal numbers to binary, providing a user-friendly tool for encoding and decoding binary data with precision and efficiency.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/pen/ExMwyBd",
    alt: "Binary Converter Screenshot",
  },
  {
    title: "Random Quote Machine",
    description:
      "Built in the React framework it delivers inspiring or thought-provoking quotes with a simple click. Offering users a source of motivation or reflection. Also offers quick links to post the quote to social media.",
    imgSrc: "...",
    link: "https://random-twitter-quote-machine.netlify.app/",
    alt: "Random Quote Machine Screenshot",
  },
  {
    title: "Drum Machine",
    description:
      "Built in the React framework it lets users create beats and rhythms by triggering different drum sounds with a virtual interface. Providing an interactive and entertaining experience for music enthusiasts and beginners alike.",
    imgSrc: "...",
    link: "https://react-drum-machine-maliekapdev.netlify.app/",
    alt: "Drum Machine Screenshot",
  },
  {
    title: "JavaScript Calculator",
    description:
      "Developed using the React framework it offers a dynamic interface for performing various mathematical operations with ease and precision, providing users with a versatile tool for quick calculations in a modern and user-friendly interface.",
    imgSrc: "...",
    link: "https://javascript-calculator-maliekapdev.netlify.app/",
    alt: "JavaScript Calculator Screenshot",
  },
  {
    title: "Pomodoro Clock",
    description:
      "Crafted in the React framework it allows users to set custom sessions and break durations. Facilitating time management and productivity with visual cues and alerts for seamless workflow scheduling.",
    imgSrc: "...",
    link: "https://maliekapdev-pomodoro-timer.netlify.app/",
    alt: "Pomodoro Clock Screenshot",
  },
  {
    title: "Dragon Repeller RPG - Game",
    description:
      "Embark on an epic adventure, a thrilling web-based experience featuring dynamic animations, engaging storyline, and a responsive user interface crafted with HTML, CSS, and JavaScript, tailored to meet FreeCodeCamp certification requirements.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/MWxpGag",
    alt: "Dragon Repeller RPG - Game Screenshot",
  },
  {
    title: "Music Player",
    description:
      "Powered by JavaScript, offering seamless playback of audio tracks, with features such as playlist management, playback controls, and audio visualization, providing users with an immersive listening experience across various devices.",
    imgSrc: "...",
    link: "https://codepen.io/MalieKap/full/qBvmxeg",
    alt: "Music Player Screenshot",
  },
  {
    title: "Weather App",
    description:
      "By leveraging the power of JavaScript, I developed a dynamic weather application that fetches real-time API data and beautifully displays the current weather conditions as well as the forecasted weather for the searched city.",
    imgSrc: "...",
    link: "https://weather-app-maliekapdev.netlify.app/",
    alt: "Weather App Screenshot",
  },
  {
    title: "React Weather App",
    description:
      "Rebuilt the weather app using React, integrating live news headlines and weather forecast API's for a seamless user experience.",
    imgSrc: "...",
    link: "https://react-weather-app-maliekapdev.netlify.app/",
    alt: "React Weather App Screenshot",
  },
  // Add other projects here
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const OtherProjects = () => {
  const [shuffledProjects, setShuffledProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => {
    setShuffledProjects(shuffleArray([...projects]));
  }, []);

  const totalPages = Math.ceil(shuffledProjects.length / projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPaginatedProjects = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    return shuffledProjects.slice(startIndex, startIndex + projectsPerPage);
  };

  return (
    <div className="other-projects-container">
      <div
        className="card"
        style={{ borderWidth: 2, borderStyle: "solid", borderColor: "#e9ecef" }}
      >
        <h5
          className="card-header"
          style={{ backgroundColor: "#e9ecef", color: "#212529" }}
        >
          Other Projects
        </h5>
        <div className="row ps-4 pe-4">
          {getPaginatedProjects().map((project, index) => (
            <div
              key={index}
              className="col-md-4 col-12 card-body d-flex flex-column"
            >
              <img
                src={project.imgSrc}
                className="card-img-top d-none d-lg-block"
                alt={project.alt}
              />
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark mt-auto"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                style={{ backgroundColor: "#e9ecef" }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li
                key={page}
                className={`page-item ${page === currentPage ? "active" : ""}`}
              >
                <button
                  className="page-link mx-1"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                style={{ backgroundColor: "#e9ecef" }}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OtherProjects;
