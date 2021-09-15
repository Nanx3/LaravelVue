<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //index
    public function index() {
        $products = Product::all();
        return response()->json(compact('products'));
    }

    //store
    public function store(Request $request) {
        $product = Product::create($request->all());
        return response()->json(compact('product'));
    }

    //show
    public function show(Product $product) {
        return response()->json(compact('product'));
    }

    //update
    public function update(Product $product, Request $request) {
        $product = $product->update($request->all());
        return response()->json(compact('product'));
    }

    //destroy
    public function destroy(Product $product) {
        $product->delete();
        return response()->json(compact('product'));

    }
}
