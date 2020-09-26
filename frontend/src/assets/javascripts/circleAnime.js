function Timeline(anime){
  return anime.timeline({
    autoplay: false,
    delay: 0,
    endDelay: 0
  })
}
function keys(value, delay, duration, endDelay, easing){
  return {
    value, delay, duration, endDelay, easing
  }
}


const typoArr = [

  // 0 N
  "M25,50 C38.8071286,50 50,38.8071286 50,25 C50,11.1928714 38.8071286,0 25,0 C11.1928714,0 0,11.1928714 0,25 C0,32.4848005 3.28940167,39.2011702 8.50100003,43.782899 L8.4676657,2.82247231 L41.5323343,47.1772789 L41.5323343,6.46113814",

  // 1 A
  "M11.6936326,33.0958482 L48.6604078,33.0958482 C49.5288417,30.5567303 50,27.8335282 50,25.0001244 C50,11.1930645 38.8073773,0 25,0 C11.1928714,0 0,11.1930645 0,25.0001244 C0,38.8069355 11.1928714,50 25,50 L46.371036,50 L25.4032459,1.20973159 L4.43545578,48.7902684",

  // 2 M
  "M13.0459118,46.9620984 C16.5970128,48.8992209 20.67002,50 25,50 C38.8073773,50 50,38.8071286 50,25 C50,11.1928714 38.8073773,0 25,0 C11.1928714,0 0,11.1928714 0,25 C0,31.2004338 2.25728131,36.8734888 5.99470631,41.2427734 L6.02256784,4.81258147 L24.9611929,40.7258426 L43.9776809,4.71979263 L43.9776809,48.5021941",

  // 3 E
  "M45.1351782,46.0817735 L3.73294725,46.0817735 L3.73294725,2.08459544 L36.5481059,2.08333333 C44.5423744,6.31567098 50,14.8050835 50,24.588152 C50,38.5982574 38.8071286,49.9556738 25,49.9556738 C11.1928714,49.9556738 0,38.5982574 0,24.588152 L36.6933839,24.1789781",

  // 4 P
  "M14.9192766,2.51412273 L14.8660414,47.8723404 C6.10811214,43.9834623 0,35.2081688 0,25.0061156 C0,11.1956095 11.1930645,1.48029737e-14 24.9998756,1.48029737e-14 C38.8069355,1.48029737e-14 50,11.1956095 50,25.0061156 C50,25.9494092 49.9477599,26.8805105 49.8457673,27.7966823 L14.9192766,27.8292783",

  // 5 A
  "M11.6936326,33.0958482 L48.6604078,33.0958482 C49.5288417,30.5567303 50,27.8335282 50,25.0001244 C50,11.1930645 38.8073773,0 25,0 C11.1928714,0 0,11.1930645 0,25.0001244 C0,38.8069355 11.1928714,50 25,50 L46.371036,50 L25.4032459,1.20973159 L4.43545578,48.7902684",

  // 6 R
  "M47.1775277,47.8723404 L8.46791447,27.2990306 L49.8447715,27.2792598 C49.9475109,26.3766391 50,25.4591292 50,24.5296592 C50,10.9822929 38.8071286,1.48029737e-14 25,1.48029737e-14 C11.1928714,1.48029737e-14 0,10.9822929 0,24.5296592 C0,34.5417202 6.11361533,43.152986 14.8778073,46.9653261 L14.9193508,2.19016122",

  // 7 A
  "M11.6936326,33.0958482 L48.6604078,33.0958482 C49.5288417,30.5567303 50,27.8335282 50,25.0001244 C50,11.1930645 38.8073773,0 25,0 C11.1928714,0 0,11.1930645 0,25.0001244 C0,38.8069355 11.1928714,50 25,50 L46.371036,50 L25.4032459,1.20973159 L4.43545578,48.7902684",

  // 8 D
  "M1.04166667,34.9699494 C4.97309871,43.815487 13.9765352,50 24.4545127,50 C38.5505252,50 49.9778369,38.8071286 49.9778369,25 C49.9778369,11.1928714 38.5505252,0 24.4545127,0 C19.1066985,0 14.1428846,1.61099336 10.0415476,4.36480691 L10.046373,45.5645442",

  // 9 E
  "M45.1351782,46.0817735 L3.73294725,46.0817735 L3.73294725,2.08459544 L36.5481059,2.08333333 C44.5423744,6.31567098 50,14.8050835 50,24.588152 C50,38.5982574 38.8071286,49.9556738 25,49.9556738 C11.1928714,49.9556738 0,38.5982574 0,24.588152 L36.6933839,24.1789781",

  // 10 2
  "M4.59936814,40.0349763 C1.70277868,35.8939058 0,30.8327376 0,25.3681905 C0,11.3579682 11.1928157,1.48029737e-14 24.9998756,1.48029737e-14 C38.8071843,1.48029737e-14 50,11.3579682 50,25.3681905 C50,26.1956473 49.9609443,27.0137644 49.8845742,27.8207746 L4.33020722,47.8723404 L49.8537277,47.8723404",

  // 11 0
  "M41.1581938,5.92281362 C46.5670617,10.5085226 50,17.3532543 50,25 C50,38.8071286 38.8071286,50 25,50 C20.1075654,50 15.54325,48.5947342 11.6891549,46.1655572 L38.144671,3.73045962 C34.3254027,1.36521488 29.8222833,0 25,0 C11.1928714,0 0,11.1928714 0,25 C0,32.5330607 3.33169149,39.2879887 8.60199807,43.8712101",

  // 12 2
  "M4.59936814,40.0349763 C1.70277868,35.8939058 0,30.8327376 0,25.3681905 C0,11.3579682 11.1928157,1.48029737e-14 24.9998756,1.48029737e-14 C38.8071843,1.48029737e-14 50,11.3579682 50,25.3681905 C50,26.1956473 49.9609443,27.0137644 49.8845742,27.8207746 L4.33020722,47.8723404 L49.8537277,47.8723404",

  // 13 0
  "M41.1581938,5.92281362 C46.5670617,10.5085226 50,17.3532543 50,25 C50,38.8071286 38.8071286,50 25,50 C20.1075654,50 15.54325,48.5947342 11.6891549,46.1655572 L38.144671,3.73045962 C34.3254027,1.36521488 29.8222833,0 25,0 C11.1928714,0 0,11.1928714 0,25 C0,32.5330607 3.33169149,39.2879887 8.60199807,43.8712101",

  // 14 D
  "M1.04166667,34.9699494 C4.97309871,43.815487 13.9765352,50 24.4545127,50 C38.5505252,50 49.9778369,38.8071286 49.9778369,25 C49.9778369,11.1928714 38.5505252,0 24.4545127,0 C19.1066985,0 14.1428846,1.61099336 10.0415476,4.36480691 L10.046373,45.5645442",

  // 15 E
  "M45.1351782,46.0817735 L3.73294725,46.0817735 L3.73294725,2.08459544 L36.5481059,2.08333333 C44.5423744,6.31567098 50,14.8050835 50,24.588152 C50,38.5982574 38.8071286,49.9556738 25,49.9556738 C11.1928714,49.9556738 0,38.5982574 0,24.588152 L36.6933839,24.1789781",

  // 16 S
  "M1.46944685,33.4649293 C4.93820711,43.1060131 14.1638556,50 25,50 C38.8071286,50 50,38.8071286 50,25 L0,25 C0,11.1928714 11.1928714,0 25,0 C35.8202235,0 45.0351752,6.87408579 48.5153786,16.4935272",

  // 17 I
  "M33.4646805,48.5305532 C43.1060131,45.0617929 50,35.8358956 50,25 C50,11.1928714 38.8071286,0 25,0 L25,50 C11.1928714,50 0,38.8071286 0,25 C0,14.1797765 6.87383703,4.96482482 16.4932784,1.48437267",

  // 18 G
  "M41.4647809,5.54718051 C37.0926915,2.07767396 31.5270393,0 25.4669834,0 C11.4019468,0 5.92118946e-14,11.1928714 5.92118946e-14,25 C5.92118946e-14,38.8071286 11.4019468,50 25.4669834,50 C31.5384427,50 37.1134712,47.9146144 41.4893617,44.4334159 L41.4868276,27.8908823",

  // 19 N
  "M25,50 C38.8071286,50 50,38.8071286 50,25 C50,11.1928714 38.8071286,0 25,0 C11.1928714,0 0,11.1928714 0,25 C0,32.4848005 3.28940167,39.2011702 8.50100003,43.782899 L8.4676657,2.82247231 L41.5323343,47.1772789 L41.5323343,6.46113814",

  // 20 E
  "M45.1351782,46.0817735 L3.73294725,46.0817735 L3.73294725,2.08459544 L36.5481059,2.08333333 C44.5423744,6.31567098 50,14.8050835 50,24.588152 C50,38.5982574 38.8071286,49.9556738 25,49.9556738 C11.1928714,49.9556738 0,38.5982574 0,24.588152 L36.6933839,24.1789781",

  // 21 R
  "M47.1775277,47.8723404 L8.46791447,27.2990306 L49.8447715,27.2792598 C49.9475109,26.3766391 50,25.4591292 50,24.5296592 C50,10.9822929 38.8071286,1.48029737e-14 25,1.48029737e-14 C11.1928714,1.48029737e-14 0,10.9822929 0,24.5296592 C0,34.5417202 6.11361533,43.152986 14.8778073,46.9653261 L14.9193508,2.19016122"
];

const mountPosition = [
  { // ______________________ SEQ === 0
    small: [
      22, 23, 24, 25, 26,
      29, 30, 31, 32, 33,
      37, 38, 39, 40, 
      45, 46, 47,
      50, 51, 52, 53, 54
    ],
    narrow: [
      22, 23, 24, 25, 26,
      29, 30, 31, 32, 33,
      37, 38, 39, 40, 
      45, 46, 47,
      50, 51, 52, 53, 54
    ],
    tablet: [
      34, 35, 36, 37,
      42, 43, 44, 45, 46, 47,
      52, 53, 54, 55,
      65, 66, 67,
      73, 74, 75, 76, 77
    ],
    wide: [
      39, 40, 41, 42,
      52, 53, 54, 55, 56, 57,
      69, 70, 71, 72,
      80, 81, 82, 83, 84, 85, 86, 87
    ]
  }
]

const circle = "M25,50 C38.7588836,50 49.921346,37.5921381 50,25 C49.8815138,10.7809603 38.6242322,0 25,0 C11.1928813,0 0,11.1928813 0,25 C0,38.8071187 11.1928813,50 25,50 Z";





export {
  Timeline,
  keys,
  typoArr,
  mountPosition,
  circle


}
