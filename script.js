 const btn  = document.querySelector("#convert-btn");
btn.addEventListener("click", start);
 
const form = document.querySelector("form");
const answer = document.querySelector('#output');
const input = document.querySelector("input");

input.addEventListener("focus", () => {
    answer.textContent="writing...";
});
input.addEventListener("blur", () => {
    answer.textContent="waiting...";
});


function start(e){
 e.preventDefault();
const inputV = document.querySelector("#number").value;
console.log(inputV);


validar();
    function validar(){
        if(inputV){
            console.log("paso 1 Hecho" + inputV);
            answer.style.transform="scale(1)"
            answer.style.backgroundColor="transparent"
            if(inputV <= -1){
                answer.textContent='Please enter a number greater than or equal to 1'
            }else{
                if(inputV >= 4000){
                    answer.textContent='Please enter a number less than or equal to 3999';
                    return false;
                }else{
                    console.log("paso 2 Hecho" + inputV);
                    const enRomnano = (convertir(inputV));
                    answer.textContent=`${enRomnano}`;

                }
            }
        }else{
            answer.textContent='Please enter a valid number';
            answer.style.transform="scale(1.3)"
            answer.style.backgroundColor="black"
        }
    }

    function convertir(inputV){
      const Options = ["",'C','CC','CCC','CD','D','DC','DCC','DCCC','CM','','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','','I','II','III','IV','V','VI','VII','VIII','IX'];         
    
    //se convierte la cadena de numeros en una de caracteres
    let digitos = String(inputV).split('');
    let romano = '';
    let i = 3 ;

    while(i--){
        romano = (Options[+(digitos.pop()) + (10 * i )] || "" ) + romano ;
    }
    return Array(+digitos.join("") + 1).join("M") + romano;
}

    // form.reset();
}