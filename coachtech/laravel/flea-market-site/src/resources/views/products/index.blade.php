@extends('layouts.app')

@section('css')
<link rel="stylesheet" href="{{ asset('css/index.css') }}">
@endsection
@section('content')
<div class="container">
    <button class="tab-btn active" id="recommend-tab">おすすめ</button>
        <button class="tab-btn" id="mylist-tab">マイリスト</button>
</div>

<!-- おすすめ一覧 -->
    <div class="product-list" id="recommend-list">
        {{-- 例：おすすめ商品を表示 --}}
        @foreach ($products as $item)
            <div class="product-card">
                <div class="product-image">
                    @if ($item->image_path)
                        <img src="{{ asset('storage/' . $item->image_path) }}" alt="{{ $item->name }}">
                    @else
                        商品画像
                    @endif
                </div>
                <div class="product-name">{{ $item->name }}</div>
            </div>
        @endforeach
    </div>

    <!-- マイリスト一覧 -->
    <div class="product-list" id="mylist-list" style="display: none;">
        {{-- 例：マイリスト商品を表示 --}}
        @foreach ($mylistItems ?? [] as $item)
            <div class="product-card">
                <div class="product-image">
                    @if ($item->image_path)
                        <img src="{{ asset('storage/' . $item->image_path) }}" alt="{{ $item->name }}">
                    @else
                        商品画像
                    @endif
                </div>
                <div class="product-name">{{ $item->name }}</div>
            </div>
        @endforeach
    </div>
</div>
@endsection

@section('css')
<link rel="stylesheet" href="{{ asset('css/index.css') }}">
@endsection

@section('js')
<script>
    // タブ切り替え処理
    const recommendTab = document.getElementById('recommend-tab');
    const mylistTab = document.getElementById('mylist-tab');
    const recommendList = document.getElementById('recommend-list');
    const mylistList = document.getElementById('mylist-list');

    recommendTab.addEventListener('click', () => {
        recommendTab.classList.add('active');
        mylistTab.classList.remove('active');
        recommendList.style.display = 'flex';
        mylistList.style.display = 'none';
    });

    mylistTab.addEventListener('click', () => {
        mylistTab.classList.add('active');
        recommendTab.classList.remove('active');
        mylistList.style.display = 'flex';
        recommendList.style.display = 'none';
    });
</script>
@endsection