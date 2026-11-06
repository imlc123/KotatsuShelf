/*
 * Weird Girl Lit — books and survey questions.
 *
 * Every book has a set of tag weights (0–3). Every survey answer nudges the
 * reader's taste profile up or down on some of those same tags. Matching is a
 * cosine similarity between the two, so adding books or questions only means
 * adding data here.
 *
 * Tags:
 *   dark, humor, body, surreal, horror, online, literary, translated, sex,
 *   isolation, work, academia, food, art, toxic, unhinged, love, mother,
 *   queer, mental, short, stories
 *   (classic and recent are derived from the year in app.js)
 */

window.WGL_BOOKS = [
  {
    title: "My Year of Rest and Relaxation",
    author: "Ottessa Moshfegh",
    year: 2018,
    blurb: "A rich, beautiful, spectacularly unpleasant New Yorker decides to sleep through an entire year, aided by the worst psychiatrist in Manhattan.",
    tags: { isolation: 3, mental: 3, humor: 2, dark: 2, art: 1, unhinged: 1 }
  },
  {
    title: "Eileen",
    author: "Ottessa Moshfegh",
    year: 2015,
    blurb: "A repressed, self-loathing secretary at a 1960s boys' prison counts down to her escape, until a glamorous new colleague arrives.",
    tags: { isolation: 3, dark: 3, body: 2, unhinged: 2, work: 1 }
  },
  {
    title: "Convenience Store Woman",
    author: "Sayaka Murata",
    year: 2018,
    blurb: "Keiko has worked at the same Tokyo convenience store for eighteen years. It's the only place the world makes sense. Everyone wants her to stop.",
    tags: { work: 3, translated: 3, short: 3, humor: 2, isolation: 2, surreal: 1 }
  },
  {
    title: "Earthlings",
    author: "Sayaka Murata",
    year: 2020,
    blurb: "A girl who believes she's an alien grows into a woman who refuses to become a functioning part of the 'Factory.' It gets very, very strange.",
    tags: { surreal: 3, dark: 3, unhinged: 3, translated: 3, horror: 2, body: 2, short: 2 },
    cw: "Extremely disturbing content, including abuse and cannibalism."
  },
  {
    title: "The Vegetarian",
    author: "Han Kang",
    year: 2015,
    blurb: "After a dream, Yeong-hye stops eating meat. Her family's reaction is violent, and her retreat from the human world is only beginning.",
    tags: { body: 3, translated: 3, literary: 3, dark: 3, surreal: 2, food: 2, mental: 2, short: 2 }
  },
  {
    title: "Bunny",
    author: "Mona Awad",
    year: 2019,
    blurb: "A scholarship student at an elite MFA program is pulled into a clique of girls who call each other 'Bunny' and perform very unholy workshops.",
    tags: { academia: 3, surreal: 3, toxic: 3, horror: 2, humor: 2, art: 2 }
  },
  {
    title: "Rouge",
    author: "Mona Awad",
    year: 2023,
    blurb: "After her glamorous mother's death, Belle follows a trail to a seaside spa where the facials are transformative and the mirrors talk back.",
    tags: { surreal: 3, body: 2, horror: 2, mother: 2, toxic: 2 }
  },
  {
    title: "Nightbitch",
    author: "Rachel Yoder",
    year: 2021,
    blurb: "A stay-at-home mother, former artist, begins to suspect she is turning into a dog. She is not entirely against it.",
    tags: { mother: 3, surreal: 3, body: 3, humor: 2, art: 1 }
  },
  {
    title: "Boy Parts",
    author: "Eliza Clark",
    year: 2020,
    blurb: "Irina, a photographer on sabbatical in Newcastle, shoots ordinary men in compromising poses. Her behaviour is escalating. So is her drinking.",
    tags: { unhinged: 3, art: 3, sex: 3, dark: 3, humor: 2, online: 1 },
    cw: "Graphic sexual content and violence."
  },
  {
    title: "Penance",
    author: "Eliza Clark",
    year: 2023,
    blurb: "A faux true-crime book about three teen girls, a seaside town, and a murder fueled by Tumblr, rumors, and the people who profit from both.",
    tags: { online: 3, toxic: 3, dark: 3, unhinged: 2, horror: 1 },
    cw: "Violence against a teenager."
  },
  {
    title: "Milk Fed",
    author: "Melissa Broder",
    year: 2021,
    blurb: "A calorie-counting LA talent-agency assistant falls hard for a voluptuous Orthodox Jewish woman who works at a frozen yogurt shop.",
    tags: { food: 3, queer: 3, sex: 3, body: 2, humor: 2, love: 2, mother: 1 }
  },
  {
    title: "The Pisces",
    author: "Melissa Broder",
    year: 2018,
    blurb: "A burnt-out PhD student dog-sitting in Venice Beach meets a merman on the rocks. Yes, a merman. Yes, it's that kind of book.",
    tags: { love: 3, sex: 3, surreal: 2, mental: 2, humor: 2, academia: 1 }
  },
  {
    title: "Luster",
    author: "Raven Leilani",
    year: 2020,
    blurb: "A broke young painter starts seeing an older married man and ends up living in his house, with his wife and their adopted daughter.",
    tags: { art: 2, sex: 2, work: 2, humor: 2, love: 2, literary: 2, isolation: 1 }
  },
  {
    title: "Fake Accounts",
    author: "Lauren Oyler",
    year: 2021,
    blurb: "A woman discovers her boyfriend runs an anonymous conspiracy account, then flees to Berlin to lie to strangers about who she is.",
    tags: { online: 3, humor: 2, literary: 2, love: 1 }
  },
  {
    title: "Pizza Girl",
    author: "Jean Kyoung Frazier",
    year: 2020,
    blurb: "A pregnant, grieving 18-year-old pizza delivery girl in LA becomes obsessed with a lonely mother who orders the same strange pizza every week.",
    tags: { work: 2, food: 2, mother: 2, love: 2, isolation: 2, short: 2, queer: 1 }
  },
  {
    title: "The Idiot",
    author: "Elif Batuman",
    year: 2017,
    blurb: "Selin arrives at Harvard in 1995, discovers email, and develops a baffling crush on an older math student. Language fails everyone, hilariously.",
    tags: { academia: 3, humor: 3, love: 2, literary: 2, online: 1 }
  },
  {
    title: "Big Swiss",
    author: "Jen Beagin",
    year: 2023,
    blurb: "A woman transcribing a sex therapist's sessions in Hudson, NY falls for one of the clients, recognizing her voice at the dog park.",
    tags: { queer: 3, humor: 3, love: 2, work: 2, sex: 2 }
  },
  {
    title: "Pretend I'm Dead",
    author: "Jen Beagin",
    year: 2015,
    blurb: "Mona cleans houses, loves a junkie she calls Mr. Disgusting, and drifts to Taos in search of something like a self.",
    tags: { humor: 3, work: 2, love: 2, dark: 1, isolation: 1 }
  },
  {
    title: "Mrs. March",
    author: "Virginia Feito",
    year: 2021,
    blurb: "A pampered Upper East Side wife suspects that her novelist husband's repulsive new protagonist is based on her. Then the paranoia starts.",
    tags: { unhinged: 3, mental: 2, horror: 1, humor: 1 }
  },
  {
    title: "Woman, Eating",
    author: "Claire Kohda",
    year: 2022,
    blurb: "Lydia is a young vampire, an art-world intern in London, and permanently hungry. Pig's blood isn't enough. Neither is anything else.",
    tags: { food: 3, art: 3, surreal: 2, isolation: 2, mother: 1, work: 1 }
  },
  {
    title: "Ripe",
    author: "Sarah Rose Etter",
    year: 2023,
    blurb: "A Silicon Valley employee at a sinister startup is followed everywhere by a small black hole. It grows when things are bad.",
    tags: { work: 3, mental: 3, dark: 2, surreal: 2, online: 1 }
  },
  {
    title: "The Book of X",
    author: "Sarah Rose Etter",
    year: 2019,
    blurb: "Cassie is born with her stomach twisted into a knot, like her mother and grandmother, on a farm that quarries meat. A surreal fable of a body.",
    tags: { body: 3, surreal: 3, mother: 2, dark: 2, literary: 2 }
  },
  {
    title: "Hot Milk",
    author: "Deborah Levy",
    year: 2016,
    blurb: "Sofia takes her mysteriously ill mother to a Spanish seaside clinic, gets stung by jellyfish, and starts seducing her own life back.",
    tags: { mother: 3, literary: 3, body: 2, queer: 2, surreal: 1 }
  },
  {
    title: "No One Is Talking About This",
    author: "Patricia Lockwood",
    year: 2021,
    blurb: "A woman famous for a viral post lives inside 'the portal' until a family emergency drags her into the real world. Funny, then devastating.",
    tags: { online: 3, literary: 3, humor: 2, short: 2, mother: 1 }
  },
  {
    title: "Our Wives Under the Sea",
    author: "Julia Armfield",
    year: 2022,
    blurb: "Leah returns from a deep-sea mission that went wrong. Her wife Miri slowly realizes that something else came back with her.",
    tags: { queer: 3, love: 3, surreal: 2, horror: 2, body: 2 }
  },
  {
    title: "Her Body and Other Parties",
    author: "Carmen Maria Machado",
    year: 2017,
    blurb: "Stories of women's bodies in revolt: a woman with a green ribbon at her neck, a plague of disappearances, a sex-list apocalypse.",
    tags: { body: 3, queer: 3, surreal: 3, stories: 3, horror: 2, sex: 2 }
  },
  {
    title: "Fever Dream",
    author: "Samanta Schweblin",
    year: 2017,
    blurb: "A woman lies dying in a rural Argentine clinic as a boy whispers questions in her ear. Read it in one terrified sitting.",
    tags: { horror: 3, mother: 3, translated: 3, short: 3, surreal: 2 }
  },
  {
    title: "Cursed Bunny",
    author: "Bora Chung",
    year: 2021,
    blurb: "Korean horror-fable stories: a toilet head that won't go away, a cursed lamp, a woman who gives birth to a lump of flesh. Gross and gleeful.",
    tags: { horror: 3, surreal: 3, translated: 3, stories: 3, body: 2, humor: 1 }
  },
  {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    year: 1963,
    blurb: "Esther Greenwood wins a New York magazine internship in the summer of 1953 and feels the bell jar of depression descend over her.",
    tags: { mental: 3, dark: 2, academia: 1, work: 1, literary: 2 }
  },
  {
    title: "We Have Always Lived in the Castle",
    author: "Shirley Jackson",
    year: 1962,
    blurb: "Merricat lives with her sister in the family house after the rest of the family was poisoned. The villagers hate them. Merricat has her charms.",
    tags: { isolation: 3, short: 3, unhinged: 2, horror: 2, food: 1 }
  },
  {
    title: "The Girls",
    author: "Emma Cline",
    year: 2016,
    blurb: "A lonely teenager in 1969 California falls under the spell of a group of girls and the charismatic man they orbit.",
    tags: { toxic: 3, dark: 2, literary: 2, sex: 1, love: 1 }
  },
  {
    title: "The New Me",
    author: "Halle Butler",
    year: 2019,
    blurb: "Millie is a temp in Chicago who wants to become a new person. She mostly lies on her couch hating everyone, very funnily.",
    tags: { work: 3, isolation: 3, humor: 3, short: 3, mental: 2, dark: 1 }
  },
  {
    title: "Severance",
    author: "Ling Ma",
    year: 2018,
    blurb: "A Bible-production coordinator keeps going to work in an emptying Manhattan as a fever turns people into zombie-like routines.",
    tags: { work: 3, horror: 2, surreal: 2, isolation: 2, humor: 1, online: 1 }
  },
  {
    title: "Drive Your Plow Over the Bones of the Dead",
    author: "Olga Tokarczuk",
    year: 2018,
    blurb: "An eccentric, astrology-obsessed older woman in a Polish village is sure the local hunters are being murdered by the animals.",
    tags: { translated: 3, unhinged: 2, isolation: 2, humor: 2, literary: 2 }
  },
  {
    title: "Breasts and Eggs",
    author: "Mieko Kawakami",
    year: 2020,
    blurb: "In Tokyo, a struggling writer hosts her sister and niece, then, years later, decides whether to have a child alone.",
    tags: { translated: 3, body: 3, mother: 3, literary: 2, work: 1 }
  },
  {
    title: "Acts of Desperation",
    author: "Megan Nolan",
    year: 2021,
    blurb: "A young woman in Dublin falls into a consuming, cruel relationship with a beautiful man, and can't stop narrating her own undoing.",
    tags: { love: 3, toxic: 2, sex: 2, mental: 2, dark: 2 }
  },
  {
    title: "Chemistry",
    author: "Weike Wang",
    year: 2017,
    blurb: "A chemistry PhD student cracks under pressure from her parents, her boyfriend's proposal, and a lab experiment that will not work.",
    tags: { academia: 3, humor: 2, mental: 2, short: 2, love: 1, mother: 1 }
  },
  {
    title: "Temporary",
    author: "Hilary Leichter",
    year: 2020,
    blurb: "A career temp fills in for a pirate, a murderer's assistant, a barnacle, and the Chairman of the Board. A fable about precarious work.",
    tags: { work: 3, surreal: 3, humor: 3, short: 2 }
  },
  {
    title: "Yellowface",
    author: "R.F. Kuang",
    year: 2023,
    blurb: "When her famous friend dies, a struggling author steals her manuscript and publishes it as her own. The internet has some thoughts.",
    tags: { online: 3, art: 3, unhinged: 2, toxic: 2, humor: 2, work: 1 }
  },
  {
    title: "Animal",
    author: "Lisa Taddeo",
    year: 2021,
    blurb: "After a man shoots himself in front of her, Joan flees to LA to find the one woman who can explain her past. It is not gentle.",
    tags: { dark: 3, sex: 3, unhinged: 2, toxic: 1 },
    cw: "Sexual violence, suicide, graphic violence."
  },
  {
    title: "Sorrow and Bliss",
    author: "Meg Mason",
    year: 2020,
    blurb: "Martha is funny, clever, and has known since she was seventeen that something is wrong with her. Her marriage is now ending because of it.",
    tags: { mental: 3, humor: 2, love: 2, mother: 1 }
  },
  {
    title: "Problems",
    author: "Jade Sharma",
    year: 2016,
    blurb: "Maya is a heroin user with a failing marriage, a married lover, and a voice that makes every bad decision sound like a punchline.",
    tags: { sex: 3, dark: 2, mental: 2, humor: 2, isolation: 2 }
  },
  {
    title: "Nobody Is Ever Missing",
    author: "Catherine Lacey",
    year: 2014,
    blurb: "Elyria leaves her husband in New York without a word and buys a one-way ticket to New Zealand, wandering into her own unravelling.",
    tags: { isolation: 3, mental: 3, literary: 3, dark: 2, short: 2, surreal: 1 }
  },
  {
    title: "Death in Her Hands",
    author: "Ottessa Moshfegh",
    year: 2020,
    blurb: "On a walk in the woods, a widow finds a note: 'Her name was Magda. Nobody will ever know who killed her.' There is no body. She starts investigating anyway.",
    tags: { isolation: 3, unhinged: 3, mental: 2, short: 2, literary: 2 }
  }
];

