<?php

namespace App\Models;

use App\AuctionStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Auction extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_id',
        'user_id',
        'current_bid',
        'start_bid',
        'buyout_price',
        'has_reserve',
        'reserve_amount',
        'start_time',
        'end_time',
        'status'
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'has_reserve' => 'boolean',
        'status' => AuctionStatus::class
    ];

    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function bids(): HasMany
    {
        return $this->hasMany(Bid::class);
    }

    // Calculate remaining time dynamically
    public function getRemainingTimeAttribute(): ?string
    {
        $remainingTime = $this->end_time->diffForHumans(now(), ['short' => true, 'syntax' => \Carbon\CarbonInterface::DIFF_ABSOLUTE]);
        return $remainingTime;
    }

    public function getStatusLabelAttribute(): string
    {
        return $this->status->label();  // Returns the human-readable label
    }
}
