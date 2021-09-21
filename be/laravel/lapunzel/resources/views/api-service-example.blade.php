@extends('layouts.app')

@section('title', 'API Service Example')

@section('contents')
    <div id="app">
        <p>
            Hello, World!
        </p>
        <ul>
            <li v-for="task in tasks" :key="task.id" v-cloak>
                {{--
                    블레이트 템플릿과 Vue 템플릿이 섞이면,
                    불편한 이유 중 하나가, 바로 아래의 코드.
                    @를 사용하여 Vue 의 템플릿임을 매번 알려 주어야 함.
                --}}
                @{{task.title}}
            </li>
        </ul>
        <button type="button" class="btn btn-primary" @click="addTask">Add</button>
    </div>
@endsection

@push('scripts')
<script>
new Vue({
    el: '#app',
    // components: [''],
    data: {
        tasks: null,
    },
    mounted() {
        // URL에 스킴(http://)을 반드시 포함해 주어야 한다.
        // 안 그러면, CORS 정책을 통과할 수 없음.
        axios.get('http://localhost:8000/api/tasks').then((response) => {
            this.tasks = response.data;
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    },
    methods: {
        addTask() {
            axios.post('http://localhost:8000/api/tasks').then((response) => {
                this.tasks = response.data;
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
})
</script>
@endpush
