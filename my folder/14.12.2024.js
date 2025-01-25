/*const country = [
    {code : 'AM',
        countryName: 'Armenia',
        },
        {
            code:'CA',
            countryName:'Canada',
        },
        {
            code: 'EG',
            countryName:'Egypt',

        },
    ]

    function find(array,callback){
        let findValue = null;
        for(let i=0; i<Array.length;i++){
            if(array[i]=== undefined) continue;
            if(callback(array[i],i,array))
                {findValue = array[i]}
        }
return findValue;
    }

    const result = find(country,(item)=>{
        return item.code ==='EG';
    });
    console.log(findValue,'findValue');*/


    const countryCurrencies = [
        { 
          code: "US", 
          name: "United States", 
          currency: { code: "USD", name: "United States Dollar", symbol: "$" } 
        },
        { 
          code: "GB", 
          name: "United Kingdom", 
          currency: { code: "GBP", name: "British Pound", symbol: "£" } 
        },
        { 
          code: "EU", 
          name: "European Union", 
          currency: { code: "EUR", name: "Euro", symbol: "€" } 
        },
        { 
          code: "JP", 
          name: "Japan", 
          currency: { code: "JPY", name: "Japanese Yen", symbol: "¥" } 
        },
        { 
          code: "IN", 
          name: "India", 
          currency: { code: "INR", name: "Indian Rupee", symbol: "₹" } 
        },
        { 
          code: "CA", 
          name: "Canada", 
          currency: { code: "CAD", name: "Canadian Dollar", symbol: "$" } 
        },
        { 
          code: "AU", 
          name: "Australia", 
          currency: { code: "AUD", name: "Australian Dollar", symbol: "$" } 
        },
        { 
          code: "CN", 
          name: "China", 
          currency: { code: "CNY", name: "Chinese Yuan", symbol: "¥" } 
        },
        { 
          code: "RU", 
          name: "Russia", 
          currency: { code: "RUB", name: "Russian Ruble", symbol: "₽" } 
        },
        { 
          code: "ZA", 
          name: "South Africa", 
          currency: { code: "ZAR", name: "South African Rand", symbol: "R" } 
        }
      ];
    
      function find(array,callback){
        let findValue = null;
        for(let i=0; i<array.length;i++){
            if(array[i]=== undefined) continue;
            if(callback(array[i],i,array))
                {findValue = array[i]}
        }
return findValue;
    }

    const result = find(country,(item)=>{
        return item.code ==='EG';
    });
    console.log(result,'result');
    
    
    
    
    
    