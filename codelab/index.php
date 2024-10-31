<?php 
include "Controllers/productController.php";

use Controller\ProductController;
$productController = new ProductController;
echo $productController -> getAllProduct();
?>