import hotel from "../../public/hotel.jpeg";
import api from "../../public/APIs.png";
import cancer from "../../public/cancer.png";
import events from "../../public/events.jpeg";
export type Project = {
    id: string;
    title: string;
    shortDesc: string;
    longDesc: string;

    features: string[];        // 🔥 key features
    techStack: string[];       // 🔧 technologies
    role: string;              // 👨‍💻 your role
    duration: string;          // ⏱️ project duration
    category: string;          // 📂 Web / ML / Backend
    challenges?: string[];     // ⚠️ challenges faced
    futurePlans?: string[];    // 🚀 future improvements

    img: string;
    live: string;
    github: string;
};

export const projects: Project[] = [
    {
        id: "staybangla",
        title: "StayBangla Hotel Management System",
        shortDesc: "Full-stack hotel booking & management platform",
        longDesc:
            "StayBangla is a complete hotel management solution with secure authentication, room booking, admin dashboard, and REST API integration.",

        features: [
            "User authentication & authorization",
            "Room booking & availability system",
            "Admin dashboard for hotel management",
            "REST API integration",
        ],
        techStack: ["React", "Tailwind CSS", "Django REST API", "MySQL"],
        role: "Full Stack Developer",
        duration: "2 Months",
        category: "Full Stack Web Application",
        challenges: [
            "Handling concurrent room bookings",
            "Designing RESTful APIs",
        ],
        futurePlans: [
            "Online payment integration",
            "Email & SMS notifications",
        ],

        img: hotel,
        live: "https://stay-bangla-mk4p.vercel.app/",
        github: "https://github.com/Atiar-Rahman/stay_bangla_client",
    },

    {
        id: "staybangla-api",
        title: "StayBangla Backend API",
        shortDesc: "Secure backend with CRUD & Swagger",
        longDesc:
            "A robust Django REST API backend featuring authentication, role-based access, and Swagger documentation.",

        features: [
            "JWT-based authentication",
            "Role-based access control",
            "CRUD operations",
            "Swagger API documentation",
        ],
        techStack: ["Django REST Framework", "MySQL", "Swagger"],
        role: "Backend Developer",
        duration: "1 Month",
        category: "Backend API",
        challenges: ["API security & permission handling"],

        img: api,
        live: "https://hotel-management-blue-seven.vercel.app/swagger/",
        github: "https://github.com/Atiar-Rahman/hotel_management",
    },

    {
        id: "cancer-detection",
        title: "Symptom-Based Multi-Cancer Detection Tool",
        shortDesc: "ML-powered cancer risk prediction system",
        longDesc:
            "A machine learning based web application that predicts liver, lung, and breast cancer risks using symptom-based inputs.",

        features: [
            "Multi-cancer risk prediction",
            "Machine learning model integration",
            "User-friendly input forms",
            "Prediction history storage",
        ],
        techStack: ["Django", "Machine Learning", "Scikit-learn", "MySQL"],
        role: "ML Engineer & Backend Developer",
        duration: "3 Months",
        category: "Machine Learning Application",
        challenges: [
            "Model accuracy tuning",
            "Feature selection from symptoms",
        ],
        futurePlans: [
            "Add more cancer types",
            "Explainable AI (XAI) integration",
        ],

        img: cancer,
        live: "https://symtom-based-cancer-detection.onrender.com/",
        github: "https://github.com/Atiar-Rahman/Symtom_based_Cancer_detection",
    },

    {
        id: "events-management",
        title: "Events Management System",
        shortDesc: "Event registration & management platform",
        longDesc:
            "A Django-based application for managing events with participant registration, admin dashboards, and reporting features.",

        features: [
            "Event creation & management",
            "Participant registration",
            "Admin dashboard",
            "Database-driven reports",
        ],
        techStack: ["Django", "MySQL"],
        role: "Backend Developer",
        duration: "1 Month",
        category: "Web Application",
        challenges: ["Managing relational database design"],

        img: events,
        live: "https://events-management-system-uoyt.onrender.com/",
        github: "https://github.com/Atiar-Rahman/events",
    },

    {
        id: "hospital-management",
        title: "Events Management System",
        shortDesc: "Event registration & management platform",
        longDesc:
            "A Django-based application for managing events with participant registration, admin dashboards, and reporting features.",

        features: [
            "Event creation & management",
            "Participant registration",
            "Admin dashboard",
            "Database-driven reports",
        ],
        techStack: ["Django", "MySQL"],
        role: "Backend Developer",
        duration: "1 Month",
        category: "Web Application",
        challenges: ["Managing relational database design"],

        img: events,
        live: "https://events-management-system-uoyt.onrender.com/",
        github: "https://github.com/Atiar-Rahman/events",
    },
];
