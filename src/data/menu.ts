export type MenuItem = {
  name: string;
  emoji: string;
  description: string;
  price: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Burrito",
    emoji: "🌯",
    description: "Grilled chicken, beef or veggie, rice, beans, salsa & cheese, rolled fresh.",
    price: "From EGP 195",
  },
  {
    name: "Burrito Bowl",
    emoji: "🥗",
    description: "All the burrito goodness, no wrap — piled high over cilantro-lime rice.",
    price: "From EGP 205",
  },
  {
    name: "Tacos (Trio)",
    emoji: "🌮",
    description: "Three soft-shell tacos loaded with your choice of filling and fresh pico.",
    price: "From EGP 175",
  },
  {
    name: "Quesadilla",
    emoji: "🧀",
    description: "Toasted tortilla stuffed with melted cheese, salsa and your protein of choice.",
    price: "From EGP 160",
  },
  {
    name: "Nachos",
    emoji: "🫘",
    description: "Crispy corn chips loaded with cheese sauce, jalapeños, guac and sour cream.",
    price: "From EGP 145",
  },
  {
    name: "Churros",
    emoji: "🍩",
    description: "Cinnamon-sugar churros served warm with chocolate dipping sauce.",
    price: "From EGP 85",
  },
];

export const offers = [
  {
    title: "Crunchadilla",
    emoji: "🧀",
    description: "Our loaded quesadilla stuffed with a crunchy Doritos twist. Back for a limited time.",
  },
  {
    title: "Mexican Crunch Salad",
    emoji: "🥙",
    description: "Crisp romaine, black beans, corn, pico and tortilla strips tossed in chipotle-lime dressing.",
  },
  {
    title: "Street Corn Ribs",
    emoji: "🌽",
    description: "Corn ribs charred and dusted with tajín, lime and cotija cheese.",
  },
];

export const deliveryPlatforms = ["Talabat", "Uber Eats", "elmenus", "Otlob"];
