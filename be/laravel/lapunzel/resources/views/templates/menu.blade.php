<h1>{{ $title }}</h1>
<ul>
    @each('templates.menu-item', $items, 'item')

    @if (url()->current() != route('home'))
        <li><a href="{{ route('home') }}">Home</a></li>
    @endif
</ul>

