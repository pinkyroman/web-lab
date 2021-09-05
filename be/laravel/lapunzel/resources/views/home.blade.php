@extends('layouts.app')

@section('contents')
@include('templates.menu', [
    'title' => 'Training Courses',
    'items' => [
        [
            'name' => 'Blade Template',
            'routeName' => 'blade-template.home'
        ],
        [
            'name' => 'Test Menu',
            'routeName' => 'home'
        ]
    ]
])

<x-modal id="testModal" title="테스트">
    <p>
        모달 대화상자 테스트!
    </p>

    @slot('buttons')
        <button type="button" class="btn btn-primary">Do Something</button>
    @endslot
</x-modal>

<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#testModal">Launch Modal</button>


{{--
@component('templates.modal')
    @slot('id', 'testModal')
    @slot('title', 'Modal Test')

    <p>
        모달 대화상자 테스트!
    </p>

    @slot('buttons')
        <button type="button" class="btn btn-primary">Do Something</button>
    @endslot
@endcomponent --}}

@endsection


