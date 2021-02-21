<template>
<button @click="confirmInput">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  methods: {
    confirmInput() {
      // do something but then navigate to another page / url
      this.$router.push('/teams')
      // other examples: .forward(), .backward() etc ref official docs
    },
    // available because we are using vue router
    beforeRouteEnter(to, from, next) {
      console.log('Users List component before route enter')
      console.log(to, from);
      // run any logic here to confirm or deny the next method
      next();
    }
  },
  inject: ['users'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>