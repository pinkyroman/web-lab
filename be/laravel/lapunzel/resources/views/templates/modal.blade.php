{{-- @component()에서 사용하기 위한 모달 대화상자 템플릿 --}}

<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" id="{{$id}}">
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
