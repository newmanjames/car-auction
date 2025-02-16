<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Car;
use App\Models\User;
use App\Models\Auction;
use App\AuctionStatus;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Auction>
 */
class AuctionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Auction::class;
    public function definition(): array
    {


        return [
            'car_id' => Car::factory(), // Creates a related car using the Car factory
            'user_id' => User::factory(), // Creates a related user using the User factory
            'current_bid' => $this->faker->randomFloat(2, 1000, 50000), // Random current bid between 1000 and 50000
            'start_bid' => $this->faker->randomFloat(2, 1000, 50000), // Random start bid between 1000 and 50000
            'buyout_price' => $this->faker->randomFloat(2, 5000, 100000), // Random buyout price between 5000 and 100000
            'no_reserve' => $this->faker->boolean, // Random boolean for reserve
            'reserve_amount' => $this->faker->randomFloat(2, 3000, 80000), // Random reserve amount between 3000 and 80000
            'start_time' => $this->faker->dateTimeBetween('now', '+1 month'), // Random start time within the next month
            'end_time' => $this->faker->dateTimeBetween('+1 month', '+2 months'), // Random end time within 2 months
            'status' => AuctionStatus::Active, // Set to Active by default
        ];
    }
}
