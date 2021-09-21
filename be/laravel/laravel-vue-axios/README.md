# Laravel-Vue-Axios
참고 자료: [Handle HTTP requests in a Laravel Vue.js app with Axios](https://pusher.com/tutorials/laravel-vue-axios/)

> 참고 자료는 Laravel 8 이전 버전을 기준으로 되어 있으며, 이 문서는 8 버전을 기준으로 진행한다.
<hr/>
<br>


## 프로젝트 생성
```
$ laravel new laravel-vue-axios
```
<hr/>
<br>


## Bootstarp 설치
```
$ composer require laravel/ui
$ php artisan ui bootstarp
```
<hr/>
<br>

## Vue 및 Vuex 패키지 설치
```
$ php artisan ui vue
$ npm install vuex --save
$ npm install && npm run dev
$ npm run dev (한 번 더)
```
<hr/>
<br>

## PHP 개발 서버 실행
```
$ php artisan serve
```
<hr/>
<br>

## 데이터베이스 셋업
<br>

### 데이터베이스 생성 (MySQL 기준)
- laravel-vue-axios 라는 이름의 DB를 생성한다.
- .env 설정 파일을 접속할 MySQL에 맞게 수정한다.
```
// .env
...

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_vue_axios
DB_USERNAME=root
DB_PASSWORD=root.123

...
```
<br>

### 모델 생성
```
$ php artisan make:model Post -mc
```
> -mc 플래그는 마이그레이션 파일 및 PostController 라는 이름의 컨트롤러까지 생성하라는 의미.

생성된 모델 파일(```app/Models/Post.php```)에 다음과 같이 ```fillable``` 멤버 변수를 추가해 주도록 한다:
```
// app/Models/Post.php

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'content'];

}
```
<br>

### 마이그레이션 파일 수정
``` 
// database/migration/YYYY_MM_DD_xxxxxx_create_posts_table.php

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
```
<br>

### 마이그레이션 수행 (posts 테이블 생성)
```
$ php artisan migrate
```
커맨드 실행 후, DB에 테이블이 제대로 생성되었는지 확인한다.
<br>

### 샘플 데이터 추가하기 (Seeding)
```
$ php artisan make:factory PostFactory --model=Post
```

```database/factories/PostFactory.php``` 파일의 ```definition()``` 메서드를 다음과 같이 수정한다:

```
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3, true),
            'content' => $this->faker->realText($this->faker->numberBetween(10, 100))
        ];
    }
```

```database/seeders/DatabaseSeeder.php``` 파일의 run() 메서드를 다음과 같이 수정한다:
```
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\Post::factory(15)->create();
    }
```

다음의 커맨드를 실행한 후, DB실제 샘플 데이터가 생성되었는지 확인한다.
```
$ php artisan db:seed
```
<hr/>
<br>

## 라우트 및 컨트롤러 기능 구현
```
// routes/web.php

Route::get('/', [PostController::class, 'index']);
```
```
// routes/api.php

Route::post('posts', [PostController::class, 'store']);
Route::get('posts', [PostController::class, 'get']);
Route::delete('posts/{id}', [PostController::class, 'delete']);
```
```
// app/Http/Controllers/PostController.php

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        return view('posts');
    }

    public function get(Request $request) {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }

    public function store(Request $request) {
        $post = Post::create($request->all());

        return response()->json($post);
    }

    public function delete($id) {
        Post::destroy($id);

        return response()->json("ok");
    }
}

```
<hr/>
<br>

## Vuex 를 이용한 상태(state) 관리
Vuex는 앱의 상태를 중앙 집중식으로 관리할 수 있도록 해 준다. [공식 정의](https://vuex.vuejs.org/)에 따르면, Vuex는:
> Vue.js 어플리케이션을 위한 상태 관리 패턴 + 라이브러리. 이는 상태가 예측 가능한 방식으로만 변경될 수 있도록 하는 규칙과 함께 어플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 한다.
<br>

즉, 모든 컴포넌트 간에 공유할 수 있는 데이터의 유일한 소스(중앙 집중식)가 있으며, 데이터에 대한 모든 변경 사항은 앱의 모든 단일 구성요소를 통해 잘 감독되고 반영된다.

<img src="https://vuex.vuejs.org/vuex.png" width="640px" height="480px" title="Vuex" alt="Vuex"></img><br/>
<br>

### 상태(state) 생성
Vuex 상태는 모든 어플리케이션 데이터를 담고 있는 단일 객체다. 
```
// resources/js/store/state.js

let state = {
    posts: []
}

export default state;
```
<br>

### getters 정의
```getters```는 데이터 저장소의 계산된 속성(computed property) 같은 것이다. ```getters```의 도움으로, 데이터 저장소 상태를 기반으로 파생된 것을 계산할 수 있다.

```
// resources/js/store/getters.js

let getters = {
    posts: state => {
        return state.posts;
    }
};

export default getters;
```
<br>

### mutations 정의
공식 문서의 설명에 따르면, ```mutations```를 통해 데이터 일부에 변경을 수행할 수 있다. 다음은 공식 문서의 내용이다:
> Vuex 저장소에서 실제로 상태를 변경하는 유일한 방법은 ```mutations```를 커밋(commit)하는 것이다. Vuex ```mutations```는 이벤트와 매우 유사하다. 각 ```mutation```은 문자열 타입과 핸들러를 가지고 있다. 핸들러 함수는 실제 상태 수정을 수행하는 곳이며, 상태를 첫 번째 인수로 받는다.

```
// resources/js/store/mutations.js

let mutations = {
    CREATE_POST(state, post) {
        state.posts.unshift(post);
    },
    FETCH_POSTS(state, posts) {
        return state.posts = posts;
    },
    DELETE_POST(state, post) {
        let index = state.posts.findIndex(item => item.id === post.id);
        state.posts.splice(index, 1);
    }
}

export default mutations;
```
위의 코드에 정의된 ```mutations``` 객체는 세 개의 함수를 가지고 있고, 각 함수는 상태 객체(state)를 첫 번째 인자로 받는다.

<br>

### actions 정의
```actions```는 ```mutations```와 비슷하지만, 다음에 있어 차이점을 갖는다:
* 상태를 변경하는 대신, ```actions```는 ```mutations`를 커밋(commit)한다.
* ```actions```는 임의의 비동기 작업을 포함할 수 있다.

API를 사용한 중앙 집중식 데이터 관리 구현에 있어 가장 중요한 부분이다. Vuex ```actions```를 사용하면 우리의 데이터에 대해 비동기 작업을 수행할 수 있으며, 이때 Axios를 사용하게 된다. 즉, Axios 를 이용하여 비동기 API 호출을 처리할 수 있다는 것이다. 

```
// resources/js/store/actions.js

let actions = {
    createPost({commit}, post) {
        axios.post('/api/posts', post)
            .then(res => {
                commit('CREATE_POST', res.data);
            }).catch(err => {
                console.log(err);
            });
    },
    fetchPosts({commit}) {
        axios.get('/api/posts')
            .then(res => {
                commit('FETCH_POSTS', res.data);
            }).catch(err => {
                console.log(err);
            });
    },
    deletePost({commit}, post) {
        axios.delete(`/api/posts/${post.id}`)
            .then(res => {
                if (res.data === 'ok') {
                    commit('DELETE_POST', post);
                }
            }).catch(err => {
                console.log(err);
            });
    }
}

export default actions;
```
<br>

### Vue에 저장소 셋업
```
// resources/js/store/index.js

import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
```
<br>

### Vue 인스턴스에 저장소 추가하기
```
// resources/js/app.js

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import store from './store/index';

Vue.component('posts', require('./components/Posts.vue'))
Vue.component('createPost', require('./components/CreatePost.vue'))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store
});
```
<hr/>
<br>

## Vue 컴포넌트 만들기
<br>

### Posts.vue 컴포넌트 만들기
```
// resources/js/components/Posts.vue

<template>
  <div>
    <h4 class="text-center font-weight-bold">Posts</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>
            <button class="btn btn-danger" @click="deletePost(post)">
              <i style="color:white" class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Posts",
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
  methods: {
    deletePost(post) {
      this.$store.dispatch("deletePost", post);
    },
  },
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>

<style scoped></style>
```
<br>

### CreatePost.vue 컴포넌트 만들기
```
// resources/js/components/CreatePost.vue

<template>
    <form action="" @submit="createPost(post)">
        <h4 class="text-center font-weight-bold">Post creation form</h4>
        <div class="form-group">
            <input type="text" placeholder="Post title" v-model="post.title" class="form-control">

        </div>
        <div class="form-group">
            <textarea v-model="post.content" placeholder="Post content" class="form-control">

            </textarea>
        </div>
        <div class="form-group">
            <button :disabled="!isValid" class="btn btn-block btn-primary" @click.prevent="createPost(post)">Submit
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "CreatePost",
        data() {
            return {
                post: {
                    title: '',
                    content: ''
                }
            }
        },
        methods: {
            createPost(post) {
                this.$store.dispatch('createPost', post)
            }
        },
        computed: {
            isValid() {
                return this.post.title !== '' && this.post.content !== ''
            }
        }
    }
</script>

<style scoped>

</style>
```
<hr/>
<br>

## 어플리케이션 마무리 하기
<br>

### posts.blade.php 만들기
```
// resources/views/posts.blade.php

<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel Vue.js app</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link rel="stylesheet" href="{{mix('css/app.css')}}">

    <!-- Styles -->
    <style>
        html, body {
            padding: 45px;
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
{{--<div class="flex-center position-ref full-height">--}}

<div id="app">

    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <create-post></create-post>

            </div>
            <div class="col-md-7">
                <posts></posts>

            </div>
        </div>
    </div>


</div>

{{--</div>--}}

<script async src="{{mix('js/app.js')}}"></script>
</body>
</html>
```
