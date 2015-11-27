var view_add_mtw__search = 
{
  
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
        { click : back_to_main, view : "button", type : "iconButtonTop", icon : "arrow-left", width : 35 },
        { label : "Search", view : "search" , color : "white"}
      ]
    },
    {
      
      view : "datatable",
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
          {view:"text", value:"" , readonly: true},
          {
          cols : [
            
              { view:"textarea" , gravity:5, readonly: true},
        
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
          {view:"resizer"},
          
          
        ]
      }
    }
  ]
};
