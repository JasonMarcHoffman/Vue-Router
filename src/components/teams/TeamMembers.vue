<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- NOTE: this will change the url but not rerender the correct component -->
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  // getting data from App.vue
  inject: ['teams', 'users'],
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // get access to the data but also the routing data: $route.params
      // teamId comes from main.js route params eg /:teamId
      // find the correct team with that id
      const selectedTeam = this.teams.find((team) => team.id === teamId)
      const members = selectedTeam.members
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member)
        selectedMembers.push(selectedUser)
      }
      this.members = selectedMembers
      this.teamName = selectedTeam.name
    }
  },
  // when the component is create but before its shown on the screen
  created() {
    this.loadTeamMembers(this.teamId);
    // get access to query parameters from teamsList
    console.log(this.$route.query)
  },
  // watching for everytime the route changes 
  watch: {
    teamId(newRoute) {
      this.loadTeamMembers(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>