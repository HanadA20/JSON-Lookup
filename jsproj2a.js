     
            var geoData = JSON.parse(data)
            
            // Funtion to find and display Cities // 
            function findCities() {
            
                let country = document.getElementById("countryInput").value
                let subcountry = document.getElementById("subCountryInput").value
                let cities = []
                for(const property in geoData) {
            
                    if(geoData[property].subcountry == subcountry && geoData[property].country == country){
                        
                        cities.push(geoData[property].name)
                        
                    }
                }
                console.log(cities)
                
                let citiesString = ""
                cities.forEach(city => {
                    citiesString += city + "\n"
                })
                document.getElementById("taOutput").textContent = citiesString
            }
            
             // Funtion to find and display Counties and SubCountries// 
            function findCountryAndSub() {
            
                let city = document.getElementById("cityInput").value
                let countryAndSub = ""
                for(const property in geoData) {
            
                    if(geoData[property].name == city){
                        countryAndSub = `${geoData[property].country}, ${geoData[property].subcountry}`
                    }
                }
                console.log(countryAndSub)
                
                document.getElementById("taOutput2").textContent = countryAndSub
            }
            
        // Funtion for buttons// 
            function init() {

                console.log("init")

                var button = document.getElementById("result");
                
                var button2 = document.getElementById("result2");

                button.addEventListener("click", event =>{findCities()});
                
                button2.addEventListener("click", event =>{findCountryAndSub()});
            }
            window.addEventListener("load", init);
            