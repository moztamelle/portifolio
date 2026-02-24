type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
};

export const routes: Route[] = [
  {
    title: "Início",
    path: "/",
  },
  {
    title: "Projectos",
    path: "/projects",
  },
  {
    title: "Experiências",
    path: "/experiences",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projectos",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Experiências",
          link: "/experiences",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/FranciscoTamele",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ftamele29",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:franciscotamelle@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
    {
      title: "Contactos",
      links: [
        {
          name: "+258 845 857 656",
          link: "#",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: false,
        },
        {
          name: "+258 865 857 656",
          link: "#",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: false,
        },
        {
          name: "franciscotamelle@gmail.com",
          link: "#",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: false,
        },
      ],
    },
  ]
};
