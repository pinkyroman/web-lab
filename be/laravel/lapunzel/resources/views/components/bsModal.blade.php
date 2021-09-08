{{-- <x-bs-modal> 사용자 컴포넌트의 뷰  --}}

<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" {{$attributes}}>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{$title}}</h5>
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>

            <div class="modal-body">
                {{$slot}}
            </div>

            <div class="modal-footer">
                {{$buttons}}
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
