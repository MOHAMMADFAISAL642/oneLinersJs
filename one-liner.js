----------------------------------------------
     One Liners JavaScript
----------------------------------------------

// Convert Snake_case to camelCase
const convertSnakeToCamel = (s) => s.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1));

// Shuffle a JavaScript Array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

// Find the Average of an Array
const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

// Detect Dark Mode Using JavaScript
const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//  Detect an Apple Browser 
const appleBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

//  Check if an Array Is Empty
const checkEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

//  Find Unique Values in an Array
const findUniquesInArray = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

// Generate a Random Hex Color
const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Convert Degrees to Radians and Vice-Versa
const degreesToRadians = (deg) => (deg * Math.PI) / 180.0;
const radiansToDegrees = (rad) => (rad * 180) / Math.PI;

// Check if Code Is Running in a Browser
const isRunningInBrowser = typeof window === 'object' && typeof document === 'object';