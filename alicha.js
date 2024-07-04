// Objek untuk menyimpan pengaturan
const settings = {
    title: "Ganxz Store | Always happy",
    metaTitle: "Ganxz Store|| Always happy",
    metaDescription: "Store & Creator",
    metaKeywords: "Ganxz , profil, siapa Ganxz?",
    metaRobots: "index, follow",
    profileImage: "profile.png",
    name: "Ganxz Store ",
    occupation: "Creator & Store",
    location: "📍 Bekasi, Jawa Barat, Indonesia",
    socialLinks: [
        { name: "Instagram", url: "https://www.instagram.com/ghanz_anak_sholeh?igsh=MTNqYmZ5ZGlnZTJwYw==" },
        { name: "WhatsApp", url: "https://wa.me/6289654782544" },
        { name: "Donasi", url: "https://saweria.co/ghanzxvexa" },
        { name: "TikTok", url: "https://https://tiktok.com/@ghanzxxyz2009" }
        // Tambahkan link sosial lainnya di sini
    ]
};

// Fungsi untuk mengisi konten halaman dari settings.js
function fillContent() {
    document.title = settings.title;
    document.getElementById("meta-title").setAttribute("content", settings.metaTitle);
    document.getElementById("meta-description").setAttribute("content", settings.metaDescription);
    document.getElementById("meta-keywords").setAttribute("content", settings.metaKeywords);
    document.getElementById("meta-robots").setAttribute("content", settings.metaRobots);
    document.getElementById("profile-image").setAttribute("src", settings.profileImage);
    document.querySelector(".name").textContent = settings.name;
    document.getElementById("occupation").textContent = settings.occupation;
    document.getElementById("location").innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${settings.location}`;

    const socialLinksContainer = document.getElementById("social-links");
    settings.socialLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", link.url);
        linkElement.setAttribute("target", "_blank");
        linkElement.textContent = link.name;
        socialLinksContainer.appendChild(linkElement);
    });

    // Menambahkan centang hijau
    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");
    document.querySelector(".verified").appendChild(checkmark);
}

// Memanggil fungsi untuk mengisi konten saat halaman dimuat
fillContent();
