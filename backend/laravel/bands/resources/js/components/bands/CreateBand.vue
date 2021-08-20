<template>
    <form style="padding: 8px;">
        <div class="form-group row">
            <label for="bandName" class="col-2 col-form-label">Band Name</label>
            <div class="col-6">
                <input id="bandName" class="form-control" type="text" v-model="band.name" ref="bandName" placeholder="Enter a band name">
            </div>
            <div class="col-4">
                <button class="btn btn-primary" @click="checkForDuplication">Check for Duplication</button>
            </div>
        </div>
        <div class="form-group row">
            <label for="debutYear" class="col-2 col-form-label">Debut Year</label>
            <div class="col-3">
                <input id="debutYear" class="form-control" type="number">
            </div>
        </div>
        <div class="form-group row">
            <label for="description" class="col-2 col-form-label">Description</label>
            <div class="col-10">
                <textarea id="description" class="form-control" rows="5" placeholder="Enter a description for this band."></textarea>
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-md-4">
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary col-md-4" @click="createBand">Create</button>
                <button type="button" class="btn btn-danger col-md-4">Reset</button>
            </div>
        </div>
        <div class="row">
            <div class="card col text-success bg-dark" style="margin: 8px;">
                <div class="card-body">
                    {{$data}}
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            duplicationChecked: false,
            band: {
                id: "",
                name: "",
                debut: 0,
                description: ""
            }
        }
    },
    methods: {
        validateBandData() {
            let errors = [];
            return false;
        },
        checkForDuplication() {
            this.duplicationChecked = true;
        },
        createBand() {
            if (!this.duplicationChecked) {
                alert("Please, check for duplication button!");
            }
            if (!this.validateBandData()) {

            }

            // TODO axios 를 이용하여 Band name list를 구하는 API 호출
            // laravel API 구현해야 함.
        },
    },
    mounted() {
        this.$refs.bandName.focus();
    }
}
</script>
