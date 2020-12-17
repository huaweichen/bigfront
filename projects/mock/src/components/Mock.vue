<template>
    <div>
        <b-container>
            <b-form @submit.prevent="onSubmit" inline>
                <b-form-group id="input-group-1" label="Page" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        v-model="form.page"
                        type="number"
                        placeholder="Enter page number"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Num" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        v-model="form.num"
                        type="number"
                        placeholder="Enter number"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-container>

        <code v-html="mockData"></code>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Mock",
    data() {
        return {
            form: {
                page: 1,
                num: 10
            },
            mockData: ''
        }
    },
    methods: {
        onSubmit() {
            axios.get(`/lists${this.urlParam}`)
                .then((res) => {
                    const data = res.data
                    if (data.status === 0) {
                        this.mockData = data
                    }
                })
        }
    },
    computed: {
        urlParam: function () {
            return '?page=' + this.form.page + '&num=' + this.form.num
        }
    }
}
</script>

<style scoped>

</style>