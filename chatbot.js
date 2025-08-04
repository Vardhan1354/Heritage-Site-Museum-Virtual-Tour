const travelData = {
  paris: {
    about: "Paris, the capital of France, is known for its art, fashion, and culture. Iconic landmarks include the Eiffel Tower and the Louvre.",
    tips: "Try local cafes, avoid tourist traps, and always greet people with 'Bonjour!'",
    news: "Latest: Paris is preparing for the 2024 Summer Olympics with new infrastructure."
  },
  
  tokyo: {
    about: "Tokyo is Japan's bustling capital, blending tradition with futuristic tech. Don't miss the Tokyo Tower or Shibuya Crossing.",
    tips: "Respect local customs, use public transport, and try sushi at Tsukiji Market.",
    news: "Latest: Tokyo is enhancing its tourism tech to help English-speaking visitors navigate better."
  },

  tajmahal: {
  about: "The Taj Mahal, located in Agra, India, is a UNESCO World Heritage site and one of the New Seven Wonders of the World. It was commissioned by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
  tips: "Visit early morning to avoid crowds. Dress modestly and carry water. Guided tours enhance the experience.",
  news: "Latest: Restoration work on the Taj Mahal's main dome is underway to preserve its marble glory.",
  hotels: ["The Oberoi Amarvilas", "ITC Mughal", "Hotel Taj Resorts"],
  thingsToDo: ["Visit Agra Fort", "Shop for marble inlay souvenirs", "Taste Mughlai cuisine"],
  medical: ["Agra Heart Centre", "SN Medical College", "Pushpanjali Hospital"]
},

acropolis: {
  about: "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens. It houses several buildings of historical significance, including the Parthenon.",
  tips: "Wear comfortable shoes for climbing. Visit early morning or late afternoon to avoid heat and crowds.",
  news: "Latest: The Acropolis Museum has added new interactive exhibits and digital tours.",
  hotels: ["Electra Palace Athens", "Herodion Hotel", "Plaka Hotel"],
  thingsToDo: ["Explore the Parthenon", "Visit the Acropolis Museum", "Walk through Anafiotika neighborhood"],
  medical: ["Hygeia Hospital", "Athens Medical Center", "Evangelismos General Hospital"]
},

angkorwat: {
  about: "Angkor Wat is a massive temple complex in Cambodia and one of the largest religious monuments in the world. It was originally constructed as a Hindu temple and later converted to Buddhism.",
  tips: "Hire a local guide for deeper insights. Sunrise visits are popular but arrive early to secure a good spot.",
  news: "Latest: Conservation efforts are ongoing to protect the site from tourist-related damage.",
  hotels: ["Shinta Mani Shack", "Anantara Angkor Resort", "FCC Angkor by Avani"],
  thingsToDo: ["Sunrise tour of Angkor Wat", "Explore Ta Prohm (Tomb Raider Temple)", "Visit Angkor National Museum"],
  medical: ["Royal Angkor International Hospital", "Angkor Hospital for Children", "Siem Reap Provincial Hospital"]
},

venice: {
  about: "Venice, Italy, is a romantic city built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals—including the famous Grand Canal.",
  tips: "Buy a Venice transport pass. Avoid peak tourist hours in narrow alleys. Respect local 'no sitting' signs on bridges.",
  news: "Latest: Venice plans to implement a tourist entry fee to manage overcrowding.",
  hotels: ["Hotel Danieli", "Ca' Sagredo Hotel", "Gritti Palace"],
  thingsToDo: ["Ride a gondola", "Visit St. Mark's Basilica", "Explore Doge’s Palace"],
  medical: ["Ospedale SS Giovanni e Paolo", "Ospedale dell'Angelo", "Venice Red Cross Clinic"]
},

greatwall: {
  about: "The Great Wall of China is a series of fortifications built across the historical northern borders of China. It stretches over 13,000 miles and is one of the most iconic landmarks in the world.",
  tips: "Wear comfortable footwear. The Mutianyu and Jinshanling sections are less crowded than Badaling.",
  news: "Latest: Authorities are testing drone-assisted surveillance to protect the Wall from erosion and vandalism.",
  hotels: ["Commune by the Great Wall", "Brickyard Retreat", "Yanqi Hotel"],
  thingsToDo: ["Hike the Jinshanling section", "Take a cable car at Mutianyu", "Visit the Great Wall Museum"],
  medical: ["Beijing United Family Hospital", "Peking University Hospital", "China-Japan Friendship Hospital"]
},


louvremuseum: {
  about: "The Louvre Museum in Paris, France, is the world's largest art museum and a historic monument. It's home to famous works like the Mona Lisa and the Venus de Milo.",
  tips: "Buy tickets online to skip the line. Use the audio guide or Louvre app for detailed insights.",
  news: "Latest: The Louvre has launched a virtual tour platform for remote visitors and students.",
  hotels: ["Hotel du Louvre", "Maison Albar Hotels", "Hotel Regina Louvre"],
  thingsToDo: ["Seine River Cruise", "Explore nearby cafés", "Visit the Eiffel Tower"],
  medical: ["Hôpital Cochin", "American Hospital of Paris", "Institut Curie"]
},

europe: {
  about: "Europe is a continent rich in history, culture, and diversity, with over 40 countries ranging from the Arctic Circle to the Mediterranean.",
  tips: "Use rail passes for affordable travel. Learn basic greetings in local languages. Watch for visa requirements in non-Schengen countries.",
  news: "Latest: European countries are seeing a rise in sustainable tourism trends post-pandemic.",
  hotels: ["Hilton Europe Collection", "Ibis Budget Hotels", "Radisson Blu across major cities"],
  thingsToDo: ["Backpacking across the Alps", "Visit art galleries in Italy", "Explore castles in Germany"],
  medical: ["St. Thomas’ Hospital (UK)", "Charité – Berlin", "San Raffaele Hospital (Italy)"]
},

india: {
  about: "India is a vast and diverse country in South Asia, known for its ancient civilization, vibrant culture, and landmarks like the Himalayas and the Ganges.",
  tips: "Respect local customs. Stay hydrated. Use official transport options in crowded cities.",
  news: "Latest: India is boosting heritage tourism through digital initiatives and cultural events.",
  hotels: ["Taj Hotels", "Oberoi Group", "ITC Hotels"],
  thingsToDo: ["Ride a houseboat in Kerala", "Trek in Himachal", "Attend a traditional dance show in Chennai"],
  medical: ["AIIMS Delhi", "Apollo Hospitals", "Fortis Healthcare"]
},

afghanistan: {
  about: "Afghanistan, located in Central Asia, has a rich cultural history but has been affected by decades of conflict. It features ancient sites like Bamiyan and the Minaret of Jam.",
  tips: "Travel is currently restricted in many areas due to security concerns. Check local advisories before planning a visit.",
  news: "Latest: UNESCO is working with local teams to preserve remaining cultural landmarks.",
  hotels: ["Kabul Serena Hotel", "Park Star Hotel", "Safi Landmark Hotel"],
  thingsToDo: ["Visit Babur’s Garden", "Explore Herat Citadel", "Bamiyan Buddha site (remains)"],
  medical: ["FMIC Kabul", "Afghan German Hospital", "Cure International Hospital"]
},

china: {
  about: "China, the world's most populous country, is known for its Great Wall, ancient traditions, and rapid modernization. Key cities include Beijing, Shanghai, and Xi’an.",
  tips: "Use translation apps, respect local etiquette, and try regional cuisines across provinces.",
  news: "Latest: China is expanding digital ticketing and QR navigation at major heritage sites.",
  hotels: ["The Peninsula Beijing", "Hyatt Regency Shanghai", "Hotel Indigo Xi’an"],
  thingsToDo: ["Walk the Great Wall", "Visit the Terracotta Army", "Explore Forbidden City"],
  medical: ["Peking Union Medical College", "Shanghai United Family Hospital", "Zhongshan Hospital"]
},

  "new york": {
    about: "New York City is the largest city in the USA, famous for Times Square, Central Park, and its skyline.",
    tips: "Use the subway, walk fast, and don't miss a Broadway show!",
    news: "Latest: NYC is launching a new city pass to simplify access to major attractions."
  }
};

function handleUserInput() {
  const input = document.getElementById("user-input").value.toLowerCase();
  displayMessage(input, "user");

  let response = "I'm not sure about that location. Try asking about Paris, Tokyo, or New York.";

  for (let city in travelData) {
    if (input.includes(city)) {
      if (input.includes("about")) {
        response = travelData[city].about;
      } else if (input.includes("tip") || input.includes("tips")) {
        response = travelData[city].tips;
      } else if (input.includes("news")) {
        response = travelData[city].news;
      } else {
        response = `What would you like to know about ${city}? (Try "about", "tips", or "news")`;
      }
      break;
    }
  }

  displayMessage(response, "bot");
  document.getElementById("user-input").value = "";
}

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = sender === "user" ? "user-message" : "bot-message";
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
