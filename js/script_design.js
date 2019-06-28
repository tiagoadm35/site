b = -1;
retornar = false;
function slideshow()
{
	switch (b)
	{  
		case 0:
			foto.src = "imagem/imagensdesign/arredondado.png"; 
			retornar = false;
			break;
		case 1:
			foto.src = "imagem/imagensdesign/real.png"; //imagem 2
			break;
		case 2:
			foto.src = "imagem/imagensdesign/bola.png"; //imagem 3, pode colocar quantos case quiser.
			break;
		case 3:
			foto.src = "imagem/imagensdesign/carinha.png";
			break;
		case 4:
			foto.src = "imagem/imagensdesign/brasil.png";
			break;
		case 5:
			foto.src = "imagem/imagensdesign/contorno.png";
			break;
		case 6:
			foto.src = "imagem/imagensdesign/coracao.png";
			break;
		case 7:
			foto.src = "imagem/imagensdesign/corel.png";
			break;
		case 8:
			foto.src = "imagem/imagensdesign/distorcao.png";
			break;
		case 9:
			foto.src = "imagem/imagensdesign/distorcer.png";
			break;
		case 10:
			foto.src = "imagem/imagensdesign/empurrarpuxar.png";
			break;
		case 11:
			foto.src = "imagem/imagensdesign/estrela.png";
			break;
		case 12:
			foto.src = "imagem/imagensdesign/estrelas.png";
			break;
		case 13:
			foto.src = "imagem/imagensdesign/extrusao.png";
			break;
		case 14:
			foto.src = "imagem/imagensdesign/musica.png";
			break;
		case 15:
			foto.src = "imagem/imagensdesign/nike.png";
			break;
		case 16:
			foto.src = "imagem/imagensdesign/perspectiva.png";
			break;
		case 17:
			foto.src = "imagem/imagensdesign/pierre.png";
			break;
		case 18:
			foto.src = "imagem/imagensdesign/solution.png";
			break;
		case 19:
			foto.src = "imagem/imagensdesign/sos.png";
			break;
		case 20:
			foto.src = "imagem/imagensdesign/vela.png";
			retornar = true;
			break;
			
	}
	if(retornar == true){
		b--;
	}else{
		b++;
	}
}