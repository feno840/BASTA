const reviews = [
  {
    category: "Ristorante",
    title: "Grotto dei Tigli",
    review:
      "Atmosfera rustica con vista sul lago. La polenta è cremosa e il servizio è caloroso.",
    rating: 4.7,
    duration: "1 min",
    bg: "linear-gradient(135deg, #ff7a18 0%, #af002d 70%)",
  },
  {
    category: "Cinema",
    title: "Cinema Iride",
    review:
      "Programmazione ricercata e sale intime. L'aperitivo prima del film è super.",
    rating: 4.5,
    duration: "45 sec",
    bg: "linear-gradient(135deg, #4b6cb7 0%, #182848 70%)",
  },
  {
    category: "Monumento",
    title: "Parco Ciani",
    review:
      "Passeggiata rilassante tra alberi secolari e vista lago perfetta al tramonto.",
    rating: 4.8,
    duration: "1 min 20 sec",
    bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 70%)",
  },
];

const feed = document.getElementById("feed");

if (feed) {
  feed.innerHTML = "";
}

reviews.forEach((review) => {
  const card = document.createElement("article");
  card.className = "feed-card";
  card.style.setProperty("--card-bg", review.bg);

  card.innerHTML = `
    <span class="feed-card__tag">${review.category}</span>
    <h2 class="feed-card__title">${review.title}</h2>
    <p class="feed-card__review">${review.review}</p>
    <div class="feed-card__meta">
      <span>⭐ ${review.rating}</span>
      <span>${review.duration}</span>
    </div>
  `;

  feed.appendChild(card);
});
