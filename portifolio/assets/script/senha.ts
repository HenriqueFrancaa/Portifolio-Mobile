export function gerarSenha() {
  let senha = '';
  for (let i = 0; i < 4; i++) {
    senha += Math.floor(Math.random() * 10).toString();
  }
  return senha;
}

export function conferirPalpite(senha: string, palpite: string) {
  let posicaoCerta = 0;
  let digitoCerto = 0;
  const arrSenha = senha.split('');
  const arrPalpite = palpite.split('');
  const usadoSenha = Array(4).fill(false);
  const usadoPalpite = Array(4).fill(false);

  // Conta dígitos na posição correta
  for (let i = 0; i < 4; i++) {
    if (arrPalpite[i] === arrSenha[i]) {
      posicaoCerta++;
      usadoSenha[i] = true;
      usadoPalpite[i] = true;
    }
  }

  // Conta dígitos corretos em posição errada
  for (let i = 0; i < 4; i++) {
    if (usadoPalpite[i]) continue;
    for (let j = 0; j < 4; j++) {
      if (!usadoSenha[j] && arrPalpite[i] === arrSenha[j]) {
        digitoCerto++;
        usadoSenha[j] = true;
        break;
      }
    }
  }

  return { posicaoCerta, digitoCerto };
}