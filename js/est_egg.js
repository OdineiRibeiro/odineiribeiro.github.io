function changeStyle() {
  x = document.getElementById("hello");
  colorsArray = ['#499491', '#b31313', '#7984ee', '#9ed763', '#f54ea2',
                 '#a64942', '#272932', '#f7f0e9', '#3a4750', '#2c5d63']
  x.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
}
