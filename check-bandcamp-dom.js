customDOM = {"bandcamp":false};
/*
check if DOM generated by Bandcamp.
test URLs: ["https://store.terminalsoundsystem.com/", "https://music.bennysmiles.com/"].
*/
if(document.querySelector('meta[name="generator"]')!==null&&document.querySelector('meta[name="generator"]').content==="Bandcamp"){
  customDOM.bandcamp = true;
} 
customDOM;