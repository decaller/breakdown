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
        { view: "button", icon: "bars", type : "iconButtonTop", click: function(){$$("menu_side").show();}, width : 35},
        { label : "Project's Breakdown", view : "label", width : 300 },
        { view : "spacer" },
        { view : "button", click:add_item, hotkey: "ctrl+up",  type : "iconButtonTop", icon : "plus", width : 35},
        { view : "button", click:add_child , hotkey: "ctrl+down",  type : "iconButtonTop", icon : "child", width : 35},
        { click : open_search,id:"open_search", view : "toggle", type : "iconButtonTop", icon : "search", width : 35},
        { click : open_details,id:"open_details", view : "toggle", type : "iconButtonTop", icon : "info", width : 35}
      ],
      
    },
    {
      columns : [
        { id : "br_item", header : "Item", fillspace : 3, template : "{common.treetable()} #br_item#", editor : "text"},
        { id : "br_index", header : "Index" , fillspace : 0.5 , editor : "text" , sort:"string"},
        { id : "br_unit", header : "Unit", fillspace : 0.5, editor : "text"},
        { id : "br_child_prc", header : "ChildPrice", fillspace : 1.5, template: childTotal, sort:"int"},
        { id : "br_mtw_prc", header : "MTWPrice", fillspace : 1.5, template: sumTotal, sort:"int"},
        { id : "br_total_prc", header : "Total", fillspace : 1.5, template: priceTotal , sort:"int"},
        { id : "br_menu",  header : "", fillspace : 0.8, template:"<span class='webix_icon fa-ellipsis-v menu_breakdown'></span>" }
      ],
      view : "treetable",
      resizeColumn : true,
      select : "row",
      id:"treetable_main_breakdown",
      data : main_breakdown_treetable_data,
      editaction:"dblclick",
      multiselect : true,
      borderless : true,
      editable : true,
      navigation:true,
      drag : true,
      math : true,
      onClick:{
       "menu_breakdown":function(e, id, node){
       	$$("contextmenu_breakdown").show(e.target);
         $$("contextmenu_breakdown").$context = { obj:this, id:id };
        }
       },
      onContext:{},
      
      on : {
        onBeforeDragIn:function(config, id){
          
        },
        onAfterSelect:function(){$$("datatable_mtw_main_breakdown").refreshColumns()},
        onAfterEditStop: function () {$$("datatable_mtw_main_breakdown").refreshColumns();},
        onBeforeDrop:function(context){
            context.parent = context.target;    //drop as child
            context.index = -1;                 //as last child
            
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
      view : "scrollview",
      scroll : "y",
      body : {
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
            
            complexData : true,
            elements : [
              { id : "br_item", type:"text", label : "Name"},
              { id : "br_index", type:"text", label : "Index"},
              { id : "br_unit", type:"text", label : "Unit"},
              
            ]
          },
          {view:"resizer"},
          {

            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Materials, Tools, Workers", view : "label" },
                ]
              },
              {
                view : "datatable",
               
                height:400,
                id : "datatable_mtw_main_breakdown",
                math: true,
                editable:true,
                editaction:"dblclick",
                footer:true,
                select : "row",
                editmath:true,
                drag : true,
                columns : [
                  { editor : "text", id : "mtw_sku", header : "SKU", fillspace : 1 , sort:"int"},
                  { editor : "text", id : "mtw_item", header : "Item", fillspace :2 , sort:"string"},
                  { editor : "text", id : "mtw_index", header : "Index", fillspace : 1 , sort:"int"},
                  { editor : "text", id : "mtw_unit", header : "Unit", fillspace : 1 },
                  { editor : "text", id : "mtw_unitprice", format : webix.i18n.priceFormat, header : "Price", fillspace : 1.5, footer:"Total" , sort:"int"},
                  { id : "mtw_totalprice", format : webix.i18n.priceFormat, header : "Total", fillspace : 1.5, sort:"int" ,  math : "[$r,mtw_index] * [$r,mtw_unitprice]", footer:{content:"summColumn"}},
                  { id : "mtw_menu",  header : "", fillspace : 0.8, template:"<span class='webix_icon fa-ellipsis-v menu_mtw'></span>" }
                ],
                onClick:{
                    "menu_mtw":function(e, id, node){
                      $$("contextmenu_mtw").show(e.target);
                      $$("contextmenu_mtw").$context = { obj:this, id:id };
                      }
                    },
                  on: {
                    onAfterEditStop: function () {
                      $$("datatable_mtw_main_breakdown").refreshColumns();
                      $$("treetable_main_breakdown").refresh();
                    },
                    onAfterDrop: function(){
                      $$("datatable_mtw_main_breakdown").refreshColumns();
                      $$("treetable_main_breakdown").refresh();
                    }
                    }            
              }
            ]
          }
        ]
      }
    }
  ]
};