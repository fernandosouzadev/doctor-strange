import { NextApiRequest, NextApiResponse } from "next";

export default function Characters(req: NextApiRequest, res: NextApiResponse) {

    
const caracters = [{
            id:'1',
            name:'Doctor Strange',
            image:'/images/character (1).jpg',
            imageCharacter:'/images/doctor-home.png',
            description:'Doctor Stephen Vincent Strange M.D., Ph.D is the former Sorcerer Supreme and Master of the Mystic Arts. Originally being a brilliant but arrogant neurosurgeon, Strange got into a car accident which resulted with his hands becoming crippled. Once Western medicine failed him, Strange embarked on a journey to Kamar-Taj, where he was trained by the Ancient One in the ways of Magic and the Multiverse. Although he focused on healing his hands, Strange was drawn into a conflict with Kaecilius and the Zealots, who were working for Dormammu and had sought to merge Earth with the Dark Dimension to find an eternal life. Following the demise of the Ancient One and the defeat of Kaecilius, Strange then became the new protector for the Sanctum Sanctorum, seeking to defend the Earth from other inter-dimensional threats.From his new position, Strange aided Thor in locating Odin, before he learned of Thanos attempts to gain all of the Infinity Stones and cause a universe wide genocide. Since Strange was the protector of the Time Stone, he was attacked and captured by Thanos Black Order, only for him to then be rescued by Iron Man and Spider-Man. Having also been joined by the Guardians of the Galaxy, Strange battled against Thanos. However, as Strange had seen into the future and knew his only path to victory, he had willing handed over the Time Stone, allowing Thanos to enact the Snap, killing Strange and trillions of other lives. However, Strange and all the rest of Thanos victims had been resurrected five years later by the Avengers, and battled against an alternate Thanos, which resulted with Iron Man sacrificing his life to save the universe.Strange offered his aid to Spider-Man, whose identity of Peter Parker was unmasked by Mysterio, as he asked Strange to make the world forget this. However, due to Parkers interference, the spell soon went wrong, and Strange inadvertently unleashed enemies of Spider-Man from across the Multiverse. Capturing these enemies, Strange tried to use the Macchina di Kadavus to send them to their universes to meet their inevitable fates, which Spider-Man had refused to allow, hoping to give these people a chance at redemption. Having been trapped in the Mirror Dimension, Strange then returned and fought to contain the Multiversal rift. With no other choice, Strange cast a spell to return the visitors back to their universes and close the rifts, but also at the cost of making everyone, including himself, forget Parkers existence.',
            skills:{
                Powers:'MAGIC, ELDRITCH MAGIC, SPELL CASTING, ENERGY PROTECTION, PORTAL CREATION, DIMENSIONAL TRAVEL, ASTRAL PROJECTION, MIRROR DIMENSION MAGIC, TIME MANIPULATION', 
                Grid:[
                        {
                            name:'Intelligence',
                            value:70
                        },
                        {
                            name:'Strength',
                            value:50
                        },
                        {
                            name:'Speed',
                            value:40
                        },
                        {
                            name:'Energy',
                            value:90
                        },
                        {
                            name:'FightingSkill',
                            value:50
                        },
                ],
            },
            cast:{
                name:'',
                image:'',
                description:'',
            },
            comics:{
                
            }
        
        
        },
        {
            id:'2',
            name:'Scarlet Witch',
            image:'/images/character (1).png',
            imageCharacter:'/images/ScarletWitch.png',
            description:'Wanda Maximoff is a native of Sokovia who grew up with her fraternal twin brother, Pietro. Born with the latent mythical ability to harness Chaos Magic, she developed a hatred against Tony Stark and rallied anti-American protests after the Novi Grad Bombings killed her parents. Years later, in an effort to help purge their country of strife, the twins joined HYDRA and agreed to undergo experiments with the Scepter under the supervision of Baron Strucker, with the Mind Stone awakening and amplifying Wandas powers. While her brother developed super-speed, she attained various psionic abilities. When HYDRA fell, the twins joined Ultron to get their revenge on Stark, but abandoned him when they discovered his true intentions to eradicate humanity. Wanda and Pietro joined the Avengers during the Battle of Sokovia to stop Ultron; Pietro was killed during the battle but Wanda survived, and shortly after relocated to the Avengers Compound in the United States of America.During the Avengers Civil War, she sided with Captain America and was briefly imprisoned on the Raft before Rogers freed her alongside his teammates. Over the next two years, Maximoff reunited and reconciled with Vision, and together the two started living off the grid in Europe, forming a romantic relationship. In 2018, they were ambushed by the Black Order, who sought the Mind Stone, and rejoined the Avengers to seek refuge in Wakanda. Maximoff took part in the citys defense when the Black Order invaded the city, where she was forced to kill Vision to prevent Thanos from completing the Infinity Gauntlet. However, she witnessed as Thanos resurrected and killed Vision before initiating the Snap, which claimed Maximoffs life. After the victims of the Snap were resurrected in 2023, Maximoff was among the many heroes who fought during the Battle of Earth, defeating Thanos and his armies. Soon after, Maximoff became overwhelmed by immense grief from her recent personal losses, unwittingly unleashing her Chaos Magic powers to enthrall the citizens of Westview into creating an alternate idyllic paradise of classical sitcom tropes. With a recreated Vision as her husband, Maximoff lived her ideal life, even producing twin sons, Tommy and Billy. Further complicating the crisis was Agatha Harkness, a fellow witch who sought to understand the nature of Maximoffs new reality, and a S.W.O.R.D. operation led by Tyler Hayward who wished to eliminate her. Maximoff, now knowing her own identity as the fabled Scarlet Witch, defeated Harkness and the S.W.O.R.D. agents, and dispelled her reality, erasing her family in the process. Realizing the amount of damage she had done to Westview, Maximoff fled into isolation and began studying the Darkhold.',
            skills:{
                Powers:'CHAOS MAGIC, PROBABILITY FIELD MANIPULATION, REALITY WARPING, NEURO-ELETRIC INTERFACING, MENTAL MANIPULATION, TELEKINESIS, FORCE FIELD GENERATION, TELETRANSPORT',
                Grid:[
                        {
                            name:'Intelligence',
                            value:40
                        },
                        {
                            name:'Strength',
                            value:70
                        },
                        {
                            name:'Speed',
                            value:30
                        },
                        {
                            name:'Energy',
                            value:90
                        },
                        {
                            name:'FightingSkill',
                            value:50
                        },
                ],
            },
            cast:{
                name:'',
                image:'',
                description:'',
            },
            
        },
        {
            id:'3',
            name:'Wong',
            image:'/images/character (4).jpg',
            imageCharacter:'/images/unknown.png',
            description:'Wong (Mandarin: 王) is the current Sorcerer Supreme, protector of the New York Sanctum and librarian of Kamar-Taj. When their former librarian was murdered by Kaecilius and the Zealots, Wong then became the highly protective keeper of all the ancient books when he met Stephen Strange, and assisted him in his studies. As Kaecilius attempted to use his power to bring Dormammu to Earth, Wong and the other Masters used their power to eventually defeat him, at the cost of Ancient Ones death. With Kaecilius conflict over, Wong had then joined Doctor Strange in protecting the New York Sanctum. Wong stood with Strange and Iron Man when the Black Order had attacked the Earth in search of the Time Stone, holding them back until Wong was forced to remain behind to protect the Sanctum as Ebony Maw managed to kidnap Strange. When Strange perished along with half of the universes population to Thanos, Wong became the new Sorcerer Supreme. In 2023, he transported many of the revived Avengers and their allies to New York in a massive battle against an alternate Thanos, who had decided to destroy the universe with the Infinity Stones and create a new one in his image. The coalition opposing Thanos succeeded as Thanos and his army crumbled to dust, and Wong attended Tony Starks funeral with Doctor Strange and the rest of their allies.',
            skills:{
                Powers:'MAGIC, SPELL CASTING, ENERGY PROTECTION, PORTAL CREATION, DIMENSIONAL TRAVEL, ASTRAL PROJECTION, MIRROR DIMENSION MAGIC', 
                Grid:[
                        {
                            name:'Intelligence',
                            value:60
                        },
                        {
                            name:'Strength',
                            value:50
                        },
                        {
                            name:'Speed',
                            value:30
                        },
                        {
                            name:'Energy',
                            value:80
                        },
                        {
                            name:'FightingSkill',
                            value:50
                        },
                ],
            },
            cast:{
                name:'',
                image:'',
                description:'',
            },
            comics:{
                
            }
        
        
        },
        {
            id:'4',
            name:'Baron karl Mordor',
            image:'/images/character (3).jpg',
            imageCharacter:'/images/unknown.png',
            description:'Karl Mordo is a former member of the Masters of the Mystic Arts and had been a close ally to the Ancient One, assisting in recruiting and training their future sorcerers. When Mordo had encountered Stephen Strange, he invited him inside Kamar-Taj, despite the Ancient Ones objections, and had later aided him with the conflict against Kaecilius and the Zealots. During this battle, Mordo learned that the Ancient One drew all her power from the Dark Dimension, which was forbidden to the Masters. Following the death of the Ancient One and the eventual defeat of Kaecilius, Mordo was so mortified by his colleagues constant violation of natural laws that he turned his back on his allies. Instead, he chose to restore balance by stripping sorcerers of all their powers.',
            skills:{
                Powers:'MAGIC, ELDRITCH MAGIC, SPELL CASTING, ENERGY PROTECTION, PORTAL CREATION, DIMENSIONAL TRAVEL, ASTRAL PROJECTION, MIRROR DIMENSION MAGIC', 
                Grid:[
                        {
                            name:'Intelligence',
                            value:80
                        },
                        {
                            name:'Strength',
                            value:40
                        },
                        {
                            name:'Speed',
                            value:60
                        },
                        {
                            name:'Energy',
                            value:80
                        },
                        {
                            name:'FightingSkill',
                            value:90
                        },
                ],
            },
            cast:{
                name:'',
                image:'',
                description:'',
            },
            comics:{
                
            }
        
        
        },
        {
            id:'5',
            name:'America Chavez',
            image:'/images/america-chavez.jpeg',
            imageCharacter:'/images/unknown.png',
            description:'America Chavez is a teenager with the ability to travel between dimensions of the Multiverse, as well as an ally of Doctor Strange.',
            skills:{
                Powers:'INTERDIMENSIONAL TRAVEL, TIME TRAVEL, STAR PORTAL CREATION, ENERGY INFUSION', 
                Grid:[
                        {
                            name:'Intelligence',
                            value:50
                        },
                        {
                            name:'Strength',
                            value:30
                        },
                        {
                            name:'Speed',
                            value:40
                        },
                        {
                            name:'Energy',
                            value:90
                        },
                        {
                            name:'FightingSkill',
                            value:40
                        },
                ],
            },
            cast:{
                name:'',
                image:'',
                description:'',
            },
        
        
        },
        {
            id:'6',
            name:'Master Doctor Strange',
            image:'/images/character (2).jpg',
            imageCharacter:'/images/unknown.png',
            description:'BEING A SOBER VARIANT OF DOCTOR STRANGE, HIS WORLD HAS AN INCURSION AND HE WAS THE ONLY SURVIVOR AND PROTECTOR OF THE DARKHOLD.',
            skills:{
                Powers:'MAGIC, ELDRITCH MAGIC, SPELL CASTING, ENERGY PROTECTION, PORTAL CREATION, DIMENSIONAL TRAVEL, ASTRAL PROJECTION, MIRROR DIMENSION MAGIC, SONGS MAGIC, CHAOS MAGIC', 
                Grid:[
                        {
                            name:'Intelligence',
                            value:80
                        },
                        {
                            name:'Strength',
                            value:50
                        },
                        {
                            name:'Speed',
                            value:30
                        },
                        {
                            name:'Energy',
                            value:90
                        },
                        {
                            name:'FightingSkill',
                            value:80
                        },
                ],
            },
            cast:{
                name:'',
                image:'',
                description:'',
            },
            
        
        },
        

    ]
    res.send(caracters)
}



