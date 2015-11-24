var view_main_breakdown__project_breakdown =
{
  id : "project_breakdown",
  type : "line",
  borderless : true,
  rows : [
    {
      view : "toolbar" ,
      borderless : true,
   
      elements : [
        { view : "button", type : "iconButtonTop", icon : "navicon", width : 24, click:show_sidebar},
        { label : "Project's Breakdown", view : "label", width : 300 },
        { view : "spacer" },
        { view : "button", click:add_item, hotkey: "ctrl+up",  type : "iconButtonTop", icon : "plus", width : 24},
        { view : "button", click:add_child , hotkey: "ctrl+down",  type : "iconButtonTop", icon : "child", width : 24},
        { click : show_breakdown_cart, view : "button", type:"iconButtonTop", icon : "shopping-cart", width : 24},
        { click : search_breakdown, view : "button", type : "iconButtonTop", icon : "search", width : 24}
      ]
    }
    ,
    {
      columns : [
        {
          id : "br_item", header : "Item", 
          fillspace : 3,
          template : "{common.treetable()} #br_item#",
          editor : "text"
        },
        { editor : "text", id : "br_index", header : "Index" , fillspace : 1 },
        { editor : "text", id : "br_unit", header : "Unit", fillspace : 0.8},
        { id : "br_child_prc", template: childTotal, header : "ChildPrice", fillspace : 1.5},
        { id : "br_mtw_prc", template: sumTotal, header : "MTWPrice", fillspace : 1.5 },
        { id : "br_total_prc", header : "Total", fillspace : 1.5, template: priceTotal},
        { id : "br_menu",  header : "", fillspace : 0.1  }
      ],
      view : "treetable",
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
      on : {
        onAfterSelect:function(){$$("datatable_mtw_main_breakdown").refreshColumns()},
        onAfterEditStop: function () {$$("datatable_mtw_main_breakdown").refreshColumns();}
        
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
          cols : [
            
              { view:"textarea" , label:"Description", labelPosition:"top", gravity:5 },
        
              {
                view : "carousel",
                css : "webix_dark",
               
                gravity:5,
                cols : [
                  { view : "template", template : "View A" },
                  { view : "template", template : "View B" }
                ]
                
              }
            ],
          height : 200
            
          },
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Materials, Tools, Workers", view : "label" },
                  {
                    type : "iconButton",
                    icon : "shopping-cart",
                    width : 31,
                    view : "button",
                    click : show_mtw_cart
                  },
                  { click : show_mtw_search, view : "button", type : "iconButton", icon : "search", width : 28 }
                ]
              },
              {
                view : "datatable",
                minHeight : 300,
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
                  { editor : "text", id : "mtw_unitprice", header : "Price", fillspace : 1.5, footer:"Total", format : webix.i18n.priceFormat },
                  { editor : "text", id : "mtw_totalprice", header : "Total", fillspace : 1.5, format : webix.i18n.priceFormat, math : "[$r,mtw_index] * [$r,mtw_unitprice]", footer:{content:"summColumn"}}
                ]
                
                
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
             
        { click : back_to_details, view : "button", type : "iconButtonTop", icon : "arrow-left", width : 24 },
        { label : "Breakdown's Cart", view : "label" }

      ]
    },
    {
      
      columns : [
        {
          id : "cart_item",
          header : "Item",
          fillspace : 2.5,
          template : "{common.treetable()} #value#"
        },
        { id : "cart_index", header : "Index", fillspace : 0.7 },
        { id : "cart_unit", header : "Unit", fillspace : 1 },
        { id : "cart_child", header : "Child", fillspace : 1 },
        { id : "cart_mtw", header : "MTW", fillspace : 1 },
        { id : "cart_total", header : "Total Price", fillspace : 1.5 },
        { id : "cart_menu", header : "", fillspace : 0.2 }
      ],
      view : "treetable",
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
        { click : back_to_project_breakdown, view : "button", type : "iconButton", icon : "arrow-left", width : 28 },      
        { label : "Item's Cart", view : "label" }
      ]
    },
    {
      
      autoConfig : true,
      view : "datatable",
      borderless : true,
      
      columns : [
        { id : "mc_sku", header : "SKU", fillspace : 1 },
        { id : "mc_item", header : "Item", fillspace : 2 },
        { id : "mc_index", header : "Index", fillspace : 0.7 },
        { id : "mc_unit", header : "Unit", fillspace : 1 },
        { id : "mc_unitprice", header : "Unit Price", fillspace : 1.5 },
        { id : "mc_totalprice", header : "Total Price", fillspace : 1.8 }
      ],
      drag : true
    }
  ]
  
};
