var view_add_breakdown__search = 
{
  
  type : "line",
  rows : [
    {
      view : "toolbar",
      elements : [
        { click : back_to_main, view : "button", type : "iconButton", icon : "arrow-left", width : 28 },
        { label : "Search", view : "search" , color : "white"}
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
        { id : "unit", header : "Unit", width : 65 },
        { id : "child", header : "Child", width : 65 },
        { id : "mtw", header : "MTW", width : 65 },
        { id : "total", header : "Total Price", width : 100 },
        { id : "menu", header : "", width : 35 }
      ],
      view : "treetable",
      url : "demo->tree",
      
      on : {}
    }
  ]
};

var view_add_breakdown__search_details = 
{
  type : "line",
  rows : [
    { 
      view : "toolbar",
      borderless : true,
      elements : [
        { label : "Breakdown Item's Detail", view : "label", width : 300  }
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
                  
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                navigation : false,
                height : 250,
                columns : [
                  { id : "dimension", header : "Dimension", width : 100, $id : "dimension" },
                  { id : "index", header : "Index", width : 70, $id : "index" },
                  { id : "unit", header : "Unit", width : 65, $id : "unit" },
                  { id : "source", header : "Source", width : 70, $id : "source" },
                  { id : "use", header : "Use", $id : "use", fillspace : true }
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
                  
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                height : 250,
                columns : [
                  { id : "sku", header : "SKU", width : 100 },
                  { id : "item", header : "Item", fillspace : true, minWidth : 100 },
                  { id : "index", header : "Index", width : 70 },
                  { id : "unit", header : "Unit", width : 65 },
                  { id : "unitprice", header : "Unit Price", width : 120 },
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