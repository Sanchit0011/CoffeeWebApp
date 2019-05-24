app.controller('indexController', function ($scope, $http, $q, $timeout) {

window.addEventListener('online', () => location.reload());
window.addEventListener('offline', () => document.write("No Internet access"));

    $scope.addcakeSandNew = function (cakeSandNew) {

        var alreadyExist = true;

        for (i in $scope.cakesands) {
            if ($scope.cakesands[eval(i)].name == cakeSandNew.name) {
                alreadyExist = false;
                break;
            }
        }

        if (alreadyExist) {
            $http({
                method: 'POST',
                url: "/api/cakesandwich",
                data: cakeSandNew
            }).then(function (response) {
                $scope.modalHeader = "Notification"
                $scope.modalBody = response.data;
                angular.element('#myModalShower').trigger('click');
                $scope.cakeSandNew.name = "";
                $scope.cakeSandNew.status = "";
                $scope.getCakeSand();
            })
        } else {

            $scope.modalHeader = "Error"
            $scope.modalBody = cakeSandNew.name + " already Exist";
            angular.element('#myModalShower').trigger('click');
        }
    };

    $scope.addStaff = function (staffNewData) {

        $http({
            method: 'POST',
            url: "http://localhost:3000/api/staff",
            data: staffNewData
        }).then(function (response) {
            $scope.modalHeader = "Notification"
            $scope.modalBody = response.data;
            angular.element('#myModalShower').trigger('click');
            $scope.staffNew.name = "";
            $scope.staffNew.password = "";
            $scope.getStaff();
        })

    };

    $scope.delStaff = function (staffID) {
        if (staffID)
            $http({
                method: 'DELETE',
                url: "http://localhost:3000/api/staff/" + staffID,
            }).then(function (response) {
                $scope.modalHeader = "Notification";
                $scope.modalBody = response.data;
                angular.element('#myModalShower').trigger('click');
                $scope.getStaff();
            })

    };

    $scope.getStaff = function () {
        $http({
            method: 'GET',
            url: "http://localhost:3000/api/staff"
        }).then(function successCallback(response) {
            $scope.staffs = [];
            $scope.staffs = response.data;
        })
    };

    $scope.getCakeSand = function () {
        $http({
            method: 'GET',
            url: "http://localhost:3000/api/cakesandwich"
        }).then(function successCallback(response) {
            $scope.cakesands = [];
            $scope.cakesands = response.data;
        })
    };


    $scope.updateCakeSand = function (myid, myname, mystatus) {
        if (myid && myname && mystatus)
            $http({
                method: 'PUT',
                url: "http://localhost:3000/api/cakesandwich/" + myid,
                data: {
                    name: myname,
                    status: mystatus
                }
            }).then(function (response) {
                $scope.modalHeader = "Notification";
                $scope.modalBody = response.data;
                angular.element('#myModalShower').trigger('click');
                $scope.getCakeSand();
            })

    }

    $scope.getAllOrders = function () {
        $http({
            method: 'GET',
            url: "http://localhost:3000/api/orders"
        }).then(function successCallback(response) {
            $scope.orders = [];
            $scope.orders = response.data;
            return $scope.orders;
        })
    };

    $scope.logout = function () {

        window.location = "http://localhost:3000/";

    }

    $scope.goStaff = function (login) {
        if (login.id && login.pass) {
            loginURL = "http://localhost:3000/api/staff/" + login.id + "/" + login.pass

            $http({
                method: 'GET',
                url: loginURL
            }).then(function successCallback(response) {
                if (response.data == "manager") {

                    window.location = "http://localhost:3000/manager";

                } else if (response.data != "Invalid") {

                    window.location = "http://localhost:3000/staff";

                } else {
                    $scope.modalHeader = "Error";
                    $scope.modalBody = "Invalid login details";
                    angular.element('#myModalShower').trigger('click');
                }
            })
        }
    }
    $scope.buyItem = function (itemData) {

        if (itemData.size) {
            angular.element('#myModalShowerl').trigger('click');
            $timeout(function () {

                $http({
                    method: 'POST',
                    url: "http://localhost:3000/api/orders",
                    data: itemData
                }).then(function (response) {
                    let promiseOne = $http({
                        method: 'GET',
                        url: "http://localhost:3000/api/orders"
                    }).then(function successCallback(response) {
                        $scope.orders = response.data;
                        angular.element('#myModalShowerl').trigger('click');
                    })

                    $q.all([promiseOne]).then(data => {

                        $scope.modalHeader = "Notification";
                        array = [];
                        for (i in $scope.orders) {
                            array.push($scope.orders[i].orderid);
                        }
                        $scope.modalBody = "Item ordered: " + itemData.name + ", " + "Please wait for order to be prepared. Your order ID is: " + Math.max.apply(Math, $scope.orders.map(function (item) {
                            return item.orderid;
                        }));
                        angular.element('#myModalShower').trigger('click');
                    });
                })

            }, 1000);

        } else if (itemData.isFood) {
            itemData.size = "Regular"
            angular.element('#myModalShowerl').trigger('click');
            $timeout(function () {
                $http({
                    method: 'POST',
                    url: "http://localhost:3000/api/orders",
                    data: itemData
                }).then(function (response) {
                    let promiseOne = $http({
                        method: 'GET',
                        url: "http://localhost:3000/api/orders"
                    }).then(function successCallback(response) {
                        $scope.orders = response.data;
                        angular.element('#myModalShowerl').trigger('click');
                    })

                    $q.all([promiseOne]).then(data => {
                        $scope.modalHeader = "Notification"
                        array = []
                        for (i in $scope.orders) {
                            array.push($scope.orders[i].orderid);
                        }
                        $scope.modalBody = "Item ordered: " + itemData.name + ", " + "Please wait for order to be prepared. Your order ID is: " + Math.max.apply(Math, $scope.orders.map(function (item) {
                            return item.orderid;
                        }));
                        angular.element('#myModalShower').trigger('click');
                    });
                })

            }, 1000);
        }

    }
})