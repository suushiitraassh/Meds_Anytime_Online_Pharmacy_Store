

// console.log(pt);

















let bannerList = [
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/93051e0bc77-MEGA20_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/dc5281c821e-GRAND1000_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/86df3a0dc37-HP.jpg",
    },
];

let newLaunchesList = [
    {
        name: "Unienzyme Bottle Of 30 Tablets",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G93437/unienzyme-bottle-of-30-tablets-2-1696327659.jpg?dim=1440x0",
        mrp: 148.90,
        discount: 4,
    },
    {
        name: "Pharmeasy Posture Corrector - Corrects Bad Posture - Eases Neck, Back & Shoulder Pain - Small",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G63237/pharmeasy-posture-corrector-corrects-bad-posture-eases-neck-back-shoulder-pain-small-2-1656420762.jpg?dim=1024x0",
        mrp: 999,
        discount: 50,
    },
    {
        name: "Sugar Pop Nourishing Lip Balm - 02 Cherry",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T31617/sugar-pop-nourishing-lip-balm-02-cherry-2-1653658203.jpg?dim=320x320&dpr=1&q=100",
        mrp: 149,
        discount: 5,
    },
    {
        name: "Liveasy Wellness Calcium Magnesium Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=700x0&dpr=1&q=100",
        mrp: 80,
        discount: 15,
    },
    {
        name: "Kellogg'S Froot Loops Original 285g Box",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E65383/kelloggs-froot-loops-original-285g-box-2-1644845403.jpg?dim=1024x0",
        mrp: 185,
        discount: 0,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
];

let trendingProdList = [
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 5,
    },
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 5,
    },
    {
        name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=320x320&dpr=1&q=100",
        mrp: 399,
        discount: 48,
    },
    {
        name: "Dr Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=1024x0",
        mrp: 840,
        discount: 24,
    },
    {
        name: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg?dim=1024x0",
        mrp: 194.6,
        discount: 7,
    },
    {
        name: "Liveasy Essentials Copper Bottle - Ayurvedic Health Benefits - Leak Proof Cap - 950ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W00450/liveasy-essentials-copper-bottle-ayurvedic-health-benefits-leak-proof-cap-950ml-1-1641793079.jpg?dim=1024x0",
        mrp: 1100,
        discount: 30,
    },
    {
        name: "Vicks Vaporub 25ml, Relief From Cold, Cough, Headache And Body Pain",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1654078746.jpg?dim=1024x0",
        mrp: 85,
        discount: 11,
    },
];

let freqBookedLabTestList = [
    {
        discount: 60,
        name: "Post Pradndial Blood Sugar (PPBS)",
        description: "Measure your blood sugar levels after last meal",
        mrp: 500,
        price: 199,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/b4682c3fb22d39479c6d7a4a481e5ae5.png?dim=96x0",
    },
    {
        discount: 64,
        name: "Comprehensive Full Body Checkup with Vitamin D & B12",
        description:
            "Measure Vitamin D & B12 levels and other essential parameters",
        mrp: 4199,
        price: 1499,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/9fc5a0ab225a3ca2bc1702149e07f311.png?dim=96x0",
    },
    {
        discount: 71,
        name: "Random Blood Sugar (RBS)",
        description: "Testing of the blood sugar level at any time of the day",
        mrp: 350,
        price: 99,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/1d842b1450b53455922a5b6de3a3a980.png?dim=96x0",
    },
    {
        discount: "PSP-D",
        name: "",
        description:
            "To assess the renal function for early detection of any kidney disease",
        mrp: "",
        price: 99,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/d0c1ca33ee2637239dfed1645ed02aa8.png?dim=96x0",
    },
];

