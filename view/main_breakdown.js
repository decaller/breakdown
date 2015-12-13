var view_main_breakdown__project_breakdown =
{
  id : "project_breakdown",
  type : "line",
  borderless : true,
  rows : [
    {
      view : "toolbar" , id : "toolbar",
      borderless : true,
   
      elements : [
        { view: "button", icon: "bars", type : "iconButtonTop", click: function(){$$("menu_side").show();}, width : 35, tooltip: "Export Menu"},
        { label : "Project's Breakdown", view : "label" },
        { view : "spacer" },
        //{ view : "button", click:exportDtbl,  type : "iconButtonTop", icon : "code", width : 35, tooltip: "Serialize MTW"},
        
        { view : "button", click:add_item, hotkey: "ctrl+up",  type : "iconButtonTop", icon : "plus", width : 35, tooltip: "Add New Breakdown Item (Crtl + Up)"},
        { view : "button", click:add_child , hotkey: "ctrl+down",  type : "iconButtonTop", icon : "child", width : 35, tooltip: "Add Breakdown Child (Ctrl + Down)"},
        { view : "button", click:randomizeTree,  type : "iconButtonTop", icon : "refresh", width : 35, tooltip: "Refresh"},
        { click : open_search,id:"open_search", view : "toggle", type : "iconButtonTop", icon : "search", width : 35, tooltip:"Search an Item"},
        { click : open_details,id:"open_details", view : "toggle", type : "iconButtonTop", icon : "info", width : 35, tooltip: "View Item Details"}
      ],
      
    },
    {
      columns : [
        { id : "br_item", header : "Item", fillspace : 3, template : "{common.treetable()} #br_item#", editor : "text", tooltip : "Item: #br_item#</br>Index: #br_index#</br>Unit: #br_unit#</br>Id: #id#"},
        { id : "br_index", header : "Index" , fillspace : 1 , editor : "text" , sort:"string", tooltip : "Item: #br_item#</br>Index: #br_index#</br>Unit: #br_unit#</br>Id: #id#"},
        { id : "br_unit", header : "Unit", fillspace : 1, editor : "text", tooltip : "Item: #br_item#</br>Index: #br_index#</br>Unit: #br_unit#</br>Id: #id#"},
        { id : "br_child_prc", header : "ChildPrice", fillspace : 1.5, template: childTotal, sort:"int"},
        { id : "br_mtw_prc", header : "MTWPrice", fillspace : 1.5, template: sumTotal, sort:"int"},
        { id : "br_total_prc", header : "Total", fillspace : 1.5, template: priceTotal , sort:"int"},
        { id : "br_menu",  header : "", fillspace : 0.8, template:"<span class='webix_icon fa-ellipsis-v menu_breakdown'></span>", tooltip : "Row Menu" }
      ],
      view : "treetable",
      resizeColumn : true,
      select : "row",
      id:"treetable_main_breakdown",
      data : main_breakdown_treetable_data,
      editaction:"custom",
      multiselect : true,
      borderless : true,
      editable : true,
      navigation:true,
      drag : true,
      math : false,
      tooltip : true,
      hover : "rowHover",
      onClick:{
        //show context menu
       "menu_breakdown":function(e, id, node){
       	$$("contextmenu_breakdown").show(e.target);
         $$("contextmenu_breakdown").$context = { obj:this, id:id };
        }
       },
      onContext:{},
      
      on : {
        onBeforeDragIn:function(context){
            //disable dro from other place except treetable search
           if ((context.from.config.id != "treetable_search_breakdown") && (context.from.config.id != "treetable_main_breakdown")) return false;
         },
        onBeforeSelect:function(context){
          //clear selection from treetable search 
          $$("treetable_search_breakdown").clearSelection();
          
          //set property sheet and mtw table to editable
          $$("item_properties").config.editable = true;
          $$("datatable_mtw_main_breakdown").config.editable = true;
          
          //refresh mtw table
          $$("datatable_mtw_main_breakdown").refresh();
          
        },
        onAfterSelect:function(){
          //after select refresh mtw to calculate new binding
          $$("datatable_mtw_main_breakdown").refreshColumns();
          
          //clear selection from treetable search 
          $$("treetable_search_breakdown").clearSelection();
          },
        onAfterEditStop: function(){
          //refresh after editing
          $$("datatable_mtw_main_breakdown").refreshColumns();
        
          $$("treetable_main_breakdown").refreshColumns();
          
          },
        onBeforeDrop:function(context){
            //config drop placement
            context.parent = context.target;    //drop as child
            context.index = -1;                 //as last child
            
            //only place as child of root
            if (!context.target || context.target.row == "root"){
              
             context.index = -1;
             context.parent = context.target = "root";
            };
            
            //instead move, do copy
            if (context.from.config.id == "treetable_search_breakdown"){
              var newId = webix.uid();
              var details = { parent:context.parent,newId:newId };
              context.from.copy( context.source, context.index, context.to, details);
              $$("treetable_main_breakdown").select(newId);
              $$("datatable_mtw_main_breakdown").refresh(); 
              randomizeId("datatable_mtw_main_breakdown");             
              
              $$("treetable_main_breakdown").data.eachSubItem(newId,function(obj){
                $$("treetable_main_breakdown").select(obj.id); 
                randomizeId("datatable_mtw_main_breakdown");
              })
              
              $$("treetable_main_breakdown").select(newId);
              $$("datatable_mtw_main_breakdown").refresh();
               
              $$("treetable_main_breakdown").refreshColumns();
              $$("treetable_main_breakdown").refresh();
              
               
              return false;
            }
            
        },
        onAfterDrop:function(){
              
        }
        
      }
    }
    
  ]
};

