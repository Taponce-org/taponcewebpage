document.addEventListener("DOMContentLoaded", () => {
 const featureData = [
  {
    img: "assets/images/holder.png",
    title: "Multi-Currency Wallets",
    desc: "Easily store and switch between NGN, USD, GBP, and more — all from one secure wallet with instant conversions.",
    link: "multi-currency-wallets/index.html"
  },
  {
    img: "assets/images/holder.png",
    title: "Crypto Wallet & Swap",
    desc: "Buy, send, receive, and swap crypto alongside fiat. All your assets in one place with real-time exchange rates.",
    link: "crypto-wallet/index.html"
  },
  {
    img: "assets/images/holder.png",
    title: "VTU Services & Betting",
    desc: "Recharge airtime, buy data, pay for cable and utilities, or top up your betting wallets instantly with crypto or cash.",
    link: "vtu-services/index.html"
  },
  {
    img: "assets/images/holder.png",
    title: "Virtual Number Sales",
    desc: "Buy virtual phone numbers for SMS or voice to register accounts, run businesses, or protect your privacy.",
    link: "virtual-numbers/index.html"
  },
  // {
  //   img: "assets/images/feature-savings.png",
  //   title: "Flexible Savings Plans",
  //   desc: "Set financial goals and save at your pace. Lock funds, earn rewards, or pledge not to withdraw before your target date.",
  //   link: "savings-plan/index.html"
  // },
  {
    img: "assets/images/holder.png",
    title: "Instant Withdrawals",
    desc: "Withdraw to any Nigerian bank account or crypto address instantly — with full transparency and zero delays.",
    link: "withdrawals/index.html"
  },
  {
    img: "assets/images/holder.png",
    title: "Internal Transfers",
    desc: "Send money instantly to other Taponce users with no fees. Ideal for friends, vendors, or customer support cases.",
    link: "internal-transfers/index.html"
  },
  // {
  //   img: "assets/images/feature-global.png",
  //   title: "Global Receiving",
  //   desc: "Receive USD, GBP, EUR, or ZAR from anywhere in the world. Share your virtual account details and get paid easily.",
  //   link: "global-receiving/index.html"
  // },
  // {
  //   img: "assets/images/feature-cards.png",
  //   title: "Virtual Cards",
  //   desc: "Generate USD or EUR virtual debit cards for online shopping, subscriptions, and global payments with full control.",
  //   link: "virtual-cards/index.html"
  // },
  {
    img: "assets/images/holder.png",
    title: "Referral & Rewards",
    desc: "Earn money or perks by inviting new users and vendors. Everyone wins when you share what works.",
    link: "referral/index.html"
  },
  // {
  //   img: "assets/images/feature-escrow.png",
  //   title: "Escrow & Buyer Protection",
  //   desc: "Protect your transactions: funds are only released when both buyer and seller meet agreed conditions.",
  //   link: "escrow/index.html"
  // },
  // {
  //   img: "assets/images/feature-chat.png",
  //   title: "AI Chat Assistant",
  //   desc: "Ask questions, get exchange rates, or resolve issues instantly — your smart assistant is always on.",
  //   link: "ai-assistant/index.html"
  // },
  {
    img: "assets/images/holder.png",
    title: "Business Wallets & Bulk Pay",
    desc: "Make bulk transfers to customers or staff. Set access roles, monitor logs, and automate business payments.",
    link: "business-payments/index.html"
  },
  // {
  //   img: "assets/images/feature-offline.png",
  //   title: "Offline Access (USSD/WhatsApp)",
  //   desc: "Use *123# or WhatsApp to check balance, transfer funds, or top up airtime — even with zero data.",
  //   link: "offline-access/index.html"
  // },
  // {
  //   img: "assets/images/feature-rbac.png",
  //   title: "Role-Based Access Control",
  //   desc: "Switch between personal, vendor, or admin access. Each role has defined permissions for safety and control.",
  //   link: "access-control/index.html"
  // }
];


  const carouselInner = document.getElementById("feature-carousel-inner");

  const getGroupSize = () => {
    const w = window.innerWidth;
    if (w >= 1200) return 5;
    if (w >= 992) return 4;
    if (w >= 768) return 3;
    if (w >= 576) return 2;
    return 1;
  };

  const groupSize = getGroupSize();

  for (let i = 0; i < featureData.length; i += groupSize) {
    const group = featureData.slice(i, i + groupSize);
    const itemDiv = document.createElement("div");
    itemDiv.className = `carousel-item${i === 0 ? " active" : ""}`;

    const container = document.createElement("div");
    container.className = "d-flex justify-content-between align-items-stretch w-100 px-4 gap-3";

    group.forEach((item) => {
      const card = document.createElement("div");
      card.className = "text-center";
      card.style.flex = `0 0 ${100 / groupSize}%`;
      card.innerHTML = `
        <img src="${item.img}" class="img-fluid mb-3 rounded" alt="${item.title}">
        <h5 class="fw-bold">${item.title}</h5>
        <p class="text-muted">${item.desc}</p>
        <a href="${item.link}" class="btn btn-sm" style="background-color: var(--clr-24); color: white;">Learn More</a>
      `;
      container.appendChild(card);
    });

    itemDiv.appendChild(container);
    carouselInner.appendChild(itemDiv);
  }
});

// Reload to re-group items on screen size change
let initialWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;

  // Only reload if width has truly changed (not height, scroll, etc.)
  if (newWidth !== initialWidth) {
    location.reload();
  }
});

