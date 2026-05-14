import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Instagram,
    Download,
    Network,
    Bot,
    Mail,
    Award,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
} from 'lucide-react';

const FallingWhiteFeathers = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const p = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 4 + Math.random() * 6,
            delay: Math.random() * 4,
            size: 1 + Math.random() * 2,
        }));

        setParticles(p);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white rounded-full bg-opacity-40"
                    initial={{ top: -20, left: `${p.left}%`, opacity: 0 }}
                    animate={{ top: '110%', opacity: [0, 0.55, 0.55, 0], x: [0, 15, -15, 0], rotate: [0, 20, -20, 0] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
                    style={{ width: p.size * 2, height: p.size, filter: 'blur(1px)' }}
                />
            ))}
        </div>
    );
};

const FallingWhiteSnow = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const p = Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 4,
            size: 1 + Math.random() * 2.5,
        }));

        setParticles(p);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white/70"
                    initial={{ top: -20, left: `${p.left}%`, opacity: 0 }}
                    animate={{ top: '110%', opacity: [0, 0.8, 0.8, 0], x: [0, 8, -8, 0] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
                    style={{ width: p.size, height: p.size, filter: 'blur(0.6px)' }}
                />
            ))}
        </div>
    );
};

const FallingRedLeaves = () => {
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        const s = Array.from({ length: 18 }).map((_, i) => {
            const sideRoll = Math.random();
            const isCenter = sideRoll > 0.8;
            const left = isCenter
                ? 35 + Math.random() * 30
                : sideRoll < 0.4
                    ? Math.random() * 30
                    : 70 + Math.random() * 30;

            return {
                id: i,
                left,
                duration: 6 + Math.random() * 5,
                size: isCenter ? 6 + Math.random() * 4 : 8 + Math.random() * 8,
                delay: Math.random() * 4,
                opacity: isCenter ? 0.45 : 0.75,
            };
        });

        setLeaves(s);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {leaves.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute rounded-full"
                    style={{ width: s.size, height: s.size * 1.2, backgroundColor: '#dc2626', opacity: s.opacity }}
                    initial={{ top: '-10%', left: `${s.left}%`, scale: 1 }}
                    animate={{
                        top: '110%',
                        left: [`${s.left}%`, `${s.left + 5}%`, `${s.left - 6}%`],
                        rotate: [0, 120, 260],
                        opacity: [0, 0.65, 0.65, 0],
                    }}
                    transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'linear' }}
                />
            ))}
        </div>
    );
};

const FallingWhiteStars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const s = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 5 + Math.random() * 4,
            size: 2 + Math.random() * 4,
            delay: Math.random() * 5,
        }));

        setStars(s);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {stars.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute"
                    style={{ width: s.size, height: s.size, backgroundColor: '#fff', clipPath: 'polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)' }}
                    initial={{ top: '-10%', left: `${s.left}%`, opacity: 0 }}
                    animate={{ top: '110%', opacity: [0, 0.8, 0.8, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'linear' }}
                />
            ))}
        </div>
    );
};

const FallingCherryBlossoms = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const s = Array.from({ length: 18 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 8 + Math.random() * 6,
            size: 6 + Math.random() * 6,
            delay: Math.random() * 4,
        }));

        setPetals(s);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {petals.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute rounded-full"
                    style={{ width: s.size, height: s.size, backgroundColor: '#f9a8d4', opacity: 0.65 }}
                    initial={{ top: '-10%', left: `${s.left}%`, opacity: 0 }}
                    animate={{ top: '110%', left: [`${s.left}%`, `${s.left + 6}%`, `${s.left - 5}%`], opacity: [0, 0.75, 0.7, 0], rotate: [0, 120, 220] }}
                    transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'linear' }}
                />
            ))}
        </div>
    );
};

const FooterParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const p = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 4,
            size: 2 + Math.random() * 3,
        }));

        setParticles(p);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-yellow-300"
                    initial={{ bottom: '-5%', left: `${p.left}%`, opacity: 0 }}
                    animate={{ bottom: '110%', opacity: [0, 0.4, 0], x: [0, 15, -10] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
                    style={{ width: p.size, height: p.size, filter: 'blur(0.5px)' }}
                />
            ))}
        </div>
    );
};

