@extends('layouts.app')

@section('title', 'Bands Portal')

@section('content')
<div class="card text-white bg-secondary mb-3">
    <div class="card-header text-center justify-content-center">
        <h3>Search information about your favorite bands, albums, and songs</h3>
    </div>
    <div class="card-body bg-dark mb-3">
        <form class="form justify-content-center">
            @csrf
            <div class="form-row">
                <div class="col-3">
                    <select name="searchCategory" class="form-control">
                        <option value="default">Default (Band Name)</option>
                        <option value="band">Band Name</option>
                        <option value="album">Album Title</option>
                        <option value="song">Song Title</option>
                    </select>
                </div>
                <div class="col-7">
                    <input type="text" name="searchTopic" class="form-control">
                </div>
                <div class="col">
                    <button type="button" class="btn btn-danger btn-block">Search</button>
                </div>
            </div>
        </form>
    </div>
</div>

<div class="card text-white bg-secondary mb-3">
    <div class="card-header text-left">
        <h4>Band Search Results</h4>
    </div>
    <div class="card-body bg-dark mb-3">
        <dl>
            <dt>Ozzy Osbourne</dt>
            <dd>He was born in ...</dd>

            <dt>Ozzy Osbourne</dt>
            <dd>He was born in ...</dd>
        </dl>
    </div>
</div>
@endsection
