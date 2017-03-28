(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app=angular.module('myapp',[])
	app.controller('con',['$scope','$location',function($scope,$location){
		 $scope.todos = [

                        ]


//添加数据
          $scope.newTodo='';
          $scope.add=function(){
          	if(!$scope.newTodo){
          		return
          	}
          	$scope.todos.push({
          		id:Math.random(),
          		name:$scope.newTodo,
          		completed:false
          	})
          	$scope.newTodo=''
            var aa=document.getElementByClassName('todo-list');
            console.log(aa);

          }

      //删除数据

      $scope.remove=function(id){
          for(var i=0;i<$scope.todos.length;i++){
               var item=$scope.todos[i]
               if(item.id===id){
                    $scope.todos.splice(i,1)
                    return
               }
          }
      }


      //添加数据
      $scope.isEditingId=-1;
      $scope.edit=function(id){
        $scope.isEditingId=id;
      }

      //保存添加数据
      $scope.save=function(){
           $scope.isEditingId=-1;
      }



        //修改任务状态栏
   $scope.selectAll=false;
   $scope.toggleAll=function(){
     for(var i=0;i<$scope.todos.length;i++){
          var item=$scope.todos[i];
          item.completed=$scope.selectAll
     }
   }


     //计数

     $scope.adt=function(){
          var n=0;
          for(var i=0;i<$scope.todos.length;i++){
          var item=$scope.todos[i];
          if(!item.completed){
               n++
          }
     }
        return n;
     }


     //删除已经标记过得
     $scope.clear=function(){
         for(var i=$scope.todos.length-1;i>=0;i--){
              var item=$scope.todos[i];
              if(item.completed){
                   $scope.todos.splice(i,1)
              }
        }
     }



   $scope.iscomplted={};

   //点击已经完成的
   $scope.all=function(){
    $scope.iscomplted={};
   }


   $scope.Active=function(){
    $scope.iscomplted={completed:false};
   }


   $scope.Completed=function(){
    $scope.iscomplted={completed:true};
   }


   $scope.loc=$location
   $scope.$watch('loc.url()',function(now,old){
    switch (now){
        case '/active':
          $scope.iscomplted={completed:false}
          break;
        case '/completed':
          $scope.iscomplted={completed:true}
          break;
        default:
          $scope.iscomplted={}
      }

   })

	}])







})(window);
