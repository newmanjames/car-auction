<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\Auction;
use \App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'year' => $this->faker->year,
            'make' => $this->faker->company,
            'model' => $this->faker->word,
            'image_url' => "https://hips.hearstapps.com/hmg-prod/images/2026-ferrari-f80-118-670fcc5fb5218.jpg?crop=1.00xw:0.753xh;0,0.125xh&resize=1200:*",
            'description' => $this->faker->paragraph,
        ];
    }
}