var view_main_breakdown__breakdown_details =
{
  id : "breakdown_details",
  type : "line",
  rows : [
          {
                view : "toolbar",
                elements : [
                  { label : "Details", view : "label" },
                ]
              },
          {
            view:"property", 
            id:"item_properties",
            height: 80,
            
            complexData : true,
            elements : [
              { id : "br_item", type:"text", label : "Name"},
              { id : "br_index", type:"text", label : "Index"},
              { id : "br_unit", type:"text", label : "Unit"},
              
            ]
          },
          {view:"resizer"},
          {rows:[
            {
              view : "toolbar",
              elements : [
                { label : "Materials, Tools, Workers", view : "label" },
              ]
            },
            {
              view : "datatable",
              
              minheight:300,
              id : "datatable_mtw_main_breakdown",
              math: false,
              editable:true,
              editaction:"custom",
              select : "row",
              drag : true,
              hover : "rowHover",
              columns : [
                { editor : "text", id : "mtw_sku", header : "SKU", fillspace : 1 , sort:"int"},
                { editor : "text", id : "mtw_item", header : "Item", fillspace :2 , sort:"string"},
                { editor : "text", id : "mtw_index", header : "Index", fillspace : 1 , sort:"int"},
                { editor : "text", id : "mtw_unit", header : "Unit", fillspace : 1 },
                { editor : "text", id : "mtw_unitprice", template: mtw_unit, header : "Price", fillspace : 1.5, footer:"Total" , sort:"int"},
                { id : "mtw_totalprice", template: mtw_total, header : "Total", fillspace : 1.5, sort:"int" },
                { id : "mtw_menu",  header : "", fillspace : 0.8, template:"<span class='webix_icon fa-ellipsis-v menu_mtw'></span>" }
              ],
              onClick:{
                  //show context menu
                  "menu_mtw":function(e, id, node){
                    $$("contextmenu_mtw").show(e.target);
                    $$("contextmenu_mtw").$context = { obj:this, id:id };
                    }
                  },
                on: {
                  
                  onBeforeDragIn:function(context){
                    //only accept drop from mtw search
                    if ((context.from.config.id != "datatable_search_mtw") && (context.from.config.id != "datatable_mtw_main_breakdown")) return false;
                  },
                  onAfterEditStop: function () {
                    //refresh table after edit to recalculate
                    $$("datatable_mtw_main_breakdown").refreshColumns();
                    $$("treetable_main_breakdown").refresh();
                  },
                  onAfterDrop: function(){
                    
                  },
                  onBeforeDrop:function(context){
                      //instead move, do copy
                      if (context.from.config.id == "datatable_search_mtw"){
                                                
                        var selected = $$("treetable_main_breakdown").getSelectedItem();
                        //console.log(selected.id);
                        var records = selected.mtw;   
                        //console.log(records);
                                              
                        //instead move, do copy
                        var copiedId =  context.from.copy(context.source,context.index,this,{newId:webix.uid()});
                        var copiedItem = $$("datatable_mtw_main_breakdown").getItem(copiedId);
                        
                        //console.log(copiedId);
                        //console.log(records);
                        records.push(copiedItem);
                        //console.log(records);
                        randomizeId("datatable_mtw_main_breakdown");
                        
                        //refresh table after edit to recalculate
                        $$("datatable_mtw_main_breakdown").refreshColumns();
                        $$("treetable_main_breakdown").refreshColumns();
                        $$("treetable_main_breakdown").refresh();
                        
                        return false;
                      }
                    
                      
                      
                      
                  }
                }            
            }
          ]}
            
          ]  
};