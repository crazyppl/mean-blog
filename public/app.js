(function () {
    angular
        .module("BlogApp", [])
        .controller("BlogController", BlogController);
    
    function BlogController($scope, $http) {
        $scope.createPost = createPost;
        $scope.deletePost = deletePost;

        function init() {
            getAllPosts();
        }
        init();

        function deletePost(postId) {
            $http
                .delete("/api/blogpost/"+ postId)
                .then(getAllPosts);
        }
        
        function getAllPosts() {
            $http
                .get("/api/blogpost")
                .then(function (posts) {
                    $scope.posts = posts.data;
                });
        }
        
        function createPost(post) {
            console.log(post);
            $http
                .post("/api/blogpost", post)
                .then(getAllPosts);

        }

    }
})();