var logic ={
	init: function(){
    webix.i18n.setLocale("ind-IND");
    
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

