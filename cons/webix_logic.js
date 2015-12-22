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
    //edit shortcut for treetable
    webix.UIManager.addHotKey("any", function(view){
				var pos = view.getSelectedId();
				view.editRow(pos);
    }, $$("treetable_main_breakdown"));
    //editshortcut for datatable 
    webix.UIManager.addHotKey("any", function(view){
				var pos = view.getSelectedId();
				view.editRow(pos);
    }, $$("datatable_mtw_main_breakdown")); 
		
    //add open child
    webix.UIManager.addHotKey("=", function(view){
				var pos = view.getSelectedId();
				if(!view.isBranchOpen(pos)) view.open(pos);
                else view.close(pos);
    }, $$("treetable_main_breakdown")); 	

    //search function for breakdown
    $$("searchbar_br_search").attachEvent("onTimedKeyPress",function(){
      $$("treetable_search_breakdown").filter("#br_item#",this.getValue());
    });
    //search function for mtw
    $$("searchbar_mtw_search").attachEvent("onTimedKeyPress",function(){
      $$("datatable_search_mtw").filter("#mtw_item#",this.getValue());
    });
    
    //refresh main to calculate
    $$("datatable_mtw_main_breakdown").refreshColumns();
    $$("treetable_main_breakdown").refresh();

    //refresh search to calculate
    $$("treetable_search_breakdown").refresh();
    
    //select root
    $$('treetable_main_breakdown').select('root');


    //VIEW CONFIG
    //disable resizer onf first (no search_pane)
    $$("details-search_resizer").disable();
    $$("breakdown_resizer").disable();
       

  }  
}; //logic done

//BUTTON FUNCTION
//show search breakdown
function show_breakdown_search(){
    $$("breakdown_search").show();
};
//show search mtw
function show_mtw_search(){
    $$("mtw_search").show();
};

function close_details(){
  $$("open_details").toggle();
  open_details();
};
function close_search(){
  $$("open_search").toggle();
  open_search();
};

//toggle collapsed search accordion
function open_search(){
    if($$("search_pane").config.collapsed){
        $$('search_pane').expand();
        $$("breakdown_resizer").enable();
        
        if($$("details_pane").config.collapsed){
          $$("details-search_resizer").disable();  
        } else {
          $$("details-search_resizer").enable();
        }
        
    } else {
        $$('search_pane').collapse();
     
        if(!$$("details_pane").config.collapsed){
          $$("details-search_resizer").disable();
          $$("breakdown_resizer").enable();  
        } else {
          $$("breakdown_resizer").disable();
        }
        
    }
}
//toggle collapsed details accordion
function open_details(){
    if($$("details_pane").config.collapsed){
        $$('details_pane').expand();
        $$("breakdown_resizer").enable();
        
        if($$("search_pane").config.collapsed){
          $$("details-search_resizer").disable();  
        } else {
          $$("details-search_resizer").enable();
        }
        
    } else {
        $$('details_pane').collapse();
     
        if(!$$("search_pane").config.collapsed){
          $$("details-search_resizer").disable();
          $$("breakdown_resizer").enable();  
        } else {
          $$("breakdown_resizer").disable();
        }
        
    }
}

//TREE FUNCTION
//add siblings item
function add_item() {
  var posId = $$("treetable_main_breakdown").getSelectedId();
  var parentId = $$("treetable_main_breakdown").getParentId(posId);
  var pos = $$("treetable_main_breakdown").getBranchIndex(posId);
  if(!parentId){
    parentId = "root";
  }  
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

//function for mtw
function mtw_unit(item){
  if(item.mtw_unitprice){
    return webix.i18n.priceFormat(item.mtw_unitprice);  
  }
  
}
function mtw_total(item){
  if(item.mtw_unitprice && item.mtw_index){
    var total = item.mtw_unitprice * item.mtw_index;
    return  webix.i18n.priceFormat(total);
  }
  
}
//EXPORT
//window export function
window.export = function(){
  //randomize all first 
  randomizeTree();
  
  var temp_data = [];
 
 //reserve selected id
 var selectedId = $$("treetable_main_breakdown").getSelectedId(); 
 
 //go to each data in table
 $$("treetable_main_breakdown").data.each(function(obj){
   
    //get selected 
    $$("treetable_main_breakdown").select(obj.id);

    //pasang head isi dari tree nya
    var head = {Breakdown : obj.br_item};
    temp_data = temp_data.concat(head);
    
    //pasang mtw nya
    dataTable = $$("datatable_mtw_main_breakdown").serialize();
    temp_data = temp_data.concat(dataTable);
    
    //pasang total
    var total = {Total : sumTotal(obj)};
    temp_data = temp_data.concat(total);
    
    
    
    //kasih space
    var space = {};
    temp_data = temp_data.concat(space);
 
 
 });
 
 //put the data in imaginary view
 var temp_grid = new webix.DataCollection({
   data:temp_data

 }); 
 
 //export data
 webix.toExcel(temp_grid,{
   columns:{
     Breakdown : true,
     "mtw_sku" : {header: "SKU", width: 200},
     "mtw_item" : {header: "Item", width: 200},
     "mtw_index" : {header: "Index", width: 200},
     "mtw_unit" : {header: "Unit", width: 200},
     "mtw_unitprice" : {header: "Unit Price", width: 200, template: mtw_unit},
     "mtw_totalprice" : {header: "Total Price", width: 200, template: mtw_total},
     Total : true
   }
 });
 

 //reselect back 
 $$("treetable_main_breakdown").select(selectedId);
 
 webix.delay(function(){
  	temp_grid.destructor();
  }, 0, 0, 5000); //destroy it after 5 seconds
  
};
//export datatable
function exportDtbl(){
  console.log($$('datatable_mtw_main_breakdown').serialize());
}
 
//HELPER FUNCTION
//random id
function randomizeId(table){
  if($$(table).data){
    $$(table).data.each(function(obj){
      var newId = webix.uid();
      $$(table).data.changeId(obj.id, newId);
      //console.log(newId);
    })  
  } 
}
//randomize ALLLLLL
function randomizeTree(){
  randomizeId("treetable_main_breakdown");
  $$("treetable_main_breakdown").data.each(function(obj){
    $$("treetable_main_breakdown").select(obj.id);
    randomizeId("datatable_mtw_main_breakdown");
  })
}

