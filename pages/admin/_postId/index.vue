<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form @submit="onSubmitted" :post="loadedPost" />
    </section>
  </div>
</template>


<script>
import AdminPostForm from '@/components/admin/AdminPostForm.vue'
import axios from 'axios'
export default {
  middleware: ['check-auth', 'auth'],
  components: { AdminPostForm },
  layout: 'admin',
  asyncData(context) {
    console.log(context);
    return context.app.$axios.$get(`posts/${context.params.postId}.json`)
      .then(data => {
        return {
          loadedPost: {
            ...data,
            id: context.params.postId
          }
        }
      })
      .catch(err => console.error(err))
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('editPost', postData).then(() => {
        this.$router.push('/admin');
      })
    }
  }
}
</script>


<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }


  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
