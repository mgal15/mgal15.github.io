// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hello! Looking for movie or TV show recommendations? Tell me what you're in the mood for!",
"Hi there! What kind of movies or shows are you interested in today?",
"I'm here to help you find something to watch. Any genre or mood in mind?"
];

var elizaFinals = [
"Enjoy your watch! Feel free to come back if you'd like more recommendations.",
"Goodbye! Hope you find the perfect movie or show.",
"Happy watching! Let me know if you ever need more suggestions.",
"It was fun helping you pick something to watch. Catch you next time!",
"Goodbye! I'll be here if you need more recommendations later."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];




var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
    Array of
    ["<key>", <rank>, [
    ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
    ]],
    ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
    ]]
    ]]
*/

["xnone", 0, [
    ["*", [
        "I'm not sure I understand. Are you talking about a particular movie or show?",
        "Could you tell me more about the kinds of movies you enjoy?",
        "What do you like most about that show?",
        "That sounds interesting. What did you think of it?",
        "Do you often watch that genre?",
        "I’d love to hear more about your thoughts on that film or show."
    ]]
]],
["sorry", 0, [
    ["*", [
        "Please don't apologise.",
        "Apologies are not necessary.",
        "I've told you that apologies are not required.",
        "It did not bother me.  Please continue."
    ]]
]],
["apologise", 0, [
    ["*", [
        "goto sorry"
    ]]
]],
// Memory (remember) responses
["remember", 5, [
    ["* i remember *", [
        "Do you often think about movies like (2)?",
        "Does (2) bring to mind any other movies or shows?",
        "What made that film/show memorable for you?",
        "Why do you think you remember (2) right now?",
        "Is there a movie scene that reminds you of (2)?"
    ]]
]],

// New category for genres
["genre", 5, [
    ["* i like *", [
        "Oh, you enjoy (2)! Have you seen any recent movies or shows in that genre?",
        "What’s your favorite (2) movie?",
        "Have you watched any good (2) series lately?",
        "If you like (2), you might also enjoy [suggest title here]."
    ]]
   ]],

   // Actor preferences
["actor", 5, [
    ["* i like *", [
        "Oh, you enjoy movies with (2)! Have you seen any of their recent films?",
        "Are there other actors you’re a fan of?",
        "If you like (2), you might enjoy [suggest a similar actor or a popular movie by this actor]."
    ]]
   ]],
// Recommendations category
["recommend", 5, [
    ["* recommend me *", [
        "Sure! What genre are you in the mood for?",
        "I can recommend some movies for you. Do you have a favorite director or actor?",
        "If you enjoyed (2), you might like [movie recommendation based on (2)]."
    ]]
   ]],