let paymentOfferList = [
    {
        name: "Amazon Pay",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/1412bb76dee-AMAZONPAY.jpg?dim=1440x0",
    },
    {
        name: "Paytm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/bb9b358232d-PAYTM-02.jpg?dim=1440x0",
    },
    {
        name: "MobiKwik",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/2a0795e595e-MOBIKWIK.jpg?dim=1440x0",
    },
    {
        name: "Ola Money",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/a20dea5ddad-OLA-MONEY-02.jpg?dim=1024x0",
    },
    {
        name: "Freecharge",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/e1bf5c7dae5-FREECHARGE-02.jpg?dim=1024x0",
    },
    {
        name: "Airtel Payment",
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1024x0",
    },
];

let wellnessEssentialsList = [
    {
        name: "Evion 400mg Strip of 10 Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1024x0",
        mrp: 35,
        discount: 10,
    },

    {
        name: "Neurobin Forte Tablet 30's",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=1024x0",
        mrp: 34.7,
        discount: 10,
    },
    {
        name: "Gas O Fast Active Jeera Axtacid Sachet Of 5 G",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I34550/gas-o-fast-active-jeera-antacid-sachet-of-5-g-2-1654166983.jpg?dim=1024x0",
        mrp: 10,
        discount: 15,
    },
    {
        name: "Pharmeasy Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 15,
    },
    {
        name: "Electral Powder 21.80gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/065285/electral-powder-2180gm-2-1653986181.jpg?dim=1024x0",
        mrp: 21.05,
        discount: 15,
    },
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=1024x0",
        mrp: 54,
        discount: 5,
    },
];

let featuredBrandList = [
    {
        name: "Glucon-D",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/e642f1b8237-Glucon_D.jpg?dim=1440x0",
    },
    {
        name: "Himalaya",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0",
    },
    {
        name: "Sugar Free",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0",
    },
    {
        name: "LivEasy",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/1151b7d7c0e-LivEasy-min.png?dim=1440x0",
    },
    {
        name: "Huggies",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/201210bc27d-App_Huggies.jpg?dim=1440x0",
    },
    {
        name: "Wellbeieng Nutrition",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/d6726e69b22-04.jpg?dim=1440x0",
    },
    {
        name: "Revital",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0",
    },
    {
        name: "Volini",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/e8a5cabe9f3-Volini-min.png?dim=1024x0",
    },
    {
        name: "Pentasure",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/c774461a093-Pentasure_App.jpg?dim=1024x0",
    },
    {
        name: "Sirona",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/587eeb1dcb8-App_Sirona.jpg?dim=1024x0",
    },
    {
        name: "Abzorb",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/2318a0e5326-App_Abzorb.jpg?dim=1024x0",
    },
    {
        name: "EverHerb",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/2f3e832e341-Everherb-min.png?dim=1024x0",
    },
    {
        name: "Pharmeasy",
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1024x0",
    },
];

let featuredBrandOfferList = [
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/a9ce64845df-TRENDING_DEALS.jpg?dim=1440x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/9fe349e885e-WEIGHING_MACHINE.jpg?dim=1440x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/414524ad3dd-SNACK.jpg?dim=1440x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/fcbf95577c3-VELCRO.jpg?dim=1440x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/a9ad640ce01-4.jpg?dim=1440x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/a6f2ed93479-BACK_SUPPORT.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/93ef9d6df4f-SLIPPERS.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/6e16a38ea89-ORTHO_PEDOC.jpg?dim=1024x0",
    },
];

let dealsOfTheDayList = [
    {
        name: "Sirona Feminine Cramp Relief Patch Packet Of 5 'S",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I48459/sirona-feminine-cramp-relief-patch-packet-of-5-s-2-1641788205.jpg?dim=320x320&dpr=1&q=100",
        mrp: 240,
        discount: 10,
    },
    {
        name: "Liveasy Wellness Apple Cider Vinegar With Mother -Improves Metabolism- 500ml Bottle",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1654165611.jpg?dim=320x320&dpr=1&q=100",
        mrp: 640,
        discount: 65,
    },
    {
        name: "Revital H Women Multivitamin With Calcium, Zinc, Ginseng For Immunity, Strong Bones & Energy 30 Tablets",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-1-1654168794.jpg?dim=320x320&dpr=1&q=100",
        mrp: 345,
        discount: 15,
    },
    {
        name: "Volini Pain Relief Gel Tube Of 75 G",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-1-1654078754.jpg?dim=320x320&dpr=1&q=100",
        mrp: 245,
        discount: 15,
    },
    {
        name: "Evion 400mg Strip of 10 Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1024x0",
        mrp: 35,
        discount: 10,
    },
    {
        name: "Livogen Z Captab 15'S",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I32380/livogen-z-captab-15s-2-1656662098.jpg?dim=320x320&dpr=1&q=100",
        mrp: 70.4,
        discount: 10,
    },
    {
        name: "Volini Pain Relief Gel Tube Of 75 G",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-1-1654078754.jpg?dim=320x320&dpr=1&q=100",
        mrp: 245,
        discount: 15,
    },
];

