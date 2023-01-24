const MyApp = {
  data() {
    return {
      tarefas: [],
      tarefa: {
        done: false,
      },
    };
  },

  methods: {
    addTarefa() {
      if (this.tarefa.texto) {
        this.tarefas.push(this.tarefa);
        this.tarefa = {
          done: false,
        };
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
      } else {
        alert("Preencha o campo");
      }
    },

    atualizarTela(){
      localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
    }
  },

  created() {
      this.tarefas = localStorage.getItem("tarefas")
        ? JSON.parse(localStorage.getItem("tarefas"))
        : this.tarefas; 
  },

};

Vue.createApp(MyApp).mount("#app");
