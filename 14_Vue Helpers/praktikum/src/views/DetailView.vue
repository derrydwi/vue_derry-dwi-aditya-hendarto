<template>
  <div class="detail">
    <BaseButton action="back" text="Kembali" @back="back" />
    <div v-if="todo">
      <BaseHeading :text="todo.body" />
      <BaseMessage :text="todo.description" />
      <TodoListInput
        v-if="editMode"
        v-model="description"
        action="save-description"
        text="Simpan"
        @save-description="saveDescription"
      />
      <BaseButton
        v-else
        action="change-edit-mode"
        text="Ubah Deskripsi"
        @change-edit-mode="changeEditMode"
      />
    </div>
    <div v-else>
      <BaseMessage text="Todo tidak ditemukan!" />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseMessage from "@/components/BaseMessage.vue";
import TodoListInput from "@/components/TodoListInput.vue";

export default {
  name: "DetailVue",
  components: {
    BaseButton,
    BaseHeading,
    BaseMessage,
    TodoListInput,
  },
  data() {
    return {
      editMode: false,
      description: "",
    };
  },
  computed: {
    todo() {
      return this.$store.state.todo.todos[this.$route.params.id];
    },
  },
  mounted() {
    if (!this.todo || this.todo.description === "Belum ada deskripsi nih") {
      this.description = "";
    } else {
      this.description = this.todo.description;
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    saveDescription() {
      this.$store.dispatch("todo/editDescription", {
        id: this.todo.id,
        description: this.description,
      });
      this.changeEditMode();
    },
  },
};
</script>
