var view_main_breakdown__project_breakdown =
{
  type : "line",
  borderless : true,
  rows : [
    {
      view : "toolbar",
      borderless : true,
      css:"mdl-layout__header-row",
      elements : [
        { label : "Project's Breakdown", view : "label" },
        { view : "button", type : "iconButtonTop", icon : "plus", width : 35 },
        { view : "button", type : "iconButtonTop", icon : "child", width : 35 },
        {
          view : "toggle",
          icon : "shopping-cart",
          width : 35
        },
        { view : "button", type : "iconButtonTop", icon : "search", width : 35 }
      ]
    }
    ,
    {
      columns : [
        {
          id : "item",
          header : "Item",
          fillspace : true,
          template : "{common.treetable()} #value#"
        },
        { id : "index", header : "Index Unit", width : 65 },
        { id : "total", header : "Total Price", width : 100 },
        { id : "menu", header : "", width : 35 }
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
  type : "line",
  rows : [
    { label : "Label", view : "label", height : 40 },
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
                  { id : "dimension", header : "Dimension", width : 80, $id : "dimension" },
                  { id : "index", header : "Index", width : 55, $id : "index" },
                  { id : "unit", header : "Unit", width : 65, $id : "unit" },
                  { id : "source", header : "Source", $id : "source", fillspace : true }
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
                    view : "toggle",
                    
                  },
                  { view : "button", type : "iconButton", icon : "search", width : 28 }
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                height : 250,
                columns : [
                  { id : "sku", header : "SKU", width : 100 },
                  { id : "item", header : "Item", fillspace : true, minWidth : 100 },
                  { id : "index", header : "Index", width : 55 },
                  { id : "unit", header : "Unit", width : 65 },
                  { id : "unitprice", header : "Unit Price", width : 100 },
                  { id : "totalprice", header : "Total Price", width : 100 }
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
  type : "line",
  rows : [
    {
      view : "toolbar",
      elements : [
        { label : "Breakdown's Cart", view : "label" }
      ]
    },
    {
      
      columns : [
        {
          id : "item",
          header : "Item",
          fillspace : true,
          template : "{common.treetable()} #value#"
        },
        { id : "index", header : "Index Unit", width : 65 },
        { id : "total", header : "Total Price", width : 100 },
        { id : "menu", header : "", width : 35 }
      ],
      view : "treetable",
      drag : true
    }
  ],
  borderless : false,
  hidden : true,
  id : "cart_add_breakdown"
};

var view_main_breakdown__items_cart =
{
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
        { label : "Item's Cart", view : "label" }
      ]
    },
    {
      
      autoConfig : true,
      view : "datatable",
      borderless : true,
      height : 250,
      columns : [
        { id : "sku", header : "SKU", width : 100 },
        { id : "item", header : "Item", fillspace : true, minWidth : 100 },
        { id : "index", header : "Index", width : 55 },
        { id : "unit", header : "Unit", width : 65 },
        { id : "unitprice", header : "Unit Price", width : 100 },
        { id : "totalprice", header : "Total Price", width : 100 }
      ],
      drag : true
    }
  ],
  id : "cart_add_mtw"
};
