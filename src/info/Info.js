import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kevin",
    lastName: "Ng",
    initials: "kn", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

        {
            emoji: '🌎',
            text: 'based in Boston'
        },
        {
            emoji: "💼",
            text: "open to work"
        },
        {
            emoji: "📧",
            text: "kevinwng23@gmail.com"
        },
        {
            emoji: "📱",
            text: "617-347-7669"
        }
    ],
    socials: [

        {
            link: "https://github.com/kevinszn23",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kevinng23/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://drive.google.com/file/d/1xshbiuTkvCZMayIMOSdPd2NuAjeVgglA/view?fbclid=IwAR3HvYz87L3Sp_sfExojovU05DwIyD_8FpaYeG0y08tr95CfgoEgdkn8Ywo&pli=1",
            icon: "fa-solid fa-file",
            label: 'resume'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi! I'm Kevin and I'm a Software Engineer with a background in healthcare. With a passion for fullstack development, it made sense for me to pivot into Software Engineering to express creative freedom and develop real world applications and I am loving it. I've continued to develop my autonomous and collaborative skills as I love tackling complex problems and solving them either independently or with a team. I aim to constantly grow my skillset and positively impact others!",
    skills:
        {
            proficientWith: ['JavaScript', 'React', 'Python', 'PostgreSQL', 'Node.js', 'Django', 'MongoDB', 'ExpressJS', 'Git', 'GitHub', 'Heroku'],
            exposedTo: ['Bulma', 'Bootstrap']
        }
    ,
    hobbies: [
        {
            label: 'going to the gym',
            emoji: '🏋️'
        },
        {
            label: 'playing video games',
            emoji: '🎮'
        },
        {
            label: 'traveling',
            emoji: '✈️'
        },
        {
            label: 'watching the NBA',
            emoji: '🏀'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Streamify",
            live: "https://this-is-streamify.onrender.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/brendonvan/This-Is-Streamify", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Earthbnb",
            live: "https://earth-bnb.netlify.app/",
            source: "https://github.com/kevinszn23/Project-3-Earthbnb-frontend",
            image: mock2
        },
        {
            title: "EZBay",
            live: "https://ebay-django.herokuapp.com/",
            source: "https://github.com/kevinszn23/Capstone-EZBay-Django",
            image: mock3
        },
        {
            title: "Kombo Kards",
            live: "https://kevinszn23.github.io/Project-1-Kombo-Kards/",
            source: "https://github.com/kevinszn23/Project-1-Kombo-Kards",
            image: mock4
        },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}