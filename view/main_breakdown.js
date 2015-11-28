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
        {view: "button", icon: "bars", type : "iconButtonTop", click: function(){$$("menu_side").show();}, width : 35},
        { label : "Project's Breakdown", view : "label", width : 300 },
        { view : "spacer" },
        { view : "button", click:add_item, hotkey: "ctrl+up",  type : "iconButtonTop", icon : "plus", width : 35},
        { view : "button", click:add_child , hotkey: "ctrl+down",  type : "iconButtonTop", icon : "child", width : 35},
        { click : show_breakdown_cart, view : "button", type:"iconButtonTop", icon : "shopping-cart", width : 35},
        { click : search_breakdown, view : "button", type : "iconButtonTop", icon : "search", width : 35}
      ]
    }
    ,
    {
      columns : [
        { id : "br_item", header : "Item", fillspace : 3, template : "{common.treetable()} #br_item#", editor : "text"},
        { id : "br_index", header : "Index" , fillspace : 1 , editor : "text"},
        { id : "br_unit", header : "Unit", fillspace : 0.8, editor : "text"},
        { id : "br_child_prc", header : "ChildPrice", fillspace : 1.5, template: childTotal},
        { id : "br_mtw_prc", header : "MTWPrice", fillspace : 1.5, template: sumTotal},
        { id : "br_total_prc", header : "Total", fillspace : 1.5, template: priceTotal},
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
      
      onContext:{},
      
      on : {
        
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
      view : "toolbar", 
      borderless : true,
      elements : [
        {id : "name_details_label", label : "Details", view : "label", width : 300 }
      ]           
    },
    
    {
      view : "scrollview",
      scroll : "y",
      body : {
        rows : [
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
                  {
                    type : "iconButtonTop",
                    icon : "shopping-cart",
                    width : 35,
                    view : "button",
                    click : show_mtw_cart
                  },
                  { click : show_mtw_search, view : "button", type : "iconButtonTop", icon : "search", width : 35 }
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
                  { editor : "text", id : "mtw_sku", header : "SKU", fillspace : 1 },
                  { editor : "text", id : "mtw_item", header : "Item", fillspace :2 },
                  { editor : "text", id : "mtw_index", header : "Index", fillspace : 1 },
                  { editor : "text", id : "mtw_unit", header : "Unit", fillspace : 1 },
                  { editor : "text", id : "mtw_unitprice", format : webix.i18n.priceFormat, header : "Price", fillspace : 1.5, footer:"Total" },
                  { editor : "text", id : "mtw_totalprice", format : webix.i18n.priceFormat, header : "Total", fillspace : 1.5,  math : "[$r,mtw_index] * [$r,mtw_unitprice]", footer:{content:"summColumn"}}
                ],
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

var view_main_breakdown__breakdown_cart =
{
  id : "breakdown_cart",
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
             
        { click : back_to_details, view : "button", type : "iconButtonTop", icon : "arrow-left", width : 35 },
        { label : "Breakdown's Cart", view : "label" }

      ]
    },
    
    {
      columns : [
        {id : "br_item", header : "Item", fillspace : 3, template : "{common.treetable()} #br_item#", editor : "text"},
        { id : "br_index", header : "Index" , fillspace : 1 , editor : "text"},
        { id : "br_unit", header : "Unit", fillspace : 0.8, editor : "text"},
        { id : "br_child_prc", header : "ChildPrice", fillspace : 1.5, template: childTotal},
        { id : "br_mtw_prc", header : "MTWPrice", fillspace : 1.5, template: sumTotal },
        { id : "br_total_prc", header : "Total", fillspace : 1.5, template: priceTotal},
        { id : "br_add",  header : "", fillspace : 0.1  }
      ],
      view : "treetable",
      id:"treetable_breakdown_cart",
      select : "row",
      drag : true
    }
  ],
  borderless : false,
  hidden : true
 
};

var view_main_breakdown__mtw_cart =
{
  id : "mtw_cart",
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
        { click : back_to_project_breakdown, view : "button", type : "iconButtonTop", icon : "arrow-left", width : 35 },      
        { label : "Item's Cart", view : "label" }
      ]
    },
    {
      id : "datatable_cart_mtw",
      autoConfig : true,
      view : "datatable",
      borderless : true,
      select : "row", 
      columns : [
        { id : "mtw_sku", header : "SKU", fillspace : 1 },
        { id : "mtw_item", header : "Item", fillspace :2 },
        { id : "mtw_index", header : "Index", fillspace : 0.7 },
        { id : "mtw_unit", header : "Unit", fillspace : 1 },
        { id : "mtw_unitprice", header : "Unit Price", fillspace : 1.5 },
      ],
      drag : true
    }
  ]
  
};
