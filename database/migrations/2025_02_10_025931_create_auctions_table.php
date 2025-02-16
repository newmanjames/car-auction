<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('auctions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_id')->constrained()->onDelete('cascade'); // Foreign key for Car
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Foreign key for User
            $table->decimal('current_bid', 10, 2); // Start bid amount (decimal with 2 decimals)
            $table->decimal('start_bid', 10, 2); // Start bid amount (decimal with 2 decimals)
            $table->decimal('buyout_price', 10, 2); // Buyout price (decimal with 2 decimals)
            $table->boolean('no_reserve')->default(true); // Bool to check if there's a reserve
            $table->decimal('reserve_amount', 10, 2)->nullable(); // Reserve amount if `has_reserve` is true
            $table->timestamp('start_time'); // Start time for the auction
            $table->timestamp('end_time'); // End time for the auction
            $table->enum('status', ['pending', 'active', 'closed', 'cancelled'])->default('pending'); // Auction status
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auctions');
    }
};
