    function appendValue(value){
        const display = document.getElementById("display")
        if(value === "x"){
            display.value +='*;'
        }
        else{
            display.value += value
        }
    }
    function clearDisplay(){
        document.getElementById('display').value ="";
    }
    
    function deleteLast(){
        let current = document.getElementById('display').value;
        document.getElementById('display').value = current.slice(0,-1)
    }

    function calculate(){
        try{
            let result = eval(document.getElementById("display").value);
            document.getElementById("display").value = result;
        }catch(error){
            alert("invalid expression");
        }
    }
