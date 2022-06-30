<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'title',
        'description',
        'address',
        'price',
        'kilo',
        'product_image',
    ];

    public function farmer()
    {
        return $this->belongsTo(Farmers::class);
    }

    public function comments()
    {
        return $this->hasMany(Comments::class);
    }
}
