

var select_currency1 = document.getElementById('currency1'),
    select_currency2 = document.getElementById('currency2');
var options_for_select_tag;
var url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"

    //When I call the function, code is still executing here.
    

async function getData() {
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
         }
      
        const json = await response.json();
        
         //for (var i ; i<=max; i++){
            for (let i in json){
                
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;

            //select_currency2.appendChild(opt);
            select_currency1.appendChild(opt);

            
        }

        for (let i in json){
            
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;

        select_currency2.appendChild(opt);
        }
     } catch (error) {
        console.error(error.message);
     }
    }
    getData();

    async function currencyvalue() { 
        var select_currency1_value = select_currency1.value,
        select_currency2_value = select_currency2.value,
         selectedamount_value = document.getElementById("amount").value ;
        console.log(select_currency1_value)
        console.log(select_currency2_value)
        console.log(selectedamount_value)
        
       var exchangevalueurl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${select_currency1_value}.json`
       const response = await fetch(exchangevalueurl);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
         }
      
        const json = await response.json();
         console.log(json[select_currency1_value][select_currency2_value]);
         //alert(json[select_currency1_value][select_currency2_value]*selectedamount_value) 
    var  Exchangedvalue = document.getElementById('Exchangedvalue');
    Exchangedvalue.value = json[select_currency1_value][select_currency2_value]*selectedamount_value;
      return ;

    } 


    
