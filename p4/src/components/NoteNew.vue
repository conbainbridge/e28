<template>
  <div id="new-note">
    <div class="centered">
      Unique title:
      <br />
      <form @submit.prevent="submitNote">
        <div class="form-group">
          <input type="text" data-test="note-title-input" id="title" v-model="$v.note.title.$model" />
          <div v-if="$v.note.title.$error">
            <div class="error" v-if="!$v.note.title.required">Please include a title.</div>
          </div>
        </div>
        <br />Note:
        <br />
        <textarea rows="4" cols="50" data-test="note-note-input" v-model="$v.note.note.$model" />
        <div v-if="$v.note.note.$error">
          <div class="error" v-if="!$v.note.note.required">Please include your note.</div>
        </div>
        <br />
        <button data-test="add-note" type="submit">Save note</button>
        <div class="error" v-if="formHasErrors">Please correct any errors</div>
        <br />
      </form>
      <transition name="fade">
        <div class="alert" data-test="add-to-cart-confirmation" v-if="addAlert">
          Note added!
          <br />
          <router-link :to="'/'" class="return-home">Back to home Listack</router-link>
        </div>
      </transition>
      <br />
    </div>
  </div>
</template>

<script>
import * as app from "./../app.js";
import { required } from "vuelidate/lib/validators";

let note = {
  title: "",
  note: ""
};

export default {
  name: "NoteNew",
  data: function() {
    return {
      note: note,
      formHasErrors: false,
      addAlert: false
    };
  },
  validations: {
    note: {
      title: {
        required
      },
      note: {
        required
      }
    }
  },
  watch: {
    "$v.$anyError": function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    submitNote: function() {
      if (!this.formHasErrors) {
        app.axios
          .post("https://listack.firebaseio.com/notes.json", this.note)
          .then(response => {
            let key = response.data.name;

            this.$store.commit("addNoteData", {
              [key]: this.note
            });
          });
        this.addAlert = true;
      }
    }
  }
};
</script>

<style scoped>
.new-slip-style {
  background-color: #5b0138;
  color: white;
  border-style: dashed;
  border-color: #201a43;
  padding: 15px;
  margin: 15px;
}
.slip-title {
  font-size: 24px;
  text-align: center;
}
.error {
  color: yellow;
}
.return-home {
  color: yellow;
}
.return-home:hover {
  color: white;
}
</style>