let spotlightList = [
    {
        name: "Evion 400mg Strip of 10 Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1024x0",
        mrp: 35,
        discount: 10,
    },
    {
        name: "Evion 400mg Strip of 10 Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1024x0",
        mrp: 35,
        discount: 10,
    },

    {
        name: "Neurobin Forte Tablet 30's",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=1024x0",
        mrp: 34.7,
        discount: 10,
    },
    {
        name: "Gas O Fast Active Jeera Axtacid Sachet Of 5 G",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I34550/gas-o-fast-active-jeera-antacid-sachet-of-5-g-2-1654166983.jpg?dim=1024x0",
        mrp: 10,
        discount: 15,
    },
    {
        name: "Pharmeasy Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 15,
    },
    {
        name: "Electral Powder 21.80gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/065285/electral-powder-2180gm-2-1653986181.jpg?dim=1024x0",
        mrp: 21.05,
        discount: 15,
    },
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=1024x0",
        mrp: 54,
        discount: 5,
    },
];

let productPromo = [
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/19a254ab992-SB.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/1588d37d1d8-Toothsi-Creative-min.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/e695cfa1018-Sevenseas-SRPbanner.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/68a6834f2f5-Nycil_July2022_min.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/e65a05f443f-Livogen-SRPbanner.jpg?dim=1024x0",
    },
];

const link = "data:image/jpeg;base64,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"
let healthArticleList = [
    {
        imgUrl: link,
        title: "What Is Syphilis? Read This Blog To Know More",
    },
    {
        imgUrl: link,
        title: "All You Need To Know About Common Sexually Transmitted Diseases",
    },
    {
        imgUrl:link,
        title: "Best Home Remedies For Thick Eyebrows",
    },
    {
        imgUrl: link,
        title: "Natural Home Remedies To Reduce Belly Fat",
    },
    {
        imgUrl: link,
        title: "Best Home Remedies for Oily Scalp and Hair",
    },
    {
        imgUrl: link,
        title: "Turmeric: Uses, Benefits, Side Effects, and More!",
    },
];

let customerReviewList = [
    {
        name: "Rajarshi Sarkar",
        date: "April 22, 2022",
        review: "The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
        name: "Darpan Dholakia",
        date: "April 23, 2022",
        review: "Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.",
    },
    {
        name: "Lipi Chaudhuri",
        date: "April 15, 2022",
        review: "This app is a game changer for me. I am unable to go out always to buy medicinal products. Pharmeasy gives me the last liberty to shop essential healthcare products from home. The app is very user friendly and me being an elderly person do not find any difficulty in using it. They deliver well in time. Thanks😊",
    },
    {
        name: "Tirthankar Das Purkayastha",
        date: "April 23, 2022",
        review: "Very good app. Would recommend it to everyone requiring fast and efficient delivery of medicinal products at the doorstep.",
    },
    {
        name: "Debanjan Roy",
        date: "April 18, 2022",
        review: "Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.",
    },
    {
        name: "Rohini Sarkar",
        date: "April 21, 2022",
        review: "Very helpful and friendly app in terms of usability, customer support & money saving from the point of medical necessity of every person.",
    },
];

let bannerContainer = document.querySelector(".banner");
createOfferList(bannerList, bannerContainer)

