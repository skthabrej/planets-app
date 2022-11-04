import PlanetsSlider from './components/PlanetsSlider'

import './App.css'

const planetsList = [
  {
    id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
    name: 'Mercury',
    imageUrl:'https://i.postimg.cc/4NsZ9ZFn/580b585b2edbce24c47b2709.png',
    description:'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun planets.',
  },
  {
    id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
    name: 'Venus',
    imageUrl:'https://i.postimg.cc/rsb6dXdF/kisspng-venus-planet-venus-transparent-background-5a77eff99b2c96-5954284415178096576356.png',
    description:'Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'Earth',
    imageUrl:'https://i.postimg.cc/g01rFJqN/580b585b2edbce24c47b2705.png',
    description:'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth’s surface is land consisting of continents and islands.',
  },
  {
    id: 'c2277c2c-f72e-11eb-9a03-0242ac130003',
    name: 'Mars',
    imageUrl:'https://i.postimg.cc/zBjCJKtq/580b585b2edbce24c47b2708.png',
    description:'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.',
  },
  {
    id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
    name: 'Jupiter',
    imageUrl:'https://i.postimg.cc/L8n2DDk1/kisspng-jupiter-planet-solar-system-juno-saturn-jupiter-png-file-5a77ed55767073-91337435151780898148.png',
    description:'Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
  },
  {
    id: 'c2277d9e-f72e-11eb-9a03-0242ac130003',
    name: 'Saturn',
    imageUrl:'https://i.postimg.cc/PJJwTcvM/580b585b2edbce24c47b270c.png',
    description:'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn’s.',
  },
  {
    id: 'c2277e52-f72e-11eb-9a03-0242ac130003',
    name: 'Uranus',
    imageUrl:'https://i.postimg.cc/PxCQXPwc/pngwing-com-1.png',
    description:'Uranus is the seventh planet from the Sun and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
  },
  {
    id: 'c2277f06-f72e-11eb-9a03-0242ac130003',
    name: 'Neptune',
    imageUrl:'https://i.postimg.cc/nr6RbqS0/pngwing-com-2.png',
    description:'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
  },
]

const App = () => <PlanetsSlider planetsList={planetsList} />

export default App