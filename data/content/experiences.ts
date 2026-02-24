type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  date: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
};

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  date: string;
  description: string;
};

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
};

export const experiences: Experience[] = [
  {
    id: 0,
    role: "Desenvolvedor Full Stack",
    company: "MozTech Solutions",
    location: "Maputo, Moçambique",
    date: "Jan 2023 - Presente",
    current: true,
    description: "Empresa de desenvolvimento de software focada em soluções educacionais e empresariais.",
    responsibilities: [
      "Desenvolvimento de aplicações web e mobile",
      "Arquitetura de soluções técnicas",
      "Gestão de equipes de desenvolvimento",
      "Integração com APIs externas",
      "Implementação de boas práticas de código"
    ],
    technologies: ["React", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Tailwind CSS"],
  },
  {
    id: 1,
    role: "Desenvolvedor Frontend",
    company: "Digital Agency",
    location: "Remote",
    date: "Jun 2022 - Dez 2022",
    current: false,
    description: "Agência digital especializada em websites e aplicações web modernas.",
    responsibilities: [
      "Desenvolvimento de interfaces responsivas",
      "Implementação de designs fidelity",
      "Otimização de performance",
      "Trabalho com APIs REST",
      "Colaboração com designers"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Figma"],
  },
  {
    id: 2,
    role: "Estagiário de Desenvolvimento",
    company: "TechStart Mozambique",
    location: "Maputo, Moçambique",
    date: "Jan 2022 - Mai 2022",
    current: false,
    description: "Startup de tecnologia com foco em inovação digital.",
    responsibilities: [
      "Desenvolvimento de landing pages",
      "Manutenção de código existente",
      "Testes de funcionalidade",
      "Suporte técnico a clientes"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    id: 3,
    role: "Freelancer - Desenvolvedor Web",
    company: "Trabalho Independente",
    location: "Remote",
    date: "2020 - 2021",
    current: false,
    description: "Desenvolvimento de projetos freelance para clientes nacionais e internacionais.",
    responsibilities: [
      "Desenvolvimento de websites institucionais",
      "Criação de lojas online",
      "Manutenção e atualização de sites",
      "Consultoria técnica"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  }
];

export const education: Education[] = [
  {
    id: 0,
    degree: "Licenciatura em Engenharia Informática",
    institution: "Universidade Eduardo Mondlane",
    location: "Maputo, Moçambique",
    date: "2019 - 2023",
    description: "Formação em engenharia de software, sistemas de informação e tecnologias emergentes.",
  },
  {
    id: 1,
    degree: "Curso de Desenvolvimento Web",
    institution: "Code Mozambique",
    location: "Maputo, Moçambique",
    date: "2020",
    description: "Bootcamp intensivo de desenvolvimento web com foco em JavaScript e React.",
  }
];

export const certifications: Certification[] = [
  {
    id: 0,
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    date: "2023",
    credentialId: "Coursera-ABC123"
  },
  {
    id: 1,
    title: "React Native: Building Mobile Apps",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UDEMY-789XYZ"
  },
  {
    id: 2,
    title: "Node.js Advanced Concepts",
    issuer: "Udemy",
    date: "2022",
    credentialId: "UDEMY-456DEF"
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2021",
    credentialId: "FCC-2021-ABC"
  }
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native", "HTML/CSS"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  tools: ["Git", "Docker", "Figma", "VS Code", "Postman", "AWS"],
  soft: ["Liderança", "Comunicação", "Trabalho em Equipa", "Gestão de Projetos", "Resolução de Problemas"]
};
