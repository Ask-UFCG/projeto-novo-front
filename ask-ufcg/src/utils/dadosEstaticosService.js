const DadosEstaticosService = {
  getLabelsDisciplinas() {
    return [
      { label: 'Matematica', value: '1' },
      { label: 'Portugues', value: '2' },
      { label: 'Ciencia', value: '3' },
      { label: 'Filosofia', value: '4' },
      { label: 'aaaa', value: '5' },
      { label: 'bbb', value: '6' },
      { label: 'ccc', value: '7' },
      { label: 'ddd', value: '8' },
    ];
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
    ];
  },
};

export default DadosEstaticosService;
