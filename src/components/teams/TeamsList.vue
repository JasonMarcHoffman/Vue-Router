<template>
  <!-- this router view is responsible for rendering the child component in the main.js nested route -->
  <router-view></router-view>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
      :id="team.id"
    ></teams-item>
  </ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  // coming from App.vue, used to do the for loop above
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>