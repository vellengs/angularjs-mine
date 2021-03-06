angular.module('mine.services', [])
  .factory('navigation', function ($http, $rootScope) {
    return {
      goBack: function () {

      },
      login: function () {
      }
    };
  })
  .factory('service', function ($http, $q, $rootScope) {
    var handle = {
      get: function (apiPath, apiName) {
        var deferred = $q.defer();
        $http.get(apiPath, config).success(function (data) {
          if (data.ResultCode == 0) {
            if (data.Data.model) {
              deferred.resolve(data.Data.model);
            } else {
              deferred.resolve(data.Data);
            }
          } else {
            deferred.reject(data.ResultMessage);
          }
        }).error(function (error) {
          deferred.reject(error.Message);
          if (error.Message) {
            location.href = pathname + "#login";
          }
        });
        return deferred.promise;
      },
      add: function (apiPath, entry, apiName) {
        var deferred = $q.defer();
        $http.post(apiPath, entry, config).success(function (data) {
          if (data.ResultCode == 0) {
            deferred.resolve(true)
          } else {
            deferred.reject(data.ResultMessage);
          }
        }).error(function (error) {
          if (error.Message) {
            deferred.reject(error.Message);
          }
          deferred.reject("An error occurred while " + apiName + ".");
        });
        return deferred.promise;
      },
      update: function (apiPath, entry, apiName) {
        var deferred = $q.defer();
        $http.put(apiPath, entry, config).success(function (data) {
          if (data.ResultCode == 0) {
            deferred.resolve(true);
          } else {
            deferred.reject(data.ResultMessage);
          }
        }).error(function (error) {
          if (error.Message) {
            deferred.reject(error.Message);
          }
          deferred.reject("An error occurred while " + apiName + ".");
        });
        return deferred.promise;
      },
      "delete": function (apiPath, ids, apiName) {
        var deferred = $q.defer();
        if (Object.prototype.toString.call(ids) === '[object Array]') {
          apiPath = apiPath + ids.join(',');
        } else if (typeof ids === "string") {
          apiPath = apiPath + ids;
        }
        $http.delete(apiPath, config).success(function (data) {
          if (data.ResultCode == 0) {
            deferred.resolve(true);
          } else if (data.ResultMessage) {
            deferred.reject(data.ResultMessage);
          } else {
            deferred.reject(data.Message);
          }
        }).error(function (error) {
          if (error.Message) {
            deferred.reject(error.Message);
          } else if (error.ResultMessage) {
            deferred.reject(error.ResultMessage);
          } else {
            deferred.reject("An error occurred while " + apiName + ".");
          }
        });
        return deferred.promise;
      }
    };
    return {};
  });