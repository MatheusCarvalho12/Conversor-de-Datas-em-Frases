 
let dia = ['','primeiro','dois','três','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove']
let mes = ['','janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
 
let am = ["", "mil", "dois mil", "três mil", "quatro mil", "cinco mil", "seis mil", "sete mil", "oito mil", "nove mil"]
let ac = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]
let ad = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
let au = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]

function rodar(){
    let datanormal
    datanormal = document.getElementById("datanormal").value
    
    let datacombarra
    datacombarra = document.getElementById("datacombarra").value
        //data principal
    let data
        //escolha do método de data
    if (datacombarra == "01/06/2022"){
        data = datanormal
    }
    if (datanormal == "2022-06-01"){
        //converter (dia/mês/ano) para (ano-mes-dia)
        data = datacombarra[6] +  datacombarra[7] + datacombarra[8] + datacombarra[9] + "-" + datacombarra[3] + datacombarra[4] + "-" + datacombarra[0] + datacombarra[1]
    }
        //detectar que saiu do escopo
    if ((parseInt(datacombarra[0] + datacombarra[1]) > 31) || (parseInt(datacombarra[3] + datacombarra[4]) > 12)){
        alert("Data Invalida")
    }
    else{
        let anousu = data[0] + data[1] + data[2] + data[3] 
        let mesusu = data[5] + data[6]
        let diausu = data[8] + data[9]
            //dezena do ano
        let anod = anousu[2] + anousu[3]
            //mês
        document.getElementById("mest").innerHTML = `${" de " + mes[parseInt(mesusu)]}`
            //dia
        if (parseInt(diausu) <= 19){
            document.getElementById("diat").innerHTML = `${"Nasceu no dia " + dia[parseInt(diausu)]}`
        }
        else {
            document.getElementById("diat").innerHTML = `${"Nasceu no dia "  + ad[parseInt(data[8])] + " e " + au[parseInt(data[9])]} `
        }
            //ano
        document.getElementById("anom").innerHTML = `${" de " + am[data[0]]}`
        document.getElementById("anoc").innerHTML = `${" " + ac[data[1]]}`
        if (parseInt(anod) <= 19){
            document.getElementById("anod").innerHTML = `${" e " + dia[parseInt(anod)]}`
        }
        else{
            document.getElementById("anod").innerHTML = `${" e " + ad[parseInt(data[2])] + " e " + au[parseInt(data[3])]} `
        }
    }
}
