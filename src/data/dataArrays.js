export const workouts = [[
  {
    id: 0,
    name: 'Weight Loss',
    photo_url:
      'https://image.freepik.com/free-photo/woman-standing-scale_53876-15132.jpg',
    progs: [0, 1, 2]
  },
  {
    id: 1,
    name: 'Body Building',
    photo_url: 'https://image.freepik.com/free-photo/muscular-man-lifting-barbell-gym_1163-3548.jpg',
    progs: [0, 1]
  },
  {
    id: 2,
    name: 'Body Transform',
    photo_url:
      'https://image.freepik.com/free-photo/young-bodybuilder-using-fitness-equipment_1163-3568.jpg',
    progs: [1, 2]
  },
], [{
  id: 0,
  name: 'Endurance Training',
  photo_url:
    'https://www.planetfitness.com/sites/default/files/feature-image/xbreak-workout_602724.jpg.pagespeed.ic.v8byD7su-e.jpg',
  progs: [0, 1, 2]
},
{
  id: 1,
  name: 'Static Stretching',
  photo_url: 'https://blog.nasm.org/hubfs/Static-stretch-iStock-605773558-750x375.jpg',
  progs: [0, 1]
},
{
  id: 2,
  name: 'Strength Training',
  photo_url:
    'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/10/snatch-grip-deadlift.jpg',
  progs: [0, 2]
},
]];


export const programs = [
  {
    id: 0,
    name: 'WW (formerly Weight Watchers)',
    desc: 'WW has been around for decades. Its a legacy weight loss program that often tops lists  of "best diets," with a primary reason being the education provided to help users make positive diet changes',
    duration: '4 days/week',
    photo_url:
      'https://www.mensjournal.com/wp-content/uploads/mf/_main_liftlift.jpg?w=1200&h=1200&crop=1&quality=86&strip=all',
    exercises: [0, 1, 2,3],
  },
  {
    id: 1,
    name: 'Noom',
    desc: 'Noom is a relative newcomer to the weight loss game, calling itself "Weight Watchers for millennials." This app-based program employs the stoplight approach, assigning colors (red, yellow and green) to foods based on their nutritional quality.',
    duration: '3 days/week',
    photo_url:
      'https://thesmartlocal.com/wp-content/uploads/2020/11/pure-fitness-suntec_10.jpg',
    exercises: [0, 2,3],
  },
  {
    id: 2,
    name: 'Nutrisystem',
    desc: 'Nutrisystem is a done-for-you weight loss program that features premade meals and snacks delivered to your home. This makes it easy to follow, but it doesn offer strategies to use to maintain weight loss once you stop eating Nutrisystem meals',
    duration: '5 days/week',
    photo_url:
      'https://www.healthifyme.com/blog/wp-content/uploads/2019/12/BB-cover-1.jpg',
    exercises: [1, 2,3],
  },
];


export const exercises = [
  {
    id: 0,
    name: 'Renagade Row',
    photo_url: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/10/renegade-row.jpg',
    video: 'https://www.youtube.com/embed/wTqlJ0aoJlM',
    sets: 2,
    reps: 3,
    rest: 30,
    equipments: [0, 1],
    bodyParts: [0, 1, 2, 3]
  },
  {
    id: 1,
    name: 'Dumbbells side lunge',
    photo_url: 'https://media1.popsugar-assets.com/files/thumbor/Z3WNEq9CnJUKKV32q_h1u6aX7Pw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/12/16/671/n/1922729/9a38009f7e3c09d8_DB8/i/Circuit-3-Exercise-1-Bicep-Curl-Side-Lunge.jpg',
    video: 'https://www.youtube.com/embed/J_Mi_hO5ZaE',
    sets: 3,
    reps: 2,
    rest: 45,
    equipments: [0, 2, 3],
    bodyParts: [0, 3]
  },
  {
    id: 2,
    name: 'Sumo squat swing',
    photo_url: 'https://fitmumdiary.files.wordpress.com/2015/03/woman-kettlebell-swing.jpg',
    video: 'https://www.youtube.com/embed/J6xRu0ssHL4',
    sets: 3,
    reps: 4,
    rest: 30,
    equipments: [0, 1, 3],
    bodyParts: [0, 1, 2]
  }, {
    id: 3,
    name: 'Bodyweight Squat',
    photo_url: 'https://cathe.com/wp-content/uploads/2018/03/shutterstock_671056855.jpg',
    video: 'https://www.youtube.com/embed/LyidZ42Iy9Q',
    sets: 2,
    reps: 3,
    rest: 45,
    equipments: [0],
    bodyParts: [0, 2]
  }
];


export const equipments = [
  {
    id: 0,
    name: 'Dumbbells',
  },
  {
    id: 1,
    name: 'Training Bench',
  },
  {
    id: 2,
    name: 'Pull-Up Frame and Bar',
  },
  {
    id: 3,
    name: 'Pull-Up Frame and Bar',
  },
  {
    id: 4,
    name: 'Kettlebell Set',
  }
];

export const bodyParts = [
  {
    id: 0,
    name: 'Forearms',
  }, {
    id: 1,
    name: 'Triceps',
  }, {
    id: 2,
    name: 'Abs',
  }, {
    id: 3,
    name: 'Shoulders',
  }
];