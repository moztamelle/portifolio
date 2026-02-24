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
    "id": 2,
    "role": "Desenvolvedor Full Stack",
    "company": "Freelance",
    "location": "Maputo, Moçambique",
    "date": "Fev 2021 - Presente",
    "current": true,
    "description": "Desenvolvimento de aplicações Mobile, Web e Desktop, criando soluções modernas, escaláveis e com interface responsiva, focadas em performance, usabilidade e boas práticas de arquitetura.",
    "responsibilities": [
      "Desenvolvimento de aplicativos Android e iOS com React Native e Expo",
      "Criação de aplicações web com React.js",
      "Desenvolvimento de aplicações desktop utilizando Java e JavaFX",
      "Criação de design UI/UX do zero com foco em experiência do usuário",
      "Integração com APIs REST utilizando Axios",
      "Implementação de autenticação e controle de acesso",
      "Integração com Google Maps para geolocalização e exibição de mapas",
      "Gerenciamento de estado global com boas práticas",
      "Implementação de leitura e visualização de PDF dentro do aplicativo",
      "Criação de layouts responsivos utilizando Tailwind CSS e NativeWind",
      "Publicação e manutenção de aplicações",
      "Otimização de performance e correção de bugs",
      "Versionamento de código com Git e GitHub"
    ],
    "technologies": [
      "Java",
      "JavaFX",
      "React.js",
      "React Native",
      "Expo",
      "NativeWind",
      "Tailwind CSS",
      "Android",
      "Axios",
      "Google Maps API",
      "PDF Reader",
      "Git",
      "GitHub"
    ]
  },
  {
    id: 0,
    role: "Frontend Developer",
    company: "Pay Tesy Moçambique",
    location: "Modelo Híbrido",
    date: "Fev 2024 - Jan 2026",
    current: false,
    description: "Desenvolvedor Frontend na PayTesy, trabalho em um projeto estruturado no padrão MVVM (Model-View-ViewModel), o que me permitiu aprimorar significativamente minhas habilidades na organização e separação de responsabilidades dentro do desenvolvimento mobile.",
    responsibilities: [
      "Desenvolvimento de aplicações mobile com React Native",
      "Implementação de interfaces modernas com Tailwind CSS",
      "Gestão de dados com GraphQL",
      "Trabalho em ambiente corporativo remoto",
      "Comunicação clara com a equipe"
    ],
    technologies: ["React Native", "Tailwind CSS", "GraphQL", "MVVM", "Android", "TypeScript"],
  },
  {
    id: 1,
    role: "Desenvolvedor Full Stack",
    company: "MaCh Digital",
    location: "Maputo, Moçambique",
    date: "Jun 2024 - Abr 2025",
    current: false,
    description: "Trabalho remoto como Desenvolvedor FullStack (Freelancer) na MachDigital, também atuo como gestor técnico do projeto a nível de código, participei do desenvolvimento do sistema de gestão de cliente para empresa ADRMM(Águas da Região Metropolitana de Maputo, SA).",
    responsibilities: [
      "Desenvolvimento Full Stack de projetos",
      "Gestão técnica de código",
      "Colaboração com equipe remota",
      "Implementação de soluções inovadoras",
      "Assegurar qualidade e inovação nos projetos"
    ],
    technologies: ["React", "Node.js", "TypeScript", "MVVM", "Google Maps API", "PostgreSQL"],
  }
];

export const education: Education[] = [
  {
    id: 0,
    degree: "Finalista do Curso de Licenciatura em Engenharia Informática",
    institution: "Universidade Eduardo Mondlane",
    location: "Maputo, Moçambique",
    date: "2019 - 2023",
    description: "Formação em engenharia de software, sistemas de informação e tecnologias emergentes.",
  }
];


export const skills = {
  frontend: [
    { name: "React", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Nativewind", level: 90 },
    { name: "Tailwind CSS", level: 80 },
    { name: "React Native", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "SpringBoot", level: 60 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 65 }
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "Figma", level: 70 },
    { name: "Postman", level: 80 }
  ],
  soft: [
    { name: "Comunicação", level: 85 },
    { name: "Trabalho em Equipa", level: 90 },
    { name: "Gestão de Projetos", level: 75 }
  ]
};
