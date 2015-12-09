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

//BACKEND CONNECTION PART - BE CAREFUL
//reserve variable
var account = {};
var activeProject = {};

        
function connect(){
      //take all values
      var value = $$("connectForm").getValues();
    	account ={
            url : value.url, 
            db : value.db, 
            user : value.user, 
            pass : value.pass 
          };
          
      //clear All database    
  		$$("project_list_dataview").clearAll();
      $$("treetable_main_breakdown").clearAll();
      
      
      
      //make connection and load project_list_dataview
  		var url = "odata->" + account.url + "/api1/" + account.db + "/collections/project_list";
  		$$("project_list_dataview").load(url);
  		var dp = new webix.DataProcessor({  
          master:$$("project_list_dataview"), 
          url:url
        });
      $$("project_list").show();
      
};

//OData connection lib - DO NOT TOUCH
webix.proxy.odata = {
	$proxy:true,
	load:function(view, callback, details){
		
		var url = this._odataurl(view, details);
		this._load(view, callback, url);
	},
	_odataurl:function(view, details){
		var url = this.source;
		
		url = url.replace(/(\$format=(.*)&)|(\$format=(.*)$)/, "").replace(/\?$/, "");
		url += (url.indexOf("?") == -1 ) ? "?": "&";
		url += "$format=json";
		
		if(this.dynamicLoading){
			url += "&$inlinecount=allpages";
			if(!details) url+="&$top="+view.config.datafetch;
		}

		if(details){
			var start = details.from, count = details.count;
			
			//page && scroll
			if(start && count!==-1){
				if(start<0) start = 0;
				url += "&$skip="+start+"&$top="+count;
			}

			//filter && sort
			if(details.sort)
				url += "&$orderby="+details.sort.id+" "+details.sort.dir;

			if(details.filter){
				var filters = [];
				for (var key in details.filter){
					if(details.filter[key])
						filters.push("startswith("+key+",'"+(details.filter[key]?details.filter[key]:"")+"')");
				}
				if(filters.length) url +="&$filter="+filters.join(" and ");
			}
		}
		return url;
	},
	_load:function(view, callback, url){
			webix.ajax().headers({
				"Authorization": "Basic " + btoa(account.user + ":" + account.pass)
			}).get(url).then(function(data){
				data = data.json();
				if(data.d){
					if(data.d.__count){
						var records = {
							data:data.d.results,
							pos:data.d.__skip||0,
							total_count:data.d.__count*1
						};
					}
					else
						var records = data.d.results;
					webix.ajax.$callback(view, callback, "", records, -1);
				}
			});
	},
	save:function(view, update, dp, callback){
		var url = this.source,
			mode = update.operation,
			data = update.data,
			editLink = url.replace(/\/$/, "")+"("+data["id"]+")";

		if(mode == "insert") delete data.id;
		data = JSON.stringify(data);

		//call odata URI
		if(mode == "insert"){
			webix.ajax().headers({
				"Authorization": "Basic " + btoa(account.user + ":" + account.pass),
				"Content-type":"application/json"
			}).post(url, data, callback);
		} else if (editLink){
			if (mode == "update"){
				webix.ajax().headers({
					"Authorization": "Basic " + btoa(account.user + ":" + account.pass),
					"Content-type":"application/json"
				}).put(editLink, data, callback);
			} else if (mode == "delete") {
				webix.ajax().headers({
					"Authorization": "Basic " + btoa(account.user + ":" + account.pass),
					"Content-type":"application/json"
				}).del(editLink, data, callback);
			}
		}
	},
	result:function(state, view, dp, text, data, loader){
		data = data.json();
		var obj = state;
		if (data){
			obj = data.d.results || {status:"error"};
			obj.newid = data.d.results.id;

			dp.processResult(state, obj);
		}
	}
};

webix.proxy.odataDynamic = {
	init:function(){
		webix.extend(this, webix.proxy.odata);
	},
	dynamicLoading:true
};
//OData lib done

//make new project function
function newProject(){
    var value = $$("makeNewProjectForm").getValues();
    $$("project_list_dataview").add({
      name : value.name,
      id : value.id,
      date : new Date()
    })
}
