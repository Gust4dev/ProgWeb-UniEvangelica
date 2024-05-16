new Vue({
  el: "#app",
  data: {
    newTask: "",
    tasks: [],
  },
  methods: {
    addTask: function () {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = ""; // Limpa o input após adicionar a tarefa
      }
    },
    completeTask: function (index) {
      this.tasks[index].completed = true;
    },
    removeTask: function (index) {
      this.tasks.splice(index, 1);
    },
  },
});
