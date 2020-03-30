<script>
window.onload = () => {
document.getElementById("clock").innerHTML = getTime();
          // Set clock interval to tick clock
          setInterval( () => {
              document.getElementById("clock").innerHTML = getTime();
          },100);
}

function getTime() {
          let date = new Date(),
              min = date.getMinutes(),
              sec = date.getSeconds(),
              hour = date.getHours();

          return "" +
              (hour < 10 ? ("0" + hour) : hour) + ":" +
              (min < 10 ? ("0" + min) : min) + ":" +
              (sec < 10 ? ("0" + sec) : sec);
      }

      function search(e) {
                if (e.keyCode == 13) {
                    var val = document.getElementById("search-field").value;
                    window.open("https://google.com/search?q=" + val);
                }
            }
      function you_search(e){
        if (e.keyCode == 13) {
            var val = document.getElementById("you_search-field").value;
            window.open("https://www.youtube.com/results?search_query=" + val);
        }
      }
</script>
