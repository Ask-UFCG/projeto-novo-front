const DadosEstaticosService = {
  getURLServidor() {
    // return 'http://localhost:8081'
    return 'https://api-ask-ufcg.herokuapp.com'
  },

  getLabelsDisciplinas() {
    return [
      { label: 'Programação I', value: '1' },
      { label: 'Cálculo I', value: '2' },
      { label: 'Estrutura de Dados', value: '3' },
      { label: 'Teoria dos Grafos', value: '4' },
      { label: 'Lógica', value: '5' },
      { label: 'Estatística Aplicada', value: '6' },
      { label: 'Optativa Específica', value: '7' },
      { label: 'Optativa Geral', value: '8' },
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
