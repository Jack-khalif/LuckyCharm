import { Activity, Brain, Droplets, Code, TrendingUp, Stethoscope, Dna } from 'lucide-react';
// Project data
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: any; // Or import specific Lucide icons
  tags: string[];
  status: string;
  domain: string;
  type: 'featured' | 'main' | 'additional';
  githubUrl: string;
  metrics?: { label: string; value: string }[];
  impact?: string;
  achievements?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Wireless Blackbox for PSV Monitoring',
    description:
      'An award-winning IoT system engineered for real-time monitoring of public service vehicles (PSVs) in Kenya. This blackbox captures critical driving data—acceleration, tilt, vibration, temperature—and transmits it to the cloud (ThingSpeak) for analysis. It features an emergency SMS alert system to improve road safety and accountability',
    image: '/matatu.jpg',
    icon: Activity,
    tags: [
      'ESP32',
      'IoT',
      'GPS',
      'GSM',
      'KiCad',
      'ThingSpeak',
      'C++',
      'PCB Design',
    ],
    status: 'Production',
    domain: 'IoT & Transportation',
    type: 'featured',
    githubUrl: 'https://github.com/Jack-khalif/WirelessBlackBox',
    metrics: [
      { label: 'Awards Won', value: '3' },
      { label: 'Sensors', value: '6+' },
      { label: 'Real-time', value: '24/7' },
    ],
    impact:
      'Enhances public transport safety through real-time monitoring and emergency alerts',
    achievements: [
      'Winner of IEEE Entrepreneurship Summit 2025',
      '1st Runner-up in IEEE CAS Student Design Competition',
      'Real-time cloud data integration with ThingSpeak',
      'SMS alert system for emergency situations',
    ],
  },
  {
    id: 2,
    title: 'Akili Dada - Brain Health ML Model',
    description:
      'A machine learning pipeline designed to classify ADHD and predict biological sex using clinical datasets. Built for the WiDS 2025 Datathon, it utilizes XGBoost and SHAP for accurate and explainable results in mental health diagnostics',
    image: '/AKILIml.png',
    icon: Brain,
    tags: ['Machine Learning', 'Python', 'XGBoost', 'SHAP', 'Data Science'],
    status: 'Research',
    domain: 'Healthcare AI',
    type: 'featured',
    githubUrl: 'https://github.com/Jack-khalif/Akili-DADA',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Features', value: '50+' },
      { label: 'Datathon', value: 'WiDS 2025' },
    ],
    impact:
      'Advancing ADHD diagnosis through explainable AI and clinical feature analysis',
    achievements: [
      'Developed for Women in Data Science (WiDS) 2025 Datathon',
      'SHAP-based model explainability implementation',
      'Advanced class imbalance handling techniques',
      'Clinical feature importance analysis',
    ],
  },
  {
    id: 3,
    title: 'Water Quality Analysis Tool',
    description:
      'Reverse Osmosis water quality monitoring system with AI integration.',
    image: '/davisRO.png',
    icon: Droplets,
    tags: ['Python', 'FASTAPI', 'Langchain', 'React', 'FAISS + BM25'],
    status: 'Production',
    domain: 'Environmental Tech',
    type: 'main',
    githubUrl: 'https://github.com/Jack-khalif/Water-RO-AITool',
    metrics: [
      { label: 'Parameters', value: '8+' },
      { label: 'Accuracy', value: '95%' },
      { label: 'Real-time', value: 'Yes' },
    ],
    impact:
      'Ensures water quality compliance through automated monitoring and analysis',
  },
  {
    id: 4,
    title: 'MERN Stack E-commerce Platform',
    description:
      'Full-featured e-commerce platform built with MongoDB, Express, React, and Node.js.',
    image: '/mernhomepage.png',
    icon: Code,
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'E-commerce'],
    status: 'Production',
    domain: 'Web Development',
    type: 'main',
    githubUrl: 'https://github.com/Jack-khalif/MERN-stack-app',
    metrics: [
      { label: 'Stack', value: 'MERN' },
      { label: 'Features', value: 'Full' },
      { label: 'Auth', value: 'Secure' },
    ],
    impact: 'Complete e-commerce solution with modern web technologies',
  },
  {
    id: 5,
    title: 'F1 Qualifying Predictor',
    description:
      'Machine learning model that predicts Formula 1 qualifying results.',
    image: '/F1.jpg',
    icon: TrendingUp,
    tags: [
      'Machine Learning',
      'Python',
      'Pandas',
      'Scikit-learn',
      'Sports Analytics',
    ],
    status: 'Active',
    domain: 'Sports Analytics',
    type: 'main',
    githubUrl: 'https://github.com/Jack-khalif/Formula_1-qualies-predictor',
    metrics: [
      { label: 'Accuracy', value: '78%' },
      { label: 'Data Years', value: '20+' },
      { label: 'Races', value: '400+' },
    ],
    impact:
      'Predicts F1 qualifying results with high accuracy using historical data',
  },
  {
    id: 6,
    title: 'Clinical Decision Support AI',
    description:
      'AI-powered system that assists healthcare professionals in diagnosis and treatment planning.',
    image: '/akilidada.png',
    icon: Stethoscope,
    tags: ['AI', 'Healthcare', 'NLP', 'Python', 'TensorFlow'],
    status: 'Clinical Trial',
    domain: 'Healthcare AI',
    type: 'additional',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Genomic Data Pipeline',
    description:
      'High-performance data processing pipeline for genomic data analysis.',
    image: '/cancer.jpg',
    icon: Dna,
    tags: ['Genomics', 'Big Data', 'Bioinformatics', 'Python', 'Cloud'],
    status: 'Planning',
    domain: 'Bioinformatics',
    type: 'additional',
    githubUrl: '#',
  },
];
//
