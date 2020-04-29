


app.config(function($routeProvider,$locationProvider) {
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.
      when('/home/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/home/index.html';
            },
         controller: 'homeController'   
      
      }).

      when('/videos/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/videos/index.html';
            },
            controller: 'videosController'   
      
      }).

      when('/videos/:playlist/:videoCode/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/videos/index.html';
            },
            controller: 'videosController'   
      
      }).
      
      when('/home/:lang/:changePassLink', {
        templateUrl: function(urlattr){
        				 
                return 'content/'+ urlattr.lang + '/home/index.html';
            },
         controller: 'homeController'   
      
      }).
      
      when('/home/:lang/register/:registerPassLink', {
        templateUrl: function(urlattr){
        				 
                return 'content/'+ urlattr.lang + '/home/index.html';
            },
         controller: 'homeController'   
      
      }).

      when('/home/:lang/redirect/:topage', {
        templateUrl: function(urlattr){
        				 
                return 'content/'+ urlattr.lang + '/home/index.html';
            },
         controller: 'homeController'   
      
      }).

      
      when('/company/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/company/index.html';
            }
      
      }).
      
      
      when('/contact/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/contact/index.html';
            },
          controller: 'contactController'  
      
      }).

      when('/contact/:office/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/contact/index.html';
            },
          controller: 'contactController'  
      
      }).

      when('/contact_guide/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/contact/contact_guide.html';
            } 
      
      }).

      when('/downloads/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/downloads/index.html';
            },
          controller: 'downloadsController'  
      
      }).

      
      
      when('/news/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/news/index.html';
            },
        controller: 'newsController' 
      
      }).
      
      
      when('/overview/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/overview/index.html';
            },
        controller: 'overviewController' 
      
      }).


      when('/preview/:demo/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/overview/index.html';
            },
        controller: 'overviewController' 
      
      }).
      
      
      when('/products/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/index.html';
            }
      
      }).

      when('/products/epirent/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/epirent/index.html';
            },
            controller: 'products_epirent_ctrl' 
      
      }).

      

      when('/products/epimobile/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/epimobile/index.html';
            }
      
      }).

      when('/products/cloud/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/cloud/index.html';
            }
      
      }).

      when('/products/extensions/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/extensions/index.html';
            },
            controller: 'products_extensions_ctrl' 
      
      }).

      when('/products/service_support/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/service_support/index.html';
            },
            
            controller: 'products_service_support_ctrl' 
      
      }).

      when('/products/start/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/start/index.html';
            }
      
      }).

      when('/products/start/questions/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/products/start/questions/index.html';
            },
            controller : 'products_start_questions_ctrl'
      
      }).

       when('/eshop/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/eshop/index.html';
            },
            
            controller: 'eshopController' 
      
      }).
      
      
      
      when('/support/:lang', {
      templateUrl: function(urlattr){
      				  
                      return 'content/' + urlattr.lang + '/support/index.html';
                  },
            
            controller: 'supportController' 
	
      }).

      

      when('/support/forum/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/support/forum/index.html';
            },
              
            controller: 'supportForumCtrl' 
      
      }).

      

      when('/support/guidance/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/support/guidance/index.html';
            },
              
            controller: 'supportGuidanceCtrl' 
      
      }).

      
     ///////////////////////////////   


      when('/imprint/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/imprint/index.html';
            } 
      
      }).
     
      when('/systemRequirements/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/systemRequirements/index.html';
            }
      
      }).

      when('/releases/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/releases/index.html';
            },
            
            controller: 'releasesController' 
      
      }).

      when('/agb/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/agb/index.html';
            },
            
            controller :'agbController'
      
      }).
      
      when('/dataProtection/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/dataProtection/index.html';
            }
      
      }).

      when('/dataProtection/agree/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/dataProtection/index.html';
            },
           
            controller :'dataProtectionCtrl'
      
      }).

      when('/agb_maintenance/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/agb_maintenance/index.html';
            },
            
            controller :'agbController'
      
      }).

       when('/reference/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/reference/index.html';
            }
            
      }).

      when('/partners/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/partners/index.html';
            }
            
      }).
      when('/epimobile/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/epimobile/index.html';
            }
            
      }).

       when('/agb/:lang/redirect/:topage', {
        templateUrl: function(urlattr){
        				 
                return 'content/'+ urlattr.lang + '/agb/index.html';
            },
         controller: 'agbController'   
      
      }).

     
      when('/overview/reference/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/reference/index.html';
            }
         
      }).

      when('/overview/:page/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/_cms/index.html';
            },
         controller: 'cmsController'
         
      }).

      
      when('/xmas/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/xmas/index.html';
            },
            controller: 'xmasController'   
            
      }).

      when('/xmas/terms/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/xmas/terms/index.html';
            }
            
      }).
    

    when('/winner/:lang', { //xmas winner
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/xmas_winner/index.html';
            }   
            
      }).
    
      when('/jobs/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/jobs/index.html';
            }
            
      }). 

      when('/jobs/1/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/jobs/job_01.html';
            }
            
      }). 
      when('/jobs/2/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/jobs/job_02.html';
            }
            
      }). 
      when('/jobs/3/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/jobs/job_03.html';
            }
            
      }). 
      when('/jobs/4/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/jobs/job_04.html';
            }
            
      }). 
      when('/jobs/5/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/jobs/job_04.html';
            }
            
      }). 
      when('/jobs/6/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/jobs/job_04.html';
            }
            
      }). 
      when('/edu/:lang', {
        templateUrl: function(urlattr){
        				 
                return 'content/' + urlattr.lang + '/edu/index.html';
            }
            
      }). 

      otherwise({
       redirectTo: '/overview/de'
       
    });
    
    
     
});

