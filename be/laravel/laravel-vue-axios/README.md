# Laravel-Vue-Axios
참고 자료: [Handle HTTP requests in a Laravel Vue.js app with Axios](https://pusher.com/tutorials/laravel-vue-axios/)

> 참고 자료는 Laravel 8 이전 버전을 기준으로 되어 있으며, 이 문서는 8 버전을 기준으로 진행한다.
<hr/>

## 프로젝트 생성
```
$ laravel new laravel-vue-axios
```
<hr/>

## Bootstarp 설치
```
$ composer require laravel/ui
$ php artisan ui bootstarp
```
<hr/>

## Vue 및 Vuex 패키지 설치
```
$ php artisan ui vue
$ npm install vuex --save
$ npm install && npm run dev
$ npm run dev (한 번 더)
```
<hr/>

## PHP 개발 서버 실행
```
$ php artisan serve
```
<hr/>

## 데이터베이스 셋업

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

### 모델 생성
```
$ php artisan make:model Post -mc
```
> -mc 플래그는 마이그레이션 파일 및 PostController 라는 이름의 컨트롤러까지 생성하라는 의미.

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

### 마이그레이션 수행 (posts 테이블 생성)
```
$ php artisan migrate
```
커맨드 실행 후, DB에 테이블이 제대로 생성되었는지 확인한다.

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
