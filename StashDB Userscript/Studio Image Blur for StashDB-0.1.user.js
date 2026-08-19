// ==UserScript==
// @name         Studio Image Blur for StashDB
// @namespace    https://github.com/Serechops/Serechops-Stash
// @version      0.3
// @description  Blurs images from specific studios on StashDB scene cards, based on studio name and img src
// @author       Serechops
// @match        https://stashdb.org/*
// @match        https://theporndb.net/*
// @match        https://fansdb.cc/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of studios to blur images from
    const studiosToBlur = [
"80Gays",
"8teenBoy",
"ASGmax Originals",
"Active Duty",
"Amateur Gay POV",
"American Muscle Hunks",
"Apolo Adri",
"Austin Wilde",
"BadPuppy",
"Bait Bus",
"BareTwinks",
"Bareback Attack",
"Bareback Casting",
"Bareback Latinoz",
"Bareback That Hole",
"Bath House Bait",
"Bear Films",
"Beddable Boys",
"Beefcake Hunter",
"BelAmi",
"Bentley Race",
"Best Bareback",
"BiEmpire",
"BiLatinMen",
"BiPhoria",
"Bigdaddy",
"Blake Mason",
"BoLatino",
"Boy For Sale",
"BoyCrush",
"BoyFun",
"Boys Destroyed",
"Boys Halfway House",
"Brazil TGirls",
"Brazilian Transsexuals",
"Breed It Raw",
"Breed Me Raw",
"Bring Me a Boy",
"Broke Straight Boys",
"BrokeStraightBoys",
"Bromo",
"Brother Crush",
"Bully Him",
"Busted T-Girls",
"Butt Virgins",
"Butter Loads",
"Cade Maddox",
"Carnal+ Originals",
"ChaosMen",
"Circle Jerk Boys",
"Citebeur",
"Cocksucker",
"Cocky Boys",
"CockyBoys",
"Cody Cummings",
"Colby Knox",
"CollegeDudes",
"Colt Studio Group",
"Corbin Fisher",
"Cum Dump Van",
"Cum Eating Cuckolds",
"Cutler's Den",
"Czech Gay Amateurs",
"Czech Gay Authentic Videos",
"Czech Gay Casting",
"Czech Gay Couples",
"Czech Gay Fantasy",
"Czech Gay Massage",
"Czech Gay Solarium",
"Czech Hunter",
"Dad Creep",
"Damn That's Big",
"Devil's Tgirls",
"Dick Rides",
"Dirty Tony",
"Disruptive Films",
"Doctor Tapes",
"Dream Tranny",
"English Lads",
"Eric Videos",
"EuroPeenz",
"Evolved Fights",
"ExB",
"Extra Big Dicks",
"Falcon Studios",
"Family Dick",
"Fetish Force",
"Fisting Central",
"FratBoy",
"FratX",
"Freeuse Twink",
"Freshmen",
"Fuck You Cracker",
"Fuckermate",
"Fun-Size Boys",
"GAYHOOPLA",
"GAYHOOPLAB",
"Gay Castings",
"Gay Creeps",
"Gay Horror",
"Gay Law Office",
"Gay Patrol",
"Gay Pawn",
"Gay Porn Berries",
"Gay Revenge",
"Gay Room",
"Gay Violations",
"Gay Wire",
"GayLifeNetwork",
"Gaycest",
"GaycestCarnal",
"Gayfruit",
"GenderXFilms",
"Grab Ass",
"Grooby Girls",
"Guy Selector",
"GuyBone",
"Guys In Sweatpants",
"HardBritLads",
"HardBrittLads",
"Haze Him",
"Helix Studios",
"High Performance Men",
"Himeros.TV",
"Honey Trans VR",
"Honey Trans",
"Hot Dads Hot Lads",
"Hot House Entertainment",
"Hung Fuckers",
"Hung Young Brit",
"It's Gonna Hurt",
"KeumGay",
"Kink Men",
"Kink Trans",
"Kristen Bjorn",
"LadyBoyGold",
"LadyboyGold",
"Latin Leche",
"LatinBoyz",
"Latino Guys Porn",
"Let Them Watch",
"Lollipop Twinks",
"Lucas Entertainment",
"LucasRaunch",
"MENatPLAY",
"Man Royale",
"ManUpFilms",
"Manhandled.com",
"Marcus Mojo",
"Masonic Boys",
"Massage Bait",
"Maverick Men",
"Men Over 30",
"Men POV",
"Men on Edge",
"Men.com",
"MenAtPlay",
"MenAtPlay",
"Meninos Online",
"Menoboy",
"Military Dick",
"Missionary Boys",
"Model Gaydar",
"My Dirtiest Fantasy",
"N&F Studio",
"NYSeed",
"NakedSword x Beau Butler",
"NakedSword",
"NbnaBunny",
"Next Door Buddies",
"Next Door Casting",
"Next Door Films",
"Next Door Homemade",
"Next Door Male",
"Next Door Originals",
"Next Door Raw",
"Next Door Taboo",
"Next Door Twink",
"Noir Male",
"Office Cock",
"Out Him",
"Out In Public",
"PZP Productions",
"PansexualX",
"Peter Fever",
"Pig Bottoms",
"Pinko TGirls",
"Pound His Ass",
"Pride Studios",
"Project City Bus",
"PureTS",
"Raging Stallion x MenAtPlay",
"Raging Stallion",
"Raging Stallion",
"Randy Blue",
"Raunchy Bastards",
"Raw Fuck Boys",
"Raw Fuck Club",
"Raw Road Nation",
"RealGayCouples",
"Rod Daily",
"Rub Him",
"Samuel O'Toole",
"Sausage Party",
"Say Uncle",
"SayUncle All Stars",
"SayUncle All-Stars",
"SayUncle x Callum and Cole",
"SayUncle x RawEuro",
"SayUncle x TwinkeyBoy",
"Scout Boys",
"Sean Cody",
"See Him Fuck",
"See Him Solo",
"Setagaya VR",
"She Male Idol",
"Shemale Club",
"Shemale Idol",
"Shemales Fuck Girls",
"Shemales Fuck Shemales",
"Shemales Get Fucked",
"Shower Bait",
"Southern Strokes",
"Staxus",
"Stocky Dudes",
"Str8 Hell",
"Str8 to GayMen.com",
"Straight Fraternity",
"Straight Guys for Gay Eyes",
"TGirl Japan Hardcore",
"TGirl Japan",
"TGirl Pornstar",
"TGirls.xxx",
"TIM Classics",
"TIM Fuck",
"TS Pussy Hunters",
"Teach Twinks",
"Tgirl Post-Op",
"The Bro Network",
"The Gay Office",
"The Guy Site",
"Thick and Big",
"Thug Hunter",
"Timtales",
"TitanMen",
"Tonight's Boyfriend",
"Trans Angels",
"Trans Daylight",
"Trans Midnight",
"Trans Roommates",
"TransErotica",
"Transfixed",
"TransgressiveXXX",
"Transsensual",
"Transsexual Angel",
"Trystan Bull",
"Twink Trade",
"Twinklight",
"Twinkylicious",
"UK Naked Men",
"UngloryHole",
"VIPissy",
"VOYR",
"VRB GaySwearl",
"VirtualRealGay",
"Wet and Pissy",
"Why Not Bi",
"William Higgins",
"World of Men",
"Young Bastards",
"Young Perps"
        // Add more as needed
    ];

    // List of image src patterns to blur
    const srcPatternsToBlur = [
        "https://cdn.stashdb.org/images/22/1a",
        "https://cdn.stashdb.org/images/"
        // Add more src patterns as needed
    ];

    // Case-insensitive studio name comparison
    function studioMatches(studioName) {
        const normalizedName = studioName.trim().toLowerCase();
        return studiosToBlur.some(function(studio) {
            return studio.trim().toLowerCase() === normalizedName;
        });
    }

    function blurImages() {
        // Select all scene card images
        const sceneCards = document.querySelectorAll('.SceneCard-image');
        sceneCards.forEach(function(card) {
            // Find the parent card element
            const sceneCard = card.closest('.SceneCard');
            if (!sceneCard) return;
            const studioNameElement = sceneCard.querySelector('.SceneCard-studio-name');
            if (studioNameElement && studioMatches(studioNameElement.textContent)) {
                // Apply CSS blur
                card.style.filter = 'blur(8px)';
            }
        });
        // Select all images on the page
        const allImages = document.querySelectorAll('img');
        allImages.forEach(function(image) {
            // Check if the image's parent has a studio name
            const parent = image.closest('.SceneCard, .card-body');
            if (!parent) return;
            const studioNameElement = parent.querySelector('.SceneCard-studio-name, a[href*="/studios/"]');
            const isStudioMatch = studioNameElement && studioMatches(studioNameElement.textContent);
            if (isStudioMatch && srcPatternsToBlur.some(function(pattern) {
                    return image.src.includes(pattern);
                })) {
                // Apply CSS blur
                image.style.filter = 'blur(8px)';
            }
        });
    }
    // Run the blur function when the document loads
    window.addEventListener('load', blurImages);
    // Run the blur function on dynamic content updates
    const observer = new MutationObserver(blurImages);
    observer.observe(document.body, {
    childList: true,
    subtree: true
    });
    })();
