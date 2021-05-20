var blocao = document.querySelector(".blocao");
var botao = document.querySelector("#botao");
var lista = document.querySelector("#lista");
var minutos = document.querySelector("#minutos");

botao.addEventListener("click", f1);
lista.addEventListener("click", deletar);

function f1(event) {
    if (blocao.value != '') {
        event.preventDefault();

        minutoss = Number(minutos.value);
        var min1 = minutoss;
        var min = min1 * 60;
        var sec;
        var min2;


        var linha = document.createElement("div");
        linha.classList.add("thumbnail");

        var div1 = document.createElement('div');
        div1.classList.add('col-sm-6');
        div1.classList.add('col-md-4');

        var tempo1 = document.createElement('p');
        tempo1.classList.add("tempospos");
        if (min > 0) {
            setInterval(function () {
                min2 = Math.floor(min / 60);
                sec = min % 60;
                min2 = min2 < 10 ? '0' + min2 : min2;
                sec = sec < 10 ? '0' + sec : sec;
                if (min >= 0) {
                    tempo1.innerText = `${min2}:${sec} `;
                    min--;
                }

            }, 1000)
        }
        else tempo1.innerText = "00:00"


        linha.appendChild(tempo1);

        var bol = document.createElement('p');
        bol.innerText = `${blocao.value}`;
        bol.classList.add('bola');
        linha.appendChild(bol);

        var lixo = document.createElement('button');
        lixo.classList.add('btn');
        lixo.classList.add('btn-primary');
        lixo.id = "lixo"
        lixo.innerHTML = '<i class="glyphicon glyphicon-trash"></i>';
        linha.appendChild(lixo);


        var concluido = document.createElement('button');
        concluido.classList.add('btn');
        concluido.classList.add('btn-success');
        concluido.id="concluido";
        concluido.innerHTML = '<i class="glyphicon glyphicon-ok" </i>';
        linha.appendChild(concluido);

        var add1 = document.createElement('button');
        add1.classList.add('btn');
        add1.classList.add('btn-primary');
        add1.id="add";
        add1.innerHTML = '<i class=" glyphicon glyphicon-plus" </i>';
        linha.appendChild(add1);

        

        blocao.value = "";
        minutos.value = "0";

        div1.appendChild(linha);
        lista.appendChild(div1);
        
    }
    

}

function deletar(event) {
    var item = event.target;
    

    if (item.id === 'lixo') {
        var conteudo = item.parentElement;
        conteudo.remove();
    }
    else if (item.id === 'conclusao') {
        var cara = item.parentElement;
        if (cara.id[0] === 'conteudo' && cara.id[1] === 'concluido') {
            cara.classList.remove("concluido");

        }
        else cara.classList.add("concluido");

    }
    else if(item.id === 'add'){
        if (blocao.value != ''){
        var div3= item.parentElement;
        var div2= document.createElement('div');
        div2.classList.add('caption');

        var bol2= document.createElement('p');
        bol2.innerText= (`${blocao.value}`)
        div2.appendChild(bol2);

        div3.appendChild(div2); 
        blocao.value="";
        }

    }
}
