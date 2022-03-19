<template>
  <div class="detail">
    <BaseButton text="Kembali" />
    <div v-if="todo">
      <TheHeading :title="todo.body" />
      <TheContent :text="todo.description" />
      <TodoListInput
        v-if="editMode"
        action="save-description"
        text="Simpan"
        :description="todo.description"
        @save-description="saveDescription"
      />
      <BaseButton
        v-else
        action="edit-description"
        text="Ubah Deskripsi"
        @edit-description="editDescription"
      />
    </div>
    <div v-else>
      <TheContent text="Todo tidak ditemukan!" />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import TheContent from "@/components/TheContent.vue";
import TheHeading from "@/components/TheHeading.vue";
import TodoListInput from "@/components/TodoListInput.vue";

export default {
  name: "DetailVue",
  components: {
    BaseButton,
    TheContent,
    TheHeading,
    TodoListInput,
  },
  data() {
    return {
      editMode: false,
      editedDescription: "",
    };
  },
  computed: {
    todo() {
      return this.$store.state.todo.todos[this.$route.params.id];
    },
  },
  methods: {
    editDescription() {
      this.editMode = !this.editMode;
      if (this.todo.description === "Belum ada deskripsi nih") {
        this.editedDescription = "";
      } else {
        this.editedDescription = this.todo.description;
      }
    },
    saveDescription(description) {
      this.$store.dispatch("todo/editDescription", {
        index: this.$route.params.id,
        ...(description && {
          description: description,
        }),
        ...(!description && {
          description: "Belum ada deskripsi nih",
        }),
      });
      this.editMode = !this.editMode;
    },
  },
};
</script>