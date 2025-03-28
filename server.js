const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Interactive Farming Chatbot for Indian Crops
app.post("/chat", (req, res) => {
    const { message } = req.body;
    const lowerMessage = message.toLowerCase();
    let response = "I'm just a humble farm bot 🤠, but I'll try to help! Ask me about rice, wheat, ragi, mango, chilly, or sugarcane farming in India. 🌾";

    // General greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        response = "Namaste, Kisan! 🌾 How can I assist you with farming today?";
    
    // Crop-Specific Responses (India)
    } else if (lowerMessage.includes("rice")) {
        response = "🌾 Rice grows best in warm, humid conditions. The **Kharif season (June–October)** is ideal, and it thrives in **clayey, loamy soil** with plenty of water. Major rice-growing states: **West Bengal, Punjab, Uttar Pradesh, Tamil Nadu**.";
    
    } else if (lowerMessage.includes("wheat")) {
        response = "🌿 Wheat is a **Rabi crop**, sown in **November-December** and harvested in **March-April**. It prefers **well-drained loamy soil** and grows well in **Punjab, Haryana, Uttar Pradesh, and Madhya Pradesh**.";
    
    } else if (lowerMessage.includes("ragi") || lowerMessage.includes("finger millet")) {
        response = "🌱 Ragi (Finger Millet) is a **nutrient-rich, drought-resistant** crop! It thrives in **red sandy soil** and requires moderate rainfall. Major producers: **Karnataka, Tamil Nadu, Odisha, Maharashtra**.";
    
    } else if (lowerMessage.includes("mango")) {
        response = "🥭 Mango, the **King of Fruits**, grows best in **tropical climates** with well-drained **alluvial or sandy loam soil**. It requires hot summers and mild winters. Top producers: **Uttar Pradesh, Maharashtra, Andhra Pradesh, and Tamil Nadu**.";
    
    } else if (lowerMessage.includes("chilly") || lowerMessage.includes("chilli")) {
        response = "🌶️ Chilly needs **warm, dry weather** and well-drained **loamy soil**. It is sensitive to frost. Sowing: **June-July (Kharif), September-October (Rabi)**. Major producers: **Andhra Pradesh, Telangana, Karnataka, Madhya Pradesh**.";
    
    } else if (lowerMessage.includes("sugarcane")) {
        response = "🍬 Sugarcane requires **hot and humid weather** with well-drained **fertile loamy soil**. It’s grown throughout the year but best planted **February-April**. Top states: **Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu**.";
    
    // Soil & Farming Practices
    } else if (lowerMessage.includes("best soil")) {
        response = "🌱 Different crops need different soils! **Rice:** Clayey, **Wheat:** Loamy, **Ragi:** Red sandy, **Mango:** Alluvial, **Chilly:** Loamy, **Sugarcane:** Fertile loamy.";
    
    } else if (lowerMessage.includes("pests")) {
        response = "🐞 Pests like **stem borers in rice**, **aphids in wheat**, and **fruit flies in mango** can harm crops! Use **organic pesticides** or **neem-based sprays**.";
    
    } else if (lowerMessage.includes("fertilizer")) {
        response = "🌾 Use **NPK fertilizers** for better yield! **Rice & wheat:** Balanced NPK, **Mango:** Organic manure, **Chilly:** Potassium-rich fertilizers.";
    
    } else if (lowerMessage.includes("weather")) {
        response = "⛅ Always check the forecast before planting! **Rice & Sugarcane need high rainfall**, while **Wheat & Ragi prefer dry winters**.";
    
    } else if (lowerMessage.includes("irrigation") || lowerMessage.includes("water")) {
        response = "💧 **Rice:** Flooded fields, **Wheat & Ragi:** Moderate irrigation, **Mango:** Drip irrigation, **Sugarcane:** Regular watering required.";

    // Closing message
    } else if (lowerMessage.includes("bye")) {
        response = "Take care, Kisan! 🚜 May your fields be green and your harvest bountiful! 🌾";

    }

    res.json({ reply: response });
});

app.listen(PORT, () => {
    console.log(`🚜 Indian Farming Chatbot running at http://localhost:${PORT} 🌾`);
});
