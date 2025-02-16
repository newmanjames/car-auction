<?php

namespace App\Http\Controllers;

use App\AuctionStatus;
use App\Models\Auction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $carList = [];

        $activeAuctions = Auction::where('status', AuctionStatus::Active)
            ->orderBy('start_time', 'asc')
            ->with('car')
            ->get();


        return Inertia::render('HomePage', [
            "auctionList" => $activeAuctions
        ]);
    }
}
