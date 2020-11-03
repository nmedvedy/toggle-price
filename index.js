const checkBox = document.getElementById('checbox');
const prices1 = document.getElementsByClassName('prices1');
const prices2 = document.getElementsByClassName('prices2');

function check() {

   for (let i = 0; i < prices1.length; i++) {
      if (checkBox.checked) {
         prices1[i].style.display = "block";
         prices2[i].style.display = "none";
      } else if (checkBox.checked == false) {
         prices1[i].style.display = "none";
         prices2[i].style.display = "block";
      }
   }
}

check();