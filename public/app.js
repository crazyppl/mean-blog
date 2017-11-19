(function () {
    angular
        .module("BlogApp", [])
        .controller("BlogController", BlogController);
    
    function BlogController($scope, $http) {
        $scope.createPost = createPost;
        $scope.deletePost = deletePost;
        $scope.editPost = editPost;
        $scope.updatePost = updatePost;

        function init() {
            getAllPosts();
        }
        init();

        function updatePost(post) {
            $http
                .put("/api/blogpost/"+ post._id, post)
                .then(getAllPosts);
        }

        function editPost(postId) {
            $http
                .get("/api/blogpost/" + postId)
                .then(function (post) {
                    $scope.post = post.data;
                });
        }

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