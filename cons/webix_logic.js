var logic ={
	init: function(){
    
    $$("datatable_mtw_main_breakdown").bind( $$("treetable_main_breakdown"), "$data", "mtw");  
    
    $$("searchbar_br_search").attachEvent("onTimedKeyPress",function(){
  $$("treetable_search_breakdown").filter("#br_search_item#",this.getValue());
});
		
	}
};


function show_breakdown_cart(){
    $$("breakdown_cart").show();
};

function search_breakdown(){
    $$("breakdown_search").show();
};

function back_to_main(){
    $$("breakdown_main").show();
};

function back_to_details(){
    $$("breakdown_details").show();
};

function back_to_project_breakdown(){
    $$("project_breakdown").show();
};

function show_mtw_cart(){
    $$("mtw_cart").show();
};

function show_mtw_search(){
    $$("mtw_search").show();
};

function show_sidebar() {
  $(".mdl-layout__drawer").addClass("is-visible");

  //var sidebar = document.getElementsByClassName("br-drawer mdl-layout__drawer");
 // sidebar.setAttribute("class", "is-visible");
};


