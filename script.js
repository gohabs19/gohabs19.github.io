// JavaScript source code

window.onload = displayData();

function displayData() {
    $.getJSON("http://api.weatherstack.com/current?access_key=0e283bebc652f3bf4bc6b1808ae76a85&query=Richmond Hill",
        function weatherData(data) {
            console.log(data);
            document.getElementById('RichmondHillTemp').innerHTML = data.current.temperature;
        }
    );
    $.getJSON("http://api.weatherstack.com/current?access_key=0e283bebc652f3bf4bc6b1808ae76a85&query=Toronto",
        function weatherData(data) {
            console.log(data);
            document.getElementById('TorontoTemp').innerHTML = data.current.temperature;
        }
    );
    /*$.getJSON("http://newsapi.org/v2/top-headlines?country=us&apiKey=165d34c7f4a9485d9953e37954a4afbc",
        function newsData(data) {
            console.log(data);
            for (counter = 0; counter < data.articles.length - 1; counter++) {
                document.getElementById('NewsArticleList').innerHTML = document.getElementById('NewsArticleList').innerHTML + '\n' + data.articles[counter].author;
            }
        }
    );*/
    $.getJSON("https://data.ontario.ca/api/3/action/datastore_search",
        function COVIDData(data) {
            console.log(data);
            alert('Console haas API Data!');
        }
    );
}
