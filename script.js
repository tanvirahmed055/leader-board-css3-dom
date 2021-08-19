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


//৩. ওয়েবসাইট এর নিচে একটা ul list যোগ করো। সেখানে তোমার ইচ্ছামতো তিনটা আইটেম যোগ করো। তারপর ul এর নিচে একটা বাটন যোগ করো। এখন তোমার কাজ হবে। বাটনে যতবার ক্লিক করবে। ul এর মধ্যে নতুন একটা লিস্ট আইটেম যোগ হবে। 

document.getElementById('list-btn').addEventListener('click', function () {
    const listContainer = document.getElementById("list-container");
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("new li item"));
    listContainer.appendChild(listItem);

});


//৪. এখন ul এর নিচে একটা ইনপুট ফিল্ড আর একটা বাটন যোগ করো। ইনপুট ফিল্ড এ শুরুতে মান হবে শূন্য (০)। তারপর ইনপুট ফিল্ডের পাশের নতুন বাটন এ যতবার প্রেস করবে ততবার এক এক করে ইনপুট ফিল্ড এর মান এক এক করে বাড়বে। 

let displayNumberElement = document.getElementById("display").value = 0;


document.getElementById('display-btn').addEventListener('click', function () {
    // displayNumber.value = displayNumber.value + 1;
    // console.log(displayNumber + 1);
    let displayNumberElement = document.getElementById("display");
    const displayNumberText = displayNumberElement.value;
    const displayNumber = parseInt(displayNumberText);
    displayNumberElement.value = displayNumber + 1;
});


