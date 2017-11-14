(function () {
    angular
        .module("BlogApp", [])
        .controller("BlogController", BlogController);
    
    function BlogController($scope) {
        $scope.createPost = createPost;
        
        function createPost() {
            console.log("createPost");
        }

    }
})();