["(like|want|enjoy)", 5,[
    ["* i (like|want|enjoy) * horror * (movie|film)*", [
        "You seem to enjoy horror movies! How about *The Conjuring*?", 
        "If you're looking for something chilling, *Hereditary* is a must-watch.", 
        "How about a classic? *The Shining* will keep you on the edge of your seat!"
    ]],

    ["* i (like|want|enjoy) * horror * (tv show|series)*", [
        "For horror TV shows, you might like *The Haunting of Hill House*.", 
        "Try *American Horror Story* if you enjoy variety in horror themes.", 
        "If supernatural horror is your thing, *Stranger Things* is a great choice."
    ]],
    ["* i (like|want|enjoy) * comedy * (movie|film)*", [
        "Comedy movie suggestions: *Superbad* is hilarious if you're in the mood for laughs.", 
        "You might enjoy *The Hangover*. It’s a wild, unforgettable comedy.", 
        "For something different, *Monty Python and the Holy Grail* is timeless!"
    ]],
    ["* i (like|want|enjoy) * comedy * (tv show|series)*", [
        "For a comedy series, try *Brooklyn Nine-Nine* for some police humor.", 
        "*The Office* is a classic and has some unforgettable moments.", 
        "*Parks and Recreation* is another top pick if you love workplace comedies."
    ]],
    
    ["* i (like|want|enjoy) * romance * (movie|film)*", [
        "Romance movies you might enjoy: *The Notebook* is a classic. Have you seen it?", 
        "If you're in the mood for a romance with a twist, *La La Land* could be perfect.", 
        "For something dramatic, *Pride and Prejudice* (2005) is iconic."
    ]],
    ["* i (like|want|enjoy) * romance * (tv show|series)*", [
        "For romance TV shows, *Outlander* has both drama and romance.",
         "*Bridgerton* is perfect for romance with historical flair.", 
         "*Normal People* is a heartfelt exploration of modern relationships."
    ]],
    
    ["* i (like|want|enjoy) * action * (movie|film)*", [
        "Action movie options: *Mad Max: Fury Road* is pure adrenaline.", 
        "You might enjoy *John Wick*. The action scenes are intense.", 
        "For something with a deep plot, *The Dark Knight* is thrilling."
    ]],
    ["* i (like|want|enjoy) * action * (tv show|series)*", [
        "For action TV shows, check out *24* for high-stakes thrills.",
         "*Daredevil* offers gritty action and a compelling story.", 
         "*The Mandalorian* combines action with sci-fi and adventure."
    ]],
    
    ["* i (like|want|enjoy) * sci-fi * (movie|film)*", [
        "Sci-fi movies you might like: *Blade Runner 2049* is visually stunning.",
        "For a thrilling adventure, *Interstellar* combines space exploration with depth.", 
        "*Star Wars: A New Hope* is a sci-fi classic you can't miss."
    ]],
    ["* i (like|want|enjoy) * sci-fi * (tv show|series)*", [
        "For sci-fi TV, try *Stranger Things* for a blend of horror and sci-fi.",
         "*The Expanse* offers a more serious, space-focused sci-fi experience.",
          "*Black Mirror* explores futuristic themes and technology in every episode."
    ]],
    ["* i (like|want|enjoy) * action * comedy * (movie|film)*", [
        "For action-comedy movies, try *Rush Hour* for a mix of laughs and thrills.",
            "*Kingsman: The Secret Service* combines slick action with humor.", 
            "*21 Jump Street* is a fun action-comedy with plenty of laughs."
    ]],
    ["* i (like|want|enjoy) * action * comedy * (tv show|series)*", [
        "For action-comedy TV shows, check out *Brooklyn Nine-Nine* for police action with a comedic twist.",
            "*Chuck* is a great mix of action and humor.", 
            "*The Boys* blends dark humor with superhero action."
    ]],
    
    ["* i (like|want|enjoy) * romance * drama * (movie|film)*", [
        "For a romantic drama, *The Notebook* is a classic choice.", 
        "Try *A Star is Born* for romance with a dramatic twist.",
            "*La La Land* is a romance-drama with a musical flair."
    ]],
    ["* i (like|want|enjoy) * romance * drama * (tv show|series)*", [
        "If you're into romantic dramas, *Outlander* weaves romance with historical drama.",
            "Try *This Is Us* for heartfelt romance and family drama.",
            "*Normal People* offers an intimate take on romance and drama."
    ]],
    
    ["* i (like|want|enjoy) * horror * thriller * (movie|film)*", [
        "For horror-thriller movies, try *Get Out* for a psychological edge.",
            "*A Quiet Place* combines horror with suspense.", 
            "*The Silence of the Lambs* is a classic thriller with horror elements."
    ]],
    ["* i (like|want|enjoy) * horror * thriller * (tv show|series)*", [
        "If you're interested in horror-thriller shows, *The Haunting of Hill House* delivers chills and thrills.",
            "Try *Stranger Things* for a mix of horror, thriller, and nostalgia.",
            "*Hannibal* is a psychological thriller with horror undertones."
    ]],
    ["* i want something lighthearted *", [
        "If you're looking for something light and fun, *The Princess Bride* is an excellent pick.",
        "You might enjoy *Crazy, Stupid, Love*—a feel-good comedy with a heartwarming story.",
        "If you want something heartwarming and funny, *Little Miss Sunshine* could be just what you need."
    ]],
    ["* i want something dramatic *", [
        "For a powerful drama, I recommend *The Godfather*. It's a timeless classic.",
        "If you're in the mood for something more emotional, *Atonement* is a deeply moving film.",
        "For a more modern dramatic experience, *The Social Network* is a compelling choice."
    ]]
    
]],
["tvshow", 3, [
    ["*", [
        "what genre are you thinking?"
    ]],
    ["*horror tv show*", [
        "goto horror_shows"
    ]],
    ["*thriller tv show*", [
        "goto thriller_shows"
    ]],
    ["*romance tv show*", [
        "goto romance_shows"
    ]],
    ["*action tv show*", [
        "goto action_shows"
    ]],
    ["*comedy tv show*", [
        "goto comedy_shows"
    ]],
]],
["movie", 0, [
    ["*", [
        "Are you looking for a particular type of movie?",
        "Do you enjoy any specific movie genres?"
    ]],
    ["*action movie*",[
        "goto action_movies"
    ]],
    ["*thriller movie*",[
        "goto thriller_movies"
    ]],
    ["*comedy movie*",[
        "goto comedy_movies"
    ]],
    ["*romance movie*",[
        "goto romance_movies"
    ]],
    ["*horror movie*",[
        "goto horror_movies"
    ]],

]],
["action_shows", 5 ,[
    ["*", [
    "I recommend *The Mandalorian* if you like action-packed space adventures.",
    "How about *Vikings*, an action-filled historical drama?",
    "Would you like a different genre of show?"
    ]]
]],
// Comedy Genre Shows
["comedy_shows",5, [
    ["*", [
        "*Parks and Recreation* is a great comedy about a quirky government department.",
        "*How I Met Your Mother* is another fun sitcom filled with laughs.",
        "Would you like to explore another genre?"
    ]]
]],

