var logic ={
	init: function(){
    
    $$("datatable_mtw_main_breakdown").bind( $$("treetable_main_breakdown"), "$data", "mtw"); 
    
    webix.UIManager.addHotKey("any", function(view){
				var pos = view.getSelectedId();
				view.edit(pos);
    }, $$("treetable_main_breakdown")); 
	
    webix.UIManager.addHotKey("=", function(view){
				var pos = view.getSelectedId();
				if(!view.isBranchOpen(pos)) view.open(pos);
                else view.close(pos);
    }, $$("treetable_main_breakdown")); 	
        
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
};

function add_item() {
  $$("treetable_main_breakdown").select($$("treetable_main_breakdown").add({ value:"New item"}, -1));
  webix.UIManager.setFocus( $$("treetable_main_breakdown") );
};

function add_child() {
  var parentId= $$("treetable_main_breakdown").getSelectedId();
  $$("treetable_main_breakdown").add( {value:"New item"}, -1, parentId);
  webix.UIManager.setFocus( $$("treetable_main_breakdown") );
};