window.WGL_QUESTIONS = [
  {
    q: "It's Friday night. Where are you?",
    a: [
      { t: "Blackout curtains, a pharmacy bag, fourteen hours of sleep.", w: { isolation: 2, mental: 1 } },
      { t: "At a party I will absolutely regret.", w: { sex: 2, toxic: 1, unhinged: 1 } },
      { t: "Refreshing the same three apps until my eyes hurt.", w: { online: 2, humor: 1 } },
      { t: "Lighting candles for something I don't fully understand.", w: { surreal: 2, horror: 1 } }
    ]
  },
  {
    q: "How would you describe your relationship with your body?",
    a: [
      { t: "It's a haunted house and I'm the ghost.", w: { body: 2, horror: 1 } },
      { t: "Hunger is the only language it speaks.", w: { food: 2, body: 1 } },
      { t: "It's transforming into something else. I'm curious.", w: { surreal: 2, body: 2 } },
      { t: "I'd rather not think about it, thanks.", w: { body: -1, literary: 1 } }
    ]
  },
  {
    q: "Pick your narrator.",
    a: [
      { t: "Wildly unreliable. Possibly dangerous.", w: { unhinged: 3 } },
      { t: "Deadpan, bone-dry, quietly hilarious.", w: { humor: 3 } },
      { t: "Lyrical, wounded, a little bit precious.", w: { literary: 2, mental: 1 } },
      { t: "Far too honest about sex.", w: { sex: 3 } }
    ]
  },
  {
    q: "How dark do you want it?",
    a: [
      { t: "Pitch black. Disturb me.", w: { dark: 3, horror: 1 } },
      { t: "Bleak, but I'm laughing.", w: { dark: 1, humor: 2 } },
      { t: "Melancholy with a little light coming in.", w: { mental: 2, love: 1, dark: -1 } },
      { t: "Weird but not cruel, please.", w: { surreal: 1, humor: 1, dark: -2 } }
    ]
  },
  {
    q: "What's your relationship with work?",
    a: [
      { t: "The job is my entire personality.", w: { work: 3 } },
      { t: "Unemployed on purpose.", w: { isolation: 2, work: -1 } },
      { t: "I'm an artist (I have an Instagram).", w: { art: 3 } },
      { t: "Grad school. Don't ask.", w: { academia: 3 } }
    ]
  },
  {
    q: "Choose a setting.",
    a: [
      { t: "A fluorescent-lit shop open 24 hours.", w: { work: 2, translated: 1 } },
      { t: "A Manhattan apartment with the radiator clanking.", w: { isolation: 1, art: 1, mental: 1 } },
      { t: "A crumbling seaside town in off-season.", w: { surreal: 1, mother: 1, queer: 1, literary: 1 } },
      { t: "A country house with too many locked doors.", w: { classic: 2, horror: 1, isolation: 2 } }
    ]
  },
  {
    q: "Your love life, in one phrase:",
    a: [
      { t: "Obsessive and ruinous.", w: { love: 2, toxic: 2 } },
      { t: "Queer and complicated.", w: { queer: 3, love: 1 } },
      { t: "Men are an anthropology project.", w: { sex: 1, humor: 1, unhinged: 1 } },
      { t: "None. Leave me alone.", w: { isolation: 2, love: -2 } }
    ]
  },
  {
    q: "How weird should the plot get?",
    a: [
      { t: "Totally realistic. The weirdness is all inside her head.", w: { literary: 1, mental: 1, surreal: -2 } },
      { t: "Slightly uncanny. Something's off.", w: { surreal: 1, unhinged: 1 } },
      { t: "Full transformation. Bodies changing, mermen, the works.", w: { surreal: 3, body: 1 } },
      { t: "Folk horror. Fairy tale with teeth.", w: { horror: 2, surreal: 2 } }
    ]
  },
  {
    q: "Mothers?",
    a: [
      { t: "I want to read about motherhood, unflinchingly.", w: { mother: 3 } },
      { t: "My mother is the main character of my therapy.", w: { mother: 2, mental: 1 } },
      { t: "Not interested in that, actually.", w: { mother: -2 } },
      { t: "Give me a found family. Ideally a cult.", w: { toxic: 2 } }
    ]
  },
  {
    q: "Translated fiction?",
    a: [
      { t: "Yes. Japan and Korea especially.", w: { translated: 3 } },
      { t: "Yes. Latin America, Poland, anywhere.", w: { translated: 2, literary: 1 } },
      { t: "Open to it.", w: { translated: 1 } },
      { t: "I mostly read books written in English.", w: { translated: -2 } }
    ]
  },
  {
    q: "Which era of weird girl?",
    a: [
      { t: "The originals: Plath, Jackson, mid-century malaise.", w: { classic: 3 } },
      { t: "The 2010s indie-press wave.", w: { literary: 1, recent: -1 } },
      { t: "Brand new. Published this decade.", w: { recent: 3 } },
      { t: "Doesn't matter to me.", w: {} }
    ]
  },
  {
    q: "How long a book?",
    a: [
      { t: "Short. One sitting, one bath.", w: { short: 3 } },
      { t: "Medium. A weekend.", w: { short: 1 } },
      { t: "Long. I want to move in.", w: { short: -2, literary: 1 } },
      { t: "Short stories, so I can graze.", w: { stories: 3, short: 1 } }
    ]
  },
  {
    q: "Your relationship with the internet:",
    a: [
      { t: "Terminally online. The portal owns me.", w: { online: 3 } },
      { t: "Logged off forever. Mostly.", w: { online: -2, isolation: 1 } },
      { t: "I lurk. I never post.", w: { online: 1, isolation: 1 } },
      { t: "I am someone's favorite villain.", w: { online: 2, toxic: 1, unhinged: 1 } }
    ]
  },
  {
    q: "Female friendship should be…",
    a: [
      { t: "Intense, competitive, borderline cultish.", w: { toxic: 3 } },
      { t: "Optional. I have a cat.", w: { isolation: 2 } },
      { t: "Us all in therapy, comparing notes.", w: { mental: 2, humor: 1 } },
      { t: "A roommate who's secretly in love with me.", w: { queer: 2, love: 1 } }
    ]
  },
  {
    q: "What does food mean to you?",
    a: [
      { t: "Pleasure. Sex, basically.", w: { food: 2, sex: 1 } },
      { t: "Control. A daily spreadsheet.", w: { food: 2, body: 2, mental: 1 } },
      { t: "Something I shouldn't eat. Or someone.", w: { horror: 2, food: 1, body: 1 } },
      { t: "Instant noodles at 3am.", w: { work: 1, isolation: 1, humor: 1 } }
    ]
  },
  {
    q: "How should the book handle mental health?",
    a: [
      { t: "Front and center. Name it.", w: { mental: 3 } },
      { t: "Sideways, through absurdity.", w: { humor: 2, surreal: 1 } },
      { t: "Through violence, frankly.", w: { unhinged: 2, dark: 2 } },
      { t: "Lightly. I want to be entertained.", w: { mental: -1, humor: 1 } }
    ]
  },
  {
    q: "Pick an object from her nightstand.",
    a: [
      { t: "An orange bottle of pills.", w: { mental: 2, isolation: 1 } },
      { t: "A film camera, half-shot roll inside.", w: { art: 2, unhinged: 1 } },
      { t: "A tooth. Not hers.", w: { body: 2, horror: 2 } },
      { t: "A phone at 2% battery.", w: { online: 2 } }
    ]
  },
  {
    q: "How much sex on the page?",
    a: [
      { t: "Explicit is fine. Encouraged.", w: { sex: 2 } },
      { t: "Some, if it's doing work.", w: { sex: 1 } },
      { t: "Fade to black, thanks.", w: { sex: -2 } },
      { t: "Weird sex. Like, with a merman.", w: { sex: 2, surreal: 2 } }
    ]
  },
  {
    q: "What kind of prose?",
    a: [
      { t: "Dense, literary, worth underlining.", w: { literary: 3 } },
      { t: "Fast and funny. Get to the point.", w: { humor: 2, literary: -1, short: 1 } },
      { t: "Fragmented, like a feed.", w: { online: 2, literary: 1 } },
      { t: "Dreamlike. I want to float.", w: { surreal: 2, literary: 1 } }
    ]
  },
  {
    q: "When you close the book, you want to feel…",
    a: [
      { t: "Disturbed. Shaken for days.", w: { dark: 2, horror: 2 } },
      { t: "Seen. Uncomfortably seen.", w: { mental: 2, love: 1 } },
      { t: "Guilty for laughing.", w: { humor: 3, unhinged: 1 } },
      { t: "Bewitched.", w: { surreal: 3 } }
    ]
  }
];

