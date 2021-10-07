<template>
   <section class="featured-posts">
      <post-preview
        v-for="post in posts"
        :key="post.id"
        :is-admin="isAdmin"
        :id="post.id"
        :title="post.title"
        :previewText="post.previewText"
        :thumbnail="post.thumbnail"
      />

      <!-- https://files.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg -->

      <!-- <post-preview
        :is-admin="isAdmin"
        id="2"
        title="Post Title 2"
        previewText="Preview Text 2"
        thumbnail="https://www.thelocal.de/wp-content/uploads/2020/12/12189502600fab284e58bbd2a79e59995a286e992bcff6e51dd8abee0c1f3bdc.jpg"
      />

      <post-preview
        :is-admin="isAdmin"
        id="3"
        title="Post Title 3"
        previewText="Preview Text 3"
        thumbnail="https://www.europeanwomenintech.com/hubfs/WIT_Tech_Talks-01.jpg"
      /> -->
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  name: 'post-list',
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
