import DragNDropImg from './assets/dragndrop-todo.png'
import AppleCloneImg from './assets/apple-clone.png'
import LiveIcon from './assets/monitor.svg'
import GithubIcon from './assets/github.svg'

const projects = [
    {
        id: 100,
        name: 'DragNDrop ToDo',
        class: 'todo',
        strapLine:
            'A MERN-stack CRUD App helping you keep track of your tasks and priorities. Integrated with RESTful API design',
        description:
            "A responsive MERN-stack app integrating CRUD functionality. The Node.js server is built with RESTful architecture whereby tasks and priorities are saved on MongoDB. The Front End is styled with styled components and built with React. This project is designed to keep track of tasks and priorities and offers 'Light' and 'Dark' themed UIs. Styles created according to specifications detailed in the style guide of a frontendmentor.io challenge.",
        img: DragNDropImg,
        technology: ['React', 'MongoDB', 'Express.js', 'Node.js'],
        deployed: ['Github Pages', 'Heroku'],
        styling: 'Styled Components',
        icons: [LiveIcon, GithubIcon],
        features: [
            'Drag and drop is touch, mouse, and key enabled',
            'Light and Dark themes',
            'Data persistance on refresh',
            'Filter tasks on display by status',
            'Responsive',
        ],
        libraries: [
            {
                frontend: [
                    'axios',
                    'react-beautiful-dnd',
                    'styled-components',
                    'gh-pages',
                ],
            },
            { backend: ['dotenv', 'express', 'mongoose'] },
        ],
    },
    {
        id: 101,
        name: 'Apple Clone',
        class: 'apple',
        strapLine:
            'A clone of apple.com homepage with live links, built with React',
        description:
            "A responsive clone of the apple.com homepage (November 2020 version). Built with React, this Front End app contains live links for all apple products. Whilst building the clone, I'd spotted logo animations in the Shop section of apple's homepage fired on load. To rectify this, an intersection observer was created to ensure animations fire only when component is in viewport.",
        img: AppleCloneImg,
        technology: ['React'],
        deployed: ['Github Pages'],
        styling: 'CSS',
        icons: [LiveIcon, GithubIcon],
        features: [
            'Animations fire in viewport',
            'Live links for all apple products',

            'Responsive',
        ],
        libraries: [
            { frontend: ['react-intersection-observer', 'gh-pages'] },
            { backend: [] },
        ],
    },
    {
        id: 102,
        name: 'Perspective News',
        class: 'news',
        strapLine:
            'A Full-stack app implementing RESTful services. The customisable search function helps you find all the News and Articles to suit your needs. Powered by Mediastack API ',
        description:
            'A responsive Full-stack app integrating RESTful architecture on the Node.js server, and a Front End styled with SCSS and built with React. The app serves up the top 50 News and Articles across 7,500 sources and 50 countries. A customisable search function enables clients to find all the News and Articles relevant to their search parameters. This project utilises the Mediastack API.',
        img: DragNDropImg,
        technology: ['React', 'Express.js', 'Node.js', 'REST API'],
        deployed: ['Github Pages', 'Heroku'],
        styling: 'SCSS',
        icons: [LiveIcon, GithubIcon],
        features: [
            'Customisable search function',
            'Access News and Articles across 7,500 sources, 50 countries, 13 languages',
            'Responsive',
        ],
        libraries: [
            {
                frontend: [
                    'axios',
                    'dotenv',
                    'node-sass',
                    'react-router-dom',
                    'react-select',
                    'gh-pages',
                ],
            },
            { backend: ['axios', 'dotenv', 'express', 'qs'] },
        ],
    },
    {
        id: 103,
        name: 'Rock, Paper, Scissors',
        class: 'rock',
        strapLine:
            "A Front End app to play endless rounds of Rock, Paper, Scissors. Built with vanillaJS, the live score display helps you keep tabs on who's winning",
        description:
            "A responsive app for endless rounds of Rock, Paper, Scissors. A live score display helps you to keep tabs on who's winning. The project was built to specifications detailed in the style guide of a frontendmentor.io challenge.",
        img: DragNDropImg,
        technology: ['Vanilla JavaScript'],
        deployed: ['Github Pages'],
        styling: 'CSS',
        icons: [LiveIcon, GithubIcon],
        features: [
            'Touch and Mouse enabled',
            'Live score display',
            'Responsive',
        ],
        libraries: [{ frontend: ['N.A'] }, { backend: ['N.A'] }],
    },
]

export default projects