window.WGL_ARCHETYPES = {
  isolation: ["The Hibernator", "You'd cancel plans with God. You need a heroine who's locked the door from the inside."],
  humor: ["The Deadpan Oracle", "You laugh at funerals. You want misery delivered with perfect comic timing."],
  unhinged: ["The Unreliable Narrator", "You trust no one, least of all the woman telling you the story."],
  body: ["The Body Horror Debutante", "Flesh is a costume, and you want to see what happens when it slips."],
  surreal: ["The Mermaid-Curious", "Reality is a suggestion. You prefer your heroines half-transformed."],
  dark: ["The Pitch-Black Romantic", "You want the book that makes the bookseller say, 'Are you sure?'"],
  work: ["The Fluorescent Ghost", "Late capitalism is your horror genre. You're on shift right now."],
  academia: ["The Feral Grad Student", "Seminar rooms, toxic workshops, footnotes as weapons."],
  art: ["The Gallery Menace", "You'd make art out of anyone. You want heroines who do too."],
  online: ["The Terminally Online Mystic", "You live in the portal. You want books that know it."],
  mother: ["The Feral Mother", "Motherhood, daughterhood, and what's underneath both."],
  toxic: ["The Cult Initiate", "Friendship should feel like being chosen. And then consumed."],
  queer: ["The Sapphic Siren", "Complicated women loving complicated women."],
  love: ["The Obsessive", "You don't fall in love, you fall into it, head first."],
  sex: ["The Oversharer", "Tell me everything. No, more than that."],
  food: ["The Hungry One", "Appetite is the plot. Everything else is garnish."],
  mental: ["The Sad Girl Scholar", "You underline the saddest sentence on every page."],
  translated: ["The Globetrotting Weirdo", "Your favorite weird girls didn't write in English."],
  horror: ["The Final Girl", "You read with the lights on. Barely."],
  literary: ["The Sentence Snob", "You'll follow a heroine anywhere if the prose is good enough."],
  classic: ["The Haunted Classicist", "Mid-century malaise. Bell jars. Poisoned sugar bowls."],
  recent: ["The New Release Witch", "You want the weird girl novel everyone will be talking about."],
  short: ["The One-Sitting Reader", "Short, sharp, and over before the bath gets cold."],
  stories: ["The Anthology Witch", "Many small hauntings over one long one."]
};
