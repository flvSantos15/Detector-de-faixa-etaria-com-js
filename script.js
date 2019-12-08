function verificar(){
	var date = new Date()	
	var ano = date.getFullYear()
	var nasc = document.getElementById('txtano')
	var res = document.querySelector('div#res')
	if (nasc.value.length == 0 || Number(nasc.value) > ano) {
		alert('ERRO! Verifique os dados e tente novamente!')
	} else {
		var sexo = document.getElementsByName('radsex')
		var idade = ano - Number(nasc.value)
		var genero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')
		img.style.borderRadius = '50%'
		img.style.width = '250px'
		img.style.heigth = '250px'
		if (sexo[0].checked) {
			genero = 'Homem'
			if(idade >= 0 && idade < 10){
				//criança
				img.setAttribute('src', 'bebeboy.jpg')
				//img.src = 'bebeboy.jpg'
			}else if(idade < 21){
				//jovem
				img.setAttribute('src', 'jovemrapaz.jpg')
			}else if(idade < 50){
				//adulto
				img.setAttribute('src', 'adulto.jpg')
			}else{
				//idoso
				img.setAttribute('src', 'senhor.jpg')
			}
		} else if(sexo[1].checked){
			genero = 'Mulher'
			if(idade >= 0 && idade < 10){
				//crianca
				img.setAttribute('src', 'bebegirl.jpg')
			} else if(idade < 21){
				//jovem
				img.setAttribute('src', 'jovemmoca.jpg')
			}else if(idade < 50){
				//adulto
				img.setAttribute('src', 'adulta.jpg')
			}else{
				//idoso
				img.setAttribute('src', 'senhora.jpg')
			}
		}
		res.style.textAlign = 'center'
		res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
		res.appendChild(img)
	}
}