import Image from "next/image";
import Link from "next/link";

export default function VideoDetail({ params }) {
  const { id } = params;

  const video = videoData.find((video) => video.id === id);

  if (!video) {
    return <p>Video not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-2/3 w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?start=0&autoplay=1&origin=http://localhost:3000`}
            frameborder="0"
            title={video.title}
            allowFullScreen
            className="w-full h-[300px] md:h-[450px] lg:h-[600px]"
          ></iframe>
          <h1 className="text-white text-xl md:text-2xl font-bold mt-4">
            {video.title}
          </h1>
          <p className="mt-2 text-gray-600">{video.description}</p>
        </div>
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
          <h2 className="text-xl text-white font-semibold mb-4">
            Recommended Videos:
          </h2>
          <ul className="space-y-4">
            {videoData
              .filter((vid) => vid.id !== id)
              .map((vid) => {
                return (
                  <Link
                    href={`/videos/${vid.id}`}
                    key={vid.id}
                    className="flex items-start space-x-4"
                  >
                    <Image
                      height={192}
                      width={192}
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-white text-lg font-semibold">
                        {vid.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
const videoData = [
  {
    id: "RIZqugyD5DA",
    title:
      "Testing Flo Mattress…😈 | Aaj neend tootegi ya ye Mattress? MR. INDIAN HACKER",
    description:
      "1. Thar Durability Test -     • 4x4 Flying Thar...Not For Sale...हाँ ...  2. Samsung Durability Test -    • Testing Samsung S24 Ultra...Will It S...  3. BMW Durability Test Part 1 -    • We Bought A New Car 😍 Just To destroy...  4. BMW Durability Test Part 2 -    • RIP...BMW Car ! - लाखों का नुकसान 😭  5. Fortuner Durability Test -    • RIP...My Fortuner 😭 - 4x4 off-road te...  Today we will test if these Flo Mattresses can stand our tests or not?",
    thumbnail: "https://i.ytimg.com/vi/RIZqugyD5DA/maxresdefault.jpg",
    channel: "MR. INDIAN HACKER",
    views: "1,718,132",
    uploadedAt: "2 October 2024",
  },
  {
    id: "oelsxH0orHI",
    title:
      "Mufasa: The Lion King | Hindi Trailer | Shah Rukh Khan, Aryan Khan, AbRam Khan | In Cinemas Dec 20",
    description:
      "The King Shah Rukh Khan is back as Mufasa 🦁 , with #AryanKhan and #AbRamKhan by his side Mufasa: The Lion King in cinemas on 20th December, 2024Exploring the unlikely rise of the beloved king of the Pride Lands, “Mufasa: The Lion King” enlists Rafiki to relay the legend of Mufasa to young lion cub Kiara, daughter of Simba and Nala, with Timon and Pumbaa lending their signature schtick. Told in flashbacks, the story introduces Mufasa as an orphaned cub, lost and alone until he meets a sympathetic lion named Taka—the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of an extraordinary group of misfits searching for their destiny—their bonds will be tested as they work together to evade a threatening and deadly foe. ",
    thumbnail: "https://i.ytimg.com/vi/oelsxH0orHI/maxresdefault.jpg",
    channel: "Walt Disney Studios India",
    views: "22,177,966",
    uploadedAt: "12 August 2024",
  },
  {
    id: "KiWClrSVgfU",
    title: "Learn NextJS 13 by Building a Modern Full-Stack OpenAI Chatbot",
    description:
      "Let's become amazing web devs together! In this single video, we'll build a super useful customer support chatbot using OpenAI's ChatGPT. It's an awesome portfolio piece to have because it shows your ability to create interactive web apps that solve real-world problems.",
    thumbnail: "https://i.ytimg.com/vi/KiWClrSVgfU/maxresdefault.jpg",
    channel: "Josh tried Coding",
    views: "61220",
    uploadedAt: "30 April 2023",
  },
  {
    id: "CogZL5HBJgg",
    title: "Best frontend and backend projects for resume",
    description:
      "In this video we will address the issue of how can we have industry ready portfolio projects for frontend and backend engineers. What to build and how much to build. How to build things in this AI age. These projects will test your javascript and react skills in frontend and there is no solution available, so your work will be unique.",
    thumbnail: "https://i.ytimg.com/vi/CogZL5HBJgg/maxresdefault.jpg",
    channel: "Hitesh Choudary",
    views: "220,552",
    uploadedAt: "21 Febuary 2023",
  },
  {
    id: "9QvzrledPxg",
    title:
      "FIGHTER: Mitti (Full Video) Hrithik Roshan, Deepika Padukone, Anil Kapoor | Vishal-Sheykhar",
    description:
      "  FIGHTER (Official Playlist) Hrithik Roshan, Deepika Padukone, Anil Kapoor, Karan Singh Grover & Akshay Oberoi | Music Videos,Songs,Teasers & TrailersPresenting the Full Video Song 'Mitti' from The Film Fighter. Starring Hrithik Roshan, Deepika Padukone, Anil Kapoor, Karan Singh Grover & Akshay Oberoi. ",
    thumbnail: "https://i.ytimg.com/vi/9QvzrledPxg/maxresdefault.jpg",
    channel: "T-Series",
    views: "10,215,086",
    uploadedAt: "16 Febuary 2024",
  },
  {
    id: "krsBRQbOPQ4",
    title: "$1 vs $250,000,000 Private Island!",
    description:
      "Watch until the end to see how crazy the last island is Play my ALL NEW MrBeast’s Disco Dop level in Stumble Guys today! Download now to also build your own MrBeast level in the Workshop: https://stumbleguys.onelink.me/Zh4x/M.... [SWEEPSTAKES ENTRY PERIOD HAS ENDED]",
    thumbnail: "https://i.ytimg.com/vi/krsBRQbOPQ4/maxresdefault.jpg",
    channel: "MrBeast",
    views: "227,888,681",
    uploadedAt: "27 January 2024",
  },

  {
    id: "Xe8CkYZvCig",
    title:
      "ReactJs Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series!",
    description:
      "🚀 Welcome to the ultimate React JS crash course for beginners! In just 1.2hours, you'll embark on a coding journey that will empower you to build dynamic and interactive web applications from scratch. Whether you're new to programming or looking to enhance your web development skills, this comprehensive crash course will guide you through the essentials of React JS.",
    thumbnail: "https://i.ytimg.com/vi/Xe8CkYZvCig/maxresdefault.jpg",
    channel: "Sheryians Coding School",
    views: "314K",
    uploadedAt: "1 Febuary 2024",
  },
  {
    id: "eKe1xry7yZA",
    title:
      "Vande Mataram (The Fighter Anthem): Hrithik R, Deepika P, Anil K | Vishal-Sheykhar | Siddharth A",
    description:
      "Presenting 'vande Mataram (Audio)' from the Upcoming Film #Fighter. Starring Hrithik Roshan, Deepika Padukone, Anil Kapoor, Karan Singh Grover & Akshay Oberoi.",
    thumbnail: "https://i.ytimg.com/vi/eKe1xry7yZA/maxresdefault.jpg",
    channel: "T-Series",
    views: "12M",
    uploadedAt: "6 Febuary 2024",
  },

  {
    id: "HBqWsrqK89U",
    title:
      "HTML & CSS Full Course: Beginners to Pro 2024 | 3 Mini Projects Included 🔥 Web Development Course",
    description:
      "Still confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC ",
    thumbnail: "https://i.ytimg.com/vi/HBqWsrqK89U/maxresdefault.jpg",
    channel: "College Wallah",
    views: "385k",
    uploadedAt: "26 April 2024",
  },

  {
    id: "DrSzdmO5fhU",
    title:
      "The Hidden Army | Savage Kingdom | हिन्दी | Full Episode | S3 - E1 | Nat Geo Wild",
    description:
      "Power is earned, either through war or sacrifice. The kingdom witnesses a sudden shift in power as the hyenas grow in number to challenge the long-reigning lions. Witness this battle for dominance on Savage Kingdom. #NatGeoWild #RealisHere",
    thumbnail: "https://i.ytimg.com/vi/DrSzdmO5fhU/maxresdefault.jpg",
    channel: "National Geographic India",
    views: "561,844",
    uploadedAt: "15 July 2024",
  },

  {
    id: "-IhCM2YfAWI",
    title:
      "Cancer: The Scariest Disease in Humans | How to be Safe? | Dhruv Rathee",
    description:
      "Today's video will explore cancer and the misconceptions around it. In a scene from the movie Queen, the character Rani, like many others, worries about getting cancer, despite living a healthy lifestyle like Gupta Uncle who never smoked or drank but still got cancer. This video will show how habits like alcohol and smoking increase the risk of cancer, but there are many other causes too. Our bodies can develop over 200 types of cancer, starting from different parts. We will also discuss thalassemia, a blood disorder treatable with stem cells. Finally, we'll explain how you can register with DKMS to help blood cancer patients. September is recognized as blood cancer awareness month, so take this opportunity to register and become a potential stem cell donor.",
    thumbnail: "https://i.ytimg.com/vi/-IhCM2YfAWI/maxresdefault.jpg",
    channel: "Dhruv Rathee",
    views: "7.7M",
    uploadedAt: "23 September 2024",
  },

  {
    id: "-GMsvQQ_CF4",
    title: "MY NEW HOUSE IN THE CITY | GRAND RP GAMEPLAY #4",
    description:
      "Join the Best GTA 5 RP Server Grand RP!! - https://gta5grand.com/?ref=135155 (Get a $25,000, prime status, and choose a cool car in the game for registering at this link!!)",
    thumbnail: "https://i.ytimg.com/vi/-GMsvQQ_CF4/maxresdefault.jpg",
    channel: "Ujjwal",
    views: "3,892,573",
    uploadedAt: "29 September 2024",
  },

  {
    id: "e1cWEKdTmuo",
    title:
      "ADVENTURES IN THE FOREST 4K HDR | with Cinematic Sound (Colorful Animal Life)",
    description:
      "ADVENTURES IN THE FOREST 4K HDR | with Cinematic Sound (Colorful Animal Life)is a captivating exploration of one of Earth's most biodiverse and mesmerizing environments. This visually stunning documentary takes viewers on a journey deep into the heart of the rainforest, where lush greenery and vibrant wildlife thrive. Presented in breathtaking 4K HDR, every frame of this film explodes with vivid color and rich texture, bringing to life the kaleidoscope of life found in the dense foliage of tropical forests. Whether you are a nature enthusiast, a wildlife lover or simply looking for an escape into the wonders of the natural world, 'Adventure in The Rainforest' promises an unforgettable cinematic journey aims to celebrate the beauty, diversity and vitality of our planet's tropical forests and the colorful animal life that inhabits them.'4K HDR Rainforest Adventure | with Cinematic Sound (Colorful Animal Life)' is a captivating exploration of one of Earth's most biodiverse and mesmerizing environments. This visually stunning documentary takes viewers on a journey deep into the heart of the rainforest, where lush greenery and vibrant wildlife thrive. Presented in breathtaking 4K HDR, every frame of this film explodes with vivid color and rich texture, bringing to life the kaleidoscope of life found in the dense foliage of tropical forests.",
    thumbnail: "https://i.ytimg.com/vi/e1cWEKdTmuo/maxresdefault.jpg",
    channel: "12K UHD WORLD",
    views: "2.8M",
    uploadedAt: "16 May 2024",
  },

  {
    id: "_kWrNX61T8Q",
    title:
      "Latest Punjabi Mashup 2024 | Lovely Melody Live | Yo Yo Honey Singh, Shubh, AP Dhillon, Imran Khan",
    description:
      "Have a wonderful day! 🥂Lovely Melody Live, live songs, bollywood songs,punjabi mashup,punjabi mashup 2022,New Hindi Songs 2022,hindi heart touching songs,Hindi romantic love songs 2022,Bollywood New Songs 2022,Bollywood Latest Songs 2022,Bollywood Hit Songs 2022,Bollywood Hit Songs,Bollywood New Songs,Bollywood Latest Songs,HIndi Romantic songs,Bollywood Love songs,New Hindi Songs,bollywood gaana,Bollywood sad songs,Party mashup,Latest Punjabi Songs,New punjabi songs,punjabi songs 2022,live songs",
    thumbnail:
      "https://i.ytimg.com/vi/_kWrNX61T8Q/maxresdefault.jpg?v=66f83125",
    channel: "Lovely Melody Live",
    views: "12k",
    uploadedAt: "28 September 2024",
  },

  {
    id: "6omuUOZcWL0",
    title:
      "SaaS Website Builder, Project Management And Dashboard: Nextjs14, Bun, Stripe Connect, Prisma, MySQL",
    description:
      "Learn how to connect a users stripe account into your app and sync products. You will also build a Website and funnel builder completely from scratch without using any libraries that can also be hosted on custom subdomains inside the app. ",
    thumbnail: "https://i.ytimg.com/vi/6omuUOZcWL0/maxresdefault.jpg",
    channel: "Web Prodigies",
    views: "634K",
    uploadedAt: "27 Febraury 2024 ",
  },{
    id: "7LvpGHX1Sp8",
    title:
      "Non Stop Lofi Mashup | 24/7 Live | Hindi Heart Touching Songs | Lofi Songs | Lofi Live",
    description:
      "Thank you so much for watching and supporting us! Have a wonderful day! 🥂Lovely Melody Live, live songs, bollywood songs,punjabi mashup,punjabi mashup 2022,New Hindi Songs 2022,hindi heart touching songs,Hindi romantic love songs 2022,Bollywood New Songs 2022,Bollywood Latest Songs 2022,Bollywood Hit Songs 2022,Bollywood Hit Songs,Bollywood New Songs,Bollywood Latest Songs,HIndi Romantic songs,Bollywood Love songs,New Hindi Songs,bollywood gaana,Bollywood sad songs,Party mashup,Latest Punjabi Songs,New punjabi songs,punjabi songs 2022,live songs ",
    thumbnail: "https://i.ytimg.com/vi/7LvpGHX1Sp8/maxresdefault.jpg?v=66f83239",
    channel: "Lovely Melody Live",
    views: "34K",
    uploadedAt: "27 September 2024 ",
  },
];
