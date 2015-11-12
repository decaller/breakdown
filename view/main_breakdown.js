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
        { view : "button", type : "iconButtonTop", icon : "plus", width : 24},
        { view : "button", type : "iconButtonTop", icon : "child", width : 24},
        { click : show_breakdown_cart, view : "button", type:"iconButtonTop", icon : "shopping-cart", width : 24},
        { click : search_breakdown, view : "button", type : "iconButtonTop", icon : "search", width : 24}
      ]
    }
    ,
    {
      columns : [
        {
          id : "item",
          header : "Item",
          gravity : 2,
          template : "{common.treetable()} #value#"
        },
        { id : "index", header : "Index", gravity : 1 },
        { id : "unit", header : "Unit", gravity : 1 },
        { id : "child", header : "Child", gravity : 1 },
        { id : "mtw", header : "MTW", gravity : 1 },
        { id : "total", header : "Total", gravity : 1.5 },
        { id : "menu", header : "", gravity : 0.2 }
      ],
      view : "treetable",
      borderless : true,
      
      editable : true,
      drag : true,
      on : {onBeforeDrop:function(context){context.parent = context.target; context.index = -1;}}
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
        { label : "Details", view : "label", width : 300 }
        
      ]
    },
    {
      view : "scrollview",
      scroll : "y",
      body : {
        rows : [
          {
            view : "carousel",
            css : "webix_dark",
            cols : [
              { view : "template", template : "View A" },
              { view : "template", template : "View B" }
            ],
            height : 200
          },
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Dimension", view : "label" },
                  { view : "button", type : "iconButton", icon : "plus", width : 28 }
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                navigation : false,
                height : 250,
                columns : [
                  { id : "dimension", header : "Dimension", gravity : 1.4, $id : "dimension" },
                  { id : "index", header : "Index", gravity : 1, $id : "index" },
                  { id : "unit", header : "Unit", gravity : 1, $id : "unit" },
                  { id : "source", header : "Source", gravity : 1, $id : "source" },
                  { id : "use", header : "Use", $id : "use", gravity : 1 }
                ],
                drag : false
              }
            ]
          },
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Items", view : "label" },
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
                
                autoConfig : true,
                view : "datatable",
                height : 250,
                columns : [
                  { id : "sku", header : "SKU", gravity : 1 },
                  { id : "item", header : "Item", fillspace : true, minWidth : 105 },
                  { id : "index", header : "Index", gravity : 1.1 },
                  { id : "unit", header : "Unit", gravity : 1 },
                  { id : "unitprice", header : "Unit Price", gravity : 1.7 },
                  { id : "totalprice", header : "Total Price", gravity : 1.4 }
                ],
                drag : true
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
          id : "item",
          header : "Item",
          gravity : 2,
          template : "{common.treetable()} #value#"
        },
        { id : "index", header : "Index", gravity : 1 },
        { id : "unit", header : "Unit", gravity : 1 },
        { id : "child", header : "Child", gravity : 1 },
        { id : "mtw", header : "MTW", gravity : 1 },
        { id : "total", header : "Total Price", gravity : 1.5 },
        { id : "menu", header : "", gravity : 0.2 }
      ],
      view : "treetable",
      drag : true
    }
  ],
  borderless : false,
  hidden : true
 
};

var view_main_breakdown__items_cart =
{
  id : "items_cart",
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
        { id : "sku", header : "SKU", gravity : 1.2 },
        { id : "item", header : "Item", fillspace : true, minWidth : 105 },
        { id : "index", header : "Index", gravity : 1. },
        { id : "unit", header : "Unit", gravity : 1 },
        { id : "unitprice", header : "Unit Price", gravity : 1.5 },
        { id : "totalprice", header : "Total Price", gravity : 1.5 }
      ],
      drag : true
    }
  ]
  
};
