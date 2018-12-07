<template>
  <div class="addpost">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
            <input class="input" type="text" placeholder="Text input">
        </div>
        </div>

        <div class="field">
        <label class="label">Category</label>
        <div class="control">
            <div class="select">
            <select>
                <option v-for="category in categories" :key="category.id">{{ category.name }}</option>
            </select>
            </div>
        </div>
        </div>

        <div class="field">
            <label class="label">Main Picture</label>
            <div class="file has-name">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span class="file-name" aria-placeholder="main picture">
                        {{ file }}
                    </span>
                </label>
            </div>
        </div>

        <div class="field">
        <label class="label">Content</label>
        <div class="control">
            <tinymce id="d1" v-model="data"></tinymce>
        </div>
        </div>

        <div class="field">
        <div class="control">
            <label class="radio">
            <input type="radio" name="question">
            Public
            </label>
            <label class="radio">
            <input type="radio" name="question">
            Private
            </label>
        </div>
        </div>

        <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-light">Cancel</button>
        </div>
    </div>
  </div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'
export default {
  name: 'AddPost',
  components: {
      tinymce
  },
  data() {
      return {
          data : '',
          file: '',
          categories: [
              { name: 'dammei', id: 1 },
              { name: 'blog', id: 2 },
              { name: 'review', id: 3},
          ],
      }
  },
}
</script>

<style scoped>
.addpost {
  width: 60%;
  padding-top: 50px;
  margin-left: 5%;
  padding-bottom: 50px;
}
</style>
