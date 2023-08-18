// Picture
const electrical = require('public/assets/images/article/article-1/shi.png');
const floor = require('public/assets/images/article/article-1/shi.png');
const plumbing = require('public/assets/images/article/article-1/shi.png');
const wallCeiling = require('public/assets/images/article/article-1/shi.png');
const windoors = require('public/assets/images/article/article-1/shi.png');

export const defectCheckList = [
  {
    title: 'Post-it Labels or masking tape',
    value: 'To demarcate all faults and defects.',
  },
  {
    title: 'Phone',
    value: `You probably already have your phone with you at all times, but
            the multiple functions will help you immensely.
            <br />
            <br />
            Notes app: Take notes on problems to help fill up the
            Rectification Request Form.
            <br />
            Camera: Take photos of any defects or areas to take note of.It’s
            always useful to have too many pictures to keep on record.
            <br />
            Flashlight: Illuminate any dark or unlit areas such as the bomb
            shelter.`,
  },
  {
    title: 'Measuring tape',
    value: ' To take measurements of potential renovation areas or anything else.',
  },
  {
    title: 'Rags or wet wipes',
    value: 'To clean any dusty areas since you’ll be in the flat for an extended period.',
  },
  {
    title: 'Level ruler or marbles',
    value:
      'To check if the floor or any surfaces are level. If a level ruler is difficult to come by, some marbles will do the trick!',
  },
  {
    title: 'Screwdriver',
    value: 'To unscrew and open the covers of any installations.',
  },
  {
    title: 'Ladder',
    value: 'To have a better look at hard to reach areas or the ceiling.',
  },
  {
    title: 'Floor plans',
    value: 'To compare with your actual unit and see if anything is missing or shouldn’t be there.',
  },
  {
    title: 'Plastic bags',
    value: 'For any trash or other items you may need.',
  },
  {
    title: 'Phone charger',
    value:
      'Apart from the fact that your phone battery might run out, a phone charger is also an easy way to check if a power socket is working.',
  },
];

export const btoCheckList = [
  {
    image: wallCeiling,
    title: 'Walls and ceiling',
    content: [
      'Check for any stains, scratches, or cracks. This can include water seepage signs.',
      'Ensure that the walls and ceiling are levelled and straight.',
      'Mark out any paint marks or blots of concrete on the walls & ceilings',
    ],
  },
  {
    image: windoors,
    title: 'Windows and Doors',
    content: [
      'Open, close, lock, and unlock all doors and windows to make sure they work.',
      'Check all screws and fittings on doors and windows to ensure they are secure.',
      'Mark out any scratches, cracks, faulty, and rusty parts in the doors and windows.',
      'Use the keys on all doors and ensure they all work.',
      'Press the doorbell to check if it works.',
      'Open and close all doors a few times to ensure the hinges work properly.',
      'Look through the peephole to ensure it is installed correctly.',
    ],
  },
  {
    image: floor,
    title: 'Floor',
    content: [
      'Examine all floor tiles or planks for discolouration, scratches, or misalignment.',
      'Knock on the flooring to check for hollow sounds or loose fit.',
      'Check that the water drainage system is properly installed on the kitchen and bathroom floors.',
      'Ensure the floor and other surfaces are even.',
    ],
  },
  {
    image: plumbing,
    title: 'Plumbing',
    content: [
      'Try all the water taps and shower heads to ensure they work.',
      'Make sure the taps and shower heads do not leak when turned off.',
      'Check that the drainage holes are not blocked.',
      'Flush your toilets a few times to confirm that they work properly.',
      'Take a good look at the basins and toilet bowls for cracks and other faults.',
    ],
  },
  {
    image: electrical,
    title: 'Electrical',
    content: [
      'Turn all power sockets and lights on and off to see if they work.',
      'Do a quick visual check of the phone and cable TV outlets and ensure they are secure.',
    ],
  },
];
