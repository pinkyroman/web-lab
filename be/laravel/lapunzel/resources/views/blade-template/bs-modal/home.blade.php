@extends('layouts.app')

@push('styles')
{{-- Bootstrap의 Navbar에 fixed-top 설정을 하면, 표시하는 페이지 상단을 가리므로 패딩을 추가 --}}
{{-- 다른 방법으로는 <body class="pt-5"> 설정 --}}
body {
    padding-top: 70px;
}
@endpush

@section('contents')
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<pre>
    sfasdjflsadkljfsadlkjfskaldj<br>
    sadlfkjsadkljf<br>
    ssadlkjfslakdjf<br>
    asdflkjsladkjflksad<br>
    fsdfsafsd<br>
<br>
    fsdfds<br>
<br>
    fdfdfsdf<br>
<br>
    fxxcxcxcx<br>
    sfasdjflsadkljfsadlkjfskaldj<br>
    sadlfkjsadkljf<br>
    ssadlkjfslakdjf<br>
    asdflkjsladkjflksad<br>
    fsdfsafsd<br>
<br>
    sfasdjflsadkljfsadlkjfskaldj<br>
    sadlfkjsadkljf<br>
    ssadlkjfslakdjf<br>
    asdflkjsladkjflksad<br>
    fsdfsafsd<br>
<br>
    fsdfds<br>
<br>
    fdfdfsdf<br>
<br>
    fxxcxcxcx<br>
    sfasdjflsadkljfsadlkjfskaldj<br>
    sadlfkjsadkljf<br>
    ssadlkjfslakdjf<br>
    asdflkjsladkjflksad<br>
    fsdfsafsd<br>

</pre>
@endsection
