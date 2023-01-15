var themes = [
  {
    name: `Glacier`,
    colorScheme1: `rgb(16, 16, 16)`,
    colorScheme2: `rgb(177, 214, 255)`,
    colorScheme3: `rgb(118, 182, 255)`, colorScheme3_translucent: `rgba(118, 182, 255, 0.5)`,
    colorScheme4: `rgb(50, 135, 231)`, colorScheme4_translucent: `rgba(50, 135, 231, 0.5)`,
    colorScheme5: `rgb(13, 100, 199)`,
    colorScheme6: `rgb(6, 85, 175)`,
    colorScheme7: `rgb(5, 57, 116)`,
    colorScheme8: `rgb(3, 44, 90)`, colorScheme8_translucent: `rgba(3, 44, 90, 0.5)`
  },
  {
    name: `Trees Can't Flee`,
    colorScheme1: `rgb(16, 16, 16)`,
    colorScheme2: `rgb(224, 248, 116)`,
    colorScheme3: `rgb(144, 240, 66)`, colorScheme3_translucent: `rgba(144, 240, 66, 0.5)`,
    colorScheme4: `rgb(117, 209, 42)`, colorScheme4_translucent: `rgba(117, 209, 42, 0.5)`,
    colorScheme5: `rgb(108, 192, 39)`,
    colorScheme6: `rgb(85, 158, 26)`,
    colorScheme7: `rgb(60, 114, 15)`,
    colorScheme8: `rgb(37, 70, 10)`, colorScheme8_translucent: `rgba(37, 70, 10, 0.5)`
  },
  {
    name: `Carbon Dioxide`,
    colorScheme1: `rgb(16, 16, 16)`,
    colorScheme2: `rgb(92, 92, 92)`,
    colorScheme3: `rgb(145, 145, 145)`, colorScheme3_translucent: `rgba(118, 182, 255, 0.5)`,
    colorScheme4: `rgb(130, 130, 130)`, colorScheme4_translucent: `rgba(130, 130, 130, 0.5)`,
    colorScheme5: `rgb(92, 92, 92)`,
    colorScheme6: `rgb(69, 69, 69)`,
    colorScheme7: `rgb(56, 56, 56)`,
    colorScheme8: `rgb(38, 38, 38)`, colorScheme8_translucent: `rgba(38, 38, 38, 0.5)`
  }
];
var theme = 0;

function switchTheme(themeNum) {
  document.querySelector("#currentThemeName").innerHTML = themes[themeNum].name;
  var r = document.querySelector(`:root`);
  r.style.setProperty(`--colorScheme1`, themes[themeNum].colorScheme1);
  r.style.setProperty(`--colorScheme2`, themes[themeNum].colorScheme2);
  r.style.setProperty(`--colorScheme3`, themes[themeNum].colorScheme3);
  r.style.setProperty(`--colorScheme3_translucent`, themes[themeNum].colorScheme3_translucent);
  r.style.setProperty(`--colorScheme4`, themes[themeNum].colorScheme4);
  r.style.setProperty(`--colorScheme4_translucent`, themes[themeNum].colorScheme4_translucent);
  r.style.setProperty(`--colorScheme5`, themes[themeNum].colorScheme5);
  r.style.setProperty(`--colorScheme6`, themes[themeNum].colorScheme6);
  r.style.setProperty(`--colorScheme7`, themes[themeNum].colorScheme7);
  r.style.setProperty(`--colorScheme8`, themes[themeNum].colorScheme8);
  r.style.setProperty(`--colorScheme8_translucent`, themes[themeNum].colorScheme8_translucent);
  if (theme >= themes.length - 1) {
    theme = 0;
  } else {
    theme = theme + 1;
  }
  
}

function toggleTheme() {
  if (theme == 0) {
    switchTheme(1);
  } else if (theme == 1) {
    switchTheme(2);
  } else if (theme == 2) {
    switchTheme(0);
  }
}