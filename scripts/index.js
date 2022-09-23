const container = document.getElementById('container');

$(document).ready(function(){
        $.getJSON( "http://localhost/news-website/retreive_news.php", 
        function( data) {
            // console.log(data[1].news)
            for(let i=0; i< data.length; i++){
                container.innerHTML += `<div class="my-5 w-50 card">
                <div class="card-header">
                    <h2 id="newspaper">${data[i].newspaper}</h2>
                </div>
                <div class="card-body">
                    <h3 id="title">${data[i].title}</h3>
                    <p id="content">${data[i].news}</p>
                </div>
                <div class="card-footer">${data[i].created_at}</div>
            </div>`
            }
        });

    });

  //${data[i].name}