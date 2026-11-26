export const mockData = [
  {
    id: "c1",
    text: "Sour light roasts are almost always under-extraction, not a roast problem. Grind finer than you think you should, then go a step finer again.",
    likes: 412,
    liked: true,
    replies: [
      {
        id: "c1a",
        text: "I went from 22 to 18 clicks and it's already better. Still a bit sharp on the finish though.",
        likes: 51,
        liked: false,
        replies: [
          {
            id: "c1a1",
            text: "A sharp finish is often water temperature. For light roasts go straight off the boil, 96–100 °C.",
            likes: 38,
            liked: false,
            replies: [
              {
                id: "c1a1a",
                text: "This. People still quote 93 °C from espresso forums and it's way too cool for a pour-over of a Kenyan.",
                likes: 12,
                liked: false,
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: "c1b",
        text: "Counterpoint: some light roasts are simply underdeveloped. If the roaster dropped it right at first crack, it'll taste grassy and sour whatever you do.",
        likes: 88,
        liked: false,
        replies: [],
      },
    ],
  },
  {
    id: "c2",
    text: "Nobody's mentioned water yet. If your water is very soft with almost no minerals, light roasts taste flat and sour. Try a bottled water around 50–80 ppm hardness.",
    likes: 230,
    liked: false,
    replies: [
      {
        id: "c2a",
        text: "I'm using a filter jug. Is that enough?",
        likes: 31,
        liked: false,
        replies: [
          {
            id: "c2a1",
            text: "Filter jugs mostly remove chlorine and some hardness. Quick test: brew the same coffee with your water and with a mineral-light bottled water. You'll know in one cup.",
            likes: 44,
            liked: false,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "c3",
    text: "Rest your beans! Light roasts can taste sour for the first week after roasting. Check the roast date on the bag.",
    likes: 96,
    liked: false,
    replies: [],
  },
];
