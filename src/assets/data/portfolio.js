import portfolio1 from '../img/plus-ou-mois.png';
import portfolio2 from '../img/PierreFeuilleCiseaux.png';
import portfolio3 from '../img/lependu.png';
import portfolio4 from '../img/horloge.png';
import portfolio5 from '../img/mon1ersiteCv.png';
import portfolio6 from '../img/ACC.png';
import portfolio7 from '../img/sitevitrine.png';
import portfolio8 from '../img/Lescoussettesdeden.png';
import portfolio9 from '../img/portfolio9.png';
import porfolio10 from '../img/portfolio10.png';
import porfolio11 from '../img/portfolio11.png';
import portfolio12 from '../img/portfolio12.png';



const portfolios = [
                  {
                                    id: "01",
                                    imgURL: portfolio1,
                                    category: "jeu",
                                    title: "Le jeu plus ou moins",
                                    description: "Je l'ai effectué au cours de ma formation de DWWM.",
                                    technologies: ["javascript','css'"],
                                    siteUrl: "https://github.com/saphirrubis/plus-ou-moins",
                  },
                  {
                                    id: "02",
                                    imgURL: portfolio2,
                                    category: "jeu",
                                    title: "Le jeu PierreFeuilleCiseaux",
                                    description: "https://github.com/saphirrubis/PierreFeuilleCiseaux",
                                    technologies: ["'javascript'"],
                                    siteUrl: "https://github.com/saphirrubis/PierreFeuilleCiseaux",
                  },
                  {
                                    id: "03",
                                    imgURL: portfolio3,
                                    category: "jeu",
                                    title: "Mon pendu revisté",
                                    description: "Je l'ai effectué au cours de ma formation de DWWM; je voulais pas faire comme les autres à mettre des images du pendu.Je l'ai fait avec un changement du background",
                                    technologies: ['javascript','css'],
                                    siteUrl: "../src/media/lependu.png",
                  },
                  {
                                    id: "04",
                                    imgURL: portfolio4,
                                    category: "divers",
                                    title: "L'horloge",
                                    description: "Je l'ai effectué au cours de ma formation de DWWM",
                                    technologies: ['javascript','css'],
                                    siteUrl: "https://github.com/saphirrubis/Horloge",
                  },
                  {
                                    id: "05",
                                    imgURL: portfolio5,
                                    category: "site vitrine",
                                    title: "Mon premier site CV",
                                    description: "Je l'ai effectué au cours de ma formation de DWWM.Et vous consultez mon nouveau site CV en version React",
                                    technologies: ['javascript','css'],
                                    siteUrl: "https://github.com/saphirrubis/MonSiteCV",
                  },
                  {
                                    id: "06",
                                    imgURL: portfolio6,
                                    category: "site vitrine",
                                    title: "Mon premier site vitrine",
                                    description: "je l'ai crée au cours de ma formation avec une singularité, il est en SPA. Je lui ai mis un peu de php (formulaire) car on venait juste de commence les cours de php.",
                                    technologies: ['javascript','php', 'css'],
                                    siteUrl: "https://github.com/saphirrubis/A.C.C",
                  },
                  {
                                    id: "07",
                                    imgURL: portfolio7,
                                    category: "site vitrine",
                                    title: " Site vitrine, pédicure-podologue",
                                    description: "e l'ai crée pendant mon stage pour un pédicure-podologue, j'ai choisis de le faire avec le Framework React. ",
                                    technologies: ['javascript','react'],
                                    siteUrl: "#",
                  },

                  {
                                    id: "08",
                                    imgURL: portfolio8,
                                    category: "site vitrine",
                                    title: "Les coussettes d'Eden",
                                    description: "J'ai améloire le front-end du site e-commerce fait sur https://www.webador.fr d'une amie.",
                                    technologies: ["autre"],
                                    siteUrl: "https://www.lescousettesdeden.fr",
                  },
                  {
                                    id: "09",
                                    imgURL: portfolio9,
                                    category: "site E-com",
                                    title: "Création d'un site E-commerce",
                                    description: "j'ai crée un site e-commerce avec symfony, je suis allée juqu'au moyen de paiment. Il manque la page mon compte et le détail d'un produit",
                                    technologies: ["Symfony, CSS"],
                                    siteUrl: "https://github.com/saphirrubis/Mon-site-E-com",
                  },
                  {
                                    id: "10",
                                    imgURL: porfolio10,
                                    category: "site E-com",
                                    title: "L'application d'un site de co-voiturage",
                                    description: "En groupe on a crée un site de co-voiturage. j'ai réalisé le contact, la partie TChat et quelques parties du front",
                                    technologies: ["Symfony, Express, Xampp, React, Tailwind"],
                                    siteUrl: "https://github.com/saphirrubis/HappyRoad",
                  },
                  {
                                    id: "11",
                                    imgURL: porfolio11,
                                    category: "divers",
                                    title: "Essaie pour faire le Tchat",
                                    description: "j'ai réalisé un Tchat, avec des nouveaux langages Nodejs, express. Pour ensuite l'intégres dans l'app de co-voiturage",
                                    technologies: ["express, MongoDB, CSS"],
                                    siteUrl: "https://github.com/saphirrubis/TchatEssaiNodeReact",
                  },
                  {
                                    id: "12",
                                    imgURL: portfolio12,
                                    category: "site E-com",
                                    title: "site en pure JS",
                                    description: "j'ai suivie le cours de openClassRoom pour mieux comprendre Express  et MangoDB. je n'ai réalisé que la partie backend.",
                                    technologies: ["Express, MangoDB, (react)"],
                                    siteUrl: "https://github.com/saphirrubis/Fullstack.Nodejs.Express.MongoDB",
                  },
                  // {
                  //                   id: "01",
                  //                   imgURL: "",
                  //                   category: "",
                  //                   title: "",
                  //                   description: "",
                  //                   technologies: [""],
                  //                   siteUrl: "#",
                  // },
]
export default portfolios;