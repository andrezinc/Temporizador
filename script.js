var blocao = document.querySelector(".blocao");
var botao = document.querySelector(".botao");
var lista = document.querySelector(".lista");
var minutos = document.querySelector(".minutos");

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

        var div1 = document.createElement('div');
        div1.classList.add('conteudo');

        var bol = document.createElement('li');
        bol.innerText = `${blocao.value}`;
        bol.classList.add('bola');
        div1.appendChild(bol);

        var lixo = document.createElement('button');
        lixo.classList.add('lixo');
        lixo.innerHTML = '<i class="fas fa-trash-alt"></i>';
        div1.appendChild(lixo);


        var concluido = document.createElement('button');
        concluido.classList.add('conclusao');
        concluido.innerHTML = '<i class="fas fa-check" </i>';
        div1.appendChild(concluido);

        var add1 = document.createElement('button');
        add1.classList.add('add');
        add1.innerHTML = '<i class="fas fa-plus" </i>';
        div1.appendChild(add1);

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


        div1.appendChild(tempo1);


        blocao.value = "";
        minutos.value = "0";

        lista.appendChild(div1);
    }
    else return 0;

}

function deletar(event) {
    var item = event.target;


    if (item.classList[0] === 'lixo') {
        var conteudo = item.parentElement;
        conteudo.remove();
    }
    else if (item.classList[0] === 'conclusao') {
        var cara = item.parentElement;
        if (cara.classList[0] === 'conteudo' && cara.classList[1] === 'concluido') {
            cara.classList.remove("concluido");

        }
        else cara.classList.add("concluido");

    }
    else if(item.classList[0] === 'add'){
        if (blocao.value != ''){
        var div3= item.parentElement;
        var div2= document.createElement('div');
        div2.classList.add('div2');

        var bol2= document.createElement('li');
        bol2.classList.add('bol2');
        bol2.innerText= (`${blocao.value}`)
        div2.appendChild(bol2);

        


        div3.appendChild(div2);
        }

    }
}
