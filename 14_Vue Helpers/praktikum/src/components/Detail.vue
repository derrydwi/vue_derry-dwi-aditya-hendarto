<template>
  <div class="detail">
    <button @click="router.back">Kembali</button>
    <h1>{{ todo.body }}</h1>
    <p>{{ todo.description }}</p>
    <div v-if="editMode" class="edit-mode">
      <input
        type="text"
        class="edit-column"
        v-model="description"
        @keyup.enter="saveDescription"
      />
      <button class="button-save" @click="saveDescription">Simpan</button>
    </div>
    <div v-else>
      <button @click="editDescription">Ubah Deskripsi</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import router from "../router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const description = ref("");
const editMode = ref(false);

const todo = computed(() => store.state.todos[route.params.id]);

const editDescription = () => {
  editMode.value = !editMode.value;
};

const saveDescription = () => {
  store.dispatch("editDescription", {
    index: route.params.id,
    description: description.value,
  });
  editMode.value = !editMode.value;
};
</script>

<style scoped>
.edit-mode {
  display: flex;
}

.edit-column {
  width: 80%;
}

.button-save {
  width: 20%;
  margin: 0 20px;
}
</style>