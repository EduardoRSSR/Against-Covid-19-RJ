
  /* Programação de eduardo */

var div1 = document.getElementById('d1'); //mapeia as divs
var div2 = document.getElementById('d2');
var div0 = document.getElementById('d0');
var mainSection = document.getElementById('main-section');

mainSection.style.visibility="hidden";
div1.style.visibility="hidden";

let cities= {
    id:[],
    nome:[],
    casos:[],
    mortes:[],
    taxa:[]
}

function receiveAPI(){
      
    axios.get('https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&state=RJ') //busca a API

  .then(function(response){ // Caso cidade seja encontrada
      console.log(response);

      
         for(var i=0 ; i<93 ; i++){

            cities.id[i] = response.data.results[i].city_ibge_code
            cities.nome[i] = response.data.results[i].city
            cities.casos[i] = response.data.results[i].confirmed
            cities.mortes[i] = response.data.results[i].deaths
            cities.taxa[i] = response.data.results[i].death_rate
            console.log(`${cities.mortes[i]}`)
            console.log(`${response.data.results[i].city}`)
        }
      
    })  


  .catch(function(error){ // Caso cidade não seja encontrada
            
    console.log('algo errado.')
     
  })
  }



receiveAPI()


function displayCity(){
    
div0.innerHTML=""

    mainSection.style.visibility="visible";
    div1.style.visibility="visible";

    
    var includeElement = document.createElement('h4');
        includeElement.setAttribute('id','title');
    var includeText=document.createTextNode('Digite a cidade para fazer a busca')
        includeElement.appendChild(includeText);
        div0.appendChild(includeElement);
    
    var includeElement2 = document.createElement('input');
        includeElement2.setAttribute('id','txtcity');
        includeElement2.setAttribute('class','txtcity');
        div0.appendChild(includeElement2);


    var includeButtom = document.createElement('button') 
        includeButtom.setAttribute('id', 'find');
        includeButtom.setAttribute('class', 'w3-card')
        includeButtom.setAttribute('value', 'Buscar')
        includeButtom.setAttribute('onclick', 'renderCity()')   

        var textButtom = document.createTextNode('Buscar');
        includeButtom.appendChild(textButtom);
        div0.appendChild(includeButtom);      

}    

function renderCity(){

       let pos = findCity();     // Chama função para organizar os dados da API e colocar as cidades em um vetore. Essa função chamará a função de busca da cidade, que retornará a posição da mesma.

       if(pos!=-1){
        div1.innerHTML=(`<p>Casos confirmados em ${cities.nome[pos]}: ${cities.casos[pos]} pessoas.`) // utiliza a posição recebida para referenciar a cidade em [pos].
        
       div1.innerHTML+=(`<p>Mortes confirmadas em ${cities.nome[pos]}: ${cities.mortes[pos]} pessoas.`)    
    
     }else{   
    
    div1.innerHTML=('<p>Cidade não encontrada, favor digitar novamente.</p>')
   
}
}

function findCity(){ // Função para busca da cidade inserida pelo usuário.

    let inputCity = document.getElementById('txtcity').value; // Recebe entrada do usuário.
    let pos = cities.nome.indexOf(`${inputCity}`); // Busca cidade dentro do vetor
        console.log('pos')
    return pos;
}


 
    function displayReg(){

        var mesoReg = ["Região Macaé", "Região dos Lagos", "Bacia de São João", "Campos dos Goytacazes"];

        d0.innerHTML="";
        for(var i=0; i<mesoReg.length; i++){

    var includeElement = document.createElement('ul');
    var linkElement=document.createElement('a');
        linkElement.setAttribute('href','#');
    var linkText=document.createTextNode(`${mesoReg[i]}`)  
        linkElement.setAttribute('onclick',`MesoReg(${i})`)


          linkElement.appendChild(linkText); 
          includeElement.appendChild(linkElement); 
          d0.appendChild(includeElement);  
    }
    
          mainSection.style.visibility="visible";
          div1.style.visibility="visible";
    }
    
    function MesoReg(reg){
        console.log(`${reg}`)
        switch(reg){

            case 0: //Regiao Macaé
 
               var posmac=[16, 21, 37, 62]
 
               regMacae(posmac);
 
                break;
            
            case 1: // 
                regMacae();
                break;
            case 2:
                regMacae();
                break;
            case 3:
                regMacae();
                break;
                    
            default:
                window.alert('em construção.')
            break;
        }

        
    }
    function regMacae(pos){

       var sumCasos=cities.casos[16]+cities.casos[21]+cities.casos[37]+cities.casos[62];
       var sumMortes=cities.mortes[16]+cities.mortes[21]+cities.mortes[37]+cities.mortes[62];
    
       
        div1.innerHTML=(`Casos na região de Macaé: ${sumCasos} pessoas.<br>`)
        div1.innerHTML+=(`Óbitos na região de Macaé: ${sumMortes} pessoas.<br>`)

        mostraRegiao(posmac);
  
} 


function mostraRegiao(posmac){

     div0.innerHTML=""

     for(var i=0;i<posmac.length;i++){
var includeElement = document.createElement('ul');
var linkElement=document.createElement('a');
    linkElement.setAttribute('href','#');
var linkText=document.createTextNode(`${cities.nome[posmac[i]]}`)
    linkElement.setAttribute('onclick', `renderCityReg(${posmac[i]})`)

      linkElement.appendChild(linkText); 
      includeElement.appendChild(linkElement); 
      d0.appendChild(includeElement);
}
        div1.innerHTML=(`<p>Casos confirmados em ${cities.nome[pos]}: ${cities.casos[pos]} pessoas.`) // utiliza a posição recebida para referenciar a cidade em [pos].
        
       div1.innerHTML+=(`<p>Mortes confirmadas em ${cities.nome[pos]}: ${cities.mortes[pos]} pessoas.`)   

}

function renderCityReg(pos){

     div1.innerHTML=(`<p>Casos confirmados em ${cities.nome[pos]}: ${cities.casos[pos]} pessoas.`) // utiliza a posição recebida para referenciar a cidade em [pos].
     
    div1.innerHTML+=(`<p>Mortes confirmadas em ${cities.nome[pos]}: ${cities.mortes[pos]} pessoas.`)    

}
  

  function openNav() {/* NAVBAR */
    document.getElementById("mySidenav").style.width = "250px";
  }
  
 function closeNav() { /* NAVBAR */
    document.getElementById("mySidenav").style.width = "0";
 }