let newLaunchesContainer = document.querySelector(".new-launches > .product-cards");
createProductList(newLaunchesList, newLaunchesContainer)

let trendingContainer = document.querySelector(".trending > .product-cards");
createProductList(trendingProdList, trendingContainer);

let freqBookedLabTestContainer = document.querySelector(".freq-booked-lab-tests > .product-banner");
createProductBannerList(freqBookedLabTestList, freqBookedLabTestContainer);

let paymentOfferContainer = document.querySelector(".payment-offers > div");
createOfferList(paymentOfferList, paymentOfferContainer);

let wellnessEssentialsContainer = document.querySelector(".wellness-essentials > .product-cards2");
createProductList(wellnessEssentialsList, wellnessEssentialsContainer);

let featuredBrandContainer = document.querySelector(".featured-brands > .brand-promo");
createFeatureBrandList(featuredBrandList, featuredBrandContainer);

let featuredBrandOfferContainer = document.querySelector(".featured-brands > .brand-offer");
createOfferList(featuredBrandOfferList, featuredBrandOfferContainer);

let dealsOfTheDayContainer = document.querySelector(".deals-of-the-day > .product-cards");
createProductList(dealsOfTheDayList, dealsOfTheDayContainer);

let spotlightContainer = document.querySelector(".spotlight > .product-cards");
createProductList(spotlightList, spotlightContainer);

let spotlightPromoContainer = document.querySelector(".spotlight > .product-promo");
createOfferList(productPromo, spotlightPromoContainer);

let healthArticleContainer = document.querySelector(".health-articles > div");
createHealthArticleList(healthArticleList, healthArticleContainer);

let customerReviewContainer = document.querySelector(".customer-review > .reviews");
createCustomerReview(customerReviewList, customerReviewContainer);

function createCustomerReview(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let date = document.createElement("p");
        let name = document.createElement("h3");
        let i = document.createElement("i");
        let review = document.createElement("p");

        name.innerText = el.name;
        date.innerText = el.date;

        i.setAttribute("class", "fa-solid fa-quote-left");
        review.innerText = el.review;

        div2.append(i, review);
        div.append(name, date, div2);
        container.append(div);
    })
}

function createFeatureBrandList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        img.setAttribute("src", el.imgUrl);
        name.innerText = el.name;
        div.append(img, name);
        container.append(div);
    })
}

function createProductBannerList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let discount = document.createElement("h4");
        let description = document.createElement("p");
        let price = document.createElement("h4");

        if (typeof el.discount == "number") {
            discount.innerText = el.discount + "% OFF";
            price.innerHTML = "<span>₹" + el.mrp + "</span><br>" + "₹" + el.price;
        } else {
            discount.innerText = el.discount;
            discount.setAttribute("class", "no-discount");
            price.innerHTML = "₹" + el.price;
        }
        name.innerText = el.name;
        description.innerText = el.description;
        img.setAttribute("src", el.imgUrl);
        div2.append(price, img);
        div.append(discount, name, description, div2);
        container.append(div);
    })
}

function createProductList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let mrp = document.createElement("p");
        let price = document.createElement("h4");

        img.setAttribute("src", el.imgUrl);
        name.innerText = el.name;
        name.setAttribute("class", "name");
        mrp.innerHTML = "MRP <span>₹" + el.mrp + "</span>";
        let p = (el.mrp / 100) * (100 - el.discount);
        p = (Math.round(p * 100) / 100).toFixed(2);
        price.innerHTML = "₹" + p + "<span>" + el.discount + "% OFF";
        div2.append(name, mrp, price);
        div.append(img, div2);
        container.append(div);
    })
}

function createOfferList(list, container) {
    list.forEach(function (el) {
        let img = document.createElement("img");
        img.setAttribute("src", el.imgUrl);
        container.append(img);
    });
}

function createHealthArticleList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");

        img.setAttribute("src", el.imgUrl);
        title.innerText = el.title;

        div.append(img, title);
        container.append(div);
    })
}
