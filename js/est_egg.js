function changeStyle() {
  x = document.getElementById("hello");
  colorsArray = ['#000000', '#EC576B', '#4ECSC1', '#ESE358', '#015249',
                 '#6B7A8F', '#F7882F', '#6E3667', '#FEDC3D', '#999999']
  x.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
}
