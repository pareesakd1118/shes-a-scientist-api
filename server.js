const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = "She's a Scientist"

app.get('/', (request, response) => {
    response.send("Welcome to She's a Scientist");
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})


app.locals.womenScientists = [
    {
        name: "Margaret Dayhoff",
        field: "Physics, Chemistry",
        dateOfBirth: "March 11, 1925",
        dateOfDeath: "February 5, 1984",
        accomplishment: "Pioneered the field of bioinformatics and gave amino acids their single letter codes"
      },
    {
      name: "Marie Curie",
      field: "Physics, Chemistry",
      dateOfBirth: "November 7, 1867",
      dateOfDeath: "July 4, 1934",
      accomplishment: "Discovered radioactivity"
    },
    {
      name: "Ada Lovelace",
      field: "Computer Science",
      dateOfBirth: "December 10, 1815",
      dateOfDeath: "November 27, 1852",
      accomplishment: "First computer programmer"
    },
    {
      name: "Jane Goodall",
      field: "Primatology",
      dateOfBirth: "April 3, 1934",
      dateOfDeath: "n/a",
      accomplishment: "Studied social and family interactions of wild chimpanzees"
    },
    {
      name: "Rosalind Franklin",
      field: "Chemistry",
      dateOfBirth: "July 25, 1920",
      dateOfDeath: "April 16, 1958",
      accomplishment: "Contributed to the discovery of the DNA double helix structure"
    },
    {
      name: "Dorothy Hodgkin",
      field: "Chemistry",
      dateOfBirth: "May 12, 1910",
      dateOfDeath: "July 29, 1994",
      accomplishment: "Developed protein crystallography"
    },
    {
      name: "Barbara McClintock",
      field: "Genetics",
      dateOfBirth: "June 16, 1902",
      dateOfDeath: "September 2, 1992",
      accomplishment: "Discovered transposons"
    },
    {
      name: "Emmy Noether",
      field: "Mathematics",
      dateOfBirth: "March 23, 1882",
      dateOfDeath: "April 14, 1935",
      accomplishment: "Noether's theorem in theoretical physics"
    },
    {
      name: "Grace Hopper",
      field: "Computer Science",
      dateOfBirth: "December 9, 1906",
      dateOfDeath: "January 1, 1992",
      accomplishment: "Developed the first compiler for a computer programming language"
    },
    {
      name: "Valentina Tereshkova",
      field: "Aerospace Engineering",
      dateOfBirth: "March 6, 1937",
      dateOfDeath: "n/a",
      accomplishment: "First woman to travel to space"
    },
    {
      name: "Chien-Shiung Wu",
      field: "Physics",
      dateOfBirth: "May 31, 1912",
      dateOfDeath: "February 16, 1997",
      accomplishment: "Experimentally demonstrated the violation of the principle of conservation of parity"
    },
    {
      name: "Katherine Johnson",
      field: "Mathematics",
      dateOfBirth: "August 26, 1918",
      dateOfDeath: "February 24, 2020",
      accomplishment: "Calculated trajectories for NASA missions, including Apollo 11"
    },
    {
      name: "Sally Ride",
      field: "Physics, Space Science",
      dateOfBirth: "May 26, 1951",
      dateOfDeath: "July 23, 2012",
      accomplishment: "First American woman in space"
    },
    {
      name: "Tu Youyou",
      field: "Pharmacology",
      dateOfBirth: "December 30, 1930",
      dateOfDeath: "n/a",
      accomplishment: "Discovered artemisinin and dihydroartemisinin, used to treat malaria"
    },
    {
      name: "Elizabeth Blackburn",
      field: "Molecular Biology",
      dateOfBirth: "November 26, 1948",
      dateOfDeath: "n/a",
      accomplishment: "Discovered telomerase enzyme"
    },
    {
      name: "Françoise Barré-Sinoussi",
      field: "Virology",
      dateOfBirth: "July 30, 1947",
      dateOfDeath: "n/a",
      accomplishment: "Discovered HIV, the virus responsible for AIDS"
    },
    {
      name: "Christiane Nüsslein-Volhard",
      field: "Genetics",
      dateOfBirth: "October 20, 1942",
      dateOfDeath: "n/a",
      accomplishment: "Discovered genetic control of embryonic development"
    },
    {
      name: "Fabiola Gianotti",
      field: "Particle Physics",
      dateOfBirth: "October 29, 1960",
      dateOfDeath: "n/a",
      accomplishment: "Spokesperson for the ATLAS experiment at CERN, involved in the discovery of the Higgs boson"
    },
    {
      name: "Mae Jemison",
      field: "Astronautics, Medicine",
      dateOfBirth: "October 17, 1956",
      dateOfDeath: "n/a",
      accomplishment: "First African American woman in space"
    },
    {
      name: "Carol W. Greider",
      field: "Molecular Biology",
      dateOfBirth: "April 15, 1961",
      dateOfDeath: "n/a",
      accomplishment: "Discovered telomerase enzyme"
    },
    {
      name: "May-Britt Moser",
      field: "Neuroscience",
      dateOfBirth: "January 4, 1963",
      dateOfDeath: "n/a",
      accomplishment: "Discovered grid cells in the brain's spatial system"
    },
    {
      name: "Jennifer Doudna",
      field: "Biochemistry, Genetics",
      dateOfBirth: "February 19, 1964",
      dateOfDeath: "n/a",
      accomplishment: "Co-invented CRISPR-Cas9 genome editing technology"
    },
    {
      name: "Vera Rubin",
      field: "Astronomy",
      dateOfBirth: "July 23, 1928",
      dateOfDeath: "December 25, 2016",
      accomplishment: "Provided evidence for the existence of dark matter"
    },
    {
      name: "Esther Lederberg",
      field: "Microbiology",
      dateOfBirth: "December 18, 1922",
      dateOfDeath: "November 11, 2006",
      accomplishment: "Discovered bacterial virus lambda"
    },
    {
      name: "Gertrude B. Elion",
      field: "Pharmacology",
      dateOfBirth: "January 23, 1918",
      dateOfDeath: "February 21, 1999",
      accomplishment: "Developed drugs to treat leukemia and herpes"
    },
    {
      name: "Chien-Shiung Wu",
      field: "Physics",
      dateOfBirth: "May 31, 1912",
      dateOfDeath: "February 16, 1997",
      accomplishment: "Experimentally demonstrated the violation of the principle of conservation of parity"
    },
    {
      name: "Stephanie Kwolek",
      field: "Chemistry",
      dateOfBirth: "July 31, 1923",
      dateOfDeath: "June 18, 2014",
      accomplishment: "Invented Kevlar"
    }
  ];
  

app.get('/api/v1/womenscientists', (request, response) => {
  const womenScientists = app.locals.womenScientists

  response.json({ womenScientists })
})

app.get('/api/v1/womenscientists/:id', (request, response) => {
  const { id } = request.params
  const womanScientist = app.locals.womanScientists.find(woman => woman.id === id);

  if (!womanScientist) {
    return response.sendStatus(404)
  }

  response.status(200).json(woman)
})

app.use(express.json());

app.post('api/v1/womenscientists', (request, response) => {
  const id = Date.now()
  const womanScientist = request.body;
  const { name, field, dateOfBirth, dateOfDeath, accomplishment } = womanScientist;

  for (let requiredParameter of ['name', 'field', 'dateOfBirth', 'dateOfDeath', 'accomplishment']) {
    if (!womanScientist[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { name: <String>, field: <String>, dateOfBirth: <String>, dateOfDeath: <String>, accomplishment: <String> }. You're missing a "${requiredParameter}" property.` });
      return
    }
  }
  app.locals.pets.push({ id, name, field, dateOfBirth, dateOfDeath, accomplishment })

  response.status(201).json({ id, name, field, dateOfBirth, dateOfDeath, accomplishment })
})