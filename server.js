const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3000);
app.locals.title = "She's a Scientist"

app.get('/', (request, response) => {
    response.send("Welcome to She's a Scientist");
});

const corsOptions = {
  origin: 'http://localhost:3001', 
  methods: 'GET,POST',          
  allowedHeaders: 'Content-Type,Authorization', 
};

app.use(cors(corsOptions));

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})


app.locals.womenScientists = [
  {
    name: 'Margaret Oakley Dayhoff',
    field: 'Physics, Chemistry',
    dateOfBirth: 'March 11, 1925',
    dateOfDeath: 'February 5, 1984',
    accomplishment: 'She pioneered the field of bioinformatics and gave amino acids their single letter codes',
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/en/e/e5/Photo_of_Margaret_Oakley_Dayhoff.jpg",
    backgroundImage: "https://cdn.rcsb.org/pdb101/learn/resources/guide-to-understanding-pdb-data/images/3pgk-representations.jpg",
    blurb: "Margaret Oakley Dayhoff, born in 1925, was a pioneering American biochemist and computational biologist renowned for her groundbreaking work in protein sequence analysis. She is celebrated for developing the first computer-based method for aligning protein sequences, a fundamental technique in modern bioinformatics. Dayhoff's seminal Atlas of Protein Sequence and Structure, published in 1965, laid the foundation for our understanding of protein evolution and structure-function relationships. Her visionary contributions revolutionized the field, shaping the way researchers analyze and interpret biological data, and her legacy continues to inspire scientists worldwide in the pursuit of understanding life at the molecular level. She is also the creator of she's a scientist©'s grandma!",
    wikipediaLink: "https://en.wikipedia.org/wiki/Margaret_Oakley_Dayhoff" 
  },
  {
    name: 'Marie Curie',
    field: 'Physics, Chemistry',
    dateOfBirth: 'November 7, 1867',
    dateOfDeath: 'July 4, 1934',
    accomplishment: 'She discovered radioactivity',
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTfAXO57aVAkHz63QhlrUGfwIpwI9GqdNEl-1hMBBlWgJAk1y71AvhjylR5EC7lULxzMODPhIvsYLwtirc",
    backgroundImage: "https://images.newscientist.com/wp-content/uploads/2019/07/07114117/gettyimages-50693712.jpg",
    blurb: "Marie Curie, a remarkable physicist and chemist born in 1867, made indelible contributions to science and human knowledge. Renowned for her pioneering research on radioactivity, Curie became the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields—Physics and Chemistry. Her groundbreaking discoveries, including the isolation of radium and polonium, laid the groundwork for countless advancements in medicine, industry, and physics. Despite facing numerous obstacles as a woman in science, Curie's unwavering dedication and relentless pursuit of knowledge cemented her as an icon of scientific excellence and a trailblazer for future generations of women in STEM. Her legacy continues to inspire scientists worldwide, serving as a testament to the transformative power of curiosity, perseverance, and intellectual courage.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Marie_Curie"
  },
  {
    name: 'Ada Lovelace',
    field: 'Computer Science',
    dateOfBirth: 'December 10, 1815',
    dateOfDeath: 'November 27, 1852',
    accomplishment: 'She was the first computer programmer',
    id: 3,
    image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQOMHK4FSg2w_2qpcLG05gbIvkT0e8IcFefqBw7o7fKf9RsjL_BdCZOCSx4jKXPJXkJ4DetbI5kfcyXYpA",
    backgroundImage: "https://pcsite.co.uk/wp-content/uploads/2023/12/Ada-Lovelace-contributions-to-computer-science-1024x585.jpg",
    blurb: "Ada Lovelace, born in 1815, is celebrated as the world's first computer programmer and a visionary figure in the history of computing. Recognized for her collaboration with Charles Babbage on his Analytical Engine, Lovelace wrote the first algorithm intended for implementation on a machine, making her a pioneer in the field of computer science. Her insights into the potential of computing extended beyond mere calculation, as she envisioned computers' capabilities for creative expression and scientific exploration. Despite the constraints of her time, Lovelace's foresight and analytical prowess laid the groundwork for modern computing and inspired generations of mathematicians, scientists, and engineers. Her legacy serves as a testament to the transformative power of intellect, imagination, and innovation in shaping the world we live in today.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Ada_Lovelace"
  },
  {
    name: 'Jane Goodall',
    field: 'Primatology',
    dateOfBirth: 'April 3, 1934',
    dateOfDeath: 'n/a',
    accomplishment: 'She studied social and family interactions of wild chimpanzees',
    id: 4,
    image: "https://janegoodall.org/wp-content/uploads/gallery_06_jg3.jpg",
    backgroundImage: "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/2020/02/jg_ap0170_4.png",
    blurb: "Jane Goodall, born in 1934, is a renowned primatologist, ethologist, and conservationist best known for her groundbreaking studies of chimpanzees in Tanzania's Gombe Stream National Park. Her pioneering research revolutionized our understanding of primate behavior, revealing remarkable insights into their social structures, tool use, and emotional lives. Goodall's work transcends scientific inquiry, as she has dedicated her life to conservation efforts and advocating for the protection of endangered species and their habitats. Through her tireless advocacy and grassroots initiatives, she has inspired global conservation movements and empowered communities to take action for wildlife and the environment. Goodall's enduring legacy serves as a beacon of hope for conservationists worldwide, reminding us of our responsibility to protect and preserve the natural world for future generations.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jane_Goodall"
  },
  {
    name: 'Rosalind Franklin',
    field: 'Chemistry',
    dateOfBirth: 'July 25, 1920',
    dateOfDeath: 'April 16, 1958',
    accomplishment: 'She contributed to the discovery of the DNA double helix structure',
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UUXozMV_zdpXoGMx4qMRk_ByZsKO_KY2a4Sbx6FOEM1DcxCQD9E3oq2HiyWc4fSyv-Q&usqp=CAU",
    backgroundImage: "https://media.istockphoto.com/id/1297146235/photo/blue-chromosome-dna-and-gradually-glowing-flicker-light-matter-chemical-when-camera-moving.jpg?s=612x612&w=0&k=20&c=yjSdodXRBvtwzOYtQTqetnn3b4wWDNpF6keupxqxric=",
    blurb: "Rosalind Franklin, a pioneering British scientist born in 1920, made significant contributions to the understanding of the molecular structures of DNA, RNA, viruses, and coal. Her groundbreaking X-ray diffraction images of DNA molecules provided critical evidence for the double helix structure, a discovery credited to James Watson and Francis Crick. Despite facing discrimination and marginalization in the male-dominated scientific community, Franklin's meticulous research laid the foundation for the elucidation of DNA's structure. Her work paved the way for advancements in molecular biology, genetics, and medicine, profoundly impacting scientific research and our understanding of life's fundamental processes. Franklin's legacy endures as a testament to her intellect, integrity, and perseverance, inspiring generations of scientists to pursue discovery and innovation in the face of adversity.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Rosalind_Franklin"
  },
  {
    name: 'Dorothy Hodgkin',
    field: 'Chemistry',
    dateOfBirth: 'May 12, 1910',
    dateOfDeath: 'July 29, 1994',
    accomplishment: 'She developed protein crystallography',
    id: 6,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Dorothy_Hodgkin_Nobel.jpg/220px-Dorothy_Hodgkin_Nobel.jpg",
    backgroundImage: "https://assets.technologynetworks.com/production/dynamic/images/content/305906/x-ray-crystallography-exploring-the-frontiers-of-structural-biology-305906-960x540.jpg?cb=9736526",
    blurb: "Dorothy Hodgkin, born in 1910, was a pioneering British chemist renowned for her groundbreaking work in X-ray crystallography, particularly in determining the structures of complex biomolecules. She made significant contributions to the elucidation of the structures of important biochemical compounds, including penicillin, vitamin B12, and insulin. Hodgkin's pioneering research revolutionized our understanding of molecular structures, laying the foundation for advancements in chemistry, biochemistry, and medicine. Her work earned her numerous accolades, including the Nobel Prize in Chemistry in 1964, making her the third woman to receive this prestigious honor. Hodgkin's legacy continues to inspire scientists worldwide, underscoring the transformative power of curiosity, perseverance, and scientific discovery in advancing human knowledge and improving lives.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Dorothy_Hodgkin"
  },
  {
    name: 'Barbara McClintock',
    field: 'Genetics',
    dateOfBirth: 'June 16, 1902',
    dateOfDeath: 'September 2, 1992',
    accomplishment: 'She discovered transposons',
    id: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg/489px-Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg",
    backgroundImage: "https://media.istockphoto.com/id/1297146235/photo/blue-chromosome-dna-and-gradually-glowing-flicker-light-matter-chemical-when-camera-moving.jpg?s=612x612&w=0&k=20&c=yjSdodXRBvtwzOYtQTqetnn3b4wWDNpF6keupxqxric=",
    blurb: "Barbara McClintock, a pioneering American geneticist born in 1902, made revolutionary discoveries in the field of genetics, particularly in understanding the nature of genetic elements and the regulation of gene expression in maize (corn). She is best known for her discovery of transposable elements, or 'jumping genes,' which fundamentally changed our understanding of how genetic information is organized and regulated. Despite facing skepticism and resistance from the scientific community, McClintock's persistence and groundbreaking research earned her the Nobel Prize in Physiology or Medicine in 1983, making her the first woman to receive an unshared Nobel Prize in that category. Her work paved the way for advancements in genetics, genomics, and molecular biology, inspiring future generations of scientists to explore the intricacies of the genetic code and its impact on life. McClintock's legacy serves as a testament to the power of perseverance, intuition, and independent thinking in driving scientific discovery and innovation.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Barbara_McClintock"
  },
  {
    name: 'Emmy Noether',
    field: 'Mathematics',
    dateOfBirth: 'March 23, 1882',
    dateOfDeath: 'April 14, 1935',
    accomplishment: "She proposed Noether's theorem in theoretical physics",
    id: 8,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfQi4fN_xQ2cVzrjRV3FaArHGCD0kdipRqTZF7vweOH1lpNH0l",
    backgroundImage: "https://i0.wp.com/thefairjournal.com/wp-content/uploads/2019/01/AdobeStock_215441723.jpeg?fit=3840%2C2160&ssl=1",
    blurb: "Emmy Noether, a pioneering German mathematician born in 1882, is celebrated for her groundbreaking contributions to abstract algebra and theoretical physics. She formulated Noether's theorem, a fundamental principle in mathematical physics that establishes the connection between symmetries and conservation laws, profoundly influencing the development of modern physics. Despite facing discrimination as a woman in academia, Noether's brilliance and dedication earned her recognition as one of the greatest mathematicians of the 20th century. Her innovative work laid the foundation for advancements in algebra, topology, and theoretical physics, shaping our understanding of the fundamental laws of nature. Noether's enduring legacy continues to inspire mathematicians and physicists worldwide, underscoring the importance of intellectual curiosity, creativity, and perseverance in advancing human knowledge.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Emmy_Noether"
  },
  {
    name: 'Grace Hopper',
    field: 'Computer Science',
    dateOfBirth: 'December 9, 1906',
    dateOfDeath: 'January 1, 1992',
    accomplishment: 'She developed the first compiler for a computer programming language',
    id: 9,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/480px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
    backgroundImage: "https://i.pinimg.com/originals/40/ce/e2/40cee2ae407de99af49bea4ff771bcff.jpg",
    blurb: "Grace Hopper, a pioneering American computer scientist born in 1906, made significant contributions to the development of early computer programming languages and compiler technology. She is best known for her work on the development of the UNIVAC I, one of the first commercially successful digital computers, and for her groundbreaking contributions to the development of the COBOL programming language. Hopper's visionary leadership and innovative approach to computing laid the foundation for modern software engineering and programming languages. She was also a trailblazer for women in STEM fields, advocating for greater inclusion and diversity in the technology industry. Hopper's legacy continues to inspire generations of computer scientists, engineers, and innovators, reminding us of the transformative power of curiosity, determination, and ingenuity in shaping the digital age.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Grace_Hopper"
  },
  {
    name: 'Valentina Tereshkova',
    field: 'Astronautics',
    dateOfBirth: 'March 6, 1937',
    dateOfDeath: 'n/a',
    accomplishment: 'She was the first woman to travel to space',
    id: 10,
    image: "https://m.media-amazon.com/images/M/MV5BMDBkNmMxNjgtNDA2MC00OThhLWEyNDUtNmRhNjYzMzEwZWMxXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
    backgroundImage: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/201743147_4794103270649894_703137718428531126_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4q5DvhP5E0oAb7rNoEq&_nc_ht=scontent-lax3-1.xx&oh=00_AfD9D0E5tUoevkYX1QDP32g4MssKQVQCInm1nFK6js0BCA&oe=66417734",
    blurb: "Valentina Tereshkova, born in 1937, made history as the first woman to travel into space. On June 16, 1963, she piloted the Vostok 6 spacecraft, becoming the first and youngest woman to orbit the Earth. Tereshkova's pioneering flight was a landmark achievement in space exploration and a testament to her courage, skill, and dedication. Her mission paved the way for future generations of women astronauts and contributed to our understanding of human spaceflight. Beyond her historic flight, Tereshkova continued to be a prominent figure in Soviet and Russian politics, serving as a representative in the Soviet Parliament and later as a prominent member of the Russian political establishment. Her legacy as a space pioneer and advocate for women's rights continues to inspire people around the world.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Valentina_Tereshkova"
  },
  {
    name: 'Chien-Shiung Wu',
    field: 'Physics',
    dateOfBirth: 'May 31, 1912',
    dateOfDeath: 'February 16, 1997',
    accomplishment: 'She experimentally demonstrated the violation of the principle of conservation of parity',
    id: 11,
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-515185238-copy.jpg?crop=1xw:1.0xh;center,top&resize=1200:*",
    backgroundImage: "https://t4.ftcdn.net/jpg/03/18/51/99/360_F_318519903_2i1zRvgRlDiYHUKQLT8W6TrhPOuGJ8QB.jpg",
    blurb: "Chien-Shiung Wu, a pioneering Chinese-American physicist born in 1912, made significant contributions to nuclear physics and experimental science. She is best known for her work on the Manhattan Project during World War II, where she helped develop the process for separating uranium isotopes for the atomic bomb. However, Wu is perhaps most celebrated for her groundbreaking experiment that disproved the principle of conservation of parity, which had profound implications for the field of particle physics. Despite facing discrimination as a woman and an immigrant in the male-dominated scientific community, Wu's extraordinary talent and perseverance earned her recognition as one of the greatest experimental physicists of the 20th century. Her legacy continues to inspire scientists and women in STEM fields, highlighting the importance of diversity, inclusion, and excellence in scientific research and discovery.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Chien-Shiung_Wu"
  },
  {
    name: 'Katherine Johnson',
    field: 'Mathematics',
    dateOfBirth: 'August 26, 1918',
    dateOfDeath: 'February 24, 2020',
    accomplishment: 'She calculated trajectories for NASA missions, including Apollo 11',
    id: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Katherine_Johnson_at_NASA%2C_in_1966.jpg",
    backgroundImage: "https://www.dailycommercial.com/gcdn/authoring/2019/07/16/NDAC/ghows-LK-8dce73ea-faf2-6e5c-e053-0100007fe9e7-522ca6bd.jpeg?crop=1982,1120,x0,y328&width=1982&height=1120&format=pjpg&auto=webp",
    blurb: "Katherine Johnson, an exceptional American mathematician born in 1918, played a pivotal role in the early years of NASA's space program. As one of the 'human computers' at NASA, Johnson's calculations were instrumental in the success of several key missions, including the first crewed spaceflights and the Apollo moon landing. Her precise calculations helped ensure the safety and accuracy of spacecraft trajectories, earning her the nickname 'the human computer.' Despite facing racial and gender discrimination in a segregated society, Johnson's brilliance and perseverance broke barriers and paved the way for future generations of women and minorities in STEM fields. Her contributions to space exploration were finally recognized with the award of the Presidential Medal of Freedom in 2015. Johnson's legacy continues to inspire people worldwide, highlighting the power of intellect, determination, and resilience in overcoming adversity and achieving greatness.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Katherine_Johnson"
  },
  {
    name: 'Sally Ride',
    field: 'Physics, Astronautics',
    dateOfBirth: 'May 26, 1951',
    dateOfDeath: 'July 23, 2012',
    accomplishment: 'She was the first American woman in space',
    id: 13,
    image: "https://airandspace.si.edu/sites/default/files/styles/body_large/public/2021-06/S85-41007~medium.jpg?itok=XsP1gmjX",
    backgroundImage: "https://media.cnn.com/api/v1/images/stellar/prod/230616125836-01-sally-ride-launch-anniversary-1983-top.jpg?c=original",
    blurb: "Sally Ride, an American astronaut and physicist born in 1951, made history as the first American woman to travel to space. On June 18, 1983, she soared into orbit aboard the Space Shuttle Challenger, becoming a symbol of women's achievement in space exploration. Ride's groundbreaking journey shattered stereotypes and inspired countless individuals, particularly women and girls, to pursue careers in STEM fields. Beyond her historic flight, Ride made significant contributions to science education, co-founding Sally Ride Science to encourage young people, especially girls, to engage in STEM learning. Her legacy as a trailblazer, scientist, and advocate for education continues to inspire future generations of space explorers and innovators.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Sally_Ride"
  },
  {
    name: 'Tu Youyou',
    field: 'Pharmacology',
    dateOfBirth: 'December 30, 1930',
    dateOfDeath: 'n/a',
    accomplishment: 'She discovered artemisinin and dihydroartemisinin, used to treat malaria',
    id: 14,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZFZaVnRD-1BBgpqLQk8kBD-L21DnEUW_1g&s",
    backgroundImage: "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22209_16467383903163122.jpg",
    blurb: "Tu Youyou, a Chinese pharmaceutical chemist born in 1930, is celebrated for her groundbreaking discovery of artemisinin, a highly effective drug used to treat malaria. Her research, conducted in the 1970s during the Vietnam War, led to the development of artemisinin-based combination therapies (ACTs), which revolutionized the treatment of malaria worldwide. Tu's work saved millions of lives and earned her the Nobel Prize in Physiology or Medicine in 2015, making her the first Chinese woman to receive a Nobel Prize in a scientific field. Her dedication, perseverance, and innovative approach to drug discovery have left an indelible mark on global health and inspired scientists and researchers worldwide. Tu Youyou's legacy serves as a powerful reminder of the transformative impact of scientific research in combating infectious diseases and improving public health.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Tu_Youyou"
  },
  {
    name: 'Elizabeth Blackburn',
    field: 'Molecular Biology',
    dateOfBirth: 'November 26, 1948',
    dateOfDeath: 'n/a',
    accomplishment: 'She discovered telomerase enzyme',
    id: 15,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Elizabeth_Blackburn_CHF_Heritage_Day_2012_Rush_001.JPG",
    backgroundImage: "https://t4.ftcdn.net/jpg/03/49/21/19/360_F_349211935_mlE81TCGpQFYotuhFvxgl84rOnpbHjCu.jpg",
    blurb: "Elizabeth Blackburn, an Australian-American biologist born in 1948, is renowned for her groundbreaking research on telomeres and telomerase, key components of cellular aging and cancer development. Along with her colleagues, she discovered the enzyme telomerase, which plays a crucial role in maintaining the integrity of telomeres and regulating cell division. Blackburn's discoveries have had profound implications for our understanding of aging, cancer, and genetic diseases, paving the way for potential therapies targeting telomerase. In 2009, she was awarded the Nobel Prize in Physiology or Medicine for her contributions to this field, becoming the first Australian woman to receive a Nobel Prize in a scientific discipline. Blackburn's pioneering work continues to inspire researchers and offers hope for novel treatments for age-related diseases and cancer.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Elizabeth_Blackburn"
  },
  {
    name: 'Françoise Barré-Sinoussi',
    field: 'Virology',
    dateOfBirth: 'July 30, 1947',
    dateOfDeath: 'n/a',
    accomplishment: 'She discovered HIV, the virus responsible for AIDS',
    id: 16,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Fran%C3%A7oise_Barr%C3%A9-Sinoussi-press_conference_Dec_06th%2C_2008-1.jpg/440px-Fran%C3%A7oise_Barr%C3%A9-Sinoussi-press_conference_Dec_06th%2C_2008-1.jpg",
    backgroundImage: "https://media.istockphoto.com/id/1356138738/photo/covid-19-omicron.jpg?s=612x612&w=0&k=20&c=zWv_v6hMO-rf7wAO6_ylkazPHpXUhpP4m6ovfzkfxc8=",
    blurb: "Françoise Barré-Sinoussi, a French virologist, made groundbreaking contributions to the understanding and battle against HIV/AIDS. Alongside Luc Montagnier, she identified the human immunodeficiency virus (HIV) as the cause of AIDS, a discovery that revolutionized both scientific understanding and public health responses to the epidemic. For her pivotal role in this discovery, she was jointly awarded the Nobel Prize in Physiology or Medicine in 2008. Throughout her career, Barré-Sinoussi has been an advocate for global collaboration in HIV/AIDS research and treatment, emphasizing the importance of international cooperation in combating infectious diseases.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Fran%C3%A7oise_Barr%C3%A9-Sinoussi"
  },
  {
    name: 'Christiane Nüsslein-Volhard',
    field: 'Genetics',
    dateOfBirth: 'October 20, 1942',
    dateOfDeath: 'n/a',
    accomplishment: 'She discovered genetic control of embryonic development',
    id: 17,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Christiane_N%C3%BCsslein-Volhard_mg_4372.jpg/500px-Christiane_N%C3%BCsslein-Volhard_mg_4372.jpg",
    backgroundImage: "https://i.ytimg.com/vi/-5vWCbocQ1s/maxresdefault.jpg",
    blurb: "Christiane Nüsslein-Volhard, a German biologist born in 1942, is renowned for her groundbreaking research in developmental biology, particularly her discoveries regarding the genetic control of early embryonic development in fruit flies (Drosophila melanogaster). Alongside her colleagues Eric Wieschaus and Edward B. Lewis, she conducted pioneering experiments that identified key genes involved in embryonic patterning and establishment of the body plan. Their work led to the elucidation of fundamental principles governing the formation of tissues and organs during development. In recognition of her contributions, Nüsslein-Volhard was awarded the Nobel Prize in Physiology or Medicine in 1995, making her the third woman to receive this honor in the field of medicine. Her research has had a profound impact on our understanding of genetics and developmental biology, shaping the foundation of modern biology and inspiring future generations of scientists.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Christiane_N%C3%BCsslein-Volhard"
  },
  {
    name: 'Fabiola Gianotti',
    field: 'Particle Physics',
    dateOfBirth: 'October 29, 1960',
    dateOfDeath: 'n/a',
    accomplishment: 'She was the spokesperson for the ATLAS experiment at CERN, involved in the discovery of the Higgs boson',
    id: 18,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Dr_Fabiola_Gianotti.jpg/440px-Dr_Fabiola_Gianotti.jpg",
    backgroundImage: "https://media.istockphoto.com/id/508139163/photo/atom.jpg?s=612x612&w=0&k=20&c=8rhAb5d43TUIiJl65LKlb5Y1p3KhP4fvihJ6I5zgyM8=",
    blurb: "Fabiola Gianotti, an Italian particle physicist born in 1962, is renowned for her leadership in high-energy physics and her contributions to the discovery of the Higgs boson particle. Serving as the spokesperson for the ATLAS experiment at CERN's Large Hadron Collider (LHC), she played a pivotal role in the collaboration that confirmed the existence of the Higgs boson in 2012. Gianotti's work has deepened our understanding of the fundamental forces and particles that govern the universe, leading to breakthroughs in theoretical physics and cosmology. In recognition of her achievements, she was appointed Director-General of CERN in 2016, becoming the first woman to hold this prestigious position. Fabiola Gianotti's leadership and scientific prowess continue to inspire advancements in particle physics and shape the future of scientific inquiry.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Fabiola_Gianotti"
  },
  {
    name: 'Mae Jemison',
    field: 'Astronautics, Medicine',
    dateOfBirth: 'October 17, 1956',
    dateOfDeath: 'n/a',
    accomplishment: 'She was the first black woman in space',
    id: 19,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mae_Carol_Jemison.jpg/440px-Mae_Carol_Jemison.jpg",
    backgroundImage: "https://assets1.cbsnewsstatic.com/i/cbslocal/wp-content/uploads/sites/15909776/2012/09/114322876.jpg",
    blurb: "Mae Jemison, an American astronaut, physician, and engineer born in 1956, made history as the first African American woman to travel to space. In 1992, aboard the Space Shuttle Endeavour, she became not only an astronaut but also an emblem of diversity and achievement in space exploration. Beyond her pioneering spaceflight, Jemison is a symbol of determination and excellence, with a diverse career spanning medicine, engineering, and education. She continues to advocate for science education and diversity in STEM fields, inspiring future generations to reach for the stars and pursue their dreams. Mae Jemison's remarkable journey serves as a testament to the power of curiosity, courage, and perseverance in the pursuit of knowledge and discovery.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Mae_Jemison"
  },
  {
    name: 'Carol W. Greider',
    field: 'Molecular Biology',
    dateOfBirth: 'April 15, 1961',
    dateOfDeath: 'n/a',
    accomplishment: 'She discovered telomerase enzyme',
    id: 20,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Carol_Greider_by_Chris_Michel_1s946948-11-23.jpg/440px-Carol_Greider_by_Chris_Michel_1s946948-11-23.jpg",
    backgroundImage: "https://media.istockphoto.com/id/1337292061/photo/chain-of-amino-acid-or-bio-molecules-called-protein-3d-illustration.jpg?s=612x612&w=0&k=20&c=ZhpM7k1iF8G5MCzxfrJeAtkrewl-vMBme0pgx0OHfDM=",
    blurb: "Carol W. Greider, an American molecular biologist born in 1961, is renowned for her co-discovery of telomerase, an enzyme critical for maintaining the integrity of chromosome ends (telomeres) and regulating cellular aging. Alongside Elizabeth Blackburn and Jack W. Szostak, Greider made this groundbreaking discovery in 1984 while still a graduate student at the University of California, Berkeley. Their work has revolutionized our understanding of cellular aging and cancer, with implications for aging-related diseases and potential therapies. In recognition of her contributions, Greider was awarded the Nobel Prize in Physiology or Medicine in 2009, making her the first woman to receive this honor without sharing it with a male co-recipient. Her research continues to inspire advancements in molecular biology and holds promise for improving human health and longevity.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Carol_W._Greider"
  },
  {
    name: 'May-Britt Moser',
    field: 'Neuroscience',
    dateOfBirth: 'January 4, 1963',
    dateOfDeath: 'n/a',
    accomplishment: "She discovered grid cells in the brain's spatial system",
    id: 21,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/May-Britt_Moser_2014.jpg/440px-May-Britt_Moser_2014.jpg",
    backgroundImage: "https://media.springernature.com/w580h326/nature-cms/uploads/collections/A84880_SREP_TOP_100_NEUROSCIENCE_HERO_IMAG_1200x675px_Proof1-808a70ae0f814e8b4c19fd1294745bac.jpg",
    blurb: "May-Britt Moser, a Norwegian neuroscientist born in 1963, is renowned for her groundbreaking research on the brain's navigational systems and the discovery of grid cells. Alongside her husband, Edvard I. Moser, and colleague John O'Keefe, she made significant contributions to understanding how the brain represents spatial information and enables navigation. Their discoveries, including the identification of grid cells in the entorhinal cortex, have shed light on the neural mechanisms underlying spatial memory and cognition. In recognition of her pioneering work, May-Britt Moser was awarded the Nobel Prize in Physiology or Medicine in 2014, becoming the fifth woman to receive this honor in the field of medicine. Her research continues to advance our understanding of the brain and has implications for treating neurological disorders and developing artificial intelligence systems.",
    wikipediaLink: "https://en.wikipedia.org/wiki/May-Britt_Moser"
  },
  {
    name: 'Jennifer Doudna',
    field: 'Biochemistry, Genetics',
    dateOfBirth: 'February 19, 1964',
    dateOfDeath: 'n/a',
    accomplishment: 'She co-invented CRISPR-Cas9 genome editing technology',
    id: 22,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jennifer_Doudna_by_Christopher_Michel_in_2023_01.jpg/440px-Jennifer_Doudna_by_Christopher_Michel_in_2023_01.jpg",
    backgroundImage: "https://images.contentstack.io/v3/assets/blte41c17d7f8dda379/bltcb7b4171ede0f7aa/5b733dc796f9cd9343eb0f0c/crisprcas9.jpg?format=pjpg&quality=40&auto=webp&width=1500",
    blurb: "Jennifer Doudna, an American biochemist born in 1964, is a pioneer in the field of CRISPR-Cas9 gene editing technology. Alongside her collaborator Emmanuelle Charpentier, Doudna developed the CRISPR-Cas9 genome editing system, a groundbreaking tool that allows precise modification of DNA sequences in living organisms. Their discovery has revolutionized biological research, enabling unprecedented advances in genetics, medicine, and agriculture. In recognition of her contributions, Doudna was awarded the Nobel Prize in Chemistry in 2020, becoming the first woman to receive this honor for her work on CRISPR-Cas9. Her research continues to inspire innovations in biotechnology and holds promise for addressing pressing global challenges, including disease, food security, and environmental conservation.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jennifer_Doudna"
  },
  {
    name: 'Vera Rubin',
    field: 'Astronomy',
    dateOfBirth: 'July 23, 1928',
    dateOfDeath: 'December 25, 2016',
    accomplishment: 'She provided evidence for the existence of dark matter',
    id: 23,
    image: "https://ras.ac.uk/sites/default/files/description/Rubin2.jpg",
    backgroundImage: "https://cdn.mos.cms.futurecdn.net/AoWXgnHSxAAPxqymPQMQYL-1200-80.jpg",
    blurb: "Vera Rubin, an American astronomer born in 1928, made groundbreaking contributions to our understanding of dark matter and galaxy rotation curves. Through meticulous observations of galaxy rotations, Rubin provided evidence for the existence of dark matter, a mysterious and invisible substance that comprises much of the universe's mass. Her work challenged prevailing theories of gravitational dynamics and fundamentally reshaped our understanding of the cosmos. Despite facing barriers as a woman in the male-dominated field of astronomy, Rubin's perseverance and dedication to scientific inquiry earned her widespread recognition as one of the most influential astronomers of the 20th century. Her legacy continues to inspire future generations of scientists to explore the mysteries of the universe and push the boundaries of human knowledge.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Vera_Rubin"
  },
  {
    name: 'Esther Lederberg',
    field: 'Microbiology',
    dateOfBirth: 'December 18, 1922',
    dateOfDeath: 'November 11, 2006',
    accomplishment: 'She discovered bacterial virus lambda',
    id: 24,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Esther_Lab.jpg/440px-Esther_Lab.jpg",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRQFe1vO5CaAPxl8f4FPEdzKbrr_cr46Og9xaVp0kCnpNRU38rxOZJQgjzx1ZuiSs-Mzcy3nc9wGNgUEVA",
    blurb: "Esther Lederberg, an American microbiologist born in 1922, was a pioneering figure in the field of bacterial genetics and molecular biology. She made significant contributions to our understanding of microbial genetics, including the discovery of lambda phage, a virus that infects bacteria, and the development of replica plating techniques for studying bacterial colonies. Lederberg's research laid the foundation for numerous advancements in genetics and microbiology, including the study of antibiotic resistance and the mechanisms of bacterial evolution. Despite facing challenges as a woman in science, she persevered and made lasting contributions to the field. Her work continues to inspire scientists and serves as a testament to the importance of diversity and inclusivity in scientific research.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Esther_Lederberg"
  },
  {
    name: 'Gertrude B. Elion',
    field: 'Pharmacology',
    dateOfBirth: 'January 23, 1918',
    dateOfDeath: 'February 21, 1999',
    accomplishment: 'She developed drugs to treat leukemia and herpes',
    id: 25,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gertrude_Elion.jpg/440px-Gertrude_Elion.jpg",
    backgroundImage: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322752/herpes-virus-illustration.jpg",
    blurb: "Gertrude B. Elion, an American biochemist born in 1918, was a pioneering figure in pharmacology and drug development. Alongside her colleagues, she developed several innovative drugs that revolutionized the treatment of various diseases, including leukemia, malaria, and AIDS. Elion's research led to the development of drugs such as azathioprine, which is used to prevent organ rejection in transplant patients, and acyclovir, which is used to treat herpes infections. Her work earned her numerous awards and honors, including the Nobel Prize in Physiology or Medicine in 1988. Elion's dedication to scientific research and her contributions to medicine have had a profound impact on healthcare worldwide, saving countless lives and improving the quality of life for millions of people.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gertrude_B._Elion"
  },
  {
    name: 'Stephanie Kwolek',
    field: 'Chemistry',
    dateOfBirth: 'July 31, 1923',
    dateOfDeath: 'June 18, 2014',
    accomplishment: 'She invented Kevlar',
    id: 26,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Stephanie_Kwolek_1986.TIF/lossy-page1-440px-Stephanie_Kwolek_1986.TIF.jpg",
    backgroundImage: "https://chemistry.anu.edu.au/sites/prod.chemistry.sca-lws06.anu.edu.au/files/AdobeStock_107549939.jpeg",
    blurb: "Stephanie Kwolek, an American chemist born in 1923, was a pioneering figure in polymer chemistry and materials science. She is best known for her discovery of Kevlar, a strong and lightweight synthetic fiber that has applications in bulletproof vests, aerospace materials, and numerous other industries. Kwolek's research at DuPont led to the development of this revolutionary material, which is five times stronger than steel on an equal weight basis. Her discovery of Kevlar has saved countless lives and has had a profound impact on various fields, including law enforcement, military, and consumer products. Kwolek's groundbreaking work earned her numerous awards and accolades, including the National Medal of Technology and Innovation. Her legacy continues to inspire scientists and engineers worldwide, highlighting the importance of curiosity, perseverance, and innovation in scientific discovery.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Stephanie_Kwolek"
  }
]


