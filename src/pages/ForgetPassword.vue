<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h5>
                <span>Forgot Password</span>
            </h5>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.email && errors.email[0] }"
                    id="email" v-model="form.email" placeholder="" />
                <label for="email">Email</label>
                <div class="invalid-feedback" v-if="errors.email && errors.email[0]">
                    {{ errors.email && errors.email[0] }}
                </div>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Reset Password</button>
        </form>
    </main>
</template>

<script setup>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter()
const store = useAuthStore()
const { isLoggedIn, errors } = storeToRefs(store)
const { handleForgotPass } = store

const form = reactive({
    email: '',
})

const handleSubmit = async () => {
    await handleForgotPass(form)
}
</script>

<style scoped>
.auth-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 60vh;
    margin-top: 2rem;
}

.auth-form {
    width: 400px;
}
</style>