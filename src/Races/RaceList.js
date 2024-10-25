const RaceList = [
    {id:"Dwarf_M",
    Title:"Mountain Dwarf", SubTitle: "(Fjelka Dvergner)", Attributes: [{Type: "Body", Value: 2}, {Type: "Agility", Value: 1}], 
    Traits: ["DwaKno", "NigVis1", "TouSki", "ShoLeg"], Talents: ["OrcStr1", "Carrier1", "Resilient1", "DisTra1", "LocPic1"], 
    Background: "Mountain dwarves or Fjelka Dvergner are one of the branches of dwarves that exists in Mihridahl, the Mountain dwarves" +
    "are the more common dwarf you think of when speaking about dwarves. They reside in caves near mountains and build large cities inside them."+
    "They don’t socialize with others as much as Hill dwarves but they don’t shy away as much as Cave dwarves. They are known for their expert"+ 
    "iron smithing.", 
    Appearence: "Mountain dwarves are generally very short but muscular. They have generally slow growth rate on their hair and beard so "+
    "they tend to keep it as long as they can, you can often tell how old a dwarf is based on the length of his/her hair or beard. The hair "+
    "is a lot thicker and tougher than a humans and also does not easily burn so even if accidents happen near the fire their hair is not "+
    "always the first thing to burn. Mountain dwarves have various skin colors ranging from pale brown to darker warmer colors. "+
    "Their hair can be seen in various natural colors often brown or blonde but also almost as dark as black.", 
    Behaviour: "Mountain Dwarves often live in large mountains in which they hollowed out to build large dwarven cities. "+
    "They are mainly miners and thus have a very keen eye to different ores they can see. They generally dislike having elves meddling with "+
    "their creations, sometimes due to the conflict many years ago but mainly because of their disagreement of who is the better craftsman. "+
    "They often include iron in their crafts such as decorative rings of iron in the handle to ward away elves from touching it.",
    Encumberment: "28 kg",
    Height: "140 cm",
    Age: "400 years"
    },
    {id:"Elf_H",
    Title:"High Elf", SubTitle: null, Attributes: [{Type: "Presence", Value: 2}, {Type: "Mind", Value: 1}], 
    Traits: ["ElvKno", "DayVis1", "MedMem", "IroAll"], Talents: ["QuiRea1", "QuiRea2"], 
    Background: "Elves perceive time differently than other races, this is mainly due to their long life span. Similar to how some people won’t "+
    "notice or rather forget when they do some everyday chores an elf will feel the same about the years that pass. This can result in elves being "+
    "very selective about what they remember and it is not uncommon for them to not remember names of people they don’t find worthy of remembering. "+
    "Through their meditation they can handle their memories and can remember things they have forgotten with this method."+
    "High Elves are a branch from the Fey Elves that built settlements near humans and learned to coexist with them. After years they started to "+
    "adapt to the environment they built for themselves, they started to grow taller while their ears became smaller although still distinctly "+
    "longer than a humans.",
    Appearence: "High Elves are known for their sharp ears, much shorter than the others of their kin but still long compared to humans."+
    "There are cases where a high elf can have dark hair such as brown or red but more commonly than not they would have "+
    "long hair in golden blonde or silver white. The skin colors are often pale, and since they always take care of their beauty they often "+
    "have long nails and a face untouched by battle. High elf dress often in light clothes, such as silk, with bright colors. They like anything that "+
    "glimmers such as crystals, gold and silver and is often worn as jewelry.",
    Behaviour: "Not at all as secluded as their relatives, high elves cherish their beauty and are not shy to show it for anyone who wishes to adore "+
    "it. The high elves, unlike the others of their kin, do not shy away from the other races; instead you can often find them mingling with other "+
    "races even though they often consider them a race of lesser status and beauty. They have a strong affection to beauty and light, often working "+
    "in high positions and/or crafting of gold, jewelry and silk. Because of their long life span they are known for being expert craftsmen. "+
    "A typical house of a High elf is that of a bright colored wooden house with plenty of decorations that covers most of the house, "+
    "the house would have many large windows to let as much sunlight in as possible with silken drapes to cover them if needed. A typical high elf "+
    "does not enjoy living in cold environments and in harsh sleeping conditions.",
    Encumberment: "18 kg",
    Height: "180 cm",
    Age: "1200 years"
    },
    {id:"Elf_W",
        Title:"Wood Elf", SubTitle: null, Attributes: [{Type: "Agility", Value: 2}, {Type: "Mind", Value: 1}], 
        Traits: ["ElvKno", "DayVis1", "MedMem", "IroAll"], Talents: ["QuiRea1", "QuiRea2"], 
        Background: "Elves perceive time differently than other races, this is mainly due to their long life span. Similar to how some people won’t "+
        "notice or rather forget when they do some everyday chores an elf will feel the same about the years that pass. This can result in elves being "+
        "very selective about what they remember and it is not uncommon for them to not remember names of people they don’t find worthy of remembering. "+
        "Through their meditation they can handle their memories and can remember things they have forgotten with this method."+
        "Wood Elves are a branch from the Fey Elves that, similar to their ancestors, built villages in forests and lived as part of the forest in a "+
        "symbiotic relationship. Wood elves are often seen as protectors of the forest they live in and can be hostile to intruders. They adapted to "+
        "the forest by changing the colors of their hair to that of flowers and leaves giving them a camouflage of sorts. While much taller than their "+
        "ancestors the wood elves are more similar to their ancestors than their siblings. ",
        Appearence: "Probably the closest to their origin as fey elves out of all the elves. They have long pointy ears and much more distinct facial "+
        "features than High Elves with sharper cheekbones. The hair color can be about any color of nature but is more common to blend in with the "+
        "forest they live in. Wood elves are very adaptable and they can shift colors of their skin or hair according to the nature around them, "+
        "this does not happen immediately but rather is a gradual change over some time. Some elves change the color of their hair like leaves on "+
        "trees in seasons, making their hair turn bronze orange during the season of Water and dark brown during the season of Death.",
        Behaviour: "A wood elf feels the most comfortable when near nature. Their deep connection to the forest makes them almost a part of it and "+
        "can often feel if anything is wrong with it. To get this bound they must live in the forest for a long time. This also causes them to be a "+
        "bit overprotective towards the forest. They are often wary of other races and dislike any trespass in their forest. Despite this, Wood Elves "+
        "are very reasonable and help people in need regardless of their race as long as their forest stays protected.",
        Encumberment: "18 kg",
        Height: "170 cm",
        Age: "1800 years"
    },
    {id:"Elf_D",
        Title:"Dark Elf", SubTitle: null, Attributes: [{Type: "Agility", Value: 2}, {Type: "Presence", Value: 1}], 
        Traits: ["ElvKno", "NigVis1", "MedMem", "IroAll"], Talents: ["QuiRea1", "QuiRea2"], 
        Background: "Elves perceive time differently than other races, this is mainly due to their long life span. Similar to how some people won’t "+
        "notice or rather forget when they do some everyday chores an elf will feel the same about the years that pass. This can result in elves being "+
        "very selective about what they remember and it is not uncommon for them to not remember names of people they don’t find worthy of remembering. "+
        "Through their meditation they can handle their memories and can remember things they have forgotten with this method."+
        "Wood Elves are a branch from the Fey Elves that, similar to their ancestors, built villages in forests and lived as part of the forest in a "+
        "symbiotic relationship. Wood elves are often seen as protectors of the forest they live in and can be hostile to intruders. They adapted to "+
        "the forest by changing the colors of their hair to that of flowers and leaves giving them a camouflage of sorts. While much taller than their "+
        "ancestors the wood elves are more similar to their ancestors than their siblings. ",
        Appearence: "Probably the closest to their origin as fey elves out of all the elves. They have long pointy ears and much more distinct facial "+
        "features than High Elves with sharper cheekbones. The hair color can be about any color of nature but is more common to blend in with the "+
        "forest they live in. Wood elves are very adaptable and they can shift colors of their skin or hair according to the nature around them, "+
        "this does not happen immediately but rather is a gradual change over some time. Some elves change the color of their hair like leaves on "+
        "trees in seasons, making their hair turn bronze orange during the season of Water and dark brown during the season of Death.",
        Behaviour: "A wood elf feels the most comfortable when near nature. Their deep connection to the forest makes them almost a part of it and "+
        "can often feel if anything is wrong with it. To get this bound they must live in the forest for a long time. This also causes them to be a "+
        "bit overprotective towards the forest. They are often wary of other races and dislike any trespass in their forest. Despite this, Wood Elves "+
        "are very reasonable and help people in need regardless of their race as long as their forest stays protected.",
        Encumberment: "18 kg",
        Height: "170 cm",
        Age: "1800 years"
    },
]

export default RaceList;