var themes = [
  {
    name: `Glacier (Default)`,
    colorScheme1: `rgb(16, 16, 16)`,
    colorScheme2: `rgb(177, 214, 255)`,
    colorScheme3: `rgb(118, 182, 255)`, colorScheme3_translucent: `rgba(118, 182, 255, 0.5)`,
    colorScheme4: `rgb(50, 135, 231)`, colorScheme4_translucent: `rgba(50, 135, 231, 0.5)`,
    colorScheme5: `rgb(12, 86, 170)`,
    colorScheme6: `rgb(19, 108, 209)`,
    colorScheme7: `rgb(9, 93, 190)`,
    colorScheme8: `rgb(8, 85, 173)`, colorScheme8_translucent: `rgba(8, 85, 173, 0.5)`,
    colorScheme10: `rgb(202, 255, 103)`
  },
  {
    name: `Tree Can't Flee`,
    colorScheme1: `rgb(16, 16, 16)`,
    colorScheme2: `rgb(224, 248, 116)`,
    colorScheme3: `rgb(144, 240, 66)`, colorScheme3_translucent: `rgba(144, 240, 66, 0.5)`,
    colorScheme4: `rgb(117, 209, 42)`, colorScheme4_translucent: `rgba(117, 209, 42, 0.5)`,
    colorScheme5: `rgb(108, 192, 39)`,
    colorScheme6: `rgb(85, 158, 26)`,
    colorScheme7: `rgb(60, 114, 15)`,
    colorScheme8: `rgb(37, 70, 10)`, colorScheme8_translucent: `rgba(37, 70, 10, 0.5)`,
    colorScheme10: `rgb(108, 128, 20)`
  },
  {
    name: `Tsunami`,
    colorScheme1: `rgb(16, 16, 16)`,
    colorScheme2: `rgb(177, 214, 255)`,
    colorScheme3: `rgb(118, 182, 255`, colorScheme3_translucent: `rgba(118, 182, 255, 0.5)`,
    colorScheme4: `rgb(50, 135, 231)`, colorScheme4_translucent: `rgba(50, 135, 231, 0.5)`,
    colorScheme5: `rgb(12, 86, 170)`,
    colorScheme6: `rgb(19, 108, 209)`,
    colorScheme7: `rgb(9, 93, 190)`,
    colorScheme8: `rgb(8, 85, 173)`, colorScheme8_translucent: `rgba(8, 85, 173, 0.5)`,
    colorScheme10: `rgb(202, 255, 103)`
  }
];
var theme = 0;

function setTheme(themeNum) {
  console.log(`Switched to theme: ${themes[themeNum].name}`);
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
  r.style.setProperty(`--colorScheme8_translucent`, themes[themeNum].colorScheme8_traslucent);
  r.style.setProperty(`--colorScheme10`, themes[themeNum].colorScheme10);
  if (theme == themes.length - 1) {
    theme = 0;
  } else {
    theme = theme + 1;
  }
}

function toggleTheme() {
  if (theme == 0) {
    setTheme(1);
  } else if (theme == 1) {
    setTheme(2);
  } else if (theme == 2) {
    setTheme(0);
  }
}