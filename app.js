
// Ngày bắt đầu yêu nhau
const yourDate = new Date("2019-09-13");

// Danh sách cái bài nhạc nền
music = ['BuocQuaMuaCoDon-Vu-6879419'];

document.addEventListener('DOMContentLoaded', function () {
      var rootTime = document.querySelector("time");
      document.querySelector("anniv").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()}-${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1) : "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

      let year = Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) / 365);
      let month = Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) / 30);
      let hourDate = Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) * 24);
      let minuteDate = Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) * 24 * 60)
      let secondDate = Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) * 24 * 60 * 60)

      document.querySelector("date").textContent =
            year + " Năm - " + month + " Tháng - " +
            Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " Ngày"
            // + hourDate + " Giờ - "
            // + minuteDate + " Phút - "
            // + secondDate + " Giây";

      console.log('NĂM' + Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) / 365))
      console.log('THÁNG' + Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) / 30))
      console.log('GIỜ' + Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) * 24))
      console.log('PHÚT' + Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) * 24 * 60))
      console.log('GIÂY' + Math.floor(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) * 24 * 60 * 60))
      countTime();

      function countTime() {
            let today = new Date();
            let sec = today.getSeconds();
            let minute = today.getMinutes();
            let hour = today.getHours();
            rootTime.textContent = `${(hour > 9) ? hour : "0" + hour}:${(minute > 9) ? minute : "0" + minute}:${(sec > 9) ? sec : "0" + sec}`
      }

      setInterval(countTime, 1000);
      document.querySelector("anni").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()}-${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1) : "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

      document.querySelector("audio").setAttribute("src", "https://cdn.glitch.me/ccab313a-a6b7-44fd-b482-63acce04fc67/BuocQuaMuaCoDon-Vu-6879419.mp3?v=1641068492024");

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);