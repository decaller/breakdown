var logic ={
	init: function(){
    
    //localize
    webix.i18n.setLocale("ind-IND");
    
    //binding main
      $$("datatable_mtw_main_breakdown").bind( $$("treetable_main_breakdown"), "$data", function(obj, source){
        if (!obj) return this.clearAll();
        this.data.importData(obj.mtw, true);
  		$$("datatable_mtw_main_breakdown").refreshColumns();
    });
    $$("item_properties").bind( $$("treetable_main_breakdown"));
    
    //binding search
    $$("datatable_mtw_main_breakdown").bind( $$("treetable_search_breakdown"), "$data", function(obj, source){
      if (!obj) return this.clearAll();
      this.data.importData(obj.mtw, true);
    $$("datatable_mtw_main_breakdown").refreshColumns();
    });
    $$("item_properties").bind( $$("treetable_search_breakdown"));
    
    //shortcut for main breakdown
    //edit shortcut
    webix.UIManager.addHotKey("any", function(view){
				var pos = view.getSelectedId();
				view.edit(pos);
    }, $$("treetable_main_breakdown")); 
	
    //add open child
    webix.UIManager.addHotKey("=", function(view){
				var pos = view.getSelectedId();
				if(!view.isBranchOpen(pos)) view.open(pos);
                else view.close(pos);
    }, $$("treetable_main_breakdown")); 	

    //search function
    $$("searchbar_br_search").attachEvent("onTimedKeyPress",function(){
      $$("treetable_search_breakdown").filter("#br_item#",this.getValue());
    });

    //refresh main to calculate
    $$("datatable_mtw_main_breakdown").refreshColumns();
    $$("treetable_main_breakdown").refresh();

    //refresh search to calculate
    $$("treetable_search_breakdown").refresh();
    
    //select root
    $$('treetable_main_breakdown').select('root');

  }  
}; //logic done

//BUTTON FUNCTION
//show search breakdown
function search_breakdown(){
    $$("breakdown_search").show();
};
//show search mtw
function show_mtw_search(){
    $$("mtw_search").show();
};

//TREE FUNCTION
//add siblings item
function add_item() {
  var posId = $$("treetable_main_breakdown").getSelectedId();
  var parentId = $$("treetable_main_breakdown").getParentId(posId);
  var pos = $$("treetable_main_breakdown").getBranchIndex(posId);  
  $$("treetable_main_breakdown").add({ value:"New item"}, pos+1, parentId);
  webix.UIManager.setFocus( $$("treetable_main_breakdown") );
};

//add child item
function add_child() {
  var parentId= $$("treetable_main_breakdown").getSelectedId();
  $$("treetable_main_breakdown").add( {value:"New item"}, -1, parentId);
  webix.UIManager.setFocus( $$("treetable_main_breakdown") );
};

//CALCULATE FUNCTION 

//functions for main
//loop mod for showing last recursion and map-ing in future development 
var loop = 0;

//calculate mtw
function sumTotal(item) {
  	loop++;
    var records = item.mtw;
    var total = 0;
    if(records)
   	 	for (var i=0; i < records.length ; ++i) 
    	total += (records[i]["mtw_unitprice"]) * (records[i]["mtw_index"]);
    if(loop == 1){
      loop = 0;
      
      return webix.i18n.priceFormat(total);
    };
    loop--;
  	return total;
};

//calculate (mtw+child)*index of item
function priceTotal(item) {
  	loop++;
    total = (sumTotal(item) + childTotal(item))*item.br_index;
    if(loop ==  1){
      loop = 0;
  
      return webix.i18n.priceFormat(total);
    }
    loop--;
    return total;
};

//calculate child
function childTotal(item) {
  	loop++;
  	var total = 0;
  	if($$("treetable_main_breakdown").isBranch(item.id)) 
      $$("treetable_main_breakdown").data.eachChild(item.id,function(obj){
        total += priceTotal(obj);
      });
  	if(loop == 1){
      loop = 0;
    
      return webix.i18n.priceFormat(total);
    };
    loop--;
  	return total;
};


//functions for search
//loop mod for showing last recursion and map-ing in future development 
var loop_search = 0;

//calculate mtw
function sumTotal_search(item) {
  	loop_search++;
    var records = item.mtw;
    var total = 0;
    if(records)
   	 	for (var i=0; i < records.length ; ++i) 
    	total += (records[i]["mtw_unitprice"]) * (records[i]["mtw_index"]);
    if(loop_search == 1){
      loop_search = 0;
      
      return webix.i18n.priceFormat(total);
    };
    loop_search--;
  	return total;
};

//calculate (mtw+child)*index of item
function priceTotal_search(item) {
  	loop_search++;
    total = (sumTotal_search(item) + childTotal_search(item))*item.br_index;
    if(loop_search ==  1){
      loop_search = 0;
  
      return webix.i18n.priceFormat(total);
    }
    loop_search--;
    return total;
};

//calculate child
function childTotal_search(item) {
  	loop_search++;
  	var total = 0;
  	if($$("treetable_search_breakdown").isBranch(item.id)) 
      $$("treetable_search_breakdown").data.eachChild(item.id,function(obj){
        total += priceTotal_search(obj);
      });
  	if(loop_search == 1){
      loop_search = 0;
    
      return webix.i18n.priceFormat(total);
    };
    loop_search--;
  	return total;
};

