var logic ={
	init: function(){
<<<<<<< HEAD
    webix.i18n.setLocale("ind-IND");
=======
    webix.i18n.setLocale("ind-IND");    
      
>>>>>>> master
      
      $$("datatable_mtw_main_breakdown").bind( $$("treetable_main_breakdown"), "$data", function(obj, source){
        if (!obj) return this.clearAll();
        this.data.importData(obj.mtw, true);
  		$$("datatable_mtw_main_breakdown").refreshColumns();
    });
    
    webix.UIManager.addHotKey("any", function(view){
				var pos = view.getSelectedId();
				view.edit(pos);
    }, $$("treetable_main_breakdown")); 
	
    webix.UIManager.addHotKey("=", function(view){
				var pos = view.getSelectedId();
				if(!view.isBranchOpen(pos)) view.open(pos);
                else view.close(pos);
    }, $$("treetable_main_breakdown")); 	

    $$("searchbar_br_search").attachEvent("onTimedKeyPress",function(){
      $$("treetable_search_breakdown").filter("#br_search_item#",this.getValue());
    });

    $$("datatable_mtw_main_breakdown").refreshColumns();
    $$("treetable_main_breakdown").refresh();

    webix.ui({
			view: "sidemenu",
			id: "menu",
			width: 200,
			position: "left",
			body:{

				view:"list",
				borderless:true,
				scroll: false,

				template: "<span class='webix_icon fa-#icon#'></span> #value#",
				data:[
					{id: 1, value: "Your Name", icon: "user"},
					{id: 2, value: "Home", icon: "home"},
					{id: 3, value: "Share", icon: "share-alt"},
					{id: 4, value: "Help", icon: "question-circle"},
					{id: 5, value: "Settings", icon: "cog"},
          {id: 6, value: "Sign Out", icon: "sign-out"}
				],
				select:true,
				type:{
					height: 40
				}
			}
		});
    
<<<<<<< HEAD
=======

    webix.ui({
			view: "sidemenu",
			id: "menu",
			width: 200,
			position: "left",
			body:{

				view:"list",
				borderless:true,
				scroll: false,

				template: "<span class='webix_icon fa-#icon#'></span> #value#",
				data:[
					{id: 1, value: "Your Name", icon: "user"},
					{id: 2, value: "Home", icon: "home"},
					{id: 3, value: "Share", icon: "share-alt"},
					{id: 4, value: "Help", icon: "question-circle"},
					{id: 5, value: "Settings", icon: "cog"},
          {id: 6, value: "Sign Out", icon: "sign-out"}
				],
				select:true,
				type:{
					height: 40
				}
			}
		});

>>>>>>> master
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
  var posId = $$("treetable_main_breakdown").getSelectedId();
  var parentId = $$("treetable_main_breakdown").getParentId(posId);
  var pos = $$("treetable_main_breakdown").getBranchIndex(posId);  
  $$("treetable_main_breakdown").add({ value:"New item"}, pos+1, parentId);
  webix.UIManager.setFocus( $$("treetable_main_breakdown") );
};

function add_child() {
  var parentId= $$("treetable_main_breakdown").getSelectedId();
  $$("treetable_main_breakdown").add( {value:"New item"}, -1, parentId);
  webix.UIManager.setFocus( $$("treetable_main_breakdown") );
};

var loop = 0;
function sumTotal(item) {
  	loop++;
    var records = item.mtw;
    var total = 0;
    if(records)
   	 	for (var i=0; i < records.length ; ++i) 
    	total += (records[i]["mtw_unitprice"]) * (records[i]["mtw_index"]);
    if(loop == 1){
      loop = 0;
      console.log(loop);
      return webix.i18n.priceFormat(total);
    };
    loop--;
  	return total;
};

function priceTotal(item) {
  	loop++;
    total = (sumTotal(item) + childTotal(item))*item.br_index;
    if(loop ==  1){
      loop = 0;
      console.log(loop);
      return webix.i18n.priceFormat(total);
    }
    loop--;
    return total;
};

function childTotal(item) {
  	loop++;
  	var total = 0;

  	
  	if($$("treetable_main_breakdown").isBranch(item.id)) 
      $$("treetable_main_breakdown").data.eachChild(item.id,function(obj){
        total += priceTotal(obj);
      });
  	if(loop == 1){
      loop = 0;
      console.log(loop);
      return webix.i18n.priceFormat(total);
    };
    loop--;
  	return total;
};

