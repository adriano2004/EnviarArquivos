function passo1 () { 
    document.getElementById("pass").innerHTML = "Crie uma conta no GitHub e crie um repositório público.";
}

function passo2() { 
    document.getElementById("pass").innerHTML = "Aperte o botão do Windows e digite < cmd >, e click em abrir.";
}

function passo3() {
    document.getElementById("pass").innerHTML="Use o comando < cd 'nome do diretorio' > até chegar no diretorio onde este seu projeto.";
}

function passo4() {
    document.getElementById("pass").innerHTML="Use o comando < dir > se quiser ver os arquivos que estão dentro do diretório que você está.";
}

function passo5() {
    document.getElementById("pass").innerHTML="Use < rd .git /S/Q > para verifical se já existe um arquivo git dentro do diretório, para que não haja conflitos.";
}

function passo6() {
    document.getElementById("pass").innerHTML="Use para iniciar um repositório < git init > .";
}

function passo7() {
    document.getElementById("pass").innerHTML="Para adicionar todos os arquivos do diretorio para serem enviados ao github use < git add . >";
}

function passo8() {
    document.getElementById("pass").innerHTML="Se for colocar o arquivo em uma branch use < git checkout -b 'Nome da branch'. E verifique com < git status >, se der certo ira aparecer a mensagem (Switched to a new branch 'Nome da branch') ";
}

function passo9() {
    document.getElementById("pass").innerHTML="use < git commit -m 'mensagem' > para confirmar.";
}

function passo10() {
    document.getElementById("pass").innerHTML="Depois use < git remote add origin 'URL do depositório no GitHub' > para dizer para onde os arquivos irão ser enviados.";
}

function passo11() {
    document.getElementById("pass").innerHTML="Se for enviar para uma branch use < git push -u origin 'Nome da branch' > para enviar os arquivos.";
}

function passo12() {
    document.getElementById("pass").innerHTML="Se for mandar para a branch principal use < git push -u origin master > para enviar os arquivos.";
}

function passo13() {
    document.getElementById("pass").innerHTML="Feito isto atualize a sua página no GitHub no navegador para eles aparecerem.";
}