const GhostMist = () => {
    const [mists, setMists] = useState([]);

    useEffect(() => {
        const cloud = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            top: 10 + Math.random() * 75,
            duration: 14 + Math.random() * 10,
            delay: Math.random() * 6,
            size: 160 + Math.random() * 180,
        }));

        setMists(cloud);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {mists.map((m) => (
                <motion.div
                    key={m.id}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        top: `${m.top}%`,
                        width: m.size,
                        height: m.size,
                        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
                    }}
                    initial={{ x: '-20%', opacity: 0 }}
                    animate={{ x: ['-20%', '120%'], opacity: [0, 0.18, 0.1, 0] }}
                    transition={{ duration: m.duration, repeat: Infinity, delay: m.delay, ease: 'linear' }}
                />
            ))}
        </div>
    );
};



const PERSONAL_INFO = {
    name: 'Sankalp Vasekar',
    title: 'Computer Engineer | AI/ML Engineer | Data Analyst',
    summary:
        'Computer Engineering undergraduate passionate about Artificial Intelligence and Machine Learning. Experienced in building end-to-end AI solutions, including RAG-based systems, NLP applications, and generative AI models. Skilled with lightweight AI frameworks like TensorFlow and Scikit-learn, and proficient in full-stack development using Django and FastAPI, with solid database experience in MongoDB and PostgreSQL. Highly motivated to leverage AI-driven agents and innovative system designs to solve real-world problems.',
    location: 'Pandharpur, India',
    email: 'sankalpvasekar@gmail.com',
    phone: '9511722075',
    socials: {
        github: 'https://github.com/sankalpvasekar',
        linkedin: 'https://www.linkedin.com/in/sankalp-vasekar-7506b82a4?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagram: 'https://instagram.com',
    },
};

const CERTIFICATIONS = [
    { name: 'IBM SkillsBuild: AI Strategy & Business Intelligence (AICTE)', img: '/assets/certificates/traning-ibm internship.jpeg' },
    { name: 'Microsoft AI-900', img: null },
    { name: 'OCI Generative AI Professional', img: '/assets/certificates/cr_ao profesisonal.jpeg' },
    { name: 'OCI Generative AI Foundational', img: '/assets/certificates/cr_ai_foundation.jpeg' },
    { name: 'Python for Data Science (NPTEL, Top 5%)', img: '/assets/certificates/cr_python for dta scinece.jpeg' },
    { name: 'DBMS (NPTEL, Top 5%)', img: '/assets/certificates/cr_dbms.jpeg' },
];

