<template>
    <div id="app">
        <form @submit.prevent="submitForm">
            <input type="text" class="form-control form-control-lg padding-right-lg" placeholder="Title"
                v-model="formData.title" />
            <div v-if="errors.title" class="error-message">{{ errors.title }}</div>
            <br />
            <ckeditor :editor="editor" v-model="editorContent">
            </ckeditor>
            <div v-if="errors.content" class="error-message">{{ errors.content }}</div>
            <br />
            <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    </div>
</template>
  
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ref } from 'vue'; // Import ref instead of data
import { useTaskStore } from '../../stores/task';
import { useRouter } from "vue-router";

export default {
    name: 'app',
    setup() {
        const editor = ClassicEditor;
        const editorContent = ref('');
        const router = useRouter()

        const formData = ref({
            title: '',
            content: '',
            is_completed: false,
        });
        const errors = ref({});
        const validateForm = () => {
            const errors = {};

            if (!formData.value.title.trim()) {
                errors.title = 'Title is required';
            }

            if (!editorContent.value.trim()) {
                errors.content = 'Content is required';
            }

            return errors;
        };


        const submitForm = async () => {
            try {
                const store = useTaskStore();
                const { handleAddedTask } = store;

                const validationErrors = validateForm();

                if (Object.keys(validationErrors).length === 0) {
                    formData.value.content = editorContent.value;
                    formData.value.title = formData.value.title;

                    await handleAddedTask(formData.value);
                    router.push({ name: 'lists' })

                    console.log('Successfully inserted.');
                } else {
                    errors.value = validationErrors;
                }
            } catch (error) {
                console.error('Error sending data:', error);
            }
        };


        return {
            editor,
            editorContent,
            formData,
            errors,
            submitForm,
        };
    },
};
</script>
<style scoped>
.error-message {
    color: red;
    font-size: 14px;
}

.ck.ck-content {
    height: 250px;
}
</style>