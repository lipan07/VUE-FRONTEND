<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask />
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import NewTask from "../components/tasks/NewTask.vue";

</script>