const TECH_ARSENAL = [
    { name: 'Python', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Transformers', type: 'img', src: '/assets/skills/transformers.svg' },
    { name: 'LangChain', type: 'img', src: '/assets/skills/langchain.svg' },
    { name: 'Gen AI', type: 'img', src: '/assets/skills/gen-ai.svg' },
    { name: 'Agentic AI', type: 'img', src: '/assets/skills/agentic-ai.svg' },
    { name: 'LangGraph', type: 'icon', icon: <Network size={40} className="text-orange-400" /> },
    { name: 'RAG', type: 'img', src: '/assets/skills/rag.svg' },
    { name: 'NLP', type: 'img', src: '/assets/skills/nlp.svg' },
    { name: 'Deep Learning', type: 'img', src: '/assets/skills/deep-learning.svg' },
    { name: 'GitHub', type: 'img', src: '/assets/skills/github.svg' },
    { name: 'LLM', type: 'img', src: '/assets/skills/llm.svg' },
    { name: 'NumPy', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Power BI', type: 'img', src: '/assets/skills/power-bi.svg' },
    { name: 'Java', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C++', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'FastAPI', type: 'img', src: '/assets/skills/fastapi.svg' },
    { name: 'Django', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'React', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'PostgreSQL', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Arduino', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
];

const PROJECTS = [
    {
        id: 1,
        title: 'Eduverse: Multi-Agent Learning Ecosystem',
        tagline: 'Multi-Agent Systems & AI Orchestration',
        description:
            'A sophisticated multi-agent ecosystem featuring specialized AI agents for interview preparation (AI-VTUBER), automated email handling, and real-time PDF analysis. Built with complex agentic workflows.',
        tags: ['Python', 'FastAPI', 'LangChain', 'Agentic AI', 'Multi-Agent Systems'],
        color: 'from-purple-900 to-black',
        accent: 'text-teal-400',
        github: 'https://github.com/sankalpvasekar/Eduverse',
    },
    {
        id: 2,
        title: 'ScholarFlow-AI: Autonomous Research Suite',
        tagline: 'Research Automation & Graph Theory',
        description:
            'An ultra-premium multi-agent system designed using LangGraph to autonomously generate publication-ready academic research papers from minimal user input. Employs advanced RAG techniques.',
        tags: ['LangGraph', 'LLMs', 'Research AI', 'Python', 'Advanced RAG'],
        color: 'from-emerald-900 to-black',
        accent: 'text-teal-400',
        github: 'https://github.com/sankalpvasekar/ScholarFlow-AI',
    },
    {
        id: 3,
        title: 'Anuvad-Localize-Engine: Neural Localization',
        tagline: 'Multilingual AI & STEM Translation',
        description:
            'A high-performance localization engine leveraging Whisper large-v3 and IndicTrans2 to provide context-aware, STEM-domain translation for high-fidelity audio and video synchronization.',
        tags: ['NLP', 'Transformers', 'FastAPI', 'Whisper', 'IndicTrans2'],
        color: 'from-blue-900 to-black',
        accent: 'text-teal-400',
        github: 'https://github.com/sankalpvasekar/Anuvad-Localize-Engine',
    },
    {
        id: 4,
        title: 'UniPrep: University Preparation Platform',
        tagline: 'EdTech Analytics & Deep Learning',
        description:
            'A predictive analytics platform using deep learning to analyze historical exam papers and predict high-probability question patterns, streamlining university exam preparation.',
        tags: ['Deep Learning', 'Django', 'React', 'PostgreSQL', 'Predictive Modeling'],
        color: 'from-orange-900 to-black',
        accent: 'text-teal-400',
        github: 'https://github.com/sankalpvasekar/UniPrep-University-Prepration-Platform',
    },
    {
        id: 5,
        title: 'PhishGuard: AI Phishing Detection',
        tagline: 'Cybersecurity AI & Threat Intelligence',
        description:
            'An advanced security system utilizing machine learning models to detect and flag phishing emails and malicious URLs in real-time, protecting users from sophisticated cyber threats.',
        tags: ['Scikit-learn', 'NLP', 'Python', 'Cybersecurity', 'Threat Detection'],
        color: 'from-red-900 to-black',
        accent: 'text-teal-400',
        github: 'https://github.com/sankalpvasekar/PhishGuard',
    },
    {
        id: 6,
        title: 'Smart Traffic Management System',
        tagline: 'IoT & Computer Vision Optimization',
        description:
            'An IoT-based solution for real-time car density detection and traffic signal optimization using YOLOv8 and Arduino-integrated sensors to reduce urban congestion.',
        tags: ['YOLOv8', 'OpenCV', 'IoT', 'Arduino', 'Computer Vision'],
        color: 'from-yellow-900 to-black',
        accent: 'text-teal-400',
        github: 'https://github.com/sankalpvasekar/Auto_Traffic_Management',
    },
];

const EXPERIENCE = [
    {
        role: 'AI Strategy & Business Intelligence Internship',
        company: 'IBM SkillsBuild',
        year: '2026',
        desc: 'Completed an intensive 6-week program conducted by CSRBOX and AICTE, focusing on advanced AI implementation and BI analytics.',
        img: '/assets/certificates/traning-ibm internship_ain.jpeg'
    },
    {
        role: 'Summer Internship Training Program',
        company: 'IBM',
        year: 'Training',
        desc: 'Learned AI agents and RAG systems through focused hands-on implementation.',
        img: '/assets/certificates/traning_ibm skillbuild.jpeg'
    },
    {
        role: 'VOIS PowerBI Internship',
        company: 'AICTE',
        year: 'Internship',
        desc: 'Worked on data visualization and analytics using Microsoft Power BI.',
        img: '/assets/certificates/tr_powerbi_internship.jpeg'
    },
    {
        role: 'Training Program',
        company: 'Indian Space Academy',
        year: 'Training',
        desc: 'Acquired specialized training in satellite data analysis and space research methodologies.',
        img: '/assets/certificates/trnaing_indian space academy.jpeg'
    },
];

const ACHIEVEMENTS = [
    {
        title: '2K25 Hackathon Winner',
        place: 'SKNSCOE',
        description: 'Winner in the SKNSCOE Hackathon 2025, demonstrating innovative problem-solving and rapid prototyping.',
    },
    {
        title: 'UI/UX Design Winner',
        place: 'Regional Design Competition',
        description: 'Recognized for excellence in user interface and experience design, creating intuitive and aesthetically stunning digital solutions.',
    },
    {
        title: '5-Star at HackerRank',
        place: 'HackerRank',
        description: 'Achieved a prestigious 5-Star Gold Badge on HackerRank, reflecting elite proficiency in complex algorithms and data structures.',
    },
    {
        title: 'Lead Freelance Developer',
        place: 'Prime Educational Services',
        description: 'Architected and delivered a full-scale production software for an online bookstore, managing the entire project as a professional freelance developer.',
    },
];

const EDUCATION = [
    {
        school: 'SKN Sinhgad College of Engineering',
        degree: 'B.E. in Computer Science and Engineering',
        lineTwo: 'Honors in AI/ML',
        lineThree: 'Multidisciplinary Minor Degree in IoT',
        score: '9.9 CGPA',
        logoPath: '/assets/education/skn%20logo.jpg',
        logoCircle: false,
    },
    {
        school: 'Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur',
        degree: '12th Grade (Higher Secondary)',
        lineTwo: 'Science Stream',
        lineThree: 'Maharashtra State Board',
        score: '76.33%',
        logoPath: '/assets/education/kbp-logo.jpg',
        logoCircle: false,
    },
];

export default function App() {
    const [selectedCert, setSelectedCert] = useState(null);

    const sections = ['hero', 'training', 'projects', 'education', 'certifications', 'achievements', 'skills', 'contact'];
    const [currentSectionIdx, setCurrentSectionIdx] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach((id, idx) => {
                const el = document.getElementById(id);
                if (el) {
                    const { offsetTop, offsetHeight } = el;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setCurrentSectionIdx(idx);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        const nextIdx = Math.min(currentSectionIdx + 1, sections.length - 1);
        scrollTo(sections[nextIdx]);
    };

    const scrollPrev = () => {
        const prevIdx = Math.max(currentSectionIdx - 1, 0);
        scrollTo(sections[prevIdx]);
    };

    return (
        <div className="bg-black text-gray-200 font-sans selection:bg-red-900 selection:text-white w-full min-h-screen overflow-x-hidden scroll-smooth custom-scrollbar">
            <GhostMist />

            {/* Mobile Navigation Arrows - Middle Edges */}
            <div className="fixed top-1/2 -translate-y-1/2 inset-x-4 z-[60] flex flex-row justify-between pointer-events-none md:hidden">
                <button
                    onClick={scrollPrev}
                    className="w-12 h-12 rounded-full bg-red-900/60 border border-red-500/50 flex items-center justify-center text-white backdrop-blur-sm shadow-[0_0_15px_rgba(153,27,27,0.3)] pointer-events-auto"
                    disabled={currentSectionIdx === 0}
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={scrollNext}
                    className="w-12 h-12 rounded-full bg-red-900/60 border border-red-500/50 flex items-center justify-center text-white backdrop-blur-sm shadow-[0_0_15px_rgba(153,27,27,0.3)] pointer-events-auto"
                    disabled={currentSectionIdx === sections.length - 1}
                >
                    <ChevronRight size={28} />
                </button>
            </div>


            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-row justify-between items-center bg-black/95 backdrop-blur-md border-b border-stone-900">
                <div className="text-2xl font-serif font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900">
                    PORTFOLIO
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => scrollTo('projects')} className="px-4 py-2 border border-stone-800 text-stone-300 hover:text-white transition-all uppercase tracking-widest font-black" style={{ fontSize: '9px' }}>Projects</button>
                    <button onClick={() => scrollTo('skills')} className="px-4 py-2 border border-stone-800 text-stone-300 hover:text-white transition-all uppercase tracking-widest font-black" style={{ fontSize: '9px' }}>Skills</button>
                    <button onClick={() => scrollTo('certifications')} className="px-4 py-2 border border-stone-800 text-stone-300 hover:text-white transition-all uppercase tracking-widest font-black" style={{ fontSize: '9px' }}>Certificates</button>
                </div>
            </nav>

            <section id="hero" className="relative w-full min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden">
                <FallingWhiteFeathers />
                <div className="absolute inset-y-0 right-0 w-1/2 z-10 pointer-events-none">
                    <FallingWhiteSnow />
                </div>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%), url("/assets/hero/main-bg.jpg")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: window.innerWidth < 768 ? 'center right' : 'center',
                        filter: 'brightness(0.6) contrast(1.05)',
                    }}
                />
                <div className="absolute inset-0 z-10 hidden md:block" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.25) 65%, transparent 100%)' }} />
                <div className="container mx-auto px-10 relative z-20">
                    <div className="w-full md:max-w-[55%]">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-[42px] sm:text-6xl md:text-8xl font-serif font-black leading-none mb-6 md:mb-10 tracking-tighter text-white uppercase drop-shadow-2xl">
                                {PERSONAL_INFO.name.split(' ')[0]} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900">{PERSONAL_INFO.name.split(' ')[1]}</span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-sm md:text-lg text-stone-200 mb-10 md:mb-12 max-w-xl leading-relaxed md:leading-8 font-medium">
                                {PERSONAL_INFO.summary}
                            </motion.p>
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
                                <a href="/assets/resume/CSE.pdf" download="Sankalp_Vasekar_Resume.pdf" className="w-full sm:w-auto px-8 md:px-10 py-4 bg-red-800 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all text-center shadow-2xl border flex items-center justify-center gap-3" style={{ boxShadow: '0 0 30px rgba(179, 27, 27, 0.6)', borderColor: 'rgba(234, 179, 8, 0.3)' }}>
                                    <Download size={20} /> Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="training" className="relative w-full min-h-screen py-20 md:py-32 flex flex-col justify-center">
                <FallingRedLeaves />
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/chronicles/training-bg.jpg")', filter: 'brightness(0.45)' }} />
                <div className="absolute inset-0 bg-black/35 z-0" />
                <div className="container mx-auto px-10 relative z-10">
                    <div className="mb-20">
                        <motion.h3 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase leading-none">TRAINING & INTERNSHIPS</motion.h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {EXPERIENCE.map((exp, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="bg-stone-900/90 border p-6 md:p-12 hover:border-yellow-500 transition-all group shadow-2xl relative" style={{ borderColor: 'rgba(234, 179, 8, 0.4)' }}>
                                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-red-800 opacity-40" />
                                <motion.h4 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: false, amount: 0.25 }} className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 group-hover:text-yellow-500 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-500 uppercase tracking-tighter mb-2">{exp.company}</motion.h4>
                                <div className="flex items-center gap-2 mb-8"><div className="h-px w-12 bg-yellow-700" /><p className="text-yellow-700 font-black uppercase" style={{ letterSpacing: '0.2em', fontSize: '12px' }}>{exp.year}</p></div>
                                <h5 className="text-white text-xl font-bold mb-6 tracking-wide flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-yellow-500" /> {exp.role}</h5>
                                <p className="text-gray-100 text-lg leading-relaxed font-medium bg-black/20 p-4 border-l-2 border-yellow-600">{exp.desc}</p>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => exp.img && setSelectedCert(exp.img)} className={`mt-8 flex items-center gap-2 px-6 py-2 border border-yellow-600/30 text-yellow-500 font-black uppercase tracking-widest hover:bg-yellow-600/10 transition-all ${!exp.img && 'opacity-50 cursor-not-allowed'}`} style={{ fontSize: '10px' }}><Award size={14} /> View Certificate</motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="relative w-full min-h-screen py-20 md:py-32">
                <FallingWhiteStars />
                <FallingWhiteSnow />
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/relics/stone-temple.jpg")', filter: 'brightness(0.42)' }} />
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">PROJECTS</motion.h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {PROJECTS.map((p, i) => (
                            <motion.div key={i} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="bg-black/75 border p-8 md:p-12 group shadow-2xl relative overflow-hidden backdrop-blur-sm" style={{ borderColor: 'rgba(234, 179, 8, 0.4)' }}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-700 to-transparent opacity-10 blur-3xl" />
                                <div className={`h-1 w-full bg-gradient-to-r ${p.color} mb-8`} />
                                <p className={`font-black uppercase tracking-widest mb-2 ${p.accent}`} style={{ fontSize: '10px' }}>{p.tagline}</p>
                                <div className="flex items-start justify-between gap-3 mb-6">
                                    <motion.h4 initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: false, amount: 0.25 }} className="text-2xl font-serif font-black text-white uppercase tracking-tight leading-tight">{p.title}</motion.h4>
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 min-w-11 min-h-11 rounded-full border border-stone-600 bg-black/70 flex items-center justify-center shrink-0 -mt-1 hover:border-yellow-500 transition-colors"><Github size={19} className="text-stone-300" /></a>
                                </div>
                                <p className="text-white/90 leading-relaxed font-light mb-10 text-sm italic">"{p.description}"</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {p.tags.slice(0, 3).map((tag) => <span key={tag} className="font-bold text-stone-400 border border-stone-800 px-2 py-1 uppercase" style={{ fontSize: '9px' }}>{tag}</span>)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="education" className="relative w-full min-h-screen py-20 md:py-32 bg-black flex items-center">
                <FallingRedLeaves />
                <FallingCherryBlossoms />
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/education/education-bg.jpg")', filter: 'brightness(0.35)' }} />
                <div className="absolute inset-0 bg-black/25 z-0" />
                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-14">
                        <motion.h3 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">EDUCATION</motion.h3>
                    </div>
                    <div className="space-y-8">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="max-w-6xl mx-auto bg-stone-950/75 border border-yellow-700/40 p-10 shadow-2xl relative backdrop-blur-sm" style={{ borderColor: 'rgba(234, 179, 8, 0.2)' }}>
                                <div className="flex flex-row gap-10 items-center">
                                    <div className={`w-36 h-36 bg-stone-900 flex items-center justify-center border border-yellow-900 shadow-inner p-1 overflow-hidden ${edu.logoCircle ? 'rounded-full' : 'rounded-md'}`} style={{ borderColor: 'rgba(146, 64, 14, 0.3)' }}>
                                        <img src={edu.logoPath} alt={`${edu.school} Logo`} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="text-left">
                                        <motion.h3 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.1 }} viewport={{ once: false, amount: 0.25 }} className="text-2xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 mb-4 tracking-tighter uppercase leading-tight">{edu.school}</motion.h3>
                                        <div className="space-y-2 text-white">
                                            <p className="text-xl font-semibold">{edu.degree}</p>
                                            <p className="text-lg font-semibold text-stone-100">{edu.lineTwo}</p>
                                            <p className="text-lg font-semibold text-stone-100">{edu.lineThree}</p>
                                            <p className="text-xl font-semibold text-yellow-300 pt-2">{edu.score}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="certifications" className="relative w-full min-h-screen py-20 md:py-32 bg-black flex items-center">
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/certificates/certificates.jpg")', filter: 'brightness(0.35) blur(2px)' }} />
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h3 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">CERTIFICATIONS</motion.h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {CERTIFICATIONS.map((cert, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: idx * 0.05 }} className="bg-transparent backdrop-blur-sm border border-white/10 p-8 flex items-center gap-6 group hover:border-yellow-600/50 transition-all shadow-2xl min-h-[140px] relative overflow-hidden">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-cover bg-center" style={{ backgroundImage: `url("${cert.img}")` }} />
                                <div className="w-1.5 h-14 bg-gradient-to-b from-red-600 to-red-900 shrink-0 group-hover:from-yellow-500 group-hover:to-yellow-700 transition-all relative z-10" />
                                <div className="relative z-10 flex flex-col justify-center">
                                    <p className="text-white font-bold text-base leading-tight tracking-tight uppercase mb-2">{cert.name}</p>
                                    <button onClick={() => cert.img && setSelectedCert(cert.img)} className={`text-[9px] text-yellow-500 font-black tracking-widest uppercase hover:text-yellow-400 transition-colors flex items-center gap-1 ${!cert.img && 'opacity-30 cursor-not-allowed'}`}><Award size={10} /> {cert.img ? 'View Credential' : 'Under Review'}</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="achievements" className="relative w-full min-h-screen py-20 md:py-32 bg-black flex items-center">
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/Achivements/1141602-black-dragon-wallpaper-hd-1920x1080-for-mobile-hd.jpg")', filter: 'brightness(1) contrast(1)' }} />
                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h3 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">ACHIEVEMENTS</motion.h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {ACHIEVEMENTS.map((ach, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.1 }} className="bg-transparent border border-white/10 p-10 group hover:border-yellow-600/50 transition-all shadow-2xl relative backdrop-blur-sm">
                                <div className="flex items-start gap-5">
                                    <div className="mt-1"><Award size={32} className="text-yellow-500 group-hover:scale-110 transition-transform" /></div>
                                    <div>
                                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{ach.title}</h4>
                                        <p className="text-yellow-600 font-bold uppercase text-xs tracking-widest mb-4">{ach.place}</p>
                                        <p className="text-stone-300 leading-relaxed italic">"{ach.description}"</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="relative w-full min-h-screen py-20 md:py-32 flex items-center">
                <FallingWhiteSnow />
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/dojo/bamboo-forest.jpg")', filter: 'brightness(0.42)' }} />
                <div className="absolute inset-0 bg-stone-950/35 z-0" />
                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h3 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">SKILLS</motion.h3>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-10 place-items-center">
                        {TECH_ARSENAL.map((skill, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: i % 6 < 3 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: (i % 6) * 0.04 }} viewport={{ once: false, amount: 0.15 }} className="flex flex-col items-center group">
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }} whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(234, 179, 8, 0.4)' }} className="w-32 h-32 rounded-full bg-stone-950 border-2 flex items-center justify-center transition-all cursor-crosshair overflow-hidden p-5" style={{ borderColor: 'rgba(234, 179, 8, 0.5)' }}>
                                    {skill.type === 'img' ? <img src={skill.src} alt={skill.name} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} /> : <div className="group-hover:scale-110 transition-transform">{skill.icon}</div>}
                                </motion.div>
                                <h4 className="mt-6 text-white font-black uppercase tracking-widest text-[10px]">{skill.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <footer id="contact" className="relative w-full min-h-screen py-24 bg-black border-t border-stone-900">
                <FooterParticles />
                <div className="absolute inset-0 z-0 bg-cover bg-bottom opacity-10" style={{ backgroundImage: 'url("/assets/chronicles/japan-ruins.jpg")' }} />
                <div className="container mx-auto px-4 md:px-10 relative z-20">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                        <div className="text-center lg:text-left">
                            <motion.h2 initial={{ opacity: 0, y: -18, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-red-800 text-3xl md:text-5xl font-serif font-black mb-8 md:mb-12 uppercase tracking-[0.2em] md:tracking-[0.4em]">FOLLOW ME</motion.h2>
                            <div className="flex justify-start gap-12 mb-16">
                                <motion.a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }} className="text-stone-400 transition-all duration-300" title="GitHub"><Github size={40} /></motion.a>
                                <motion.a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }} className="text-stone-400 transition-all duration-300" title="LinkedIn"><Linkedin size={40} /></motion.a>
                                <motion.a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }} className="text-stone-400 transition-all duration-300" title="Instagram"><Instagram size={40} /></motion.a>
                                <motion.a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`} whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }} className="text-stone-400 transition-all duration-300" title="Email"><Mail size={40} /></motion.a>
                            </div>
                            <p className="block mt-4 text-stone-300 font-semibold tracking-wider">+91 {PERSONAL_INFO.phone}</p>
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="block mt-2 text-stone-300 font-semibold tracking-wider">{PERSONAL_INFO.email}</a>
                            <br />
                            <div className="font-black uppercase text-stone-800" style={{ fontSize: '10px', letterSpacing: '0.6em' }}>&copy; Portfoio • Built by Sankalp Vasekar</div>
                        </div>
                        <div className="relative h-52 w-fit border border-yellow-700/40 bg-black/40 backdrop-blur-sm rounded-md overflow-hidden inline-flex items-center justify-center p-1">
                            <img src="/assets/footer/profile-image.jpg" alt="Profile Upload" className="h-full w-auto object-contain object-center block" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                    </div>
                </div>
            </footer>

            {/* Certificate Lightbox */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-10">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
                        <button onClick={() => setSelectedCert(null)} className="absolute top-0 right-0 md:-top-10 md:-right-10 text-white/70 hover:text-white transition-colors p-4 md:p-0 z-[110]"><span className="text-4xl font-light font-sans">&times;</span></button>
                        <div className="w-full h-full overflow-auto flex items-center justify-center custom-scrollbar">
                            <img src={selectedCert} alt="Certificate" className="max-w-[80%] max-h-[80vh] object-contain shadow-[0_0_100px_rgba(153,27,27,0.3)] border border-white/10" />
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
