let jogarnovamente
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "NARUTO UZUMAKI",
        categoria:"VILA DA FOLHA"
    },
    palavra002 = {
        nome: "SASUKE UCHIHA",
        categoria:"VILA DA FOLHA"
    },
    palavra003 = {
        nome: "SAKURA HARUNO",
        categoria:"VILA DA FOLHA"
    },
    palavra004 = {
        nome: "KAKASHI HATAKE",
        categoria:"VILA DA FOLHA"
    },
    palavra005 = {
        nome: "TSUNADE",
        categoria:"VILA DA FOLHA"
    },
    palavra006 = {
        nome: "JIRAYA",
        categoria:"VILA DA FOLHA"
    },
    palavra007 = {
        nome: "OROCHIMARU",
        categoria:"VILA DA FOLHA"
    },
    palavra008 = {
        nome: "HIRUZEN SARUTOBI",
        categoria:"VILA DA FOLHA"
    },
    palavra009 = {
        nome: "ROCK LEE",
        categoria:"VILA DA FOLHA"
    },
    palavra010 = {
        nome: "MIGHT GUY",
        categoria:"VILA DA FOLHA"
    },
    palavra011 = {
        nome: "GAARA",
        categoria:"VILA DA AREIA"
    },
    palavra012 = {
        nome: "TEMARI",
        categoria:"VILA DA AREIA"
    },
    palavra013 = {
        nome: "KANKURO",
        categoria:"VILA DA AREIA"
    },
    palavra014 = {
        nome: "BAKI",
        categoria:"VILA DA AREIA"
    },
    palavra015 = {
        nome: "MATSURI",
        categoria:"VILA DA AREIA"
    },
    palavra016 = {
        nome: "EBIZOU",
        categoria:"VILA DA AREIA"
    },
    palavra017 = {
        nome: "CHIYO",
        categoria:"VILA DA AREIA"
    },
    palavra018 = {
        nome: "KANKUROU",
        categoria:"VILA DA AREIA"
    },
    palavra019 = {
        nome: "FUGUKI",
        categoria:"VILA DA NÉVOA"
    },
    palavra020 = {
        nome: "HAKU YUKI",
        categoria:"VILA DA NÉVOA"
    },
    palavra021 = {
        nome: "JININ AKEBINO",
        categoria:"VILA DA NÉVOA"
    },
    palavra022 = {
        nome: "KISAME HOSHIGAKI",
        categoria:"VILA DA NÉVOA"
    },
    palavra023 = {
        nome: "MANGETSU HOUZUKI",
        categoria:"VILA DA NÉVOA"
    },
    palavra024 = {
        nome: "MEI TERUMI",
        categoria:"VILA DA NÉVOA"
    },
    palavra025 = {
        nome: "SUIGETSU HOUZUKI",
        categoria:"VILA DA NÉVOA"
    },
    palavra026 = {
        nome: "YAGURA",
        categoria:"VILA DA NÉVOA"
    },
    palavra027 = {
        nome: "ZABUZA MOMOCHI",
        categoria:"VILA DA NÉVOA"
    },
    palavra028 = {
        nome: "NIDAIME MIZUKAGE",
        categoria:"VILA DA NÉVOA"
    },
    palavra029 = {
        nome: "KILLER BEE",
        categoria:"VILA DA NUVEM"
    },
    palavra030 = {
        nome: "SAMUI",
        categoria:"VILA DA NUVEM"
    },
    palavra031 = {
        nome: "KINKAKU",
        categoria:"VILA DA NUVEM"
    },
    palavra032 = {
        nome: "GINKAKU",
        categoria:"VILA DA NUVEM"
    },
    palavra033 = {
        nome: "OMOI",
        categoria:"VILA DA NUVEM"
    },
    palavra034 = {
        nome: "KARUI",
        categoria:"VILA DA NUVEM"
    },
    palavra035 = {
        nome: "YUGITO NII",
        categoria:"VILA DA NUVEM"
    },
    palavra036 = {
        nome: "FUKAI",
        categoria:"VILA DA NUVEM"
    },
    palavra037 = {
        nome: "DODAI",
        categoria:"VILA DA NUVEM"
    },
    palavra038 = {
        nome: "TOROI",
        categoria:"VILA DA NUVEM"
    },
    palavra039 = {
        nome: "DEIDARA",
        categoria:"VILA DA PEDRA"
    },
    palavra040 = {
        nome: "HAN",
        categoria:"VILA DA PEDRA"
    },
    palavra040 = {
        nome: "KITSUCHI",
        categoria:"VILA DA PEDRA"
    },
    palavra041 = {
        nome: "KUROTSUCHI",
        categoria:"VILA DA PEDRA"
    },
    palavra042 = {
        nome: "OHNOKI",
        categoria:"VILA DA PEDRA"
    },
    palavra043 = {
        nome: "ROUSHI",
        categoria:"VILA DA PEDRA"
    },
    palavra044 = {
        nome: "MUU",
        categoria:"VILA DA PEDRA"
    },
    palavra045 = {
        nome: "IWAGAKURE",
        categoria:"VILA DA PEDRA"
    },
    palavra046 = {
        nome: "GARI",
        categoria:"VILA DA PEDRA"
    },
    palavra047 = {
        nome: "TENTEN",
        categoria:"VILA DA FOLHA"
    },
    palavra048 = {
        nome: "NEJI HYUGA",
        categoria:"VILA DA FOLHA"
    },
    palavra049 = {
        nome: "HINATA HYUGA",
        categoria:"VILA DA FOLHA"
    },
    palavra050 = {
        nome: "SHINO ABURAME",
        categoria:"VILA DA FOLHA"
    },
    palavra051 = {
        nome: "INO YAMANAKA",
        categoria:"VILA DA FOLHA"
    },
    palavra052 = {
        nome: "SHIKAMARU NARA",
        categoria:"VILA DA FOLHA"
    },
    palavra053 = {
        nome: "CHOJI AKIMICHI",
        categoria:"VILA DA FOLHA"
    },
    palavra054 = {
        nome: "KABUTO YAKUSHI",
        categoria:"VILA DA FOLHA"
    },
    palavra055 = {
        nome: "KUSHINA UZUMAKI",
        categoria:"VILA DA FOLHA"
    },
    palavra056 = {
        nome: "ASUMA SARUTOBI",
        categoria:"VILA DA FOLHA"
    },
    palavra057 = {
        nome: "IRUKA UMINO",
        categoria:"VILA DA FOLHA"
    },
    palavra058 = {
        nome: "MINATO",
        categoria:"VILA DA FOLHA"
    },
    palavra059 = {
        nome: "ITACHI",
        categoria:"VILA DA FOLHA"
    },
    palavra060 = {
        nome: "KONOHAMARU SARUTOBI",
        categoria:"VILA DA FOLHA"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disable = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0)
        {
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});