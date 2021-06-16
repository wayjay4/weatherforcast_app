<?php

namespace Database\Factories;

use App\Models\Weatherforcast;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class WeatherforcastFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Weatherforcast::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'date' => $this->faker->unique->dateTimeBetween('+0 days', '+14 days'),
            'temperature' => $this->faker->numberBetween(70,110),
        ];
    }
}
