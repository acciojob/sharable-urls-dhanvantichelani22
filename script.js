// your code here
document.getElementById('button').addEventListener( "click",e => {
    e.preventDefault();
            var name = document.getElementById("name").value;
	 
            var year = document.getElementById("year").value;
            
            var url = "https://localhost:8080/?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
	  document.getElementById("url").textContent = url;
}
 // function updateURL(e) {
	//  e.preventDefault();
 //            var name = document.getElementById("name").value;
	 
 //            var year = document.getElementById("year").value;
            
 //            var url = "https://localhost:8080/?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
	//   document.getElementById("url").textContent = url;
 // }
 