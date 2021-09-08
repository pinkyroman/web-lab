@extends('layouts.app')

@section('contents')
@include('templates.menu', [
    'title' => 'Blade Template Courses',
    'items' => [
        [
            'name' => 'Implement Bootstrap Modal by Using @component()',
            'routeName' => 'blade-template.bs-modal.home'
        ],
        [
            'name' => '@extends(...)',
            'routeName' => 'blade-template.home'
        ]
    ]
])


{{-- @component('templates.modal')
    @slot('id', 'componentModal')
    @slot('title', 'Implementing Modal with Component')
 --}}
@component('templates.modal', [
    'id' => 'componentModal',
    'title' => 'Implementing Modal with Component'
])
    {{-- 아래의 코드가 template.modal의 {{$slot}} 에 임베딩 됨. --}}
    <p>
        블레이드 템플릿의 @@component()를 사용하여 모달 대화상자 구현하기.
    </p>

    @slot('buttons')
        <button type="button" class="btn btn-primary">Do Something</button>
    @endslot
@endcomponent

<x-bs-modal id="testModal" title="테스트">
    <p>
        블레이드의 커스텀 컴포넌트를 사용하여 모달 대화상자 구현하기.
    </p>

    @slot('buttons')
        <button type="button" class="btn btn-primary">Do Something</button>
    @endslot
</x-bs-modal>

{{-- HTML을 사용하여 모달 대화상자 열기 --}}
<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#componentModal">Launch Modal</button>

{{-- 커스텀 블레이드 디렉티브를 사용하여 모달 대화상자 열기 --}}
@showBsModal([
    'id' => 'testModal',
    'class' => 'dark',
    'content' => 'Launch Modal Again'
])
@endsection
