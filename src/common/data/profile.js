import mypic from "../../assets/mypic.png"; // adjust path based on actual location

const profile = {
    name: "Savan Rathod",
    tagline: "Front-End Developer passionate about building modern UI's",
    photo: mypic, // ✅ JSX string removed — now just image path
    alt: "Savan Rathod",
    about: "Diploma student at Felix-IT Systems, skilled in React, Tailwind, and UI design. Focused on building scalable, responsive apps.",
    resumelink: "https://drive.google.com/your-resume-link",
    contact: {
        email: "savan@example.com",
        linkedin: "https://linkedin.com/in/savanrathod",
        github: "https://github.com/savanrathod",
    },
};

export default profile;