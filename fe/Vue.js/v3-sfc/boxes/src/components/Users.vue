<template>
    <div class="users-wrapper">
        <div class="users">
            <UsersItem
                v-for="user in response.users" 
                :key="user.id" 
                :user="user"
            />
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import { reactive } from 'vue';
import { useUsersService } from '../composables/api-users.js';
import UsersItem from './UsersItem.vue';

const response = reactive(useUsersService());

</script>