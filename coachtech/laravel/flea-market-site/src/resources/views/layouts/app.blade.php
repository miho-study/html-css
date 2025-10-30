<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>フリマアプリ</title>
    <link rel="stylesheet" href="{{ asset('css/sanitize.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/common.css') }}" />
    @yield('css')
</head>
<header class="header">
    <div class="header__inner">
        <div class="header-utilities">
            <a href="/" class="header__logo">Todo</a>
            <ul class="header-nav">
                <li class="header-nav__item">
                    <a class="header-nav__link" href="/categories">カテゴリ一覧</a>
                </li>
                <li class="header-nav__item">
                    <form method="POST" action="{{ route('logout') }}" class="header-nav__form">
                        @csrf
                        <button type="submit" class="header-nav__link">ログアウト</button>
                    </form>
                </li>
                <li class="header-nav__item">
                    <a class="header-nav__link" href="{{ route('register') }}">新規登録</a>
                </li>
            </ul>
        </div>
    </div>
</header>


    <main>
        @yield('content')
    </main>
</body>

</html>