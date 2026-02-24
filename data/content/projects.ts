import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "MoEvents",
    desc: "Aplicação Gestão de Eventos, Cria convites code QrCode, Mapeamento do salão e mais.",
    img: "/static/projects/MoEvents.png",
    link: "https://play.google.com/store/apps/details?id=com.mozta.evento",
    tags: ["Expo", "ReactNative", "Nativewind", "Typescript", "Whatsapp Cloud", "MVVM", "Playstore"],
  },
  {
    id: 1,
    title: "AprendeMais",
    desc: "Aprende Mais é um aplicativo educacional | quizzes | biblioteca digital.",
    img: "/static/projects/maismobile.png",
    link: "https://play.google.com/store/apps/details?id=com.mozta.quiz&hl=pt_PT",
    tags: ["Expo", "ReactNative", "Nativewind", "Typescript", "PdfReader", "MVVM", "Playstore"],
  },
  {
    id: 2,
    title: "AprendeMais Desktop",
    desc: "Software Educacional, quiz interativos e divertidos.",
    img: "/static/projects/maisdesktop.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    tags: ["Java", "JavaFx", "NodeJs", "Api"],
  },
  {
    id: 3,
    title: "Saca",
    desc: "Sistema de Desempenho Ambiental",
    img: "/static/projects/saca.png",
    tags: ["React", "API", "TailwindCss", "Nodejs", "Postgres", "MVC"],
  },
  {
    id: 4,
    title: "AcadMoz Web",
    desc: "Software de Gestão do contéudo das aplicações AprendeMais",
    img: "/static/projects/acadmoz.png",
    link: "https://acad.moztaservicos.com/",
    tags: ["React", "Typescript", "Yarn", "Tailwind", "Material UI", "MVVM"],
  },
  {
    id: 5,
    title: "Api AcadMoz",
    desc: "API das Aplicações AprendeMais,  NodeJs com express",
    img: "/static/projects/acadmoz-api.png",
    tags: ["NodeJs", "Yarn", "Express", "Restfull", "Postgres"],
  },
  {
    id: 6,
    title: "Api MoEvents",
    desc: "API da Aplicação MoEvents NodeJs com express",
    img: "/static/projects/moevents-api.png",
    tags: ["NodeJs", "Yarn", "Express", "Socket.IO", "Restfull", "Postgres"],
  }
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
