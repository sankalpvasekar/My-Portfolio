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
} from 'lucide-react';

const FallingWhiteFeathers = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const p = Array.from({ length: 70 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 5 + Math.random() * 7,
            delay: Math.random() * 5,
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
        const p = Array.from({ length: 72 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 6 + Math.random() * 6,
            delay: Math.random() * 5,
            size: 1 + Math.random() * 2.8,
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
        const s = Array.from({ length: 26 }).map((_, i) => {
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
                duration: 8 + Math.random() * 6,
                size: isCenter ? 6 + Math.random() * 4 : 8 + Math.random() * 8,
                delay: Math.random() * 5,
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
        const s = Array.from({ length: 28 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 7 + Math.random() * 5,
            size: 2 + Math.random() * 4,
            delay: Math.random() * 6,
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
        const s = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 10 + Math.random() * 7,
            size: 6 + Math.random() * 6,
            delay: Math.random() * 5,
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
        title: 'Multi-Agent AI Research Assistant',
        tagline: 'Research Automation',
        description:
            'Architected a research automation system using multiple AI agents to support document drafting and review. Improved workflow coordination through LangGraph.',
        tags: ['Python', 'FastAPI', 'LangChain', 'LangGraph'],
        color: 'from-purple-900 to-black',
        accent: 'text-teal-400',
    },
    {
        id: 2,
        title: 'UniPrep: AI Question Prediction',
        tagline: 'EdTech Analytics',
        description:
            'Developed a predictive analytics platform to analyze historical exam papers and identify important question patterns with deep learning.',
        tags: ['React', 'Django', 'PostgreSQL', 'Deep Learning'],
        color: 'from-emerald-900 to-black',
        accent: 'text-teal-400',
    },
    {
        id: 3,
        title: 'Smart Traffic Management',
        tagline: 'Computer Vision & IoT',
        description:
            'Built a real-time traffic monitoring system for vehicle detection and density estimation using YOLOv8 and adaptive signal control logic.',
        tags: ['YOLOv8', 'OpenCV', 'IoT', 'Arduino'],
        color: 'from-orange-900 to-black',
        accent: 'text-teal-400',
    },
];

const EXPERIENCE = [
    {
        role: 'Summer Internship Training Program',
        company: 'IBM',
        year: 'Training',
        desc: 'Learned AI agents and RAG systems through focused hands-on implementation.',
    },
    {
        role: 'Internship',
        company: 'AICTE Microsoft',
        year: 'Internship',
        desc: 'Worked on data visualization and analytics using Microsoft Power BI.',
    },
    {
        role: 'Contract Developer',
        company: 'Prime Educational Services',
        year: 'Freelance',
        desc: 'Worked as a paid freelance developer and delivered full production software for online book store.',
    },
    {
        role: 'Training Program',
        company: 'Indian Space Academy',
        year: 'Training',
        desc: 'Acquired specialized training in satellite data analysis and space research methodologies.',
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
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-black text-gray-200 font-sans selection:bg-red-900 selection:text-white w-screen h-screen overflow-y-scroll overflow-x-hidden overscroll-none snap-y snap-mandatory scroll-smooth">
            <GhostMist />

            <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-stone-900">
                <div className="text-3xl font-serif font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900">
                    PORTFOLIO
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                    <a
                        href="#"
                        className="px-4 md:px-6 py-2 border border-stone-800 text-stone-300 hover:text-white transition-colors uppercase tracking-widest font-black"
                        style={{ fontSize: '11px' }}
                    >
                        Certificates
                    </a>
                    <button
                        onClick={() => scrollTo('projects')}
                        className="px-4 md:px-6 py-2 border border-stone-800 text-stone-300 hover:text-white transition-colors uppercase tracking-widest font-black"
                        style={{ fontSize: '11px' }}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollTo('skills')}
                        className="px-4 md:px-6 py-2 border border-stone-800 text-stone-300 hover:text-white transition-colors uppercase tracking-widest font-black"
                        style={{ fontSize: '11px' }}
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollTo('contact')}
                        className="px-6 py-2 border border-stone-800 text-stone-300 hover:text-white transition-colors uppercase tracking-widest font-black"
                        style={{ fontSize: '11px' }}
                    >
                        Contact
                    </button>
                </div>
            </nav>

            <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden snap-start snap-always">
                <FallingWhiteFeathers />
                <div className="absolute inset-y-0 right-0 w-1/2 z-10 pointer-events-none">
                    <FallingWhiteSnow />
                </div>
                <div
                    className="absolute inset-0 z-0 bg-cover bg-right md:bg-center"
                    style={{
                        backgroundImage: 'url("/assets/hero/main-bg.jpg")',
                        filter: 'brightness(0.35) contrast(1.15)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />

                <div className="container mx-auto px-10 relative z-20">
                    <div className="max-w-4xl">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-5xl md:text-8xl font-serif font-black leading-none mb-10 tracking-tighter text-white uppercase">
                                {PERSONAL_INFO.name.split(' ')[0]} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900">
                                    {PERSONAL_INFO.name.split(' ')[1]}
                                </span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.05, delay: 0.4 }} className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl leading-8 font-medium text-justify">
                                {PERSONAL_INFO.summary}
                            </motion.p>

                            <div className="flex flex-wrap gap-6">
                                <a
                                    href="/assets/resume/sankalp-vasekar-resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-12 py-5 bg-red-800 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all text-center shadow-2xl border flex items-center gap-3"
                                    style={{ boxShadow: '0 0 30px rgba(153, 27, 27, 0.4)', borderColor: 'rgba(234, 179, 8, 0.3)' }}
                                >
                                    <Download size={20} /> Download Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="training" className="relative py-32 min-h-screen flex flex-col justify-center snap-start snap-always">
                <FallingRedLeaves />
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/assets/chronicles/training-bg.jpg")',
                        filter: 'brightness(0.45)',
                    }}
                />
                <div className="absolute inset-0 bg-black/35 z-0" />

                <div className="container mx-auto px-10 relative z-10">
                    <div className="mb-20">
                        <motion.h3 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase leading-none">
                            TRAINING & INTERNSHIPS
                        </motion.h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {EXPERIENCE.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-stone-900/90 border p-12 hover:border-yellow-500 transition-all group shadow-2xl relative"
                                style={{ borderColor: 'rgba(234, 179, 8, 0.4)' }}
                            >
                                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-red-800 opacity-40" />
                                <motion.h4 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 group-hover:text-yellow-500 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-500 uppercase tracking-tighter mb-2">
                                    {exp.company}
                                </motion.h4>
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="h-px w-12 bg-yellow-700" />
                                    <p className="text-yellow-700 font-black uppercase" style={{ letterSpacing: '0.2em', fontSize: '12px' }}>
                                        {exp.year}
                                    </p>
                                </div>
                                <h5 className="text-white text-xl font-bold mb-6 tracking-wide flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500" /> {exp.role}
                                </h5>
                                <p className="text-gray-100 text-lg leading-relaxed font-medium bg-black/20 p-4 border-l-2 border-yellow-600">
                                    {exp.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="relative py-32 min-h-screen overflow-hidden snap-start snap-always">
                <FallingWhiteStars />
                <FallingWhiteSnow />
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/assets/relics/stone-temple.jpg")',
                        filter: 'brightness(0.42)',
                    }}
                />
                <div className="absolute inset-0 bg-black/20 z-0" />

                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h3 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">
                            PROJECTS
                        </motion.h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {PROJECTS.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-black/75 border p-12 group shadow-2xl relative overflow-hidden backdrop-blur-sm"
                                style={{ borderColor: 'rgba(234, 179, 8, 0.4)' }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-700 to-transparent opacity-10 blur-3xl" />
                                <div className={`h-1 w-full bg-gradient-to-r ${p.color} mb-8`} />
                                <p className={`font-black uppercase tracking-widest mb-2 ${p.accent}`} style={{ fontSize: '10px' }}>
                                    {p.tagline}
                                </p>
                                <div className="flex items-start justify-between gap-3 mb-6">
                                    <motion.h4 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-2xl font-serif font-black text-white uppercase tracking-tight leading-tight">{p.title}</motion.h4>
                                    <div className="w-11 h-11 min-w-11 min-h-11 rounded-full border border-stone-600 bg-black/70 flex items-center justify-center shrink-0 -mt-1">
                                        <Github size={19} className="text-stone-300" />
                                    </div>
                                </div>
                                <p className="text-white/90 leading-relaxed font-light mb-10 text-sm italic">"{p.description}"</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {p.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="font-bold text-stone-400 border border-stone-800 px-2 py-1 uppercase" style={{ fontSize: '9px' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="relative py-32 min-h-screen flex items-center overflow-hidden snap-start snap-always">
                <FallingWhiteSnow />
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/assets/dojo/bamboo-forest.jpg")',
                        filter: 'brightness(0.42)',
                    }}
                />
                <div className="absolute inset-0 bg-stone-950/35 z-0" />

                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h3 initial={{ opacity: 0, scale: 0.86 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">
                            SKILLS
                        </motion.h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
                        {TECH_ARSENAL.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 6 < 3 ? -70 : 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + (i % 6) * 0.06 }}
                                viewport={{ once: false, amount: 0.15 }}
                                className="flex flex-col items-center group"
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.15, boxShadow: '0 0 40px rgba(234, 179, 8, 0.4)' }}
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-stone-950 border-2 flex items-center justify-center transition-all cursor-crosshair overflow-hidden p-5"
                                    style={{ borderColor: 'rgba(234, 179, 8, 0.5)' }}
                                >
                                    {skill.type === 'img' ? (
                                        <img
                                            src={skill.src}
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div className="group-hover:scale-110 transition-transform">{skill.icon}</div>
                                    )}
                                </motion.div>
                                <h4 className="mt-6 text-white font-black uppercase tracking-widest text-[10px]">{skill.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="education" className="relative py-32 min-h-screen bg-black flex items-center snap-start snap-always">
                <FallingRedLeaves />
                <FallingCherryBlossoms />
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/assets/education/education-bg.jpg")',
                        filter: 'brightness(0.35)',
                    }}
                />
                <div className="absolute inset-0 bg-black/25 z-0" />

                <div className="container mx-auto px-10 relative z-10">
                    <div className="text-center mb-14">
                        <motion.h3 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 tracking-tighter uppercase">
                            EDUCATION
                        </motion.h3>
                    </div>
                    <div className="space-y-8">
                        {EDUCATION.map((edu, idx) => (
                            <div
                                key={idx}
                                className="max-w-6xl mx-auto bg-stone-950/75 border border-yellow-700/40 p-8 md:p-10 shadow-2xl relative backdrop-blur-sm"
                                style={{ borderColor: 'rgba(234, 179, 8, 0.2)' }}
                            >
                                <div className="flex flex-row gap-6 md:gap-10 items-center">
                                    <div
                                        className={`w-28 h-28 md:w-36 md:h-36 bg-stone-900 flex items-center justify-center border border-yellow-900 shadow-inner p-1 overflow-hidden ${edu.logoCircle ? 'rounded-full' : 'rounded-md'}`}
                                        style={{ borderColor: 'rgba(146, 64, 14, 0.3)' }}
                                    >
                                        <img src={edu.logoPath} alt={`${edu.school} Logo`} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="text-left">
                                        <motion.h3 initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-2xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 mb-4 tracking-tighter uppercase leading-tight">
                                            {edu.school}
                                        </motion.h3>
                                        <div className="space-y-2 text-white">
                                            <p className="text-base md:text-xl font-semibold">{edu.degree}</p>
                                            <p className="text-sm md:text-lg font-semibold text-stone-100">{edu.lineTwo}</p>
                                            <p className="text-sm md:text-lg font-semibold text-stone-100">{edu.lineThree}</p>
                                            <p className="text-base md:text-xl font-semibold text-yellow-300 pt-2">{edu.score}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer id="contact" className="relative py-24 bg-black border-t border-stone-900 overflow-hidden snap-start snap-always">
                <FooterParticles />
                <div className="absolute inset-0 z-0 bg-cover bg-bottom opacity-10" style={{ backgroundImage: 'url("/assets/chronicles/japan-ruins.jpg")' }} />
                <div className="container mx-auto px-10 relative z-20">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                        <div className="text-center lg:text-left">
                            <motion.h2 initial={{ opacity: 0, y: -18, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: false, amount: 0.25 }} className="text-red-800 text-5xl font-serif font-black mb-12 uppercase tracking-[0.4em]">
                                FOLLOW ME
                            </motion.h2>

                            <div className="flex justify-center lg:justify-start gap-12 mb-16">
                                <motion.a
                                    href={PERSONAL_INFO.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }}
                                    className="text-stone-400 transition-all duration-300"
                                    title="GitHub"
                                >
                                    <Github size={40} />
                                </motion.a>
                                <motion.a
                                    href={PERSONAL_INFO.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }}
                                    className="text-stone-400 transition-all duration-300"
                                    title="LinkedIn"
                                >
                                    <Linkedin size={40} />
                                </motion.a>
                                <motion.a
                                    href={PERSONAL_INFO.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }}
                                    className="text-stone-400 transition-all duration-300"
                                    title="Instagram"
                                >
                                    <Instagram size={40} />
                                </motion.a>
                                <motion.a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                                    whileHover={{ scale: 1.3, color: '#EAB308', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }}
                                    className="text-stone-400 transition-all duration-300"
                                    title="Email"
                                >
                                    <Mail size={40} />
                                </motion.a>
                            </div>
                            <p className="block mt-4 text-stone-300 font-semibold tracking-wider">+91 {PERSONAL_INFO.phone}</p>
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-2 text-stone-300 font-semibold tracking-wider"
                            >
                                {PERSONAL_INFO.email}
                            </a>
                            <br />
                            <div className="font-black uppercase text-stone-800" style={{ fontSize: '10px', letterSpacing: '0.6em' }}>
                                &copy; Portfoio • Built by Sankalp Vasekar
                            </div>

                        </div>

                        <div className="relative h-48 md:h-52 w-fit border border-yellow-700/40 bg-black/40 backdrop-blur-sm rounded-md overflow-hidden inline-flex items-center justify-center p-1">
                            <img
                                src="/assets/footer/profile-image.jpg"
                                alt="Profile Upload"
                                className="h-full w-auto object-contain object-center block"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