app.get('/api/v1/womenscientists', (request, response) => {
  const womenScientists = app.locals.womenScientists

  response.json({ womenScientists })
})

app.get('/api/v1/womenscientists/:id', (request, response) => {
  const { id } = request.params
  const womanScientist = app.locals.womenScientists.find(woman => parseInt(woman.id) === parseInt(id));

  if (!womanScientist) {
    return response.sendStatus(404)
  }

  response.status(200).json(womanScientist)
})

app.use(express.json());

app.post('api/v1/womenscientists', (request, response) => {
  const id = Date.now()
  const womanScientist = request.body;
  const { name, field, dateOfBirth, dateOfDeath, accomplishment, blurb, wikipediaLink, backgroundImage, image } = womanScientist;

  for (let requiredParameter of ['name', 'field', 'dateOfBirth', 'dateOfDeath', 'accomplishment', 'blurb', 'wikipediaLink', 'backgroundImage', 'image' ]) {
    if (!womanScientist[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { name: <String>, field: <String>, dateOfBirth: <String>, dateOfDeath: <String>, accomplishment: <String>, blurb: <Text>, wikipediaLink: <String>, backgroundImage: <String>, image: <String> }. You're missing a "${requiredParameter}" property.` });
      return
    }
  }
  app.locals.womenScientists.push({ id, name, field, dateOfBirth, dateOfDeath, accomplishment, blurb, wikipediaLink, backgroundImage, image })

  response.status(201).json({ id, name, field, dateOfBirth, dateOfDeath, accomplishment, blurb, wikipediaLink, backgroundImage, image })
})

app.use(express.static('public'))
app.use(cors());