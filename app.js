
// Ngày bắt đầu yêu nhau
const yourDate = new Date("2019-09-13T21:10:26");

// Danh sách cái bài nhạc nền
music = ['BuocQuaMuaCoDon-Vu-6879419'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" Ngày";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", "https://cdn.glitch.me/ccab313a-a6b7-44fd-b482-63acce04fc67/BuocQuaMuaCoDon-Vu-6879419.mp3?v=1641068492024");

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);