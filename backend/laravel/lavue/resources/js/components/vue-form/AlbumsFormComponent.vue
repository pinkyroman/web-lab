<template>
<div class="album-form">
    <form class="form-horizontal">
        <div class="form-group">
            <label for="artistName" class="col-sm-3 control-label"><b>Artist Name:</b></label>
            <div class="col-sm-6">
                <input v-model.trim="album.artist" class="form-control" id="artistName" ref="artistName" placeholder="enter an artist name here">
            </div>
        </div>
        <div class="form-group">
            <label for="albumTitle" class="col-sm-3 control-label"><b>Album Title:</b></label>
            <div class="col-sm-6">
                <input v-model.trim="album.title" class="form-control" id="albumTitle" placeholder="enter the album title">
            </div>
        </div>
        <div class="form-group">
            <label for="releasedYear" class="col-sm-3 control-label"><b>Released Year:</b></label>
            <div class="col-sm-3">
                <input type="number" v-model.number="album.releasedYear" class="form-control" id="releasedYer">
            </div>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary col-sm-offset-2 col-sm-3" @click.prevent="handleRegister($event, album)" :disabled="!canRegister">
                <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> Register
            </button>
            <button class="btn btn-danger col-sm-3" type="button" @click.prevent="handleReset" :disabled="!canReset">
                Reset
            </button>
        </div>
    </form>

    <div>
        <album-table :albums="registeredAlbums"></album-table>
    </div>

    <div>
        <div class="panel panel-danger">
            <div class="panel-heading">
                <h4>Data of Instance</h4>
            </div>
            <div class="panel-body">
                {{ $data }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    props: {
        "debug": Boolean,
    },
    data() {
        return {
            album: {},
            registeredAlbums: [],
        }
    },
    computed: {
        canRegister() {
            return (this.album.artist.length > 0) && (this.album.title.length > 0);
        },
        canReset() {
            return (this.album.artist.length) > 0 || (this.album.title.length > 0);
        }
    },
    methods: {
        resetAlbumData() {
            this.album = {
                id: nanoid(),
                artist: "",
                title: "",
                releasedYear: new Date().getFullYear(),
            }
        },
        resetFocus() {
            this.$refs.artistName.focus();
        },
        handleRegister(e, album) {
            this.registeredAlbums.push(album);
            this.resetAlbumData();
            this.resetFocus();
        },
        handleReset() {
            this.resetAlbumData();
        },
    },
    created() {
        this.resetAlbumData();
    },
    mounted() {
        this.resetFocus();
    }
}
</script>
