<h1>{{ $title }}</h1>
<ul>
    @each('templates.menu-item', $items, 'item')
</ul>

@if (url()->current() != route('home'))
<p>
    Return to <a href="{{ route('home') }}">Home</a>
</p>
@endif
