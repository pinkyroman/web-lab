@extends('layouts.app')

@section('title', 'Modal Example')

@section('contents')
<x-bs-modal id="exampleModal" title="모달 대화상자 예제">
    <p>
        Hello, World!
    </p>
    @slot('buttons')
        <button id="applyButton" class="btn btn-primary">Apply</button>
    @endslot
</x-bs-modal>

{{-- 모달 대화상자를 여는 버튼 --}}
@showBsModal([
    'id' => 'exampleModal',
    'class' => 'dark',
    'content' => 'Open Modal'
])

{{-- <a> 태그를 사용하여 모달 대화상자 열기 --}}
<a href="#" data-toggle="modal" data-target="#exampleModal">Open Modal by clicking this link</a>

<div id="app">
    <x-bs-modal id="vueModal" title="BS Modal + Vue" hideCloseButton>
        <example-component></example-component>

        @slot('buttons')
            <button id="acceptButton" class="btn btn-primary">Accept</button>
            <button id="reloadButton" class="btn btn-secondary">Reload</button>
        @endslot
    </x-bs-modal>
</div>

{{-- 모달 대화상자를 여는 버튼 --}}
@showBsModal([
    'id' => 'vueModal',
    'class' => 'danger',
    'content' => 'Open Modal'
])
@endsection

<script>
window.addEventListener('DOMContentLoaded', function() {
    console.log('document loaded.');
    // exampleModal
    let applyButton = document.getElementById('applyButton');
    if (applyButton != null) {
        applyButton.addEventListener('click', function () {
            console.log('apply button clicked !');
        });
    } else {
        console.log('failed to add event handler !');
    }

    // modal() 함수를 사용할 수 있는 것은 Bootstrap이 jQuery에 plug-in 했기 때문.
    $('#exampleModal').modal('show');
});
</script>
