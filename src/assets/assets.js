import p_img1 from './p_img1.jpeg'
import p_img2_1 from './p_img2_1.webp'
import p_img2_2 from './p_img2_2.webp'
import p_img2_3 from './p_img2_3.webp'
import p_img2_4 from './p_img2_4.webp'
import p_img3 from './p_img3.webp'
import p_img4 from './p_img4.jpg'
import p_img5 from './p_img5.webp'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.jpg'
import p_img9 from './p_img9.jpg'
import p_img10 from './p_img10.jpg'
import p_img11 from './p_img11.jpg'
import p_img12 from './p_img12.jpg'
import p_img13 from './p_img13.jpg'
import p_img14 from './p_img14.jpg'
import p_img15 from './p_img15.jpg'
import p_img16 from './p_img16.jpg'
import p_img17 from './p_img17.jpg'
import p_img18 from './p_img18.jpg'
import p_img19 from './p_img19.jpg'
import p_img20 from './p_img20.jpg'



import logo from './logo.jpg'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "chiku",
        description: "Rich in Vitamin C: Chikoo is an excellent source of Vitamin C, a powerful antioxidant that strengthens the immune system by neutralizing free radicals, reducing oxidative stress, and protecting cells from damage.Fights Infections: Vitamin C also enhances the production and function of white blood cells, which are essential for fighting off infections and keeping seasonal illnesses at bay.Antiviral and Antibacterial Properties: Some compounds in chikoo may possess antiviral and antibacterial properties, further aiding the body's defense against pathogens",
        price: 100,
        image: [p_img1],
        category: "fruit",
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "mango",
        description: "Mangoes contain both soluble and insoluble fiber, which are crucial for a healthy digestive system. Soluble fiber helps regulate digestion, while insoluble fiber adds bulk to stool, promoting regular bowel movements and preventing constipation and bloatingThey also contain digestive enzymes, particularly amylases, which aid in breaking down complex carbohydrates into simpler sugars, making digestion smoother and more efficient.",
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "fruit",
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "pomegrante",
        description: "Pomegranates are truly a  due to their extraordinary antioxidant and anti-inflammatory capabilities. They are packed with unique polyphenols like punicalagins and anthocyanins, which powerfully combat oxidative stress and inflammation throughout the body. This makes them highly beneficial for heart health, as they can help lower blood pressure, reduce cholesterol oxidation, and prevent plaque buildup in arteries. Pomegranates also support digestive health through their fiber content and may possess anti-cancer properties by inhibiting the growth of various cancer cells. Additionally, they are known to enhance brain health and memory, boost overall immunity with Vitamin C and antimicrobial properties, and even aid exercise performance and recovery.",
        price: 220,
        image: [p_img3],
        category: "fruit",
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "grapse",
        description: "Grapes, in their various vibrant colors like red, green, and black, are not just a refreshing snack but also a powerhouse of nutrients offering a wealth of health benefits. They are particularly rich in antioxidants, notably resveratrol (especially in red and purple grapes), flavonoids, and anthocyanins, which work to neutralize harmful free radicals in the body, reduce oxidative stress, and combat inflammation. This strong antioxidant profile contributes to several key advantages, including significant heart health benefits by helping to lower blood pressure, improve blood vessel function, and prevent the oxidation of LDL  cholesterol, thereby reducing the risk of atherosclerosis.",
        price: 110,
        image: [p_img4],
        category: "fruit",
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "apple",
        description: "",
        price: 100,
        image: [p_img5],
        category: "fruit",
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "orange",
        description: `Oranges are one of the most widely recognized and consumed citrus fruits, and for good reason: they are a powerhouse of essential nutrients and offer a remarkable range of health benefits. Foremost among these is their exceptionally high Vitamin C content, often providing more than the daily recommended intake in a single medium orange. This makes them a phenomenal immune booster, strengthening the body's defenses against common illnesses and supporting overall cellular health by acting as a powerful antioxidant against free radical damage`,
        price: 140,
        image: [p_img6],
        category: "fruit",
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "watermelon",
        description: `Watermelon is a quintessential summer fruit, beloved for its refreshing taste and hydrating properties. True to its name, it's composed of over 90% water, making it an excellent choice for staying hydrated, especially in hot weather or after physical activity, as it also provides electrolytes like potassium. Beyond hydration, watermelon is a nutritional powerhouse, boasting high levels of lycopene, a powerful antioxidant responsible for its red color and linked to reduced risks of cancer (especially prostate cancer), heart disease, and age-related eye disorders. It's also a good source of Vitamin C, which bolsters the immune system and supports skin health by aiding collagen production, and Vitamin A, crucial for vision and skin repair`,
        price: 190,
        image: [p_img7],
        category: "fruit",
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "banana",
        description: `Bananas are one of the most widely consumed fruits globally, cherished for their convenience, sweet taste, and impressive nutritional profile. They are an excellent source of potassium, a vital electrolyte crucial for maintaining healthy blood pressure, proper nerve function, and muscle contractions. This makes them particularly beneficial for heart health and for preventing muscle cramps, especially after exercise.`,
        price: 140,
        image: [p_img8],
        category: "fruit",
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "strawberry",
        description: `Strawberries are small, red, and incredibly flavorful berries, widely popular not just for their taste but also for their significant health benefits. They are particularly renowned for being an excellent source of Vitamin C, a powerful antioxidant that plays a crucial role in boosting the immune system, protecting cells from damage, and supporting collagen production for healthy skin. In fact, a single serving of strawberries can provide more than your daily requirement of Vitamin C.`,
        price: 100,
        image: [p_img9],
        category: "fruit",
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Avocado",
        description: `Avocado, often uniquely classified as a fruit though used culinarily as a vegetable, stands out for its creamy texture and incredibly rich nutrient profile. Unlike most fruits, it's particularly high in healthy monounsaturated fats, primarily oleic acid, which is excellent for heart health by helping to reduce LDL ("bad") cholesterol and increase HDL ("good") cholesterol. This makes it a staple in heart-healthy diets.`,
        price: 110,
        image: [p_img10],
        category: "fruit",
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Brocali",
        description: `Broccoli is a highly nutritious cruciferous vegetable, resembling a miniature tree, and is widely celebrated as a "superfood" due to its impressive array of vitamins, minerals, fiber, and potent bioactive compounds. It's an excellent source of Vitamin C, which is crucial for boosting the immune system and acts as a powerful antioxidant, protecting cells from damage. Broccoli also provides a significant amount of Vitamin K, essential for blood clotting and especially important for maintaining strong, healthy bones by aiding calcium regulation.`,
        price: 120,
        image: [p_img11],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Tomato",
        description: `Tomatoes, botanically a fruit but culinarily used as a vegetable, are a cornerstone of many cuisines worldwide, prized not only for their versatile flavor but also for their impressive nutritional benefits. Their most celebrated compound is lycopene, a powerful antioxidant responsible for their vibrant red color. Lycopene has been extensively studied for its ability to reduce the risk of certain cancers, particularly prostate, lung, and stomach cancers, and its absorption is enhanced when tomatoes are cooked or processed (like in sauces or pastes).`,
        price: 150,
        image: [p_img12],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Potatoes",
        description: `Potatoes, often misunderstood due to their starchy nature and common preparation in unhealthy ways (like French fries), are, in fact, incredibly nutritious when cooked appropriately. They are an excellent source of carbohydrates, providing the body with sustained energy. Importantly, potatoes are rich in potassium, a vital mineral that helps regulate blood pressure, supports proper nerve and muscle function, and contributes to overall cardiovascular health. A single medium potato can contain more potassium than a banana.`,
        price: 130,
        image: [p_img13],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Okra (Lady's Finger)",
        description: `Okra, commonly known as Lady's Finger, is a popular green vegetable recognized for its unique mucilaginous (slimy) texture when cooked and its impressive nutritional profile. It's a low-calorie vegetable packed with vitamins, minerals, and antioxidants, making it a valuable addition to a healthy diet.`,
        price: 160,
        image: [p_img14],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Bitter Gourd",
        description: `Bitter Gourd, also known as Bitter Melon or Karela, lives up to its name with a distinctly bitter taste, but its impressive array of health benefits makes it a highly valued vegetable, especially in traditional medicine systems like Ayurveda. Its most celebrated benefit is its remarkable ability to help manage blood sugar levels, making it particularly beneficial for individuals with diabetes or those at risk. Bitter gourd contains compounds like charantin, vicine, and polypeptide-p, which act like insulin, aiding in glucose uptake by cells and improving insulin sensitivity, thus helping to prevent sudden sugar spikes.`,
        price: 140,
        image: [p_img15],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Pointed Gourd (Parwal)",
        description: `Pointed Gourd, also known as Parwal in India, is a highly nutritious and versatile vegetable that offers a wide array of health benefits, often underappreciated despite its common use in various cuisines. It's particularly lauded for its high fiber content, which is crucial for digestive health, promoting regular bowel movements, preventing constipation, and supporting a healthy gut microbiome. The seeds within the gourd are also known to aid in easing stool passage.`,
        price: 170,
        image: [p_img16],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Green Bell Peppers (Capsicum)",
        description: `Green Bell Peppers, though less sweet than their red, yellow, or orange counterparts due to being unripe, are a vibrant and crunchy vegetable packed with an impressive array of health benefits. They are an excellent source of Vitamin C, which is crucial for a strong immune system, aiding in wound healing, and promoting healthy skin through collagen production. While red bell peppers generally have higher Vitamin C, green bell peppers still offer a significant amount.`,
        price: 150,
        image: [p_img17],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Green Chilies",
        description: `Green chilies are a fiery addition to many cuisines, especially in India, and while they're known for their pungent heat, they also pack a surprising punch of health benefits, largely attributed to a compound called capsaicin. This active ingredient is not only responsible for the spice but also for many of the chili's therapeutic effects.`,
        price: 180,
        image: [p_img18],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Eggplant (Brinjal)",
        description: `Eggplant, also widely known as Brinjal in India, is a versatile and uniquely textured vegetable that is a staple in numerous global cuisines. Often recognized for its glossy purple skin, it's technically a fruit botanically, but it's used culinarily as a vegetable. Eggplant is celebrated for its rich content of antioxidants, particularly nasunin, found abundantly in its skin, which is a type of anthocyanin. These powerful antioxidants play a crucial role in protecting the body's cells from damage caused by free radicals, thereby reducing oxidative stress and inflammation, and potentially lowering the risk of chronic diseases like heart disease and certain cancers.`,
        price: 160,
        image: [p_img19],
        category: "vegetables",
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Cauliflower",
        description: `Cauliflower is a highly versatile and nutritious cruciferous vegetable, often celebrated for its mild flavor and ability to mimic other foods (like rice or pizza crust). It's a low-calorie powerhouse packed with essential vitamins, minerals, fiber, and unique plant compounds that offer a wide array of health benefits.

One of its standout features is its exceptionally high Vitamin C content, which is crucial for a robust immune system, aiding in collagen production for healthy skin, and acting as a powerful antioxidant protecting cells from damage. Cauliflower is also an excellent source of Vitamin K, vital for blood clotting and maintaining strong bones, and provides significant amounts of folate (Vitamin B9), important for cell growth and development.`,
        price: 190,
        image: [p_img20],
        category: "vegetables",
        bestseller: false
    }
]