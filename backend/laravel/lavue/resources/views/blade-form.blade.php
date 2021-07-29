@extends("layouts.app")

@section("title", "Blade Form")

@section("content")
@php
class Album {
    protected $artist;
    protected $title;
    protected $releasedYear;

    public function __construct(string $artist = "", string $title = "", int $releasedYear = 1900) {
        $this->artist = $artist;
        $this->title = $title;
        $this->releasedYear = $releasedYear;
    }

    public function setReleasedYear(int $year) {
        $this->releasedYear =  $year;
    }
}

$currentYear = (int)((new DateTime())->format('Y'));

$currentAlbum = new Album();
$currentAlbum->setReleasedYear($currentYear);

$registeredAlbums = [];

$inputItems = [
    [
        "id" => "artistName",
        "type" => "text",
        "label" => "Artist Name:",
        "placeholder" => "enter an artist name here",
        "value" => "",
    ],
    [
        "id" => "albumTitle",
        "type" => "text",
        "label" => "Album Title:",
        "placeholder" => "enter the album title here",
        "value" => "",
    ],
    [
        "id" => "releasedYear",
        "type" => "number",
        "label" => "Released Year:",
        "placeholder" => $currentYear,
        "value" => $currentYear,
    ]
];

@endphp

<form clas="form-horizontal">
    @foreach ($inputItems as $item)
    <div class="form-group">
        <label for="{{$item['id']}}" class="col-sm-3 control-label"><b>{{$item['label']}}</b></label>
        <div class="col-sm-6">
            <input id="{{$item['id']}}" type="{{$item['type']}}" class="form-control" placeholder="{{$item['placeholder']}}" value="{{$item['value']}}">
        </div>
    </div>
    @endforeach

    <div class="form-group">
        <button type="button" class="btn btn-primary col-sm-3">
            <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> Register
        </button>
        <button type="button" class="btn btn-danger col-sm-3">Reset</button>
    </div>
</form>
@endsection
