<template>
    <v-container>
        <v-main>
            <div class="text-center display-3 my-4">메인 페이지 입니다.</div>
            <v-row>
                <v-col offset-sm="1" sm="10">
                    <v-text-field label="제목" v-model="title"></v-text-field>
                </v-col>
            </v-row>

            <div class="text-center">
                <v-btn large class="mt-5" color="purple" dark @click="setTitle">확인</v-btn>
            </div>
        </v-main>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: this.$store.getters.getData,
            }
        },
        methods: {
            setTitle() {
                console.log('서브 페이지로 이동 할꺼야 ...');
                this.$store.commit('setData', this.title);
                console.log(this.$route == null ? '라우터 기능에 문제가 있네!' : '자, 그럼 이동 한다~~~');
                this.$router.push('/sub');
            },
        },
    };
</script>