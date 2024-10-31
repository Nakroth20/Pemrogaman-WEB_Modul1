<?php 
namespace Controller;

include "Traits/responseformatter.php";
include "controllers/Controller.php";

use Traits\ResponseFormatter;

class ProductController extends Controller{
    use ResponseFormatter;

    public function __construct(){
        $this->controllerName = "Get all product";
        $this->controllerMethod = "GET";
    }

    public function getAllProduct(){
        //array dummy data
        $dummyData = [
            "air mineral",
            "kebab",
            "spageti",
            "jus jambu"
        ];

        $response = [
            "controller_attribute" => $this->getControllerAttribute(),
            "product" => $dummyData
        ];

        return $this->responseFormatter(200, "Success", $response);
    }
}
?>