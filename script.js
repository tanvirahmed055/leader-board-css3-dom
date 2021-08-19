//১. Top Players2022 নাম একটা লেখা আছে। অথবা Top Blogs লেখা আছে। এই দুইটাকে দুইটা ID দাও। HTML চেইঞ্জ করে ID সেট করো। তারপর জাভাস্ক্রিপ্ট দিয়েই সেই এলিমেন্ট খুঁজে বের করে তার টেক্সট এর কালার চেইঞ্জ করে ফেলো।

const topPlayersHeader = document.getElementById("top-players-heading");

topPlayersHeader.style.color = "blue";



const topBlogsHeader = document.getElementById("top-blogs-heading");

topBlogsHeader.style.color = "blue";


//২. জাভাস্ক্রিপ্ট দিয়ে player ক্লাস এর যতগুলা div আছে সবগুলাকে যেকোন একটা ব্যাকগ্রাউন্ড কালার দাও। তোমার ইচ্ছামতো যেকোন একটা ব্যাকগ্রাউন্ড কালার দিতে হবে। তবে কালারটা hex কালার না দিয়ে। rgba কালার দাও। যদি rgba বুঝতে না পারো। তাহলে গুগলে সার্চ দিয়ে একটা rgba কালার বের করে তারপর সেই কালার দাও।  


const players = document.getElementsByClassName("player");
for (const player of players) {
    player.style.backgroundColor = "rgba(192,192,192,0.3)";
}