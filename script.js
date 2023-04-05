

const coin_container = document.getElementById('coin-container')

const data = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

data
.then(res => res.json())
.then(coinsList => {
    coinsList.forEach(coin => {
     console.log(coin)
         const newDiv = document.createElement('div')
         newDiv.setAttribute('id','mainDiv')

          const col3 = document.createElement('img')
          col3.setAttribute('class','image')
        col3.src = coin.image

       const col1 = document.createElement('h4')
        col1.setAttribute('class','name')
         col1.innerHTML = coin.name


         const col2 = document.createElement('h4')
         col2.setAttribute('class','symbol')
         col2.innerHTML = (coin.symbol).toUpperCase()

     
         const col4 = document.createElement('h4')
         col4.setAttribute('class','coin')
         col4.innerHTML='$'+coin.current_price

         const col5 = document.createElement('h4')
         col5.setAttribute('class','totalVolume')
         col5.innerHTML = '$'+ coin.total_volume
        


         const col6 = document.createElement('h4')
         col6.setAttribute('class','percentage')
         col6.innerHTML = (coin.price_change_percentage_24h).toFixed(2)+"%"
         if(coin.price_change_percentage_24h < 0){
           col6.style.color = 'red'
         }else{
           col6.style.color = 'green'
         }

         const col7 = document.createElement('h4')
         col7.setAttribute('class','marketCap')
         col7.innerHTML = 'Mkt Cap: $'+ coin.market_cap


        newDiv.appendChild(col3)
        newDiv.appendChild(col1)
        newDiv.appendChild(col2)
        newDiv.appendChild(col4)
        newDiv.appendChild(col5)
        newDiv.appendChild(col6)
        newDiv.appendChild(col7)
    
        
    
         coin_container.appendChild(newDiv)

        
    })
}).catch(error => console.log(error))








