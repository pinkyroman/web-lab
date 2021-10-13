<template>
    <div class="home">
        <table>
            <colgroup>
                <col/>
                <col/>
                <col/>
                <col/>
                <col/>
            </colgroup>

            <thead>
                <tr>
                    <th colsapn="1">COLUMN_HEADER1</th>
                    <th colsapn="1">CONLUMN_HEADER2</th>
                </tr>
                <tr>
                    <th>inner_key</th>
                    <th>chechbox</th>
                    <th>첫 번째</th>
                    <th>두 번째</th>
                    <th>세 번째</th>
                </tr>
            </thead>
            
            <tbody>
                <!-- Row definitions comes here -->
            </tbody>

            <tfoot>
                <tr>
                    <th colsapn="1">COLUMN_HEADER1</th>
                    <th colsapn="1">CONLUMN_HEADER2</th>
                </tr>
                <tr>
                    <th style="display:none">inner_key</th>
                    <th style="display:none">checkbox</th>
                    <th>첫 번째 요약</th>
                    <th>두 번째 요약</th>
                    <th>세 번째 요약</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
// @ is an alias to /src
// import Contents from '@/components/Contents.vue'

export default {
    name: 'Home',
    components: {
        //Contents
    }
}
</script>

<style scoped>
table {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0px;
}
</style>