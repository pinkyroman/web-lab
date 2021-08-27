<template>
    <div class="album-table">
        <div class="panel panel-warning">
            <div class="panel-heading"><h3>Collected Albums</h3></div>
            <div class="panel-body">
            </div>
            <table class="table">
                <tr>
                    <th>Aritst</th>
                    <th>Album Title</th>
                    <th>Released Year</th>
                </tr>
                <tr v-for="album in albums" :key="album.id">
                    <td>{{album.artist}}</td>
                    <td>{{album.title}}</td>
                    <td>{{album.releasedYear}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        albums: Array,
    },
    data() {
        return {
            "childData": 99,
        }
    }
}
</script>
