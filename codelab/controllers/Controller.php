<?php 
namespace Controller;

class Controller{
    //variabel attributes
    var $controllerName;
    var $controllerMethod;

    //method untuk mengambil semua atribut
    public function getControllerAttribute(){
        return [
            "ControllerName" => $this->controllerName,
            "Method" => $this->controllerName,
        ];
    }
}
?>