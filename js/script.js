function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO! Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 5){
                 img.setAttribute('src','img/foto-bebe-m.png');
            }else if( idade > 5 && idade < 10  ){
               //CRIANÇA
                 img,setAttribute('src','img/foto-jovem-m.png');
            }else if(idade > 10 && idade < 16){
                    //ADOLESCENTE
                    img.setAttribute('src','img/foto-ado-m.png');
            }else if(idade > 18 && idade < 50){
                //ADULTO
                img.setAttribute('src','img/foto-adulto-m.png');
            }else{
                //IDOSO
                img.setAttribute('src','img/foto-idoso-m.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 5){
                img.setAttribute('src','img/foto-bebe-f.png');
           }else if( idade >=5 && idade < 10  ){
              //CRIANÇA
                img,setAttribute('src','img/foto-jovem-f.png');
           }else if(idade >=10 && idade < 16){
                   //ADOLESCENTE
                   img.setAttribute('src','img/foto-ado-f.png');
           }else if(idade >= 18 && idade < 50){
               //ADULTO
               img.setAttribute('src','img/foto-adulto-f.png');
           }else{
               
               img.setAttribute('src','img/foto-idoso-f.png');
           }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
