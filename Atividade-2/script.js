// * Curso de Engenharia de Software - UniEVANGÉLICA 
// * Disciplina de Programação Web 
// * Dev: Gustavo Gomes dos Santos - 2111267
// * 16/05/2024 

new Vue({ //start vue
  el: "#app", //definir elemente que está sendo controlado pelo vue
  data: {
    newTask: "",
    tasks: [],
  },
  methods: { //methods aplicados a essa tarefa de TO-DO
    addTask: function () {
      if (this.newTask.trim() !== "") { //verifica se nao esta vazio
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = ""; // limpa o input após adicionar a tarefa
      }
    },
    completeTask: function (index) { //method para concluida
      this.tasks[index].completed = true;
    },
    removeTask: function (index) { //method para excluir task
      this.tasks.splice(index, 1);
    },
  },
});
