<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


class ItemController extends Controller
{
   public function index()
{
    // すべての商品を取得
    $products = Product::all();

    // ビューに渡す変数名も products に変更
    return view('products.index', compact('products'));
}
public function search(Request $request)
{
    $keyword = $request->input('keyword');

    // 検索処理のサンプル（必要に応じて変更）
    $products = Product::where('name', 'like', "%{$keyword}%")->get();

    return view('products.index', compact('products'));
}

}
