const DadosEstaticosService = {
  getURLServidor() {
    return 'http://localhost:8081'
    // return 'https://api-ask-ufcg.herokuapp.com';
  },

  getLabelsDisciplinas() {
    return [
      { label: 'Programação I', value: '1' },
      { label: 'Cálculo I', value: '2' },
      { label: 'Estrutura de Dados', value: '3' },
      { label: 'Teoria dos Grafos', value: '4' },
      { label: 'Lógica', value: '5' },
      { label: 'Estatística Aplicada', value: '6' },
      { label: 'FMCC I', value: '7' },
      { label: 'FMCC II', value: '8' },
      { label: 'Lab. Programação I', value: '9' },
      { label: 'Lab. Programação II', value: '10' },
      { label: 'Banco de Dados I', value: '11' },
      { label: 'Banco de Dados II', value: '12' },
      { label: 'Redes de Computadores', value: '13' },
      { label: 'Álgebra Linear', value: '14' },
      { label: 'Inteligência Artificial', value: '15' },
      { label: 'Optativa Específica', value: '16' },
      { label: 'Optativa Geral', value: '17' },
    ]
  },

  getTitlesHeaders() {
    return [
      { route: '/', text: 'Questões' },
      { route: '/profile', text: 'Perfil' },
      { route: '/login', text: 'Entrar' },
      { route: '/register', text: 'Registrar' },
      { route: '/new-ask', text: 'Faça Uma Pergunta' },
      { route: '/rules', text: 'Regras da Comunidade' },
      { route: '/ask', text: 'Pergunta' },
    ]
  },
}

export default DadosEstaticosService
