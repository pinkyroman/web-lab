@extends('layouts.app')

@section('banner-image', asset('images/banner-bands.jpg'))
@section('menu-title', 'Bands')
@section('menu-description', 'You can manage bands here. Create, Update and Delete bands.')

@push('content')
<ul class="nav nav-pills nav-justified text-white bg-dark" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
        <a id="pills-create-tab" class="nav-link active" data-toggle="pill" href="#pills-create" role="tab">Create</a>
    </li>
    <li class="nav-item" role="presentation">
        <a id="pills-update-tab" class="nav-link" data-toggle="pill" href="#pills-update" role="tab">Update</a>
    </li>
    <li class="nav-item" role="presentation">
        <a id="pills-delete-tab" class="nav-link" data-toggle="pill" href="#pills-delete" role="tab">Delete</a>
    </li>
</ul>

<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-create" role="tabpanel">
        <create-band></create-band>
    </div>
    <div class="tab-pane fade" id="pills-update" role="tabpanel">
        Update a band!
    </div>
    <div class="tab-pane fade" id="pills-delete" role="tabpanel">
        Delete a band!
    </div>
</div>
@endpush

@push('script')

@endpush
