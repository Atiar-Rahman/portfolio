import hotel from "../../public/hotel.jpeg";
import hospital from "../../public/hospital.jpeg";
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
    githubfrontend: string;
    githubbackend:string;
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
        githubfrontend: "https://github.com/Atiar-Rahman/stay_bangla_client",
        githubbackend: 'https://github.com/Atiar-Rahman/stay_bangla'
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
        live: "https://symptombased-cancer-risk-detection.vercel.app/",
        githubfrontend: "https://github.com/Atiar-Rahman/symptombased_clinet",
        githubbackend: 'https://github.com/Atiar-Rahman/symptombased_backend'
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
        githubfrontend: "https://github.com/Atiar-Rahman/events",
        githubbackend:''
    },

    {
        id: "hospital-management",
        title: "Hospital Management System",
        shortDesc: "Backend Developement django rest_framework and mysql database",
        longDesc:
            "A Django-based application for managing Hospital.",

        features: [
            "hospital doctor added",
            "patient added",
            "others"
        ],
        techStack: ["Django Rest_framework", "MySQL"],
        role: "Backend Developer",
        duration: "1 Month",
        category: "Web Application",
        challenges: ["Managing relational database design"],

        img: hospital,
        live: "https://hotel-management-blue-seven.vercel.app/swagger/",
        githubfrontend: "",
        githubbackend: 'https://github.com/Atiar-Rahman/hotel_management'
    },
];
