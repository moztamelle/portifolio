type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "Javascript",
    icon: "./static/logos/javascript.svg",
  },
  {
    title: "TailwindCSS",
    icon: "./static/logos/tailwind.svg",
  },
  {
    title: "React",
    icon: "./static/logos/react.svg",
  },
  {
    title: "ReactNative",
    icon: "./static/logos/android.svg",
  },
  {
    title: "Typescript",
    icon: "./static/logos/typescript.svg",
  },
  {
    title: "NodeJS",
    icon: "./static/logos/node.svg",
  },
  {
    title: "SpringBoot",
    icon: "./static/logos/spring-boot.svg",
  },
  {
    title: "Git",
    icon: "./static/logos/git.svg",
  },
  {
    title: "Figma",
    icon: "./static/logos/figma.svg",
  },
  {
    title: "Java",
    icon: "./static/logos/java.svg",
  },
  {
    title: "JavaFx",
    icon: "./static/logos/javafx.svg",
  },
  {
    title: "Whatsapp Cloud API",
    icon: "./static/logos/whatsapp.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];