// Romance Genre Shows
["romance_shows", 0,[
    ["*", [
        "*This Is Us* is an emotional and heartwarming show with great romance elements.",
        "*The Bachelor* offers real-life romantic drama.",
        "Would you like to explore another genre?"
    ]]
]],

// Horror Genre Shows
["horror_shows",0, [
    ["*", [
        "*American Horror Story* is a thrilling, supernatural horror anthology series.",
        "*Penny Dreadful* mixes horror with classic literature.",
        "For horror TV shows, you might like *The Haunting of Hill House*.", 
        "Try *American Horror Story* if you enjoy variety in horror themes.", 
        "If supernatural horror is your thing, *Stranger Things* is a great choice.",
        "Want to try a different genre of show?"
    ]]
]],


["action_movies", 0 ,[
    ["*", [
        "If you love action movies, *Mad Max: Fury Road* is an adrenaline-filled ride.",
        "*Die Hard* is a classic action movie with plenty of suspense and thrills.",
        "*The Dark Knight* is a must-see superhero action movie with a fantastic performance by Heath Ledger.",
        "Would you like a different genre of show?"
    ]]
]],
// Comedy Genre Shows
["comedy_movies",0, [
    ["*", [
        "*Anchorman* is a hilarious and absurd comedy about a news anchor and his team.",
        "*Step Brothers* is a wild, laugh-out-loud comedy about two grown men who become stepbrothers.",
        "Would you like to explore another genre?"
    ]]
]],

// Romance Genre Shows
["romance_movies", 0,[
    ["*", [
        "*Pride and Prejudice* is a beautiful and timeless romantic drama.",
        "*Eternal Sunshine of the Spotless Mind* is a thought-provoking romantic film with a twist.",
        "Would you like to explore another genre?"
    ]]
]],

// Horror Genre Shows
["horror_movies",0, [
    ["*", [
        "*The Conjuring* is a terrifying ghost story based on real events.",
        "*Get Out* is a psychological horror movie with sharp social commentary.",
        "Want to try a different genre of show?"
    ]]
]],

// Thriller Genre Shows
["thriller_movies", 0,[
    ["*", [
        "*Gone Girl* is a psychological thriller filled with twists and turns.",
        "*Shutter Island* is a mind-bending thriller directed by Martin Scorsese.", 
        "Would you like to check out another genre?"
    ]]
]],

["something lighthearted", 5, [
    ["*", [
        "If you're looking for something light and fun, *The Princess Bride* is an excellent pick.",
        "You might enjoy *Crazy, Stupid, Love*—a feel-good comedy with a heartwarming story.",
        "If you want something heartwarming and funny, *Little Miss Sunshine* could be just what you need."
    ]]
]],

