export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "linear" },
};

export const fadeUp = {
  initial: { y: 300, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -300, opacity: 0 },
  transition: { damping: 20, duration: 0.7 },
};

export const fadeRight = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { damping: 20, duration: 0.5, delay: 2 },
};

export const projects = [
  {
    name: "Food Catering Website",
    img: "Doya.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://doyastreat.netlify.app",
  },
  {
    name: "Wordle Clone",
    img: "wordle.png",
    tech: ["CSS", "React JS"],
    link: "https://hemdeewordle.netlify.app",
  },
  {
    name: "Countdown Timer",
    img: "countdown.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://hemdeecountdowntimer.netlify.app",
  },
  {
    name: "Color Generator App",
    img: "color-gen.png",
    tech: ["CSS", "React JS", "Value JS"],
    link: "https://hemdeecolorgenerator.netlify.app",
  },
  {
    name: "Educational Website",
    img: "fulaniturto.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://fulaniturto.netlify.app",
  },
  {
    name: "Grocery Todo App",
    img: "grocery.png",
    tech: ["CSS", "React JS"],
    link: "https://hemdeegrocerylist.netlify.app",
  },
  {
    name: "Password Generator App",
    img: "password-gen.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://hemdeepasswordgenerator.netlify.app",
  },
  {
    name: "Meal Website",
    img: "meal.png",
    tech: ["CSS", "React JS"],
    link: "https://hemdeemealwebsite.netlify.app",
  },
  {
    name: "Drumbeat App",
    img: "beat.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://hemdeedrumbeat.netlify.app",
  },
  {
    name: "Drawing App",
    img: "draw-app.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://hemdeedrawingapp.netlify.app",
  },
  {
    name: "Simple Todo App",
    img: "todo.png",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://hemdeetodoapp.netlify.app",
  },
  {
    name: "Weather App",
    img: "weather.png",
    tech: ["CSS", "React JS", "Weather API"],
    link: "https://hemdeeweatherapp.netlify.app",
  },
  {
    name: "Cocktail App",
    img: "cocktail.png",
    tech: ["CSS", "React JS", "Cocktail API"],
    link: "https://hemdeecocktailapp.netlify.app",
  },
];
