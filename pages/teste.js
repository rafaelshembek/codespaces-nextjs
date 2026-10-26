
function Teste(){
    
    function BobbleSort(array)
    {
            for (let i = 0; i < myArray.length - 1; i++) {
               for (let j = 0; j < myArray.length- 1 - i; j++) {
                if (myArray[j] > myArray[j + 1]) {
        
                    let temp = myArray[j];
                    myArray[j] = myArray[j + 1];
                    myArray[j + 1] = temp;
                    count++;
        
                }
            }
            
        }
    }

    const myArray = [3,5,4,2,1];
    let count = 0;

    BobbleSort(myArray);

    console.log(`Quantidas de trocas: ${count}`);
    console.log(myArray);
        

 return(
    <main>
        <h1>Teste</h1>
    </main>
 )
}

export default Teste;