["Leonardo DiCaprio", 5, [
    ["*", [
        "Oh, you enjoy movies with Leonardo DiCaprio! Have you seen *Inception*? It’s one of his best!",
        "If you like DiCaprio, you might also enjoy *The Revenant*, which has some stunning cinematography.",
        "Another great pick is *Catch Me If You Can*. It’s a classic!"
    ]]
]],
["romance", 5, [
    ["* romance *", [
        "For romance, you might enjoy *Pride and Prejudice* (2005) if you haven’t seen it yet.",
        "If you're looking for a heartfelt romance, *La La Land* offers a great story with a touch of music.",
        "In the mood for a romance TV show? *Outlander* has an epic love story with plenty of drama."
    ]],
    ["* i want * romance *", [
        "It sounds like you're interested in romance! *The Notebook* is a beautiful love story that never gets old.",
        "Looking for a romance? *To All the Boys I’ve Loved Before* is a sweet modern take on young love.",
        "For a romantic drama with a bit of fantasy, *Twilight* offers a memorable love story with a supernatural twist."
    ]],
    ["* i like * romance *", [
        "Oh, you like romance! *Bridgerton* might be perfect if you enjoy period dramas with romance.",
        "You might like *Normal People*, a deeply emotional series about young love and relationships.",
        "For something with more adventure, *The Time Traveler’s Wife* is a unique love story with a sci-fi twist."
    ]]
]],
["comedy", 5, [
    ["* comedy *", [
        "For comedy, I recommend *Superbad*—a hilarious classic of modern comedy!",
        "If you're interested in a feel-good comedy, *Parks and Recreation* is perfect.",
        "Do you enjoy romantic comedies? *Crazy, Stupid, Love* is a great pick with plenty of laughs!"
    ]],
    ["* i want * comedy *", [
        "It sounds like you’re in the mood for a laugh! *Step Brothers* is sure to make you chuckle.",
        "Looking for a comedy? *Anchorman* is a wild and funny ride that’s become a classic.",
        "How about something quirky? *The Grand Budapest Hotel* is a unique comedy with a star-studded cast."
    ]],
    ["* i like * comedy *", [
        "Oh, you like comedy! *Brooklyn Nine-Nine* is a great choice for a comedy series with lovable characters.",
        "If you're into comedy, you might enjoy *The Office*—a show with unforgettable moments!",
        "For a bit of action with your comedy, try *21 Jump Street*."
    ]]
]],
["horror", 5, [
    ["* horror *", [
        "For a solid horror pick, *Hereditary* is a modern classic that’s deeply unsettling.",
        "If you’re looking for a chilling TV series, *The Haunting of Hill House* is excellent.",
        "For something supernatural, *The Conjuring* might be exactly what you’re looking for!"
    ]],
    ["* i want * horror *", [
        "A horror fan! How about *A Quiet Place*? It’s intense and keeps you on the edge of your seat.",
        "Looking for something scary? *Get Out* is a psychological horror with social themes.",
        "For a classic, you can’t go wrong with *The Shining*. It’s a staple in horror."
    ]],
    ["* i like * horror *", [
        "Oh, you like horror! Have you watched *American Horror Story*? Each season brings a different theme and horror style.",
        "If you enjoy horror, *Stranger Things* has some spooky supernatural elements mixed with adventure.",
        "If you like ghost stories, *The Sixth Sense* might be up your alley."
    ]]
]],
["action", 5, [
    ["* action *", [
        "For action, you might love *Mad Max: Fury Road*—nonstop action from start to finish.",
        "If you’re a fan of superhero action, *The Dark Knight* is a must-watch.",
        "For a mix of sci-fi and action, *Inception* is mind-bending and intense."
    ]],
    ["* i want * action *", [
        "Action, nice choice! Have you seen *John Wick*? It has some of the best fight scenes ever.",
        "If you want an action classic, *Die Hard* is always a good pick.",
        "For something with a mix of humor and action, try *Guardians of the Galaxy*."
    ]],
    ["* i like * action *", [
        "Oh, you like action! *The Bourne Identity* is a great spy thriller with incredible stunts.",
        "If you're into action movies, *Mission: Impossible – Fallout* is highly rated and action-packed.",
        "You might enjoy *Gladiator* if you like historical action with a powerful storyline."
    ]]
]],
["drama", 5, [
    ["* drama *", [
        "For drama, *The Shawshank Redemption* is a highly acclaimed choice.",
        "If you enjoy powerful performances, *The Godfather* is a must-see classic.",
        "For something newer, *Marriage Story* is an emotional journey worth watching."
    ]],
    ["* i want * drama *", [
        "In the mood for drama? *A Star is Born* combines music and an intense storyline.",
        "Looking for a serious drama? *Schindler’s List* is profound and powerful.",
        "For a high-stakes drama, *The Social Network* delves into the creation of Facebook."
    ]],
    ["* i like * drama *", [
        "If you like drama, you might enjoy *This Is Us*, a heartfelt show about family and relationships.",
        "Oh, you enjoy drama! *The Pursuit of Happyness* is an inspiring and emotional film.",
        "For a powerful story, *12 Years a Slave* is a moving, historical drama."
    ]]
]],





];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
    / old old/g, " old",
    /\bthey were( not)? me\b/g, "it was$1 me",
    /\bthey are( not)? me\b/g, "it is$1 me",
    /Are they( always)? me\b/, "it is$1 me",
    /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
    /\bI to have (\w+)/, "I have $1",
    /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof