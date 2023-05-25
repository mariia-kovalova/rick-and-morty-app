"use strict";(self.webpackChunkrick_and_morty_app=self.webpackChunkrick_and_morty_app||[]).push([[506],{2325:function(n,e,t){t.d(e,{W:function(){return l}});var a=t(6916),r=t(9434),i=function(n){return n.characters.info},o=function(n){return n.characters.isLoading},c=function(n){return n.characters.error},s=t(3926),d=t(6419),h=(0,a.P1)([function(n){return n.characters.items},s.aP],d.f),l=function(){return{info:(0,r.v9)(i),characters:(0,r.v9)(h),isLoading:(0,r.v9)(o),error:(0,r.v9)(c)}}},4812:function(n,e,t){t.d(e,{L:function(){return h}});var a=t(6916),r=t(9434),i=function(n){return n.character.isLoading},o=function(n){return n.character.error},c=t(3926),s=t(6419),d=(0,a.P1)([function(n){return n.character.item},c.aP],s.M),h=function(){return{character:(0,r.v9)(d),isLoading:(0,r.v9)(i),error:(0,r.v9)(o)}}},9711:function(n,e,t){t.d(e,{e:function(){return h}});var a=t(6916),r=t(9434),i=t(3926),o=function(n){return n.location.isLoading},c=function(n){return n.location.error},s=t(6419),d=(0,a.P1)([function(n){return n.location.item},i.TS],s.M),h=function(){return{location:(0,r.v9)(d),isLoading:(0,r.v9)(o),error:(0,r.v9)(c)}}},2939:function(n,e,t){t.d(e,{v:function(){return p}});var a,r,i=t(508),o=t(168),c=t(4709),s=t(2554),d=t(5167),h=(0,s.F4)(a||(a=(0,o.Z)(["\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))),l=c.Z.div(r||(r=(0,o.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n\n  border-radius: 50%;\n  background-color: ",";\n\n  ::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 18px;\n    height: 18px;\n    background-color: ",";\n    opacity: 0.5;\n    border-radius: 50%;\n\n    animation: "," 1.5s ease-in-out\n      infinite;\n  }\n"])),d.l,d.l,(function(n){return n.animate?h:"none"})),u=t(3329),p=function(n){var e=n.status,t=n.animate;return(0,u.jsx)(i.u,{text:e,children:(0,u.jsx)(l,{marker:e,animate:t})})}},2506:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var a,r,i,o,c,s,d,h,l,u=t(6907),p=t(9439),m=t(7341),g=t(168),f=t(4709),x=t(910),y=t(3550),b=f.Z.h1(a||(a=(0,g.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),v=f.Z.div(r||(r=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: center;\n  justify-content: center;\n\n  @-webkit-keyframes rotor {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-moz-keyframes rotor {\n    from {\n      -moz-transform: rotate(0deg);\n    }\n    to {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-o-keyframes rotor {\n    from {\n      -o-transform: rotate(0deg);\n    }\n    to {\n      -o-transform: rotate(360deg);\n    }\n  }\n  @keyframes rotor {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  .button-wrap {\n    width: 320px;\n    height: 320px;\n    display: inline-block;\n\n    /* position: absolute; */\n\n    .clicker {\n      text-transform: uppercase;\n      /* Inner circle */\n      width: 300px;\n      height: 300px; /* 20px smaller b/c of margin below */\n      margin: 10px;\n      background: url(","), url(",");\n\n      background-size: contain;\n      border-radius: 50%;\n\n      /* Overlays this circle on the .circle */\n      z-index: 2;\n      position: absolute;\n\n      /* centers the text: adjust to desired size */\n      padding: 22px 10px;\n      text-align: center;\n      color: white;\n      font-weight: 900;\n      font-size: 36px;\n      letter-spacing: 3px;\n      text-shadow: #000000 1px 0 10px;\n\n      /* shadow */\n      -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);\n      -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);\n      -o-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);\n      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);\n    }\n    .circle {\n      /** outer circle **/\n      width: 320px;\n      height: 320px;\n      border-radius: 50%;\n\n      /** image = wedge **/\n      background-image: linear-gradient(\n        45deg,\n        transparent 0%,\n        transparent 30%,\n        "," 30%,\n        "," 70%,\n        transparent 70%,\n        transparent 100%\n      );\n\n      /*** outer circle position: under */\n      z-index: 1;\n      position: absolute;\n    }\n    .clicker:hover + .circle {\n      -webkit-animation: rotor 1.5s linear 0s infinite normal;\n      -mox-animation: rotor 1.5s linear 0s infinite normal;\n      -o-animation: rotor 1.5s linear 0s infinite normal;\n      animation: rotor 1.5s linear 0s infinite normal;\n    }\n\n    .clicker:active + .circle {\n      -webkit-animation: rotor 2.5s linear 0s infinite normal;\n      -mox-animation: rotor 1.5s linear 0s infinite normal;\n      -o-animation: rotor 1.5s linear 0s infinite normal;\n      animation: rotor 0.5s linear 0s infinite normal;\n    }\n  }\n"])),y,x,(function(n){return n.theme.accent}),(function(n){return n.theme.accent})),w=f.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n\n  width: 100%;\n"]))),k=t(2791),M=["Ready for an adventure?","Rick and Morty arrived at [location name], a place filled with vibrant colors and bustling activity. They encountered a mysterious [character name], someone with a mischievous glint in their eyes. Intrigued by the their charm, Rick and Morty decided to join forces and embark on an unexpected adventure, filled with twists and turns that tested their wits and abilities.","Rick and Morty materialized in [location name], a place where holographic billboards illuminated the night sky. They encountered [character name] who possessed unparalleled hacking skills and a rebellious spirit. Teaming up with a street-smart and quick-witted talking rat, they embarked on a cyberpunk adventure, infiltrating high-security systems and outsmarting powerful corporations in their quest for truth.","Traveling around [location name] Rick and Morty stumbled upon a hidden temple deep within an unexplored jungle, rumored to hold a powerful artifact. They met [character name] who was a seasoned explorer, driven by a thirst for discovery. [character name], a resilient and intrepid adventurer, offered their expertise to assist Rick and Morty in their quest. Together, they braved ancient traps, deciphered cryptic clues, and confronted ancient guardians standing in their path.","Rick and Morty found themselves in [location name] where time flowed in reverse, causing everything to move backwards. As they tried to adapt to the bizarre environment, they encountered [character name] who was an expert in manipulating time. [character name], a cunning and enigmatic time-traveling thief, posed a significant threat to Rick and Morty's safety. However, as the duo struggled to navigate the reversed timeline, they discovered an unexpected power within themselves, enabling them to reverse the effects and outwit their formidable adversary.","Rick and Morty materialized in [location name] shrouded in darkness, the air heavy with anticipation. They stumbled upon a [character name] whose stoic demeanor hid a secret past. Curiosity piqued, Rick and Morty couldn't resist getting entangled in their enigmatic journey, where danger lurked at every corner and trust became a valuable currency.","As Rick and Morty explored [location name], they stumbled upon [character name] who possessed extraordinary technological prowess. This character, a genius inventor, offered to assist Rick and Morty in their endeavors. Together, with the help of a highly intelligent and sassy AI-powered robotic dog, they embarked on a high-tech adventure, facing futuristic obstacles and unraveling conspiracies.","In a sprawling city governed by corruption and crime on [location name], Rick and Morty found themselves entangled in a web of conspiracy. They met [character name] who was a relentless investigative journalist, dedicated to exposing the truth. [character name], a tenacious and fearless truth-seeker, enlisted Rick and Morty's help in uncovering a far-reaching conspiracy. Together, they faced dangerous adversaries, pursued hidden leads, and unraveled a plot that threatened the city's very foundations.","Rick and Morty arrived in [location name], a dystopian future where an authoritarian regime controlled every aspect of society. They encountered [character name] who was a high-ranking official within the oppressive government. [character name], a charismatic and ruthless enforcer, became a formidable enemy for Rick and Morty as they fought against the regime. Throughout their adventure, Morty discovered a newfound bravery within himself, stepping up to challenge the villainous [character name] and help overthrow the regime.","As Rick and Morty arrived at [location name], their surroundings transformed into a breathtaking landscape of natural wonders. They encountered [character name] with a vivacious spirit and an insatiable thirst for adventure. Drawn to their infectious enthusiasm, Rick and Morty embarked on a whirlwind escapade, where laughter, discovery, and unexpected challenges awaited them.","Upon arriving in [location name], Rick and Morty stumbled upon [character name] who had mastered the art of survival in extreme conditions. This character, a rugged and resourceful nomad, agreed to join forces with Rick and Morty on their adventure. Accompanied by a wise and telepathic talking sand lizard, they braved the scorching sands, unraveling ancient mysteries.","Rick and Morty arrived on [location name], a world ruled by an ancient and powerful sorcerer. They met [character name] who was a renegade magic practitioner, skilled in arcane arts. [character name], a sly and cunning trickster, proposed an audacious plan to overthrow the sorcerer and free the planet from their oppressive rule. Together, they navigated enchanted realms, battled formidable creatures, and challenged the sorcerer's dominion.","In a chaotic [location name], Rick and Morty crossed paths with [character name] who was a power-hungry warlord, seeking to conquer multiple dimensions. [character name], a fearsome and ruthless conqueror, set their sights on Rick and Morty as potential threats to their dominion. As the duo navigated the treacherous nexus, Rick underwent a transformation, embracing a sense of responsibility and becoming a formidable opponent to the power-hungry warlord.","Upon arriving at [location name], Rick and Morty discovered [character name] whose eccentricity matched their own. This character, a bundle of contradictions, possessed a mysterious past and an insatiable desire for knowledge. Intrigued by their enigmatic nature, Rick and Morty embarked on a mind-bending adventure, where reality twisted and turned, challenging their perceptions of the world.","Rick and Morty found themselves in [location name], a place filled with ancient trees and whimsical creatures. They encountered [character name] who exuded wisdom and had a hidden power. Intrigued by the character's mystical abilities, Rick and Morty embarked on a fantastical adventure, accompanied by a talking unicorn who served as their guide, unraveling secrets and facing magical challenges together.","Being on [location name] Rick and Morty found themselves trapped in a labyrinthine maze, a perplexing construction of shifting walls and deadly traps. They encountered [character name] who was a master puzzle solver, known for their unrivaled intellect. [character name], an enigmatic and eccentric genius, offered to guide Rick and Morty through the maze. Together, they unraveled cryptic riddles, dodged perilous pitfalls, and faced the malicious guardian of the maze.","Rick and Morty found themselves stranded on [location name], home to a mysterious and dangerous [character name]. [character name], a monstrous and relentless predator, became an enemy for Rick and Morty as they fought for their survival. Throughout their harrowing adventure, Rick tapped into his genius intellect to devise a plan, while Morty underwent a transformation, developing a newfound resourcefulness and bravery to outwit and defeat the deadly creature.","As Rick and Morty ventured into [location name], a place teeming with lush vegetation and mysterious sounds, they crossed paths with [character name] who possessed a deep connection with nature. This character, a wise and enigmatic shapeshifting creature, offered guidance and joined them on their journey. Accompanied by a talkative and charismatic parrot, they navigated treacherous terrains, encountering ancient ruins and untamed wildlife.","Rick and Morty ventured into [location name] where an oppressive regime ruled with an iron fist. They met [character name] who was a symbol of rebellion and hope, leading a resistance against the tyrannical government. This character, a courageous and charismatic leader, urged Rick and Morty to join their cause. Together, they engaged in a dangerous battle against the regime's forces, risking everything for freedom and justice.","Rick and Morty found themselves in [location name], a place ravaged by the aftermath of a catastrophic event. There, they encountered [character name] who bore the weight of loss and yearned for redemption. Compelled by their tragic story, Rick and Morty became unlikely allies, facing the harsh elements and formidable obstacles together, discovering that even in the bleakest of landscapes, hope could be found.","Rick and Morty arrived in [location name] where their alternate selves were ruling with an iron fist along with [character name]. They encountered their evil counterparts, twisted versions of themselves with malevolent intentions. As the evil Rick and Morty plotted to eliminate their counterparts and [character name], the heroic duo had to navigate a treacherous game of deception and manipulation. Morty, faced with the dark mirror of his own personality, had to confront his inner demons and find the strength to overcome the enemy within.","Rick and Morty embarked on an adventure in [location name], a place where reality twisted and shifted. They stumbled upon [character name], an enigmatic being with a playful nature. Intrigued by the character's mysterious abilities, Rick and Morty joined forces, navigating through mind-bending challenges. Along the way, they encountered a peculiar creature, a quirky companion that added a touch of whimsy to their extraordinary journey.","In an interdimensional market on [location name] that was bustling with strange alien species, Rick and Morty found themselves entangled in a high-stakes heist gone wrong. They encountered [character name] who was an expert in manipulation and subterfuge. [character name], a charming and quick-witted con artist, offered Rick and Morty their assistance in getting out of their predicament. Together, they raced against time, outsmarting security systems, and escaping the clutches of a powerful crime lord.","As Rick and Morty arrived at [location name] in an otherworldly dimension, they came face to face with a [character name] who defied all expectations. This character, a master of illusions, had a mischievous streak and a quick wit. Intrigued by their uncanny abilities, Rick and Morty couldn't resist getting caught up in a series of mind-bending escapades, where reality blurred and the lines between friend and foe became indistinguishable.","Rick and Morty found themselves in a sprawling underground realm - [location name]. They encountered [character name] who had unparalleled knowledge of the underground labyrinth. This character, a mysterious and agile creature, agreed to aid Rick and Morty on their quest. Accompanied by a telepathic and wise-cracking talking ant, they delved into the depths, uncovering hidden civilizations and confronting subterranean dangers.","Rick and Morty found themselves in a post-apocalyptic [location name], a desolate landscape devoid of life. As they navigated the treacherous terrain, they stumbled upon [character name] who possessed extraordinary survival skills. [character name], a hardened and fearless scavenger, reluctantly agreed to help Rick and Morty in their desperate situation. Together, they faced relentless marauders, deadly traps, and the looming threat of a looming radioactive storm."],j=t(9711),R=t(4812),T=t(3329),Z=function(n){var e=n.storyTextID,t=(0,j.e)().location,a=(0,R.L)().character,r=(0,k.useState)("Stranger"),i=(0,p.Z)(r,2),o=i[0],c=i[1],s=(0,k.useState)("Weird Planet"),d=(0,p.Z)(s,2),h=d[0],l=d[1];(0,k.useEffect)((function(){l(t.name),"Rick Sanchez"===a.name||"Morty Smith"===a.name?c("Stranger"):c(a.name)}),[t,a]);var u=M[e].replaceAll("[location name]",h).replaceAll("[character name]",o);return(0,T.jsx)("div",{children:u})},z=t(9434),A=t(571),q=t(1069),I=t(2222),L=t(2707),C=f.Z.div(o||(o=(0,g.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  z-index: 1;\n\n  width: 280px;\n  height: 400px;\n\n  border: 3px solid ",";\n\n  background: ",";\n\n  transition: transform 250ms ",";\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: -2%;\n    right: -2.5%;\n    transform: rotate(-90deg);\n    /* z-index: -1; */\n\n    display: inline-block;\n    padding: 40px;\n\n    border: solid ",";\n    border-width: 0 20px 20px 0;\n    background-color: transparent;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -2%;\n    left: -2.5%;\n    transform: rotate(90deg);\n    z-index: -1;\n\n    display: inline-block;\n    padding: 40px;\n\n    border: solid ",";\n    border-width: 0 20px 20px 0;\n    background-color: transparent;\n  }\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"])),(function(n){return n.theme.crossThemeAccent}),(function(n){return n.theme.bgCharacterCard}),(function(n){return n.theme.cubic}),(function(n){return n.theme.crossThemeAccent}),(function(n){return n.theme.crossThemeAccent})),P=f.Z.div(c||(c=(0,g.Z)(["\n  position: relative;\n\n  flex: 1;\n  height: 100%;\n\n  border-right: solid 3px ",";\n\n  &.location-card1 {\n    background-image: url(",");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  &.location-card2 {\n    background-image: url(",");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  &.location-card3 {\n    background-image: url(",");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n"])),(function(n){return n.theme.accentTransparent}),q,I,L),S=(f.Z.h2(s||(s=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 75px;\n\n  border-bottom: solid 1px ",";\n\n  font-size: 30px;\n  font-weight: 600;\n  background-color: ",";\n"])),(function(n){return n.theme.accentTransparent}),(function(n){return n.theme.accentTransparent})),f.Z.div(d||(d=(0,g.Z)(["\n  position: relative;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: ",";\n\n  transition: transform 300ms ",",\n    background-color 300ms ",";\n\n  width: 250px;\n  height: 250px;\n  border-radius: 5px;\n"])),(function(n){return n.theme.bgPrimaryTransparent}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}))),_=f.Z.h3(h||(h=(0,g.Z)(["\n  position: relative;\n  margin-top: 50px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n\n  text-align: center;\n  font-size: 22px;\n  font-weight: 600;\n  color: ",";\n\n  background-color: #a3a3a3;\n  border-radius: 5px;\n"])),(function(n){return n.theme.textPrimary})),D=f.Z.p(l||(l=(0,g.Z)(["\n  padding: 10px;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",";\n\n  & span {\n    display: inline;\n    font-weight: 900;\n    font-size: 20px;\n    line-height: 1;\n    letter-spacing: 0.25px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.characterCardTextAccent})),N=t(4375),F=t(1087),B=t(3515),W=function(n){var e=n.locationID,t=n.backgroundNum,a=(0,z.I0)(),r=(0,j.e)(),i=r.location,o=r.isLoading,c=r.error;(0,k.useEffect)((function(){a((0,A.O)(e))}),[a,e]);var s=null!==i&&!o&&!c;return(0,T.jsx)(F.rU,{to:"/".concat(B.Kl,"/").concat(i.id),children:(0,T.jsx)(C,{children:(0,T.jsxs)(P,{className:"location-card".concat(t),children:[o&&(0,T.jsx)(N.y,{}),s&&(0,T.jsxs)(S,{children:[(0,T.jsx)(_,{children:i.name}),(0,T.jsxs)(D,{children:["Dimension:",(0,T.jsxs)("span",{children:[" ",i.dimension]})]}),(0,T.jsxs)(D,{children:["Type:",(0,T.jsxs)("span",{children:[" ",i.type]})]}),(0,T.jsxs)(D,{children:["Number of residents:",(0,T.jsxs)("span",{children:[" ",i.residents.length]})]})]})]})})})},E=t(7014),G=t(7689),U=t(4040),H=t(974);var O=(0,H.Z)("div",{target:"e1for5q27"})({name:"1nwylq7",styles:"display:flex;flex-direction:column;align-items:center;width:280px;height:400px"}),Q=(0,H.Z)(F.rU,{target:"e1for5q26"})("display:block;width:100%;color:inherit;transition:transform 250ms ",(function(n){return n.theme.cubic}),";&:hover,&:focus{transform:scale(1.05);}"),$=(0,H.Z)("div",{target:"e1for5q25"})("padding:60px 20px 20px 20px;width:280px;height:400px;background:",(function(n){return n.theme.bgCharacterCard}),";border:3px solid ",(function(n){return n.theme.crossThemeAccent}),";border-radius:4px;"),K=(0,H.Z)("img",{target:"e1for5q24"})({name:"1lntvyo",styles:"position:relative;z-index:2;margin-bottom:20px;border-radius:6px"}),V=(0,H.Z)("div",{target:"e1for5q23"})({name:"bjn8wh",styles:"position:relative"}),J=(0,H.Z)("div",{target:"e1for5q22"})({name:"nc8bju",styles:"display:flex;align-items:baseline;gap:7px"}),X=(0,H.Z)("span",{target:"e1for5q21"})("font-style:normal;font-weight:700;font-size:20px;line-height:1.5;letter-spacing:0.15px;transition:color 250ms ",(function(n){return n.theme.cubic}),";",Q,":hover &{color:",(function(n){return n.theme.characterCardTexHover}),";}"),Y=(0,H.Z)("div",{target:"e1for5q20"})("position:relative;z-index:1;width:100%;min-height:fit-content;margin:0 auto;&::before{content:'';position:absolute;top:-1%;right:-1.5%;transform:rotate(-90deg);z-index:-1;display:inline-block;padding:40px;border:solid ",(function(n){return n.theme.crossThemeAccent}),";border-width:0 20px 20px 0;background-color:transparent;}&::after{content:'';position:absolute;bottom:-1%;left:-1.5%;transform:rotate(90deg);z-index:-1;display:inline-block;padding:40px;border:solid ",(function(n){return n.theme.crossThemeAccent}),";border-width:0 20px 20px 0;background-color:transparent;}"),nn=t(2939),en=t(364),tn=function(n){var e=n.characterID,t=(0,G.TH)(),a=(0,R.L)(),r=a.character,i=a.error,o=a.isLoading,c=(0,z.I0)();(0,k.useEffect)((function(){c((0,U.V)(e))}),[c,e]);var s=null!==r&&!i;return(0,T.jsx)(O,{children:(0,T.jsx)(Q,{to:"/".concat(B.Rr,"/").concat(e),state:{from:t},children:s&&(0,T.jsx)(Y,{children:(0,T.jsx)($,{children:o?(0,T.jsx)(N.y,{}):(0,T.jsxs)(V,{children:[(0,T.jsx)(K,{src:r.image,width:"235",height:"235",alt:r.name,loading:"lazy"}),(0,T.jsxs)(J,{children:[(0,T.jsx)(nn.v,{status:r.status,animate:!0}),(0,T.jsx)(X,{children:(0,en.k)(r.name)})]})]})})})})})},an=t(6454),rn=t(2325),on=t(2872),cn=t(1989),sn=function(){var n,e=(0,k.useState)(1),t=(0,p.Z)(e,2),a=t[0],r=t[1],i=(0,R.L)().character,o=(0,k.useState)(null!==(n=null===i||void 0===i?void 0:i.id)&&void 0!==n?n:1),c=(0,p.Z)(o,2),s=c[0],d=c[1],h=(0,k.useState)(0),l=(0,p.Z)(h,2),u=l[0],g=l[1],f=(0,k.useState)(1),x=(0,p.Z)(f,2),y=x[0],M=x[1],j=(0,rn.W)().info,A=(0,z.I0)();return(0,k.useEffect)((function(){A((0,cn.ql)())}),[A]),(0,T.jsxs)(on.$,{children:[(0,T.jsx)(b,{children:"Rick and Morty Teleport"}),(0,T.jsx)(m.W,{children:(0,T.jsxs)(v,{className:"container",children:[(0,T.jsxs)(w,{children:[(0,T.jsx)(tn,{characterID:s}),(0,T.jsxs)("div",{className:"button-wrap",children:[(0,T.jsx)("button",{type:"button",className:"clicker",onClick:function(){var n=(0,E.k)();r(n);var e=(0,an.w)({max:j.count});d(e);var t=(0,an.w)({max:25});console.log(t),g(t);var a=Math.floor(3*Math.random())+1;M(a)},children:"\u2600"}),(0,T.jsx)("div",{className:"circle"})]}),(0,T.jsx)(W,{locationID:a,backgroundNum:y})]}),(0,T.jsx)(Z,{storyTextID:u})]})})]})},dn=function(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u.ql,{children:(0,T.jsx)("title",{children:"Rick and Morty App"})}),(0,T.jsx)(sn,{})]})}},3684:function(n,e,t){t.d(e,{y:function(){return u}});var a,r,i=t(168),o=t(2554),c=t(4709),s=t(3033),d=(0,o.F4)(a||(a=(0,i.Z)(["\n  0% {\n      box-shadow: rgba(0, 0, 0, 0) 30px 30px, rgba(0, 0, 0, 0) 40px 40px,\n        #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,\n        #000 110px 45px, #000 90px 35px;\n    }\n    25% {\n      box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,\n        rgba(0, 0, 0, 0) 70px 120px, rgba(0, 0, 0, 0) 80px 120px,\n        #000 110px 70px, #000 90px 60px;\n    }\n    26% {\n      box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,\n        rgba(0, 0, 0, 0) 70px 40px, rgba(0, 0, 0, 0) 80px 20px, #000 110px 70px,\n        #000 90px 60px;\n    }\n    50% {\n      box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 100px,\n        #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,\n        #000 90px 85px;\n    }\n    51% {\n      box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 45px,\n        #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,\n        #000 90px 85px;\n    }\n    75% {\n      box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,\n        rgba(0, 0, 0, 0) 55px 95px, #000 70px 80px, #000 80px 70px,\n        rgba(0, 0, 0, 0) 110px 120px, rgba(0, 0, 0, 0) 90px 110px;\n    }\n    76% {\n      box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,\n        rgba(0, 0, 0, 0) 55px 35px, #000 70px 80px, #000 80px 70px,\n        rgba(0, 0, 0, 0) 110px 25px, rgba(0, 0, 0, 0) 90px 15px;\n    }\n    100% {\n      box-shadow: rgba(0, 0, 0, 0) 30px 120px, rgba(0, 0, 0, 0) 40px 120px,\n        #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,\n        #000 110px 45px, #000 90px 35px;\n    }\n"]))),h=c.Z.div(r||(r=(0,i.Z)(["\n  position: absolute;\n  top: 28%;\n  left: 10%;\n  animation: "," 0.5s infinite linear;\n  background: transparent;\n  border-radius: 25%;\n  display: block;\n  height: 10px;\n  width: 2px;\n  opacity: 0.5;\n  transform: scale(1.4);\n\n  @media screen and (min-width: ",") {\n    top: 0%;\n    left: 15%;\n    transform: scale(2.5);\n  }\n"])),d,s.gv),l=t(3329),u=function(){return(0,l.jsx)(h,{})}},4375:function(n,e,t){t.d(e,{y:function(){return a.y}});var a=t(3684)},7865:function(n,e,t){t.d(e,{Qd:function(){return r},_4:function(){return i},cw:function(){return a}});var a="alive",r="dead",i="unknown"},2872:function(n,e,t){t.d(e,{$:function(){return c}});var a,r=t(168),i=t(4709),o=t(7577),c=i.Z.section(a||(a=(0,r.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  /* &.location-page {\n    background: url(",");\n  } */\n"])),o)},6419:function(n,e,t){t.d(e,{M:function(){return r},f:function(){return i}});var a=t(1413),r=function(n,e){return n?(0,a.Z)((0,a.Z)({},n),{},{isFavourite:!!e&&e.includes(null===n||void 0===n?void 0:n.id)}):null},i=function(n,e){return Array.isArray(n)?n.map((function(n){return(0,a.Z)((0,a.Z)({},n),{},{isFavourite:!!e&&e.includes(null===n||void 0===n?void 0:n.id)})})):[(0,a.Z)((0,a.Z)({},n),{},{isFavourite:!!e&&e.includes(null===n||void 0===n?void 0:n.id)})]}},6454:function(n,e,t){t.d(e,{w:function(){return a}});var a=function(n){var e=n.max;return Math.floor(Math.random()*e)+1}},7014:function(n,e,t){t.d(e,{k:function(){return a}});var a=function(){return Math.floor(126*Math.random())+1}},5167:function(n,e,t){t.d(e,{l:function(){return r}});var a=t(7865),r=function(n){var e=n.theme;switch(n.marker){case a.cw:return e.alive;case a.Qd:return e.dead;case a._4:default:return e.unknown}}},364:function(n,e,t){t.d(e,{W:function(){return a},k:function(){return r}});var a=function(n){if(n.length<=13)return n;var e=n.slice(0,11);return"".concat(e,"...")},r=function(n){if(n.length<=24)return n;var e=n.slice(0,22);return"".concat(e,"...")}},7577:function(n,e,t){n.exports=t.p+"static/media/locationPageBackground.2e23629e09f4e9c0d3f6.png"},1069:function(n,e,t){n.exports=t.p+"static/media/locationPageChooseLocationBG_1.8b12987a7a3a8a3f2027.png"},2222:function(n,e,t){n.exports=t.p+"static/media/locationPageChooseLocationBG_2.5297bc7c85ce06f1add6.png"},2707:function(n,e,t){n.exports=t.p+"static/media/locationPageChooseLocationBG_3.b864f2ad3e6644912f03.png"},910:function(n,e,t){n.exports=t.p+"static/media/portalGif.d9724d817ee34debc09c.gif"},3550:function(n,e,t){n.exports=t.p+"static/media/teleport.096671c1666d983bbca1.png"}}]);
//# sourceMappingURL=506.e787848d.chunk.js.map