<template>
    <div class="panel panel-info" style="text-align:center">
        <div class="panel-heading"><h3>Contents</h3></div>
        <div class="panel-body">
            <ul class="list-group">
                <li v-for="c in contents" :key="c.href" class="list-group-item">
                    <a :href="c.href">{{c.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("app-main mounted.");
    },
    data() {
        return {
            contents: [
                {
                    title: "Vue Form",
                    href: "/vue-form",
                },
                {
                    title: "Blade Form",
                    href: "/blade-form",
                },
                {
                    title: "CURD Form",
                    href: "/curd-form"
                }
            ]
        }
    }
}
</script>
