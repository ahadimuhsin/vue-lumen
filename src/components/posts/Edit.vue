<template>
    <div class="posts">
        <div class="container-mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            Edit Post
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="PostUpdate">

                                <div class="form-group">
                                    <label for="title">TITLE</label>
                                    <input type="text" class="form-control" v-model="post.title"
                                    placeholder="Masukkan Title" name="title">

                                    <div v-if="validation.title">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.title[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="content">KONTEN</label>
                                    <textarea name="content" id="content" rows="10"
                                    v-model="post.content" placeholder="Masukkan Kontent" class="form-control"></textarea>

                                    <div v-if="validation.content">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.content[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-md btn-success mr-2">UPDATE</button>
                                    <button type="reset" class="btn btn-md btn-danger">RESET</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data()
    {
        return {
            post: {},
            validation: []
        }
    },
    //mendapatkan data berdasarkan ID
    created(){
        axios.get(`http://localhost:8000/posts/${this.$route.params.id}`)
        .then((response) => {
            this.post = response.data.data;
        });
    },
    methods: {
        //proses update
        PostUpdate(){
            axios.put(`http://localhost:8000/posts/${this.$route.params.id}`, this.post)
            .then((response) => {
                this.$router.push({
                    name: 'posts'
                });
                console.log(response);
            })
            .catch(error => {
                this.validation = error.response.data.data;
            })
        }
    }
}
</script>