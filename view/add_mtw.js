var view_add_mtw__search = 
{
  
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
        { click : back_to_main, view : "button", type : "iconButton", icon : "arrow-left", width : 28 },
        { label : "Search", view : "search" , color : "white"}
      ]
    },
    {
      url : "demo->table",
      
      view : "datatable",
      id : "datatable_search_mtw",
      data : search_mtw_data,
      columns : [
        { id : "mtw_sku", header : "SKU", fillspace : 1 },
        { id : "mtw_item", header : "Item", fillspace :2 },
        { id : "mtw_index", header : "Index", fillspace : 0.7 },
        { id : "mtw_unit", header : "Unit", fillspace : 1 },
        { id : "mtw_unitprice", header : "Unit Price", fillspace : 1.5 },
                  
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
             
                ]
              },
              {
                
                
                view : "datatable",
                navigation : false,
                height : 250,
                columns : [
                  { id : "dt_dimension", header : "Dimension", fillspace : 1.2},
                  { id : "dt_index", header : "Index", fillspace : 1},
                  { id : "dt_unit", header : "Unit", fillspace : 1},
                  { id : "dt_source", header : "Source", fillspace : 1.2},
                  { id : "dt_use", header : "Use", fillspace : 0.5 }
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
