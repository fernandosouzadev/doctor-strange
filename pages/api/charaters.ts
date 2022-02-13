import { NextApiRequest, NextApiResponse } from "next";

export default function Characters(req: NextApiRequest, res: NextApiResponse) {
    
const caracters = [{
    name:'Doctor Strange',
    image:'/images/character (1).jpg',
    imageCharacter:'/images/doctor-home.png',
    description:'test description Doctor',
    skills:'',
    cast:'',
    mcu:'',
},
{
    name:'Scarlet Witch',
    image:'/images/character (1).png',
    imageCharacter:'/images/ScarletWitch.png',
    description:'test description Scarlet',
    skills:'',
    cast:'',
    mcu:'',
},
{
    name:'Master Doctor Strange',
    image:'/images/character (2).jpg',
    imageCharacter:'',
    description:'test description master strange',
    skills:'',
    cast:'',
    mcu:'',
},
{
    name:'Master Wong',
    image:'/images/character (4).jpg',
    imageCharacter:'',
    description:'test description wong',
    skills:'',
    cast:'',
    mcu:'',
},
{
    name:'America Chavez',
    image:'/images/america-chavez.jpeg',
    imageCharacter:'',
    description:'test description Chavez',
    skills:'',
    cast:'',
    mcu:'',
},
{
    name:'Master Mordor',
    image:'/images/character (3).jpg',
    imageCharacter:'',
    description:'test description mordor',
    skills:'',
    cast:'',
    mcu:'',
},
]
    res.send(caracters)
  }
