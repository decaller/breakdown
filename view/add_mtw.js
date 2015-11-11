var view_add_mtw__search = 
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
      url : "demo->table",
      autoConfig : true,
      view : "datatable",
      columns : [
        { id : "sku", header : "SKU", width : 100 },
        { id : "item", header : "Item", fillspace : true, minWidth : 100 },
        { id : "index", header : "Index", width : 55 },
        { id : "unit", header : "Unit", width : 65 },
        { id : "price", header : "Price", width : 100 }
      ]
    }
  ]
};

var view_add_mtw__search_details =
{
  type : "line",
  rows : [
    { 
      view : "toolbar",
      borderless : true,
      elements : [
        { label : "MTW Details", view : "label", width : 300  }
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
                  { id : "dimension", header : "Dimension", width : 80, $id : "dimension" },
                  { id : "index", header : "Index", width : 55, $id : "index" },
                  { id : "unit", header : "Unit", width : 65, $id : "unit" },
                  { id : "source", header : "Source", $id : "source", fillspace : true }
                ],
                drag : false
              }
            ]
          },
          
        ]
      }
    }
  ]
};
